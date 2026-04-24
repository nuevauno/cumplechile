import { Link } from "react-router";

export function meta() {
  return [
    { title: "Metodologia — Chile Cumple" },
    { name: "description", content: "Como verificamos cada decision, criterios de clasificacion, fuentes y licencia." },
  ];
}

export default function Sobre() {
  return (
    <article className="max-w-3xl mx-auto px-5 sm:px-8 pt-12 pb-24">
      <header>
        <p className="label">Metodologia</p>
        <h1 className="mt-3 text-5xl sm:text-7xl font-black tracking-tighter leading-[0.95] gradient-text">
          Como funciona
        </h1>
        <p className="mt-6 text-lg text-[--color-fg-2] leading-relaxed">
          Periodismo de datos sobre el gobierno de Jose Antonio Kast (2026-2030). Sin afiliacion politica, sin financiamiento de partidos, gobierno ni campañas.
        </p>
      </header>

      <section className="mt-16">
        <h2 className="text-3xl font-black tracking-tighter">Que registramos</h2>
        <div className="mt-6 grid gap-3">
          <div className="card p-6">
            <p className="label text-[--color-malo]">Decisiones</p>
            <p className="mt-2 text-[--color-fg-2] leading-relaxed">
              Acciones del gobierno: oficios, decretos, leyes enviadas al Congreso, designaciones, vetos, proyectos de presupuesto, instrucciones internas. Cualquier acto administrativo o politico que tenga efecto.
            </p>
          </div>
          <div className="card p-6">
            <p className="label text-[--color-feo]">Promesas</p>
            <p className="mt-2 text-[--color-fg-2] leading-relaxed">
              Compromisos publicos del entonces candidato durante la campaña 2025: programa, debates, entrevistas, redes sociales. Cada promesa se contrasta con las decisiones para definir si esta cumplida, incumplida, en proceso, contradictoria o sin informacion.
            </p>
          </div>
          <div className="card p-6">
            <p className="label text-[--color-info]">Documentos</p>
            <p className="mt-2 text-[--color-fg-2] leading-relaxed">
              Fuentes primarias: oficios firmados, circulares ministeriales, minutas DIPRES, resoluciones, leyes, decretos. Los publicamos resumidos en lenguaje legible, con citas textuales y el PDF original disponible.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-black tracking-tighter">Como clasificamos</h2>
        <p className="mt-3 text-[--color-fg-2]">
          Cada decision recibe una etiqueta y un nivel de severidad.
        </p>

        <div className="mt-8 grid gap-3">
          <div className="card p-6 relative overflow-hidden">
            <span className="absolute left-0 top-0 bottom-0 w-1 bg-[--color-bueno]" aria-hidden />
            <div className="flex items-center gap-2.5">
              <span className="pill pill-bueno">
                <span className="dot bg-[--color-bueno]" />
                Bueno
              </span>
            </div>
            <p className="mt-3 text-[--color-fg]">
              Cumple una promesa con efecto verificable, amplia derechos, protege poblaciones vulnerables, transparenta o moderniza el Estado.
            </p>
          </div>
          <div className="card p-6 relative overflow-hidden">
            <span className="absolute left-0 top-0 bottom-0 w-1 bg-[--color-malo]" aria-hidden />
            <div className="flex items-center gap-2.5">
              <span className="pill pill-malo">
                <span className="dot bg-[--color-malo]" />
                Malo
              </span>
            </div>
            <p className="mt-3 text-[--color-fg]">
              Incumple una promesa, recorta derechos o servicios, retrocede en politicas establecidas, debilita instituciones de control.
            </p>
          </div>
          <div className="card p-6 relative overflow-hidden">
            <span className="absolute left-0 top-0 bottom-0 w-1 bg-[--color-feo]" aria-hidden />
            <div className="flex items-center gap-2.5">
              <span className="pill pill-feo">
                <span className="dot bg-[--color-feo]" />
                Feo
              </span>
            </div>
            <p className="mt-3 text-[--color-fg]">
              Contradicciones entre el discurso y los hechos, opacidad, conflictos de interes, declaraciones que no resisten verificacion, filtraciones que el gobierno no comenta.
            </p>
          </div>
        </div>

        <h3 className="mt-12 text-xl font-black tracking-tight">Severidad 1 a 4</h3>
        <p className="mt-3 text-[--color-fg-2] leading-relaxed">
          Un punto significa "informativo, sin impacto material directo". Cuatro puntos significa "afecta a poblaciones vulnerables identificables o compromete equilibrios institucionales". Va con cada decision.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-black tracking-tighter">Como verificamos</h2>
        <ol className="mt-6 space-y-4 list-decimal list-outside pl-5 marker:font-bold marker:text-[--color-accent]">
          <li className="text-base sm:text-lg leading-relaxed pl-2">
            Toda decision necesita al menos un documento fuente o dos medios independientes que la confirmen. Twitter solo cuenta si hay screenshot archivado.
          </li>
          <li className="text-base sm:text-lg leading-relaxed pl-2">
            Los documentos se publican con el PDF embebido y al menos dos citas textuales. Si el documento es filtracion, lo declaramos.
          </li>
          <li className="text-base sm:text-lg leading-relaxed pl-2">
            Resumimos en lenguaje legible. La idea es que entiendas en 30 segundos sin abrir el PDF — pero el PDF esta ahi siempre.
          </li>
          <li className="text-base sm:text-lg leading-relaxed pl-2">
            Si el gobierno responde, agregamos la respuesta. Si retira o modifica una decision, lo dejamos registrado en lugar de borrar.
          </li>
          <li className="text-base sm:text-lg leading-relaxed pl-2">
            Si nos equivocamos, lo corregimos visiblemente con fecha de la correccion. No editamos en silencio.
          </li>
        </ol>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-black tracking-tighter">Fuentes</h2>
        <p className="mt-3 text-[--color-fg-2] leading-relaxed">
          The Clinic, CIPER, Interferencia, El Mostrador, BioBio Chile, La Tercera, Cooperativa, Emol, Resumen.cl, Diario Oficial, sesiones del Congreso Nacional, oficios DIPRES y declaraciones publicas de autoridades.
        </p>
      </section>

      <section className="mt-16">
        <div className="card p-8 sm:p-10 text-center" style={{ background: "linear-gradient(135deg, var(--color-accent-soft), var(--color-surface))" }}>
          <h2 className="text-3xl font-black tracking-tighter">Tienes algo que aportar?</h2>
          <p className="mt-3 text-[--color-fg-2] max-w-xl mx-auto">
            Documentos publicos, promesas que faltan o correcciones. Toda informacion entra a una cola de revision antes de publicarse.
          </p>
          <a href="mailto:hola@chilecumple.com" className="mt-6 inline-flex btn btn-primary">
            Escribir
          </a>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-black tracking-tighter">Licencia</h2>
        <p className="mt-3 text-[--color-fg-2] leading-relaxed">
          Contenido editorial bajo <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer" className="text-[--color-accent] hover:text-[--color-accent-hover] font-medium">Creative Commons CC BY-SA 4.0</a>. Citalo libremente atribuyendo y compartiendo bajo la misma licencia. El codigo es{" "}
          <a href="https://github.com/nuevauno/cumplechile" target="_blank" rel="noopener noreferrer" className="text-[--color-accent] hover:text-[--color-accent-hover] font-medium">abierto en GitHub</a>. Los documentos originales son de dominio publico.
        </p>
      </section>

      <p className="mt-16">
        <Link to="/" className="btn btn-ghost">
          <span aria-hidden>←</span>
          Volver al inicio
        </Link>
      </p>
    </article>
  );
}
