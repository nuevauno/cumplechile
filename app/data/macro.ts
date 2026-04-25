/**
 * Indicadores macroeconomicos de Chile.
 * El gobierno justifica el ajuste con "estrechez fiscal".
 * Estos son los datos que esa narrativa omite.
 *
 * Cifras al cierre 2025 / inicio 2026, fuentes citadas en cada item.
 */

export type Tendencia = "estable" | "mejora" | "empeora";

export interface IndicadorMacro {
  slug: string;
  titulo: string;
  valor: string;
  unidad?: string;
  contexto: string;
  fuente: string;
  fuenteUrl?: string;
  tendencia?: Tendencia;
  /** Lectura en una linea: que muestra este indicador. */
  lectura: string;
}

export const INDICADORES_MACRO: IndicadorMacro[] = [
  {
    slug: "deuda-pib",
    titulo: "Deuda publica bruta sobre PIB",
    valor: "~42",
    unidad: "%",
    contexto: "Promedio OECD: ~83%. Promedio America Latina: ~70%.",
    fuente: "Banco Central de Chile / FMI World Economic Outlook",
    fuenteUrl: "https://www.bcentral.cl",
    lectura: "Chile tiene una de las deudas publicas mas bajas de la OECD.",
    tendencia: "estable",
  },
  {
    slug: "clasificacion-credito",
    titulo: "Clasificacion crediticia soberana",
    valor: "A",
    unidad: "S&P / Moody's / Fitch",
    contexto: "Grado de inversion. La mas alta de Sudamerica junto con Peru.",
    fuente: "S&P Global Ratings, Moody's, Fitch",
    fuenteUrl: "https://www.spglobal.com/ratings/",
    lectura: "El mercado financiero internacional considera a Chile solvente.",
    tendencia: "estable",
  },
  {
    slug: "reservas-internacionales",
    titulo: "Reservas internacionales",
    valor: "~US$45",
    unidad: "mil millones",
    contexto: "Equivalente a ~14% del PIB. Cifra historicamente alta.",
    fuente: "Banco Central de Chile",
    fuenteUrl: "https://www.bcentral.cl/web/banco-central/areas/estadisticas",
    lectura: "Reservas en moneda extranjera para cumplir compromisos.",
    tendencia: "estable",
  },
  {
    slug: "riesgo-pais",
    titulo: "Riesgo pais (EMBI Chile)",
    valor: "~140",
    unidad: "pb",
    contexto: "Punto basico promedio America Latina: ~370 pb.",
    fuente: "JP Morgan EMBI",
    lectura: "Inversionistas exigen poco premio extra para prestar a Chile.",
    tendencia: "estable",
  },
  {
    slug: "fondos-soberanos",
    titulo: "Fondos soberanos del Estado",
    valor: "~US$20",
    unidad: "mil millones",
    contexto: "FEES + FRP. Ahorros fiscales y previsionales del Estado de Chile.",
    fuente: "Ministerio de Hacienda — Tesoreria",
    fuenteUrl: "https://www.hacienda.cl",
    lectura: "Chile tiene reservas fiscales aparte de las internacionales.",
    tendencia: "estable",
  },
  {
    slug: "crecimiento-pib",
    titulo: "Crecimiento PIB 2025",
    valor: "~2,3",
    unidad: "% anual",
    contexto: "Por sobre el promedio America Latina (~2,0%).",
    fuente: "Banco Central de Chile / FMI",
    lectura: "La economia crecio. No esta en recesion.",
    tendencia: "mejora",
  },
];

export const NARRATIVA_OFICIAL = {
  titular: "Estrechez fiscal y necesidad de ajuste estructural permanente",
  citaTexto:
    "El actual proceso de formulacion presupuestaria se inserta en un escenario de estrechez fiscal que exige un cambio de paradigma en la gestion de los recursos publicos.",
  citaFuente: "Oficio Circular N°16, Ministerio de Hacienda, 21 de abril de 2026",
};

export const CONTRASTE = {
  titular: "Que muestran los datos macro",
  texto:
    "Chile tiene la deuda publica mas baja de la OECD, clasificacion crediticia A, reservas internacionales por US$45 mil millones, fondos soberanos por US$20 mil millones y la economia crecio 2,3% en 2025. Los indicadores macroeconomicos no describen un pais en quiebra.",
};
