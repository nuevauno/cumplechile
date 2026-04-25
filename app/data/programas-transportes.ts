import type { ProgramaPublico } from "./types";

/**
 * Ministerio de Transportes y Telecomunicaciones.
 * Fuente: The Clinic, ranking de programas con mayor gasto sugeridos para
 * descontinuar, 24-abr-2026.
 */
export const PROGRAMAS_TRANSPORTES: ProgramaPublico[] = [
  {
    slug: "mtt-transporte-publico-regional",
    servicioSlug: "subsec-transportes",
    nombre: "Transporte Publico Regional",
    recomendacion: "descontinuar",
    montoEjecutado2025MilesCLP: 437000000,
    notas:
      "Tercer mayor gasto del ranking de programas que Hacienda sugirio descontinuar; monto periodistico aproximado.",
  },
];
