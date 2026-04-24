import { Link } from "react-router";
import type { Route } from "./+types/ministerios";
import { ministerios, statsByMinisterio, formatMilesCLP } from "~/lib/store";
import { StackedBar } from "~/components/BarChart";
import { Avatar } from "~/components/MinistroCard";
import { ministroByMinisterio } from "~/data/ministros";

export function meta() {
  return [
    { title: "Ministerios — Chile Cumple" },
    { name: "description", content: "Las 24 carteras del Estado y su exposicion al ajuste fiscal 2027-2031." },
  ];
}

export async function loader() {
  return {
    items: ministerios.map((m) => ({ ministerio: m, stats: statsByMinisterio(m.slug) })),
  };
}

export default function Ministerios({ loaderData }: Route.ComponentProps) {
  const { items } = loaderData;
  const conData = items.filter((x) => x.stats.programas > 0);
  const sinData = items.filter((x) => x.stats.programas === 0);

  return (
    <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-12 pb-24">
      <header className="max-w-3xl">
        <p className="label">24 carteras del Estado</p>
        <h1 className="mt-3 text-5xl sm:text-7xl font-black tracking-tighter leading-[0.95] gradient-text">
          Ministerios
        </h1>
        <p className="mt-6 text-lg text-[--color-fg-2] leading-relaxed">
          Cada ministerio recibe su anexo con recomendaciones de Hacienda. Entra a uno para ver el detalle de programas y decisiones registradas.
        </p>
      </header>

      {conData.length > 0 && (
        <section className="mt-16">
          <h2 className="text-xl font-black tracking-tight mb-5">Con anexo publicado</h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {conData.map(({ ministerio, stats }) => {
              const ministro = ministroByMinisterio(ministerio.slug);
              const segs = [
                { value: stats.descontinuados, color: "var(--color-malo)", label: "Descontinuar" },
                { value: stats.ajustes, color: "var(--color-feo)", label: "Ajuste" },
                { value: stats.sinObservaciones, color: "var(--color-bueno)", label: "Sin obs" },
              ];
              return (
                <li key={ministerio.slug}>
                  <Link to={`/ministerios/${ministerio.slug}`} className="block group focus-ring rounded-xl">
                    <div className="card-interactive p-6 h-full">
                      <p className="label">{ministerio.abrev || "Ministerio"}</p>
                      <h3 className="mt-2 text-lg font-bold tracking-tight leading-tight group-hover:text-[--color-accent] transition-colors">
                        {ministerio.nombre}
                      </h3>
                      {ministro && (
                        <div className="mt-3 flex items-center gap-2.5">
                          <Avatar nombre={ministro.nombre} fotoUrl={ministro.fotoUrl} size={28} />
                          <span className="text-xs text-[--color-fg-2] truncate">{ministro.nombre}</span>
                        </div>
                      )}
                      <div className="mt-5">
                        <StackedBar segments={segs} total={stats.programas} height={6} />
                      </div>
                      <div className="mt-4 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-3">
                          <span className="text-[--color-fg-3] num">{stats.programas} prog</span>
                          {stats.descontinuados > 0 && (
                            <span className="text-[--color-malo] font-bold num">−{stats.descontinuados}</span>
                          )}
                          {stats.ajustes > 0 && (
                            <span className="text-[--color-feo] font-bold num">↓{stats.ajustes}</span>
                          )}
                        </div>
                        {(stats.montoDescontinuadoMilesCLP + stats.montoAjustadoMilesCLP) > 0 && (
                          <span className="text-[--color-fg-3] num">
                            {formatMilesCLP(stats.montoDescontinuadoMilesCLP + stats.montoAjustadoMilesCLP)}
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      )}

      {sinData.length > 0 && (
        <section className="mt-16">
          <div className="flex items-baseline justify-between mb-5">
            <h2 className="text-xl font-black tracking-tight">Sin registros aun</h2>
            <span className="text-sm text-[--color-fg-3]">{sinData.length} ministerios</span>
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {sinData.map(({ ministerio }) => {
              const ministro = ministroByMinisterio(ministerio.slug);
              return (
                <li key={ministerio.slug}>
                  <Link to={`/ministerios/${ministerio.slug}`} className="block group focus-ring rounded-lg">
                    <div className="card-interactive p-4 h-full">
                      <p className="label">{ministerio.abrev || "Ministerio"}</p>
                      <h3 className="mt-1.5 text-base font-bold tracking-tight leading-tight group-hover:text-[--color-accent] transition-colors">
                        {ministerio.nombre}
                      </h3>
                      {ministro ? (
                        <div className="mt-3 flex items-center gap-2">
                          <Avatar nombre={ministro.nombre} fotoUrl={ministro.fotoUrl} size={24} />
                          <span className="text-xs text-[--color-fg-3] truncate">{ministro.nombre}</span>
                        </div>
                      ) : (
                        <p className="mt-3 text-xs text-[--color-fg-3]">
                          <span className="text-[--color-accent]">Aporta info</span>
                        </p>
                      )}
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </div>
  );
}
