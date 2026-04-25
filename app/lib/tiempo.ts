/**
 * Helpers de tiempo para todo el sitio. Centraliza el cálculo de "días
 * transcurridos desde la investidura" para que se actualice solo en cada
 * carga de página, sin tener que tocar copys hardcodeados.
 */

export const INVESTIDURA = new Date("2026-03-11T15:00:00Z").getTime(); // 12:00 hrs Chile
export const FIN_MANDATO = new Date("2030-03-11T15:00:00Z").getTime();

export function diasDesdeInvestidura(now: number = Date.now()): number {
  return Math.max(0, Math.floor((now - INVESTIDURA) / 86_400_000));
}

export function diasHastaFin(now: number = Date.now()): number {
  return Math.max(0, Math.ceil((FIN_MANDATO - now) / 86_400_000));
}

export function pctMandato(now: number = Date.now()): number {
  const total = FIN_MANDATO - INVESTIDURA;
  return Math.min(100, Math.max(0, ((now - INVESTIDURA) / total) * 100));
}
