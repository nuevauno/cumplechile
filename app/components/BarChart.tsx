/**
 * Stacked horizontal bar chart sin librerias.
 * Util para mostrar distribucion de programas por servicio (descontinuar / ajuste / sin obs).
 */
export interface BarSegment {
  value: number;
  color: string;
  label: string;
}

export function StackedBar({ segments, total, height = 8 }: { segments: BarSegment[]; total?: number; height?: number }) {
  const sum = total ?? segments.reduce((s, x) => s + x.value, 0);
  if (sum === 0) {
    return <div className="rounded-full bg-[--color-surface-2]" style={{ height }} />;
  }
  return (
    <div className="flex w-full overflow-hidden rounded-full bg-[--color-surface-2]" style={{ height }}>
      {segments.map((seg, i) => {
        const pct = (seg.value / sum) * 100;
        if (pct === 0) return null;
        return (
          <div
            key={i}
            className="bar-fill"
            style={{ width: `${pct}%`, background: seg.color }}
            title={`${seg.label}: ${seg.value}`}
          />
        );
      })}
    </div>
  );
}

export function BarRow({
  label,
  value,
  max,
  sublabel,
  color = "var(--color-malo)",
  href,
}: {
  label: string;
  value: number;
  max: number;
  sublabel?: string;
  color?: string;
  href?: string;
}) {
  const pct = max === 0 ? 0 : (value / max) * 100;
  const inner = (
    <>
      <div className="flex items-baseline justify-between gap-3 mb-1.5">
        <span className="text-sm font-medium text-[--color-fg] truncate">{label}</span>
        <span className="text-sm font-bold num text-[--color-fg]">{value}</span>
      </div>
      <div className="h-2 rounded-full bg-[--color-surface-2] overflow-hidden">
        <div
          className="h-full rounded-full bar-fill"
          style={{ width: `${pct}%`, background: color }}
        />
      </div>
      {sublabel && <div className="mt-1.5 text-xs text-[--color-fg-3] num">{sublabel}</div>}
    </>
  );
  if (href) {
    return (
      <a href={href} className="block group hover:opacity-90 transition-opacity">
        {inner}
      </a>
    );
  }
  return <div>{inner}</div>;
}

/**
 * Big donut/ring chart con labels al centro.
 */
export function DonutChart({
  segments,
  size = 200,
  thickness = 24,
  center,
}: {
  segments: BarSegment[];
  size?: number;
  thickness?: number;
  center?: { value: string | number; label: string };
}) {
  const total = segments.reduce((s, x) => s + x.value, 0);
  const radius = (size - thickness) / 2;
  const circumference = 2 * Math.PI * radius;
  let offset = 0;

  return (
    <div className="relative inline-block">
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--color-surface-2)"
          strokeWidth={thickness}
        />
        {total > 0 && segments.map((seg, i) => {
          const dash = (seg.value / total) * circumference;
          const segOffset = offset;
          offset += dash;
          return (
            <circle
              key={i}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke={seg.color}
              strokeWidth={thickness}
              strokeDasharray={`${dash} ${circumference - dash}`}
              strokeDashoffset={-segOffset}
              strokeLinecap="butt"
              style={{
                transition: "stroke-dashoffset 800ms cubic-bezier(0.2, 0.8, 0.2, 1)",
              }}
            />
          );
        })}
      </svg>
      {center && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <div className="font-display text-4xl font-black tracking-tighter num leading-none">
            {center.value}
          </div>
          <div className="mt-1 label text-[10px]">{center.label}</div>
        </div>
      )}
    </div>
  );
}
