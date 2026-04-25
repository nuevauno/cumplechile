/**
 * Cinta horizontal scrolleable con los KPIs duros del gobierno.
 * Va al tope de la home, debajo del header. Estética news ticker.
 * Tiene fade lateral con mask-image para que las palabras no se corten
 * en los bordes y el primer/último ítem se vea entrar.
 */
export interface TickerItem {
  label: string;
  valor: string;
  tono?: "malo" | "feo" | "bueno" | "info" | "accent";
}

export function LiveTicker({ items }: { items: TickerItem[] }) {
  // Duplicamos para loop continuo
  const loop = [...items, ...items];
  return (
    <div
      className="ticker-wrap relative overflow-hidden border-y border-[--color-border] bg-[--color-surface]"
      style={{
        maskImage: "linear-gradient(90deg, transparent 0, black 24px, black calc(100% - 24px), transparent 100%)",
        WebkitMaskImage: "linear-gradient(90deg, transparent 0, black 24px, black calc(100% - 24px), transparent 100%)",
      }}
    >
      <div className="ticker flex items-center gap-6 sm:gap-12 py-2.5 sm:py-3 whitespace-nowrap">
        {loop.map((it, i) => (
          <span key={i} className="flex items-baseline gap-2 text-xs sm:text-sm pl-1">
            <span className="label text-[10px]">{it.label}</span>
            <span className={`num font-black tracking-tight ${toneToColor(it.tono)}`}>
              {it.valor}
            </span>
            <span className="text-[--color-fg-4]" aria-hidden>
              ·
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

function toneToColor(tone?: TickerItem["tono"]) {
  switch (tone) {
    case "malo":
      return "text-[--color-malo]";
    case "feo":
      return "text-[--color-feo]";
    case "bueno":
      return "text-[--color-bueno]";
    case "info":
      return "text-[--color-info]";
    case "accent":
      return "text-[--color-accent]";
    default:
      return "text-[--color-fg]";
  }
}
