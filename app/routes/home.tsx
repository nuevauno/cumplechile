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
import { StackedBar, DonutChart, BarRow } from "~/components/BarChart";
import { Avatar } from "~/components/MinistroCard";
import { MINISTROS, ministroByMinisterio } from "~/data/ministros";
import { PROMESAS, PROMESAS_STATS } from "~/data/promesas";
import { PromesaCard, EstadoPromesaBadge } from "~/components/PromesaCard";
import { INDICADORES_MACRO, NARRATIVA_OFICIAL, CONTRASTE } from "~/data/macro";

export function meta() {
  return [
    { title: "Chile Cumple — Observatorio del gobierno de Jose Antonio Kast" },
    { name: "description", content: "Promesas, decisiones, recortes y reformas con fuentes verificadas. Lo que dicen vs lo que muestran los datos. Lo bueno, lo malo y lo feo." },
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

  const promesaStats = PROMESAS_STATS();
  const promesaDestacada = PROMESAS.find((p) => p.slug === "zanja-frontera-norte");
  const promesaIncumplida = PROMESAS.find((p) => p.estado === "incumplida");

  return {
    decisiones,
    ministeriosConData,
    totalProgramas,
    totalDescontinuados,
    totalAjustes,
    totalSinObs,
    promesaStats,
    promesaDestacada,
    promesaIncumplida,
  };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const {
    decisiones, ministeriosConData,
    totalProgramas, totalDescontinuados, totalAjustes, totalSinObs,
    promesaStats, promesaDestacada, promesaIncumplida,
  } = loaderData;

  const today = new Date().toLocaleDateString("es-CL", { day: "numeric", month: "long", year: "numeric" });

  const donutSegments = [
    { value: totalDescontinuados, color: "var(--color-malo)", label: "Descontinuar" },
    { value: totalAjustes, color: "var(--color-feo)", label: "Ajuste -15%" },
    { value: totalSinObs, color: "var(--color-bueno)", label: "Sin observaciones" },
  ];

  const topRecortes = programas
    .filter((p) => p.recomendacion === "descontinuar")
    .sort((a, b) => b.montoEjecutado2025MilesCLP - a.montoEjecutado2025MilesCLP)
    .slice(0, 6);
  const maxMonto = Math.max(...topRecortes.map((p) => p.montoEjecutado2025MilesCLP));

  const programasAlarmantes = [
    "ju-pae", "ip-bono-invierno", "senadis-ayudas-tecnicas",
    "sss-chile-te-cuida", "sss-protege-calle", "conadi-tierras-articulo-20",
  ];
  // Find them flexibly (some slugs differ)
  const alarmantes = [
    programas.find((p) => p.slug === "ju-pae"),
    programas.find((p) => p.slug === "ips-bono-invierno"),
    programas.find((p) => p.slug === "senadis-ayudas-tecnicas"),
    programas.find((p) => p.slug === "sss-chile-te-cuida"),
    programas.find((p) => p.slug === "sss-protege-calle"),
    programas.find((p) => p.slug === "sss-bono-graduacion"),
  ].filter(Boolean);

  return (
    <div>
      {/* HERO con tesis editorial */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-12 pb-16 sm:pt-20 sm:pb-24">
          <div className="fade-up flex items-center gap-2 text-sm">
            <span className="dot bg-[--color-malo] pulse" />
            <span className="text-[--color-fg-2]">En curso · {today}</span>
          </div>
          <h1 className="fade-up fade-up-1 mt-6 text-5xl sm:text-7xl lg:text-[7.5rem] font-black tracking-tighter leading-[0.92] max-w-5xl">
            <span className="gradient-text">Lo que dicen.</span><br />
            <span className="text-[--color-accent]">Lo que muestran los datos.</span>
          </h1>
          <p className="fade-up fade-up-2 mt-8 text-lg sm:text-xl text-[--color-fg-2] max-w-3xl leading-relaxed">
            El gobierno de Jose Antonio Kast justifica recortar {totalDescontinuados} programas y rebajar {totalAjustes} mas con el argumento de la <span className="font-semibold text-[--color-fg]">"estrechez fiscal"</span>. Los indicadores macroeconomicos no describen un pais en quiebra. Aca contrastamos ambas versiones con fuentes verificables.
          </p>
          <div className="fade-up fade-up-3 mt-10 flex flex-wrap gap-3">
            <Link to="/decisiones" className="btn btn-primary">
              Ver decisiones
              <span aria-hidden>→</span>
            </Link>
            <Link to="/promesas" className="btn btn-secondary">
              Ver promesas
            </Link>
            <Link to="/sobre" className="btn btn-ghost">
              Como funciona
            </Link>
          </div>
        </div>
      </section>

      {/* CONTRASTE: NARRATIVA OFICIAL VS DATOS MACRO */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-16 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-6">
          <div className="card p-7 sm:p-9 relative overflow-hidden" style={{ background: "linear-gradient(135deg, rgba(248,113,113,0.06), var(--color-surface))" }}>
            <span className="absolute top-0 left-0 right-0 h-1 bg-[--color-malo]" aria-hidden />
            <p className="label text-[--color-malo]">Narrativa oficial</p>
            <h2 className="mt-3 text-2xl sm:text-3xl font-black tracking-tight leading-tight">
              {NARRATIVA_OFICIAL.titular}
            </h2>
            <blockquote className="mt-5 pl-5 border-l-4 border-[--color-malo] text-[--color-fg-2] italic">
              «{NARRATIVA_OFICIAL.citaTexto}»
              <cite className="block mt-2 text-xs not-italic text-[--color-fg-3]">— {NARRATIVA_OFICIAL.citaFuente}</cite>
            </blockquote>
            <p className="mt-5 text-sm text-[--color-fg-3]">
              Es el argumento usado para instruir descontinuar {totalDescontinuados} programas publicos y rebajar {totalAjustes} mas a partir del presupuesto 2027.
            </p>
          </div>

          <div className="card p-7 sm:p-9 relative overflow-hidden" style={{ background: "linear-gradient(135deg, rgba(52,211,153,0.06), var(--color-surface))" }}>
            <span className="absolute top-0 left-0 right-0 h-1 bg-[--color-bueno]" aria-hidden />
            <p className="label text-[--color-bueno]">Lo que muestran los datos</p>
            <h2 className="mt-3 text-2xl sm:text-3xl font-black tracking-tight leading-tight">
              {CONTRASTE.titular}
            </h2>
            <p className="mt-5 text-base text-[--color-fg] leading-relaxed">
              {CONTRASTE.texto}
            </p>
            <p className="mt-5 text-xs text-[--color-fg-3]">
              Fuentes: Banco Central de Chile, FMI World Economic Outlook, S&amp;P Global, JP Morgan EMBI.
            </p>
          </div>
        </div>

        {/* Indicadores macro */}
        <div className="mt-6 grid grid-cols-2 lg:grid-cols-3 gap-3">
          {INDICADORES_MACRO.map((ind) => (
            <div key={ind.slug} className="card p-5 sm:p-6">
              <p className="label">{ind.titulo}</p>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="font-display text-3xl sm:text-4xl font-black num tracking-tighter">
                  {ind.valor}
                </span>
                {ind.unidad && (
                  <span className="text-xs text-[--color-fg-3] font-medium">{ind.unidad}</span>
                )}
              </div>
              <p className="mt-3 text-sm text-[--color-fg] leading-snug">{ind.lectura}</p>
              <p className="mt-2 text-xs text-[--color-fg-3]">{ind.contexto}</p>
              <p className="mt-3 text-[10px] uppercase tracking-wider text-[--color-fg-4]">
                Fuente · {ind.fuente}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* RESUMEN DEL AJUSTE — los numeros del recorte */}
      <section className="border-t border-[--color-border]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 lg:py-20">
          <div className="max-w-3xl">
            <p className="label">El recorte en numeros</p>
            <h2 className="mt-3 text-3xl sm:text-5xl font-black tracking-tighter leading-tight">
              {totalProgramas} programas catalogados en {ministeriosConData.length} ministerios
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[--color-fg-2] leading-relaxed">
              {totalDescontinuados} a descontinuar. {totalAjustes} con rebaja de al menos −15%. {totalSinObs} sin observaciones. Toda la data viene de los anexos firmados del Oficio Circular N°16 de Hacienda.
            </p>
          </div>

          <div className="mt-10 grid lg:grid-cols-12 gap-6">
            <div className="card p-7 lg:col-span-5">
              <p className="label">Distribucion</p>
              <div className="mt-6 flex flex-col sm:flex-row items-center gap-7">
                <DonutChart
                  segments={donutSegments}
                  size={180}
                  thickness={26}
                  center={{ value: totalProgramas, label: "Programas" }}
                />
                <ul className="flex-1 space-y-3.5 w-full">
                  {donutSegments.map((seg) => {
                    const pct = ((seg.value / totalProgramas) * 100).toFixed(1);
                    return (
                      <li key={seg.label} className="flex items-baseline justify-between gap-3 pb-3 border-b border-[--color-border] last:border-0 last:pb-0">
                        <div className="flex items-center gap-2.5">
                          <span className="dot" style={{ background: seg.color, width: 8, height: 8 }} />
                          <span className="text-sm text-[--color-fg-2]">{seg.label}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-base font-bold num">{seg.value}</span>
                          <span className="ml-2 text-xs text-[--color-fg-3] num">{pct}%</span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 gap-3">
              <Stat label="A descontinuar" value={totalDescontinuados} sub={`de ${totalProgramas} programas`} tone="malo" />
              <Stat label="Rebaja −15%" value={totalAjustes} sub="ajuste presupuestario" tone="feo" />
              <Stat label="Sin observaciones" value={totalSinObs} sub="continuan igual" tone="bueno" />
              <Stat label="Recorte 2027–2031" value="US$6B" sub="proyectado por Hacienda" tone="malo" />
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMAS ALARMANTES */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-16 lg:pb-24">
        <div className="flex items-baseline justify-between mb-6">
          <div>
            <p className="label text-[--color-malo]">Lo mas alarmante</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black tracking-tighter">
              Programas que tocan a quienes mas lo necesitan
            </h2>
            <p className="mt-3 text-sm text-[--color-fg-2] max-w-2xl">
              Recortes y rebajas que llegan directamente a poblaciones vulnerables identificables.
            </p>
          </div>
        </div>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {alarmantes.map((p) => {
            if (!p) return null;
            const servicio = servicios.find((s) => s.slug === p.servicioSlug);
            const ministerio = servicio ? ministerioBySlug(servicio.ministerioSlug) : null;
            const isDesc = p.recomendacion === "descontinuar";
            return (
              <li key={p.slug}>
                <Link to={`/ministerios/${ministerio?.slug ?? ""}`} className="block group focus-ring rounded-xl">
                  <div className="card-interactive p-5 h-full relative overflow-hidden">
                    <span className={`absolute left-0 top-0 bottom-0 w-1 ${isDesc ? "bg-[--color-malo]" : "bg-[--color-feo]"}`} aria-hidden />
                    <div className="flex items-center gap-2">
                      <span className={`pill ${isDesc ? "pill-malo" : "pill-feo"}`}>
                        {isDesc ? "Se elimina" : "Rebaja −15%"}
                      </span>
                      <span className="text-[10px] uppercase tracking-wider text-[--color-fg-3]">
                        {ministerio?.abrev}
                      </span>
                    </div>
                    <h3 className="mt-3 text-base font-bold leading-tight group-hover:text-[--color-accent] transition-colors line-clamp-3">
                      {p.nombre}
                    </h3>
                    {p.montoEjecutado2025MilesCLP > 0 && (
                      <p className="mt-3 text-sm num font-bold text-[--color-fg]">
                        {formatMilesCLP(p.montoEjecutado2025MilesCLP)}
                        <span className="ml-1 text-xs font-normal text-[--color-fg-3]">ejecutado 2025</span>
                      </p>
                    )}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      {/* PROMESAS — la zanja destacada */}
      <section className="border-t border-[--color-border]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 lg:py-20">
          <div className="flex items-baseline justify-between flex-wrap gap-3 mb-8">
            <div>
              <p className="label">Promesas de campaña</p>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black tracking-tighter">
                Lo que prometio · Lo que esta pasando
              </h2>
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="pill pill-bueno num">{promesaStats.cumplidas} cumplidas</span>
              <span className="pill pill-malo num">{promesaStats.incumplidas} incumplidas</span>
              <span className="pill pill-info num">{promesaStats.enProceso} en proceso</span>
              <span className="pill pill-feo num">{promesaStats.estancadas} estancadas</span>
              <span className="pill pill-neutral num">{promesaStats.sinInfo} sin info</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-4">
            {promesaDestacada && <PromesaCard promesa={promesaDestacada} featured />}
            {promesaIncumplida && <PromesaCard promesa={promesaIncumplida} featured />}
          </div>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {PROMESAS.filter((p) => p.slug !== "zanja-frontera-norte" && p.estado !== "incumplida")
              .slice(0, 6)
              .map((p) => (
                <PromesaCard key={p.slug} promesa={p} />
              ))}
          </div>

          <div className="mt-8 flex justify-end">
            <Link to="/promesas" className="text-sm text-[--color-accent] hover:text-[--color-accent-hover] font-semibold inline-flex items-center gap-1.5">
              Ver todas las promesas
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* DECISIONES */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 lg:py-20">
        <div className="flex items-baseline justify-between mb-6">
          <div>
            <p className="label">Registro</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black tracking-tighter">Decisiones recientes</h2>
          </div>
          <Link to="/decisiones" className="text-sm text-[--color-fg-2] hover:text-[--color-accent] transition-colors">
            Todas →
          </Link>
        </div>
        <div className="grid gap-4">
          {decisiones.slice(0, 4).map((d, i) => (
            <DecisionCard key={d.slug} decision={d} featured={i === 0} />
          ))}
        </div>
      </section>

      {/* MINISTERIOS GRID */}
      <section className="border-t border-[--color-border]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 lg:py-20">
          <div className="flex items-baseline justify-between mb-8">
            <div>
              <p className="label">Por ministerio</p>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black tracking-tighter">Donde golpea el ajuste</h2>
            </div>
            <Link to="/ministerios" className="text-sm text-[--color-fg-2] hover:text-[--color-accent] transition-colors">
              Todos →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {ministeriosConData.map(({ ministerio, stats }) => {
              const ministro = ministroByMinisterio(ministerio.slug);
              const segs = [
                { value: stats.descontinuados, color: "var(--color-malo)", label: "Descontinuar" },
                { value: stats.ajustes, color: "var(--color-feo)", label: "Ajuste" },
                { value: stats.sinObservaciones, color: "var(--color-bueno)", label: "Sin obs" },
              ];
              return (
                <Link key={ministerio.slug} to={`/ministerios/${ministerio.slug}`} className="block group focus-ring rounded-xl">
                  <div className="card-interactive p-5 h-full flex flex-col">
                    <p className="label">{ministerio.abrev || "Ministerio"}</p>
                    <h3 className="mt-2 text-base font-bold tracking-tight leading-tight group-hover:text-[--color-accent] transition-colors">
                      {ministerio.nombre}
                    </h3>
                    {ministro && (
                      <div className="mt-3 flex items-center gap-2">
                        <Avatar nombre={ministro.nombre} fotoUrl={ministro.fotoUrl} size={24} />
                        <span className="text-xs text-[--color-fg-2] truncate">{ministro.nombre.split(" ").slice(0, 2).join(" ")}</span>
                      </div>
                    )}
                    <div className="mt-4">
                      <StackedBar segments={segs} total={stats.programas} height={6} />
                    </div>
                    <div className="mt-3 flex items-center justify-between text-xs">
                      <span className="text-[--color-fg-3] num">{stats.programas} prog</span>
                      <div className="flex gap-2">
                        {stats.descontinuados > 0 && <span className="text-[--color-malo] font-bold num">−{stats.descontinuados}</span>}
                        {stats.ajustes > 0 && <span className="text-[--color-feo] font-bold num">↓{stats.ajustes}</span>}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* GABINETE COMPLETO */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 lg:py-20">
        <div className="mb-8">
          <p className="label">El gabinete</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-black tracking-tighter">Las 24 personas que firman</h2>
          <p className="mt-3 text-sm text-[--color-fg-2] max-w-3xl">
            Ministros y ministras del gobierno de Jose Antonio Kast en funciones desde el 11 de marzo de 2026.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {MINISTROS.filter((m, i, arr) => arr.findIndex((x) => x.nombre === m.nombre) === i).map((m) => (
            <Link key={m.ministerioSlug + m.nombre} to={`/ministerios/${m.ministerioSlug}`} className="block group focus-ring rounded-xl">
              <div className="card-interactive p-4 h-full flex flex-col items-center text-center">
                <Avatar nombre={m.nombre} fotoUrl={m.fotoUrl} size={64} />
                <p className="mt-3 text-sm font-bold leading-tight group-hover:text-[--color-accent] transition-colors">
                  {m.nombre}
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-wider text-[--color-fg-3] line-clamp-2">
                  {m.cargo.replace(/^Ministr[oa]\s+(de|del)\s+/, "")}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* TOP RECORTES */}
      <section className="border-t border-[--color-border]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 lg:py-20">
          <div className="card p-7 sm:p-10">
            <div className="flex items-baseline justify-between mb-8 flex-wrap gap-3">
              <div>
                <p className="label">Top monto · A descontinuar</p>
                <h2 className="mt-2 text-3xl sm:text-4xl font-black tracking-tighter">Los recortes mas grandes</h2>
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
                {totalDescontinuados} programas a descontinuar en total. Monto en pesos 2026.
              </p>
              <Link to="/programas" className="text-sm text-[--color-accent] hover:text-[--color-accent-hover] font-semibold inline-flex items-center gap-1.5">
                Ver todos los programas
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
