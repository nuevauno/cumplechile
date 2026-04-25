import { useEffect, useState } from "react";

/**
 * Reloj en vivo del gobierno. Muestra días, horas, minutos transcurridos
 * desde el 11-mar-2026 a las 12:00 hrs (UTC-4) y los días que faltan
 * hasta el 11-mar-2030. Se actualiza cada segundo cuando está en pantalla.
 */

const INICIO = new Date("2026-03-11T15:00:00Z").getTime(); // 12:00 hrs Chile (UTC-3 horario verano CLST -3 → 15:00Z)
const FIN = new Date("2030-03-11T15:00:00Z").getTime();

function diff(now: number, target: number) {
  let ms = Math.max(0, now - target);
  const days = Math.floor(ms / 86_400_000);
  ms -= days * 86_400_000;
  const hours = Math.floor(ms / 3_600_000);
  ms -= hours * 3_600_000;
  const minutes = Math.floor(ms / 60_000);
  ms -= minutes * 60_000;
  const seconds = Math.floor(ms / 1_000);
  return { days, hours, minutes, seconds };
}

function diffHasta(now: number, target: number) {
  const days = Math.max(0, Math.ceil((target - now) / 86_400_000));
  return { days };
}

export function GobiernoClock() {
  const [now, setNow] = useState(() => INICIO + 86_400_000); // valor estable en SSR

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const transcurrido = diff(now, INICIO);
  const restante = diffHasta(now, FIN);
  const totalDias = Math.round((FIN - INICIO) / 86_400_000);
  const pct = Math.min(100, (transcurrido.days / totalDias) * 100);

  return (
    <div className="card p-5 sm:p-6">
      <div className="flex items-baseline justify-between gap-3">
        <p className="label text-[10px]">Reloj del gobierno</p>
        <span className="text-[10px] uppercase tracking-wider text-[--color-fg-3] num">
          11-mar-2026 → 11-mar-2030
        </span>
      </div>

      <div className="mt-4 grid grid-cols-4 gap-2">
        <ClockUnit valor={transcurrido.days} label="días" />
        <ClockUnit valor={transcurrido.hours} label="horas" />
        <ClockUnit valor={transcurrido.minutes} label="min" />
        <ClockUnit valor={transcurrido.seconds} label="seg" muted />
      </div>

      <div className="mt-5">
        <div className="h-1.5 rounded-full bg-[--color-surface-2] overflow-hidden">
          <div
            className="h-full bg-[--color-accent] transition-all"
            style={{ width: `${pct}%` }}
          />
        </div>
        <div className="mt-2 flex items-baseline justify-between text-xs">
          <span className="text-[--color-fg-3] num">{pct.toFixed(2)}% del mandato</span>
          <span className="num font-semibold text-[--color-fg]">
            {restante.days.toLocaleString("es-CL")} <span className="text-[--color-fg-3] font-normal">días restantes</span>
          </span>
        </div>
      </div>
    </div>
  );
}

function ClockUnit({ valor, label, muted = false }: { valor: number; label: string; muted?: boolean }) {
  return (
    <div className="text-center">
      <span className={`block num text-2xl sm:text-3xl font-black tracking-tighter leading-none ${muted ? "text-[--color-fg-3]" : "text-[--color-fg]"}`}>
        {valor.toString().padStart(2, "0")}
      </span>
      <span className="mt-1 block text-[9px] uppercase tracking-wider text-[--color-fg-4]">
        {label}
      </span>
    </div>
  );
}
