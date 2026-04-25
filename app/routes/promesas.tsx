import { useState } from "react";
import { Link } from "react-router";
import { PROMESAS, PROMESAS_STATS } from "~/data/promesas";
import { PromesaCard, EstadoPromesaBadge } from "~/components/PromesaCard";
import type { EstadoPromesa, Promesa } from "~/data/types";

export function meta() {
  return [
    { title: "Promesas — Chile Cumple" },
    { name: "description", content: "Promesas de campaña de Jose Antonio Kast contrastadas con las decisiones del gobierno." },
  ];
}

const ESTADOS: { value: "todas" | EstadoPromesa; label: string }[] = [
  { value: "todas",          label: "Todas" },
  { value: "incumplida",     label: "Incumplidas" },
  { value: "estancada",      label: "Estancadas" },
  { value: "en_proceso",     label: "En proceso" },
  { value: "cumplida",       label: "Cumplidas" },
  { value: "contradictoria", label: "Contradictorias" },
  { value: "sin_info",       label: "Sin info" },
];

const EJES: { value: "todos" | Promesa["eje"]; label: string }[] = [
  { value: "todos",          label: "Todos" },
  { value: "seguridad",      label: "Seguridad" },
  { value: "inmigracion",    label: "Inmigracion" },
  { value: "social",         label: "Social" },
  { value: "economia",       label: "Economia" },
  { value: "educacion",      label: "Educacion" },
  { value: "salud",          label: "Salud" },
  { value: "vivienda",       label: "Vivienda" },
  { value: "trabajo",        label: "Trabajo" },
  { value: "medioambiente",  label: "Medioambiente" },
  { value: "ddhh",           label: "DDHH" },
  { value: "transparencia",  label: "Transparencia" },
  { value: "institucional",  label: "Institucional" },
];

export default function PromesasPage() {
  const [estado, setEstado] = useState<"todas" | EstadoPromesa>("todas");
  const [eje, setEje] = useState<"todos" | Promesa["eje"]>("todos");

  const stats = PROMESAS_STATS();
  const filtradas = PROMESAS.filter((p) =>
    (estado === "todas" || p.estado === estado) &&
    (eje === "todos" || p.eje === eje)
  );

  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-12 pb-24">
      <header className="max-w-3xl">
        <p className="label">Programa de gobierno</p>
        <h1 className="mt-3 text-5xl sm:text-7xl font-black tracking-tighter leading-[0.95] gradient-text">
          Promesas
        </h1>
        <p className="mt-6 text-lg text-[--color-fg-2] leading-relaxed">
          Lo que prometio el candidato Jose Antonio Kast contrastado con lo que esta pasando en el gobierno. Cada promesa cataloga su estado actual.
        </p>
      </header>

      <div className="mt-8 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-3">
        <KPI label="Total" value={stats.total} />
        <KPI label="Incumplidas" value={stats.incumplidas} tone="malo" />
        <KPI label="Estancadas" value={stats.estancadas} tone="feo" />
        <KPI label="En proceso" value={stats.enProceso} tone="info" />
        <KPI label="Cumplidas" value={stats.cumplidas} tone="bueno" />
        <KPI label="Contradictorias" value={stats.contradictorias} tone="malo" />
        <KPI label="Sin info" value={stats.sinInfo} />
      </div>

      <div className="mt-12 space-y-4">
        <FilterRow label="Estado" options={ESTADOS} value={estado} onChange={setEstado} />
        <FilterRow label="Eje" options={EJES} value={eje} onChange={setEje} />
      </div>

      <p className="mt-6 text-xs text-[--color-fg-3] num">
        Mostrando {filtradas.length} de {PROMESAS.length} promesas
      </p>

      <div className="mt-4 grid sm:grid-cols-2 gap-4">
        {filtradas.map((p) => (
          <PromesaCard key={p.slug} promesa={p} />
        ))}
        {filtradas.length === 0 && (
          <div className="card p-10 text-center sm:col-span-2">
            <p className="text-[--color-fg-2]">No hay promesas con esos filtros.</p>
            <button onClick={() => { setEstado("todas"); setEje("todos"); }} className="mt-4 btn btn-secondary text-sm">
              Limpiar filtros
            </button>
          </div>
        )}
      </div>

      <div className="mt-16 card p-7 sm:p-9" style={{ background: "linear-gradient(135deg, var(--color-accent-soft), var(--color-surface))" }}>
        <p className="label">Falta una promesa?</p>
        <p className="mt-3 text-base sm:text-lg text-[--color-fg] leading-relaxed">
          Cataloga lo que tengamos verificable. Si tienes un compromiso publico documentado del candidato Kast (programa de gobierno, debate, entrevista, redes sociales) que no esta aqui, pasalo por mail con el link a la fuente.
        </p>
        <a href="mailto:hola@chilecumple.com" className="mt-5 inline-flex btn btn-primary">
          hola@chilecumple.com
        </a>
      </div>
    </div>
  );
}

function KPI({ label, value, tone }: { label: string; value: number; tone?: "malo" | "feo" | "info" | "bueno" }) {
  const color =
    tone === "malo" ? "text-[--color-malo]"
    : tone === "feo" ? "text-[--color-feo]"
    : tone === "info" ? "text-[--color-info]"
    : tone === "bueno" ? "text-[--color-bueno]"
    : "text-[--color-fg]";
  return (
    <div className="card p-4">
      <div className="label text-[10px]">{label}</div>
      <div className={`mt-1.5 text-2xl sm:text-3xl font-black num leading-none ${color}`}>{value}</div>
    </div>
  );
}

function FilterRow<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { value: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div className="flex items-center gap-3 flex-wrap">
      <span className="label shrink-0">{label}</span>
      <div className="flex flex-wrap gap-1.5">
        {options.map((o) => (
          <button
            key={o.value}
            onClick={() => onChange(o.value)}
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
              value === o.value
                ? "bg-[--color-fg] text-[--color-bg]"
                : "bg-[--color-surface] text-[--color-fg-2] border border-[--color-border] hover:border-[--color-border-strong] hover:text-[--color-fg]"
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}
