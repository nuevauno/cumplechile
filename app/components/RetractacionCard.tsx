import { Link } from "react-router";
import type { Retractacion, TipoRetractacion } from "~/data/types";
import { ShareButton } from "./ShareButton";

const tipoCfg: Record<TipoRetractacion, { label: string; cls: string }> = {
  rectificacion:        { label: "Rectificacion",    cls: "pill-feo" },
  contradiccion_interna:{ label: "Contradiccion interna", cls: "pill-malo" },
  borrado:              { label: "Borrado",          cls: "pill-malo" },
  desmentido_por_datos: { label: "Desmentido por datos", cls: "pill-malo" },
  mea_culpa:            { label: "Mea culpa",        cls: "pill-feo" },
};

export function RetractacionCard({ r, featured = false }: { r: Retractacion; featured?: boolean }) {
  const cfg = tipoCfg[r.tipo];
  return (
    <article
      id={r.slug}
      className={`card-interactive ${featured ? "p-7 sm:p-9" : "p-6"} relative overflow-hidden scroll-mt-24`}
    >
        <span className="absolute left-0 top-0 bottom-0 w-1 bg-[--color-malo]" aria-hidden />
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className={`pill ${cfg.cls}`}>{cfg.label}</span>
          <span className="text-[--color-fg-4]">·</span>
          <span className="num text-[10px] uppercase tracking-wider text-[--color-fg-3]">
            {new Date(r.fecha + "T12:00:00").toLocaleDateString("es-CL", { day: "numeric", month: "short", year: "numeric" , timeZone: "America/Santiago" })}
          </span>
        </div>

        <Link to={`/retractaciones#${r.slug}`} className="group focus-ring rounded-md block">
          <h3 className={`mt-3 font-black tracking-tight leading-tight group-hover:text-[--color-accent] transition-colors ${featured ? "text-2xl sm:text-3xl" : "text-lg"}`}>
            {r.titulo}
          </h3>
        </Link>

        <div className="mt-4 flex items-center gap-2 text-xs">
          <span className="text-[--color-fg]">{r.emisor}</span>
          {r.cargo && <span className="text-[--color-fg-3]">— {r.cargo}</span>}
        </div>

        <blockquote className="mt-4 pl-4 border-l-2 border-[--color-malo] text-[--color-fg-2] italic">
          «{r.fraseOriginal}»
        </blockquote>

        <p className={`mt-4 text-[--color-fg-2] leading-relaxed ${featured ? "text-base" : "text-sm line-clamp-3"}`}>
          {r.retractacion}
        </p>

        {r.desmentidoPor && (
          <p className="mt-4 text-xs text-[--color-fg-3]">
            <span className="uppercase tracking-wider text-[10px] text-[--color-fg-4]">Contradicho por: </span>
            <span className="text-[--color-fg-2]">{r.desmentidoPor}</span>
          </p>
        )}
        <div className="mt-5 flex justify-end">
          <ShareButton
            title={r.titulo}
            text={r.retractacion}
            path="/retractaciones"
            hash={r.slug}
            variant={featured ? "compact" : "quiet"}
          />
        </div>
    </article>
  );
}
