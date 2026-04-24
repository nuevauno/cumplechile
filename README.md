# Chile Cumple

Observatorio civico del gobierno de Jose Antonio Kast (2026-2030). Promesas, decisiones, recortes y reformas con fuentes auditables.

> Periodismo de datos sin afiliacion politica. Sin financiamiento de partidos, gobierno ni campañas.

## Que hace

- **Decisiones**: registra cada accion del gobierno (oficios, decretos, leyes, designaciones) clasificada como bueno, malo o feo, con severidad 1 a 4.
- **Promesas**: cataloga promesas de campaña y las contrasta con las decisiones tomadas.
- **Ministerios**: vista por cartera con programas, recortes y reformas en cada una.
- **Documentos**: biblioteca de oficios, circulares, decretos y leyes resumidos en lenguaje legible, con citas textuales y PDF original.

## Stack

- React Router 7 + React 19 (SSR)
- Tailwind CSS v4
- Cloudflare Workers (deploy)
- TypeScript strict
- Tipografia: Urbanist + Newsreader

## Estructura

```
app/
├── components/        Componentes UI compartidos
├── data/              Modelo + datasets (futuras tablas D1)
│   ├── ministerios.ts
│   ├── servicios.ts
│   ├── programas.ts
│   ├── decisiones.ts
│   ├── documentos.ts
│   └── types.ts
├── lib/
│   └── store.ts       Helpers de consulta sobre la data
├── routes/            Rutas RR7
│   ├── home.tsx
│   ├── decisiones.tsx
│   ├── decisiones-detail.tsx
│   ├── ministerios.tsx
│   ├── ministerios-detail.tsx
│   ├── documentos.tsx
│   ├── documentos-detail.tsx
│   ├── promesas.tsx
│   ├── sobre.tsx
│   └── sitemap.tsx
├── styles/app.css     Tokens + paleta editorial
├── entry.server.tsx
└── root.tsx
```

## Desarrollo

```bash
pnpm install
pnpm dev          # http://localhost:5173
pnpm typecheck    # type checking
pnpm build        # build produccion
pnpm preview      # preview build con wrangler
```

## Deploy

**Nunca deploy manual. Siempre via GitHub Release.**

1. Asegurate que `main` esta verde (CI passing)
2. Crea un release con tag `YYYY.MM.DD` (o `YYYY.MM.DD.N` para releases del mismo dia):

```bash
gh release create 2026.04.24 --title "2026.04.24" --notes "Notas del deploy"
```

3. GitHub Actions corre `.github/workflows/deploy.yml` que tipchecks, builda y publica a Cloudflare Workers.

Cuando este disponible el dominio `chilecumple.com`, agregar en `wrangler.deploy.jsonc`:

```jsonc
"routes": [
  { "pattern": "chilecumple.com", "custom_domain": true },
  { "pattern": "www.chilecumple.com", "custom_domain": true }
]
```

### Secrets requeridos en GitHub

- `CLOUDFLARE_API_TOKEN` con permiso `Workers Scripts: Edit`

## Roadmap

### v1 (actual)
- [x] Estructura del sitio + diseño editorial
- [x] Anexo MDS del Oficio Circular N°16 (105 programas catalogados)
- [x] Pagina por ministerio con filtros y tabla
- [x] Visor de documentos con citas textuales

### v2 (proximo)
- Migracion de data estatica a D1 (Cloudflare)
- Admin con autenticacion para curacion
- Pipeline de extraccion: pegas URL/PDF y genera draft
- Cron de ingesta de RSS de medios chilenos
- Visor PDF embebido (iframe → R2)
- Captura y archivado de tweets relevantes

### v3
- Comparador promesa ↔ decision
- Linea de tiempo visual
- API publica de datos
- Notificaciones por email/RSS de nuevas decisiones

## Licencia

- **Contenido editorial**: [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) — citalo libremente atribuyendo y compartiendo bajo la misma licencia.
- **Codigo**: MIT.
- **Documentos originales**: dominio publico (provienen de organismos del Estado).

## Contacto

hola@chilecumple.com — para aportar documentos, reportar errores o proponer correcciones.
