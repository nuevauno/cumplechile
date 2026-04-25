#!/usr/bin/env node
/**
 * scripts/gsc.mjs — CLI minimo para auditar Google Search Console con
 * un service account. Maneja JWT firmado con RS256, exchange OAuth2 y
 * llamadas a la Search Console API.
 *
 * Uso:
 *   GSC_KEY_FILE=$HOME/Downloads/mi-nuevauno-XXXX.json node scripts/gsc.mjs sites
 *   GSC_KEY_FILE=... node scripts/gsc.mjs sitemaps https://chilecumple.com/
 *   GSC_KEY_FILE=... node scripts/gsc.mjs query https://chilecumple.com/ --days 7
 *   GSC_KEY_FILE=... node scripts/gsc.mjs inspect https://chilecumple.com/ /retractaciones
 *
 * Verificacion del service account como owner via Site Verification API:
 *   GSC_KEY_FILE=... node scripts/gsc.mjs get-verify-token chilecumple.com
 *   ... agregar el TXT al DNS ...
 *   GSC_KEY_FILE=... node scripts/gsc.mjs verify chilecumple.com
 *
 * No imprime la private_key. No commitea el JSON (gitignored).
 */
import { readFileSync } from "node:fs";
import { createSign } from "node:crypto";

const KEY_PATH = process.env.GSC_KEY_FILE;
if (!KEY_PATH) {
  console.error("Falta GSC_KEY_FILE. Ej: GSC_KEY_FILE=$HOME/Downloads/mi-nuevauno-XXXX.json");
  process.exit(1);
}

const cred = JSON.parse(readFileSync(KEY_PATH, "utf8"));
// Pedimos varios scopes en una sola key — la API los respeta segun el endpoint.
const SCOPE = [
  "https://www.googleapis.com/auth/webmasters",
  "https://www.googleapis.com/auth/siteverification",
].join(" ");

function b64url(input) {
  const b = Buffer.isBuffer(input) ? input : Buffer.from(input);
  return b.toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

async function getAccessToken() {
  const now = Math.floor(Date.now() / 1000);
  const header = b64url(JSON.stringify({ alg: "RS256", typ: "JWT", kid: cred.private_key_id }));
  const payload = b64url(JSON.stringify({
    iss: cred.client_email,
    scope: SCOPE,
    aud: cred.token_uri,
    iat: now,
    exp: now + 3600,
  }));
  const data = `${header}.${payload}`;
  const signer = createSign("RSA-SHA256");
  signer.update(data);
  signer.end();
  const sig = b64url(signer.sign(cred.private_key));
  const jwt = `${data}.${sig}`;

  const res = await fetch(cred.token_uri, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });
  if (!res.ok) throw new Error(`Token exchange falló: ${res.status} ${await res.text()}`);
  const json = await res.json();
  return json.access_token;
}

async function gsc(path, init = {}) {
  const token = await getAccessToken();
  const res = await fetch(`https://www.googleapis.com/webmasters/v3${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      ...init.headers,
    },
  });
  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`${res.status} ${path}\n${txt}`);
  }
  if (res.status === 204) return {};
  const txt = await res.text();
  if (!txt) return {};
  try {
    return JSON.parse(txt);
  } catch {
    return {};
  }
}

async function searchConsoleApi(path, init = {}) {
  const token = await getAccessToken();
  const res = await fetch(`https://searchconsole.googleapis.com/v1${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      ...init.headers,
    },
  });
  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`${res.status} ${path}\n${txt}`);
  }
  return res.json();
}

