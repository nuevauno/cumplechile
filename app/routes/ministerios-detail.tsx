import { Link } from "react-router";
import type { Route } from "./+types/ministerios-detail";
import {
  ministerioBySlug,
  serviciosByMinisterio,
  programasByMinisterio,
  decisionesByMinisterio,
  statsByMinisterio,
  formatMilesCLP,
  documentos as allDocumentos,
} from "~/lib/store";
import { Stat } from "~/components/Stat";
import { RecomendacionBadge } from "~/components/Badge";
import { DecisionCard } from "~/components/DecisionCard";

export function meta({ data }: Route.MetaArgs) {
  if (!data) return [{ title: "Ministerio · Cumple Chile" }];
  return [
    { title: `${data.ministerio.nombre} — Cumple Chile` },
    { name: "description", content: `Decisiones, programas y recortes en el ${data.ministerio.nombre}.` },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  const ministerio = ministerioBySlug(params.slug!);
  if (!ministerio) {
    throw new Response("Ministerio no encontrado", { status: 404 });
  }
  const stats = statsByMinisterio(ministerio.slug);
  const servicios = serviciosByMinisterio(ministerio.slug);
  const programas = programasByMinisterio(ministerio.slug);
  const decisiones = decisionesByMinisterio(ministerio.slug);

  const documentoSlugs = new Set(decisiones.flatMap((d) => d.documentoSlugs));
  const documentos = allDocumentos.filter((d) => documentoSlugs.has(d.slug));

  return { ministerio, stats, servicios, programas, decisiones, documentos };
}

export default function MinisterioDetail({ loaderData }: Route.ComponentProps) {
  const { ministerio, stats, servicios, programas, decisiones, documentos } = loaderData;

  if (servicios.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-6 lg:px-10 py-20">
        <p className="text-xs tracking-[0.22em] uppercase text-[--color-ink-muted]">Ministerio</p>
        <h1 className="display text-6xl mt-2">{ministerio.nombre}</h1>
        <p className="mt-8 text-lg text-[--color-ink-soft] max-w-2xl">
          Aun no se han catalogado decisiones, programas ni documentos para este ministerio.
        </p>
        <p className="mt-4 text-[--color-ink-soft] max-w-2xl">
          ¿Tienes informacion verificable sobre este ministerio? <a href="mailto:hola@cumplechile.dev" className="font-bold underline underline-offset-4">Escribenos</a>.
        </p>
        <Link to="/ministerios" className="mt-12 inline-block text-sm uppercase tracking-[0.18em] font-bold hover:text-[--color-cl-red]">
          ← Todos los ministerios
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Header del ministerio */}
      <section className="border-b-4 border-[--color-ink]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 lg:py-16">
          <Link to="/ministerios" className="text-xs uppercase tracking-[0.18em] text-[--color-ink-muted] hover:text-[--color-cl-red]">
            ← Ministerios
          </Link>
          <h1 className="display text-[clamp(3rem,8vw,6rem)] leading-[0.95] mt-4">
            {ministerio.nombre}
          </h1>
          <p className="mt-4 text-lg text-[--color-ink-soft] max-w-3xl">
            {stats.programas} programas catalogados en {servicios.length} servicios. {stats.descontinuados} a descontinuar y {stats.ajustes} con rebaja de al menos 15% segun la instruccion de Hacienda del 21 de abril de 2026.
          </p>
        </div>
      </section>

      {/* Stats grid */}
      <section className="border-b-2 border-[--color-ink] bg-[--color-paper-dark]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          <Stat label="Programas" value={stats.programas} sub={`en ${servicios.length} servicios`} />
          <Stat label="A descontinuar" value={stats.descontinuados} sub={formatMilesCLP(stats.montoDescontinuadoMilesCLP)} tone="malo" />
          <Stat label="Con rebaja -15%" value={stats.ajustes} sub={formatMilesCLP(stats.montoAjustadoMilesCLP)} tone="feo" />
          <Stat label="Sin observaciones" value={stats.sinObservaciones} sub="continuan igual" tone="bueno" />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 space-y-20">
        {/* Decisiones recientes */}
        {decisiones.length > 0 && (
          <section>
            <header className="rule-thick pt-2 mb-8">
              <h2 className="display text-3xl">Decisiones recientes</h2>
            </header>
            <div>
              {decisiones.map((d, i) => (
                <DecisionCard key={d.slug} decision={d} featured={i === 0} />
              ))}
            </div>
          </section>
        )}

        {/* Tabla por servicio */}
        <section>
          <header className="rule-thick pt-2 mb-8">
            <h2 className="display text-3xl">Programas por servicio</h2>
            <p className="mt-2 text-sm text-[--color-ink-soft] max-w-3xl">
              Listado completo extraido del Anexo del Oficio Circular N°16 de Hacienda. Monto en pesos 2026 ejecutado durante 2025.
            </p>
          </header>

          <div className="space-y-12">
            {servicios.map((servicio) => {
              const ps = programas.filter((p) => p.servicioSlug === servicio.slug);
              const desc = ps.filter((p) => p.recomendacion === "descontinuar").length;
              const aju = ps.filter((p) => p.recomendacion === "ajuste").length;
              return (
                <div key={servicio.slug}>
                  <div className="flex items-baseline justify-between rule pt-2 mb-4 gap-6">
                    <h3 className="display text-xl md:text-2xl flex-1">
                      {servicio.nombre}
                      {servicio.abrev && servicio.abrev !== servicio.nombre && (
                        <span className="ml-2 text-base text-[--color-ink-muted] font-normal">({servicio.abrev})</span>
                      )}
                    </h3>
                    <span className="text-xs num text-[--color-ink-muted] uppercase tracking-[0.14em] whitespace-nowrap">
                      {ps.length} prog · {desc > 0 && <span className="text-[--color-malo] font-bold">−{desc}</span>}
                      {desc > 0 && aju > 0 && " · "}
                      {aju > 0 && <span className="text-[--color-feo] font-bold">↓{aju}</span>}
                    </span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="text-left text-[10px] tracking-[0.18em] uppercase text-[--color-ink-muted]">
                        <tr className="border-b border-[--color-ink]">
                          <th className="py-2 pr-4 font-bold">Programa</th>
                          <th className="py-2 pr-4 font-bold text-right whitespace-nowrap">Monto 2025</th>
                          <th className="py-2 font-bold whitespace-nowrap">Recomendacion</th>
                        </tr>
                      </thead>
                      <tbody>
                        {ps
                          .slice()
                          .sort((a, b) => {
                            const order = { descontinuar: 0, ajuste: 1, sin_observaciones: 2 };
                            return order[a.recomendacion] - order[b.recomendacion]
                              || b.montoEjecutado2025MilesCLP - a.montoEjecutado2025MilesCLP;
                          })
                          .map((p) => (
                            <tr key={p.slug} className="border-b border-[--color-ink]/20 align-top">
                              <td className="py-2.5 pr-4 leading-tight">
                                <span className={p.recomendacion === "descontinuar" ? "font-bold" : ""}>
                                  {p.nombre}
                                </span>
                              </td>
                              <td className="py-2.5 pr-4 text-right num whitespace-nowrap font-medium">
                                {p.montoEjecutado2025MilesCLP === 0 ? "—" : formatMilesCLP(p.montoEjecutado2025MilesCLP)}
                              </td>
                              <td className="py-2.5 whitespace-nowrap">
                                <RecomendacionBadge recomendacion={p.recomendacion} />
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Documentos fuente */}
        {documentos.length > 0 && (
          <section>
            <header className="rule-thick pt-2 mb-6">
              <h2 className="display text-3xl">Documentos fuente</h2>
            </header>
            <ul className="space-y-4">
              {documentos.map((doc) => (
                <li key={doc.slug} className="border border-[--color-ink] bg-[--color-paper-dark] p-6">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[--color-ink-muted] num">
                    {doc.tipo} · {doc.fecha} · {doc.emisor}
                  </p>
                  <Link to={`/documentos/${doc.slug}`} className="display text-xl mt-2 block hover:text-[--color-cl-red]">
                    {doc.titulo}
                  </Link>
                  <p className="mt-3 text-[--color-ink-soft] leading-relaxed line-clamp-4">{doc.resumen}</p>
                  <Link to={`/documentos/${doc.slug}`} className="mt-3 inline-block text-xs uppercase tracking-[0.18em] font-bold hover:text-[--color-cl-red]">
                    Leer documento completo →
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}
