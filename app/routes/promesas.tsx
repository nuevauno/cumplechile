import type { Route } from "./+types/promesas";

export function meta() {
  return [
    { title: "Promesas — Cumple Chile" },
    { name: "description", content: "Promesas de campaña de Jose Antonio Kast contrastadas con las decisiones del gobierno." },
  ];
}

export default function Promesas() {
  return (
    <div className="max-w-3xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
      <header className="rule-thick pt-2">
        <p className="text-xs tracking-[0.22em] uppercase text-[--color-ink-muted]">En construccion</p>
        <h1 className="display text-[clamp(3rem,7vw,5.5rem)] leading-[0.95] mt-2">
          Promesas
        </h1>
        <p className="mt-4 text-lg text-[--color-ink-soft]">
          Estamos catalogando el programa de gobierno de Jose Antonio Kast presentado durante la campaña 2025. Cada promesa quedara contrastada con las decisiones que se vayan tomando.
        </p>
      </header>
      <div className="mt-10 border border-[--color-ink] bg-[--color-paper-dark] p-8">
        <p className="text-xs uppercase tracking-[0.22em] text-[--color-ink-muted]">¿Tienes el programa?</p>
        <p className="mt-3 text-[--color-ink]">
          Si tienes el programa de gobierno completo en PDF o links a discursos donde se hicieron promesas concretas, escribenos. Cada promesa pasa por revision antes de publicarse.
        </p>
        <a
          href="mailto:hola@cumplechile.dev"
          className="mt-4 inline-block text-sm font-bold underline underline-offset-4 decoration-2 hover:text-[--color-cl-red]"
        >
          hola@cumplechile.dev
        </a>
      </div>
    </div>
  );
}
