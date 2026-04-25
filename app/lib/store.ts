import { MINISTERIOS } from "~/data/ministerios";
import { SERVICIOS } from "~/data/servicios";
import { PROGRAMAS_TODOS } from "~/data/programas";
import { DECISIONES } from "~/data/decisiones";
import { DOCUMENTOS } from "~/data/documentos";
import type { Etiqueta, RecomendacionPrograma } from "~/data/types";

export const ministerios = MINISTERIOS;
export const servicios = SERVICIOS;
export const programas = PROGRAMAS_TODOS;
export const decisiones = DECISIONES;
export const documentos = DOCUMENTOS;

export const ministerioBySlug = (slug: string) =>
  MINISTERIOS.find((m) => m.slug === slug);

export const serviciosByMinisterio = (slug: string) =>
  SERVICIOS.filter((s) => s.ministerioSlug === slug);

export const programasByServicio = (slug: string) =>
  PROGRAMAS_TODOS.filter((p) => p.servicioSlug === slug);

export const programasByMinisterio = (ministerioSlug: string) => {
  const slugs = serviciosByMinisterio(ministerioSlug).map((s) => s.slug);
  return PROGRAMAS_TODOS.filter((p) => slugs.includes(p.servicioSlug));
};

export const decisionesByMinisterio = (slug: string) =>
  DECISIONES.filter((d) => d.ministerioSlug === slug)
    .sort((a, b) => b.fecha.localeCompare(a.fecha));

export const documentoBySlug = (slug: string) =>
  DOCUMENTOS.find((d) => d.slug === slug);

export const decisionBySlug = (slug: string) =>
  DECISIONES.find((d) => d.slug === slug);

export const decisionesOrdenadas = () =>
  [...DECISIONES].sort((a, b) => b.fecha.localeCompare(a.fecha));

export interface MinisterioStats {
  programas: number;
  descontinuados: number;
  ajustes: number;
  sinObservaciones: number;
  montoDescontinuadoMilesCLP: number;
  montoAjustadoMilesCLP: number;
}

export const statsByMinisterio = (slug: string): MinisterioStats => {
  const ps = programasByMinisterio(slug);
  const sum = (rec: RecomendacionPrograma) =>
    ps.filter((p) => p.recomendacion === rec).reduce((s, p) => s + p.montoEjecutado2025MilesCLP, 0);
  return {
    programas: ps.length,
    descontinuados: ps.filter((p) => p.recomendacion === "descontinuar").length,
    ajustes: ps.filter((p) => p.recomendacion === "ajuste").length,
    sinObservaciones: ps.filter((p) => p.recomendacion === "sin_observaciones").length,
    montoDescontinuadoMilesCLP: sum("descontinuar"),
    montoAjustadoMilesCLP: sum("ajuste"),
  };
};

export interface DecisionStats {
  total: number;
  buenas: number;
  malas: number;
  feas: number;
}

export const statsDecisiones = (): DecisionStats => ({
  total: DECISIONES.length,
  buenas: DECISIONES.filter((d) => d.etiqueta === "bueno").length,
  malas: DECISIONES.filter((d) => d.etiqueta === "malo").length,
  feas: DECISIONES.filter((d) => d.etiqueta === "feo").length,
});

export const formatMilesCLP = (miles: number): string => {
  // El monto en el oficio viene en "miles de pesos 2026". Lo paso a millones de pesos para legibilidad.
  // 20.920.445 miles = 20.920 millones = $20.920 millones CLP.
  const millones = miles / 1000;
  if (millones >= 1_000_000) {
    const billones = millones / 1_000_000;
    return `$${billones.toLocaleString("es-CL", { maximumFractionDigits: 2, minimumFractionDigits: 1 })} billones`;
  }
  if (millones >= 1000) {
    const milMillones = millones / 1000;
    return `$${milMillones.toLocaleString("es-CL", { maximumFractionDigits: 1, minimumFractionDigits: 1 })} mil millones`;
  }
  if (millones >= 1) {
    return `$${Math.round(millones).toLocaleString("es-CL")} millones`;
  }
  return `$${miles.toLocaleString("es-CL")} mil pesos`;
};

export const formatFechaLarga = (iso: string): string => {
  const d = new Date(iso + "T12:00:00-04:00");
  return d.toLocaleDateString("es-CL", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

export const etiquetaTexto = (e: Etiqueta): string =>
  ({ bueno: "Bueno", malo: "Malo", feo: "Feo", info: "Info" })[e];

export const recomendacionTexto = (r: RecomendacionPrograma): string =>
  ({ descontinuar: "Descontinuar", ajuste: "Ajuste -15%", sin_observaciones: "Sin observaciones" })[r];
