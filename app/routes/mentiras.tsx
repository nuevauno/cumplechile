import { CUNAS, cunasOrdenadas } from "~/data/cunas";
import { MENTIRAS, mentirasOrdenadas } from "~/data/mentiras";

export function meta() {
  return [
    { title: "Mentiras y cuñas — Chile Cumple" },
    {
      name: "description",
      content:
        "Cuñas de campaña que no se cumplieron y dichos públicos de José Antonio Kast desmentidos por fact-checkers profesionales y datos oficiales.",
    },
  ];
}

export async function loader() {
  return {
    cunas: cunasOrdenadas(),
    mentiras: mentirasOrdenadas(),
  };
}

const veredictoLabel: Record<string, { cls: string; label: string }> = {
  incumplida: { cls: "pill-malo", label: "Incumplida" },
  contradicha: { cls: "pill-malo", label: "Se contradijo" },
  atrasada: { cls: "pill-feo", label: "Atrasada" },
  atenuada: { cls: "pill-feo", label: "Atenuada" },
};

const veredictoMentira: Record<string, { cls: string; label: string }> = {
  falso: { cls: "pill-malo", label: "Falso" },
  engañoso: { cls: "pill-feo", label: "Engañoso" },
  exagerado: { cls: "pill-feo", label: "Exagerado" },
};

export default function Mentiras({ loaderData }: { loaderData: Awaited<ReturnType<typeof loader>> }) {
  const { cunas, mentiras } = loaderData;

  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-12 pb-24">
      <header className="max-w-3xl">
        <p className="label text-[--color-malo]">Mentiras y cuñas</p>
        <h1 className="mt-3 text-5xl sm:text-7xl font-black tracking-tighter leading-[0.95] gradient-text">
          Lo que dijo. Lo que era falso.
        </h1>
        <p className="mt-6 text-lg text-[--color-fg-2] leading-relaxed">
          {mentiras.length} dichos chequeados y desmentidos por fact-checkers profesionales (La Tercera Decodificador,
          Fast Check, Mala Espina Check, Vergara 240). {cunas.length} cuñas de campaña con cita textual, fecha y
          medio donde se dijeron, contrastadas con lo que pasó en realidad.
        </p>
      </header>

      <section className="mt-12">
        <p className="label text-[--color-malo]">Mentiras chequeadas</p>
        <h2 className="mt-2 text-3xl sm:text-4xl font-black tracking-tighter">
          {mentiras.length} dichos calificados como falsos, engañosos o exagerados
        </h2>

        <ul className="mt-8 grid lg:grid-cols-2 gap-4">
          {mentiras.map((m) => {
            const v = veredictoMentira[m.veredicto] ?? veredictoMentira.falso;
            return (
              <li key={m.slug} id={m.slug} className="scroll-mt-24">
                <article className="card p-6 sm:p-7 relative overflow-hidden h-full">
                  <span className="absolute left-0 top-0 bottom-0 w-1 bg-[--color-malo]" aria-hidden />
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className={`pill ${v.cls}`}>{v.label}</span>
                    <span className="text-[--color-fg-4]">·</span>
                    <span className="num text-[10px] uppercase tracking-wider text-[--color-fg-3]">
                      {new Date(m.fechaDicho + "T12:00:00").toLocaleDateString("es-CL", { day: "numeric", month: "short", year: "numeric" })}
                    </span>
                    {m.reconocio && (
                      <>
                        <span className="text-[--color-fg-4]">·</span>
                        <span className="pill pill-feo">Reconoció error</span>
                      </>
                    )}
                  </div>

                  <h3 className="mt-3 text-xl font-black tracking-tight leading-tight">{m.titulo}</h3>

                  <blockquote className="mt-4 pl-4 border-l-2 border-[--color-malo] text-[--color-fg] italic">
                    «{m.fraseLiteral}»
                  </blockquote>
                  <p className="mt-2 text-xs text-[--color-fg-3]">
                    Dicho en: {m.donde}
                  </p>

                  <div className="mt-5 pt-5 border-t border-[--color-border]">
                    <p className="label text-[10px]">Dato real</p>
                    <p className="mt-2 text-sm text-[--color-fg] leading-relaxed">{m.datoReal}</p>
                    <p className="mt-2 text-xs text-[--color-feo] font-semibold">{m.diferencia}</p>
                  </div>

                  {m.cuerpo && <p className="mt-4 text-sm text-[--color-fg-2] leading-relaxed">{m.cuerpo}</p>}

                  <a
                    href={m.fuenteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs text-[--color-fg-3] hover:text-[--color-accent] transition-colors"
                  >
                    <span aria-hidden>↗</span>
                    Fuente · {m.fuenteFactCheck}
                  </a>
                </article>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="mt-20">
        <p className="label">Cuñas de campaña</p>
        <h2 className="mt-2 text-3xl sm:text-4xl font-black tracking-tighter">
          Lo que dijo. Cuándo. Qué pasó después.
        </h2>

        <ul className="mt-8 grid lg:grid-cols-2 gap-4">
          {cunas.map((c) => {
            const v = veredictoLabel[c.veredicto] ?? veredictoLabel.incumplida;
            return (
              <li key={c.slug} id={c.slug} className="scroll-mt-24">
                <article className="card p-6 sm:p-7 relative overflow-hidden h-full">
                  <span className="absolute left-0 top-0 bottom-0 w-1 bg-[--color-malo]" aria-hidden />
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className={`pill ${v.cls}`}>{v.label}</span>
                    <span className="text-[--color-fg-4]">·</span>
                    <span className="num text-[10px] uppercase tracking-wider text-[--color-fg-3]">
                      {new Date(c.fechaDicho + "T12:00:00").toLocaleDateString("es-CL", { day: "numeric", month: "short", year: "numeric" })}
                    </span>
                  </div>

                  <blockquote className="mt-4 text-lg font-bold tracking-tight leading-snug text-[--color-fg]">
                    «{c.cita}»
                  </blockquote>
                  <p className="mt-3 text-xs text-[--color-fg-3]">
                    <span className="uppercase tracking-wider text-[10px] text-[--color-fg-4]">Dicho en: </span>
                    <a href={c.fuenteUrl} target="_blank" rel="noopener noreferrer" className="text-[--color-fg-2] hover:text-[--color-accent] underline-offset-4 hover:underline">
                      {c.donde}
                    </a>
                  </p>

                  <div className="mt-5 pt-5 border-t border-[--color-border]">
                    <p className="label text-[10px]">Lo que pasó</p>
                    <p className="mt-2 text-sm text-[--color-fg] leading-relaxed">{c.realidad}</p>
                    <p className="mt-3 text-[10px] uppercase tracking-wider text-[--color-fg-4]">
                      Fuente · {c.fuenteMedio}
                    </p>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </section>

      <div className="mt-16 card p-7 sm:p-9" style={{ background: "linear-gradient(135deg, var(--color-accent-soft), var(--color-surface))" }}>
        <p className="label">Tienes una cuña documentada?</p>
        <p className="mt-3 text-base sm:text-lg text-[--color-fg] leading-relaxed">
          Si registramos una declaración pública de campaña con cita textual, fecha y medio que se haya
          incumplido, atenuado o contradicho después, escríbenos. La sumamos al catálogo.
        </p>
        <a href="mailto:hola@chilecumple.com" className="mt-5 inline-flex btn btn-primary">
          hola@chilecumple.com
        </a>
      </div>
    </div>
  );
}
