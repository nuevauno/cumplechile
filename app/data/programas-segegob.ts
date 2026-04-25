import type { ProgramaPublico } from "./types";

/**
 * Ministerio Secretaria General de Gobierno.
 * Fuente: The Clinic, 24-abr-2026, sobre anexo/recomendacion de Hacienda.
 */
export const PROGRAMAS_SEGEGOB: ProgramaPublico[] = [
  {
    slug: "segegob-fondo-cntv",
    servicioSlug: "cntv",
    nombre: "Fondo del Consejo Nacional de Television (CNTV)",
    recomendacion: "descontinuar",
    montoEjecutado2025MilesCLP: 5650418,
    notas:
      "Fondo concursable que ha financiado producciones como 31 Minutos, Los 80, Una historia necesaria y Wow Lisa; la recomendacion implica ahorro fiscal reportado de $5.650.418.000.",
  },
];
