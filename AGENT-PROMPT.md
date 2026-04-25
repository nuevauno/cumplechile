# Prompt para agentes de IA — chilecumple.com

Copia y pega esto cuando le pases el proyecto a otro agente (Claude, GPT,
Cursor, etc.). Está escrito para que el agente entienda el contexto sin
depender de esta conversación.

---

## Contexto del proyecto

`chilecumple.com` es un observatorio cívico independiente sobre el gobierno
de **José Antonio Kast (2026–2030)** en Chile. Documenta promesas,
decisiones, recortes, reformas, mentiras chequeadas y retractaciones con
fuentes verificables. Sin afiliación política, sin financiamiento de
partidos, gobierno ni campañas. Editor: hola@chilecumple.com.

El sitio nace después del ajuste fiscal de US$6.000 millones instruido por
Hacienda (Oficio Circular N°16, 21-abr-2026) y crece para cubrir la
narrativa completa del gobierno: lo que prometieron versus lo que están
haciendo.

## Stack y deploy

- **Framework**: React Router 7 + React 19 + Vite 7
- **Estilos**: Tailwind CSS v4 (clases dinámicas con `var(--color-*)`)
- **Plataforma**: Cloudflare Workers (SSR)
- **Deploy**: GitHub Release con tag `YYYY.MM.DD[.N]` (ver
  `.github/workflows/deploy.yml`). Nunca `wrangler deploy` directo.
- **Comandos**: `pnpm typecheck`, `pnpm build`, `pnpm dev`.
- **Repo**: `github.com/nuevauno/cumplechile`. Branch principal: `main`.

## Convenciones de marca

- **Color único**: `#fe4a23` (naranja) en `--color-accent`. NO inventar
  paletas paralelas.
- **Tipografía**: Urbanist (variable, vía `branding.nuevauno.com/css/brand.css`)
  + JetBrains Mono para números (`font-feature-settings: tnum`).
- **Sólo light mode** desde abril 2026. No reintroducir dark theme ni
  ThemeToggle.
- **Logo**: bloque naranja sólido + tres barras blancas decrecientes +
  pulso. Definido en `app/components/Logo.tsx` y `public/favicon.svg`.

## Estructura de datos (todo TypeScript en `app/data/`)

| Archivo | Qué guarda |
|---|---|
| `types.ts` | Interfaces: Promesa, Decision, Retractacion, Mentira, Cuna, EncuestaPunto, IndicadorSeguridad, EventoCronologia, Seremi |
| `promesas.ts` | Promesas del programa (8 ejes Kast). Estado: cumplida/incumplida/en_proceso/estancada/contradictoria/sin_info |
| `decisiones.ts` | Decisiones de Estado fechadas con etiqueta y severidad |
| `retractaciones.ts` | Declaraciones rectificadas, contradichas, borradas, desmentidas |
| `mentiras.ts` | Dichos chequeados como falsos por fact-checkers profesionales |
| `cunas.ts` | Cuñas literales de campaña vs realidad |
| `seremis.ts` | Seremis caídos (renunciaron, no asumieron, decreto retirado) |
| `aprobacion.ts` | Serie de tiempo Cadem + percepción ciudadana |
| `seguridad.ts` | Indicadores de homicidios, expulsiones, zanja, signo a/contra relato |
| `cronologia.ts` | Eventos ordenados con etiqueta y referencia a decisión/retractación |
| `programas*.ts` | Programas públicos del Oficio Circular N°16 con monto y recomendación |
| `ministros.ts`, `ministerios.ts`, `servicios.ts` | Gabinete y orgánica del Estado |
| `documentos.ts`, `macro.ts` | Documentos primarios e indicadores macroeconómicos |

## Reglas editoriales (no negociables)

1. **Toda afirmación lleva fuente** con URL: medio + fecha + título.
   Si no hay fuente verificable, no se publica.
2. **Cita textual + fecha + medio** en cada cuña, retractación y mentira.
3. **Español de Chile**, no voseo. Tildes correctas (pública, decisión,
   inflación, presión, también, después). Es una falta grave omitirlas.
4. **Tono crítico pero factual**. Mostrar el dato y la cita, no editorializar.
5. **Separar continuidad de novedad** en seguridad e inmigración: cuando
   una caída venía de antes del cambio de mando, decirlo.
6. **Nunca cambiar passwords** ni claves productivas sin pedir permiso.

## Áreas que pueden mejorarse

Cosas concretas pendientes (al momento de escribir este prompt):

- **Mapa interactivo de la zanja** (km construidos por sector,
  Chacalluta/Colchane/Visviri).
