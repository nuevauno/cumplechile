// Modelo de datos. Espeja el schema futuro de D1.
// Cuando montemos el admin, cada uno de estos pasa a tabla.

export type Etiqueta = "bueno" | "malo" | "feo" | "info";
export type Severidad = 1 | 2 | 3 | 4; // 1=info, 2=relevante, 3=grave, 4=critico

export interface Ministerio {
  slug: string;
  nombre: string;
  abrev?: string;
  ministro?: string;
  sitio?: string;
}

export interface Servicio {
  slug: string;
  ministerioSlug: string;
  nombre: string;
  abrev?: string;
}

/** Recomendacion sobre un programa publico segun el oficio Hacienda. */
export type RecomendacionPrograma = "descontinuar" | "ajuste" | "sin_observaciones";

export interface ProgramaPublico {
  slug: string;
  servicioSlug: string;
  nombre: string;
  recomendacion: RecomendacionPrograma;
  /** Monto ejecutado 2025 expresado en miles de pesos 2026 (segun el oficio). */
  montoEjecutado2025MilesCLP: number;
  notas?: string;
}

export interface Documento {
  slug: string;
  titulo: string;
  tipo: "oficio" | "circular" | "informe" | "decreto" | "ley" | "noticia" | "tweet" | "minuta";
  fecha: string; // ISO
  emisor: string;
  destinatario?: string;
  /** URL original publica si existe. */
  urlOriginal?: string;
  /** Path al PDF servido por el sitio (R2 cuando este montado). */
  pdfPath?: string;
  /** Resumen humano legible (la idea: que no necesites abrir el PDF). */
  resumen: string;
  citas?: Cita[];
}

export interface Cita {
  texto: string;
  pagina?: number;
}

export interface Decision {
  slug: string;
  titulo: string;
  resumen: string;
  fecha: string; // ISO
  ministerioSlug?: string;
  etiqueta: Etiqueta;
  severidad: Severidad;
  documentoSlugs: string[];
  fuenteUrls: { url: string; medio: string; titulo: string }[];
  cuerpo: string; // contenido extendido
}

export type EstadoPromesa =
  | "cumplida"        // se cumplio
  | "incumplida"      // se incumplio o contradijo
  | "en_proceso"      // hay decisiones que avanzan en cumplirla
  | "estancada"       // no hay movimiento
  | "contradictoria"  // las decisiones van en sentido opuesto a lo prometido
  | "sin_info";       // sin registros aun

export type EjeProgramatico =
  | "seguridad"
  | "economia"
  | "social"
  | "salud"
  | "educacion"
  | "inmigracion"
  | "ddhh"
  | "institucional"
  | "vivienda"
  | "trabajo"
  | "medioambiente"
  | "transparencia";

export interface Promesa {
  slug: string;
  titulo: string;
  resumen: string;
  /** Cita textual del candidato si existe. */
  citaCampaña?: string;
  citaFuente?: string;
  estado: EstadoPromesa;
  /** Tema o eje. */
  eje: EjeProgramatico;
  decisionesRelacionadas?: string[];
  fuenteUrls?: { url: string; medio: string; titulo: string }[];
  /** Cuerpo extendido: que prometio, que esta pasando, que falta. */
  cuerpo: string;
}

/**
 * Una declaracion publica que despues fue rectificada, contradicha por la
 * propia administracion, o desmentida por datos. Casos tipicos: vocera dice
 * X, ministro lo desmiente. Spot del gobierno dice Y, Contraloria lo borra.
 */
export type TipoRetractacion =
  | "rectificacion"        // tuvo que retractarse o desdecirse
  | "contradiccion_interna"// otro funcionario lo contradijo en publico
  | "borrado"              // contenido oficial eliminado
  | "desmentido_por_datos" // los numeros oficiales lo desmienten
  | "mea_culpa";           // reconocio error publicamente

export interface Retractacion {
  slug: string;
  titulo: string;
  /** Persona que hizo la declaracion original. */
  emisor: string;
  cargo?: string;
  ministerioSlug?: string;
  fecha: string; // fecha de la declaracion original (ISO)
  fechaRetractacion?: string; // ISO
  tipo: TipoRetractacion;
  /** Que dijo originalmente — cita textual. */
  fraseOriginal: string;
  /** Como se retracto / contradijo / desmintio. */
  retractacion: string;
  /** Quien lo desmintio o por que se retracto. */
  desmentidoPor?: string;
  /** Severidad para ordenar el ranking. */
  severidad: Severidad;
  fuenteUrls: { url: string; medio: string; titulo: string }[];
  cuerpo?: string;
}

/** Resultado de encuesta de opinion. */
export interface EncuestaPunto {
  slug: string;
  encuestadora: "Cadem" | "Criteria" | "Activa" | "Plaza Publica" | "Panel UDD" | "Pulso Ciudadano";
  fecha: string; // ISO
  aprobacion: number; // 0-100
  desaprobacion: number; // 0-100
  notas?: string;
  fuenteUrl?: string;
}

/** Indicador de seguridad / criminalidad. */
export interface IndicadorSeguridad {
  slug: string;
  titulo: string;
  /** Valor principal a mostrar. Ej: "-14,2%". */
  valor: string;
  /** Numero comparativo. Ej: "vs primer trimestre 2025". */
  contra: string;
  /** Lectura editorial breve. */
  lectura: string;
  fuente: string;
  fuenteUrl?: string;
  fecha: string;
  /** Si es a favor o en contra del relato del gobierno. */
  signo: "a_favor" | "en_contra" | "neutro";
}

/** Evento ordenado en la cronologia del gobierno. */
export interface EventoCronologia {
  slug: string;
  fecha: string; // ISO
  titulo: string;
  resumen: string;
  /** good / bad / ugly / info / scandal */
  tipo: "decision" | "escandalo" | "anuncio" | "encuesta" | "operativo" | "retractacion" | "ataque";
  etiqueta: Etiqueta;
  decisionSlug?: string;
  retractacionSlug?: string;
  fuenteUrl?: string;
  fuenteMedio?: string;
}

/** Propuesta extraida del programa de campaña de Kast (8 ejes). */
export interface PropuestaPrograma {
  slug: string;
  eje: EjeProgramatico;
  titulo: string;
  /** Lo que dice literalmente el programa. */
  literal: string;
  paginaPrograma?: string;
  /** Slugs de promesas que materializan esta propuesta. */
  promesaSlugs?: string[];
}
