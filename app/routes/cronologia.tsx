import { Link } from "react-router";
import { CRONOLOGIA, cronologiaPorSemana } from "~/data/cronologia";
import type { Etiqueta, EventoCronologia } from "~/data/types";
import { diasDesdeInvestidura } from "~/lib/tiempo";
import { createMeta } from "~/lib/meta";
import { PageShare, ShareButton } from "~/components/ShareButton";

export function meta() {
  return createMeta({
    title: "Cronología — Chile Cumple",
    description:
      "Cronología del gobierno de José Antonio Kast: decisiones, escándalos, rectificaciones y encuestas día por día.",
    path: "/cronologia",
  });
}

export async function loader() {
  return { semanas: cronologiaPorSemana(), total: CRONOLOGIA.length, diasGobierno: diasDesdeInvestidura() };
}

const tipoLabel: Record<EventoCronologia["tipo"], string> = {
  decision: "Decision",
  escandalo: "Escandalo",
  anuncio: "Anuncio",
  encuesta: "Encuesta",
  operativo: "Operativo",
  retractacion: "Rectificación",
  ataque: "Ataque",
};

const etiquetaCfg: Record<Etiqueta, { dot: string; pill: string }> = {
  bueno: { dot: "bg-[--color-bueno]", pill: "pill-bueno" },
  malo: { dot: "bg-[--color-malo]", pill: "pill-malo" },
  feo: { dot: "bg-[--color-feo]", pill: "pill-feo" },
  info: { dot: "bg-[--color-info]", pill: "pill-info" },
};

export default function Cronologia({ loaderData }: { loaderData: Awaited<ReturnType<typeof loader>> }) {
  const { semanas, total, diasGobierno } = loaderData;

  return (
    <div className="max-w-5xl mx-auto px-5 sm:px-8 pt-12 pb-24">
      <header className="max-w-3xl">
        <p className="label">Linea de tiempo</p>
        <h1 className="mt-3 text-5xl sm:text-7xl font-black tracking-tighter leading-[0.95] gradient-text">
          Cronologia
        </h1>
        <p className="mt-6 text-lg text-[--color-fg-2] leading-relaxed">
          {total} hitos en los primeros {diasGobierno} días del gobierno de Kast. Decisiones de Estado, escándalos, rectificaciones, ataques, encuestas y operativos. Ordenado del más reciente al más antiguo.
        </p>
        <PageShare title="Cronología — Chile Cumple" path="/cronologia" />
      </header>

      <ol className="mt-12 relative">
        <span className="absolute left-[7px] top-2 bottom-2 w-px bg-[--color-border]" aria-hidden />
        {semanas.map(({ semana, eventos }) => {
          const lunes = new Date(semana + "T12:00:00");
          const finde = new Date(lunes);
          finde.setDate(lunes.getDate() + 6);
          const labelSemana = `${lunes.toLocaleDateString("es-CL", { day: "numeric", month: "short" , timeZone: "America/Santiago" })} → ${finde.toLocaleDateString("es-CL", { day: "numeric", month: "short" , timeZone: "America/Santiago" })}`;
          return (
            <li key={semana} className="mb-10">
              <div className="ml-8 mb-4 flex items-baseline gap-3 flex-wrap">
                <span className="label">Semana</span>
                <span className="text-sm num text-[--color-fg-2] font-semibold">{labelSemana}</span>
                <span className="text-xs text-[--color-fg-4] num">{eventos.length} eventos</span>
              </div>
              <ul className="space-y-3">
                {eventos.map((ev) => {
                  const cfg = etiquetaCfg[ev.etiqueta];
                  return (
                    <li key={ev.slug} id={ev.slug} className="relative pl-8 scroll-mt-24">
                      <span
                        className={`absolute left-0 top-2.5 w-4 h-4 rounded-full ring-4 ring-[--color-bg] ${cfg.dot}`}
                        aria-hidden
                      />
                      <article className="card-interactive p-5 sm:p-6">
                        <div className="flex flex-wrap items-center gap-2 text-xs">
                          <span className={`pill ${cfg.pill}`}>{tipoLabel[ev.tipo]}</span>
                          <span className="text-[--color-fg-4]">·</span>
                          <span className="num text-[10px] uppercase tracking-wider text-[--color-fg-3]">
                            {new Date(ev.fecha + "T12:00:00").toLocaleDateString("es-CL", { day: "numeric", month: "short", year: "numeric" , timeZone: "America/Santiago" })}
                          </span>
                        </div>
                        <h3 className="mt-3 text-lg sm:text-xl font-black tracking-tight leading-tight">
                          {ev.titulo}
                        </h3>
                        <p className="mt-3 text-sm text-[--color-fg-2] leading-relaxed">{ev.resumen}</p>
                        <div className="mt-4 flex items-center gap-3 text-xs text-[--color-fg-3]">
                          {ev.fuenteUrl && ev.fuenteMedio && (
                            <a
                              href={ev.fuenteUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 hover:text-[--color-accent] transition-colors"
                            >
                              <span aria-hidden>↗</span>
                              {ev.fuenteMedio}
                            </a>
                          )}
                          {ev.decisionSlug && (
                            <Link to={`/decisiones/${ev.decisionSlug}`} className="hover:text-[--color-accent] transition-colors">
                              Ver decision →
                            </Link>
                          )}
                          {ev.retractacionSlug && (
                            <Link to={`/retractaciones#${ev.retractacionSlug}`} className="hover:text-[--color-accent] transition-colors">
                              Ver rectificación →
                            </Link>
                          )}
                          <ShareButton
                            title={ev.titulo}
                            text={ev.resumen}
                            path="/cronologia"
                            hash={ev.slug}
                            variant="quiet"
                            className="sm:ml-auto"
                          />
                        </div>
                      </article>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
