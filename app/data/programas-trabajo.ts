import type { ProgramaPublico } from "./types";

/**
 * Ministerio del Trabajo y Prevision Social.
 * Anexo del Oficio Circular N°16 (Hacienda, 21-abr-2026).
 * 35 programas en 5 servicios. 3 a descontinuar, 26 con ajuste, 6 sin observaciones.
 */
export const PROGRAMAS_TRABAJO: ProgramaPublico[] = [
  // ChileValora (1)
  { slug: "cv-certificacion", servicioSlug: "chilevalora", nombre: "Certificacion de Competencias Laborales", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 2292132 },

  // Instituto de Prevision Social (18)
  { slug: "ips-promocion-derechos", servicioSlug: "ips", nombre: "Promocion de Derechos Previsionales y de Seguridad Social, Para Mujeres en Territorios Rurales de Dificil Conectividad", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 57984 },
  { slug: "ips-aporte-familiar", servicioSlug: "ips", nombre: "Aporte Familiar Permanente", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 244909346 },
  { slug: "ips-suf", servicioSlug: "ips", nombre: "Subsidio Familiar (SUF)", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 678973580 },
  { slug: "ips-pgu", servicioSlug: "ips", nombre: "Pension Garantizada Universal", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 0, notas: "Monto registrado en el documento original como -2.147.483.648 (overflow); valor real por confirmar" },
  { slug: "ips-pbsi", servicioSlug: "ips", nombre: "Pension Basica Solidaria de Invalidez", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 609293195 },
  { slug: "ips-reparto", servicioSlug: "ips", nombre: "Pensiones del Sistema de Reparto", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 2146130401 },
  { slug: "ips-leyes-ddhh", servicioSlug: "ips", nombre: "Leyes Reparatorias de Derechos Humanos", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 287433299 },
  { slug: "ips-desahucio", servicioSlug: "ips", nombre: "Desahucio e Indemnizaciones", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 12804185 },
  { slug: "ips-bono-hijo", servicioSlug: "ips", nombre: "Bono por Hijo", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 235426251 },
  { slug: "ips-bono-reconocimiento", servicioSlug: "ips", nombre: "Bono de Reconocimiento", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 102238850 },
  { slug: "ips-bono-invierno", servicioSlug: "ips", nombre: "Bono Invierno", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 318659982 },
  { slug: "ips-bodas-oro", servicioSlug: "ips", nombre: "Bono Bodas de Oro", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 9549966 },
  { slug: "ips-asignacion-muerte", servicioSlug: "ips", nombre: "Asignacion por Muerte", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 53223368 },
  { slug: "ips-asignacion-familiar", servicioSlug: "ips", nombre: "Asignacion Familiar y Maternal", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 43814045 },
  { slug: "ips-aps-vejez", servicioSlug: "ips", nombre: "Aporte Previsional Solidario de Vejez", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 440050274 },
  { slug: "ips-aps-invalidez", servicioSlug: "ips", nombre: "Aporte Previsional Solidario de Invalidez", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 288728595 },
  { slug: "ips-jovenes", servicioSlug: "ips", nombre: "Subsidio Previsional a los Trabajadores Jovenes", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 5974111 },
  { slug: "ips-discapacidad", servicioSlug: "ips", nombre: "Subsidio de Discapacidad (Ex Subsidio de Discapacidad Mental)", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 70868343 },

  // SENCE (11)
  { slug: "sence-franquicia", servicioSlug: "sence", nombre: "Franquicia Tributaria (ex Impulsa Personas)", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 180400012 },
  { slug: "sence-intermediacion", servicioSlug: "sence", nombre: "Programa de Intermediacion Laboral", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 16543604 },
  { slug: "sence-empleo-joven", servicioSlug: "sence", nombre: "Subsidio al Empleo Joven (SEJ)", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 75349320 },
  { slug: "sence-becas-laborales", servicioSlug: "sence", nombre: "Becas Laborales", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 17019967 },
  { slug: "sence-bono-mujer", servicioSlug: "sence", nombre: "Bono al Trabajo de la Mujer", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 95084020 },
  { slug: "sence-despega-mipe", servicioSlug: "sence", nombre: "Despega Mipe", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 1635252 },
  { slug: "sence-formacion-trabajo", servicioSlug: "sence", nombre: "Formacion en el Puesto de Trabajo", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 2532296 },
  { slug: "sence-formate", servicioSlug: "sence", nombre: "Formate para el trabajo (Ex Capacitacion en Oficios)", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 27106833 },
  { slug: "sence-reinventate", servicioSlug: "sence", nombre: "Reinventate (Ex Reconversion Laboral)", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 1288648 },
  { slug: "sence-transferencias", servicioSlug: "sence", nombre: "Transferencias al Sector Publico", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 3414475 },
  { slug: "sence-bfcs", servicioSlug: "sence", nombre: "Becas del Fondo de Cesantia Solidario (BFCS)", recomendacion: "descontinuar", montoEjecutado2025MilesCLP: 672166 },

  // Subsecretaria de Prevision Social (1)
  { slug: "spp-fep", servicioSlug: "subsec-prevision-social", nombre: "Fondo para la Educacion Previsional (FEP)", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 1976430 },

  // Subsecretaria del Trabajo (4)
  { slug: "st-dialogo-social", servicioSlug: "subsec-trabajo", nombre: "Dialogo Social", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 394477 },
  { slug: "st-fondo-sindical", servicioSlug: "subsec-trabajo", nombre: "Fondo de Formacion Sindical y Relaciones Laborales Colaborativas (Ley N° 20.940) (Ex Escuelas de Formacion sindical)", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 1087616 },
  { slug: "st-inversion-comunidad", servicioSlug: "subsec-trabajo", nombre: "Inversion en la Comunidad", recomendacion: "descontinuar", montoEjecutado2025MilesCLP: 135233249 },
  { slug: "st-profes", servicioSlug: "subsec-trabajo", nombre: "Programa de Fomento a la Empleabilidad Sostenible - PROFES (ex Apoyo al Empleo ley 20.595 y Sistema Chile Solidario)", recomendacion: "descontinuar", montoEjecutado2025MilesCLP: 243801 },
];
