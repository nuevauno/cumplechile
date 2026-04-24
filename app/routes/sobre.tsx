import { Link } from "react-router";

export function meta() {
  return [
    { title: "Metodologia — Cumple Chile" },
    { name: "description", content: "Como verificamos cada decision, criterios de clasificacion, fuentes y licencia." },
  ];
}

export default function Sobre() {
  return (
    <article className="max-w-3xl mx-auto px-6 lg:px-10 py-12 lg:py-20">
      <header className="rule-thick pt-2">
        <p className="text-xs tracking-[0.22em] uppercase text-[--color-ink-muted]">Metodologia</p>
        <h1 className="display text-[clamp(3rem,7vw,5.5rem)] leading-[0.95] mt-2">
          Como funciona
        </h1>
        <p className="mt-4 text-lg text-[--color-ink-soft]">
          Periodismo de datos sobre el gobierno de Jose Antonio Kast (2026-2030). Sin afiliacion politica, sin financiamiento de partidos, gobierno ni campañas.
        </p>
      </header>

      <section className="mt-12">
        <h2 className="display text-3xl">Que registramos</h2>
        <p className="mt-4 text-base md:text-lg leading-relaxed">
          Tres tipos de eventos:
        </p>
        <dl className="mt-6 space-y-6">
          <div className="border-l-4 border-[--color-ink] pl-5">
            <dt className="font-bold text-base uppercase tracking-[0.1em]">Decisiones</dt>
            <dd className="mt-1 text-[--color-ink-soft]">
              Acciones del gobierno: oficios, decretos, leyes enviadas al Congreso, designaciones, vetos, proyectos de presupuesto, instrucciones internas. Cualquier acto administrativo o politico que tenga efecto.
            </dd>
          </div>
          <div className="border-l-4 border-[--color-ink] pl-5">
            <dt className="font-bold text-base uppercase tracking-[0.1em]">Promesas</dt>
            <dd className="mt-1 text-[--color-ink-soft]">
              Compromisos publicos del entonces candidato durante la campaña 2025: programa, debates, entrevistas, redes sociales. Cada promesa se contrasta con las decisiones para definir si esta cumplida, incumplida, en proceso, contradictoria o sin informacion.
            </dd>
          </div>
          <div className="border-l-4 border-[--color-ink] pl-5">
            <dt className="font-bold text-base uppercase tracking-[0.1em]">Documentos</dt>
            <dd className="mt-1 text-[--color-ink-soft]">
              Fuentes primarias: oficios firmados, circulares ministeriales, minutas DIPRES, resoluciones, leyes, decretos. Los publicamos resumidos en lenguaje legible, con citas textuales y el PDF original disponible.
            </dd>
          </div>
        </dl>
      </section>

      <section className="mt-16">
        <h2 className="display text-3xl">Como clasificamos</h2>
        <p className="mt-4 text-base md:text-lg leading-relaxed">
          Cada decision recibe una etiqueta y un nivel de severidad.
        </p>

        <div className="mt-6 space-y-4">
          <div className="border border-[--color-bueno] bg-[--color-bueno-bg] p-5">
            <p className="font-bold uppercase tracking-[0.14em] text-[--color-bueno]">Bueno</p>
            <p className="mt-1 text-[--color-ink]">
              Cumple una promesa con efecto verificable, amplia derechos, protege poblaciones vulnerables, transparenta o moderniza el Estado.
            </p>
          </div>
          <div className="border border-[--color-malo] bg-[--color-malo-bg] p-5">
            <p className="font-bold uppercase tracking-[0.14em] text-[--color-malo]">Malo</p>
            <p className="mt-1 text-[--color-ink]">
              Incumple una promesa, recorta derechos o servicios, retrocede en politicas establecidas, debilita instituciones de control.
            </p>
          </div>
          <div className="border border-[--color-feo] bg-[--color-feo-bg] p-5">
            <p className="font-bold uppercase tracking-[0.14em] text-[--color-feo]">Feo</p>
            <p className="mt-1 text-[--color-ink]">
              Contradicciones entre el discurso y los hechos, opacidad, conflictos de interes, declaraciones que no resisten verificacion, filtraciones que el gobierno no comenta.
            </p>
          </div>
        </div>

        <h3 className="display text-2xl mt-10">Severidad</h3>
        <p className="mt-3 text-base md:text-lg leading-relaxed">
          Escala de 1 a 4 puntos. Un punto significa "informativo, sin impacto material directo". Cuatro puntos significa "afecta a poblaciones vulnerables identificables o compromete equilibrios institucionales". Va con cada decision.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="display text-3xl">Como verificamos</h2>
        <ol className="mt-4 space-y-4 text-base md:text-lg leading-relaxed list-decimal list-inside marker:font-bold marker:text-[--color-cl-red]">
          <li>
            Toda decision necesita al menos un documento fuente o dos medios independientes que la confirmen. Twitter solo cuenta si hay screenshot archivado.
          </li>
          <li>
            Los documentos se publican con el PDF embebido y al menos dos citas textuales. Si el documento es filtracion, lo declaramos.
          </li>
          <li>
            Resumimos en lenguaje legible. La idea es que entiendas en 30 segundos sin abrir el PDF — pero el PDF esta ahi siempre.
          </li>
          <li>
            Si el gobierno responde, agregamos la respuesta. Si retira o modifica una decision, lo dejamos registrado en lugar de borrar la entrada.
          </li>
          <li>
            Si nos equivocamos, lo corregimos visiblemente con fecha de la correccion. No editamos en silencio.
          </li>
        </ol>
      </section>

      <section className="mt-16">
        <h2 className="display text-3xl">Fuentes que monitoreamos</h2>
        <p className="mt-4 text-base md:text-lg leading-relaxed">
          The Clinic, CIPER, Interferencia, El Mostrador, BioBio Chile, La Tercera, Cooperativa, Emol, Resumen.cl, Diario Oficial, sesiones del Congreso Nacional, oficios DIPRES y declaraciones publicas de autoridades.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="display text-3xl">Aporta</h2>
        <p className="mt-4 text-base md:text-lg leading-relaxed">
          Si tienes un documento publico que aun no esta aqui, una promesa que falta o una correccion que hacer, escribenos. Toda informacion entra a una cola de revision antes de publicarse.
        </p>
        <a
          href="mailto:hola@cumplechile.dev"
          className="mt-4 inline-block text-base font-bold underline underline-offset-4 decoration-2 hover:text-[--color-cl-red]"
        >
          hola@cumplechile.dev
        </a>
      </section>

      <section className="mt-16 rule-thick pt-6">
        <h2 className="display text-3xl">Licencia y uso</h2>
        <p className="mt-4 text-base md:text-lg leading-relaxed">
          Todo el contenido editorial de este sitio esta bajo licencia <strong>Creative Commons CC BY-SA 4.0</strong>. Puedes copiarlo, redistribuirlo y modificarlo siempre que cites la fuente y compartas bajo la misma licencia. Los documentos originales (oficios, decretos, leyes) son de dominio publico — provienen de organismos del Estado.
        </p>
        <p className="mt-4 text-base md:text-lg leading-relaxed">
          El codigo del sitio es abierto en <a href="https://github.com/nuevauno/cumplechile" className="font-bold underline underline-offset-4 decoration-2 hover:text-[--color-cl-red]">GitHub</a>.
        </p>
      </section>

      <p className="mt-16 text-sm text-[--color-ink-muted]">
        <Link to="/" className="font-bold uppercase tracking-[0.14em] hover:text-[--color-cl-red]">
          ← Volver a la portada
        </Link>
      </p>
    </article>
  );
}
