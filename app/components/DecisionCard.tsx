import { Link } from "react-router";
import type { Decision } from "~/data/types";
import { EtiquetaBadge, SeveridadBar } from "./Badge";
import { formatFechaLarga, ministerioBySlug } from "~/lib/store";

export function DecisionCard({ decision, featured = false }: { decision: Decision; featured?: boolean }) {
  const ministerio = decision.ministerioSlug ? ministerioBySlug(decision.ministerioSlug) : null;
  const accentColor =
    decision.etiqueta === "malo" ? "var(--color-malo)"
    : decision.etiqueta === "bueno" ? "var(--color-bueno)"
    : decision.etiqueta === "feo" ? "var(--color-feo)"
    : "var(--color-info)";

  if (featured) {
    return (
      <Link to={`/decisiones/${decision.slug}`} className="block group focus-ring rounded-2xl">
        <article
          className="card p-8 sm:p-10 lg:p-12 relative overflow-hidden hover:border-[--color-border-strong] transition-all"
          style={{
            background: `linear-gradient(135deg, ${accentColor}08 0%, var(--color-surface) 60%)`,
          }}
        >
          <div
            className="absolute top-0 left-0 right-0 h-1 origin-left bar-fill"
            style={{ background: accentColor }}
          />
          <div className="flex flex-wrap items-center gap-3 text-xs text-[--color-fg-3]">
            <time dateTime={decision.fecha} className="num font-medium text-[--color-fg-2]">
              {formatFechaLarga(decision.fecha)}
            </time>
            <span className="text-[--color-fg-4]">·</span>
            <EtiquetaBadge etiqueta={decision.etiqueta} />
            <SeveridadBar severidad={decision.severidad} />
            {ministerio && (
              <>
                <span className="text-[--color-fg-4]">·</span>
                <span className="font-medium uppercase tracking-wider text-[10px]">
                  {ministerio.abrev || ministerio.nombre}
                </span>
              </>
            )}
          </div>
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter leading-[1.05] gradient-text group-hover:text-[--color-accent] transition-colors">
            {decision.titulo}
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[--color-fg-2] leading-relaxed max-w-3xl">
            {decision.resumen}
          </p>
          <div className="mt-7 flex items-center gap-3 text-sm">
            <span className="text-[--color-accent] font-semibold inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
              Leer mas
              <span aria-hidden>→</span>
            </span>
            {decision.fuenteUrls[0] && (
              <span className="text-[--color-fg-3]">
                ·  {decision.fuenteUrls[0].medio}
              </span>
            )}
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link to={`/decisiones/${decision.slug}`} className="block group focus-ring rounded-xl">
      <article className="card-interactive p-6 relative overflow-hidden">
        <div
          className="absolute left-0 top-0 bottom-0 w-1"
          style={{ background: accentColor }}
        />
        <div className="flex flex-wrap items-center gap-2.5 text-xs text-[--color-fg-3]">
          <time dateTime={decision.fecha} className="num text-[--color-fg-2]">
            {formatFechaLarga(decision.fecha)}
          </time>
          <span className="text-[--color-fg-4]">·</span>
          <EtiquetaBadge etiqueta={decision.etiqueta} />
          <SeveridadBar severidad={decision.severidad} />
          {ministerio && (
            <>
              <span className="text-[--color-fg-4]">·</span>
              <span className="uppercase tracking-wider text-[10px] font-medium">
                {ministerio.abrev || ministerio.nombre}
              </span>
            </>
          )}
        </div>
        <h3 className="mt-4 text-xl sm:text-2xl font-bold tracking-tight leading-tight group-hover:text-[--color-accent] transition-colors">
          {decision.titulo}
        </h3>
        <p className="mt-3 text-sm text-[--color-fg-2] leading-relaxed line-clamp-2">
          {decision.resumen}
        </p>
        {decision.fuenteUrls[0] && (
          <div className="mt-4 text-xs text-[--color-fg-3] uppercase tracking-wider font-medium">
            Fuente · {decision.fuenteUrls[0].medio}
          </div>
        )}
      </article>
    </Link>
  );
}
