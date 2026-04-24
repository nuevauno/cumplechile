import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  Link,
  NavLink,
} from "react-router";
import type { Route } from "./+types/root";

import "./styles/app.css";

export function meta() {
  return [
    { title: "Cumple Chile — Observatorio del gobierno de Jose Antonio Kast" },
    { name: "description", content: "Promesas, decisiones, recortes y reformas del gobierno de Jose Antonio Kast con fuentes auditables. Lo bueno, lo malo y lo feo." },
    { name: "theme-color", content: "#1a1815" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { property: "og:title", content: "Cumple Chile" },
    { property: "og:description", content: "Observatorio civico del gobierno de Jose Antonio Kast" },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ];
}

export function links(): Route.LinkDescriptors {
  return [
    { rel: "preconnect", href: "https://branding.nuevauno.com", crossOrigin: "anonymous" },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
    { rel: "stylesheet", href: "https://branding.nuevauno.com/css/brand.css" },
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,600;0,6..72,800;1,6..72,400;1,6..72,600&display=swap" },
    { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
  ];
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

const navLinks = [
  { to: "/", label: "Portada", end: true },
  { to: "/decisiones", label: "Decisiones" },
  { to: "/promesas", label: "Promesas" },
  { to: "/ministerios", label: "Ministerios" },
  { to: "/documentos", label: "Documentos" },
  { to: "/sobre", label: "Metodologia" },
];

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b-4 border-[--color-ink]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between py-3 text-xs tracking-[0.18em] uppercase text-[--color-ink-muted] num">
            <span>Edicion en vivo · {new Date().toLocaleDateString("es-CL", { day: "2-digit", month: "long", year: "numeric" })}</span>
            <span className="hidden sm:inline">Santiago, Chile · CC BY-SA 4.0</span>
          </div>
          <Link to="/" className="block py-6 lg:py-8 group">
            <h1 className="display text-[clamp(2.75rem,9vw,7rem)] leading-none tracking-tight">
              CUMPLE<span className="text-[--color-cl-red]">·</span>CHILE
            </h1>
            <p className="mt-2 text-sm sm:text-base font-medium text-[--color-ink-soft] max-w-2xl">
              Observatorio civico del gobierno de Jose Antonio Kast. Promesas, decisiones, recortes y reformas con fuente verificada.
            </p>
          </Link>
          <nav className="border-t border-[--color-ink] -mx-6 lg:-mx-10 px-6 lg:px-10 py-3 flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold uppercase tracking-wider">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) =>
                  `transition-colors ${isActive ? "text-[--color-cl-red] underline underline-offset-4 decoration-2" : "text-[--color-ink] hover:text-[--color-cl-red]"}`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="mt-24 border-t-4 border-[--color-ink] bg-[--color-paper-dark]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 grid gap-10 md:grid-cols-3">
          <div>
            <p className="display text-3xl">CUMPLE<span className="text-[--color-cl-red]">·</span>CHILE</p>
            <p className="mt-3 text-sm text-[--color-ink-soft] max-w-sm">
              Periodismo de datos sobre el gobierno de Jose Antonio Kast (2026-2030). Sin afiliacion politica. Sin financiamiento de campañas, partidos ni gobierno.
            </p>
          </div>
          <div>
            <h3 className="text-xs tracking-[0.18em] uppercase text-[--color-ink-muted]">Navegar</h3>
            <ul className="mt-3 space-y-1.5 text-sm">
              {navLinks.map((l) => (
                <li key={l.to}><Link to={l.to} className="hover:text-[--color-cl-red]">{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs tracking-[0.18em] uppercase text-[--color-ink-muted]">Aportar</h3>
            <p className="mt-3 text-sm text-[--color-ink-soft]">
              ¿Tienes un documento, oficio o informe que deberia estar aqui? Escribenos.
            </p>
            <a href="mailto:hola@cumplechile.dev" className="mt-2 inline-block text-sm font-bold underline underline-offset-4 decoration-2 hover:text-[--color-cl-red]">
              hola@cumplechile.dev
            </a>
          </div>
        </div>
        <div className="border-t border-[--color-ink] py-4">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-wrap items-center justify-between gap-3 text-xs text-[--color-ink-muted] num">
            <span>© {new Date().getFullYear()} Cumple Chile · Contenido bajo CC BY-SA 4.0</span>
            <span>Construido en Cloudflare Workers</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  const message = isRouteErrorResponse(error)
    ? `${error.status} ${error.statusText}`
    : error instanceof Error
    ? error.message
    : "Error desconocido";
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <p className="text-xs tracking-[0.18em] uppercase text-[--color-ink-muted]">Error</p>
      <h1 className="display text-6xl mt-2">Algo se rompio.</h1>
      <p className="mt-6 text-lg">{message}</p>
      <Link to="/" className="mt-8 inline-block text-sm font-bold underline underline-offset-4 decoration-2 hover:text-[--color-cl-red]">
        Volver a la portada
      </Link>
    </div>
  );
}
