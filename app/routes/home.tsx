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
import { cronologiaOrdenada } from "~/data/cronologia";
import { INDICADORES_MACRO } from "~/data/macro";
import { GobiernoClock } from "~/components/GobiernoClock";
import { CUNAS, cunasOrdenadas } from "~/data/cunas";
import { MENTIRAS } from "~/data/mentiras";
import { SEREMIS, SEREMIS_STATS } from "~/data/seremis";

export function meta() {
  return [
    { title: "Chile Cumple — Observatorio del gobierno de José Antonio Kast" },
    { name: "description", content: "Promesas, decisiones, recortes, reformas, mentiras y retractaciones del gobierno de José Antonio Kast con fuentes verificadas. Lo bueno, lo malo y lo feo." },
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
  const cunasTop = cunasOrdenadas().slice(0, 4);
  const seremiStats = SEREMIS_STATS();

  // Zanja del Plan Escudo Fronterizo:
  // - 30 km prometidos en 90 días desde el 16-mar-2026 (deadline 14-jun-2026)
  // - 12 km construidos al 22-abr-2026 (CNN Chile)
  // - meta total declarada por el Ejecutivo: 500 km a lo largo del borde norte
  const zanjaInicio = new Date("2026-03-16T12:00:00Z").getTime();
  const zanjaFin = zanjaInicio + 90 * 86_400_000;
  const ahoraMs = Date.now();
  const diasZanja = Math.max(0, Math.floor((ahoraMs - zanjaInicio) / 86_400_000));
  const diasRestantes = Math.max(0, Math.ceil((zanjaFin - ahoraMs) / 86_400_000));
  const zanja = {
    kmConstruidos: 12,
    kmTramo: 30,
    kmTotal: 500,
    diasTranscurridos: diasZanja,
    diasTotales: 90,
    diasRestantes,
    pctTramo: (12 / 30) * 100,
    pctPlazo: (diasZanja / 90) * 100,
    pctTotal: (12 / 500) * 100,
    ritmoReal: diasZanja > 0 ? 12 / diasZanja : 0,
    ritmoNecesario: 30 / 90,
  };

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
    cunasTop,
    seremiStats,
    zanja,
  };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const {
    decisiones, ministeriosConData,
    totalProgramas, totalDescontinuados, totalAjustes, totalSinObs,
    promesaStats, retractacionesTop, ranking, eventosRecientes,
    cunasTop, seremiStats, zanja,
  } = loaderData;

  const today = new Date().toLocaleDateString("es-CL", { day: "numeric", month: "long", year: "numeric" });

  const donutSegments = [
    { value: totalDescontinuados, color: "var(--color-malo)", label: "Descontinuar" },
    { value: totalAjustes, color: "var(--color-feo)", label: "Ajuste −15%" },
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
          <div className="fade-up flex items-center gap-3 text-xs flex-wrap">
            <span className="dot bg-[--color-malo] pulse" />
            <span className="num uppercase tracking-wider text-[--color-fg-3]">
              Edición {today}
            </span>
            <span className="text-[--color-fg-4]">·</span>
            <span className="text-[--color-fg-3]">
              Sin afiliación política. Sin financiamiento de partidos, gobierno ni campañas.
            </span>
          </div>

          <h1 className="fade-up fade-up-1 mt-6 text-5xl sm:text-7xl lg:text-[7.5rem] font-black tracking-tighter leading-[0.9] max-w-5xl">
            <span className="gradient-text">Lo que prometieron.</span>
            <br />
            <span className="text-[--color-accent]">Lo que están haciendo.</span>
          </h1>

          <p className="fade-up fade-up-2 mt-8 text-lg sm:text-xl text-[--color-fg-2] max-w-3xl leading-relaxed">
            En 45 días, el gobierno de José Antonio Kast acumula{" "}
            <strong className="text-[--color-fg]">{RETRACTACIONES.length} retractaciones</strong> públicas,{" "}
            <strong className="text-[--color-fg]">{MENTIRAS.length} dichos desmentidos por fact-check</strong>,{" "}
            <strong className="text-[--color-fg]">{seremiStats.total} seremis caídos</strong> en menos de 50 días,
            un <strong className="text-[--color-fg]">recorte fiscal de US$6.000 millones</strong> que toca al PAE,
            al Bono Invierno y a las pensiones del sistema de reparto, y una megareforma que beneficia
            patrimonialmente a sus propios ministros en CLP$292.515 millones. Acá catalogamos todo con la
            cita textual, la fecha y el medio donde se dijo.
          </p>

          <div className="fade-up fade-up-3 mt-10 flex flex-wrap gap-3">
            <Link to="/retractaciones" className="btn btn-primary">
              Ver retractaciones
              <span aria-hidden>→</span>
            </Link>
            <Link to="/mentiras" className="btn btn-secondary">
              Mentiras chequeadas
            </Link>
            <Link to="/cronologia" className="btn btn-secondary">
              Cronología 45 días
            </Link>
            <Link to="/promesas" className="btn btn-ghost">
              Tracker de promesas
            </Link>
          </div>

          {/* Reloj del gobierno + KPIs duros */}
          <div className="fade-up fade-up-4 mt-12 grid lg:grid-cols-12 gap-3">
            <div className="lg:col-span-5">
              <GobiernoClock />
            </div>
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3">
              <KpiHero
                valor={String(RETRACTACIONES.length)}
                label="Retractaciones"
                sub="dichos rectificados, borrados o contradichos"
                tone="malo"
              />
              <KpiHero
                valor={String(MENTIRAS.length)}
                label="Mentiras chequeadas"
                sub="desmentidas por fact-checkers"
                tone="malo"
              />
              <KpiHero
                valor={String(seremiStats.total)}
                label="Seremis caídos"
                sub={`${seremiStats.renunciaron} renunciaron, ${seremiStats.noAsumieron} no asumieron`}
                tone="malo"
              />
              <KpiHero
                valor={`${aprobActual}%`}
                label="Aprobación Cadem"
                sub={`${deltaAprob >= 0 ? "+" : ""}${deltaAprob} pts vs 13-mar`}
                tone={deltaAprob < 0 ? "malo" : "bueno"}
              />
              <KpiHero
                valor="US$6.000 M"
                label="Recorte 2027–2031"
                sub={`${totalDescontinuados} programas + ${totalAjustes} con rebaja`}
                tone="malo"
              />
              <KpiHero
                valor="$292.515 M"
                label="Beneficio megareforma"
                sub="98,8% concentrado en 6 ministros (Nodo XXI)"
                tone="malo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CUÑAS — promesas literales vs realidad ─────────────────────────── */}
      <section className="border-b border-[--color-border]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 lg:py-20">
          <div className="max-w-3xl">
            <p className="label text-[--color-malo]">Cuñas de campaña</p>
            <h2 className="mt-2 text-3xl sm:text-5xl font-black tracking-tighter leading-tight">
              Lo que dijo. Cuándo lo dijo. Qué pasó después.
            </h2>
            <p className="mt-4 text-base text-[--color-fg-2] leading-relaxed">
              Cada frase es una cita textual con fecha y medio. Abajo, lo que terminó pasando con datos oficiales.
              Es la diferencia entre la cuña y la realidad.
            </p>
          </div>

          <ul className="mt-10 grid lg:grid-cols-2 gap-4">
            {cunasTop.map((c) => (
              <li key={c.slug}>
                <article className="card p-6 sm:p-7 relative overflow-hidden h-full">
                  <span className="absolute left-0 top-0 bottom-0 w-1 bg-[--color-malo]" aria-hidden />
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className={`pill ${
                      c.veredicto === "incumplida" ? "pill-malo"
                      : c.veredicto === "contradicha" ? "pill-malo"
                      : c.veredicto === "atrasada" ? "pill-feo"
                      : "pill-feo"
                    }`}>
                      {c.veredicto === "incumplida" ? "Incumplida"
                       : c.veredicto === "contradicha" ? "Se contradijo"
                       : c.veredicto === "atrasada" ? "Atrasada"
                       : "Atenuada"}
                    </span>
                    <span className="text-[--color-fg-4]">·</span>
                    <span className="num text-[10px] uppercase tracking-wider text-[--color-fg-3]">
                      {new Date(c.fechaDicho + "T12:00:00").toLocaleDateString("es-CL", { day: "numeric", month: "short", year: "numeric" })}
                    </span>
                  </div>
                  <blockquote className="mt-4 text-lg sm:text-xl font-bold tracking-tight leading-snug text-[--color-fg]">
                    «{c.cita}»
                  </blockquote>
                  <p className="mt-3 text-xs text-[--color-fg-3]">
                    <span className="uppercase tracking-wider text-[10px] text-[--color-fg-4]">Dicho en: </span>
                    <a href={c.fuenteUrl} target="_blank" rel="noopener noreferrer" className="text-[--color-fg-2] hover:text-[--color-accent] underline-offset-4 hover:underline">
                      {c.donde}
                    </a>
                  </p>
                  <div className="mt-5 pt-5 border-t border-[--color-border]">
                    <p className="label text-[10px]">Lo que pasó</p>
                    <p className="mt-2 text-sm text-[--color-fg] leading-relaxed">{c.realidad}</p>
                    <p className="mt-3 text-[10px] uppercase tracking-wider text-[--color-fg-4]">
                      Fuente · {c.fuenteMedio}
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex justify-end">
            <Link to="/mentiras" className="text-sm text-[--color-accent] hover:text-[--color-accent-hover] font-semibold inline-flex items-center gap-1.5">
              Ver todas las cuñas y mentiras chequeadas
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ZANJA — progreso visible ────────────────────────────────────────── */}
      <section className="border-b border-[--color-border]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 lg:py-20">
          <div className="card p-7 sm:p-10 relative overflow-hidden">
            <span className="absolute top-0 left-0 right-0 h-1 bg-[--color-feo]" aria-hidden />

            <div className="flex items-center gap-2 flex-wrap text-xs">
              <span className="pill pill-feo">Atrasada</span>
              <span className="text-[--color-fg-4]">·</span>
              <span className="num uppercase tracking-wider text-[--color-fg-3]">
                Plan Escudo Fronterizo · Chacalluta
              </span>
            </div>

            <h2 className="mt-4 text-3xl sm:text-5xl font-black tracking-tighter leading-tight max-w-3xl">
              La zanja: {zanja.kmConstruidos} km de los {zanja.kmTramo} prometidos
            </h2>

            {/* Headline percentage */}
            <div className="mt-8 grid lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-7">
                <div className="flex items-baseline gap-3 flex-wrap">
                  <span className="num text-7xl sm:text-8xl font-black tracking-tighter leading-none text-[--color-feo]">
                    {zanja.pctTramo.toFixed(0)}%
                  </span>
                  <div className="text-sm text-[--color-fg-3] num">
                    avance del tramo
                    <br />
                    <span className="text-[--color-fg-2]">{zanja.kmConstruidos}/{zanja.kmTramo} km</span>
                  </div>
                </div>

                <div className="mt-6 h-4 rounded-full bg-[--color-surface-2] overflow-hidden relative">
                  <div className="h-full bg-[--color-feo] bar-fill" style={{ width: `${zanja.pctTramo}%` }} />
                  <span
                    className="absolute top-0 bottom-0 w-px bg-[--color-fg-3]"
                    style={{ left: `${zanja.pctPlazo}%` }}
                    aria-hidden
                    title="Línea del plazo cumplido"
                  />
                </div>
                <p className="mt-2 text-xs text-[--color-fg-3]">
                  Línea vertical = % del plazo de 90 días que ya pasó ({zanja.pctPlazo.toFixed(0)}%).
                  Cuando el avance va por debajo de la línea, la obra está atrasada.
                </p>

                <p className="mt-6 text-base sm:text-lg text-[--color-fg-2] leading-relaxed">
                  El 16 de marzo, en Chacalluta, el Presidente prometió excavar{" "}
                  <strong className="text-[--color-fg]">30 km de zanja en 90 días</strong>, de tres metros de
                  profundidad. Llevan {zanja.diasTranscurridos} días de los 90 ({zanja.pctPlazo.toFixed(0)}% del
                  plazo) y {zanja.kmConstruidos} km construidos ({zanja.pctTramo.toFixed(0)}% del tramo).
                  Faltan {zanja.diasRestantes} días para el deadline del 14 de junio de 2026.
                </p>

                <div className="mt-6 grid sm:grid-cols-3 gap-3">
                  <div className="card p-4">
                    <p className="label text-[10px]">Plazo cumplido</p>
                    <span className="mt-2 block num text-3xl font-black text-[--color-fg]">
                      {zanja.pctPlazo.toFixed(0)}%
                    </span>
                    <p className="mt-1 text-xs text-[--color-fg-3] num">
                      día {zanja.diasTranscurridos} de 90
                    </p>
                  </div>
                  <div className="card p-4">
                    <p className="label text-[10px]">Ritmo real</p>
                    <span className="mt-2 block num text-3xl font-black text-[--color-fg]">
                      {zanja.ritmoReal.toFixed(2)}
                    </span>
                    <p className="mt-1 text-xs text-[--color-fg-3] num">km/día efectivo</p>
                  </div>
                  <div className="card p-4">
                    <p className="label text-[10px]">Ritmo necesario</p>
                    <span className="mt-2 block num text-3xl font-black text-[--color-feo]">
                      {zanja.ritmoNecesario.toFixed(2)}
                    </span>
                    <p className="mt-1 text-xs text-[--color-fg-3] num">km/día para cumplir</p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[--color-border]">
                  <p className="label">Meta total del Plan Escudo Fronterizo</p>
                  <div className="mt-3 flex items-baseline justify-between gap-2">
                    <span className="num text-2xl sm:text-3xl font-black text-[--color-malo]">
                      {zanja.pctTotal.toFixed(1)}%
                    </span>
                    <span className="num text-sm text-[--color-fg-3]">
                      {zanja.kmConstruidos} de {zanja.kmTotal} km
                    </span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-[--color-surface-2] overflow-hidden">
                    <div className="h-full bg-[--color-malo] bar-fill" style={{ width: `${zanja.pctTotal}%` }} />
                  </div>
                  <p className="mt-2 text-xs text-[--color-fg-3]">
                    A este ritmo se completarían los 500 km en{" "}
                    <strong className="text-[--color-fg]">
                      {zanja.ritmoReal > 0 ? Math.ceil(zanja.kmTotal / zanja.ritmoReal / 365) : "—"} años
                    </strong>{" "}
                    — más que el período presidencial completo.
                  </p>
                </div>
              </div>

              <aside className="lg:col-span-5 card p-6 bg-[--color-surface-2]">
                <p className="label">La cuña original</p>
                <blockquote className="mt-3 text-base font-bold leading-snug text-[--color-fg]">
                  «Lo que correspondía era que el Presidente hubiera tenido las retroexcavadoras en la
                  frontera, cavando una zanja para indicarle a la gente que quiere entrar ilegalmente
                  que hay un límite.»
                </blockquote>
                <p className="mt-3 text-xs text-[--color-fg-3]">
                  — José Antonio Kast, candidato presidencial.{" "}
                  <a
                    href="https://www.t13.cl/noticia/politica/nacional/J.A-Kast-Hay-que-hacer-una-zanja-e-indicar-a-los-migrantes-ilegales-que-hay-un-limite-en-Colchane"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[--color-accent] underline-offset-4 hover:underline"
                  >
                    T13, 4 de febrero de 2025
                  </a>
                </p>
                <p className="mt-5 pt-5 border-t border-[--color-border] text-sm text-[--color-fg-2] leading-relaxed">
                  Asumió el 11 de marzo. La maquinaria recién llegó el 13 y la obra se inició el 16
                  (cinco días después de asumir, no el día 1). En el camino, Kast respondió a Meganoticias
                  Prime que la zanja iniciaría «lo más pronto que podamos», alejándose del compromiso de
                  inmediatez de la cuña original.
                </p>
                <p className="mt-4 text-[10px] uppercase tracking-wider text-[--color-fg-4]">
                  Datos al 22-abr-2026 · Fuente CNN Chile / La Tercera
                </p>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* APROBACIÓN + PERCEPCIÓN ──────────────────────────────────────────── */}
      <section className="border-b border-[--color-border]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 lg:py-20">
          <div className="grid lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 card p-7 sm:p-9">
              <div className="flex items-baseline justify-between flex-wrap gap-3">
                <div>
                  <p className="label text-[--color-malo]">Caída libre</p>
                  <h2 className="mt-2 text-3xl sm:text-4xl font-black tracking-tighter leading-tight">
                    Aprobación presidencial · Cadem
                  </h2>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="num text-5xl sm:text-6xl font-black text-[--color-accent]">{aprobActual}%</span>
                </div>
              </div>
              <div className="mt-6">
                <EncuestaSparkline serie={SERIE_CADEM} height={140} />
              </div>
              <div className="mt-4 flex items-center gap-4 text-xs text-[--color-fg-3] flex-wrap">
                <span className="flex items-center gap-1.5">
                  <span className="dot bg-[--color-accent]" />
                  Aprobación
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="dot bg-[--color-malo]" />
                  Desaprobación
                </span>
                <span className="num">{SERIE_CADEM.length} mediciones · 15-dic-2025 → {SERIE_CADEM[SERIE_CADEM.length - 1].fecha}</span>
              </div>
              <p className="mt-4 text-sm text-[--color-fg-2] leading-relaxed">
                Criteria registra una caída adicional al 36% el 12 de abril (tercera consecutiva). Panel UDD reporta
                una baja de 17 puntos desde el inicio del gobierno. Es la peor luna de miel presidencial desde 1990.
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

      {/* SEREMIS — bochorno regional ─────────────────────────────────────── */}
      <section className="border-b border-[--color-border]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 lg:py-20">
          <div className="flex items-baseline justify-between flex-wrap gap-3 mb-8">
            <div className="max-w-2xl">
              <p className="label text-[--color-malo]">Seremis caídos</p>
              <h2 className="mt-2 text-3xl sm:text-5xl font-black tracking-tighter leading-tight">
                {seremiStats.total} bajas en menos de 50 días
              </h2>
              <p className="mt-4 text-base text-[--color-fg-2] leading-relaxed">
                Renuncias voluntarias, designaciones anuladas, decretos retirados. Irregularidades financieras,
                publicaciones en redes sociales y falta de requisitos. Es el peor récord de partida de un gobierno
                desde 1990 según La Tercera.
              </p>
            </div>
            <Link to="/seremis" className="btn btn-secondary text-sm">
              Lista completa →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <KpiHero valor={String(seremiStats.total)} label="Total" sub="Seremis caídos" tone="malo" />
            <KpiHero valor={String(seremiStats.renunciaron)} label="Renunciaron" sub="Tras asumir" tone="malo" />
            <KpiHero valor={String(seremiStats.noAsumieron)} label="No asumieron" sub="Decreto anulado/retirado" tone="malo" />
            <KpiHero valor="7" label="Cargos vacantes" sub="Sin nombramiento al 24-abr" tone="feo" />
          </div>

          <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {SEREMIS.slice(0, 9).map((s) => (
              <li key={s.nombre + s.region} className="card p-5">
                <div className="flex items-center gap-2 text-xs">
                  <span className={`pill ${s.estado === "renuncio" ? "pill-malo" : "pill-feo"}`}>
                    {s.estado === "renuncio" ? "Renunció" : "No asumió"}
                  </span>
                  <span className="num text-[10px] uppercase tracking-wider text-[--color-fg-3]">
                    {s.fecha && new Date(s.fecha + "T12:00:00").toLocaleDateString("es-CL", { day: "numeric", month: "short" })}
                  </span>
                </div>
                <p className="mt-3 text-sm font-bold leading-tight">{s.nombre}</p>
                <p className="mt-1 text-xs text-[--color-fg-2]">{s.cargo}</p>
                <p className="mt-2 text-[10px] uppercase tracking-wider text-[--color-fg-4]">Región · {s.region}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* RETRACTACIONES ─────────────────────────────────────────────────── */}
      <section className="border-b border-[--color-border]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 lg:py-20">
          <div className="flex items-baseline justify-between flex-wrap gap-3 mb-8">
            <div className="max-w-2xl">
              <p className="label text-[--color-malo]">Se tuvieron que desdecir</p>
              <h2 className="mt-2 text-3xl sm:text-5xl font-black tracking-tighter leading-tight">
                {RETRACTACIONES.length} retractaciones en 45 días
              </h2>
              <p className="mt-4 text-base text-[--color-fg-2] leading-relaxed">
                Declaraciones públicas que terminaron rectificadas, contradichas dentro del propio gabinete,
                eliminadas de redes oficiales o desmentidas por datos. Cada una con la cita literal, la fecha
                y quién la desmintió.
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
                      {row.total} {row.total === 1 ? "registro" : "registros"} · severidad {row.severidadMax}/4
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

      {/* PROMESAS — incumplidas + tracker ──────────────────────────────── */}
      <section className="border-b border-[--color-border]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 lg:py-20">
          <div className="flex items-baseline justify-between flex-wrap gap-3 mb-8">
            <div>
              <p className="label">Programa vs realidad</p>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black tracking-tighter">
                Lo que prometió · Lo que está pasando
              </h2>
              <p className="mt-3 text-sm text-[--color-fg-2] max-w-2xl">
                {promesaStats.total} promesas extraídas del programa de gobierno y la campaña, contrastadas con las
                decisiones de los primeros 45 días.
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

          {/* Barra horizontal de tracker */}
          <div className="card p-6 sm:p-7 mb-8">
            <p className="label">Tracker general</p>
            <div className="mt-4 h-4 rounded-full bg-[--color-surface-2] overflow-hidden flex">
              <div className="h-full bg-[--color-malo] bar-fill" style={{ width: `${(promesaStats.incumplidas / promesaStats.total) * 100}%` }} />
              <div className="h-full bg-[--color-feo] bar-fill" style={{ width: `${(promesaStats.estancadas / promesaStats.total) * 100}%` }} />
              <div className="h-full bg-[--color-info] bar-fill" style={{ width: `${(promesaStats.enProceso / promesaStats.total) * 100}%` }} />
              <div className="h-full bg-[--color-bueno] bar-fill" style={{ width: `${(promesaStats.cumplidas / promesaStats.total) * 100}%` }} />
              <div className="h-full bg-[--color-fg-4] bar-fill" style={{ width: `${(promesaStats.sinInfo / promesaStats.total) * 100}%` }} />
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

      {/* CRONOLOGÍA RECIENTE ─────────────────────────────────────────────── */}
      <section className="border-b border-[--color-border]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 lg:py-20">
          <div className="flex items-baseline justify-between flex-wrap gap-3 mb-8">
            <div>
              <p className="label">Línea de tiempo</p>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black tracking-tighter">Últimos hitos</h2>
            </div>
            <Link to="/cronologia" className="btn btn-secondary text-sm">
              Cronología completa →
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

      {/* SEGURIDAD — promesa estrella vs datos ─────────────────────────── */}
      <section className="border-b border-[--color-border]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 lg:py-20">
          <div className="max-w-3xl">
            <p className="label">Eje seguridad</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black tracking-tighter">
              El “Plan Implacable” a la luz de los datos
            </h2>
            <p className="mt-3 text-base text-[--color-fg-2] leading-relaxed">
              La seguridad fue el eje 1 de la campaña. Acá contrastamos la cifra publicada con la promesa: qué es
              continuidad de gestiones anteriores, qué es resultado del primer mes y qué sigue sin proyecto de ley.
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
              <p className="label text-[--color-malo]">Lo más alarmante</p>
              <h2 className="mt-2 text-3xl sm:text-4xl font-black tracking-tighter">
                Programas que tocan a quienes más lo necesitan
              </h2>
              <p className="mt-3 text-sm text-[--color-fg-2] max-w-2xl">
                Recortes y rebajas que llegan directamente a poblaciones vulnerables identificables — niñez,
                discapacidad, adultos mayores, mujeres jefas de hogar.
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

      {/* AJUSTE EN NÚMEROS ───────────────────────────────────────────────── */}
      <section className="border-b border-[--color-border]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 lg:py-20">
          <div className="max-w-3xl">
            <p className="label">El recorte en números</p>
            <h2 className="mt-3 text-3xl sm:text-5xl font-black tracking-tighter leading-tight">
              {totalProgramas} programas en {ministeriosConData.length} ministerios
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[--color-fg-2] leading-relaxed">
              {totalDescontinuados} a descontinuar. {totalAjustes} con rebaja de al menos −15%. {totalSinObs} sin
              observaciones. Toda la data viene de los anexos firmados del Oficio Circular N°16 de Hacienda.
            </p>
          </div>

          <div className="mt-10 grid lg:grid-cols-12 gap-6">
            <div className="card p-7 lg:col-span-5">
              <p className="label">Distribución</p>
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
              <Stat label="Sin observaciones" value={totalSinObs} sub="continúan igual" tone="bueno" />
              <Stat label="Recorte 2027–2031" value="US$6B" sub="proyectado por Hacienda" tone="malo" />
            </div>
          </div>

          <div className="mt-12 card p-7">
            <p className="label">Top monto · A descontinuar</p>
            <h3 className="mt-2 text-2xl sm:text-3xl font-black tracking-tighter">Los recortes más grandes</h3>
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
            “Estado en quiebra” — y qué dicen los datos
          </h2>
          <p className="mt-3 text-sm text-[--color-fg-2] max-w-3xl">
            La pieza gráfica del Gobierno hablaba de un Estado endeudado en más de US$49.000 millones. La pieza
            fue eliminada y el ministro Quiroz se distanció de la frase. Estos son los indicadores que componen
            la situación fiscal real.
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
              <h2 className="mt-2 text-3xl sm:text-4xl font-black tracking-tighter">Dónde golpea el ajuste</h2>
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
              Ministras y ministros del gobierno de José Antonio Kast en funciones desde el 11 de marzo de 2026.
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
    <div className="card p-5">
      <p className="label text-[10px]">{label}</p>
      <span className={`mt-2 block num text-3xl sm:text-4xl font-black tracking-tighter leading-none ${color}`}>{valor}</span>
      <p className="mt-2 text-[11px] sm:text-xs text-[--color-fg-3] leading-snug">{sub}</p>
    </div>
  );
}
