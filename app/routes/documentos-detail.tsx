import { Link } from "react-router";
import type { Route } from "./+types/documentos-detail";
import { documentoBySlug, formatFechaLarga, decisiones as allDec, ministerioBySlug } from "~/lib/store";
import { createMeta } from "~/lib/meta";
import { ShareButton } from "~/components/ShareButton";

export function meta({ data }: Route.MetaArgs) {
  if (!data) return createMeta({ title: "Documento · Chile Cumple", path: "/documentos" });
  return createMeta({
    title: `${data.documento.titulo} — Chile Cumple`,
    description: data.documento.resumen.slice(0, 180),
    path: `/documentos/${data.documento.slug}`,
    type: "article",
  });
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
    <article className="max-w-3xl mx-auto px-5 sm:px-8 pt-12 pb-24">
      <Link to="/documentos" className="text-sm text-[--color-fg-3] hover:text-[--color-fg] inline-flex items-center gap-1.5">
        <span aria-hidden>←</span>
        Documentos
      </Link>

      <div className="mt-8 flex flex-wrap items-center gap-2 text-xs">
        <span className="pill pill-accent">{documento.tipo}</span>
        <span className="text-[--color-fg-3] num">{formatFechaLarga(documento.fecha)}</span>
        <span className="text-[--color-fg-4]">·</span>
        <span className="text-[--color-fg-2]">{documento.emisor}</span>
        {documento.destinatario && (
          <>
            <span className="text-[--color-fg-4]" aria-hidden>→</span>
            <span className="text-[--color-fg-2]">{documento.destinatario}</span>
          </>
        )}
      </div>

      <h1 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.05] gradient-text">
        {documento.titulo}
      </h1>
      <ShareButton
        title={documento.titulo}
        text={documento.resumen.slice(0, 220)}
        path={`/documentos/${documento.slug}`}
        variant="full"
        label="Compartir documento"
        className="mt-6"
      />

      <section className="mt-12">
        <p className="label mb-4">Resumen legible</p>
        <div className="space-y-5 text-base sm:text-lg leading-relaxed text-[--color-fg]">
          {documento.resumen.split("\n\n").map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {documento.citas && documento.citas.length > 0 && (
        <section className="mt-16">
          <p className="label mb-5">Citas textuales</p>
          <div className="space-y-4">
            {documento.citas.map((cita, i) => (
              <blockquote
                key={i}
                className="card p-6 relative pl-8"
              >
                <span
                  className="absolute left-0 top-6 bottom-6 w-1 rounded-r-full bg-[--color-accent]"
                  aria-hidden
                />
                <p className="text-base sm:text-lg leading-relaxed text-[--color-fg]">
                  «{cita.texto}»
                </p>
                {cita.pagina && (
                  <cite className="block mt-3 text-xs uppercase tracking-wider font-medium text-[--color-fg-3] not-italic">
                    Pagina {cita.pagina}
                  </cite>
                )}
              </blockquote>
            ))}
          </div>
        </section>
      )}

      {documento.pdfPath && (
        <section className="mt-16">
          <div className="flex items-baseline justify-between mb-4">
            <p className="label">Documento original</p>
            <a
              href={documento.pdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[--color-accent] hover:text-[--color-accent-hover] inline-flex items-center gap-1.5"
              download
            >
              Descargar PDF
              <span aria-hidden>↓</span>
            </a>
          </div>
          <div className="card overflow-hidden aspect-[3/4] max-h-[820px]">
            <iframe
              src={documento.pdfPath}
              title={documento.titulo}
              className="w-full h-full bg-white"
            />
          </div>
        </section>
      )}

      {documento.urlOriginal && !documento.pdfPath && (
        <section className="mt-12">
          <a
            href={documento.urlOriginal}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            Ver documento original
            <span aria-hidden>↗</span>
          </a>
        </section>
      )}

      {decisionesRel.length > 0 && (
        <section className="mt-16">
          <h2 className="text-xl font-black tracking-tight mb-5">Decisiones que motivo</h2>
          <ul className="grid gap-3">
            {decisionesRel.map((d) => {
              const ministerio = d.ministerioSlug ? ministerioBySlug(d.ministerioSlug) : null;
              return (
                <li key={d.slug}>
                  <Link to={`/decisiones/${d.slug}`} className="block group focus-ring rounded-xl">
                    <div className="card-interactive p-5">
                      <p className="text-xs num text-[--color-fg-3]">
                        {formatFechaLarga(d.fecha)}{ministerio && ` · ${ministerio.abrev || ministerio.nombre}`}
                      </p>
                      <h3 className="mt-2 text-lg font-bold tracking-tight group-hover:text-[--color-accent] transition-colors">
                        {d.titulo}
                      </h3>
                    </div>
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
