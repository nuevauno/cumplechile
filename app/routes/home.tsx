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
  alertasByMinisterio,
} from "~/lib/store";
import { DecisionCard } from "~/components/DecisionCard";
import { StackedBar, BarRow } from "~/components/BarChart";
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
import { GobiernoClockHero, GobiernoClockTicker } from "~/components/GobiernoClock";
import { LiveTicker, type TickerItem } from "~/components/LiveTicker";
import { CUNAS, cunasOrdenadas } from "~/data/cunas";
import { MENTIRAS } from "~/data/mentiras";
import { SEREMIS, SEREMIS_STATS } from "~/data/seremis";
import { diasDesdeInvestidura } from "~/lib/tiempo";
import { ZANJA_CONTRADICCIONES, ZANJA_TRACKER } from "~/data/zanja";
import { ESPEJO_BORIC } from "~/data/espejo-boric";
import { CASOS_DOBLE_ESTANDAR, MENTIRAS_CONTRA_BORIC } from "~/data/doble-estandar";
import { CASOS_VALENZUELA, VALENZUELA_STATS } from "~/data/valenzuela";
import { createMeta } from "~/lib/meta";
import { PageShare, ShareButton } from "~/components/ShareButton";

export function meta() {
  return createMeta({
    title: "Chile Cumple — Observatorio del gobierno de José Antonio Kast",
    description:
      "Promesas, decisiones, recortes, reformas, mentiras, rectificaciones y desmentidos del gobierno de José Antonio Kast con fuentes verificadas. Lo bueno, lo malo y lo feo.",
    path: "/",
  });
}

