/**
 * Seremis (Secretarios Regionales Ministeriales) que renunciaron, fueron
 * removidos o cuyo nombramiento se cayo antes de asumir, en los primeros
 * 50 dias del gobierno de Jose Antonio Kast.
 *
 * Fuente principal: BioBioChile, La Tercera, Emol, Interferencia (15-21 abr 2026).
 */

export const SEREMIS_CARGOS_VACANTES_AL_2026_05_01 = 8;

export type RazonSalida =
  | "renuncia_voluntaria"
  | "designacion_anulada"
  | "retiro_decreto"
  | "irregularidad_financiera"
  | "post_redes_sociales"
  | "falta_requisitos";

export interface Seremi {
  nombre: string;
  cargo: string;
  region: string;
  estado: "activo" | "renuncio" | "no_asumio";
  razon: RazonSalida | null;
  fecha?: string; // ISO de la salida
  detalle?: string;
}

export const SEREMIS: Seremi[] = [
  {
    nombre: "Aldo Ibani",
    cargo: "Seremi de Salud",
    region: "Valparaiso",
    estado: "renuncio",
    razon: "renuncia_voluntaria",
    fecha: "2026-03-26",
  },
  {
    nombre: "Hernan Silva Llagostera",
    cargo: "Seremi de Seguridad Publica",
    region: "Valparaiso",
    estado: "no_asumio",
    razon: "designacion_anulada",
    fecha: "2026-03-22",
    detalle: "Nombramiento congelado/retirado antes de asumir.",
  },
  {
    nombre: "Carlos Montero",
    cargo: "Seremi del Trabajo y Prevision Social",
    region: "Valparaiso",
    estado: "renuncio",
    razon: "renuncia_voluntaria",
    fecha: "2026-04-02",
  },
  {
    nombre: "Nataly Cruz Plaza",
    cargo: "Seremi del Trabajo y Prevision Social",
    region: "Arica y Parinacota",
    estado: "renuncio",
    razon: "renuncia_voluntaria",
    fecha: "2026-04-04",
  },
  {
    nombre: "Alexander Nanjari Santos",
    cargo: "Seremi de Educacion",
    region: "Bio Bio",
    estado: "no_asumio",
    razon: "designacion_anulada",
    fecha: "2026-03-19",
    detalle: "Nombramiento anulado antes de formalizarse.",
  },
  {
    nombre: "Jorge Salazar Ruiz",
    cargo: "Seremi de Obras Publicas",
    region: "Los Rios",
    estado: "no_asumio",
    razon: "designacion_anulada",
    fecha: "2026-03-21",
  },
  {
    nombre: "Patricia Dinamarca Reyes",
    cargo: "Seremi de Educacion",
    region: "Los Lagos",
    estado: "no_asumio",
    razon: "designacion_anulada",
    fecha: "2026-03-23",
  },
  {
    nombre: "Jorge Ravelo Fuentes",
    cargo: "Seremi de Energia",
    region: "Los Lagos",
    estado: "no_asumio",
    razon: "retiro_decreto",
    fecha: "2026-03-25",
  },
  {
    nombre: "Lizet Tapia",
    cargo: "Seremi de Desarrollo Social y Familia",
    region: "Antofagasta",
    estado: "renuncio",
    razon: "renuncia_voluntaria",
    fecha: "2026-04-02",
  },
  {
    nombre: "Karina Trujillo Contreras",
    cargo: "Seremi de Justicia y DDHH",
    region: "Antofagasta",
    estado: "renuncio",
    razon: "renuncia_voluntaria",
    fecha: "2026-04-03",
  },
  {
    nombre: "Anggel Colque Gonzalez",
    cargo: "Seremi de la Mujer y la Equidad",
    region: "Antofagasta",
    estado: "renuncio",
    razon: "renuncia_voluntaria",
    fecha: "2026-04-04",
  },
  {
    nombre: "Mauricio Montealegre Gandolfo",
    cargo: "Seremi de Obras Publicas",
    region: "Tarapaca",
    estado: "no_asumio",
    razon: "retiro_decreto",
    fecha: "2026-03-12",
    detalle: "Renuncia a 72 horas de asumir.",
  },
  {
    nombre: "Patrick Dungan",
    cargo: "Seremi de Energia",
    region: "La Araucania",
    estado: "no_asumio",
    razon: "retiro_decreto",
    fecha: "2026-03-30",
  },
  {
    nombre: "Gustavo Baehr",
    cargo: "Seremi de Cultura, Artes y Patrimonio",
    region: "Metropolitana",
    estado: "renuncio",
    razon: "renuncia_voluntaria",
    fecha: "2026-04-09",
  },
  {
    nombre: "Renato Munster",
    cargo: "Seremi de Cultura, Artes y Patrimonio",
    region: "Metropolitana",
    estado: "renuncio",
    razon: "renuncia_voluntaria",
    fecha: "2026-04-12",
    detalle: "Segundo seremi de Cultura RM en menos de una semana.",
  },
  {
    nombre: "Antaris Varela",
    cargo: "Seremi de la Mujer y la Equidad",
    region: "Bio Bio",
    estado: "no_asumio",
    razon: "designacion_anulada",
    fecha: "2026-03-26",
  },
  {
    nombre: "Angela Valdebenito Rivadeneira",
    cargo: "Seremi de Cultura, Artes y Patrimonio",
    region: "Aysen",
    estado: "renuncio",
    razon: "renuncia_voluntaria",
    fecha: "2026-04-14",
  },
  {
    nombre: "Viviana Torres",
    cargo: "Seremi del Trabajo y Prevision Social",
    region: "Coquimbo",
    estado: "renuncio",
    razon: "renuncia_voluntaria",
    fecha: "2026-04-20",
  },
  {
    nombre: "Diego Muñoz Urbina",
    cargo: "Seremi de Bienes Nacionales",
    region: "Tarapaca",
    estado: "renuncio",
    razon: "renuncia_voluntaria",
    fecha: "2026-05-01",
    detalle: "Renunció a 34 días de asumir; BioBioChile cifró esta salida como la número 19 del gobierno.",
  },
];

export const SEREMIS_STATS = () => {
  const t = SEREMIS.length;
  return {
    total: t,
    renunciaron: SEREMIS.filter((s) => s.estado === "renuncio").length,
    noAsumieron: SEREMIS.filter((s) => s.estado === "no_asumio").length,
    vacantes: SEREMIS_CARGOS_VACANTES_AL_2026_05_01,
    porRazon: {
      renuncia_voluntaria: SEREMIS.filter((s) => s.razon === "renuncia_voluntaria").length,
      designacion_anulada: SEREMIS.filter((s) => s.razon === "designacion_anulada").length,
      retiro_decreto: SEREMIS.filter((s) => s.razon === "retiro_decreto").length,
    },
    porRegion: SEREMIS.reduce<Record<string, number>>((acc, s) => {
      acc[s.region] = (acc[s.region] ?? 0) + 1;
      return acc;
    }, {}),
  };
};

export const SEREMIS_ORDENADOS = () =>
  [...SEREMIS].sort((a, b) => (b.fecha ?? "").localeCompare(a.fecha ?? ""));
