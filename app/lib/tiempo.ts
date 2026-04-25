/**
 * Helpers de tiempo para todo el sitio.
 *
 * Zona horaria fija: America/Santiago (Chile). Esto se aplica tanto al
 * cálculo de "día del gobierno" como al formateo de fechas, para que el
 * SSR (Cloudflare Workers, UTC) y el browser den el mismo resultado al
 * usuario chileno aunque sean las 22:00 CL = 01:00 UTC.
 */

export const TZ = "America/Santiago";

export const INVESTIDURA = new Date("2026-03-11T15:00:00Z").getTime(); // 12:00 hrs Chile (verano CLST = UTC-3)
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

/**
 * Formatea una fecha ISO ("2026-04-22" o full) en horario chileno.
 * Si recibe sólo YYYY-MM-DD, le pega T12:00:00 para evitar saltos de día.
 */
export function formatFechaCorta(iso: string): string {
  const d = iso.length === 10 ? new Date(iso + "T12:00:00") : new Date(iso);
  return d.toLocaleDateString("es-CL", {
    day: "numeric",
    month: "short",
    timeZone: TZ,
  });
}

export function formatFechaCortaConAno(iso: string): string {
  const d = iso.length === 10 ? new Date(iso + "T12:00:00") : new Date(iso);
  return d.toLocaleDateString("es-CL", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: TZ,
  });
}

export function formatFechaLarga(iso: string): string {
  const d = iso.length === 10 ? new Date(iso + "T12:00:00") : new Date(iso);
  return d.toLocaleDateString("es-CL", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: TZ,
  });
}

export function formatHoyLargo(now: number = Date.now()): string {
  return new Date(now).toLocaleDateString("es-CL", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: TZ,
  });
}
