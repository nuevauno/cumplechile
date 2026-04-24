import { Link } from "react-router";
import type { Route } from "./+types/decisiones-detail";
import { decisionBySlug, ministerioBySlug, formatFechaLarga, documentos as allDocs } from "~/lib/store";
import { EtiquetaBadge, SeveridadBar } from "~/components/Badge";

export function meta({ data }: Route.MetaArgs) {
  if (!data) return [{ title: "Decision · Chile Cumple" }];
  return [
    { title: `${data.decision.titulo} — Chile Cumple` },
    { name: "description", content: data.decision.resumen },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  const decision = decisionBySlug(params.slug!);
  if (!decision) throw new Response("Decision no encontrada", { status: 404 });
  const ministerio = decision.ministerioSlug ? ministerioBySlug(decision.ministerioSlug) : null;
  const documentos = allDocs.filter((d) => decision.documentoSlugs.includes(d.slug));
  return { decision, ministerio, documentos };
}

export default function DecisionDetail({ loaderData }: Route.ComponentProps) {
  const { decision, ministerio, documentos } = loaderData;
  return (
    <article className="max-w-3xl mx-auto px-5 sm:px-8 pt-12 pb-24">
      <Link to="/decisiones" className="text-sm text-[--color-fg-3] hover:text-[--color-fg] inline-flex items-center gap-1.5">
        <span aria-hidden>←</span>
        Decisiones
      </Link>

      <div className="mt-8 flex flex-wrap items-center gap-3 text-xs">
        <time dateTime={decision.fecha} className="num text-[--color-fg-2] font-medium">
          {formatFechaLarga(decision.fecha)}
        </time>
        <span className="text-[--color-fg-4]">·</span>
        <EtiquetaBadge etiqueta={decision.etiqueta} />
        <SeveridadBar severidad={decision.severidad} />
        {ministerio && (
          <>
            <span className="text-[--color-fg-4]">·</span>
            <Link to={`/ministerios/${ministerio.slug}`} className="uppercase tracking-wider text-[10px] font-medium hover:text-[--color-accent]">
              {ministerio.nombre}
            </Link>
          </>
        )}
      </div>

      <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.05] gradient-text">
        {decision.titulo}
      </h1>
      <p className="mt-6 text-xl text-[--color-fg-2] leading-relaxed">{decision.resumen}</p>

      <div className="mt-12 space-y-6">
        {decision.cuerpo.split("\n\n").map((p, i) => (
          <p key={i} className="text-base sm:text-lg leading-relaxed text-[--color-fg]">
            {p}
          </p>
        ))}
      </div>

      {documentos.length > 0 && (
        <section className="mt-16">
          <h2 className="text-xl font-black tracking-tight mb-5">Documentos fuente</h2>
          <ul className="grid gap-3">
            {documentos.map((doc) => (
              <li key={doc.slug}>
                <Link to={`/documentos/${doc.slug}`} className="block group focus-ring rounded-xl">
                  <div className="card-interactive p-5">
                    <p className="label">{doc.tipo} · {formatFechaLarga(doc.fecha)} · {doc.emisor}</p>
                    <h3 className="mt-2 text-lg font-bold tracking-tight leading-tight group-hover:text-[--color-accent] transition-colors">
                      {doc.titulo}
                    </h3>
                    <p className="mt-2 text-sm text-[--color-fg-2] line-clamp-2 leading-relaxed">{doc.resumen}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {decision.fuenteUrls.length > 0 && (
        <section className="mt-12 pt-8 border-t border-[--color-border]">
          <p className="label mb-4">Cobertura externa</p>
          <ul className="space-y-3">
            {decision.fuenteUrls.map((f) => (
              <li key={f.url}>
                <a
                  href={f.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-[--color-accent] transition-colors group"
                >
                  <span className="font-bold uppercase tracking-wider text-[10px] text-[--color-fg-3] group-hover:text-[--color-accent]">{f.medio}</span>
                  <span className="ml-2 text-[--color-fg-2] group-hover:text-[--color-fg]">{f.titulo}</span>
                  <span className="ml-1 text-[--color-fg-4]" aria-hidden>↗</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
