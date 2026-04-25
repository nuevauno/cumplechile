import type { ProgramaPublico } from "./types";

/**
 * Ministerio del Medio Ambiente.
 * Fuente: El Mostrador, 24-abr-2026, sobre anexo/recomendaciones de Hacienda.
 */
export const PROGRAMAS_MEDIO_AMBIENTE: ProgramaPublico[] = [
  {
    slug: "mma-conservacion-especies",
    servicioSlug: "subsec-medio-ambiente",
    nombre: "Conservacion de Especies",
    recomendacion: "descontinuar",
    montoEjecutado2025MilesCLP: 417763,
  },
  {
    slug: "mma-sncae",
    servicioSlug: "subsec-medio-ambiente",
    nombre: "Sistema Nacional de Certificacion Ambiental de Establecimientos Educacionales (SNCAE)",
    recomendacion: "descontinuar",
    montoEjecutado2025MilesCLP: 463647,
  },
  {
    slug: "mma-humedales",
    servicioSlug: "subsec-medio-ambiente",
    nombre: "Proteccion de Humedales",
    recomendacion: "descontinuar",
    montoEjecutado2025MilesCLP: 258668,
  },
  {
    slug: "mma-suelos-contaminados",
    servicioSlug: "subsec-medio-ambiente",
    nombre: "Gestion de Suelos con Potencial Presencia de Contaminantes",
    recomendacion: "descontinuar",
    montoEjecutado2025MilesCLP: 145449,
  },
  {
    slug: "mma-fiscalizacion-ruidos",
    servicioSlug: "subsec-medio-ambiente",
    nombre: "Fiscalizacion de Ruidos",
    recomendacion: "descontinuar",
    montoEjecutado2025MilesCLP: 19843,
  },
];
