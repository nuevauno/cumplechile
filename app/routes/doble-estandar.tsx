import {
  CASOS_DOBLE_ESTANDAR,
  MENTIRAS_CONTRA_BORIC,
  dobleEstandarOrdenado,
  mentirasContraBoricOrdenadas,
  type CategoriaDobleEstandar,
} from "~/data/doble-estandar";

export function meta() {
  return [
    { title: "Doble estándar de la derecha — Chile Cumple" },
    {
      name: "description",
      content:
        "Críticas, dobles estándares y desinformación contra el gobierno de Gabriel Boric contrastadas con la vara que la derecha debe aplicarse en el gobierno de José Antonio Kast.",
    },
  ];
}

export async function loader() {
  return {
    casos: dobleEstandarOrdenado(),
    mentiras: mentirasContraBoricOrdenadas(),
  };
}

const categoriaLabel: Record<CategoriaDobleEstandar, string> = {
  seguridad: "Seguridad",
  inmigracion: "Inmigración",
  probidad: "Probidad",
  salud: "Salud",
  educacion: "Educación",
  social: "Gasto social",
  desinformacion: "Desinformación",
};

const categoriaClass: Record<CategoriaDobleEstandar, string> = {
  seguridad: "pill-malo",
  inmigracion: "pill-feo",
  probidad: "pill-malo",
  salud: "pill-feo",
  educacion: "pill-info",
  social: "pill-accent",
  desinformacion: "pill-malo",
};

const veredictoLabel: Record<string, string> = {
  falso: "Falso",
  engañoso: "Engañoso",
  fuera_de_contexto: "Fuera de contexto",
};

