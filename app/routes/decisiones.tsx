import { useState, useMemo } from "react";
import { decisionesOrdenadas, ministerios } from "~/lib/store";
import { DecisionCard } from "~/components/DecisionCard";
import type { Etiqueta } from "~/data/types";
import { createMeta } from "~/lib/meta";
import { PageShare } from "~/components/ShareButton";

export function meta() {
  return createMeta({
    title: "Decisiones — Chile Cumple",
    description: "Todas las decisiones registradas del gobierno de José Antonio Kast con fuentes verificadas.",
    path: "/decisiones",
  });
}

const ETIQUETAS: { value: "todas" | Etiqueta; label: string }[] = [
  { value: "todas", label: "Todas" },
  { value: "malo",  label: "Malo" },
  { value: "feo",   label: "Feo" },
  { value: "bueno", label: "Bueno" },
  { value: "info",  label: "Info" },
];

export default function Decisiones() {
  const [etiqueta, setEtiqueta] = useState<"todas" | Etiqueta>("todas");
  const [minSlug, setMinSlug] = useState<string>("todos");

  const all = decisionesOrdenadas();
  const ministeriosConData = ministerios.filter((m) => all.some((d) => d.ministerioSlug === m.slug));

  const filtradas = useMemo(() => {
    return all.filter((d) => {
      if (etiqueta !== "todas" && d.etiqueta !== etiqueta) return false;
      if (minSlug !== "todos" && d.ministerioSlug !== minSlug) return false;
      return true;
    });
  }, [all, etiqueta, minSlug]);

  return (
    <div className="max-w-5xl mx-auto px-5 sm:px-8 pt-12 pb-24">
      <header className="max-w-3xl">
        <p className="label">Registro</p>
        <h1 className="mt-3 text-5xl sm:text-7xl font-black tracking-tighter leading-[0.95] gradient-text">
          Decisiones
        </h1>
        <p className="mt-6 text-lg text-[--color-fg-2] leading-relaxed">
          Acciones, decretos, oficios y reformas del gobierno con fuente y categorizacion. Bueno, malo o feo segun su impacto medible.
        </p>
        <PageShare title="Decisiones — Chile Cumple" path="/decisiones" />
      </header>

      <div className="mt-10 space-y-3">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="label shrink-0">Etiqueta</span>
          {ETIQUETAS.map((o) => (
            <button
              key={o.value}
              onClick={() => setEtiqueta(o.value)}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                etiqueta === o.value
                  ? "bg-[--color-fg] text-[--color-bg]"
                  : "bg-[--color-surface] text-[--color-fg-2] border border-[--color-border] hover:border-[--color-border-strong]"
              }`}
            >
              {o.label}
            </button>
          ))}
        </div>
        {ministeriosConData.length > 1 && (
          <div className="flex items-center gap-3 flex-wrap">
            <span className="label shrink-0">Ministerio</span>
            <button
              onClick={() => setMinSlug("todos")}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                minSlug === "todos"
                  ? "bg-[--color-fg] text-[--color-bg]"
                  : "bg-[--color-surface] text-[--color-fg-2] border border-[--color-border] hover:border-[--color-border-strong]"
              }`}
            >
              Todos
            </button>
            {ministeriosConData.map((m) => (
              <button
                key={m.slug}
                onClick={() => setMinSlug(m.slug)}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  minSlug === m.slug
                    ? "bg-[--color-fg] text-[--color-bg]"
                    : "bg-[--color-surface] text-[--color-fg-2] border border-[--color-border] hover:border-[--color-border-strong]"
                }`}
              >
                {m.abrev || m.nombre}
              </button>
            ))}
          </div>
        )}
      </div>

      <p className="mt-5 text-xs text-[--color-fg-3] num">
        {filtradas.length} de {all.length} decisiones
      </p>

      <div className="mt-4 grid gap-4">
        {filtradas.map((d, i) => (
          <DecisionCard key={d.slug} decision={d} featured={i === 0} />
        ))}
        {filtradas.length === 0 && (
          <div className="card p-10 text-center">
            <p className="text-[--color-fg-2]">No hay decisiones con esos filtros.</p>
          </div>
        )}
      </div>
    </div>
  );
}
