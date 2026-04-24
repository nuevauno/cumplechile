export function Stat({
  label,
  value,
  sub,
  tone = "default",
  delta,
}: {
  label: string;
  value: React.ReactNode;
  sub?: string;
  tone?: "default" | "malo" | "bueno" | "feo" | "accent";
  delta?: { value: string; positive?: boolean };
}) {
  const valueColor =
    tone === "malo" ? "text-[--color-malo]"
    : tone === "bueno" ? "text-[--color-bueno]"
    : tone === "feo" ? "text-[--color-feo]"
    : tone === "accent" ? "text-[--color-accent]"
    : "text-[--color-fg]";
  return (
    <div className="card p-6 sm:p-7 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="label">{label}</span>
        {delta && (
          <span className={`pill ${delta.positive ? "pill-bueno" : "pill-malo"}`}>
            {delta.value}
          </span>
        )}
      </div>
      <div className={`font-display text-5xl sm:text-6xl font-black tracking-tighter num leading-none ${valueColor}`}>
        {value}
      </div>
      {sub && <div className="text-sm text-[--color-fg-3] num">{sub}</div>}
    </div>
  );
}

export function StatInline({ label, value, tone = "default" }: { label: string; value: string | number; tone?: "default" | "malo" | "bueno" | "feo" }) {
  const valueColor =
    tone === "malo" ? "text-[--color-malo]"
    : tone === "bueno" ? "text-[--color-bueno]"
    : tone === "feo" ? "text-[--color-feo]"
    : "text-[--color-fg]";
  return (
    <div>
      <div className="label">{label}</div>
      <div className={`mt-1 text-2xl font-black tracking-tight num leading-none ${valueColor}`}>{value}</div>
    </div>
  );
}
