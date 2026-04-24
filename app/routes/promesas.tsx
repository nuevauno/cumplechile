export function meta() {
  return [
    { title: "Promesas — Chile Cumple" },
    { name: "description", content: "Promesas de campaña de Jose Antonio Kast contrastadas con las decisiones del gobierno." },
  ];
}

export default function Promesas() {
  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 pt-12 pb-32">
      <header>
        <p className="label">En construccion</p>
        <h1 className="mt-3 text-5xl sm:text-7xl font-black tracking-tighter leading-[0.95] gradient-text">
          Promesas
        </h1>
        <p className="mt-6 text-lg text-[--color-fg-2] leading-relaxed">
          Estamos catalogando el programa de gobierno de Jose Antonio Kast presentado durante la campaña 2025. Cada promesa quedara contrastada con las decisiones tomadas: cumplida, incumplida, en proceso, contradictoria o sin informacion.
        </p>
      </header>

      <div className="mt-12 card p-8 sm:p-10" style={{ background: "linear-gradient(135deg, var(--color-accent-soft), var(--color-surface))" }}>
        <p className="label">Tienes el programa?</p>
        <p className="mt-3 text-[--color-fg] leading-relaxed">
          Si tienes el programa de gobierno completo en PDF, links a discursos donde se hicieron promesas concretas, o cualquier compromiso publico documentado, escribenos. Cada promesa pasa por revision antes de publicarse.
        </p>
        <a href="mailto:hola@chilecumple.com" className="mt-6 inline-flex btn btn-primary">
          hola@chilecumple.com
        </a>
      </div>
    </div>
  );
}
