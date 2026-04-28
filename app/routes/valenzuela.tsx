import { VALENZUELA_STATS, valenzuelaOrdenado, type CategoriaValenzuela } from "~/data/valenzuela";
import { createMeta } from "~/lib/meta";
import { PageShare, ShareButton } from "~/components/ShareButton";

export function meta() {
  return createMeta({
    title: "Las columnas que se le devolvieron a Cristián Valenzuela — Chile Cumple",
    description:
      "Archivo de columnas de Cristián Valenzuela contrastadas con su rol en el gobierno de José Antonio Kast, contratos públicos, OPE, recortes y comunicación oficial.",
    path: "/valenzuela",
  });
}

export async function loader() {
  return {
    casos: valenzuelaOrdenado(),
  };
}

const categoriaLabel: Record<CategoriaValenzuela, string> = {
  estado: "Estado",
  probidad: "Probidad",
  comunicacion: "Comunicación",
  fiscal: "Fiscal",
  seguridad: "Seguridad",
  campana: "Campaña",
};

const categoriaClass: Record<CategoriaValenzuela, string> = {
  estado: "pill-malo",
  probidad: "pill-malo",
  comunicacion: "pill-feo",
  fiscal: "pill-feo",
  seguridad: "pill-malo",
  campana: "pill-neutral",
};

const fecha = (iso: string) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString("es-CL", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

function StatCard({ label, value, tone = "neutral" }: { label: string; value: string; tone?: "neutral" | "malo" | "feo" }) {
  const toneClass = tone === "malo" ? "text-[--color-malo]" : tone === "feo" ? "text-[--color-feo]" : "text-[--color-fg]";
  return (
    <div className="card p-5">
      <p className="label text-[10px]">{label}</p>
      <p className={`mt-2 num text-3xl sm:text-4xl font-black tracking-tight ${toneClass}`}>{value}</p>
    </div>
  );
}

function TextBlock({ label, text, emphasis = false }: { label: string; text: string; emphasis?: boolean }) {
  return (
    <div className={emphasis ? "bg-[--color-surface-2] border border-[--color-border] rounded-md p-4" : ""}>
      <p className="label text-[10px]">{label}</p>
      <p className="mt-2 text-sm text-[--color-fg-2] leading-relaxed">{text}</p>
    </div>
  );
}

export default function Valenzuela({ loaderData }: { loaderData: Awaited<ReturnType<typeof loader>> }) {
  const { casos } = loaderData;

  return (
    <div>
      <section className="relative overflow-hidden border-b border-[--color-fg] impact-panel">
        <div className="absolute inset-0 grid-bg opacity-25" aria-hidden />
        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-8 py-14 sm:py-20">
          <p className="label text-[--color-malo]">Archivo Valenzuela</p>
          <h1 className="mt-3 headline-display text-[clamp(3rem,9vw,8rem)] max-w-[13ch]">
            Las columnas que se le devolvieron.
          </h1>
          <p className="mt-6 max-w-3xl text-lg sm:text-xl text-[--color-fg-2] leading-relaxed">
            Cristián Valenzuela escribió contra operadores, parásitos, botines estatales,
            incompetencia, mentiras fiscales y uso político de La Moneda. Esta sección
            cruza esas columnas con su rol en el Segundo Piso y con las primeras decisiones
            del gobierno de Kast.
          </p>
          <PageShare
            title="Las columnas que se le devolvieron a Cristián Valenzuela — Chile Cumple"
            text="Archivo de columnas de Valenzuela contrastadas con el gobierno de Kast."
            path="/valenzuela"
          />

          <div className="mt-10 grid sm:grid-cols-4 gap-3 max-w-5xl">
            <StatCard label="Columnas cruzadas" value={String(VALENZUELA_STATS.total)} />
            <StatCard label="Casos críticos" value={String(VALENZUELA_STATS.criticos)} tone="malo" />
            <StatCard label="Textos fuente" value={String(VALENZUELA_STATS.fuentesColumna)} tone="feo" />
            <StatCard label="Contrato 2026" value={VALENZUELA_STATS.contratoTexto} tone="malo" />
          </div>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 py-14 sm:py-20">
        <div className="grid lg:grid-cols-12 gap-8">
          <header className="lg:col-span-4">
            <p className="label text-[--color-malo]">Método</p>
            <h2 className="mt-2 text-4xl sm:text-6xl font-black tracking-tighter leading-none">
              Lo escrito.
              <br />
              Lo hecho.
            </h2>
            <p className="mt-5 text-sm text-[--color-fg-2] leading-relaxed">
              No se trata de prohibir opinión dura. El punto es aplicar la misma vara:
              si el columnista elevó una acusación moral contra otros, esa acusación
              también debe medir al gobierno que asesora y a su propio uso del Estado.
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
                      {fecha(caso.fechaColumna)}
                    </span>
                    <span className="ml-auto num text-2xl font-black text-[--color-fg-4]">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-4 text-2xl sm:text-3xl font-black tracking-tight leading-tight">
                    {caso.tituloColumna}
                  </h3>

                  <div className="mt-5 grid md:grid-cols-3 gap-4">
                    <TextBlock label="Lo que escribió" text={caso.tesisOriginal} />
                    <TextBlock label="Lo que aparece ahora" text={caso.contraste} />
                    <TextBlock label="Lectura" text={caso.lectura} emphasis />
                  </div>

                  <div className="mt-5 pt-5 border-t border-[--color-border] flex flex-wrap gap-3 text-xs">
                    <a href={caso.fuenteColumna.url} target="_blank" rel="noopener noreferrer" className="font-bold text-[--color-accent] hover:text-[--color-accent-hover]">
                      Columna · {caso.fuenteColumna.medio} ↗
                    </a>
                    <a href={caso.fuenteContraste.url} target="_blank" rel="noopener noreferrer" className="font-bold text-[--color-accent] hover:text-[--color-accent-hover]">
                      Contraste · {caso.fuenteContraste.medio} ↗
                    </a>
                    <ShareButton
                      title={`Valenzuela: ${caso.tituloColumna}`}
                      text={caso.lectura}
                      path="/valenzuela"
                      hash={caso.slug}
                      variant="quiet"
                      className="sm:ml-auto"
                    />
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>

    </div>
  );
}
