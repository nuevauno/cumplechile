import type { ProgramaPublico } from "./types";

/**
 * Ministerio de Justicia y Derechos Humanos.
 * Fuentes disponibles al 25-abr-2026: The Clinic y El Ciudadano sobre
 * recomendaciones de Hacienda. Montos individuales de ejecucion: por confirmar.
 */
export const PROGRAMAS_JUSTICIA: ProgramaPublico[] = [
  {
    slug: "justicia-programa-derechos-humanos",
    servicioSlug: "subsec-derechos-humanos",
    nombre: "Programa de Derechos Humanos",
    recomendacion: "descontinuar",
    montoEjecutado2025MilesCLP: 0,
    notas: "The Clinic reporta recomendacion de descontinuar el programa de la Subsecretaria de Derechos Humanos.",
  },
  {
    slug: "justicia-corporaciones-asistencia-judicial",
    servicioSlug: "caj",
    nombre: "Corporaciones de Asistencia Judicial",
    recomendacion: "ajuste",
    montoEjecutado2025MilesCLP: 0,
    notas: "El Ciudadano, citando circulares filtradas, reporta recorte de $68 mil millones; monto ejecutado individual por confirmar.",
  },
];
