import type { Etiqueta, RecomendacionPrograma } from "~/data/types";

const etiquetaCfg: Record<Etiqueta, { cls: string; label: string; dot: string }> = {
  bueno: { cls: "pill-bueno", label: "Bueno", dot: "bg-[--color-bueno]" },
  malo:  { cls: "pill-malo",  label: "Malo",  dot: "bg-[--color-malo]" },
  feo:   { cls: "pill-feo",   label: "Feo",   dot: "bg-[--color-feo]" },
  info:  { cls: "pill-info",  label: "Info",  dot: "bg-[--color-info]" },
};

export function EtiquetaBadge({ etiqueta }: { etiqueta: Etiqueta }) {
  const c = etiquetaCfg[etiqueta];
  return (
    <span className={`pill ${c.cls}`}>
      <span className={`dot ${c.dot}`} />
      {c.label}
    </span>
  );
}

export function SeveridadBar({ severidad }: { severidad: 1 | 2 | 3 | 4 }) {
  const colors = {
    1: "bg-[--color-info]",
    2: "bg-[--color-feo]",
    3: "bg-[--color-malo]",
    4: "bg-[--color-cl]",
  } as const;
  const labels = { 1: "Informativo", 2: "Relevante", 3: "Grave", 4: "Critico" };
  return (
    <span className="inline-flex items-center gap-1.5" title={`Severidad: ${labels[severidad]}`}>
      <span className="flex gap-0.5" aria-hidden="true">
        {[1, 2, 3, 4].map((i) => (
          <span
            key={i}
            className={`block w-1 h-3 rounded-full ${i <= severidad ? colors[severidad] : "bg-[--color-border]"}`}
          />
        ))}
      </span>
      <span className="sr-only">Severidad {severidad} de 4 ({labels[severidad]})</span>
    </span>
  );
}

const recomendacionCfg: Record<RecomendacionPrograma, { cls: string; label: string }> = {
  descontinuar:     { cls: "pill-malo",    label: "Se elimina" },
  ajuste:           { cls: "pill-feo",     label: "Rebaja −15%" },
  sin_observaciones:{ cls: "pill-neutral", label: "Continua" },
};

export function RecomendacionBadge({ recomendacion }: { recomendacion: RecomendacionPrograma }) {
  const c = recomendacionCfg[recomendacion];
  return <span className={`pill ${c.cls}`}>{c.label}</span>;
}
