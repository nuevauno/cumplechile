export function Stat({
  label,
  value,
  sub,
  tone = "default",
}: {
  label: string;
  value: string | number;
  sub?: string;
  tone?: "default" | "malo" | "bueno" | "feo";
}) {
  const valueColor =
    tone === "malo" ? "text-[--color-malo]"
    : tone === "bueno" ? "text-[--color-bueno]"
    : tone === "feo" ? "text-[--color-feo]"
    : "text-[--color-ink]";
  return (
    <div>
      <div className="text-[10px] tracking-[0.22em] uppercase font-bold text-[--color-ink-muted]">
        {label}
      </div>
      <div className={`mt-1 display num text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.9] ${valueColor}`}>
        {value}
      </div>
      {sub && <div className="mt-1 text-xs text-[--color-ink-muted] num">{sub}</div>}
    </div>
  );
}
