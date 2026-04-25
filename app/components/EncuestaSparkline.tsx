import type { EncuestaPunto } from "~/data/types";

interface Props {
  serie: EncuestaPunto[];
  height?: number;
  width?: number;
}

/**
 * Sparkline minimalista de la serie de aprobacion. Dibuja dos lineas:
 * aprobacion (verde/accent) y desaprobacion (malo). Pensado para hero.
 */
export function EncuestaSparkline({ serie, height = 120, width = 480 }: Props) {
  if (serie.length === 0) return null;
  const minDate = new Date(serie[0].fecha + "T12:00:00").getTime();
  const maxDate = new Date(serie[serie.length - 1].fecha + "T12:00:00").getTime();
  const span = Math.max(1, maxDate - minDate);
  const padX = 4;
  const padY = 8;

  const x = (fecha: string) =>
    padX + ((new Date(fecha + "T12:00:00").getTime() - minDate) / span) * (width - padX * 2);
  const y = (v: number) => padY + (1 - v / 100) * (height - padY * 2);

  const pathFor = (key: "aprobacion" | "desaprobacion") =>
    serie
      .map((p, i) => `${i === 0 ? "M" : "L"} ${x(p.fecha).toFixed(1)} ${y(p[key]).toFixed(1)}`)
      .join(" ");

  const lastA = serie[serie.length - 1].aprobacion;
  const firstA = serie[0].aprobacion;
  const delta = lastA - firstA;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width="100%"
      preserveAspectRatio="none"
      role="img"
      aria-label="Evolución aprobación presidencial"
      className="block w-full h-32 sm:h-40 md:h-48"
    >
      <line x1={padX} y1={y(50)} x2={width - padX} y2={y(50)} stroke="var(--color-border)" strokeDasharray="2 4" />

      <path d={pathFor("desaprobacion")} stroke="var(--color-malo)" strokeWidth={2} fill="none" />
      <path d={pathFor("aprobacion")} stroke="var(--color-accent)" strokeWidth={2.5} fill="none" />

      {serie.map((p) => (
        <g key={p.slug}>
          <circle cx={x(p.fecha)} cy={y(p.aprobacion)} r={3} fill="var(--color-accent)" />
          <circle cx={x(p.fecha)} cy={y(p.desaprobacion)} r={2.5} fill="var(--color-malo)" />
        </g>
      ))}

      <text
        x={x(serie[serie.length - 1].fecha)}
        y={y(lastA) - 8}
        fontSize={11}
        fill="var(--color-accent)"
        fontWeight={700}
        textAnchor="end"
        className="num"
      >
        {lastA}%
      </text>
      <text
        x={x(serie[0].fecha)}
        y={y(firstA) - 8}
        fontSize={10}
        fill="var(--color-fg-3)"
        className="num"
      >
        {firstA}%
      </text>
      <text
        x={width - padX}
        y={padY + 12}
        textAnchor="end"
        fontSize={10}
        fill={delta < 0 ? "var(--color-malo)" : "var(--color-bueno)"}
        fontWeight={700}
        className="num"
      >
        {delta >= 0 ? "+" : ""}
        {delta} pts
      </text>
    </svg>
  );
}
