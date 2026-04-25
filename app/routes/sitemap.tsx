import { decisionesOrdenadas, ministerios, documentos, statsByMinisterio } from "~/lib/store";

export async function loader({ request }: { request: Request }) {
  const origin = new URL(request.url).origin;
  const urls: { loc: string; lastmod?: string }[] = [
    { loc: `${origin}/` },
    { loc: `${origin}/decisiones` },
    { loc: `${origin}/promesas` },
    { loc: `${origin}/ministerios` },
    { loc: `${origin}/documentos` },
    { loc: `${origin}/doble-estandar` },
    { loc: `${origin}/mentiras` },
    { loc: `${origin}/sobre` },
  ];

  for (const m of ministerios) {
    if (statsByMinisterio(m.slug).programas > 0) {
      urls.push({ loc: `${origin}/ministerios/${m.slug}` });
    }
  }
  for (const d of decisionesOrdenadas()) {
    urls.push({ loc: `${origin}/decisiones/${d.slug}`, lastmod: d.fecha });
  }
  for (const doc of documentos) {
    urls.push({ loc: `${origin}/documentos/${doc.slug}`, lastmod: doc.fecha });
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u.loc}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ""}</url>`).join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=600",
    },
  });
}
