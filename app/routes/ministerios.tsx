import { Link } from "react-router";
import type { Route } from "./+types/ministerios";
import { ministerios, statsByMinisterio, formatMilesCLP } from "~/lib/store";

export function meta() {
  return [
    { title: "Ministerios — Cumple Chile" },
    { name: "description", content: "Los 24 ministerios del Estado de Chile y el detalle de programas, recortes y reformas en cada uno." },
  ];
}

export async function loader() {
  return {
    items: ministerios.map((m) => ({ ministerio: m, stats: statsByMinisterio(m.slug) })),
  };
}

export default function Ministerios({ loaderData }: Route.ComponentProps) {
  const { items } = loaderData;

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 lg:py-16">
      <header className="rule-thick pt-2 max-w-3xl">
        <p className="text-xs tracking-[0.22em] uppercase text-[--color-ink-muted]">24 carteras del Estado</p>
        <h1 className="display text-[clamp(3rem,7vw,5.5rem)] leading-[0.95] mt-2">
          Ministerios
        </h1>
        <p className="mt-4 text-lg text-[--color-ink-soft]">
          Cada ministerio recibe su anexo con recomendaciones de Hacienda. Entra a uno para ver el detalle de programas y decisiones registradas.
        </p>
      </header>

      <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[--color-ink] border border-[--color-ink]">
        {items.map(({ ministerio, stats }) => {
          const tieneData = stats.programas > 0;
          return (
            <li key={ministerio.slug} className="bg-[--color-paper]">
              <Link
                to={`/ministerios/${ministerio.slug}`}
                className="block p-6 h-full hover:bg-[--color-paper-dark] transition-colors group"
              >
                <p className="text-[10px] uppercase tracking-[0.22em] text-[--color-ink-muted] num">
                  {ministerio.abrev || "Ministerio"}
                </p>
                <h2 className="display text-xl mt-1 leading-tight group-hover:text-[--color-cl-red] transition-colors">
                  {ministerio.nombre}
                </h2>
                {tieneData ? (
                  <div className="mt-4 flex items-center gap-2 text-xs num">
                    <span className="text-[--color-ink-muted]">
                      {stats.programas} prog
                    </span>
                    {stats.descontinuados > 0 && (
                      <span className="px-2 py-0.5 bg-[--color-malo-bg] text-[--color-malo] border border-[--color-malo] font-bold">
                        −{stats.descontinuados} descont.
                      </span>
                    )}
                    {stats.ajustes > 0 && (
                      <span className="px-2 py-0.5 bg-[--color-feo-bg] text-[--color-feo] border border-[--color-feo] font-bold">
                        ↓{stats.ajustes} ajuste
                      </span>
                    )}
                  </div>
                ) : (
                  <p className="mt-4 text-xs text-[--color-ink-muted] uppercase tracking-[0.14em]">
                    Sin registros · Aporta info
                  </p>
                )}
                {tieneData && (stats.montoDescontinuadoMilesCLP + stats.montoAjustadoMilesCLP) > 0 && (
                  <p className="mt-2 text-xs num text-[--color-ink-muted]">
                    {formatMilesCLP(stats.montoDescontinuadoMilesCLP + stats.montoAjustadoMilesCLP)} en juego
                  </p>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
