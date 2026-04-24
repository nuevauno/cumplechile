import type { Ministro } from "~/data/ministros";
import { iniciales, avatarColor } from "~/data/ministros";

export function Avatar({ nombre, fotoUrl, size = 56 }: { nombre: string; fotoUrl?: string; size?: number }) {
  if (fotoUrl) {
    return (
      <img
        src={fotoUrl}
        alt={nombre}
        width={size}
        height={size}
        className="rounded-full object-cover"
        style={{ width: size, height: size }}
      />
    );
  }
  const bg = avatarColor(nombre);
  return (
    <div
      className="rounded-full flex items-center justify-center font-bold text-white shrink-0"
      style={{
        width: size,
        height: size,
        background: `linear-gradient(135deg, ${bg}cc, ${bg}88)`,
        fontSize: size * 0.36,
        letterSpacing: "-0.02em",
      }}
      aria-hidden="true"
    >
      {iniciales(nombre)}
    </div>
  );
}

export function MinistroCard({ ministro, since }: { ministro: Ministro; since?: string }) {
  return (
    <div className="card p-5 sm:p-6 flex items-center gap-4">
      <Avatar nombre={ministro.nombre} fotoUrl={ministro.fotoUrl} size={64} />
      <div className="min-w-0 flex-1">
        <p className="label">Titular del ministerio</p>
        <p className="mt-1 text-lg font-bold tracking-tight leading-tight truncate">
          {ministro.nombre}
        </p>
        <div className="mt-1.5 flex flex-wrap items-center gap-2 text-xs">
          <span className="text-[--color-fg-2]">{ministro.cargo}</span>
          {ministro.partido && (
            <>
              <span className="text-[--color-fg-4]">·</span>
              <span className="pill pill-neutral">{ministro.partido}</span>
            </>
          )}
        </div>
        {since && (
          <p className="mt-2 text-xs text-[--color-fg-3] num">
            En el cargo desde {since}
          </p>
        )}
      </div>
    </div>
  );
}

export function MinistroInline({ ministro }: { ministro: Ministro }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <Avatar nombre={ministro.nombre} fotoUrl={ministro.fotoUrl} size={32} />
      <span>
        <span className="block text-sm font-semibold leading-tight">{ministro.nombre}</span>
        <span className="block text-[10px] text-[--color-fg-3] uppercase tracking-wider leading-tight">
          {ministro.partido || "Titular"}
        </span>
      </span>
    </span>
  );
}
