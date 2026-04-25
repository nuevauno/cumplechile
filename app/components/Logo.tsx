/**
 * Mark + wordmark de Chile Cumple.
 * El mark es un bloque naranja con tres barras decrecientes (jerarquia
 * editorial) y un pulso vivo arriba a la derecha — la marca de la edicion.
 * Usa colores fijos para verse identico en dark y light.
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
      {/* Bloque solido con la marca naranja fija */}
      <rect width="32" height="32" rx="7" fill="#fe4a23" />
      {/* Barras editoriales en blanco con opacidades decrecientes */}
      <rect x="6" y="8.5"  width="20" height="3.5" rx="1.5" fill="#ffffff" />
      <rect x="6" y="14"   width="14" height="3.5" rx="1.5" fill="#ffffff" opacity="0.78" />
      <rect x="6" y="19.5" width="9"  height="3.5" rx="1.5" fill="#ffffff" opacity="0.5" />
      {/* Pulso de edicion viva */}
      <circle cx="26" cy="6" r="2.5" fill="#ffffff" opacity="0.95" />
    </svg>
  );
}

export function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const cfg = {
    sm: { mark: 24, text: "text-sm", gap: "gap-2" },
    md: { mark: 30, text: "text-lg", gap: "gap-2.5" },
    lg: { mark: 44, text: "text-2xl", gap: "gap-3" },
  }[size];
  return (
    <span className={`inline-flex items-center ${cfg.gap}`}>
      <LogoMark size={cfg.mark} />
      <span className={`font-display font-black tracking-tight leading-none ${cfg.text} text-[--color-fg]`}>
        chile<span className="text-[--color-accent]">·</span>cumple
      </span>
    </span>
  );
}
