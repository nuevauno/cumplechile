import type { ProgramaPublico } from "./types";

/**
 * Ministerio de Salud.
 * Fuente disponible al 25-abr-2026: The Clinic, a partir del oficio/anexo
 * enviado por Hacienda a la cartera. La nota reporta 23 programas de Redes
 * Asistenciales y 1 de Salud Pública con recomendación de descontinuar.
 *
 * Montos individuales: por confirmar. The Clinic reporta una reducción
 * agregada superior a $300 mil millones para Salud.
 */
export const PROGRAMAS_SALUD: ProgramaPublico[] = [
  // Subsecretaría de Redes Asistenciales (23)
  { slug: "salud-migrantes", servicioSlug: "subsec-redes-asistenciales", nombre: "Acceso a la Atención de Salud a Personas Migrantes", recomendacion: "descontinuar", montoEjecutado2025MilesCLP: 0, notas: "Monto individual por confirmar; parte de reducción agregada superior a $300 mil millones reportada por The Clinic." },
  { slug: "salud-nna-vulneracion", servicioSlug: "subsec-redes-asistenciales", nombre: "Atención en salud para niños/as y adolescentes con vulneración de derechos", recomendacion: "descontinuar", montoEjecutado2025MilesCLP: 0 },
  { slug: "salud-camas-socio-sanitarias", servicioSlug: "subsec-redes-asistenciales", nombre: "Camas Socio Sanitarias", recomendacion: "descontinuar", montoEjecutado2025MilesCLP: 0 },
  { slug: "salud-demencia-centros", servicioSlug: "subsec-redes-asistenciales", nombre: "Centros de Apoyo Comunitario para Personas con Demencia", recomendacion: "descontinuar", montoEjecutado2025MilesCLP: 0 },
  { slug: "salud-cuidados-preventivos-aps", servicioSlug: "subsec-redes-asistenciales", nombre: "Continuidad de cuidados preventivos y de tratamiento en APS", recomendacion: "descontinuar", montoEjecutado2025MilesCLP: 0 },
  { slug: "salud-nino-sano-escuelas", servicioSlug: "subsec-redes-asistenciales", nombre: "Control de Salud Niño y Niña Sano en Establecimientos Educacionales", recomendacion: "descontinuar", montoEjecutado2025MilesCLP: 0 },
  { slug: "salud-cuidados-paliativos-aps", servicioSlug: "subsec-redes-asistenciales", nombre: "Cuidados Paliativos Universales en APS", recomendacion: "descontinuar", montoEjecutado2025MilesCLP: 0 },
  { slug: "salud-elige-vida-sana", servicioSlug: "subsec-redes-asistenciales", nombre: "Elige Vida Sana", recomendacion: "descontinuar", montoEjecutado2025MilesCLP: 0 },
  { slug: "salud-espacios-amigables", servicioSlug: "subsec-redes-asistenciales", nombre: "Espacios Amigables", recomendacion: "descontinuar", montoEjecutado2025MilesCLP: 0 },
  { slug: "salud-fofar", servicioSlug: "subsec-redes-asistenciales", nombre: "Fondo de Farmacia (FOFAR)", recomendacion: "descontinuar", montoEjecutado2025MilesCLP: 0 },
  { slug: "salud-hospitalizacion-domiciliaria", servicioSlug: "subsec-redes-asistenciales", nombre: "Hospitalización Domiciliaria", recomendacion: "descontinuar", montoEjecutado2025MilesCLP: 82000000, notas: "The Clinic lo ubica en el top 10 de programas sugeridos para descontinuar, con gasto aproximado de $82 mil millones." },
  { slug: "salud-acceso-odontologico", servicioSlug: "subsec-redes-asistenciales", nombre: "Mejoramiento de Acceso a la Atención Odontológica", recomendacion: "descontinuar", montoEjecutado2025MilesCLP: 0 },
  { slug: "salud-adultos-mayores-autovalentes", servicioSlug: "subsec-redes-asistenciales", nombre: "Más Adultos Mayores Autovalentes", recomendacion: "descontinuar", montoEjecutado2025MilesCLP: 0 },
  { slug: "salud-plan-demencia", servicioSlug: "subsec-redes-asistenciales", nombre: "Plan Nacional de Demencia", recomendacion: "descontinuar", montoEjecutado2025MilesCLP: 0 },
  { slug: "salud-dir-aps-drogas", servicioSlug: "subsec-redes-asistenciales", nombre: "Programa DIR APS Alcohol, Tabaco y otras Drogas", recomendacion: "descontinuar", montoEjecutado2025MilesCLP: 0 },
  { slug: "salud-odontologico-integral", servicioSlug: "subsec-redes-asistenciales", nombre: "Programa Odontológico Integral", recomendacion: "descontinuar", montoEjecutado2025MilesCLP: 0 },
  { slug: "salud-sembrando-sonrisas", servicioSlug: "subsec-redes-asistenciales", nombre: "Programa Preventivo en Salud Bucal - Sembrando Sonrisas", recomendacion: "descontinuar", montoEjecutado2025MilesCLP: 0 },
  { slug: "salud-mental-aps", servicioSlug: "subsec-redes-asistenciales", nombre: "Programa Salud Mental en APS", recomendacion: "descontinuar", montoEjecutado2025MilesCLP: 0 },
  { slug: "salud-acompanamiento-psicosocial-aps", servicioSlug: "subsec-redes-asistenciales", nombre: "Programa de Acompañamiento Psicosocial en APS", recomendacion: "descontinuar", montoEjecutado2025MilesCLP: 0 },
  { slug: "salud-identidad-genero", servicioSlug: "subsec-redes-asistenciales", nombre: "Programa de Apoyo a la Identidad de Género", recomendacion: "descontinuar", montoEjecutado2025MilesCLP: 0 },
  { slug: "salud-cuidados-comunitarios-aps", servicioSlug: "subsec-redes-asistenciales", nombre: "Programa de Cuidados Comunitarios en APS", recomendacion: "descontinuar", montoEjecutado2025MilesCLP: 0 },
  { slug: "salud-prais", servicioSlug: "subsec-redes-asistenciales", nombre: "Programa PRAIS", recomendacion: "descontinuar", montoEjecutado2025MilesCLP: 0 },
  { slug: "salud-trans", servicioSlug: "subsec-redes-asistenciales", nombre: "Programa de Salud Trans", recomendacion: "descontinuar", montoEjecutado2025MilesCLP: 0 },

  // Subsecretaría de Salud Pública (1)
  { slug: "salud-prevencion-suicidio", servicioSlug: "subsec-salud-publica", nombre: "Programa Nacional de Prevención del Suicidio", recomendacion: "descontinuar", montoEjecutado2025MilesCLP: 0 },
];
