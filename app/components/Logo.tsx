/**
 * Mark + wordmark de Chile Cumple.
 * 3 barras horizontales decrecientes representan la categorizacion:
 * naranja = lo destacado (recortes/decisiones grandes), blanco = relevante, gris = info.
 */
export function LogoMark({ size = 32, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="7" fill="currentColor" className="text-[--color-surface-2]" />
      <rect x="6" y="8.5" width="20" height="3.5" rx="1.5" fill="var(--color-accent)" />
      <rect x="6" y="14"  width="14" height="3.5" rx="1.5" fill="var(--color-fg)" />
      <rect x="6" y="19.5" width="9" height="3.5" rx="1.5" fill="var(--color-fg-3)" />
    </svg>
  );
}

export function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const cfg = {
    sm: { mark: 24, text: "text-base", gap: "gap-2" },
    md: { mark: 28, text: "text-lg", gap: "gap-2.5" },
    lg: { mark: 40, text: "text-2xl", gap: "gap-3" },
  }[size];
  return (
    <span className={`inline-flex items-center ${cfg.gap}`}>
      <LogoMark size={cfg.mark} />
      <span className={`font-display font-black tracking-tight ${cfg.text}`}>
        chile<span className="text-[--color-fg-3]">·</span>cumple
      </span>
    </span>
  );
}
