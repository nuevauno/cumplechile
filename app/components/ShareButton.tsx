import { useEffect, useMemo, useRef, useState } from "react";
import { absoluteUrl, SITE_NAME } from "~/lib/meta";

type ShareButtonProps = {
  title: string;
  text?: string;
  path?: string;
  hash?: string;
  label?: string;
  variant?: "compact" | "full" | "quiet";
  className?: string;
};

function ShareIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" className={className}>
      <path
        d="M8.6 10.7 15.4 7m-6.8 6.3 6.8 3.7M18 8.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm12 6.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ShareButton({
  title,
  text,
  path,
  hash,
  label = "Compartir",
  variant = "compact",
  className = "",
}: ShareButtonProps) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [canNativeShare, setCanNativeShare] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  const shareUrl = useMemo(() => {
    const rawPath = path || "/";
    const base = absoluteUrl(rawPath);
    if (!hash) return base;
    const cleanHash = hash.startsWith("#") ? hash : `#${hash}`;
    return `${base.split("#")[0]}${cleanHash}`;
  }, [hash, path]);

  const shareText = text || `${title} · ${SITE_NAME}`;

  useEffect(() => {
    setCanNativeShare(typeof navigator !== "undefined" && typeof navigator.share === "function");
  }, []);

  useEffect(() => {
    if (!open) return;
    const onClick = (event: MouseEvent) => {
      if (!wrapRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
      setOpen(true);
    }
  }

  async function handleShare() {
    if (canNativeShare) {
      try {
        await navigator.share({ title, text: shareText, url: shareUrl });
        return;
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return;
      }
    }
    setOpen((value) => !value);
  }

  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedText = encodeURIComponent(shareText);
  const buttonClass =
    variant === "full"
      ? "share-trigger share-trigger-full"
      : variant === "quiet"
        ? "share-trigger share-trigger-quiet"
        : "share-trigger";

  return (
    <div ref={wrapRef} className={`share-wrap ${className}`}>
      <button
        type="button"
        className={buttonClass}
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          handleShare();
        }}
        aria-expanded={open}
        aria-label={`Compartir: ${title}`}
      >
        <ShareIcon />
        <span>{copied ? "Copiado" : label}</span>
      </button>

      {open && (
        <div className="share-panel" role="menu" aria-label={`Opciones para compartir ${title}`}>
          <a
            role="menuitem"
            href={`https://wa.me/?text=${encodedText}%20${encodedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
          <a
            role="menuitem"
            href={`https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            X / Twitter
          </a>
          <a
            role="menuitem"
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <button
            type="button"
            role="menuitem"
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              copyLink();
            }}
          >
            Copiar enlace
          </button>
        </div>
      )}
    </div>
  );
}

export function PageShare({ title, text, path }: { title: string; text?: string; path: string }) {
  return (
    <div className="mt-6 flex flex-wrap gap-2">
      <ShareButton title={title} text={text} path={path} variant="full" label="Compartir esta sección" />
    </div>
  );
}
