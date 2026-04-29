import { useMemo, useState } from "react";

const REPO_ISSUE_URL = "https://github.com/nuevauno/cumplechile/issues/new";

function buildIssueUrl(tema: string, detalle: string, fuente: string, pageUrl: string) {
  const titulo = tema.trim() || "Sugerencia para Chile Cumple";
  const body = [
    "## Sugerencia",
    detalle.trim() || "Escribe aqui el dato, correccion o idea que quieres proponer.",
    "",
    "## Fuente o enlace",
    fuente.trim() || "Sin fuente adjunta.",
    "",
    "## Pagina relacionada",
    pageUrl,
  ].join("\n");

  const params = new URLSearchParams({
    title: titulo,
    body,
  });

  return `${REPO_ISSUE_URL}?${params.toString()}`;
}

export function SugerenciaGithub() {
  const [tema, setTema] = useState("");
  const [detalle, setDetalle] = useState("");
  const [fuente, setFuente] = useState("");

  const issueUrl = useMemo(
    () => buildIssueUrl(tema, detalle, fuente, "https://chilecumple.com/"),
    [tema, detalle, fuente],
  );

  return (
    <form
      className="suggestion-panel grid lg:grid-cols-12 gap-5 sm:gap-6 items-start"
      onSubmit={(event) => {
        event.preventDefault();
        const pageUrl = `${window.location.origin}${window.location.pathname}${window.location.hash}`;
        window.open(buildIssueUrl(tema, detalle, fuente, pageUrl), "_blank", "noopener,noreferrer");
      }}
    >
      <div className="lg:col-span-4">
        <p className="label text-[--color-accent]">Aporte ciudadano</p>
        <h2 className="mt-2 text-3xl sm:text-5xl font-black tracking-tight leading-none">
          ¿Falta algo?
        </h2>
        <p className="mt-4 text-sm sm:text-base text-[--color-fg-2] leading-relaxed">
          Si ves una mentira, dato, fuente, error o promesa que falta, puedes dejarla como ticket público en GitHub para revisarla y sumarla con respaldo.
        </p>
      </div>

      <div className="lg:col-span-8 grid gap-3">
        <label className="grid gap-1.5">
          <span className="text-xs font-bold uppercase tracking-wider text-[--color-fg-3]">Tema</span>
          <input
            className="suggestion-input"
            value={tema}
            onChange={(event) => setTema(event.target.value)}
            placeholder="Ej: recorte PGU, frase de ministro, fuente nueva"
          />
        </label>

        <label className="grid gap-1.5">
          <span className="text-xs font-bold uppercase tracking-wider text-[--color-fg-3]">Qué hay que revisar</span>
          <textarea
            className="suggestion-input min-h-28 resize-y"
            value={detalle}
            onChange={(event) => setDetalle(event.target.value)}
            placeholder="Cuenta en simple qué pasó, quién lo dijo y por qué sirve para la página."
          />
        </label>

        <label className="grid gap-1.5">
          <span className="text-xs font-bold uppercase tracking-wider text-[--color-fg-3]">Fuente o enlace</span>
          <input
            className="suggestion-input"
            value={fuente}
            onChange={(event) => setFuente(event.target.value)}
            placeholder="Pega una noticia, video, documento o post"
          />
        </label>

        <div className="flex flex-wrap gap-3 items-center">
          <button type="submit" className="btn btn-primary justify-center min-w-44">
            Enviar a GitHub
          </button>
          <a
            href={issueUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary justify-center"
          >
            Abrir ticket
          </a>
          <p className="text-xs text-[--color-fg-3] leading-relaxed max-w-md">
            Se abrirá GitHub con el texto precargado. Si te pide entrar, inicia sesión y confirma el envío.
          </p>
        </div>
      </div>
    </form>
  );
}
