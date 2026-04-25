import type { ProgramaPublico } from "./types";

/**
 * Ministerio de Vivienda y Urbanismo.
 * Fuente: The Clinic, ranking de programas con mayor gasto sugeridos para
 * descontinuar, 24-abr-2026.
 */
export const PROGRAMAS_VIVIENDA: ProgramaPublico[] = [
  {
    slug: "minvu-mejoramiento-condominios-ds27",
    servicioSlug: "subsec-vivienda-urbanismo",
    nombre: "Mejoramiento de Condominios de Vivienda - DS27 Capitulo III",
    recomendacion: "descontinuar",
    montoEjecutado2025MilesCLP: 162000000,
    notas:
      "Quinto mayor gasto del ranking de programas que Hacienda sugirio descontinuar; monto periodistico aproximado.",
  },
  {
    slug: "minvu-pavimentacion-participativa",
    servicioSlug: "subsec-vivienda-urbanismo",
    nombre: "Pavimentacion Participativa",
    recomendacion: "descontinuar",
    montoEjecutado2025MilesCLP: 127000000,
    notas:
      "Sexto/septimo tramo del ranking de programas que Hacienda sugirio descontinuar; monto periodistico aproximado.",
  },
];
