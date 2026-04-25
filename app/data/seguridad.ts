import type { IndicadorSeguridad } from "./types";

/**
 * Indicadores de seguridad publica y migracion publicados oficialmente
 * durante los primeros 45 dias del gobierno. La idea es separar el dato
 * del relato y mostrar lo que es continuidad de gestiones previas.
 */
export const INDICADORES_SEGURIDAD: IndicadorSeguridad[] = [
  {
    slug: "homicidios-2025-baja-antes-kast",
    titulo: "Homicidios 2025 antes del cambio de mando",
    valor: "−11,5%",
    contra: "1.091 victimas, 118 menos que en 2024",
    lectura:
      "La baja de homicidios no parte con Kast. El informe nacional 2025 muestra una reduccion anual previa al cambio de mando y consolida la tendencia descendente desde el peak de 2022.",
    fuente: "Fiscalia de Chile",
    fuenteUrl:
      "https://www.fiscaliadechile.cl/actualidad/noticias/nacionales/informe-nacional-de-victimas-de-homicidios-consumados-2025-muestra",
    fecha: "2026-04-25",
    signo: "neutro",
  },
  {
    slug: "homicidios-ytd-2026",
    titulo: "Homicidios YTD 2026",
    valor: "−14,2%",
    contra: "vs primer trimestre 2025",
    lectura:
      "La reduccion ya estaba instalada antes del cambio de mando. La cifra es continuidad de la baja de homicidios reportada por la Subsecretaria de Prevencion del Delito desde 2024.",
    fuente: "Ministerio del Interior · CIPER",
    fuenteUrl: "https://www.ciperchile.cl/2026/04/06/radar-06-04-26/",
    fecha: "2026-04-06",
    signo: "neutro",
  },
  {
    slug: "homicidios-semana-13-19-abril",
    titulo: "Homicidios semana 13-19 abril",
    valor: "−38,1%",
    contra: "vs misma semana de 2025 (8 casos menos)",
    lectura:
      "Caida puntual semanal. Una semana no hace tendencia: el dato hay que revisarlo en serie mensual.",
    fuente: "Reporte semanal Min. Seguridad",
    fuenteUrl: "https://www.biobiochile.cl/noticias/nacional/chile/2026/04/21/informe-semanal-registra-caida-en-homicidios-frente-a-2025-hubo-8-casos-menos.shtml",
    fecha: "2026-04-21",
    signo: "a_favor",
  },
  {
    slug: "ingresos-clandestinos-primer-mes",
    titulo: "Denuncias por ingreso clandestino",
    valor: "2.101",
    contra: "11-mar a 11-abr 2026 — vs 6.437 en el mismo periodo de 2022 (−67,4%)",
    lectura:
      "La caida ya venia del gobierno anterior. La cifra de 2025 (en torno a 3.000 denuncias) muestra que la baja interanual no comenzo con el cambio de mando.",
    fuente: "Ministerio del Interior",
    fuenteUrl: "https://www.interior.gob.cl/noticias/2026/04/16/gobierno-concreto-primer-vuelo-de-expulsion-de-migrantes-y-muestra-resultados-en-su-primer-mes/",
    fecha: "2026-04-16",
    signo: "neutro",
  },
  {
    slug: "vuelo-expulsion-1",
    titulo: "Primer vuelo de expulsion",
    valor: "40 personas",
    contra: "19 colombianos, 12 bolivianos, 9 ecuatorianos",
    lectura:
      "25 expulsiones administrativas y 15 judiciales. Casos en tramite del gobierno anterior, no nuevas detenciones. El gobierno proyecta tres vuelos al mes (~120 personas/mes).",
    fuente: "Ministerio del Interior",
    fuenteUrl: "https://www.elmostrador.cl/noticias/pais/2026/04/15/primer-vuelo-de-expulsion-de-j-a-kast-contempla-a-40-extranjeros-y-divide-opiniones-en-el-congreso/",
    fecha: "2026-04-15",
    signo: "a_favor",
  },
  {
    slug: "zanja-frontera-norte-avance",
    titulo: "Zanja frontera norte — avance",
    valor: "30 km/año",
    contra: "promesa: zanja a lo largo de toda la frontera norte (~1.000 km de borde con Bolivia y Peru)",
    lectura:
      "Los criticos califican el ritmo como insuficiente. A 30 km/año tomaria mas de 30 años cubrir la frontera completa.",
    fuente: "La Nacion / Reportajes de prensa",
    fuenteUrl: "https://www.lanacion.com.ar/el-mundo/una-polemica-zanja-antimigracion-en-la-frontera-marca-la-primera-semana-de-kast-en-el-poder-nid17032026/",
    fecha: "2026-03-17",
    signo: "en_contra",
  },
  {
    slug: "acuerdo-eeuu-crimen-organizado",
    titulo: "Acuerdo Chile-EE.UU.",
    valor: "US$ 1 millon",
    contra: "para fortalecer persecucion del crimen organizado",
    lectura:
      "Aporte simbolico. La cifra contrasta con el monto del “narcotrafico transfronterizo” que el programa describe como amenaza a la seguridad nacional.",
    fuente: "Ministerio de Seguridad Publica",
    fuenteUrl: "https://www.biobiochile.cl/noticias/nacional/chile/2026/04/20/gobierno-firma-acuerdo-con-eeuu-por-crimen-organizado-en-medio-de-duros-cuestionamientos-a-steinert.shtml",
    fecha: "2026-04-20",
    signo: "neutro",
  },
];

/** Promesa de campaña en seguridad y migracion. */
export const COMPROMISOS_SEGURIDAD = [
  {
    slug: "reducir-cruces-40-pct-3-meses",
    promesa: "Reducir cruces ilegales 40% en los primeros tres meses",
    estado: "verificable_jun_2026" as const,
    cuerpo:
      "Compromiso del programa “Plan Implacable”. Linea base no aclarada. Resultados publicables a partir del 11 de junio de 2026.",
  },
  {
    slug: "fuerza-tarea-frontera-norte",
    promesa: "Fuerza de tarea conjunta militar-policial-civil con control absoluto de la frontera norte",
    estado: "en_proceso" as const,
    cuerpo:
      "Despliegues anunciados en Colchane y Chacalluta. Falta el cuerpo legal: el proyecto de Ley de Seguridad Integral y Control Fronterizo aun no tiene urgencia ni votacion en sala.",
  },
  {
    slug: "narcotrafico-seguridad-nacional",
    promesa: "Declarar narcotrafico transfronterizo como delito de seguridad nacional",
    estado: "sin_proyecto" as const,
    cuerpo:
      "Sin proyecto de ley ingresado. Sin minuta tecnica publica.",
  },
  {
    slug: "aislamiento-cabecillas-narco",
    promesa: "Aislamiento total en prision para cabecillas narcotraficantes",
    estado: "sin_proyecto" as const,
    cuerpo:
      "Sin proyecto de ley ingresado al Congreso al 24-abr-2026.",
  },
];
