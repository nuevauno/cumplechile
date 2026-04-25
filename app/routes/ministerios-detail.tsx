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
  alertasByMinisterio,
} from "~/lib/store";
import { Stat, StatInline } from "~/components/Stat";
import { RecomendacionBadge } from "~/components/Badge";
import { DecisionCard } from "~/components/DecisionCard";
import { StackedBar, DonutChart } from "~/components/BarChart";
import { MinistroCard } from "~/components/MinistroCard";
import { ministroByMinisterio } from "~/data/ministros";
import { formatFechaLarga } from "~/lib/store";
import { createMeta } from "~/lib/meta";
import { ShareButton } from "~/components/ShareButton";

export function meta({ data }: Route.MetaArgs) {
  if (!data) return createMeta({ title: "Ministerio · Chile Cumple", path: "/ministerios" });
  return createMeta({
    title: `${data.ministerio.nombre} — Chile Cumple`,
    description: `Decisiones, programas y recortes en el ${data.ministerio.nombre}.`,
    path: `/ministerios/${data.ministerio.slug}`,
  });
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
  const alertas = alertasByMinisterio(ministerio.slug);

  const documentoSlugs = new Set(decisiones.flatMap((d) => d.documentoSlugs));
  const documentos = allDocumentos.filter((d) => documentoSlugs.has(d.slug));
  const ministro = ministroByMinisterio(ministerio.slug);

  return { ministerio, stats, servicios, programas, decisiones, documentos, ministro, alertas };
}