export async function loader({}: Route.LoaderArgs) {
  const decisiones = decisionesOrdenadas();
  const ministeriosConData = ministerios
    .map((m) => ({ ministerio: m, stats: statsByMinisterio(m.slug), alertas: alertasByMinisterio(m.slug) }))
    .filter((x) => x.stats.programas > 0 || x.alertas.length > 0)
    .sort((a, b) => {
      const scoreA = a.stats.descontinuados + a.stats.ajustes + a.alertas.reduce((s, al) => s + (al.programasDescontinuar ?? 0) + (al.programasAjuste ?? 0), 0);
      const scoreB = b.stats.descontinuados + b.stats.ajustes + b.alertas.reduce((s, al) => s + (al.programasDescontinuar ?? 0) + (al.programasAjuste ?? 0), 0);
      return scoreB - scoreA;
    });

  const totalProgramas = programas.length;
  const totalDescontinuados = programas.filter((p) => p.recomendacion === "descontinuar").length;
  const totalAjustes = programas.filter((p) => p.recomendacion === "ajuste").length;

  const promesaStats = PROMESAS_STATS();
  const retractacionesTop = retractacionesOrdenadas().filter((r) => r.severidad >= 3).slice(0, 4);
  const ranking = RETRACTACIONES_BY_EMISOR().slice(0, 6);
  const eventosRecientes = cronologiaOrdenada().slice(0, 6);
  const cunasTop = cunasOrdenadas().slice(0, 3);
  const seremiStats = SEREMIS_STATS();
  const diasGobierno = diasDesdeInvestidura();

  // Zanja del Plan Escudo Fronterizo
  const zanjaInicio = new Date(`${ZANJA_TRACKER.inicio}T12:00:00Z`).getTime();
  const zanjaFin = zanjaInicio + ZANJA_TRACKER.plazoDias * 86_400_000;
  const ahoraMs = Date.now();
  const diasZanja = Math.max(0, Math.floor((ahoraMs - zanjaInicio) / 86_400_000));
  const diasRestantesZanja = Math.max(0, Math.ceil((zanjaFin - ahoraMs) / 86_400_000));
  const zanja = {
    ...ZANJA_TRACKER,
    diasTranscurridos: diasZanja,
    diasTotales: ZANJA_TRACKER.plazoDias,
    diasRestantes: diasRestantesZanja,
    pctTramoArica: (ZANJA_TRACKER.kmArica / ZANJA_TRACKER.kmTramoArica) * 100,
    pctPlanActual: (ZANJA_TRACKER.kmConstruidos / ZANJA_TRACKER.kmPlanActual) * 100,
    pctPlazo: (diasZanja / ZANJA_TRACKER.plazoDias) * 100,
    pctTotal: (ZANJA_TRACKER.kmConstruidos / ZANJA_TRACKER.kmTotalDeclarado) * 100,
    ritmoRealArica: diasZanja > 0 ? ZANJA_TRACKER.kmArica / diasZanja : 0,
    ritmoNecesarioArica: ZANJA_TRACKER.kmTramoArica / ZANJA_TRACKER.plazoDias,
  };

  return {
    decisiones, ministeriosConData,
    totalProgramas, totalDescontinuados, totalAjustes,
    promesaStats, retractacionesTop, ranking, eventosRecientes,
    cunasTop, seremiStats, zanja, diasGobierno,
    zanjaContradicciones: ZANJA_CONTRADICCIONES,
    espejoBoric: ESPEJO_BORIC,
  };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const {
    decisiones, ministeriosConData,
    totalProgramas, totalDescontinuados, totalAjustes,
    promesaStats, retractacionesTop, ranking, eventosRecientes,
    cunasTop, seremiStats, zanja, diasGobierno,
    zanjaContradicciones, espejoBoric,
  } = loaderData;

  const today = new Date().toLocaleDateString("es-CL", { day: "numeric", month: "long", year: "numeric" , timeZone: "America/Santiago" });

  const aprobInicial = SERIE_CADEM[0]?.aprobacion ?? 53;
  const aprobActual = ULTIMA_APROBACION.aprobacion;
  const deltaAprob = aprobActual - aprobInicial;

  const tickerItems: TickerItem[] = [
    { label: "Aprobación Cadem", valor: `${aprobActual}%`, tono: "malo" },
    { label: "Δ vs 13-mar", valor: `${deltaAprob >= 0 ? "+" : ""}${deltaAprob} pts`, tono: "malo" },
    { label: "Rectificaciones", valor: String(RETRACTACIONES.length), tono: "malo" },
    { label: "Mentiras chequeadas", valor: String(MENTIRAS.length), tono: "malo" },
    { label: "Dobles estándares", valor: String(CASOS_DOBLE_ESTANDAR.length), tono: "malo" },
    { label: "Archivo Valenzuela", valor: String(CASOS_VALENZUELA.length), tono: "malo" },
    { label: "Seremis caídos", valor: String(seremiStats.total), tono: "malo" },
    { label: "Promesas incumplidas", valor: String(promesaStats.incumplidas), tono: "malo" },
    { label: "Recorte fiscal 2027–2031", valor: "US$6.000 M", tono: "malo" },
    { label: "Beneficio megareforma a ministros", valor: "$292.515 M", tono: "malo" },
    { label: "Zanja reportada", valor: `${zanja.kmConstruidos}/${zanja.kmPlanActual} km`, tono: "feo" },
    { label: "Homicidios crimen org.", valor: "+36,8%", tono: "malo" },
  ];

  const topRecortes = programas
    .filter((p) => p.recomendacion === "descontinuar")
    .sort((a, b) => b.montoEjecutado2025MilesCLP - a.montoEjecutado2025MilesCLP)
    .slice(0, 5);
  const maxMonto = Math.max(...topRecortes.map((p) => p.montoEjecutado2025MilesCLP));

  const promesaIncumplida = PROMESAS.find((p) => p.slug === "no-recorte-vulnerables");
  const promesaContradictoria = PROMESAS.find((p) => p.slug === "no-conflictos-interes");

  return (
    <div>
      {/* TICKER LIVE ───────────────────────────────────────────────────────── */}
      <LiveTicker items={tickerItems} />

      {/* HERO MAGAZINE ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-25" aria-hidden />
        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-8 pt-10 pb-8 sm:pt-16 sm:pb-12">
          <div className="fade-up flex items-center gap-3 text-xs flex-wrap">
            <span className="dot bg-[--color-malo] pulse" />
            <span className="num uppercase tracking-wider text-[--color-fg-3] font-semibold">
              Edición {today}
            </span>
            <span className="text-[--color-fg-4]">·</span>
            <GobiernoClockTicker />
          </div>

          <h1 className="fade-up fade-up-1 mt-8 headline-display text-[clamp(3rem,11vw,12rem)] max-w-[14ch]">
            <span className="text-[--color-fg]">Lo que prometieron.</span>
            <br />
            <span className="text-[--color-accent]">Lo que están haciendo.</span>
          </h1>

          <div className="fade-up fade-up-2 mt-10 grid lg:grid-cols-12 gap-8">
            <p className="lg:col-span-7 text-lg sm:text-xl text-[--color-fg-2] leading-relaxed">
              En {diasGobierno} días, el gobierno de José Antonio Kast acumula{" "}
              <strong className="text-[--color-fg]">{RETRACTACIONES.length} rectificaciones</strong>,{" "}
              <strong className="text-[--color-fg]">{MENTIRAS.length} dichos chequeados como falsos, engañosos o exagerados</strong>,{" "}
              <strong className="text-[--color-fg]">{seremiStats.total} seremis caídos</strong>,
              un recorte fiscal de <strong className="text-[--color-fg]">US$6.000 millones</strong> y una megareforma
              que beneficia patrimonialmente a sus propios ministros en{" "}
              <strong className="text-[--color-fg]">CLP$292.515 millones</strong>. Acá catalogamos todo con cita
              textual, fecha y medio donde se dijo.
            </p>

            <aside className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 self-start">
              <Link to="/retractaciones" className="btn btn-primary justify-center">Rectificaciones →</Link>
              <Link to="/mentiras" className="btn btn-secondary justify-center">Mentiras</Link>
              <Link to="/doble-estandar" className="btn btn-secondary justify-center">Doble estándar</Link>
              <Link to="/valenzuela" className="btn btn-secondary justify-center">Valenzuela</Link>
              <Link to="/cronologia" className="btn btn-secondary justify-center">Cronología</Link>
              <Link to="/promesas" className="btn btn-secondary justify-center">Promesas</Link>
              <ShareButton
                title="Chile Cumple"
                text="Observatorio con promesas, recortes, mentiras y desmentidos con fuentes verificadas."
                path="/"
                variant="full"
                label="Compartir"
                className="sm:col-span-2"
              />
            </aside>
          </div>
        </div>
      </section>

      {/* CONTADOR DEL GOBIERNO — pieza visual ──────────────────────────────── */}
      <section id="contador-gobierno" className="border-y border-[--color-fg]" style={{ background: "linear-gradient(180deg, rgba(254,74,35,0.04), transparent)" }}>
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 py-10 sm:py-14">
          <PageShare title="Contador del gobierno · Chile Cumple" path="/#contador-gobierno" />
          <GobiernoClockHero />
        </div>
      </section>

      {/* VALENZUELA ───────────────────────────────────────────────────────── */}
      <section id="archivo-valenzuela" className="border-b border-[--color-border]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 py-12 sm:py-16">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5">
              <p className="label text-[--color-malo]">Nuevo archivo</p>
              <h2 className="mt-3 text-4xl sm:text-6xl font-black tracking-tighter leading-none">
                Las columnas que se le devolvieron a Valenzuela.
              </h2>
              <p className="mt-5 text-sm text-[--color-fg-2] leading-relaxed">
                Cruzamos sus textos en La Tercera contra operadores, parásitos, botines estatales,
                incompetencia y uso político de La Moneda con su rol actual en el Segundo Piso y
                las primeras decisiones del gobierno de Kast.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <Link to="/valenzuela" className="btn btn-primary">Ver archivo Valenzuela →</Link>
                <ShareButton
                  title="Archivo Valenzuela"
                  text="Columnas de Cristián Valenzuela contrastadas con el gobierno de Kast."
                  path="/valenzuela"
                  variant="full"
                />
              </div>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-4 gap-3">
              <div className="card p-5">
                <p className="label text-[10px]">Casos</p>
                <p className="mt-2 num text-4xl font-black">{VALENZUELA_STATS.total}</p>
              </div>
              <div className="card p-5">
                <p className="label text-[10px]">Críticos</p>
                <p className="mt-2 num text-4xl font-black text-[--color-malo]">{VALENZUELA_STATS.criticos}</p>
              </div>
              <div className="card p-5">
                <p className="label text-[10px]">Contrato 2026</p>
                <p className="mt-2 num text-3xl font-black text-[--color-malo]">{VALENZUELA_STATS.contratoTexto}</p>
              </div>
              <div className="card p-5">
                <p className="label text-[10px]">Textos fuente</p>
                <p className="mt-2 num text-4xl font-black">{VALENZUELA_STATS.fuentesColumna}</p>
              </div>
              {CASOS_VALENZUELA.slice(0, 2).map((caso) => (
                <article key={caso.slug} className="card p-5 sm:col-span-2">
                  <span className="pill pill-malo">{caso.tituloColumna}</span>
                  <p className="mt-3 text-sm font-bold leading-snug">{caso.lectura}</p>
                  <div className="mt-4 flex justify-end">
                    <ShareButton
                      title={`Valenzuela: ${caso.tituloColumna}`}
                      text={caso.lectura}
                      path="/valenzuela"
                      hash={caso.slug}
                      variant="quiet"
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ZANJA — pieza visual full-width ───────────────────────────────────── */}
      <section className="border-b border-[--color-fg]">
        <div id="zanja" className="max-w-[1400px] mx-auto px-5 sm:px-8 py-12 sm:py-20">
          <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 items-end">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 flex-wrap text-xs">
                <span className="pill pill-feo">Atrasada</span>
                <span className="text-[--color-fg-4]">·</span>
                <span className="num uppercase tracking-wider text-[--color-fg-3] font-semibold">
                  Promesa estrella · Plan Escudo Fronterizo · Chacalluta
                </span>
              </div>
              <h2 className="mt-4 headline-display text-[clamp(2.5rem,7vw,6rem)]">
                La zanja:<br />
                <span className="text-[--color-feo]">{zanja.kmArica} km</span> en Arica; {zanja.kmConstruidos} km reportados.
              </h2>
              <ShareButton
                title="La zanja del Plan Escudo Fronterizo"
                text={`La zanja reporta ${zanja.kmArica} km en Arica y ${zanja.kmConstruidos} km reportados.`}
                path="/"
                hash="zanja"
                variant="full"
                label="Compartir esta parte"
                className="mt-6"
              />
            </div>

            <aside className="lg:col-span-5 lg:pb-4">
              <div className="border-l-4 border-[--color-feo] pl-5 py-1">
                <p className="label">La cuña original</p>
                <blockquote className="mt-2 pullquote text-2xl sm:text-3xl text-[--color-fg]">
                  «Lo que correspondía era que el Presidente hubiera tenido las retroexcavadoras en la frontera...»
                </blockquote>
                <p className="mt-3 text-xs text-[--color-fg-3]">
                  José Antonio Kast, candidato.{" "}
                  <a
                    href="https://www.t13.cl/noticia/politica/nacional/J.A-Kast-Hay-que-hacer-una-zanja-e-indicar-a-los-migrantes-ilegales-que-hay-un-limite-en-Colchane"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[--color-accent] underline-offset-4 hover:underline"
                  >
                    T13, 4 de febrero de 2025 ↗
                  </a>
                </p>
              </div>
            </aside>
          </div>

          {/* Barra principal — visual gigante */}
          <div className="mt-12">
            <div className="flex items-baseline justify-between gap-4 flex-wrap mb-4">
              <div className="flex items-baseline gap-3 flex-wrap">
                <span className="num text-[clamp(4rem,11vw,9rem)] font-black tracking-tighter leading-none text-[--color-feo]">
                  {zanja.pctTramoArica.toFixed(0)}%
                </span>
                <span className="num text-2xl sm:text-3xl text-[--color-fg-3] font-semibold">
                  avance del tramo Arica
                </span>
              </div>
              <span className="num text-base sm:text-lg text-[--color-fg-2]">
                {zanja.kmArica}/{zanja.kmTramoArica} km en Arica · {zanja.kmConstruidos}/{zanja.kmPlanActual} km plan actual
              </span>
            </div>

            <div
              className="relative h-12 sm:h-20 rounded-lg overflow-hidden"
              style={{ border: "1px solid var(--color-fg)" }}
            >
              {/* Fondo con franjas diagonales = "lo que falta" */}
              <div className="absolute inset-0 diagonal-stripes" aria-hidden />
              {/* Avance real */}
              <div
                className="absolute inset-y-0 left-0 bar-fill"
                style={{ width: `${zanja.pctTramoArica}%`, background: "var(--color-feo)" }}
              >
                {/* Etiqueta KM solo en sm+ donde hay espacio */}
                <span className="hidden sm:flex absolute inset-y-0 right-0 items-center pr-3 sm:pr-5 num text-white font-black text-sm sm:text-base whitespace-nowrap">
                  {zanja.kmArica} KM
                </span>
              </div>
              {/* Marcador del plazo cumplido */}
              <span
                className="absolute inset-y-0"
                style={{ left: `${zanja.pctPlazo}%`, width: 2, background: "var(--color-fg)" }}
                aria-hidden
              />
              {/* Etiqueta de "falta" — solo sm+ */}
              <span
                className="hidden sm:flex absolute inset-y-0 right-3 sm:right-5 items-center text-[10px] sm:text-xs font-black tracking-wider uppercase"
                style={{ color: "var(--color-fg-2)" }}
              >
                Falta {(zanja.kmTramoArica - zanja.kmArica).toFixed(1)} km
              </span>
            </div>
            {/* Etiquetas debajo de la barra: en mobile mostramos km/falta visibles */}
            <div className="mt-2 flex items-baseline justify-between text-[10px] uppercase tracking-wider font-bold num text-[--color-fg-2]">
              <span style={{ color: "var(--color-feo)" }}>● {zanja.kmArica} km construidos</span>
              <span>Falta {(zanja.kmTramoArica - zanja.kmArica).toFixed(1)} km</span>
            </div>
            {/* Plazo marker label sobre la barra (escritorio) — abajo (mobile) */}
            <div className="relative h-5 mt-1">
              <span
                className="absolute -translate-x-1/2 text-[10px] uppercase tracking-wider font-bold num text-[--color-fg]"
                style={{
                  left: `${Math.min(96, Math.max(4, zanja.pctPlazo))}%`,
                }}
              >
                ↑ plazo {zanja.pctPlazo.toFixed(0)}%
              </span>
            </div>

            <p className="mt-3 text-sm text-[--color-fg-2] max-w-3xl leading-relaxed">
              El 16 de marzo, en Chacalluta, el Presidente prometió excavar{" "}
              <strong>30 km en 90 días</strong>, de tres metros de profundidad. Llevan{" "}
              <strong>{zanja.diasTranscurridos} días</strong> de los 90 ({zanja.pctPlazo.toFixed(0)}% del plazo) y{" "}
              <strong>{zanja.kmArica} km</strong> reportados en Arica ({zanja.pctTramoArica.toFixed(0)}% del tramo). El total informado por el Gobierno llega a{" "}
              <strong>{zanja.kmConstruidos} km</strong> sumando Tarapacá. Faltan <strong>{zanja.diasRestantes} días</strong> para el plazo del 14 de junio.
            </p>
            <p className="mt-2 text-xs text-[--color-fg-3] max-w-3xl leading-relaxed">
              Cautela: {zanja.cautela} Fuente de avance:{" "}
              <a href={zanja.fuenteAvance.url} target="_blank" rel="noopener noreferrer" className="text-[--color-accent] hover:underline underline-offset-4">
                {zanja.fuenteAvance.medio}, {zanja.fuenteAvance.fecha} ↗
              </a>
            </p>
          </div>

          {/* Trio comparativo */}
          <div className="mt-10 grid sm:grid-cols-3 gap-0 border-y border-[--color-border]">
            <Metric
              label="Plazo cumplido"
              valor={`${zanja.pctPlazo.toFixed(0)}%`}
              sub={`día ${zanja.diasTranscurridos} de 90`}
            />
            <Metric
              label="Ritmo real"
              valor={zanja.ritmoRealArica.toFixed(2)}
              sub="km/día en Arica"
              tone="feo"
            />
            <Metric
              label="Ritmo necesario"
              valor={zanja.ritmoNecesarioArica.toFixed(2)}
              sub="km/día para 30 km"
              tone="info"
              border={false}
            />
          </div>

          {/* Meta total — la más cruda */}
          <div className="mt-12">
            <p className="label">Meta total declarada del Plan Escudo Fronterizo</p>
            <div className="mt-2 flex items-baseline justify-between gap-3 flex-wrap">
              <h3 className="headline-display text-[clamp(2rem,5vw,4rem)]">
                <span className="text-[--color-malo]">{zanja.pctTotal.toFixed(1)}%</span>{" "}
                <span className="text-[--color-fg-3] font-semibold text-2xl sm:text-3xl">de 500 km</span>
              </h3>
              <span className="num text-sm text-[--color-fg-2]">
                {zanja.kmConstruidos} de {zanja.kmTotalDeclarado} km
              </span>
            </div>
            <div className="mt-4 h-3 rounded-full overflow-hidden" style={{ background: "var(--color-surface-2)" }}>
              <div className="h-full bar-fill" style={{ width: `${zanja.pctTotal}%`, background: "var(--color-malo)" }} />
            </div>
            <p className="mt-3 text-sm text-[--color-fg-3] leading-relaxed max-w-3xl">
              A este ritmo, los 500 km se completarían en{" "}
              <strong className="text-[--color-fg]">
                {zanja.ritmoRealArica > 0 ? Math.ceil(zanja.kmTotalDeclarado / zanja.ritmoRealArica / 365) : "—"} años
              </strong>{" "}
              — más que el período presidencial completo si se proyecta solo el ritmo de Arica. Datos al 22-abr-2026, fuente Meganoticias.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-3">
            {zanjaContradicciones.map((item) => (
              <article key={item.titulo} className="card p-5">
                <p className="label text-[--color-feo]">Contradicción</p>
                <h3 className="mt-2 text-lg font-black tracking-tight leading-tight">{item.titulo}</h3>
                <p className="mt-3 text-sm text-[--color-fg-2] leading-relaxed">
                  <span className="font-bold text-[--color-fg]">Antes:</span> {item.antes}
                </p>
                <p className="mt-2 text-sm text-[--color-fg-2] leading-relaxed">
                  <span className="font-bold text-[--color-fg]">Ahora:</span> {item.despues}
                </p>
                <a href={item.fuente.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex text-xs font-bold text-[--color-accent] hover:text-[--color-accent-hover]">
                  Fuente · {item.fuente.medio} ↗
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ESPEJO BORIC ───────────────────────────────────────────────────── */}
      <section className="border-b border-[--color-fg]" style={{ background: "linear-gradient(180deg, rgba(16,24,40,0.03), transparent)" }}>
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 py-16 sm:py-24">
          <div className="grid lg:grid-cols-12 gap-8">
            <header className="lg:col-span-4">
              <p className="label text-[--color-malo]">Con sus propias palabras</p>
              <h2 className="mt-2 headline-display text-[clamp(2.25rem,4.5vw,4rem)]">
                Dicho.<br />Hecho.
              </h2>
              <p className="mt-5 text-sm text-[--color-fg-2] leading-relaxed">
                Contrastes verificables entre ataques, promesas o frases de la derecha y lo que ocurrió cuando llegaron al gobierno. Si no hay fuente, no entra.
              </p>
            </header>
            <div className="lg:col-span-8 grid md:grid-cols-2 gap-3">
              {espejoBoric.map((caso) => (
                <article key={caso.slug} className="card p-6">
                  <span className="pill pill-malo">{caso.tema}</span>
                  <h3 className="mt-4 text-xl font-black tracking-tight leading-tight">Dicho vs. hecho.</h3>
                  <p className="mt-3 text-sm text-[--color-fg-2] leading-relaxed">
                    <span className="font-bold text-[--color-fg]">Dijeron:</span> {caso.critica}
                  </p>
                  <p className="mt-3 text-sm text-[--color-fg-2] leading-relaxed">
                    <span className="font-bold text-[--color-fg]">Después pasó:</span> {caso.ahora}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3 text-xs">
                    <a href={caso.fuenteCritica.url} target="_blank" rel="noopener noreferrer" className="font-bold text-[--color-accent] hover:text-[--color-accent-hover]">
                      Dicho · {caso.fuenteCritica.medio} ↗
                    </a>
                    <a href={caso.fuenteAhora.url} target="_blank" rel="noopener noreferrer" className="font-bold text-[--color-accent] hover:text-[--color-accent-hover]">
                      Hecho · {caso.fuenteAhora.medio} ↗
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DOBLE ESTÁNDAR ──────────────────────────────────────────────────── */}
      <section className="border-b border-[--color-fg] impact-panel" style={{ background: "linear-gradient(180deg, rgba(185,28,28,0.05), transparent)" }}>
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 py-16 sm:py-20">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <header className="lg:col-span-7">
              <p className="label text-[--color-malo]">Archivo Boric 2022-2026</p>
              <h2 className="mt-2 headline-display text-[clamp(2.5rem,6vw,6rem)]">
                La vara que ellos pusieron.
              </h2>
              <p className="mt-5 text-base sm:text-lg text-[--color-fg-2] leading-relaxed max-w-3xl">
                {CASOS_DOBLE_ESTANDAR.length} casos de doble estándar y {MENTIRAS_CONTRA_BORIC.length} falsedades chequeadas:
                acusaciones, montajes, cifras falsas y exigencias de renuncia contra Boric que ahora sirven para medir al gobierno de Kast con sus propias reglas.
              </p>
            </header>
            <aside className="lg:col-span-5 grid sm:grid-cols-2 gap-3">
              <div className="card kinetic-card stagger-1 p-5">
                <p className="label">Dobles estándares</p>
                <p className="mt-2 num number-kick text-6xl font-black tracking-tighter text-[--color-malo]">{CASOS_DOBLE_ESTANDAR.length}</p>
              </div>
              <div className="card kinetic-card stagger-2 p-5">
                <p className="label">Falsedades contra Boric</p>
                <p className="mt-2 num number-kick text-6xl font-black tracking-tighter text-[--color-feo]">{MENTIRAS_CONTRA_BORIC.length}</p>
              </div>
              <Link to="/doble-estandar" className="sm:col-span-2 btn btn-primary justify-center scanline">
                Ver archivo completo →
              </Link>
            </aside>
          </div>
        </div>
      </section>

      {/* CUÑAS — magazine pull-quotes ──────────────────────────────────────── */}
      <section className="border-b border-[--color-border]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 py-16 sm:py-24">
          <div className="grid lg:grid-cols-12 gap-8">
            <header className="lg:col-span-4">
              <p className="label text-[--color-malo]">Cuñas de campaña</p>
              <h2 className="mt-2 headline-display text-[clamp(2.25rem,4.5vw,4rem)]">
                Lo que dijo. <br />Cuándo. <br />Qué pasó después.
              </h2>
              <p className="mt-5 text-sm text-[--color-fg-2] leading-relaxed">
                Cada frase es una cita literal con fecha y medio donde se dijo. Abajo, la realidad con datos
                oficiales. Es la diferencia entre la cuña y lo que terminó pasando.
              </p>
              <Link to="/mentiras" className="mt-6 inline-flex btn btn-primary text-sm">
                Ver cuñas y mentiras →
              </Link>
            </header>

            <ol className="lg:col-span-8 divide-y-2 divide-[--color-fg]">
              {cunasTop.map((c, i) => (
                <li key={c.slug} className="py-8 first:pt-0 last:pb-0 grid sm:grid-cols-12 gap-4">
                  <div className="sm:col-span-2">
                    <span className="num text-5xl font-black tracking-tighter leading-none text-[--color-fg-3]">
                      {(i + 1).toString().padStart(2, "0")}
                    </span>
                  </div>
                  <div className="sm:col-span-10">
                    <div className="flex items-center gap-2 text-xs">
                      <span className={`pill ${
                        c.veredicto === "incumplida" || c.veredicto === "contradicha" ? "pill-malo" : "pill-feo"
                      }`}>
                        {c.veredicto === "incumplida" ? "Incumplida"
                         : c.veredicto === "contradicha" ? "Se contradijo"
                         : c.veredicto === "atrasada" ? "Atrasada" : "Atenuada"}
                      </span>
                      <span className="num text-[10px] uppercase tracking-wider text-[--color-fg-3] font-semibold">
                        {new Date(c.fechaDicho + "T12:00:00").toLocaleDateString("es-CL", { day: "numeric", month: "short", year: "numeric" , timeZone: "America/Santiago" })}
                      </span>
                    </div>
                    <blockquote className="mt-3 pullquote text-2xl sm:text-3xl text-[--color-fg]">
                      «{c.cita}»
                    </blockquote>
                    <p className="mt-2 text-xs text-[--color-fg-3]">
                      <span className="uppercase tracking-wider text-[10px] text-[--color-fg-4]">Dicho en: </span>
                      <a href={c.fuenteUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[--color-accent] underline-offset-4 hover:underline">
                        {c.donde} ↗
                      </a>
                    </p>
                    <div className="mt-5 grid sm:grid-cols-12 gap-3">
                      <p className="sm:col-span-2 label text-[10px] sm:pt-1">Lo que pasó</p>
                      <p className="sm:col-span-10 text-sm text-[--color-fg] leading-relaxed">
                        {c.realidad}
                      </p>
                    </div>
                    <p className="mt-3 text-[10px] uppercase tracking-wider text-[--color-fg-4]">
                      Fuente · {c.fuenteMedio}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* APROBACIÓN — gráfico full ────────────────────────────────────────── */}
      <section className="border-b border-[--color-border]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 py-16 sm:py-24">
          <div className="grid lg:grid-cols-12 gap-8">
            <header className="lg:col-span-4">
              <p className="label text-[--color-malo]">Caída libre</p>
              <h2 className="mt-2 headline-display text-[clamp(2.25rem,4.5vw,4rem)]">
                {aprobActual}<span className="text-[--color-fg-3]">%</span>
              </h2>
              <p className="mt-3 text-sm text-[--color-fg-2] leading-relaxed">
                Aprobación presidencial Cadem. Cayó {aprobInicial - aprobActual} puntos desde el 13 de marzo
                ({aprobInicial}% → {aprobActual}%). Criteria registra una caída adicional al 36% el 12 de abril.
                Panel UDD reporta una baja de 17 puntos desde el inicio del gobierno. Es la peor luna de miel
                presidencial chilena desde 1990.
              </p>
            </header>
            <div className="lg:col-span-8">
              <EncuestaSparkline serie={SERIE_CADEM} height={200} />
              <div className="mt-4 flex items-center gap-4 text-xs text-[--color-fg-3] flex-wrap">
                <span className="flex items-center gap-1.5">
                  <span className="dot bg-[--color-accent]" />
                  Aprobación
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="dot bg-[--color-malo]" />
                  Desaprobación
                </span>
                <span className="num">
                  {SERIE_CADEM.length} mediciones · 15-dic-2025 → {SERIE_CADEM[SERIE_CADEM.length - 1].fecha}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border-y-2 border-[--color-fg]">
            {PERCEPCION_CLAVES.map((p, i) => (
              <div
                key={p.afirma}
                className={`py-6 px-1 ${i % 3 !== 0 ? "sm:border-l border-[--color-border]" : ""}`}
              >
                <span className="num text-5xl sm:text-6xl font-black tracking-tighter leading-none text-[--color-fg]">
                  {p.valor}
                </span>
                <p className="mt-3 text-sm text-[--color-fg-2] leading-snug">{p.afirma}</p>
                <p className="mt-2 text-[10px] uppercase tracking-wider text-[--color-fg-4] num">{p.fuente}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRACKER PROMESAS — barra grande ───────────────────────────────────── */}
      <section className="border-b border-[--color-border]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 py-16 sm:py-24">
          <div className="grid lg:grid-cols-12 gap-8 mb-10">
            <header className="lg:col-span-7">
              <p className="label">Tracker · Programa de gobierno</p>
              <h2 className="mt-2 headline-display text-[clamp(2.25rem,5vw,4.5rem)]">
                Lo que prometió.<br />
                <span className="text-[--color-accent]">Lo que está pasando.</span>
              </h2>
            </header>
            <aside className="lg:col-span-5 self-end">
              <p className="text-sm text-[--color-fg-2] leading-relaxed">
                {promesaStats.total} promesas extraídas del programa Kast 2026–2030 y la campaña, contrastadas con
                las decisiones de los primeros {diasGobierno} días.
              </p>
            </aside>
          </div>

          {/* Barra horizontal grande */}
          <div className="mb-3 flex items-baseline justify-between text-xs flex-wrap gap-2">
            <span className="label">Estado de las {promesaStats.total} promesas</span>
            <span className="num text-[--color-fg-3]">100%</span>
          </div>
          <div className="h-12 sm:h-14 rounded-md overflow-hidden flex border border-[--color-border]">
            <SegBlock value={promesaStats.incumplidas} total={promesaStats.total} color="var(--color-malo)" label="Incumplidas" />
            <SegBlock value={promesaStats.estancadas} total={promesaStats.total} color="var(--color-feo)" label="Estancadas" />
            <SegBlock value={promesaStats.enProceso} total={promesaStats.total} color="var(--color-info)" label="En proceso" />
            <SegBlock value={promesaStats.cumplidas} total={promesaStats.total} color="var(--color-bueno)" label="Cumplidas" />
            <SegBlock value={promesaStats.contradictorias} total={promesaStats.total} color="var(--color-malo)" label="Contradictorias" />
            <SegBlock value={promesaStats.sinInfo} total={promesaStats.total} color="var(--color-fg-4)" label="Sin info" />
          </div>
          <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs">
            <Legend color="var(--color-malo)" label={`${promesaStats.incumplidas} incumplidas`} />
            <Legend color="var(--color-feo)" label={`${promesaStats.estancadas} estancadas`} />
            <Legend color="var(--color-info)" label={`${promesaStats.enProceso} en proceso`} />
            <Legend color="var(--color-bueno)" label={`${promesaStats.cumplidas} cumplidas`} />
            <Legend color="var(--color-malo)" label={`${promesaStats.contradictorias} contradictorias`} />
            <Legend color="var(--color-fg-4)" label={`${promesaStats.sinInfo} sin info`} />
          </ul>

          <div className="mt-12 grid lg:grid-cols-2 gap-4">
            {promesaIncumplida && <PromesaCard promesa={promesaIncumplida} featured />}
            {promesaContradictoria && <PromesaCard promesa={promesaContradictoria} featured />}
          </div>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {PROMESAS.filter((p) => p.estado === "incumplida" || p.estado === "estancada").slice(0, 6).map((p) => (
              <PromesaCard key={p.slug} promesa={p} />
            ))}
          </div>

          <div className="mt-8 flex justify-end">
            <Link to="/promesas" className="text-sm text-[--color-accent] hover:text-[--color-accent-hover] font-semibold inline-flex items-center gap-1.5">
              Ver las {promesaStats.total} promesas →
            </Link>
          </div>
        </div>
      </section>

      {/* RETRACTACIONES + SEREMIS — split ─────────────────────────────────── */}
      <section className="border-b border-[--color-border]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 py-16 sm:py-24">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <p className="label text-[--color-malo]">Se tuvieron que desdecir</p>
              <h2 className="mt-2 headline-display text-[clamp(2rem,4vw,3.5rem)]">
                {RETRACTACIONES.length} rectificaciones<br />
                <span className="text-[--color-fg-3]">en {diasGobierno} días.</span>
              </h2>
              <p className="mt-4 text-sm text-[--color-fg-2] leading-relaxed max-w-2xl">
                Declaraciones rectificadas, contradichas dentro del propio gabinete, eliminadas de redes oficiales
                o desmentidas por datos.
              </p>

              <ul className="mt-8 space-y-px bg-[--color-border]">
                {ranking.map((row, i) => (
                  <li key={row.emisor} className="bg-[--color-bg] flex items-center gap-4 py-4 px-1">
                    <span className="num text-3xl font-black text-[--color-fg-3] w-12 tabular-nums">
                      {(i + 1).toString().padStart(2, "0")}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-base font-bold tracking-tight truncate">{row.emisor}</p>
                      <p className="text-[10px] text-[--color-fg-3] mt-0.5 uppercase tracking-wider num">
                        {row.total} {row.total === 1 ? "registro" : "registros"} · severidad {row.severidadMax}/4
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: row.total }).map((_, j) => (
                        <span key={j} className="dot bg-[--color-malo]" style={{ width: 8, height: 8 }} />
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
              <Link to="/retractaciones" className="mt-6 inline-flex btn btn-secondary text-sm">
                Ver todas las rectificaciones →
              </Link>
            </div>

            <div className="lg:col-span-5">
              <p className="label text-[--color-malo]">Bochorno regional</p>
              <h2 className="mt-2 headline-display text-[clamp(2rem,4vw,3.5rem)]">
                <span className="text-[--color-malo]">{seremiStats.total}</span> seremis<br />
                caídos.
              </h2>
              <p className="mt-4 text-sm text-[--color-fg-2] leading-relaxed">
                {seremiStats.renunciaron} renunciaron. {seremiStats.noAsumieron} no llegaron a asumir.
                Es el peor récord de partida de un gobierno desde 1990.
              </p>
              <ul className="mt-6 space-y-1">
                {SEREMIS.slice(0, 6).map((s) => (
                  <li key={s.nombre} className="py-3 border-b border-[--color-border] flex items-baseline gap-3">
                    <span className={`pill text-[10px] shrink-0 ${s.estado === "renuncio" ? "pill-malo" : "pill-feo"}`}>
                      {s.estado === "renuncio" ? "Renunció" : "No asumió"}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold leading-tight truncate">{s.nombre}</p>
                      <p className="text-[10px] uppercase tracking-wider text-[--color-fg-3] num truncate">
                        {s.cargo} · {s.region}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link to="/seremis" className="mt-6 inline-flex btn btn-secondary text-sm">
                Ver los {seremiStats.total} seremis →
              </Link>
            </div>
          </div>

          {/* Top retractaciones cards */}
          <div className="mt-16 grid lg:grid-cols-2 gap-4">
            {retractacionesTop.map((r) => (
              <RetractacionCard key={r.slug} r={r} />
            ))}
          </div>
        </div>
      </section>

      {/* CRONOLOGÍA RECIENTE ─────────────────────────────────────────────── */}
      <section className="border-b border-[--color-border]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 py-16 sm:py-24">
          <div className="flex items-baseline justify-between flex-wrap gap-3 mb-10">
            <div>
              <p className="label">Línea de tiempo</p>
              <h2 className="mt-2 headline-display text-[clamp(2rem,4vw,3.5rem)]">Últimos hitos</h2>
            </div>
            <Link to="/cronologia" className="btn btn-secondary text-sm">Cronología completa →</Link>
          </div>
          <ol className="grid lg:grid-cols-2 gap-x-8 gap-y-0">
            {eventosRecientes.map((ev, i) => (
              <li key={ev.slug} className={`flex gap-5 py-5 ${i < eventosRecientes.length - 1 ? "border-b border-[--color-border]" : ""}`}>
                <span
                  className={`shrink-0 mt-2 dot ${
                    ev.etiqueta === "malo" ? "bg-[--color-malo]"
                    : ev.etiqueta === "feo" ? "bg-[--color-feo]"
                    : ev.etiqueta === "bueno" ? "bg-[--color-bueno]"
                    : "bg-[--color-info]"
                  }`}
                  style={{ width: 12, height: 12 }}
                />
                <div className="flex-1 min-w-0">
                  <p className="num text-[10px] uppercase tracking-wider text-[--color-fg-3] font-semibold">
                    {new Date(ev.fecha + "T12:00:00").toLocaleDateString("es-CL", { day: "numeric", month: "short" , timeZone: "America/Santiago" })}
                    {ev.fuenteMedio && <span className="ml-2 text-[--color-fg-4]">· {ev.fuenteMedio}</span>}
                  </p>
                  <h3 className="mt-1.5 text-lg font-bold leading-tight">{ev.titulo}</h3>
                  <p className="mt-2 text-sm text-[--color-fg-2] leading-snug">{ev.resumen}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SEGURIDAD ──────────────────────────────────────────────────────── */}
      <section className="border-b border-[--color-border]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 py-16 sm:py-24">
          <header className="max-w-3xl">
            <p className="label">Eje seguridad</p>
            <h2 className="mt-2 headline-display text-[clamp(2rem,4vw,3.5rem)]">
              El “Plan Implacable”<br />a la luz de los datos.
            </h2>
            <p className="mt-4 text-base text-[--color-fg-2] leading-relaxed">
              Seguridad fue el eje 1 del programa. Acá separamos lo que es continuidad de gestiones anteriores
              de lo que es resultado del primer mes y lo que sigue sin proyecto de ley.
            </p>
          </header>

          <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border-y-2 border-[--color-fg]">
            {INDICADORES_SEGURIDAD.map((ind, i) => (
              <li
                key={ind.slug}
                className={`py-7 px-1 ${i % 3 !== 0 ? "sm:border-l border-[--color-border]" : ""} ${i >= 3 ? "lg:border-t border-[--color-border]" : ""}`}
              >
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
                <span className="mt-3 block num text-[clamp(2.25rem,4vw,3.5rem)] font-black tracking-tighter leading-none text-[--color-fg]">
                  {ind.valor}
                </span>
                <p className="mt-1 text-xs text-[--color-fg-3] num">{ind.contra}</p>
                <p className="mt-3 text-sm text-[--color-fg-2] leading-snug">{ind.lectura}</p>
                <p className="mt-3 text-[10px] uppercase tracking-wider text-[--color-fg-4]">Fuente · {ind.fuente}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* RECORTES — programas alarmantes ────────────────────────────────── */}
      <section className="border-b border-[--color-border]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 py-16 sm:py-24">
          <header className="max-w-3xl">
            <p className="label text-[--color-malo]">El recorte donde más duele</p>
            <h2 className="mt-2 headline-display text-[clamp(2rem,4vw,3.5rem)]">
              Programas que tocan a quienes más lo necesitan.
            </h2>
            <p className="mt-4 text-base text-[--color-fg-2] leading-relaxed">
              En los anexos cargados programa por programa hay {totalDescontinuados} programas a descontinuar y {totalAjustes} con rebaja de al menos −15%. El panorama nacional publicado eleva la cuenta a 142 cierres y 260 rebajas.
            </p>
          </header>

          <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              programas.find((p) => p.slug === "ju-pae"),
              programas.find((p) => p.slug === "ips-bono-invierno"),
              programas.find((p) => p.slug === "senadis-ayudas-tecnicas"),
              programas.find((p) => p.slug === "sss-chile-te-cuida"),
              programas.find((p) => p.slug === "sss-protege-calle"),
              programas.find((p) => p.slug === "sss-bono-graduacion"),
            ].filter(Boolean).map((p) => {
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

          <div className="mt-16">
            <p className="label">Top monto · A descontinuar</p>
            <h3 className="mt-2 headline-display text-[clamp(1.75rem,3vw,2.5rem)]">Los recortes más grandes.</h3>
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

      {/* DECISIONES ─────────────────────────────────────────────────────── */}
      <section className="border-b border-[--color-border]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 py-16 sm:py-24">
          <div className="flex items-baseline justify-between mb-8 flex-wrap gap-3">
            <div>
              <p className="label">Registro</p>
              <h2 className="mt-2 headline-display text-[clamp(2rem,4vw,3.5rem)]">Decisiones de Estado.</h2>
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

      {/* MINISTERIOS + GABINETE ─────────────────────────────────────────── */}
      <section>
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 py-16 sm:py-24">
          <div className="flex items-baseline justify-between mb-10 flex-wrap gap-3">
            <div>
              <p className="label">Por ministerio</p>
              <h2 className="mt-2 headline-display text-[clamp(2rem,4vw,3.5rem)]">Dónde golpea el ajuste.</h2>
            </div>
            <Link to="/ministerios" className="text-sm text-[--color-fg-2] hover:text-[--color-accent] transition-colors">
              Todos →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {ministeriosConData.map(({ ministerio, stats, alertas }) => {
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
                        {stats.programas === 0 && alertas.length > 0 && <span className="text-[--color-malo] font-bold num">{alertas.length} alerta</span>}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-20">
            <p className="label">El gabinete</p>
            <h2 className="mt-2 headline-display text-[clamp(2rem,4vw,3.5rem)]">Las 24 personas que firman.</h2>
            <p className="mt-3 text-sm text-[--color-fg-2] max-w-3xl">
              Ministras y ministros del gobierno de José Antonio Kast, en funciones desde el 11 de marzo de 2026.
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

function Metric({ label, valor, sub, tone, border = true }: { label: string; valor: string; sub: string; tone?: "malo" | "feo" | "info" | "bueno"; border?: boolean }) {
  const color =
    tone === "malo" ? "text-[--color-malo]"
    : tone === "feo" ? "text-[--color-feo]"
    : tone === "info" ? "text-[--color-info]"
    : tone === "bueno" ? "text-[--color-bueno]"
    : "text-[--color-fg]";
  return (
    <div className={`py-6 px-1 sm:px-5 ${border ? "sm:border-r border-[--color-border]" : ""}`}>
      <p className="label text-[10px]">{label}</p>
      <span className={`mt-2 block num text-4xl sm:text-5xl font-black tracking-tighter leading-none ${color}`}>
        {valor}
      </span>
      <p className="mt-2 text-xs text-[--color-fg-3] num">{sub}</p>
    </div>
  );
}

function SegBlock({ value, total, color, label }: { value: number; total: number; color: string; label: string }) {
  const pct = (value / total) * 100;
  if (pct === 0) return null;
  return (
    <div
      className="bar-fill flex items-center justify-center text-white font-black text-xs sm:text-sm overflow-hidden"
      style={{ width: `${pct}%`, background: color }}
      title={`${label}: ${value} (${pct.toFixed(0)}%)`}
    >
      <span className="num truncate px-2">{value}</span>
    </div>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <li className="flex items-center gap-1.5 text-[--color-fg-2]">
      <span className="dot" style={{ background: color, width: 8, height: 8 }} />
      <span className="num">{label}</span>
    </li>
  );
}
