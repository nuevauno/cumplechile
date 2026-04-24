import { Link } from "react-router";
import type { Route } from "./+types/decisiones-detail";
import { decisionBySlug, ministerioBySlug, formatFechaLarga, documentos as allDocs } from "~/lib/store";
import { EtiquetaBadge, SeveridadDots } from "~/components/Badge";

export function meta({ data }: Route.MetaArgs) {
  if (!data) return [{ title: "Decision · Cumple Chile" }];
  return [
    { title: `${data.decision.titulo} — Cumple Chile` },
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
    <article className="max-w-4xl mx-auto px-6 lg:px-10 py-12 lg:py-16">
      <Link to="/decisiones" className="text-xs uppercase tracking-[0.18em] text-[--color-ink-muted] hover:text-[--color-cl-red]">
        ← Decisiones
      </Link>

      <div className="mt-6 flex flex-wrap items-center gap-3 text-xs num text-[--color-ink-muted]">
        <time dateTime={decision.fecha} className="uppercase tracking-[0.18em]">
          {formatFechaLarga(decision.fecha)}
        </time>
        <span className="opacity-50">·</span>
        <EtiquetaBadge etiqueta={decision.etiqueta} />
        <SeveridadDots severidad={decision.severidad} />
        {ministerio && (
          <>
            <span className="opacity-50">·</span>
            <Link to={`/ministerios/${ministerio.slug}`} className="uppercase tracking-[0.12em] font-bold hover:text-[--color-cl-red]">
              {ministerio.nombre}
            </Link>
          </>
        )}
      </div>

      <h1 className="display text-[clamp(2.25rem,6vw,4.75rem)] leading-[0.95] mt-4">
        {decision.titulo}
      </h1>
      <p className="mt-6 text-xl text-[--color-ink-soft] leading-relaxed">{decision.resumen}</p>

      <div className="mt-10 prose prose-lg max-w-none">
        {decision.cuerpo.split("\n\n").map((p, i) => (
          <p key={i} className="mt-5 text-base md:text-lg leading-relaxed text-[--color-ink]">
            {p}
          </p>
        ))}
      </div>

      {documentos.length > 0 && (
        <section className="mt-16 rule-thick pt-2">
          <h2 className="display text-2xl mb-6">Documentos fuente</h2>
          <ul className="space-y-4">
            {documentos.map((doc) => (
              <li key={doc.slug} className="border border-[--color-ink] bg-[--color-paper-dark] p-6">
                <p className="text-[10px] uppercase tracking-[0.22em] text-[--color-ink-muted] num">
                  {doc.tipo} · {doc.fecha} · {doc.emisor}
                </p>
                <Link to={`/documentos/${doc.slug}`} className="display text-xl mt-2 block hover:text-[--color-cl-red]">
                  {doc.titulo}
                </Link>
                <p className="mt-2 text-sm text-[--color-ink-soft] line-clamp-3">{doc.resumen}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {decision.fuenteUrls.length > 0 && (
        <section className="mt-12 rule pt-4">
          <p className="text-xs tracking-[0.22em] uppercase text-[--color-ink-muted] mb-3">Cobertura externa</p>
          <ul className="space-y-2">
            {decision.fuenteUrls.map((f) => (
              <li key={f.url}>
                <a
                  href={f.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-[--color-cl-red] underline underline-offset-4 decoration-2"
                >
                  <span className="font-bold uppercase tracking-[0.1em]">{f.medio}</span> · {f.titulo}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
