import type { ProgramaPublico } from "./types";

/**
 * Ministerio de las Culturas, las Artes y el Patrimonio.
 * Fuente: The Clinic, 24-abr-2026. La nota reporta 10 programas a
 * descontinuar, 39,3% de la oferta con ajuste y recorte total sugerido por
 * $77.893 millones. Montos individuales quedan cargados solo cuando fueron
 * publicados en la nota.
 */
export const PROGRAMAS_CULTURAS: ProgramaPublico[] = [
  {
    slug: "culturas-bibliomas",
    servicioSlug: "patrimonio-cultural",
    nombre: "Bibliomas (ex Bibliometro)",
    recomendacion: "descontinuar",
    montoEjecutado2025MilesCLP: 1470893,
  },
  {
    slug: "culturas-sitios-patrimonio-mundial",
    servicioSlug: "patrimonio-cultural",
    nombre: "Programa de Sitios de Patrimonio Mundial",
    recomendacion: "descontinuar",
    montoEjecutado2025MilesCLP: 1894142,
    notas:
      "Financia sitios como Parque Rapa Nui, Iglesias de Chiloe, Valparaiso, Humberstone y Santa Laura, Sewell, Qhapaq Nan y Cultura Chinchorro.",
  },
  {
    slug: "culturas-biblioteca-publica-digital",
    servicioSlug: "patrimonio-cultural",
    nombre: "Biblioteca Publica Digital",
    recomendacion: "descontinuar",
    montoEjecutado2025MilesCLP: 0,
  },
  {
    slug: "culturas-red-digital-espacios-patrimoniales",
    servicioSlug: "patrimonio-cultural",
    nombre: "Red Digital de Espacios Patrimoniales (ex Red de Bibliotecas Publicas)",
    recomendacion: "descontinuar",
    montoEjecutado2025MilesCLP: 0,
  },
  {
    slug: "culturas-escuelas-rock",
    servicioSlug: "subsec-culturas-artes",
    nombre: "Escuelas de Rock y Musica Popular Chilena",
    recomendacion: "descontinuar",
    montoEjecutado2025MilesCLP: 825512,
  },
  {
    slug: "culturas-foji-orquestas-propias",
    servicioSlug: "foji",
    nombre: "Orquestas Propias de la FOJI",
    recomendacion: "descontinuar",
    montoEjecutado2025MilesCLP: 0,
  },
  {
    slug: "culturas-foji-orquestas-comunales",
    servicioSlug: "foji",
    nombre: "Orquestas Comunales del Catastro FOJI",
    recomendacion: "descontinuar",
    montoEjecutado2025MilesCLP: 0,
  },
  {
    slug: "culturas-educacion-difusion",
    servicioSlug: "subsec-culturas-artes",
    nombre: "Programa de Educacion y Difusion",
    recomendacion: "descontinuar",
    montoEjecutado2025MilesCLP: 0,
  },
  {
    slug: "culturas-artesanias-comercializacion",
    servicioSlug: "subsec-culturas-artes",
    nombre: "Apoyo a la comercializacion de artesanias",
    recomendacion: "descontinuar",
    montoEjecutado2025MilesCLP: 0,
  },
  {
    slug: "culturas-aportacion-musical",
    servicioSlug: "subsec-culturas-artes",
    nombre: "Programa de aportacion musical",
    recomendacion: "descontinuar",
    montoEjecutado2025MilesCLP: 0,
  },
  {
    slug: "culturas-mejoramiento-bibliotecas",
    servicioSlug: "patrimonio-cultural",
    nombre: "Mejoramiento Integral de Bibliotecas Publicas",
    recomendacion: "ajuste",
    montoEjecutado2025MilesCLP: 0,
  },
  {
    slug: "culturas-fortalecimiento-organizaciones-patrimoniales",
    servicioSlug: "patrimonio-cultural",
    nombre: "Fondo de Fortalecimiento para Organizaciones Patrimoniales",
    recomendacion: "ajuste",
    montoEjecutado2025MilesCLP: 0,
  },
  {
    slug: "culturas-mim",
    servicioSlug: "subsec-culturas-artes",
    nombre: "Museo Interactivo Mirador (MIM)",
    recomendacion: "ajuste",
    montoEjecutado2025MilesCLP: 0,
  },
  {
    slug: "culturas-centro-cultural-la-moneda",
    servicioSlug: "subsec-culturas-artes",
    nombre: "Centro Cultural Palacio de La Moneda",
    recomendacion: "ajuste",
    montoEjecutado2025MilesCLP: 0,
  },
  {
    slug: "culturas-gam",
    servicioSlug: "subsec-culturas-artes",
    nombre: "Centro Cultural Gabriela Mistral (GAM)",
    recomendacion: "ajuste",
    montoEjecutado2025MilesCLP: 0,
  },
  {
    slug: "culturas-teatro-municipal-santiago",
    servicioSlug: "subsec-culturas-artes",
    nombre: "Teatro Municipal de Santiago",
    recomendacion: "ajuste",
    montoEjecutado2025MilesCLP: 0,
  },
];
