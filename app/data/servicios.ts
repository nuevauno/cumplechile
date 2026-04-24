import type { Servicio } from "./types";

export const SERVICIOS: Servicio[] = [
  // MDSyF — Servicios afectados por Oficio Circular N°16 de Hacienda
  { slug: "conadi", ministerioSlug: "desarrollo-social", nombre: "Corporacion Nacional de Desarrollo Indigena", abrev: "CONADI" },
  { slug: "fosis", ministerioSlug: "desarrollo-social", nombre: "Fondo de Solidaridad e Inversion Social", abrev: "FOSIS" },
  { slug: "injuv", ministerioSlug: "desarrollo-social", nombre: "Instituto Nacional de la Juventud", abrev: "INJUV" },
  { slug: "mejor-ninez", ministerioSlug: "desarrollo-social", nombre: "Servicio Nacional de Proteccion Especializada a la Niñez y Adolescencia", abrev: "Mejor Niñez" },
  { slug: "senadis", ministerioSlug: "desarrollo-social", nombre: "Servicio Nacional de la Discapacidad", abrev: "SENADIS" },
  { slug: "senama", ministerioSlug: "desarrollo-social", nombre: "Servicio Nacional del Adulto Mayor", abrev: "SENAMA" },
  { slug: "subsec-evaluacion-social", ministerioSlug: "desarrollo-social", nombre: "Subsecretaria de Evaluacion Social", abrev: "Subsec Eval Social" },
  { slug: "subsec-servicios-sociales", ministerioSlug: "desarrollo-social", nombre: "Subsecretaria de Servicios Sociales", abrev: "Subsec Serv Sociales" },
  { slug: "subsec-ninez", ministerioSlug: "desarrollo-social", nombre: "Subsecretaria de la Niñez", abrev: "Subsec Niñez" },
];