const fecha = (iso: string) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString("es-CL", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

export default function DobleEstandar({ loaderData }: { loaderData: Awaited<ReturnType<typeof loader>> }) {
  const { casos, mentiras } = loaderData;
  const casosCriticos = casos.filter((c) => c.severidad >= 4).length;

  return (
    <div>
      <section className="relative overflow-hidden border-b border-[--color-fg] impact-panel">
        <div className="absolute inset-0 grid-bg opacity-25" aria-hidden />
        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-8 py-14 sm:py-20">
          <p className="label text-[--color-malo]">Archivo Boric 2022-2026</p>
          <h1 className="mt-3 headline-display text-[clamp(3rem,9vw,8rem)] max-w-[12ch]">
            La vara que ellos pusieron.
          </h1>
          <p className="mt-6 max-w-3xl text-lg sm:text-xl text-[--color-fg-2] leading-relaxed">
            La derecha atacó al gobierno de Gabriel Boric por seguridad, gasto social,
            probidad, nombramientos, educación, migración y salud. Esta sección ordena
            esos ataques con fuente y los contrasta con la vara que ahora debe aplicarse
            al gobierno de José Antonio Kast.
          </p>

          <div className="mt-10 grid sm:grid-cols-3 gap-3 max-w-4xl">
            <StatCard label="Dobles estándares" value={String(casos.length)} delay="stagger-1" />
            <StatCard label="Casos críticos" value={String(casosCriticos)} tone="malo" delay="stagger-2" />
            <StatCard label="Falsedades contra Boric" value={String(mentiras.length)} tone="feo" delay="stagger-3" />
          </div>
        </div>
      </section>

      <section className="border-b border-[--color-border]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 py-14 sm:py-20">
          <div className="grid lg:grid-cols-12 gap-8">
            <header className="lg:col-span-4">
              <p className="label text-[--color-malo]">Doble estándar político</p>
              <h2 className="mt-2 text-4xl sm:text-6xl font-black tracking-tighter leading-none">
                Cuando eran oposición.
                <br />
                Cuando gobiernan.
              </h2>
              <p className="mt-5 text-sm text-[--color-fg-2] leading-relaxed">
                No todos los ataques eran falsos. Algunos apuntaban a problemas reales.
                El punto editorial es otro: la derecha pidió renuncias, acusaciones y
                castigos inmediatos para otros, pero suele pedir cautela cuando el caso
                toca a los propios.
              </p>
            </header>

            <ol className="lg:col-span-8 grid gap-4">
              {casos.map((caso, index) => (
                <li key={caso.slug} id={caso.slug} className="scroll-mt-24">
                  <article className={`card kinetic-card p-6 sm:p-7 ${index < 6 ? `stagger-${(index % 6) + 1}` : ""}`}>
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className={`pill ${categoriaClass[caso.categoria]}`}>
                        {categoriaLabel[caso.categoria]}
                      </span>
                      <span className="text-[--color-fg-4]">·</span>
                      <span className="num text-[10px] uppercase tracking-wider text-[--color-fg-3]">
                        {fecha(caso.fecha)}
                      </span>
                      <span className="ml-auto num text-2xl font-black text-[--color-fg-4]">
                        {(index + 1).toString().padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="mt-4 text-2xl font-black tracking-tight leading-tight">
                      {caso.actor}
                    </h3>

                    <div className="mt-5 grid md:grid-cols-3 gap-4">
                      <TextBlock label="Ataque" text={caso.ataque} />
                      <TextBlock label="Hecho Boric" text={caso.hechoBoric} />
                      <TextBlock label="La vara vuelve" text={caso.contraste} emphasis />
                    </div>

                    <div className="mt-5 pt-5 border-t border-[--color-border] flex flex-wrap gap-3 text-xs">
                      <a href={caso.fuenteAtaque.url} target="_blank" rel="noopener noreferrer" className="font-bold text-[--color-accent] hover:text-[--color-accent-hover]">
                        Ataque · {caso.fuenteAtaque.medio} ↗
                      </a>
                      <a href={caso.fuenteContraste.url} target="_blank" rel="noopener noreferrer" className="font-bold text-[--color-accent] hover:text-[--color-accent-hover]">
                        Contraste · {caso.fuenteContraste.medio} ↗
                      </a>
                    </div>
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 py-14 sm:py-20">
          <div className="grid lg:grid-cols-12 gap-8">
            <header className="lg:col-span-4">
              <p className="label text-[--color-malo]">Mintieron contra Boric</p>
              <h2 className="mt-2 text-4xl sm:text-6xl font-black tracking-tighter leading-none">
                Falsedades que hicieron daño.
              </h2>
              <p className="mt-5 text-sm text-[--color-fg-2] leading-relaxed">
                Casos chequeados por fact-checkers profesionales. Cuando no consta un
                actor político directo, se marca como viral o redes sociales; cuando
                sí consta, se nombra.
              </p>
            </header>

            <ul className="lg:col-span-8 grid md:grid-cols-2 gap-4">
              {mentiras.map((m) => (
                <li key={m.slug} id={m.slug} className="scroll-mt-24">
                  <article className="card kinetic-card p-6 h-full relative overflow-hidden scanline">
                    <span className="absolute left-0 top-0 bottom-0 w-1 bg-[--color-malo]" aria-hidden />
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="pill pill-malo">{veredictoLabel[m.veredicto]}</span>
                      <span className={`pill ${categoriaClass[m.categoria]}`}>
                        {categoriaLabel[m.categoria]}
                      </span>
                      <span className="text-[--color-fg-4]">·</span>
                      <span className="num text-[10px] uppercase tracking-wider text-[--color-fg-3]">
                        {fecha(m.fecha)}
                      </span>
                    </div>

                    <blockquote className="mt-4 text-lg font-black tracking-tight leading-snug text-[--color-fg]">
                      «{m.claim}»
                    </blockquote>

                    <p className="mt-3 text-xs text-[--color-fg-3]">
                      Difusión: {m.difusor}
                    </p>

                    <div className="mt-5 pt-5 border-t border-[--color-border]">
                      <p className="label text-[10px]">Dato correcto</p>
                      <p className="mt-2 text-sm text-[--color-fg-2] leading-relaxed">
                        {m.datoCorrecto}
                      </p>
                    </div>

                    <a href={m.fuente.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex text-xs font-bold text-[--color-accent] hover:text-[--color-accent-hover]">
                      Fuente · {m.fuente.medio} ↗
                    </a>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

function StatCard({ label, value, tone = "fg", delay = "" }: { label: string; value: string; tone?: "fg" | "malo" | "feo"; delay?: string }) {
  const color = tone === "malo" ? "text-[--color-malo]" : tone === "feo" ? "text-[--color-feo]" : "text-[--color-fg]";
  return (
    <div className={`card kinetic-card p-5 ${delay}`}>
      <p className="label">{label}</p>
      <p className={`mt-2 num text-5xl font-black tracking-tighter number-kick ${color}`}>{value}</p>
    </div>
  );
}

function TextBlock({ label, text, emphasis = false }: { label: string; text: string; emphasis?: boolean }) {
  return (
    <div className={emphasis ? "rounded-xl bg-[--color-malo-soft] p-4 scanline" : "rounded-xl bg-[--color-surface-2] p-4"}>
      <p className={`label text-[10px] ${emphasis ? "text-[--color-malo]" : ""}`}>{label}</p>
      <p className="mt-2 text-sm text-[--color-fg-2] leading-relaxed">{text}</p>
    </div>
  );
}

export const dobleEstandarStats = {
  casos: CASOS_DOBLE_ESTANDAR.length,
  mentiras: MENTIRAS_CONTRA_BORIC.length,
};
