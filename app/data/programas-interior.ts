import type { ProgramaPublico } from "./types";

/**
 * Ministerio del Interior.
 * Fuente: El Mostrador, 24-abr-2026, sobre programas Interior/SENAPRED/SENDA
 * incluidos en las recomendaciones de Hacienda.
 */
export const PROGRAMAS_INTERIOR: ProgramaPublico[] = [
  {
    slug: "senapred-simulacros-borde-costero",
    servicioSlug: "senapred",
    nombre: "Simulacros de borde costero",
    recomendacion: "descontinuar",
    montoEjecutado2025MilesCLP: 0,
    notas: "El Mostrador reporta que tres programas SENAPRED suman casi $127 millones; monto individual por confirmar.",
  },
  {
    slug: "senapred-amenaza-volcanica",
    servicioSlug: "senapred",
    nombre: "Simulacros de amenaza volcanica",
    recomendacion: "descontinuar",
    montoEjecutado2025MilesCLP: 0,
    notas: "El Mostrador reporta que tres programas SENAPRED suman casi $127 millones; monto individual por confirmar.",
  },
  {
    slug: "senapred-sector-educacion",
    servicioSlug: "senapred",
    nombre: "Simulacros del sector educacion",
    recomendacion: "descontinuar",
    montoEjecutado2025MilesCLP: 0,
    notas: "El Mostrador reporta que tres programas SENAPRED suman casi $127 millones; monto individual por confirmar.",
  },
  {
    slug: "senda-fono-drogas-alcohol",
    servicioSlug: "senda",
    nombre: "Fono drogas y alcohol",
    recomendacion: "descontinuar",
    montoEjecutado2025MilesCLP: 275000,
  },
  {
    slug: "senda-prevencion-espacios-sociales",
    servicioSlug: "senda",
    nombre: "Programa de prevencion en espacios sociales",
    recomendacion: "descontinuar",
    montoEjecutado2025MilesCLP: 414000,
  },
  {
    slug: "senda-prepara2",
    servicioSlug: "senda",
    nombre: "prePARA2",
    recomendacion: "descontinuar",
    montoEjecutado2025MilesCLP: 4000000,
    notas: "El Mostrador reporta monto superior a $4 mil millones; se carga valor conservador de $4.000 millones hasta tener anexo completo.",
  },
];
