import { Link } from "react-router";
import { RETRACTACIONES, RETRACTACIONES_BY_EMISOR, retractacionesOrdenadas } from "~/data/retractaciones";
import { RetractacionCard } from "~/components/RetractacionCard";

export function meta() {
  return [
    { title: "Retractaciones — Chile Cumple" },
    {
      name: "description",
      content:
        "Catalogo de declaraciones rectificadas, contradichas, borradas o desmentidas por datos en el gobierno de Jose Antonio Kast.",
    },
  ];
}

export async function loader() {
  const ordenadas = retractacionesOrdenadas();
  const ranking = RETRACTACIONES_BY_EMISOR();
  return { ordenadas, ranking, total: RETRACTACIONES.length };
}

export default function Retractaciones({ loaderData }: { loaderData: Awaited<ReturnType<typeof loader>> }) {
  const { ordenadas, ranking, total } = loaderData;

  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-12 pb-24">
      <header className="max-w-3xl">
        <p className="label text-[--color-malo]">Lo que tuvieron que recoger</p>
        <h1 className="mt-3 text-5xl sm:text-7xl font-black tracking-tighter leading-[0.95] gradient-text">
          Retractaciones
        </h1>
        <p className="mt-6 text-lg text-[--color-fg-2] leading-relaxed">
          Declaraciones publicas que terminaron rectificadas, borradas, contradichas dentro del propio gobierno o desmentidas por datos oficiales. Es el ranking de quien ha tenido que recoger sus dichos en los primeros 45 dias del gobierno de Jose Antonio Kast.
        </p>
      </header>

      <section className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <Stat label="Total" value={total} />
        <Stat label="Borradas" value={ordenadas.filter((r) => r.tipo === "borrado").length} tone="malo" />
        <Stat label="Contradicciones internas" value={ordenadas.filter((r) => r.tipo === "contradiccion_interna").length} tone="malo" />
        <Stat label="Desmentidas por datos" value={ordenadas.filter((r) => r.tipo === "desmentido_por_datos").length} tone="malo" />
      </section>

      <section className="mt-12">
        <p className="label">Ranking por emisor</p>
        <h2 className="mt-2 text-2xl sm:text-3xl font-black tracking-tighter">Quien se ha tenido que retractar mas</h2>
        <ul className="mt-6 grid sm:grid-cols-2 gap-3">
          {ranking.map((row, i) => (
            <li key={row.emisor} className="card p-5 flex items-center gap-4">
              <span className="num text-3xl font-black text-[--color-fg-3] w-10">{(i + 1).toString().padStart(2, "0")}</span>
              <div className="flex-1 min-w-0">
                <p className="text-base font-bold tracking-tight truncate">{row.emisor}</p>
                <p className="text-xs text-[--color-fg-3] mt-1">
                  {row.total} {row.total === 1 ? "registro" : "registros"} · severidad max {row.severidadMax}/4
                </p>
              </div>
              <div className="flex items-center gap-1">
                {Array.from({ length: row.total }).map((_, j) => (
                  <span key={j} className="dot bg-[--color-malo]" style={{ width: 8, height: 8 }} />
                ))}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <p className="label">Listado completo · cronologico</p>
        <h2 className="mt-2 text-2xl sm:text-3xl font-black tracking-tighter">Todas las retractaciones</h2>
        <div className="mt-6 grid lg:grid-cols-2 gap-4">
          {ordenadas.map((r) => (
            <RetractacionCard key={r.slug} r={r} />
          ))}
        </div>
      </section>

      <div className="mt-16 card p-7 sm:p-9" style={{ background: "linear-gradient(135deg, var(--color-accent-soft), var(--color-surface))" }}>
        <p className="label">Tienes una retractacion documentada?</p>
        <p className="mt-3 text-base sm:text-lg text-[--color-fg] leading-relaxed">
          Si registramos una declaracion publica que despues fue rectificada, contradicha o borrada, escribenos con la cita textual y el link a la fuente. Lo agregamos.
        </p>
        <a href="mailto:hola@chilecumple.com" className="mt-5 inline-flex btn btn-primary">
          hola@chilecumple.com
        </a>
      </div>
    </div>
  );
}

function Stat({ label, value, tone }: { label: string; value: number; tone?: "malo" | "feo" | "info" | "bueno" }) {
  const color =
    tone === "malo" ? "text-[--color-malo]"
    : tone === "feo" ? "text-[--color-feo]"
    : tone === "info" ? "text-[--color-info]"
    : tone === "bueno" ? "text-[--color-bueno]"
    : "text-[--color-fg]";
  return (
    <div className="card p-5">
      <div className="label text-[10px]">{label}</div>
      <div className={`mt-2 text-3xl sm:text-4xl font-black num leading-none ${color}`}>{value}</div>
    </div>
  );
}
