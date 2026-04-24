import type { Route } from "./+types/decisiones";
import { decisionesOrdenadas } from "~/lib/store";
import { DecisionCard } from "~/components/DecisionCard";

export function meta() {
  return [
    { title: "Decisiones — Cumple Chile" },
    { name: "description", content: "Todas las decisiones registradas del gobierno de Jose Antonio Kast con fuentes verificadas." },
  ];
}

export async function loader() {
  return { decisiones: decisionesOrdenadas() };
}

export default function Decisiones({ loaderData }: Route.ComponentProps) {
  const { decisiones } = loaderData;
  return (
    <div className="max-w-4xl mx-auto px-6 lg:px-10 py-12 lg:py-16">
      <header className="rule-thick pt-2">
        <p className="text-xs tracking-[0.22em] uppercase text-[--color-ink-muted]">Registro</p>
        <h1 className="display text-[clamp(3rem,7vw,5.5rem)] leading-[0.95] mt-2">Decisiones</h1>
        <p className="mt-4 text-lg text-[--color-ink-soft] max-w-2xl">
          Acciones, decretos, oficios y reformas del gobierno con fuente y categorizacion. Bueno, malo o feo segun su impacto medible.
        </p>
      </header>

      <div className="mt-10">
        {decisiones.map((d, i) => (
          <DecisionCard key={d.slug} decision={d} featured={i === 0} />
        ))}
      </div>
    </div>
  );
}
