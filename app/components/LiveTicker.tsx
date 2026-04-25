/**
 * Cinta horizontal scrolleable con los KPIs duros del gobierno.
 * Va al tope de la home, debajo del header. Estética news ticker.
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
    <div className="ticker-wrap relative overflow-hidden border-y border-[--color-border] bg-[--color-surface]">
      <div className="ticker flex items-center gap-12 py-3 whitespace-nowrap">
        {loop.map((it, i) => (
          <span key={i} className="flex items-baseline gap-2 text-sm">
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
