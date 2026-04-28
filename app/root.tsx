import { useEffect } from "react";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  Link,
  NavLink,
  useLocation,
} from "react-router";
import type { Route } from "./+types/root";
import { Logo } from "~/components/Logo";
import { MobileNav } from "~/components/MobileNav";
import { createMeta, DEFAULT_DESCRIPTION, DEFAULT_OG_IMAGE } from "~/lib/meta";
import { ShareButton } from "~/components/ShareButton";

import "./styles/app.css";

export function meta() {
  return [
    ...createMeta({
      title: "Chile Cumple — Observatorio del gobierno de José Antonio Kast",
      description: `${DEFAULT_DESCRIPTION} Lo bueno, lo malo y lo feo.`,
      path: "/",
    }),
    { name: "theme-color", content: "#fafaf9" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
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

const SITE_JSONLD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://chilecumple.com/#website",
      url: "https://chilecumple.com/",
      name: "Chile Cumple",
      alternateName: "chilecumple.com",
      description:
        "Observatorio cívico independiente del gobierno de José Antonio Kast (2026-2030). Promesas, decisiones, recortes, mentiras y retractaciones con fuentes verificadas.",
      inLanguage: "es-CL",
      publisher: { "@id": "https://chilecumple.com/#publisher" },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://chilecumple.com/?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://chilecumple.com/#publisher",
      name: "Chile Cumple",
      url: "https://chilecumple.com/",
      logo: {
        "@type": "ImageObject",
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
      },
      foundingLocation: { "@type": "Place", name: "Santiago, Chile" },
      areaServed: { "@type": "Country", name: "Chile" },
      email: "hola@chilecumple.com",
      sameAs: [],
    },
  ],
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#fafaf9" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="alternate" type="application/rss+xml" title="Chile Cumple" href="https://chilecumple.com/sitemap.xml" />
        <Meta />
        <Links />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SITE_JSONLD) }}
        />
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
  { to: "/", label: "Inicio", end: true, color: "#fe4a23", soft: "rgba(254, 74, 35, 0.12)" },
  { to: "/cronologia", label: "Cronología", color: "#2563eb", soft: "rgba(37, 99, 235, 0.11)" },
  { to: "/mentiras", label: "Mentiras", color: "#b91c1c", soft: "rgba(185, 28, 28, 0.10)" },
  { to: "/doble-estandar", label: "Doble estándar", color: "#be185d", soft: "rgba(190, 24, 93, 0.10)" },
  { to: "/valenzuela", label: "Valenzuela", color: "#a16207", soft: "rgba(161, 98, 7, 0.12)" },
  { to: "/retractaciones", label: "Retractaciones", color: "#dc2626", soft: "rgba(220, 38, 38, 0.10)" },
  { to: "/seremis", label: "Seremis", color: "#0891b2", soft: "rgba(8, 145, 178, 0.11)" },
  { to: "/promesas", label: "Promesas", color: "#047857", soft: "rgba(4, 120, 87, 0.12)" },
  { to: "/decisiones", label: "Decisiones", color: "#0f766e", soft: "rgba(15, 118, 110, 0.11)" },
  { to: "/ministerios", label: "Ministerios", color: "#4f46e5", soft: "rgba(79, 70, 229, 0.10)" },
];

export default function App() {
  const location = useLocation();
  const activeSection =
    navLinks
      .filter((l) => l.to !== "/")
      .find((l) => location.pathname.startsWith(l.to)) ?? navLinks[0];
  const sectionStyle = {
    "--color-accent": activeSection.color,
    "--color-accent-hover": activeSection.color,
    "--color-accent-soft": activeSection.soft,
    "--section-color": activeSection.color,
    "--section-soft": activeSection.soft,
  } as React.CSSProperties;

  useEffect(() => {
    const id = "nuevauno-branding-footer-script";
    if (document.getElementById(id)) return;
    const s = document.createElement("script");
    s.id = id;
    s.src = "https://branding.nuevauno.com/footer/nuevauno.js?powered=NUEVAUNO";
    s.defer = true;
    document.body.appendChild(s);
  }, []);

  return (
    <div className="min-h-screen flex flex-col section-theme" style={sectionStyle}>
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
                style={({ isActive }) => ({
                  "--nav-color": l.color,
                  "--nav-soft": l.soft,
                  background: isActive ? l.soft : undefined,
                  color: isActive ? l.color : undefined,
                }) as React.CSSProperties}
                className={({ isActive }) =>
                  `section-nav-link px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? ""
                      : "text-[--color-fg-2] hover:text-[--color-fg] hover:bg-[--color-surface]"
                  }`
                }
              >
                <span className="section-nav-dot" aria-hidden />
                <span>{l.label}</span>
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-1">
            <Link
              to="/sobre"
              className="hidden md:inline-flex btn btn-ghost text-sm"
            >
              Metodología
            </Link>
            <MobileNav links={navLinks} />
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="mt-32 border-t border-[--color-border]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-4 text-sm text-[--color-fg-2] max-w-sm leading-relaxed">
              Periodismo de datos sobre el gobierno de José Antonio Kast (2026-2030).
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs text-[--color-fg-3]">
              <span className="dot bg-[--color-bueno]" />
              <span>Edición al día · Santiago, Chile</span>
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
                  Metodología
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-4">
            <p className="label">Aporta información</p>
            <p className="mt-4 text-sm text-[--color-fg-2] leading-relaxed">
              ¿Tienes un documento, oficio o filtración que debería estar acá? Escríbenos.
            </p>
            <a href="mailto:hola@chilecumple.com" className="mt-3 inline-flex btn btn-secondary text-sm">
              hola@chilecumple.com
            </a>
            <div className="mt-3">
              <ShareButton title="Chile Cumple" path="/" variant="quiet" label="Compartir la web" />
            </div>
          </div>
        </div>
        <div className="border-t border-[--color-border]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5 flex flex-wrap items-center justify-between gap-3 text-xs text-[--color-fg-3] num">
            <span>© {new Date().getFullYear()} Chile Cumple · Contenido bajo CC BY-SA 4.0</span>
            <Link to="/sobre" className="hover:text-[--color-fg] transition-colors">
              Metodología y fuentes
            </Link>
          </div>
        </div>
        <div
          id="footer-container"
          className="border-t border-[--color-border]"
          suppressHydrationWarning
        />
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
