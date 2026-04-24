import { Link } from "react-router";
import type { Decision } from "~/data/types";
import { EtiquetaBadge, SeveridadDots } from "./Badge";
import { formatFechaLarga, ministerioBySlug } from "~/lib/store";

export function DecisionCard({ decision, featured = false }: { decision: Decision; featured?: boolean }) {
  const ministerio = decision.ministerioSlug ? ministerioBySlug(decision.ministerioSlug) : null;
  return (
    <article className={`group ${featured ? "" : "border-t border-[--color-ink] pt-6 mt-6"}`}>
      <div className="flex items-center gap-3 text-xs num text-[--color-ink-muted]">
        <time dateTime={decision.fecha} className="uppercase tracking-[0.18em]">
          {formatFechaLarga(decision.fecha)}
        </time>
        <span className="opacity-50">·</span>
        <EtiquetaBadge etiqueta={decision.etiqueta} />
        <SeveridadDots severidad={decision.severidad} />
        {ministerio && (
          <>
            <span className="opacity-50">·</span>
            <span className="uppercase tracking-[0.12em] font-bold">{ministerio.abrev || ministerio.nombre}</span>
          </>
        )}
      </div>
      <Link to={`/decisiones/${decision.slug}`} className="block group">
        <h3
          className={`mt-3 display group-hover:text-[--color-cl-red] transition-colors ${
            featured ? "text-[clamp(2rem,5vw,3.75rem)] leading-[0.95]" : "text-2xl md:text-3xl leading-tight"
          }`}
        >
          {decision.titulo}
        </h3>
        <p className={`mt-3 text-[--color-ink-soft] ${featured ? "text-lg md:text-xl max-w-3xl" : "text-base"}`}>
          {decision.resumen}
        </p>
      </Link>
      {decision.fuenteUrls.length > 0 && (
        <div className="mt-4 text-xs uppercase tracking-[0.14em] text-[--color-ink-muted]">
          Fuente:{" "}
          {decision.fuenteUrls.slice(0, 2).map((f, i) => (
            <span key={f.url}>
              {i > 0 && " · "}
              <a href={f.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-[--color-cl-red]">
                {f.medio}
              </a>
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
