import { useMemo, useState } from "react";
import { Link } from "react-router";
import { programas, servicios, ministerios, formatMilesCLP, ministerioBySlug, panoramaRecortes } from "~/lib/store";
import { RecomendacionBadge } from "~/components/Badge";
import type { RecomendacionPrograma } from "~/data/types";
import { createMeta } from "~/lib/meta";
import { PageShare, ShareButton } from "~/components/ShareButton";

export function meta() {
  return createMeta({
    title: "Programas — Chile Cumple",
    description:
      "Los programas públicos catalogados en los anexos del Oficio Circular N°16 de Hacienda. Filtrables por ministerio, recomendación y monto.",
    path: "/programas",
  });
}

const RECS: { value: "todas" | RecomendacionPrograma; label: string }[] = [
  { value: "todas",             label: "Todas" },
  { value: "descontinuar",      label: "Se elimina" },
  { value: "ajuste",            label: "Rebaja −15%" },
  { value: "sin_observaciones", label: "Continuan" },
];

export default function ProgramasPage() {
  const [rec, setRec] = useState<"todas" | RecomendacionPrograma>("todas");
  const [minSlug, setMinSlug] = useState<string>("todos");
  const [q, setQ] = useState<string>("");

  const ministeriosConData = ministerios.filter((m) =>
    servicios.some((s) => s.ministerioSlug === m.slug && programas.some((p) => p.servicioSlug === s.slug))
  );

  const filtrados = useMemo(() => {
    const qLower = q.trim().toLowerCase();
    return programas.filter((p) => {
      if (rec !== "todas" && p.recomendacion !== rec) return false;
      if (minSlug !== "todos") {
        const s = servicios.find((x) => x.slug === p.servicioSlug);
        if (!s || s.ministerioSlug !== minSlug) return false;
      }
      if (qLower && !p.nombre.toLowerCase().includes(qLower)) return false;
      return true;
    }).sort((a, b) => b.montoEjecutado2025MilesCLP - a.montoEjecutado2025MilesCLP);
  }, [rec, minSlug, q]);

  return (
    <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-12 pb-24">
      <header className="max-w-3xl">
        <p className="label">Catalogo</p>
        <h1 className="mt-3 text-5xl sm:text-7xl font-black tracking-tighter leading-[0.95] gradient-text">
          Programas
        </h1>
        <p className="mt-6 text-lg text-[--color-fg-2] leading-relaxed">
          {programas.length} programas publicos catalogados en los anexos cargados programa por programa. A nivel nacional, el panorama publicado registra {panoramaRecortes.programasDescontinuar} a descontinuar y {panoramaRecortes.programasAjuste} con rebaja; aca puedes auditar el detalle ya cargado por nombre, estado o ministerio.
        </p>
        <PageShare title="Programas — Chile Cumple" path="/programas" />
      </header>

      <div className="mt-10 space-y-4">
        <input
          type="search"
          placeholder="Buscar programa por nombre…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="w-full max-w-xl px-4 py-3 rounded-lg bg-[--color-surface] border border-[--color-border] focus:border-[--color-accent] focus:outline-none text-base"
        />
        <div className="flex items-center gap-3 flex-wrap">
          <span className="label shrink-0">Estado</span>
          {RECS.map((o) => (
            <button
              key={o.value}
              onClick={() => setRec(o.value)}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                rec === o.value
                  ? "bg-[--color-fg] text-[--color-bg]"
                  : "bg-[--color-surface] text-[--color-fg-2] border border-[--color-border] hover:border-[--color-border-strong]"
              }`}
            >
              {o.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          <span className="label shrink-0">Ministerio</span>
          <button
            onClick={() => setMinSlug("todos")}
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
              minSlug === "todos"
                ? "bg-[--color-fg] text-[--color-bg]"
                : "bg-[--color-surface] text-[--color-fg-2] border border-[--color-border] hover:border-[--color-border-strong]"
            }`}
          >
            Todos
          </button>
          {ministeriosConData.map((m) => (
            <button
              key={m.slug}
              onClick={() => setMinSlug(m.slug)}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                minSlug === m.slug
                  ? "bg-[--color-fg] text-[--color-bg]"
                  : "bg-[--color-surface] text-[--color-fg-2] border border-[--color-border] hover:border-[--color-border-strong]"
              }`}
            >
              {m.abrev || m.nombre}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-6 text-xs text-[--color-fg-3] num">
        Mostrando {filtrados.length} de {programas.length}
      </p>

      <div className="mt-4 card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-[10px] uppercase tracking-[0.14em] text-[--color-fg-3] border-b border-[--color-border]">
                <th className="px-5 sm:px-7 py-3 font-semibold">Programa</th>
                <th className="px-4 py-3 font-semibold whitespace-nowrap hidden md:table-cell">Servicio</th>
                <th className="px-4 py-3 font-semibold whitespace-nowrap hidden sm:table-cell">Ministerio</th>
                <th className="px-4 py-3 font-semibold text-right whitespace-nowrap">Monto 2025</th>
                <th className="px-5 sm:px-7 py-3 font-semibold whitespace-nowrap">Estado</th>
                <th className="px-5 sm:px-7 py-3 font-semibold whitespace-nowrap">Compartir</th>
              </tr>
            </thead>
            <tbody>
              {filtrados.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-5 py-12 text-center text-[--color-fg-3]">
                    Sin resultados con esos filtros.
                  </td>
                </tr>
              )}
              {filtrados.slice(0, 200).map((p) => {
                const servicio = servicios.find((s) => s.slug === p.servicioSlug);
                const ministerio = servicio ? ministerioBySlug(servicio.ministerioSlug) : null;
                return (
                  <tr key={p.slug} id={p.slug} className="border-b border-[--color-border] last:border-0 hover:bg-[--color-surface-2] transition-colors align-top scroll-mt-24">
                    <td className="px-5 sm:px-7 py-3.5 leading-snug">
                      <span className={p.recomendacion === "descontinuar" ? "font-semibold" : ""}>
                        {p.nombre}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 hidden md:table-cell text-[--color-fg-3] text-xs">
                      {servicio?.abrev || servicio?.nombre}
                    </td>
                    <td className="px-4 py-3.5 hidden sm:table-cell">
                      {ministerio && (
                        <Link to={`/ministerios/${ministerio.slug}`} className="text-xs text-[--color-fg-2] hover:text-[--color-accent] uppercase tracking-wider font-medium">
                          {ministerio.abrev}
                        </Link>
                      )}
                    </td>
                    <td className="px-4 py-3.5 text-right num whitespace-nowrap font-medium">
                      {p.montoEjecutado2025MilesCLP === 0 ? "—" : formatMilesCLP(p.montoEjecutado2025MilesCLP)}
                    </td>
                    <td className="px-5 sm:px-7 py-3.5 whitespace-nowrap">
                      <RecomendacionBadge recomendacion={p.recomendacion} />
                    </td>
                    <td className="px-5 sm:px-7 py-3.5 whitespace-nowrap">
                      <ShareButton
                        title={p.nombre}
                        text={`${p.nombre}: ${p.recomendacion === "descontinuar" ? "recomendado para descontinuar" : p.recomendacion === "ajuste" ? "recomendado para rebaja" : "sin observaciones"} en Chile Cumple.`}
                        path="/programas"
                        hash={p.slug}
                        variant="quiet"
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {filtrados.length > 200 && (
          <div className="px-5 py-4 border-t border-[--color-border] text-xs text-[--color-fg-3] num">
            Mostrando primeros 200. Refina con filtros para ver mas.
          </div>
        )}
      </div>
    </div>
  );
}