async function siteVerification(path, init = {}) {
  const token = await getAccessToken();
  const res = await fetch(`https://www.googleapis.com/siteVerification/v1${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      ...init.headers,
    },
  });
  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`${res.status} ${path}\n${txt}`);
  }
  return res.json();
}

const [, , cmd, ...args] = process.argv;

async function main() {
  switch (cmd) {
    case "sites": {
      const r = await gsc("/sites");
      const list = r.siteEntry ?? [];
      if (list.length === 0) {
        console.log("Sin sitios accesibles. Agregá el service account email como usuario en GSC:");
        console.log("  ", cred.client_email);
        return;
      }
      console.log("Sitios accesibles para", cred.client_email);
      console.log("-".repeat(72));
      for (const s of list) {
        console.log(`  ${s.permissionLevel.padEnd(20)} ${s.siteUrl}`);
      }
      return;
    }
    case "sitemaps": {
      const site = args[0];
      if (!site) throw new Error("uso: sitemaps <siteUrl>");
      const r = await gsc(`/sites/${encodeURIComponent(site)}/sitemaps`);
      const list = r.sitemap ?? [];
      console.log(`Sitemaps de ${site}`);
      console.log("-".repeat(72));
      for (const sm of list) {
        const errors = sm.errors ?? 0;
        const warnings = sm.warnings ?? 0;
        const submitted = sm.contents?.[0]?.submitted ?? "?";
        const indexed = sm.contents?.[0]?.indexed ?? "?";
        console.log(
          `  ${sm.path}\n    submitted: ${submitted} | indexed: ${indexed} | errors: ${errors} | warnings: ${warnings}\n    lastSubmitted: ${sm.lastSubmitted ?? "—"} | lastDownloaded: ${sm.lastDownloaded ?? "—"}`
        );
      }
      return;
    }
    case "submit-sitemap": {
      const site = args[0];
      const feedpath = args[1];
      if (!site || !feedpath) throw new Error("uso: submit-sitemap <siteUrl> <feedpath>");
      await gsc(`/sites/${encodeURIComponent(site)}/sitemaps/${encodeURIComponent(feedpath)}`, {
        method: "PUT",
      });
      console.log(`Sitemap enviado: ${feedpath}`);
      return;
    }
    case "query": {
      const site = args[0];
      const days = Number(args[args.indexOf("--days") + 1] || 28) || 28;
      if (!site) throw new Error("uso: query <siteUrl> [--days N]");
      const end = new Date();
      const start = new Date();
      start.setDate(end.getDate() - days);
      const fmt = (d) => d.toISOString().slice(0, 10);
      const r = await gsc(`/sites/${encodeURIComponent(site)}/searchAnalytics/query`, {
        method: "POST",
        body: JSON.stringify({
          startDate: fmt(start),
          endDate: fmt(end),
          dimensions: ["query"],
          rowLimit: 25,
        }),
      });
      const rows = r.rows ?? [];
      console.log(`Top queries ${fmt(start)} → ${fmt(end)} (${site})`);
      console.log("-".repeat(72));
      console.log("query".padEnd(40), "clicks", "impr".padStart(7), "ctr".padStart(7), "pos".padStart(7));
      for (const row of rows) {
        const q = (row.keys[0] || "").slice(0, 38);
        console.log(
          q.padEnd(40),
          String(row.clicks ?? 0).padStart(6),
          String(row.impressions ?? 0).padStart(7),
          ((row.ctr ?? 0) * 100).toFixed(1).padStart(6) + "%",
          (row.position ?? 0).toFixed(1).padStart(7)
        );
      }
      return;
    }
    case "inspect": {
      const site = args[0];
      const url = args[1];
      if (!site || !url) throw new Error("uso: inspect <siteUrl> <pageUrl>");
      const inspectionUrl = url.startsWith("http") ? url : new URL(url, site).toString();
      const r = await searchConsoleApi("/urlInspection/index:inspect", {
        method: "POST",
        body: JSON.stringify({
          inspectionUrl,
          siteUrl: site,
        }),
      });
      console.log(JSON.stringify(r, null, 2));
      return;
    }
    case "get-verify-token": {
      // Pide el token de verificacion DNS_TXT para un dominio. La API
      // tipo INET_DOMAIN espera el dominio bare (sin esquema).
      const domain = (args[0] || "").replace(/^https?:\/\//, "").replace(/\/$/, "");
      if (!domain) throw new Error("uso: get-verify-token <dominio> (ej: chilecumple.com)");
      const r = await siteVerification("/token", {
        method: "POST",
        body: JSON.stringify({
          site: { type: "INET_DOMAIN", identifier: domain },
          verificationMethod: "DNS_TXT",
        }),
      });
      console.log("Token de verificación para", domain);
      console.log("-".repeat(72));
      console.log("\nAgregá este TXT al DNS de", domain, ":");
      console.log("\n  Tipo:      TXT");
      console.log("  Nombre:   @  (o", domain + ")");
      console.log("  Contenido:", r.token);
      console.log("\nEspera 1-2 minutos a que propague, después corré:");
      console.log(`  GSC_KEY_FILE=${process.env.GSC_KEY_FILE} node scripts/gsc.mjs verify ${domain}`);
      return;
    }
    case "verify": {
      // Llama insert para que Google verifique el TXT y registre al SA
      // como propietario de la propiedad de tipo INET_DOMAIN.
      const domain = (args[0] || "").replace(/^https?:\/\//, "").replace(/\/$/, "");
      if (!domain) throw new Error("uso: verify <dominio>");
      const r = await siteVerification("/webResource?verificationMethod=DNS_TXT", {
        method: "POST",
        body: JSON.stringify({
          site: { type: "INET_DOMAIN", identifier: domain },
        }),
      });
      console.log("Verificación exitosa.");
      console.log("Owners:", r.owners.join(", "));
      // Tras verificar, agregamos automaticamente la propiedad sc-domain
      // para que aparezca en el inventario del SA en Search Console.
      const scDomain = `sc-domain:${domain}`;
      console.log(`\nAgregando ${scDomain} al inventario del SA...`);
      await gsc(`/sites/${encodeURIComponent(scDomain)}`, { method: "PUT" });
      console.log(`Listo. ${scDomain} ya aparece en sites.`);
      return;
    }
    case "add-site": {
      const site = args[0];
      if (!site) throw new Error("uso: add-site <siteUrl|sc-domain:dominio>");
      await gsc(`/sites/${encodeURIComponent(site)}`, { method: "PUT" });
      console.log(`Agregado: ${site}`);
      return;
    }
    case "sitemap-detail": {
      const site = args[0];
      const feedpath = args[1];
      if (!site || !feedpath) throw new Error("uso: sitemap-detail <site> <feedpath>");
      const r = await gsc(`/sites/${encodeURIComponent(site)}/sitemaps/${encodeURIComponent(feedpath)}`);
      console.log(JSON.stringify(r, null, 2));
      return;
    }
    case "audit": {
      // Auditoria rapida: lista cobertura per-URL para las URLs principales
      // del sitemap. Reporta no-indexadas con razon.
      const site = args[0];
      const limit = Number(args[args.indexOf("--limit") + 1] || 10) || 10;
      if (!site) throw new Error("uso: audit <site> [--limit N]");
      // Tomamos URLs del sitemap principal
      const sitemaps = await gsc(`/sites/${encodeURIComponent(site)}/sitemaps`);
      const sitemapPath = sitemaps.sitemap?.[0]?.path;
      if (!sitemapPath) {
        console.log("Sin sitemap submitted. Submit uno primero.");
        return;
      }
      console.log(`Sitemap: ${sitemapPath}`);
      // Fetch del XML — si es sitemap-index, bajamos un nivel
      async function extractUrls(url, depth = 0) {
        if (depth > 3) return [];
        const xmlRes = await fetch(url);
        const xml = await xmlRes.text();
        const isIndex = xml.includes("<sitemapindex");
        const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
        if (!isIndex) return locs;
        const all = [];
        for (const subUrl of locs) {
          all.push(...(await extractUrls(subUrl, depth + 1)));
        }
        return all;
      }
      const allUrls = await extractUrls(sitemapPath);
      const urls = allUrls.slice(0, limit);
      console.log(`Total URLs en el sitemap (recursivo): ${allUrls.length}`);
      console.log(`Inspeccionando ${urls.length} URLs...\n`);
      for (const url of urls) {
        try {
          const r = await searchConsoleApi("/urlInspection/index:inspect", {
            method: "POST",
            body: JSON.stringify({ inspectionUrl: url, siteUrl: site }),
          });
          const v = r.inspectionResult?.indexStatusResult ?? {};
          const m = r.inspectionResult?.mobileUsabilityResult ?? {};
          const coverageState = v.coverageState ?? "unknown";
          const verdict = v.verdict ?? "?";
          const mobileVerdict = m.verdict ?? "?";
          const lastCrawl = v.lastCrawlTime ?? "—";
          const robots = v.robotsTxtState ?? "—";
          const indexing = v.indexingState ?? "—";
          const flag = verdict === "PASS" ? "✓" : verdict === "PARTIAL" ? "▲" : verdict === "FAIL" ? "✗" : "?";
          console.log(`${flag} ${url}`);
          console.log(`   verdict: ${verdict} | coverage: ${coverageState}`);
          console.log(`   indexing: ${indexing} | robots: ${robots} | mobile: ${mobileVerdict}`);
          console.log(`   lastCrawl: ${lastCrawl}`);
          if (v.referringUrls) console.log(`   referring: ${v.referringUrls.length} url(s)`);
          if (v.googleCanonical && v.userCanonical && v.googleCanonical !== v.userCanonical) {
            console.log(`   ⚠ canonical mismatch: user=${v.userCanonical} google=${v.googleCanonical}`);
          }
        } catch (e) {
          console.log(`✗ ${url}\n   ERROR: ${e.message.split("\n")[0]}`);
        }
      }
      return;
    }
    default: {
      console.log(`Comandos:
  sites                                     listar propiedades accesibles
  sitemaps <site>                           estado del sitemap
  submit-sitemap <site> <feedpath>          enviar sitemap
  query <site> [--days N]                   top queries
  inspect <site> <url>                      inspeccionar URL especifica
  get-verify-token <dominio>                pedir TXT para verificar dominio
  verify <dominio>                          confirmar verificacion DNS_TXT`);
      console.log(`\nService account: ${cred.client_email}`);
    }
  }
}

main().catch((e) => {
  console.error("ERROR:", e.message);
  process.exit(1);
});
