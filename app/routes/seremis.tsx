import { SEREMIS, SEREMIS_STATS, SEREMIS_ORDENADOS } from "~/data/seremis";
import { diasDesdeInvestidura } from "~/lib/tiempo";
import { createMeta } from "~/lib/meta";
import { PageShare, ShareButton } from "~/components/ShareButton";

export function meta() {
  return createMeta({
    title: "Seremis caídos — Chile Cumple",
    description:
      "Lista de seremis del gobierno de José Antonio Kast que renunciaron, cuyo nombramiento fue anulado o cuyo decreto fue retirado.",
    path: "/seremis",
  });
}

export async function loader() {
  return {
    stats: SEREMIS_STATS(),
    seremis: SEREMIS_ORDENADOS(),
    diasGobierno: diasDesdeInvestidura(),
  };
}

const razonLabel: Record<string, string> = {
  renuncia_voluntaria: "Renuncia voluntaria",
  designacion_anulada: "Designación anulada",
  retiro_decreto: "Retiro de decreto",
  irregularidad_financiera: "Irregularidad financiera",
  post_redes_sociales: "Posteo en redes sociales",
  falta_requisitos: "Falta de requisitos",
};

export default function Seremis({ loaderData }: { loaderData: Awaited<ReturnType<typeof loader>> }) {
  const { stats, seremis, diasGobierno } = loaderData;

  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-12 pb-24">
      <header className="max-w-3xl">
        <p className="label text-[--color-malo]">Bochorno regional</p>
        <h1 className="mt-3 text-5xl sm:text-7xl font-black tracking-tighter leading-[0.95] gradient-text">
          Seremis caídos
        </h1>
        <p className="mt-6 text-lg text-[--color-fg-2] leading-relaxed">
          {stats.total} seremis del gobierno de José Antonio Kast renunciaron, no pudieron asumir o
          tuvieron sus decretos retirados en los primeros {diasGobierno} días. Es el peor récord de partida
          de un gobierno desde 1990.
        </p>
        <PageShare title="Seremis caídos — Chile Cumple" path="/seremis" />
      </header>

      <section className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <Stat label="Total" value={stats.total} tone="malo" />
        <Stat label="Renunciaron" value={stats.renunciaron} tone="malo" />
        <Stat label="No asumieron" value={stats.noAsumieron} tone="feo" />
        <Stat label="Cargos vacantes" value={stats.vacantes} tone="feo" sub="al 1-may-2026" />
      </section>

      <section className="mt-12">
        <p className="label">Listado completo</p>
        <h2 className="mt-2 text-2xl sm:text-3xl font-black tracking-tighter">
          {stats.total} bajas, {stats.renunciaron} renuncias, {stats.noAsumieron} designaciones que no llegaron a firmarse
        </h2>

        <ul className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {seremis.map((s) => (
            <li key={s.nombre + s.region} id={`${s.nombre}-${s.region}`.toLowerCase().replace(/[^a-z0-9]+/g, "-")} className="card p-5 scroll-mt-24">
              <div className="flex items-center gap-2 text-xs flex-wrap">
                <span className={`pill ${s.estado === "renuncio" ? "pill-malo" : "pill-feo"}`}>
                  {s.estado === "renuncio" ? "Renunció" : "No asumió"}
                </span>
                <span className="text-[--color-fg-4]">·</span>
                <span className="num text-[10px] uppercase tracking-wider text-[--color-fg-3]">
                  {s.fecha &&
                    new Date(s.fecha + "T12:00:00").toLocaleDateString("es-CL", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                </span>
              </div>
              <p className="mt-3 text-base font-bold leading-tight">{s.nombre}</p>
              <p className="mt-1 text-sm text-[--color-fg-2]">{s.cargo}</p>
              <p className="mt-2 text-[10px] uppercase tracking-wider text-[--color-fg-4]">Región · {s.region}</p>
              {s.razon && (
                <p className="mt-3 text-xs text-[--color-fg-3]">
                  <span className="uppercase tracking-wider text-[10px] text-[--color-fg-4]">Razón: </span>
                  {razonLabel[s.razon] ?? s.razon}
                </p>
              )}
              {s.detalle && <p className="mt-2 text-xs text-[--color-fg-3] italic">{s.detalle}</p>}
              <div className="mt-4 flex justify-end">
                <ShareButton
                  title={`${s.nombre} · ${s.cargo}`}
                  text={s.detalle || `${s.nombre}, ${s.cargo}, ${s.region}.`}
                  path="/seremis"
                  hash={`${s.nombre}-${s.region}`.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
                  variant="quiet"
                />
              </div>
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-16 card p-7 sm:p-9" style={{ background: "linear-gradient(135deg, var(--color-accent-soft), var(--color-surface))" }}>
        <p className="label">Falta una baja?</p>
        <p className="mt-3 text-base sm:text-lg text-[--color-fg] leading-relaxed">
          Si registramos una renuncia, designación caída o decreto retirado de algún seremi del gobierno de
          Kast que no esté acá, escríbenos con la fecha y el medio donde se reportó. Lo agregamos.
        </p>
        <a href="mailto:hola@chilecumple.com" className="mt-5 inline-flex btn btn-primary">
          hola@chilecumple.com
        </a>
      </div>
    </div>
  );
}

function Stat({ label, value, tone, sub }: { label: string; value: number; tone?: "malo" | "feo" | "info" | "bueno"; sub?: string }) {
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
      {sub && <p className="mt-2 text-xs text-[--color-fg-3]">{sub}</p>}
    </div>
  );
}
