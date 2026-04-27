import {
  decisionesOrdenadas,
  ministerios,
  documentos,
  statsByMinisterio,
  alertasByMinisterio,
} from "~/lib/store";
import { RETRACTACIONES } from "~/data/retractaciones";
import { MENTIRAS } from "~/data/mentiras";
import { CUNAS } from "~/data/cunas";
import { CASOS_DOBLE_ESTANDAR, MENTIRAS_CONTRA_BORIC } from "~/data/doble-estandar";
import { SEREMIS } from "~/data/seremis";
import { CASOS_VALENZUELA } from "~/data/valenzuela";

/**
 * /sitemap.xml — protocolo sitemap 0.9 con todas las rutas estaticas
 * y dinamicas. Lo lee Google Search Console, Bing y otros crawlers.
 * Incluye anchors a items individuales en paginas indice para que GSC
 * los cuente como URLs descubribles.
 */
export async function loader({ request }: { request: Request }) {
  const origin = new URL(request.url).origin;
  const today = new Date().toISOString().slice(0, 10);

  type Entry = {
    loc: string;
    lastmod?: string;
    changefreq?: string;
    priority?: string;
  };
  const urls: Entry[] = [
    { loc: `${origin}/`, lastmod: today, changefreq: "daily", priority: "1.0" },
    { loc: `${origin}/cronologia`, lastmod: today, changefreq: "daily", priority: "0.9" },
    { loc: `${origin}/retractaciones`, lastmod: today, changefreq: "weekly", priority: "0.9" },
    { loc: `${origin}/mentiras`, lastmod: today, changefreq: "weekly", priority: "0.9" },
    { loc: `${origin}/doble-estandar`, lastmod: today, changefreq: "weekly", priority: "0.9" },
    { loc: `${origin}/valenzuela`, lastmod: today, changefreq: "weekly", priority: "0.9" },
    { loc: `${origin}/seremis`, lastmod: today, changefreq: "weekly", priority: "0.8" },
    { loc: `${origin}/promesas`, lastmod: today, changefreq: "weekly", priority: "0.9" },
    { loc: `${origin}/decisiones`, lastmod: today, changefreq: "weekly", priority: "0.9" },
    { loc: `${origin}/programas`, lastmod: today, changefreq: "weekly", priority: "0.7" },
    { loc: `${origin}/ministerios`, lastmod: today, changefreq: "weekly", priority: "0.7" },
    { loc: `${origin}/documentos`, lastmod: today, changefreq: "weekly", priority: "0.6" },
    { loc: `${origin}/sobre`, changefreq: "monthly", priority: "0.4" },
  ];

  for (const m of ministerios) {
    if (statsByMinisterio(m.slug).programas > 0 || alertasByMinisterio(m.slug).length > 0) {
      urls.push({
        loc: `${origin}/ministerios/${m.slug}`,
        lastmod: today,
        changefreq: "weekly",
        priority: "0.7",
      });
    }
  }
  for (const d of decisionesOrdenadas()) {
    urls.push({
      loc: `${origin}/decisiones/${d.slug}`,
      lastmod: d.fecha,
      changefreq: "monthly",
      priority: "0.7",
    });
  }
  for (const doc of documentos) {
    urls.push({
      loc: `${origin}/documentos/${doc.slug}`,
      lastmod: doc.fecha,
      changefreq: "monthly",
      priority: "0.5",
    });
  }

  // Anchors a items individuales en paginas indice
  for (const r of RETRACTACIONES) {
    urls.push({
      loc: `${origin}/retractaciones#${r.slug}`,
      lastmod: r.fecha,
      changefreq: "monthly",
      priority: "0.6",
    });
  }
  for (const m of MENTIRAS) {
    urls.push({
      loc: `${origin}/mentiras#${m.slug}`,
      lastmod: m.fechaDicho,
      changefreq: "monthly",
      priority: "0.6",
    });
  }
  for (const c of CUNAS) {
    urls.push({
      loc: `${origin}/mentiras#${c.slug}`,
      lastmod: c.fechaDicho,
      changefreq: "monthly",
      priority: "0.6",
    });
  }
  for (const ds of CASOS_DOBLE_ESTANDAR) {
    urls.push({
      loc: `${origin}/doble-estandar#${ds.slug}`,
      lastmod: ds.fecha,
      changefreq: "monthly",
      priority: "0.6",
    });
  }
  for (const m of MENTIRAS_CONTRA_BORIC) {
    urls.push({
      loc: `${origin}/doble-estandar#${m.slug}`,
      lastmod: m.fecha,
      changefreq: "monthly",
      priority: "0.6",
    });
  }
  for (const v of CASOS_VALENZUELA) {
    urls.push({
      loc: `${origin}/valenzuela#${v.slug}`,
      lastmod: v.fechaColumna,
      changefreq: "monthly",
      priority: "0.6",
    });
  }
  for (const s of SEREMIS) {
    urls.push({
      loc: `${origin}/seremis#${(s.nombre + "-" + s.region).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`,
      lastmod: s.fecha,
      changefreq: "monthly",
      priority: "0.5",
    });
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) =>
      `  <url>\n    <loc>${u.loc}</loc>${u.lastmod ? `\n    <lastmod>${u.lastmod}</lastmod>` : ""}${
        u.changefreq ? `\n    <changefreq>${u.changefreq}</changefreq>` : ""
      }${u.priority ? `\n    <priority>${u.priority}</priority>` : ""}\n  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=600",
    },
  });
}
