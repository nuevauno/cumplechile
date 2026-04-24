import { Link } from "react-router";
import type { Route } from "./+types/home";
import {
  decisionesOrdenadas,
  ministerios,
  programas,
  servicios,
  statsByMinisterio,
  formatMilesCLP,
  ministerioBySlug,
} from "~/lib/store";
import { DecisionCard } from "~/components/DecisionCard";
import { Stat } from "~/components/Stat";
import { RecomendacionBadge } from "~/components/Badge";
import { StackedBar, DonutChart, BarRow } from "~/components/BarChart";

export function meta() {
  return [
    { title: "Chile Cumple — Observatorio del gobierno de Jose Antonio Kast" },
    { name: "description", content: "Lo bueno, lo malo y lo feo del gobierno de Jose Antonio Kast con fuentes auditables. Promesas, decisiones, recortes y reformas en tiempo real." },
  ];
}

export async function loader({}: Route.LoaderArgs) {
  const decisiones = decisionesOrdenadas();
  const ministeriosConData = ministerios
    .map((m) => ({ ministerio: m, stats: statsByMinisterio(m.slug) }))
    .filter((x) => x.stats.programas > 0)
    .sort((a, b) => b.stats.descontinuados - a.stats.descontinuados);

  const totalProgramas = programas.length;
  const totalDescontinuados = programas.filter((p) => p.recomendacion === "descontinuar").length;
  const totalAjustes = programas.filter((p) => p.recomendacion === "ajuste").length;
  const totalSinObs = programas.filter((p) => p.recomendacion === "sin_observaciones").length;

  return { decisiones, ministeriosConData, totalProgramas, totalDescontinuados, totalAjustes, totalSinObs };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { decisiones, ministeriosConData, totalProgramas, totalDescontinuados, totalAjustes, totalSinObs } = loaderData;
  const [destacada, ...resto] = decisiones;
  const today = new Date().toLocaleDateString("es-CL", { day: "numeric", month: "long", year: "numeric" });

  const donutSegments = [
    { value: totalDescontinuados, color: "var(--color-malo)", label: "Descontinuar" },
    { value: totalAjustes, color: "var(--color-feo)", label: "Ajuste -15%" },
    { value: totalSinObs, color: "var(--color-bueno)", label: "Sin observaciones" },
  ];

  const topRecortes = programas
    .filter((p) => p.recomendacion === "descontinuar")
    .sort((a, b) => b.montoEjecutado2025MilesCLP - a.montoEjecutado2025MilesCLP)
    .slice(0, 8);
  const maxMonto = Math.max(...topRecortes.map((p) => p.montoEjecutado2025MilesCLP));

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-20 sm:pt-24 sm:pb-32">
          <div className="fade-up flex items-center gap-2 text-sm">
            <span className="dot bg-[--color-malo] pulse" />
            <span className="text-[--color-fg-2]">En curso · {today}</span>
          </div>
          <h1 className="fade-up fade-up-1 mt-6 text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95] max-w-5xl">
            <span className="gradient-text">El gobierno de Kast</span><br />
            <span className="text-[--color-accent]">en datos.</span>
          </h1>
          <p className="fade-up fade-up-2 mt-8 text-lg sm:text-xl text-[--color-fg-2] max-w-2xl leading-relaxed">
            Promesas, decisiones, recortes y reformas con fuentes verificables. Lo bueno, lo malo y lo feo, sin filtros editoriales pero con metodologia abierta.
          </p>
          <div className="fade-up fade-up-3 mt-10 flex flex-wrap gap-3">
            <Link to="/decisiones" className="btn btn-primary">
              Ver decisiones
              <span aria-hidden>→</span>
            </Link>
            <Link to="/sobre" className="btn btn-secondary">
              Como funciona
            </Link>
          </div>

          {/* Stats grid en hero */}
          <div className="fade-up fade-up-4 mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
            <Stat
              label="A descontinuar"
              value={totalDescontinuados}
              sub={`de ${totalProgramas} programas catalogados`}
              tone="malo"
            />
            <Stat
              label="Rebaja de −15%"
              value={totalAjustes}
              sub="ajuste presupuestario instruido"
              tone="feo"
            />
            <Stat
              label="Recorte 2027–2031"
              value={<>US$<span>6</span><span className="text-3xl sm:text-4xl">B</span></>}
              sub="proyectado por Hacienda"
              tone="malo"
            />
            <Stat
              label="Ministerios afectados"
              value={ministeriosConData.length}
              sub="con anexo publicado"
              tone="accent"
            />
          </div>
        </div>
      </section>

      {/* DECISION DESTACADA */}
      {destacada && (
        <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-16 lg:pb-24">
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="text-2xl font-black tracking-tight">Decision destacada</h2>
            <Link to="/decisiones" className="text-sm text-[--color-fg-2] hover:text-[--color-accent] transition-colors">
              Todas las decisiones →
            </Link>
          </div>
          <DecisionCard decision={destacada} featured />
        </section>
      )}

      {/* DISTRIBUCION + LATEST */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-16 lg:pb-24">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Donut: distribucion de recomendaciones */}
          <div className="card p-8 lg:col-span-5">
            <div className="flex items-baseline justify-between">
              <div>
                <p className="label">Programas MDS</p>
                <h3 className="mt-2 text-2xl font-black tracking-tight">Distribucion del ajuste</h3>
              </div>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-8">
              <DonutChart
                segments={donutSegments}
                size={200}
                thickness={28}
                center={{ value: totalProgramas, label: "Programas" }}
              />
              <ul className="flex-1 space-y-4 w-full">
                {donutSegments.map((seg) => {
                  const pct = ((seg.value / totalProgramas) * 100).toFixed(1);
                  return (
                    <li key={seg.label} className="flex items-baseline justify-between gap-3 pb-3 border-b border-[--color-border] last:border-0 last:pb-0">
                      <div className="flex items-center gap-2.5">
                        <span className="dot" style={{ background: seg.color, width: 8, height: 8 }} />
                        <span className="text-sm text-[--color-fg-2]">{seg.label}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-base font-bold num text-[--color-fg]">{seg.value}</span>
                        <span className="ml-2 text-xs text-[--color-fg-3] num">{pct}%</span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Latest decisions */}
          <div className="lg:col-span-7">
            <div className="flex items-baseline justify-between mb-6">
              <h2 className="text-2xl font-black tracking-tight">Ultimas decisiones</h2>
            </div>
            {resto.length === 0 ? (
              <div className="card p-8 text-center">
                <p className="text-[--color-fg-2]">Solo hay una decision registrada por ahora. Pronto se sumaran mas.</p>
              </div>
            ) : (
              <div className="grid gap-4">
                {resto.map((d) => (
                  <DecisionCard key={d.slug} decision={d} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* MINISTERIOS GRID */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-16 lg:pb-24">
        <div className="flex items-baseline justify-between mb-8">
          <div>
            <p className="label">Por ministerio</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black tracking-tighter">Donde golpea el ajuste</h2>
          </div>
          <Link to="/ministerios" className="text-sm text-[--color-fg-2] hover:text-[--color-accent] transition-colors">
            Todos →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ministeriosConData.map(({ ministerio, stats }) => {
            const segs = [
              { value: stats.descontinuados, color: "var(--color-malo)", label: "Descontinuar" },
              { value: stats.ajustes, color: "var(--color-feo)", label: "Ajuste" },
              { value: stats.sinObservaciones, color: "var(--color-bueno)", label: "Sin obs" },
            ];
            return (
              <Link key={ministerio.slug} to={`/ministerios/${ministerio.slug}`} className="block group focus-ring rounded-xl">
                <div className="card-interactive p-6 h-full flex flex-col">
                  <p className="label">{ministerio.abrev || "Ministerio"}</p>
                  <h3 className="mt-2 text-lg font-bold tracking-tight leading-tight group-hover:text-[--color-accent] transition-colors">
                    {ministerio.nombre}
                  </h3>
                  <div className="mt-4 flex items-center gap-3 text-xs num">
                    <span className="text-[--color-fg-3]">{stats.programas} programas</span>
                  </div>
                  <div className="mt-4">
                    <StackedBar segments={segs} total={stats.programas} height={6} />
                  </div>
                  <div className="mt-4 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-3">
                      {stats.descontinuados > 0 && (
                        <span className="inline-flex items-center gap-1 text-[--color-malo] font-bold num">
                          <span className="dot bg-[--color-malo]" />
                          −{stats.descontinuados}
                        </span>
                      )}
                      {stats.ajustes > 0 && (
                        <span className="inline-flex items-center gap-1 text-[--color-feo] font-bold num">
                          <span className="dot bg-[--color-feo]" />
                          ↓{stats.ajustes}
                        </span>
                      )}
                    </div>
                    <span className="text-[--color-fg-3] num">
                      {formatMilesCLP(stats.montoDescontinuadoMilesCLP + stats.montoAjustadoMilesCLP)}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* TOP RECORTES — bar chart */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-24">
        <div className="card p-8 sm:p-10">
          <div className="flex items-baseline justify-between mb-8">
            <div>
              <p className="label">Top monto · A descontinuar</p>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black tracking-tighter">Programas que dejan de existir</h2>
              <p className="mt-3 text-sm text-[--color-fg-2] max-w-2xl">
                Los 8 programas con mayor monto ejecutado en 2025 marcados para descontinuar en el ajuste fiscal 2027-2031.
              </p>
            </div>
          </div>
          <div className="space-y-5">
            {topRecortes.map((p) => {
              const servicio = servicios.find((s) => s.slug === p.servicioSlug);
              const ministerio = servicio ? ministerioBySlug(servicio.ministerioSlug) : null;
              return (
                <BarRow
                  key={p.slug}
                  label={p.nombre}
                  value={Math.round(p.montoEjecutado2025MilesCLP / 1000)}
                  max={Math.round(maxMonto / 1000)}
                  sublabel={`${formatMilesCLP(p.montoEjecutado2025MilesCLP)} · ${servicio?.abrev || servicio?.nombre} · ${ministerio?.abrev || ministerio?.nombre}`}
                  color="var(--color-malo)"
                />
              );
            })}
          </div>
          <div className="mt-8 pt-6 border-t border-[--color-border] flex items-center justify-between">
            <p className="text-xs text-[--color-fg-3] num">
              Hay {totalDescontinuados} programas a descontinuar en total. Monto en millones de pesos 2026.
            </p>
            <Link to="/ministerios/desarrollo-social" className="text-sm text-[--color-accent] hover:text-[--color-accent-hover] font-semibold inline-flex items-center gap-1.5">
              Ver detalle MDS
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
