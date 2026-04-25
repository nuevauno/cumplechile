/**
 * Inline script para evitar flash. Lee localStorage y aplica el tema antes de hidratar.
 */
export const themeBootstrapScript = `
(function(){try{
  var t = localStorage.getItem('cc-theme') || (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  if (t === 'light') document.documentElement.setAttribute('data-theme','light');
}catch(e){}
})();
`;

export function ThemeToggle() {
  return (
    <button
      type="button"
      aria-label="Cambiar tema"
      className="btn btn-ghost p-2 rounded-md"
      onClick={() => {
        if (typeof document === "undefined") return;
        const html = document.documentElement;
        const isLight = html.getAttribute("data-theme") === "light";
        const next = isLight ? "dark" : "light";
        if (next === "light") html.setAttribute("data-theme", "light");
        else html.removeAttribute("data-theme");
        try {
          localStorage.setItem("cc-theme", next);
        } catch {}
      }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="block dark-icon">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
      </svg>
    </button>
  );
}
