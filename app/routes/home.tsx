import { Link } from "react-router";
import type { Route } from "./+types/home";
import {
  decisionesOrdenadas,
  ministerios,
  programas,
  servicios,
  statsByMinisterio,
  formatMilesCLP,
  ministerioBySlug,
} from "~/lib/store";
import { DecisionCard } from "~/components/DecisionCard";
import { Stat } from "~/components/Stat";
import { RecomendacionBadge } from "~/components/Badge";

export function meta() {
  return [
    { title: "Cumple Chile — Observatorio del gobierno de Jose Antonio Kast" },
    { name: "description", content: "Lo bueno, lo malo y lo feo del gobierno de Jose Antonio Kast con fuentes auditables. Promesas, decisiones, recortes y reformas en tiempo real." },
  ];
}

export async function loader({}: Route.LoaderArgs) {
  const decisiones = decisionesOrdenadas();
  const ministeriosConData = ministerios
    .map((m) => ({ ministerio: m, stats: statsByMinisterio(m.slug) }))
    .filter((x) => x.stats.programas > 0)
    .sort((a, b) => b.stats.descontinuados - a.stats.descontinuados);

  const totalProgramas = programas.length;
  const totalDescontinuados = programas.filter((p) => p.recomendacion === "descontinuar").length;
  const totalAjustes = programas.filter((p) => p.recomendacion === "ajuste").length;

  return { decisiones, ministeriosConData, totalProgramas, totalDescontinuados, totalAjustes };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { decisiones, ministeriosConData, totalProgramas, totalDescontinuados, totalAjustes } = loaderData;
  const [destacada, ...resto] = decisiones;

  return (
    <div>
      {/* Tira de stats arriba — datos duros, no marketing */}
      <section className="border-b-4 border-[--color-ink] bg-[--color-paper-dark]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          <Stat
            label="Programas a descontinuar"
            value={totalDescontinuados}
            sub={`de ${totalProgramas} catalogados`}
            tone="malo"
          />
          <Stat
            label="Programas con rebaja -15%"
            value={totalAjustes}
            sub="ajuste presupuestario instruido"
            tone="feo"
          />
          <Stat
            label="Recorte total proyectado"
            value="US$6 mil mill."
            sub="2027-2031, segun Hacienda"
            tone="malo"
          />
          <Stat
            label="Ministerios afectados"
            value={ministeriosConData.length}
            sub="con anexo publicado"
          />
        </div>
      </section>

      {/* Hero editorial — articulo destacado tipo NYT */}
      {destacada && (
        <section className="border-b-2 border-[--color-ink]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 lg:py-16">
            <DecisionCard decision={destacada} featured />
          </div>
        </section>
      )}

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid lg:grid-cols-3 gap-12">
        {/* Columna principal: feed de decisiones */}
        <div className="lg:col-span-2">
          <header className="flex items-baseline justify-between rule-thick pt-2 mb-6">
            <h2 className="display text-3xl">Ultimas decisiones</h2>
            <Link to="/decisiones" className="text-xs uppercase tracking-[0.18em] font-bold hover:text-[--color-cl-red]">
              Ver todas →
            </Link>
          </header>
          {resto.length === 0 ? (
            <p className="text-[--color-ink-muted]">Solo la decision destacada por ahora.</p>
          ) : (
            <div>
              {resto.map((d) => (
                <DecisionCard key={d.slug} decision={d} />
              ))}
            </div>
          )}
        </div>

        {/* Columna lateral: ministerios con mas recortes */}
        <aside>
          <header className="rule-thick pt-2 mb-6">
            <h2 className="display text-3xl">Por ministerio</h2>
            <p className="mt-2 text-sm text-[--color-ink-soft]">
              Programas afectados por el ajuste fiscal 2027-2031.
            </p>
          </header>
          <ul className="divide-y divide-[--color-ink]">
            {ministeriosConData.map(({ ministerio, stats }) => (
              <li key={ministerio.slug}>
                <Link
                  to={`/ministerios/${ministerio.slug}`}
                  className="flex items-center justify-between py-4 group"
                >
                  <div>
                    <p className="font-bold text-base group-hover:text-[--color-cl-red] transition-colors">
                      {ministerio.nombre}
                    </p>
                    <p className="mt-1 text-xs num text-[--color-ink-muted]">
                      {stats.programas} programas · {formatMilesCLP(stats.montoDescontinuadoMilesCLP + stats.montoAjustadoMilesCLP)} en juego
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-xs num font-bold">
                    {stats.descontinuados > 0 && (
                      <span className="px-2 py-1 bg-[--color-malo-bg] text-[--color-malo] border border-[--color-malo]">
                        −{stats.descontinuados}
                      </span>
                    )}
                    {stats.ajustes > 0 && (
                      <span className="px-2 py-1 bg-[--color-feo-bg] text-[--color-feo] border border-[--color-feo]">
                        ↓{stats.ajustes}
                      </span>
                    )}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/ministerios"
            className="block mt-6 text-xs uppercase tracking-[0.18em] font-bold hover:text-[--color-cl-red]"
          >
            Ver todos los ministerios →
          </Link>
        </aside>
      </div>

      {/* Banda inferior — programas sociales en peligro, lista cruda */}
      <section className="border-t-4 border-[--color-ink] bg-[--color-paper-dark]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
          <header className="flex items-baseline justify-between mb-8">
            <div>
              <p className="text-xs tracking-[0.22em] uppercase text-[--color-ink-muted]">A descontinuar</p>
              <h2 className="display text-4xl md:text-5xl mt-1">Programas que dejan de existir</h2>
            </div>
            <Link
              to="/ministerios/desarrollo-social"
              className="hidden md:inline text-xs uppercase tracking-[0.18em] font-bold hover:text-[--color-cl-red]"
            >
              Ver detalle MDS →
            </Link>
          </header>
          <table className="w-full text-sm border-t border-[--color-ink]">
            <thead className="text-left text-[10px] tracking-[0.18em] uppercase text-[--color-ink-muted]">
              <tr className="border-b border-[--color-ink]">
                <th className="py-2 pr-4 font-bold">Programa</th>
                <th className="py-2 pr-4 font-bold hidden md:table-cell">Servicio</th>
                <th className="py-2 pr-4 font-bold text-right">Monto 2025</th>
                <th className="py-2 font-bold">Recomendacion</th>
              </tr>
            </thead>
            <tbody>
              {programas
                .filter((p) => p.recomendacion === "descontinuar")
                .sort((a, b) => b.montoEjecutado2025MilesCLP - a.montoEjecutado2025MilesCLP)
                .slice(0, 10)
                .map((p) => {
                  const servicio = servicios.find((s) => s.slug === p.servicioSlug);
                  const ministerio = servicio ? ministerioBySlug(servicio.ministerioSlug) : null;
                  return (
                    <tr key={p.slug} className="border-b border-[--color-ink]/30 align-top">
                      <td className="py-3 pr-4 font-medium leading-tight">{p.nombre}</td>
                      <td className="py-3 pr-4 hidden md:table-cell text-[--color-ink-soft]">
                        <Link to={`/ministerios/${ministerio?.slug ?? ""}`} className="hover:text-[--color-cl-red]">
                          {servicio?.abrev || servicio?.nombre}
                        </Link>
                      </td>
                      <td className="py-3 pr-4 text-right num font-bold whitespace-nowrap">
                        {formatMilesCLP(p.montoEjecutado2025MilesCLP)}
                      </td>
                      <td className="py-3"><RecomendacionBadge recomendacion={p.recomendacion} /></td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <p className="mt-4 text-xs text-[--color-ink-muted] num">
            Top 10 por monto. Hay {programas.filter((p) => p.recomendacion === "descontinuar").length} programas a descontinuar en total.
          </p>
        </div>
      </section>
    </div>
  );
}
