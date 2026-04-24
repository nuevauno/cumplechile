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
