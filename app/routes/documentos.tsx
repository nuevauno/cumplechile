import { Link } from "react-router";
import type { Route } from "./+types/documentos";
import { documentos as docs, formatFechaLarga } from "~/lib/store";
import { createMeta } from "~/lib/meta";
import { PageShare, ShareButton } from "~/components/ShareButton";

export function meta() {
  return createMeta({
    title: "Documentos — Chile Cumple",
    description: "Oficios, circulares, decretos e informes del gobierno de José Antonio Kast.",
    path: "/documentos",
  });
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
        <PageShare title="Documentos — Chile Cumple" path="/documentos" />
      </header>

      <ul className="mt-12 grid gap-4 md:grid-cols-2">
        {documentos.map((doc) => (
          <li key={doc.slug} id={doc.slug} className="scroll-mt-24">
              <article className="card-interactive p-6 sm:p-7 h-full flex flex-col">
                <div className="flex items-center gap-2 text-xs">
                  <span className="pill pill-accent">{doc.tipo}</span>
                  <span className="text-[--color-fg-3] num">{formatFechaLarga(doc.fecha)}</span>
                </div>
                <Link to={`/documentos/${doc.slug}`} className="group focus-ring rounded-md block">
                  <h2 className="mt-4 text-xl sm:text-2xl font-bold tracking-tight leading-tight group-hover:text-[--color-accent] transition-colors">
                    {doc.titulo}
                  </h2>
                </Link>
                <p className="mt-3 text-sm text-[--color-fg-2] line-clamp-4 leading-relaxed flex-1">{doc.resumen}</p>
                <Link to={`/documentos/${doc.slug}`} className="mt-5 text-sm font-medium text-[--color-accent] inline-flex items-center gap-1.5 hover:gap-2.5 transition-all focus-ring rounded-md">
                  Leer documento
                  <span aria-hidden>→</span>
                </Link>
                <div className="mt-4 flex justify-end">
                  <ShareButton
                    title={doc.titulo}
                    text={doc.resumen}
                    path={`/documentos/${doc.slug}`}
                    variant="quiet"
                  />
                </div>
              </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
