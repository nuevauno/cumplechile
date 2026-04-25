import { useEffect, useState } from "react";

/**
 * Reloj del gobierno de Kast (11-mar-2026 → 11-mar-2030).
 * Variantes:
 *  - "ticker"  : compacto, una línea horizontal para el header.
 *  - "hero"    : pieza visual gigante con el día como protagonista.
 *
 * La hora que se muestra es la hora actual de Chile (America/Santiago),
 * NO el tiempo transcurrido del gobierno. Eso ya se cuenta en días.
 */

const TZ = "America/Santiago";
const INICIO = new Date("2026-03-11T15:00:00Z").getTime();
const FIN = new Date("2030-03-11T15:00:00Z").getTime();
const TOTAL_MS = FIN - INICIO;

function useNow() {
  // Valor estable para SSR: pretendemos un día después de la investidura.
  const [now, setNow] = useState(() => INICIO + 86_400_000);
  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  return now;
}

function diasTranscurridos(now: number) {
  return Math.max(0, Math.floor((now - INICIO) / 86_400_000));
}

function diasRestantes(now: number) {
  return Math.max(0, Math.ceil((FIN - now) / 86_400_000));
}

function pad(n: number, width = 2) {
  return n.toString().padStart(width, "0");
}

/** "HH:MM:SS" en hora Chile usando Intl. */
function horaChile(now: number, withSeconds = true): string {
  return new Date(now).toLocaleTimeString("es-CL", {
    hour: "2-digit",
    minute: "2-digit",
    second: withSeconds ? "2-digit" : undefined,
    hour12: false,
    timeZone: TZ,
  });
}

export function GobiernoClockTicker() {
  const now = useNow();
  const days = diasTranscurridos(now);
  const restante = diasRestantes(now);
  const pct = Math.min(100, ((now - INICIO) / TOTAL_MS) * 100);
  const totalDias = Math.round(TOTAL_MS / 86_400_000);

  return (
    <div className="flex items-center gap-2 sm:gap-4 text-xs num flex-wrap">
      <span className="flex items-center gap-1.5">
        <span className="dot bg-[--color-malo] pulse" />
        <span className="uppercase tracking-wider text-[--color-fg-3] font-semibold">
          En vivo
        </span>
      </span>
      <span className="text-[--color-fg-4]">·</span>
      <span className="font-semibold text-[--color-fg]">
        Día {pad(days, 3)}
        <span className="hidden sm:inline"> de {totalDias}</span>
      </span>
      <span className="hidden sm:inline text-[--color-fg-4]">·</span>
      <span
        className="hidden sm:inline font-mono text-[--color-fg-2]"
        suppressHydrationWarning
        title="Hora actual en Chile"
      >
        {horaChile(now, false)} <span className="text-[--color-fg-4]">CL</span>
      </span>
      <span className="text-[--color-fg-4]">·</span>
      <span className="text-[--color-fg-3]">
        <span className="hidden sm:inline">Mandato </span>
        <strong className="text-[--color-accent] num">{pct.toFixed(2)}%</strong>
      </span>
      <span className="hidden lg:inline text-[--color-fg-4]">·</span>
      <span className="hidden lg:inline text-[--color-fg-3]">
        Quedan <strong className="text-[--color-fg]">{restante.toLocaleString("es-CL")}</strong> días
      </span>
    </div>
  );
}

export function GobiernoClockHero() {
  const now = useNow();
  const days = diasTranscurridos(now);
  const restante = diasRestantes(now);
  const pct = Math.min(100, ((now - INICIO) / TOTAL_MS) * 100);
  const totalDias = Math.round(TOTAL_MS / 86_400_000);

  return (
    <div className="relative">
      <div className="flex items-baseline gap-3 sm:gap-5 flex-wrap">
        <p className="label text-[10px]">Día del gobierno</p>
        <span className="text-[10px] uppercase tracking-wider text-[--color-fg-4] num">
          11-mar-2026 → 11-mar-2030
        </span>
      </div>

      <div className="mt-3 flex items-end gap-4 sm:gap-6 flex-wrap">
        <span
          suppressHydrationWarning
          className="num text-[10rem] sm:text-[14rem] lg:text-[18rem] font-black tracking-[-0.06em] leading-[0.82] text-[--color-fg]"
        >
          {pad(days, 3)}
        </span>
        <div className="pb-3 sm:pb-6 flex flex-col gap-2">
          <span className="num text-2xl sm:text-3xl text-[--color-fg-3] font-semibold tracking-tight">
            de {totalDias}
          </span>
          <span
            suppressHydrationWarning
            className="num text-sm sm:text-base font-mono text-[--color-fg-2]"
            title="Hora actual en Chile"
          >
            <span className="label text-[9px] block mb-1">Hora Chile</span>
            {horaChile(now)}
          </span>
        </div>
      </div>

      <div className="mt-6 max-w-3xl">
        <div className="h-2 rounded-full overflow-hidden" style={{ background: "var(--color-surface-2)" }}>
          <div
            className="h-full transition-all"
            style={{ width: `${pct}%`, background: "var(--color-accent)" }}
          />
        </div>
        <div className="mt-2 flex items-baseline justify-between text-xs num">
          <span className="text-[--color-fg-3]">{pct.toFixed(2)}% del mandato cumplido</span>
          <span className="text-[--color-fg-2] font-semibold">
            {restante.toLocaleString("es-CL")} días restantes
          </span>
        </div>
      </div>
    </div>
  );
}
