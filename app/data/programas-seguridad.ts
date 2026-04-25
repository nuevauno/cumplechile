import type { ProgramaPublico } from "./types";

/**
 * Ministerio de Seguridad Publica.
 * Fuente: The Clinic, 24-abr-2026, sobre el anexo de Hacienda a Seguridad.
 * Montos en miles de pesos cuando la nota reporta cifra individual.
 */
export const PROGRAMAS_SEGURIDAD: ProgramaPublico[] = [
  {
    slug: "seg-pnco",
    servicioSlug: "subsec-seguridad-publica",
    nombre: "Programa Contra el Crimen Organizado (PNCO)",
    recomendacion: "descontinuar",
    montoEjecutado2025MilesCLP: 70995506,
    notas: "The Clinic reporta ahorro fiscal de $70.995.506.000. El Mostrador detalla que financia capacidades policiales, Aduanas y persecucion penal contra crimen organizado.",
  },
  {
    slug: "seg-calles-sin-violencia",
    servicioSlug: "subsec-seguridad-publica",
    nombre: "Calles Sin Violencia",
    recomendacion: "descontinuar",
    montoEjecutado2025MilesCLP: 25223277,
    notas: "Programa lanzado durante Boric en 2023; The Clinic reporta ahorro fiscal de $25.223.277.000.",
  },
  {
    slug: "seg-innovacion-transferencia-territorial",
    servicioSlug: "subsec-seguridad-publica",
    nombre: "Innovacion y Transferencia Tecnica Territorial (Ex Innovacion y Tecnologia)",
    recomendacion: "descontinuar",
    montoEjecutado2025MilesCLP: 2495543,
    notas: "The Clinic reporta rebaja por descontinuacion de $2.495.543.000.",
  },
  {
    slug: "seg-denuncia-seguro",
    servicioSlug: "subsec-seguridad-publica",
    nombre: "Denuncia Seguro",
    recomendacion: "ajuste",
    montoEjecutado2025MilesCLP: 0,
    notas: "Monto individual por confirmar; The Clinic lo lista entre los programas con rebaja.",
  },
  {
    slug: "seg-televigilancia-calle-segura",
    servicioSlug: "subsec-seguridad-publica",
    nombre: "Programa Sistema de Televigilancia (Ex Calle Segura)",
    recomendacion: "ajuste",
    montoEjecutado2025MilesCLP: 0,
    notas: "Monto individual por confirmar; The Clinic lo lista entre los programas con rebaja.",
  },
  {
    slug: "seg-apoyo-victimas",
    servicioSlug: "subsec-seguridad-publica",
    nombre: "Programa de Apoyo a Victimas",
    recomendacion: "ajuste",
    montoEjecutado2025MilesCLP: 0,
    notas: "Monto individual por confirmar; The Clinic lo lista entre los programas con rebaja.",
  },
  {
    slug: "seg-seguridad-municipal",
    servicioSlug: "subsec-seguridad-publica",
    nombre: "Sistema Nacional de Seguridad Municipal",
    recomendacion: "ajuste",
    montoEjecutado2025MilesCLP: 0,
    notas: "Monto individual por confirmar; The Clinic lo lista entre los programas con rebaja.",
  },
  {
    slug: "seg-cooperacion-policial-extranjera",
    servicioSlug: "subsec-seguridad-publica",
    nombre: "Programa de Cooperacion Internacional del Gobierno de Chile para Policias Uniformadas Extranjeras (Ex Becas CECIPU)",
    recomendacion: "ajuste",
    montoEjecutado2025MilesCLP: 0,
    notas: "Monto individual por confirmar; The Clinic lo lista entre los programas con rebaja.",
  },
];