- **Sección Excel “zurdos” del MOP/SERVIU Coquimbo** como tarjeta
  destacada (ya está en `cronologia.ts`, falta darle protagonismo).
- **Tracker de proyectos de ley**: ingresados, urgencia, comisión,
  votación. Hoy está implícito en `decisiones.ts`.
- **Comparador histórico** vs gobiernos anteriores (Boric, Piñera 2,
  Bachelet 2): aprobación día 45, seremis caídos, decretos firmados.
- **Buscador global** sobre todas las entidades (ministros, decisiones,
  promesas, retractaciones).
- **Páginas de detalle** para `/mentiras/:slug` y `/cunas/:slug`.
- **API JSON pública** (`/api/v1/promesas.json`, etc.) para que medios y
  académicos puedan consumir la data.
- **Newsletter quincenal** con los hitos.
- **OG images** dinámicas con números clave (retractaciones, aprobación,
  seremis caídos).

## Cosas que NO debes hacer

- No introducir dark mode ni ThemeToggle.
- No inventar datos. Si no hay fuente, no entra.
- No usar emojis en el contenido editorial (solo en frontmatter de
  documentación si fuera necesario).
- No usar voseo argentino ni anglicismos innecesarios.
- No refactorizar el stack (Tailwind v4 + React Router 7 + Workers se
  queda).
- No publicar contenido sin tildes correctas.
- No hacer `wrangler deploy` manual; siempre vía GitHub Release.

## Cómo proponer una mejora

1. Lee primero `AGENT-PROMPT.md` (este archivo), `CLAUDE.md` (si existe)
   y `app/data/types.ts` para entender el modelo.
2. Para contenido nuevo: agrégalo en el data file correspondiente con
   todas las fuentes y fechas; el front se actualiza solo.
3. Para diseño: respetar tokens en `app/styles/app.css`. No introducir
   colores nuevos sin justificación editorial.
4. Antes de marcar como hecho: `pnpm typecheck` y `pnpm build` deben
   pasar limpios.
5. Verificación visual con `pnpm dev` antes de commit.
6. Commit con mensaje descriptivo en español; tag de release
   `YYYY.MM.DD.N` para deploy.

## Formato de release notes (obligatorio)

Las notas son para el editor del sitio o un lector casual, NO para
otro programador. Sin nombres de herramientas, sin detalles de
implementación, sin línea de "Validación".

**Title**: `YYYY.MM.DD[.N] — <resumen humano corto>`
(ej. `2026.04.25.20 — Footer NUEVAUNO`).

**Body**:
```
<frase lead que describe qué cambia para el usuario>

- <bullet con beneficio concreto, lenguaje no-técnico>
- <bullet con beneficio concreto, lenguaje no-técnico>
```

Reglas:
- El **lead** lo entiende un editor no-técnico ("Carga el footer
  compartido", "Agrega botones de compartir", "Activa métricas
  de visitas").
- Los **bullets** describen lo que el usuario notará. Refactors,
  hooks, deps, typecheck, deploy, etc. NO van.
- Sin tildes está bien si el shell no las maneja (HEREDOC + `gh`
  pierde UTF-8). Si las quieres bien, usar `--notes-file -` con stdin.

Ejemplo bueno (`2026.04.25.20`):
> Carga el footer compartido NUEVAUNO al final de cada página.
>
> - Footer común de NUEVAUNO (POWERED BY, iconos de apps, redes
>   sociales) ahora aparece en todo el sitio.
> - Tema light por defecto.

Ejemplos **malos**:
- `feat(footer): cargar footer compartido via useEffect` (es un
  mensaje de commit, no nota de release).
- "Inyección vía useEffect después de hidratación para evitar
  mismatch con React 19" (detalle de implementación).
- "Validación: pnpm typecheck OK, deploy CF Workers verde,
  #footer-container presente en HTML" (innecesario, técnico).

## Fuentes que ya están integradas

The Clinic, La Tercera, Emol, BioBioChile, Cooperativa, T13,
El Mostrador, El Dínamo, CIPER, Pauta, Interferencia, Ex-Ante,
La Hora, El Ciudadano, BBCL Investiga, Fast Check, Mala Espina Check,
La Tercera Decodificador, Vergara 240 (UDP), Fundación Nodo XXI.

Si una nota cita un medio que no está acá, agrégalo y prefiere las
fuentes profesionales sobre redes sociales.

---

**Brief en una frase**: este sitio cataloga lo que el gobierno de Kast
prometió, lo que hizo, lo que tuvo que recoger y lo que sus propios
ministros se contradicen — siempre con cita, fecha y enlace a la fuente.
Tu trabajo como agente es hacerlo crecer en información, mantenerlo
verificable y elevarlo en diseño sin diluir su tono crítico.
