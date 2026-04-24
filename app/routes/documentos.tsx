import { Link } from "react-router";
import type { Route } from "./+types/documentos";
import { documentos as docs, formatFechaLarga } from "~/lib/store";

export function meta() {
  return [
    { title: "Documentos — Cumple Chile" },
    { name: "description", content: "Oficios, circulares, decretos e informes del gobierno de Jose Antonio Kast." },
  ];
}

export async function loader() {
  return {
    documentos: [...docs].sort((a, b) => b.fecha.localeCompare(a.fecha)),
  };
}

export default function Documentos({ loaderData }: Route.ComponentProps) {
  const { documentos } = loaderData;
  return (
    <div className="max-w-4xl mx-auto px-6 lg:px-10 py-12 lg:py-16">
      <header className="rule-thick pt-2">
        <p className="text-xs tracking-[0.22em] uppercase text-[--color-ink-muted]">Biblioteca</p>
        <h1 className="display text-[clamp(3rem,7vw,5.5rem)] leading-[0.95] mt-2">Documentos</h1>
        <p className="mt-4 text-lg text-[--color-ink-soft] max-w-2xl">
          Oficios, circulares, decretos, leyes e informes del gobierno. Cada documento esta resumido en lenguaje legible y vinculado a las decisiones que motivo.
        </p>
      </header>
      <ul className="mt-10 divide-y divide-[--color-ink]">
        {documentos.map((doc) => (
          <li key={doc.slug}>
            <Link to={`/documentos/${doc.slug}`} className="block py-6 group">
              <p className="text-[10px] uppercase tracking-[0.22em] text-[--color-ink-muted] num">
                {doc.tipo} · {formatFechaLarga(doc.fecha)} · {doc.emisor}
              </p>
              <h2 className="display text-2xl md:text-3xl mt-2 leading-tight group-hover:text-[--color-cl-red] transition-colors">
                {doc.titulo}
              </h2>
              <p className="mt-3 text-[--color-ink-soft] line-clamp-3">{doc.resumen}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
