import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link, NavLink, useLocation } from "react-router";

interface NavLinkItem {
  to: string;
  label: string;
  end?: boolean;
  color: string;
  soft: string;
}

interface Props {
  links: NavLinkItem[];
}

/**
 * Botón hamburguesa + drawer slide-in para mobile (<md). El drawer va
 * vía Portal a document.body porque el header padre tiene backdrop-blur,
 * y eso crea un containing block que captura los position:fixed.
 * El drawer se cierra al cambiar de ruta y al presionar Escape.
 */
export function MobileNav({ links }: Props) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        className="md:hidden inline-flex items-center justify-center w-10 h-10 -mr-2 rounded-md text-[--color-fg] focus-ring"
        onClick={() => setOpen((v) => !v)}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" aria-hidden="true">
          {open ? (
            <>
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </>
          ) : (
            <>
              <line x1="3" y1="7" x2="21" y2="7" />
              <line x1="3" y1="13" x2="21" y2="13" />
              <line x1="3" y1="19" x2="13" y2="19" />
            </>
          )}
        </svg>
      </button>

      {mounted && open && createPortal(
        <div className="md:hidden fixed inset-0 z-[60]" style={{ position: "fixed", inset: 0 }}>
          <div
            className="absolute inset-0"
            style={{ background: "rgba(10, 11, 13, 0.5)", backdropFilter: "blur(4px)" }}
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <nav
            className="absolute right-0 inset-y-0 w-[82%] max-w-sm border-l border-[--color-border] shadow-2xl flex flex-col"
            style={{ background: "var(--color-bg)", animation: "drawer-in 220ms cubic-bezier(0.2,0.8,0.2,1)" }}
            aria-label="Navegación principal"
          >
            <div className="flex items-center justify-between px-5 h-16 border-b border-[--color-border] shrink-0">
              <span className="label">Menú</span>
              <button
                type="button"
                aria-label="Cerrar menú"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center w-9 h-9 rounded-md text-[--color-fg-2] hover:text-[--color-fg] hover:bg-[--color-surface-2]"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" aria-hidden="true">
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                </svg>
              </button>
            </div>

            <ul className="flex-1 min-h-0 overflow-y-auto px-3 py-4 space-y-0.5">
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    end={l.end}
                    style={({ isActive }) => ({
                      "--nav-color": l.color,
                      "--nav-soft": l.soft,
                      background: isActive ? l.soft : undefined,
                      color: isActive ? l.color : undefined,
                    }) as React.CSSProperties}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-3 py-3 rounded-lg text-base font-semibold transition-colors ${
                        isActive
                          ? ""
                          : "text-[--color-fg-2] hover:text-[--color-fg] hover:bg-[--color-surface-2]"
                      }`
                    }
                  >
                    <span className="inline-flex items-center gap-2.5 min-w-0">
                      <span
                        className="block size-2 rounded-full shrink-0"
                        style={{ background: l.color }}
                        aria-hidden
                      />
                      <span className="truncate">{l.label}</span>
                    </span>
                    <span aria-hidden className="text-[--color-fg-3]">→</span>
                  </NavLink>
                </li>
              ))}
              <li className="pt-3 mt-3 border-t border-[--color-border]">
                <Link
                  to="/sobre"
                  className="flex items-center justify-between px-3 py-3 rounded-lg text-sm text-[--color-fg-2] hover:bg-[--color-surface-2]"
                >
                  <span>Metodología</span>
                  <span aria-hidden className="text-[--color-fg-3]">→</span>
                </Link>
              </li>
            </ul>

            <div className="border-t border-[--color-border] p-5 shrink-0">
              <p className="label text-[10px]">Aporta información</p>
              <a
                href="mailto:hola@chilecumple.com"
                className="mt-2 block text-sm font-semibold text-[--color-accent] hover:text-[--color-accent-hover] truncate"
              >
                hola@chilecumple.com
              </a>
            </div>
          </nav>
        </div>,
        document.body
      )}
    </>
  );
}
