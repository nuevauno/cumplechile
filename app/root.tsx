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
import { Logo } from "~/components/Logo";

import "./styles/app.css";

export function meta() {
  return [
    { title: "Chile Cumple — Observatorio del gobierno de Jose Antonio Kast" },
    { name: "description", content: "Promesas, decisiones, recortes y reformas del gobierno de Jose Antonio Kast con fuentes auditables. Lo bueno, lo malo y lo feo." },
    { name: "theme-color", content: "#08090a" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { property: "og:title", content: "Chile Cumple" },
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
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap" },
    { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
  ];
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="dark">
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
  { to: "/", label: "Inicio", end: true },
  { to: "/decisiones", label: "Decisiones" },
  { to: "/promesas", label: "Promesas" },
  { to: "/ministerios", label: "Ministerios" },
  { to: "/documentos", label: "Documentos" },
];

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 backdrop-blur-md bg-[--color-bg]/80 border-b border-[--color-border]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-6">
          <Link to="/" className="focus-ring rounded-md">
            <Logo />
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "text-[--color-fg] bg-[--color-surface-2]"
                      : "text-[--color-fg-2] hover:text-[--color-fg] hover:bg-[--color-surface]"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link
              to="/sobre"
              className="hidden sm:inline-flex btn btn-ghost text-sm"
            >
              Metodologia
            </Link>
            <a
              href="https://github.com/nuevauno/cumplechile"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex btn btn-secondary"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297a12 12 0 0 0-3.79 23.4c.6.111.82-.261.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.5 11.5 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.218.694.825.576A12 12 0 0 0 12 .297z"/></svg>
              Codigo
            </a>
          </div>
        </div>
        <nav className="md:hidden border-t border-[--color-border] overflow-x-auto scroll-fade">
          <div className="flex gap-1 px-5 py-2 min-w-max">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                    isActive
                      ? "text-[--color-fg] bg-[--color-surface-2]"
                      : "text-[--color-fg-2] hover:text-[--color-fg]"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="mt-32 border-t border-[--color-border]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-4 text-sm text-[--color-fg-2] max-w-sm leading-relaxed">
              Periodismo de datos sobre el gobierno de Jose Antonio Kast (2026-2030). Sin afiliacion politica. Sin financiamiento de campañas, partidos ni gobierno.
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs text-[--color-fg-3]">
              <span className="dot bg-[--color-bueno]" />
              <span>Edicion al dia · Santiago, Chile</span>
            </div>
          </div>
          <div className="md:col-span-3">
            <p className="label">Navegar</p>
            <ul className="mt-4 space-y-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-[--color-fg-2] hover:text-[--color-fg] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/sobre" className="text-[--color-fg-2] hover:text-[--color-fg] transition-colors">
                  Metodologia
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-4">
            <p className="label">Aporta informacion</p>
            <p className="mt-4 text-sm text-[--color-fg-2] leading-relaxed">
              Tienes un documento, oficio o filtracion que deberia estar aqui? Escribenos.
            </p>
            <a href="mailto:hola@chilecumple.com" className="mt-3 inline-flex btn btn-secondary text-sm">
              hola@chilecumple.com
            </a>
          </div>
        </div>
        <div className="border-t border-[--color-border]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5 flex flex-wrap items-center justify-between gap-3 text-xs text-[--color-fg-3] num">
            <span>© {new Date().getFullYear()} Chile Cumple · Contenido bajo CC BY-SA 4.0</span>
            <Link to="/sobre" className="hover:text-[--color-fg] transition-colors">
              Metodologia y fuentes
            </Link>
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
  const status = isRouteErrorResponse(error) ? error.status : 500;
  return (
    <div className="max-w-2xl mx-auto px-5 py-32 text-center">
      <p className="label">Error · {status}</p>
      <h1 className="mt-3 text-6xl font-black tracking-tight">Algo se rompio</h1>
      <p className="mt-6 text-lg text-[--color-fg-2]">{message}</p>
      <Link to="/" className="mt-10 inline-flex btn btn-primary">
        Volver al inicio
      </Link>
    </div>
  );
}
