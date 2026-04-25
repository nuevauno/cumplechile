import type { ProgramaPublico } from "./types";

/**
 * Ministerio de Ciencia, Tecnologia, Conocimiento e Innovacion.
 * Fuente: El Mostrador, 24-abr-2026, sobre anexo/recomendaciones de Hacienda.
 */
export const PROGRAMAS_CIENCIA: ProgramaPublico[] = [
  {
    slug: "anid-becas-postgrado-chile",
    servicioSlug: "anid",
    nombre: "Becas de Postgrado en Chile",
    recomendacion: "descontinuar",
    montoEjecutado2025MilesCLP: 68628000,
    notas:
      "El Mostrador reporta que Hacienda recomienda descontinuar este programa pese a que financia capital humano avanzado nacional.",
  },
  {
    slug: "anid-becas-postgrado-extranjero",
    servicioSlug: "anid",
    nombre: "Becas de Postgrado en el Extranjero",
    recomendacion: "descontinuar",
    montoEjecutado2025MilesCLP: 32145000,
    notas:
      "Incluye la controversia previa por Becas Chile para magister y postdoctorado en el extranjero.",
  },
  {
    slug: "anid-iniciativa-cientifica-milenio",
    servicioSlug: "anid",
    nombre: "Iniciativa Cientifica Milenio",
    recomendacion: "descontinuar",
    montoEjecutado2025MilesCLP: 19723000,
  },
  {
    slug: "anid-fondequip",
    servicioSlug: "anid",
    nombre: "Fondo de Equipamiento Cientifico y Tecnologico (Fondequip)",
    recomendacion: "descontinuar",
    montoEjecutado2025MilesCLP: 5759000,
  },
  {
    slug: "anid-pia",
    servicioSlug: "anid",
    nombre: "Programa de Investigacion Asociativa (PIA)",
    recomendacion: "descontinuar",
    montoEjecutado2025MilesCLP: 42000000,
    notas:
      "El Mostrador reporta $42 mil millones asociados a centros de investigacion, centros basales y anillos.",
  },
];
