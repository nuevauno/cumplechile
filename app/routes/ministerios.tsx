import { Link } from "react-router";
import type { Route } from "./+types/ministerios";
import {
  ministerios,
  statsByMinisterio,
  formatMilesCLP,
  alertasByMinisterio,
  alertasRecortesMinisterios,
  panoramaRecortes,
} from "~/lib/store";
import { StackedBar } from "~/components/BarChart";
import { Avatar } from "~/components/MinistroCard";
import { ministroByMinisterio } from "~/data/ministros";
import { createMeta } from "~/lib/meta";
import { PageShare, ShareButton } from "~/components/ShareButton";

export function meta() {
  return createMeta({
    title: "Ministerios — Chile Cumple",
    description: "Las carteras del Estado y su exposición al ajuste fiscal 2027-2031.",
    path: "/ministerios",
  });
}

export async function loader() {
  return {
    panorama: panoramaRecortes,
    alertas: alertasRecortesMinisterios,
    items: ministerios.map((m) => ({
      ministerio: m,
      stats: statsByMinisterio(m.slug),
      alertas: alertasByMinisterio(m.slug),
    })),
  };
}

export default function Ministerios({ loaderData }: Route.ComponentProps) {
  const { items, panorama, alertas } = loaderData;
  const conData = items
    .filter((x) => x.stats.programas > 0 || x.alertas.length > 0)
    .sort((a, b) => {
      const scoreA = a.stats.descontinuados + a.stats.ajustes + a.alertas.reduce((s, al) => s + (al.programasDescontinuar ?? 0) + (al.programasAjuste ?? 0), 0);
      const scoreB = b.stats.descontinuados + b.stats.ajustes + b.alertas.reduce((s, al) => s + (al.programasDescontinuar ?? 0) + (al.programasAjuste ?? 0), 0);
      return scoreB - scoreA;
    });
  const sinData = items.filter((x) => x.stats.programas === 0 && x.alertas.length === 0);

  return (
    <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-12 pb-24">
      <header className="max-w-3xl">
        <p className="label">24 carteras del Estado</p>
        <h1 className="mt-3 text-5xl sm:text-7xl font-black tracking-tighter leading-[0.95] gradient-text">
          Ministerios
        </h1>
        <p className="mt-6 text-lg text-[--color-fg-2] leading-relaxed">
          Cada ministerio recibe su anexo con recomendaciones de Hacienda. Donde hay anexo cargado mostramos programa por programa; donde aún no está completo, dejamos alertas con fuente y cautela.
        </p>
        <PageShare title="Ministerios — Chile Cumple" path="/ministerios" />
      </header>

      <section className="mt-10 grid md:grid-cols-4 gap-3">
        <div className="card p-5 md:col-span-2">
          <p className="label text-[--color-malo]">{panorama.titulo}</p>
          <p className="mt-3 text-sm text-[--color-fg-2] leading-relaxed">{panorama.resumen}</p>
          <a href={panorama.fuenteUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex text-xs font-bold text-[--color-accent] hover:text-[--color-accent-hover]">
            Fuente · {panorama.fuenteMedio} ↗
          </a>
        </div>
        <MiniStat label="A descontinuar" value={panorama.programasDescontinuar} tone="malo" />
        <MiniStat label="Con rebaja" value={panorama.programasAjuste} tone="feo" />
      </section>

      {conData.length > 0 && (
        <section className="mt-16">
          <h2 className="text-xl font-black tracking-tight mb-5">Con anexo o alerta publicada</h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {conData.map(({ ministerio, stats, alertas }) => {
              const ministro = ministroByMinisterio(ministerio.slug);
              const alertaPrincipal = alertas[0];
              const totalProgramas = stats.programas || (alertaPrincipal?.programasDescontinuar ?? 0) + (alertaPrincipal?.programasAjuste ?? 0) || 1;
              const segs = [
                { value: stats.descontinuados || alertaPrincipal?.programasDescontinuar || 0, color: "var(--color-malo)", label: "Descontinuar" },
                { value: stats.ajustes || alertaPrincipal?.programasAjuste || 0, color: "var(--color-feo)", label: "Ajuste" },
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
                      {alertaPrincipal && (
                        <div className="mt-4 rounded-lg border border-[--color-malo] bg-[--color-malo-soft] p-3">
                          <p className="text-[10px] uppercase tracking-wider font-black text-[--color-malo]">
                            Alerta · {alertaPrincipal.fuenteMedio}
                          </p>
                          <p className="mt-1 text-xs text-[--color-fg] leading-snug line-clamp-2">
                            {alertaPrincipal.titulo}
                          </p>
                        </div>
                      )}
                      <div className="mt-5">
                        <StackedBar segments={segs} total={totalProgramas} height={6} />
                      </div>
                      <div className="mt-4 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-3">
                          <span className="text-[--color-fg-3] num">
                            {stats.programas > 0 ? `${stats.programas} prog` : "alerta"}
                          </span>
                          {stats.descontinuados > 0 && (
                            <span className="text-[--color-malo] font-bold num">−{stats.descontinuados}</span>
                          )}
                          {stats.descontinuados === 0 && alertaPrincipal?.programasDescontinuar && (
                            <span className="text-[--color-malo] font-bold num">−{alertaPrincipal.programasDescontinuar}</span>
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

      {alertas.length > 0 && (
        <section className="mt-16">
          <div className="flex items-baseline justify-between mb-5">
            <h2 className="text-xl font-black tracking-tight">Mapa rápido de recortes</h2>
            <span className="text-sm text-[--color-fg-3]">{alertas.length} alertas con fuente</span>
          </div>
          <ul className="grid md:grid-cols-2 gap-3">
            {alertas.map((alerta) => {
              const ministerio = ministerios.find((m) => m.slug === alerta.ministerioSlug);
              return (
                <li key={alerta.ministerioSlug + alerta.titulo} id={`alerta-${alerta.ministerioSlug}`} className="card p-5 scroll-mt-24">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="pill pill-malo">{ministerio?.abrev || ministerio?.nombre}</span>
                    <span className="text-[10px] uppercase tracking-wider text-[--color-fg-3]">{alerta.fecha}</span>
                  </div>
                  <h3 className="mt-3 text-base font-bold leading-tight">{alerta.titulo}</h3>
                  <p className="mt-2 text-sm text-[--color-fg-2] leading-relaxed">{alerta.resumen}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {alerta.destacados.slice(0, 4).map((d) => (
                      <span key={d} className="pill pill-neutral text-[10px]">{d}</span>
                    ))}
                  </div>
                  <a href={alerta.fuenteUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex text-xs font-bold text-[--color-accent] hover:text-[--color-accent-hover]">
                    Fuente · {alerta.fuenteMedio} ↗
                  </a>
                  <div className="mt-4 flex justify-end">
                    <ShareButton
                      title={alerta.titulo}
                      text={alerta.resumen}
                      path="/ministerios"
                      hash={`alerta-${alerta.ministerioSlug}`}
                      variant="quiet"
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      )}

      {sinData.length > 0 && (
        <section className="mt-16">
          <div className="flex items-baseline justify-between mb-5">
            <h2 className="text-xl font-black tracking-tight">Sin registros aún</h2>
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

function MiniStat({ label, value, tone }: { label: string; value: number; tone: "malo" | "feo" }) {
  const color = tone === "malo" ? "text-[--color-malo]" : "text-[--color-feo]";
  return (
    <div className="card p-5">
      <p className="label text-[10px]">{label}</p>
      <p className={`mt-2 num text-4xl font-black tracking-tighter ${color}`}>{value}</p>
      <p className="mt-1 text-xs text-[--color-fg-3]">programas</p>
    </div>
  );
}
