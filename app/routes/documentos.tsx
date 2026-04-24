import { Link } from "react-router";
import type { Route } from "./+types/documentos";
import { documentos as docs, formatFechaLarga } from "~/lib/store";

export function meta() {
  return [
    { title: "Documentos — Chile Cumple" },
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
    <div className="max-w-5xl mx-auto px-5 sm:px-8 pt-12 pb-24">
      <header className="max-w-3xl">
        <p className="label">Biblioteca</p>
        <h1 className="mt-3 text-5xl sm:text-7xl font-black tracking-tighter leading-[0.95] gradient-text">
          Documentos
        </h1>
        <p className="mt-6 text-lg text-[--color-fg-2] leading-relaxed">
          Oficios, circulares, decretos, leyes e informes del gobierno. Cada uno esta resumido en lenguaje legible y vinculado a las decisiones que motivo.
        </p>
      </header>

      <ul className="mt-12 grid gap-4 md:grid-cols-2">
        {documentos.map((doc) => (
          <li key={doc.slug}>
            <Link to={`/documentos/${doc.slug}`} className="block group focus-ring rounded-xl h-full">
              <article className="card-interactive p-6 sm:p-7 h-full flex flex-col">
                <div className="flex items-center gap-2 text-xs">
                  <span className="pill pill-accent">{doc.tipo}</span>
                  <span className="text-[--color-fg-3] num">{formatFechaLarga(doc.fecha)}</span>
                </div>
                <h2 className="mt-4 text-xl sm:text-2xl font-bold tracking-tight leading-tight group-hover:text-[--color-accent] transition-colors">
                  {doc.titulo}
                </h2>
                <p className="mt-3 text-sm text-[--color-fg-2] line-clamp-4 leading-relaxed flex-1">{doc.resumen}</p>
                <div className="mt-5 text-sm font-medium text-[--color-accent] inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                  Leer documento
                  <span aria-hidden>→</span>
                </div>
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
