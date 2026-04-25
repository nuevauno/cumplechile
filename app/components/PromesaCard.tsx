import { Link } from "react-router";
import type { Promesa, EstadoPromesa } from "~/data/types";
import { ShareButton } from "./ShareButton";

const estadoCfg: Record<EstadoPromesa, { cls: string; label: string; dot: string }> = {
  cumplida:        { cls: "pill-bueno",   label: "Cumplida",       dot: "bg-[--color-bueno]" },
  incumplida:      { cls: "pill-malo",    label: "Incumplida",     dot: "bg-[--color-malo]" },
  en_proceso:      { cls: "pill-info",    label: "En proceso",     dot: "bg-[--color-info]" },
  estancada:       { cls: "pill-feo",     label: "Estancada",      dot: "bg-[--color-feo]" },
  contradictoria: { cls: "pill-malo",    label: "Contradictoria", dot: "bg-[--color-malo]" },
  sin_info:        { cls: "pill-neutral", label: "Sin registros",  dot: "bg-[--color-fg-3]" },
};

export function EstadoPromesaBadge({ estado }: { estado: EstadoPromesa }) {
  const c = estadoCfg[estado];
  return (
    <span className={`pill ${c.cls}`}>
      <span className={`dot ${c.dot}`} />
      {c.label}
    </span>
  );
}

const ejeLabel: Record<Promesa["eje"], string> = {
  seguridad: "Seguridad",
  economia: "Economia",
  social: "Social",
  salud: "Salud",
  educacion: "Educacion",
  inmigracion: "Inmigracion",
  ddhh: "Derechos Humanos",
  institucional: "Institucional",
  vivienda: "Vivienda",
  trabajo: "Trabajo",
  medioambiente: "Medioambiente",
  transparencia: "Transparencia",
};

export function PromesaCard({ promesa, featured = false }: { promesa: Promesa; featured?: boolean }) {
  return (
    <article id={promesa.slug} className={`card-interactive ${featured ? "p-7 sm:p-9" : "p-6"} relative overflow-hidden scroll-mt-24`}>
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <EstadoPromesaBadge estado={promesa.estado} />
          <span className="text-[--color-fg-4]">·</span>
          <span className="uppercase tracking-wider text-[10px] font-medium text-[--color-fg-3]">
            {ejeLabel[promesa.eje]}
          </span>
        </div>
        <Link to={`/promesas#${promesa.slug}`} className="group focus-ring rounded-md block">
          <h3 className={`mt-3 font-black tracking-tight leading-tight group-hover:text-[--color-accent] transition-colors ${featured ? "text-2xl sm:text-3xl" : "text-xl"}`}>
            {promesa.titulo}
          </h3>
        </Link>
        <p className={`mt-3 text-[--color-fg-2] leading-relaxed ${featured ? "text-base" : "text-sm line-clamp-3"}`}>
          {promesa.resumen}
        </p>
        {promesa.citaCampaña && featured && (
          <blockquote className="mt-5 pl-4 border-l-2 border-[--color-accent] text-[--color-fg-2] italic">
            «{promesa.citaCampaña}»
            {promesa.citaFuente && (
              <cite className="block mt-1 text-xs not-italic text-[--color-fg-3]">— {promesa.citaFuente}</cite>
            )}
          </blockquote>
        )}
        <div className="mt-5 flex justify-end">
          <ShareButton
            title={promesa.titulo}
            text={promesa.resumen}
            path="/promesas"
            hash={promesa.slug}
            variant={featured ? "compact" : "quiet"}
          />
        </div>
    </article>
  );
}
