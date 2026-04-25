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
import { PromesaCard } from "~/components/PromesaCard";
import { RetractacionCard } from "~/components/RetractacionCard";
import { RETRACTACIONES, RETRACTACIONES_BY_EMISOR, retractacionesOrdenadas } from "~/data/retractaciones";
import { SERIE_CADEM, ULTIMA_APROBACION, PERCEPCION_CLAVES } from "~/data/aprobacion";
import { EncuestaSparkline } from "~/components/EncuestaSparkline";
import { INDICADORES_SEGURIDAD } from "~/data/seguridad";
import { CRONOLOGIA, cronologiaOrdenada } from "~/data/cronologia";
import { INDICADORES_MACRO } from "~/data/macro";

export function meta() {
  return [
    { title: "Chile Cumple — Observatorio del gobierno de Jose Antonio Kast" },
    { name: "description", content: "Promesas, decisiones, recortes, reformas y retractaciones del gobierno de Jose Antonio Kast con fuentes verificadas. Lo bueno, lo malo y lo feo." },
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
  const retractacionesTop = retractacionesOrdenadas()
    .filter((r) => r.severidad >= 3)
    .slice(0, 6);
  const ranking = RETRACTACIONES_BY_EMISOR().slice(0, 6);
  const eventosRecientes = cronologiaOrdenada().slice(0, 8);

  return {
    decisiones,
    ministeriosConData,
    totalProgramas,
    totalDescontinuados,
    totalAjustes,
    totalSinObs,
    promesaStats,
    retractacionesTop,
    ranking,
    eventosRecientes,
  };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const {
    decisiones, ministeriosConData,
    totalProgramas, totalDescontinuados, totalAjustes, totalSinObs,
    promesaStats, retractacionesTop, ranking, eventosRecientes,
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

  const promesaIncumplida = PROMESAS.find((p) => p.slug === "no-recorte-vulnerables");
  const promesaContraditoria = PROMESAS.find((p) => p.slug === "no-conflictos-interes");

  const aprobInicial = SERIE_CADEM[0]?.aprobacion ?? 53;
  const aprobActual = ULTIMA_APROBACION.aprobacion;
  const deltaAprob = aprobActual - aprobInicial;

  return (
    <div>
      {/* HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-[--color-border]">
        <div className="absolute inset-0 grid-bg opacity-30" aria-hidden />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-12 pb-12 sm:pt-20 sm:pb-16">
          <div className="fade-up flex items-center gap-3 text-xs">
            <span className="dot bg-[--color-malo] pulse" />
            <span className="num uppercase tracking-wider text-[--color-fg-3]">
              Edicion {today} · Dia 45 del gobierno
            </span>
          </div>

          <h1 className="fade-up fade-up-1 mt-6 text-5xl sm:text-7xl lg:text-[7.5rem] font-black tracking-tighter leading-[0.9] max-w-5xl">
            <span className="gradient-text">Lo que dijeron.</span>
            <br />
            <span className="text-[--color-accent]">Lo que tuvieron que recoger.</span>
          </h1>

          <p className="fade-up fade-up-2 mt-8 text-lg sm:text-xl text-[--color-fg-2] max-w-3xl leading-relaxed">
            En 45 dias el gobierno de Jose Antonio Kast acumula <strong className="text-[--color-fg]">{RETRACTACIONES.length} retractaciones</strong> publicas, <strong className="text-[--color-fg]">{promesaStats.incumplidas} promesas incumplidas</strong>, un <strong className="text-[--color-fg]">recorte fiscal de US$6.000 millones</strong> que toca al PAE, al Bono Invierno y a las pensiones del sistema de reparto, y una megareforma que beneficia patrimonialmente a sus propios ministros en CLP$292.515 millones. Aca catalogamos las fuentes.
          </p>

          <div className="fade-up fade-up-3 mt-10 flex flex-wrap gap-3">
            <Link to="/retractaciones" className="btn btn-primary">
              Ver retractaciones
              <span aria-hidden>→</span>
            </Link>
            <Link to="/cronologia" className="btn btn-secondary">
              Cronologia 45 dias
            </Link>
            <Link to="/promesas" className="btn btn-ghost">
              Tracker de promesas
            </Link>
          </div>

          {/* Bandera de KPIs duros */}
          <div className="fade-up fade-up-4 mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3">
            <KpiHero
              valor={String(RETRACTACIONES.length)}
              label="Retractaciones"
              sub="declaraciones que tuvieron que recoger"
              tone="malo"
            />
            <KpiHero
              valor={`${aprobActual}%`}
              label="Aprobacion"
              sub={`${deltaAprob >= 0 ? "+" : ""}${deltaAprob} pts vs 13-mar (Cadem)`}
              tone={deltaAprob < 0 ? "malo" : "bueno"}
            />
            <KpiHero
              valor="US$6.000 M"
              label="Recorte fiscal 27-31"
              sub={`${totalDescontinuados} programas + ${totalAjustes} con rebaja`}
              tone="malo"
            />
            <KpiHero
              valor="$292.515 M"
              label="Beneficio megareforma"
              sub="concentrado 98,8% en 6 ministros (Nodo XXI)"
              tone="malo"
            />
          </div>
        </div>
      </section>

      {/* APROBACION + PERCEPCION ──────────────────────────────────────────── */}
      <section className="border-b border-[--color-border]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 lg:py-20">
          <div className="grid lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 card p-7 sm:p-9">
              <div className="flex items-baseline justify-between flex-wrap gap-3">
                <div>
                  <p className="label text-[--color-malo]">Caida libre</p>
                  <h2 className="mt-2 text-3xl sm:text-4xl font-black tracking-tighter leading-tight">
                    Aprobacion presidencial · Cadem
                  </h2>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="num text-5xl sm:text-6xl font-black text-[--color-accent]">{aprobActual}%</span>
                </div>
              </div>
              <div className="mt-6">
                <EncuestaSparkline serie={SERIE_CADEM} height={140} />
              </div>
              <div className="mt-4 flex items-center gap-4 text-xs text-[--color-fg-3]">
                <span className="flex items-center gap-1.5">
                  <span className="dot bg-[--color-accent]" />
                  Aprobacion
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="dot bg-[--color-malo]" />
                  Desaprobacion
                </span>
                <span className="num">{SERIE_CADEM.length} mediciones · 15-dic-2025 → {SERIE_CADEM[SERIE_CADEM.length - 1].fecha}</span>
              </div>
              <p className="mt-4 text-sm text-[--color-fg-2] leading-relaxed">
                Criteria registra una caida adicional a 36% el 12-abr (tercera consecutiva). Panel UDD reporta una baja de 17 puntos desde el inicio del Gobierno.
              </p>
            </div>

            <ul className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PERCEPCION_CLAVES.map((p) => (
                <li key={p.afirma} className="card p-5">
                  <span className="num text-3xl sm:text-4xl font-black text-[--color-fg]">{p.valor}</span>
                  <p className="mt-2 text-sm text-[--color-fg-2] leading-snug">{p.afirma}</p>
                  <p className="mt-2 text-[10px] uppercase tracking-wider text-[--color-fg-4] num">{p.fuente}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* RETRACTACIONES ───────────────────────────────────────────────────── */}
      <section className="border-b border-[--color-border]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 lg:py-20">
          <div className="flex items-baseline justify-between flex-wrap gap-3 mb-8">
            <div className="max-w-2xl">
              <p className="label text-[--color-malo]">Lo que tuvieron que recoger</p>
              <h2 className="mt-2 text-3xl sm:text-5xl font-black tracking-tighter leading-tight">
                {RETRACTACIONES.length} retractaciones en 45 dias
              </h2>
              <p className="mt-4 text-base text-[--color-fg-2] leading-relaxed">
                Declaraciones publicas que terminaron rectificadas, contradichas dentro del propio gabinete, eliminadas de redes oficiales o desmentidas por datos. Es el ranking de quien ha tenido que recoger sus dichos.
              </p>
            </div>
            <Link to="/retractaciones" className="btn btn-secondary text-sm">
              Ver todas →
            </Link>
          </div>

          <div className="grid lg:grid-cols-12 gap-6">
            <ul className="lg:col-span-5 space-y-2">
              <li className="text-xs text-[--color-fg-3] uppercase tracking-wider mb-3">Ranking por emisor</li>
              {ranking.map((row, i) => (
                <li key={row.emisor} className="card p-4 flex items-center gap-3">
                  <span className="num text-2xl font-black text-[--color-fg-3] w-8">
                    {(i + 1).toString().padStart(2, "0")}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold tracking-tight truncate">{row.emisor}</p>
                    <p className="text-[10px] text-[--color-fg-3] mt-0.5 uppercase tracking-wider num">
                      {row.total} {row.total === 1 ? "registro" : "registros"} · sev {row.severidadMax}/4
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: row.total }).map((_, j) => (
                      <span key={j} className="dot bg-[--color-malo]" style={{ width: 7, height: 7 }} />
                    ))}
                  </div>
                </li>
              ))}
            </ul>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-3">
              {retractacionesTop.slice(0, 4).map((r) => (
                <RetractacionCard key={r.slug} r={r} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROMESAS — incumplida + tracker ──────────────────────────────────── */}
      <section className="border-b border-[--color-border]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 lg:py-20">
          <div className="flex items-baseline justify-between flex-wrap gap-3 mb-8">
            <div>
              <p className="label">Programa vs realidad</p>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black tracking-tighter">
                Lo que prometio · Lo que esta pasando
              </h2>
              <p className="mt-3 text-sm text-[--color-fg-2] max-w-2xl">
                {promesaStats.total} promesas extraidas del programa de gobierno y la campaña, contrastadas con las decisiones de los primeros 45 dias.
              </p>
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
            {promesaIncumplida && <PromesaCard promesa={promesaIncumplida} featured />}
            {promesaContraditoria && <PromesaCard promesa={promesaContraditoria} featured />}
          </div>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {PROMESAS.filter((p) => p.estado === "incumplida" || p.estado === "estancada")
              .slice(0, 6)
              .map((p) => (
                <PromesaCard key={p.slug} promesa={p} />
              ))}
          </div>

          <div className="mt-8 flex justify-end">
            <Link to="/promesas" className="text-sm text-[--color-accent] hover:text-[--color-accent-hover] font-semibold inline-flex items-center gap-1.5">
              Ver las {promesaStats.total} promesas
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CRONOLOGIA RECIENTE ─────────────────────────────────────────────── */}
      <section className="border-b border-[--color-border]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 lg:py-20">
          <div className="flex items-baseline justify-between flex-wrap gap-3 mb-8">
            <div>
              <p className="label">Linea de tiempo</p>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black tracking-tighter">Ultimos hitos</h2>
            </div>
            <Link to="/cronologia" className="btn btn-secondary text-sm">
              Cronologia completa →
            </Link>
          </div>
          <ol className="grid lg:grid-cols-2 gap-3">
            {eventosRecientes.map((ev) => (
              <li key={ev.slug} className="card-interactive p-5 flex gap-4">
                <span
                  className={`shrink-0 mt-1 dot ${
                    ev.etiqueta === "malo"
                      ? "bg-[--color-malo]"
                      : ev.etiqueta === "feo"
                      ? "bg-[--color-feo]"
                      : ev.etiqueta === "bueno"
                      ? "bg-[--color-bueno]"
                      : "bg-[--color-info]"
                  }`}
                  style={{ width: 10, height: 10 }}
                />
                <div className="flex-1 min-w-0">
                  <p className="num text-[10px] uppercase tracking-wider text-[--color-fg-3]">
                    {new Date(ev.fecha + "T12:00:00").toLocaleDateString("es-CL", { day: "numeric", month: "short" })}
                    {ev.fuenteMedio && <span className="ml-2">· {ev.fuenteMedio}</span>}
                  </p>
                  <h3 className="mt-1 text-base font-bold leading-tight">{ev.titulo}</h3>
                  <p className="mt-2 text-sm text-[--color-fg-2] leading-snug line-clamp-2">{ev.resumen}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SEGURIDAD — promesa estrella vs datos ───────────────────────────── */}
      <section className="border-b border-[--color-border]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 lg:py-20">
          <div className="max-w-3xl">
            <p className="label">Eje seguridad</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black tracking-tighter">
              El “Plan Implacable” a la luz de los datos
            </h2>
            <p className="mt-3 text-base text-[--color-fg-2] leading-relaxed">
              La seguridad fue el eje 1 de la campaña. Aca contrastamos la cifra publicada con la promesa: que es continuidad de gestiones anteriores, que es resultado del primer mes y que sigue sin proyecto de ley.
            </p>
          </div>

          <ul className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {INDICADORES_SEGURIDAD.map((ind) => (
              <li key={ind.slug} className="card p-5 sm:p-6">
                <div className="flex items-center gap-2">
                  <span className="label text-[10px]">{ind.titulo}</span>
                  <span
                    className={`pill text-[10px] ${
                      ind.signo === "a_favor" ? "pill-bueno" : ind.signo === "en_contra" ? "pill-malo" : "pill-neutral"
                    }`}
                  >
                    {ind.signo === "a_favor" ? "Favor relato" : ind.signo === "en_contra" ? "Contra relato" : "Neutro"}
                  </span>
                </div>
                <span className="mt-3 block num text-3xl sm:text-4xl font-black tracking-tighter text-[--color-fg]">
                  {ind.valor}
                </span>
                <p className="mt-1 text-xs text-[--color-fg-3] num">{ind.contra}</p>
                <p className="mt-3 text-sm text-[--color-fg-2] leading-snug">{ind.lectura}</p>
                <p className="mt-3 text-[10px] uppercase tracking-wider text-[--color-fg-4]">
                  Fuente · {ind.fuente}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PROGRAMAS ALARMANTES ────────────────────────────────────────────── */}
      <section className="border-b border-[--color-border]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 lg:py-20">
          <div className="flex items-baseline justify-between mb-6">
            <div>
              <p className="label text-[--color-malo]">Lo mas alarmante</p>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black tracking-tighter">
                Programas que tocan a quienes mas lo necesitan
              </h2>
              <p className="mt-3 text-sm text-[--color-fg-2] max-w-2xl">
                Recortes y rebajas que llegan directamente a poblaciones vulnerables identificables — niñez, discapacidad, adultos mayores, mujeres jefas de hogar.
              </p>
            </div>
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              programas.find((p) => p.slug === "ju-pae"),
              programas.find((p) => p.slug === "ips-bono-invierno"),
              programas.find((p) => p.slug === "senadis-ayudas-tecnicas"),
              programas.find((p) => p.slug === "sss-chile-te-cuida"),
              programas.find((p) => p.slug === "sss-protege-calle"),
              programas.find((p) => p.slug === "sss-bono-graduacion"),
            ]
              .filter(Boolean)
              .map((p) => {
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
        </div>
      </section>

      {/* AJUSTE EN NUMEROS ───────────────────────────────────────────────── */}
      <section className="border-b border-[--color-border]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 lg:py-20">
          <div className="max-w-3xl">
            <p className="label">El recorte en numeros</p>
            <h2 className="mt-3 text-3xl sm:text-5xl font-black tracking-tighter leading-tight">
              {totalProgramas} programas en {ministeriosConData.length} ministerios
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

          <div className="mt-12 card p-7">
            <p className="label">Top monto · A descontinuar</p>
            <h3 className="mt-2 text-2xl sm:text-3xl font-black tracking-tighter">Los recortes mas grandes</h3>
            <div className="mt-8 space-y-5">
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
          </div>
        </div>
      </section>

      {/* CONTRASTE MACRO — narrativa oficial vs datos ──────────────────── */}
      <section className="border-b border-[--color-border]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 lg:py-20">
          <p className="label">Narrativa oficial vs indicadores</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-black tracking-tighter">
            “Estado en quiebra” — y que dicen los datos
          </h2>
          <p className="mt-3 text-sm text-[--color-fg-2] max-w-3xl">
            La pieza grafica del Gobierno hablaba de un Estado endeudado en mas de US$49.000 millones. La pieza fue eliminada y el ministro Quiroz se distancio de la frase. Estos son los indicadores que componen la situacion fiscal real.
          </p>
          <ul className="mt-8 grid grid-cols-2 lg:grid-cols-3 gap-3">
            {INDICADORES_MACRO.map((ind) => (
              <li key={ind.slug} className="card p-5 sm:p-6">
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
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* DECISIONES ─────────────────────────────────────────────────────── */}
      <section className="border-b border-[--color-border]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 lg:py-20">
          <div className="flex items-baseline justify-between mb-6">
            <div>
              <p className="label">Registro</p>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black tracking-tighter">Decisiones de Estado</h2>
            </div>
            <Link to="/decisiones" className="text-sm text-[--color-fg-2] hover:text-[--color-accent] transition-colors">
              Todas →
            </Link>
          </div>
          <div className="grid gap-4">
            {decisiones.slice(0, 5).map((d, i) => (
              <DecisionCard key={d.slug} decision={d} featured={i === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* MINISTERIOS GRID + GABINETE ────────────────────────────────────── */}
      <section>
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

          <div className="mt-16">
            <p className="label">El gabinete</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black tracking-tighter">Las 24 personas que firman</h2>
            <p className="mt-3 text-sm text-[--color-fg-2] max-w-3xl">
              Ministras y ministros del gobierno de Jose Antonio Kast en funciones desde el 11 de marzo de 2026.
            </p>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
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
          </div>
        </div>
      </section>
    </div>
  );
}

function KpiHero({ valor, label, sub, tone }: { valor: string; label: string; sub: string; tone?: "malo" | "feo" | "info" | "bueno" }) {
  const color =
    tone === "malo" ? "text-[--color-malo]"
    : tone === "feo" ? "text-[--color-feo]"
    : tone === "info" ? "text-[--color-info]"
    : tone === "bueno" ? "text-[--color-bueno]"
    : "text-[--color-fg]";
  return (
    <div className="card p-5 sm:p-6">
      <p className="label text-[10px]">{label}</p>
      <span className={`mt-2 block num text-3xl sm:text-4xl font-black tracking-tighter leading-none ${color}`}>{valor}</span>
      <p className="mt-2 text-[11px] sm:text-xs text-[--color-fg-3] leading-snug">{sub}</p>
    </div>
  );
}
