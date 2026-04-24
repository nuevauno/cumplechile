import type { Route } from "./+types/decisiones";
import { decisionesOrdenadas } from "~/lib/store";
import { DecisionCard } from "~/components/DecisionCard";

export function meta() {
  return [
    { title: "Decisiones — Chile Cumple" },
    { name: "description", content: "Todas las decisiones registradas del gobierno de Jose Antonio Kast con fuentes verificadas." },
  ];
}

export async function loader() {
  return { decisiones: decisionesOrdenadas() };
}

export default function Decisiones({ loaderData }: Route.ComponentProps) {
  const { decisiones } = loaderData;
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
      </header>

      <div className="mt-12 grid gap-5">
        {decisiones.map((d, i) => (
          <DecisionCard key={d.slug} decision={d} featured={i === 0} />
        ))}
      </div>
    </div>
  );
}