export default function MinisterioDetail({ loaderData }: Route.ComponentProps) {
  const { ministerio, stats, servicios, programas, decisiones, documentos, ministro, alertas } = loaderData;

  if (servicios.length === 0 && decisiones.length === 0 && alertas.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-16">
        <Link to="/ministerios" className="text-sm text-[--color-fg-3] hover:text-[--color-fg] inline-flex items-center gap-1.5">
          <span aria-hidden>←</span>
          Ministerios
        </Link>
          <p className="mt-8 label">{ministerio.abrev || "Ministerio"}</p>
          <h1 className="mt-3 text-5xl sm:text-7xl font-black tracking-tighter leading-[0.95] gradient-text">
            {ministerio.nombre}
          </h1>
          <ShareButton
            title={`${ministerio.nombre} — Chile Cumple`}
            text={`Decisiones, programas y recortes en ${ministerio.nombre}.`}
            path={`/ministerios/${ministerio.slug}`}
            variant="full"
            label="Compartir ministerio"
            className="mt-6"
          />
        {ministro && (
          <div className="mt-10 max-w-md">
            <MinistroCard ministro={ministro} since={formatFechaLarga(ministro.desde)} sharePath={`/ministerios/${ministerio.slug}`} />
          </div>
        )}
        <div className="mt-10 card p-8 sm:p-10">
          <p className="label">Sin registros aún</p>
          <p className="mt-3 text-[--color-fg-2] leading-relaxed">
            Aún no se han catalogado decisiones, programas ni documentos para este ministerio. A medida que se publiquen oficios, decretos o reformas, aparecerán aquí.
          </p>
          <a href="mailto:hola@chilecumple.com" className="mt-5 inline-flex btn btn-secondary">
            Aportar información
          </a>
        </div>
      </div>
    );
  }

  const donut = [
    { value: stats.descontinuados, color: "var(--color-malo)", label: "Descontinuar" },
    { value: stats.ajustes, color: "var(--color-feo)", label: "Ajuste" },
    { value: stats.sinObservaciones, color: "var(--color-bueno)", label: "Sin obs" },
  ];

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" aria-hidden />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-12 pb-16 sm:pt-16 sm:pb-24">
          <Link to="/ministerios" className="text-sm text-[--color-fg-3] hover:text-[--color-fg] inline-flex items-center gap-1.5">
            <span aria-hidden>←</span>
            Ministerios
          </Link>
          <p className="mt-8 label">{ministerio.abrev || "Ministerio"}</p>
          <h1 className="fade-up mt-3 text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95] gradient-text">
            {ministerio.nombre}
          </h1>
          <p className="fade-up fade-up-1 mt-6 text-lg text-[--color-fg-2] max-w-3xl leading-relaxed">
            {stats.programas > 0 ? (
              <>
                <span className="font-bold text-[--color-fg]">{stats.programas} programas</span> catalogados en {servicios.length} servicios.{" "}
                <span className="text-[--color-malo] font-bold">{stats.descontinuados} a descontinuar</span> y{" "}
                <span className="text-[--color-feo] font-bold">{stats.ajustes} con rebaja −15%</span> según la instrucción de Hacienda del 21 de abril de 2026.
              </>
            ) : (
              <>
                Aún no está cargado el anexo programa por programa, pero hay{" "}
                <span className="font-bold text-[--color-malo]">{alertas.length} alerta{alertas.length === 1 ? "" : "s"} con fuente</span>{" "}
                sobre recomendaciones de recorte asociadas a esta cartera.
              </>
            )}
          </p>
          {ministro && (
            <div className="fade-up fade-up-2 mt-8 max-w-md">
              <MinistroCard ministro={ministro} since={formatFechaLarga(ministro.desde)} sharePath={`/ministerios/${ministerio.slug}`} />
            </div>
          )}
          <ShareButton
            title={`${ministerio.nombre} — Chile Cumple`}
            text={`Decisiones, programas y recortes en ${ministerio.nombre}.`}
            path={`/ministerios/${ministerio.slug}`}
            variant="full"
            label="Compartir ministerio"
            className="mt-8"
          />
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 -mt-8 sm:-mt-12 pb-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <Stat label="Programas" value={stats.programas} sub={`en ${servicios.length} servicios`} />
          <Stat label="A descontinuar" value={stats.descontinuados} sub={formatMilesCLP(stats.montoDescontinuadoMilesCLP)} tone="malo" />
          <Stat label="Rebaja −15%" value={stats.ajustes} sub={formatMilesCLP(stats.montoAjustadoMilesCLP)} tone="feo" />
          <Stat label="Sin observaciones" value={stats.sinObservaciones} sub="continúan igual" tone="bueno" />
        </div>
      </section>

      {alertas.length > 0 && (
        <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-16">
          <div className="mb-6">
            <p className="label text-[--color-malo]">Alertas del recorte</p>
            <h2 className="mt-2 text-3xl font-black tracking-tighter">Lo publicado hasta ahora</h2>
            <p className="mt-2 text-sm text-[--color-fg-2]">
              Alertas con fuente periodística cuando el anexo completo aún no está cargado o cuando hay información adicional relevante.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {alertas.map((alerta, index) => (
              <article key={alerta.titulo} id={`alerta-${index + 1}`} className="card p-6 scroll-mt-24">
                <div className="flex items-center gap-2 flex-wrap">
                  {alerta.programasDescontinuar && <span className="pill pill-malo">−{alerta.programasDescontinuar} descontinuar</span>}
                  {alerta.programasAjuste && <span className="pill pill-feo">↓{alerta.programasAjuste} ajuste</span>}
                  {alerta.montoTexto && <span className="pill pill-neutral">{alerta.montoTexto}</span>}
                </div>
                <h3 className="mt-4 text-xl font-black tracking-tight leading-tight">{alerta.titulo}</h3>
                <p className="mt-3 text-sm text-[--color-fg-2] leading-relaxed">{alerta.resumen}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {alerta.destacados.map((d) => (
                    <li key={d} className="pill pill-neutral text-[10px]">{d}</li>
                  ))}
                </ul>
                {alerta.cautela && (
                  <p className="mt-4 text-xs text-[--color-fg-3] leading-relaxed border-l-2 border-[--color-feo] pl-3">
                    {alerta.cautela}
                  </p>
                )}
                <a href={alerta.fuenteUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex text-xs font-bold text-[--color-accent] hover:text-[--color-accent-hover]">
                  Fuente · {alerta.fuenteMedio} ↗
                </a>
                <div className="mt-4 flex justify-end">
                  <ShareButton
                    title={alerta.titulo}
                    text={alerta.resumen}
                    path={`/ministerios/${ministerio.slug}`}
                    hash={`alerta-${index + 1}`}
                    variant="quiet"
                  />
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* DECISIONES */}
      {decisiones.length > 0 && (
        <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-16">
          <div className="mb-6">
            <h2 className="text-3xl font-black tracking-tighter">Decisiones recientes</h2>
            <p className="mt-2 text-sm text-[--color-fg-2]">Acciones del gobierno asociadas a este ministerio.</p>
          </div>
          <div className="grid gap-4">
            {decisiones.map((d, i) => (
              <DecisionCard key={d.slug} decision={d} featured={i === 0 && decisiones.length === 1} />
            ))}
          </div>
        </section>
      )}

      {/* SERVICIOS BREAKDOWN */}
      {servicios.length > 0 && (
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-16">
        <div className="card p-8 sm:p-10">
          <div className="flex items-baseline justify-between mb-8">
            <div>
              <p className="label">Por servicio</p>
              <h2 className="mt-2 text-3xl font-black tracking-tighter">Distribución del recorte</h2>
            </div>
          </div>
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 flex justify-center">
              <DonutChart
                segments={donut}
                size={220}
                thickness={28}
                center={{ value: stats.descontinuados + stats.ajustes, label: "Afectados" }}
              />
            </div>
            <div className="lg:col-span-8 space-y-4">
              {servicios
                .map((s) => ({
                  servicio: s,
                  programas: programas.filter((p) => p.servicioSlug === s.slug),
                }))
                .sort((a, b) => {
                  const da = a.programas.filter((p) => p.recomendacion === "descontinuar").length;
                  const db = b.programas.filter((p) => p.recomendacion === "descontinuar").length;
                  return db - da || b.programas.length - a.programas.length;
                })
                .map(({ servicio, programas: ps }) => {
                  const desc = ps.filter((p) => p.recomendacion === "descontinuar").length;
                  const aju = ps.filter((p) => p.recomendacion === "ajuste").length;
                  const sin = ps.filter((p) => p.recomendacion === "sin_observaciones").length;
                  return (
                    <div key={servicio.slug}>
                      <div className="flex items-baseline justify-between gap-3 mb-1.5">
                        <span className="text-sm font-medium truncate">
                          {servicio.abrev || servicio.nombre}
                        </span>
                        <span className="text-xs num text-[--color-fg-3] whitespace-nowrap">
                          {ps.length} prog
                        </span>
                      </div>
                      <StackedBar
                        segments={[
                          { value: desc, color: "var(--color-malo)", label: "Descontinuar" },
                          { value: aju, color: "var(--color-feo)", label: "Ajuste" },
                          { value: sin, color: "var(--color-bueno)", label: "Sin obs" },
                        ]}
                        total={ps.length}
                        height={8}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
      )}

      {/* PROGRAMAS POR SERVICIO */}
      {servicios.length > 0 && (
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-16">
        <div className="mb-8">
          <p className="label">Detalle</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-black tracking-tighter">Programas por servicio</h2>
          <p className="mt-3 text-sm text-[--color-fg-2] max-w-3xl">
            Listado completo extraído del Anexo del Oficio Circular N°16 de Hacienda. Monto en pesos 2026 ejecutado durante 2025.
          </p>
        </div>

        <div className="space-y-8">
          {servicios.map((servicio) => {
            const ps = programas.filter((p) => p.servicioSlug === servicio.slug);
            const desc = ps.filter((p) => p.recomendacion === "descontinuar").length;
            const aju = ps.filter((p) => p.recomendacion === "ajuste").length;
            return (
              <div key={servicio.slug} className="card overflow-hidden">
                <header className="px-6 sm:px-8 py-5 border-b border-[--color-border] bg-[--color-surface-2]">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h3 className="text-xl font-black tracking-tight">
                      {servicio.nombre}
                      {servicio.abrev && servicio.abrev !== servicio.nombre && (
                        <span className="ml-2 text-sm text-[--color-fg-3] font-medium">{servicio.abrev}</span>
                      )}
                    </h3>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-[--color-fg-3] num">{ps.length} programas</span>
                      {desc > 0 && (
                        <span className="pill pill-malo">−{desc} descontinuar</span>
                      )}
                      {aju > 0 && (
                        <span className="pill pill-feo">↓{aju} ajuste</span>
                      )}
                    </div>
                  </div>
                </header>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-[10px] uppercase tracking-[0.14em] text-[--color-fg-3] border-b border-[--color-border]">
                        <th className="px-6 sm:px-8 py-3 font-semibold">Programa</th>
                        <th className="px-4 py-3 font-semibold text-right whitespace-nowrap">Monto 2025</th>
                        <th className="px-6 sm:px-8 py-3 font-semibold whitespace-nowrap">Recomendación</th>
                        <th className="px-6 sm:px-8 py-3 font-semibold whitespace-nowrap">Compartir</th>
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
                          <tr key={p.slug} id={p.slug} className="border-b border-[--color-border] last:border-0 hover:bg-[--color-surface-2] transition-colors scroll-mt-24">
                            <td className="px-6 sm:px-8 py-3.5 leading-snug align-top">
                              <span className={p.recomendacion === "descontinuar" ? "font-semibold text-[--color-fg]" : "text-[--color-fg-2]"}>
                                {p.nombre}
                              </span>
                            </td>
                            <td className="px-4 py-3.5 text-right num whitespace-nowrap text-[--color-fg-2] font-medium align-top">
                              {p.montoEjecutado2025MilesCLP === 0 ? "—" : formatMilesCLP(p.montoEjecutado2025MilesCLP)}
                            </td>
                            <td className="px-6 sm:px-8 py-3.5 whitespace-nowrap align-top">
                              <RecomendacionBadge recomendacion={p.recomendacion} />
                            </td>
                            <td className="px-6 sm:px-8 py-3.5 whitespace-nowrap align-top">
                              <ShareButton
                                title={p.nombre}
                                text={`${p.nombre} en ${ministerio.nombre}: ${p.recomendacion === "descontinuar" ? "recomendado para descontinuar" : p.recomendacion === "ajuste" ? "recomendado para rebaja" : "sin observaciones"}.`}
                                path={`/ministerios/${ministerio.slug}`}
                                hash={p.slug}
                                variant="quiet"
                              />
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
      )}

      {/* DOCUMENTOS */}
      {documentos.length > 0 && (
        <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-24">
          <div className="mb-8">
            <p className="label">Fuentes</p>
            <h2 className="mt-2 text-3xl font-black tracking-tighter">Documentos</h2>
          </div>
          <ul className="grid gap-4 md:grid-cols-2">
            {documentos.map((doc) => (
              <li key={doc.slug}>
                <Link to={`/documentos/${doc.slug}`} className="block group focus-ring rounded-xl">
                  <div className="card-interactive p-6 h-full">
                    <p className="label">{doc.tipo} · {doc.fecha}</p>
                    <h3 className="mt-3 text-lg font-bold tracking-tight leading-tight group-hover:text-[--color-accent] transition-colors">
                      {doc.titulo}
                    </h3>
                    <p className="mt-3 text-sm text-[--color-fg-2] line-clamp-3 leading-relaxed">
                      {doc.resumen}
                    </p>
                    <div className="mt-4 text-xs font-medium text-[--color-accent] inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Leer documento
                      <span aria-hidden>→</span>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
