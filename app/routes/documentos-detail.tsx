import { Link } from "react-router";
import type { Route } from "./+types/documentos-detail";
import { documentoBySlug, formatFechaLarga, decisiones as allDec, ministerioBySlug } from "~/lib/store";

export function meta({ data }: Route.MetaArgs) {
  if (!data) return [{ title: "Documento · Cumple Chile" }];
  return [
    { title: `${data.documento.titulo} — Cumple Chile` },
    { name: "description", content: data.documento.resumen.slice(0, 180) },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  const documento = documentoBySlug(params.slug!);
  if (!documento) throw new Response("Documento no encontrado", { status: 404 });
  const decisionesRel = allDec.filter((d) => d.documentoSlugs.includes(documento.slug));
  return { documento, decisionesRel };
}

export default function DocumentoDetail({ loaderData }: Route.ComponentProps) {
  const { documento, decisionesRel } = loaderData;
  return (
    <article className="max-w-4xl mx-auto px-6 lg:px-10 py-12 lg:py-16">
      <Link to="/documentos" className="text-xs uppercase tracking-[0.18em] text-[--color-ink-muted] hover:text-[--color-cl-red]">
        ← Documentos
      </Link>

      <p className="mt-6 text-[10px] uppercase tracking-[0.22em] text-[--color-ink-muted] num">
        {documento.tipo} · {formatFechaLarga(documento.fecha)} · {documento.emisor}
        {documento.destinatario && ` → ${documento.destinatario}`}
      </p>
      <h1 className="display text-[clamp(2rem,5.5vw,4rem)] leading-[0.95] mt-3">
        {documento.titulo}
      </h1>

      <section className="mt-10">
        <h2 className="text-xs tracking-[0.22em] uppercase text-[--color-ink-muted]">Resumen legible</h2>
        <div className="mt-3 prose prose-lg max-w-none">
          {documento.resumen.split("\n\n").map((p, i) => (
            <p key={i} className="text-base md:text-lg leading-relaxed">{p}</p>
          ))}
        </div>
      </section>

      {documento.citas && documento.citas.length > 0 && (
        <section className="mt-12 rule-thick pt-2">
          <h2 className="display text-2xl mb-6">Citas textuales</h2>
          <div className="space-y-6">
            {documento.citas.map((cita, i) => (
              <blockquote
                key={i}
                className="border-l-4 border-[--color-cl-red] pl-6 py-1"
              >
                <p className="text-lg md:text-xl leading-relaxed font-medium" style={{ fontFamily: "var(--font-serif)" }}>
                  «{cita.texto}»
                </p>
                {cita.pagina && (
                  <cite className="block mt-2 text-xs uppercase tracking-[0.18em] text-[--color-ink-muted] not-italic">
                    Pagina {cita.pagina} del documento original
                  </cite>
                )}
              </blockquote>
            ))}
          </div>
        </section>
      )}

      {documento.pdfPath && (
        <section className="mt-12 rule pt-4">
          <h2 className="text-xs tracking-[0.22em] uppercase text-[--color-ink-muted] mb-3">Documento original</h2>
          <div className="border border-[--color-ink] bg-[--color-paper-dark] aspect-[3/4] max-h-[800px]">
            <iframe
              src={documento.pdfPath}
              title={documento.titulo}
              className="w-full h-full"
            />
          </div>
          <a
            href={documento.pdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-xs uppercase tracking-[0.18em] font-bold hover:text-[--color-cl-red]"
            download
          >
            Descargar PDF →
          </a>
        </section>
      )}

      {documento.urlOriginal && !documento.pdfPath && (
        <section className="mt-12 rule pt-4">
          <a
            href={documento.urlOriginal}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold underline underline-offset-4 decoration-2 hover:text-[--color-cl-red]"
          >
            Ver documento original →
          </a>
        </section>
      )}

      {decisionesRel.length > 0 && (
        <section className="mt-16 rule-thick pt-2">
          <h2 className="display text-2xl mb-6">Decisiones que motivo</h2>
          <ul className="space-y-4">
            {decisionesRel.map((d) => {
              const ministerio = d.ministerioSlug ? ministerioBySlug(d.ministerioSlug) : null;
              return (
                <li key={d.slug}>
                  <Link to={`/decisiones/${d.slug}`} className="block group">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-[--color-ink-muted] num">
                      {formatFechaLarga(d.fecha)}{ministerio && ` · ${ministerio.abrev || ministerio.nombre}`}
                    </p>
                    <h3 className="display text-xl mt-1 group-hover:text-[--color-cl-red] transition-colors">
                      {d.titulo}
                    </h3>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </article>
  );
}
