import type { Etiqueta, RecomendacionPrograma } from "~/data/types";

export function EtiquetaBadge({ etiqueta }: { etiqueta: Etiqueta }) {
  const cls =
    etiqueta === "bueno" ? "badge-bueno"
    : etiqueta === "malo" ? "badge-malo"
    : etiqueta === "feo" ? "badge-feo"
    : "badge-info";
  const label = { bueno: "Bueno", malo: "Malo", feo: "Feo", info: "Info" }[etiqueta];
  return <span className={`badge ${cls}`}>{label}</span>;
}

export function SeveridadDots({ severidad }: { severidad: 1 | 2 | 3 | 4 }) {
  return (
    <span className="inline-flex gap-0.5" aria-label={`Severidad ${severidad} de 4`}>
      {[1, 2, 3, 4].map((i) => (
        <span
          key={i}
          className={`block w-1.5 h-1.5 rounded-full ${i <= severidad ? "bg-[--color-malo]" : "bg-[--color-ink-muted]/30"}`}
        />
      ))}
    </span>
  );
}

export function RecomendacionBadge({ recomendacion }: { recomendacion: RecomendacionPrograma }) {
  if (recomendacion === "descontinuar") {
    return <span className="badge badge-malo">Descontinuar</span>;
  }
  if (recomendacion === "ajuste") {
    return <span className="badge badge-feo">Ajuste -15%</span>;
  }
  return <span className="badge badge-info">Sin observaciones</span>;
}
