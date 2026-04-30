import type { ReactNode } from "react";
import type { Decision } from "~/data/types";

const KEY_TERMS = [
  "Mejor Niñez",
  "ex Sename",
  "CONADI",
  "INJUV",
  "Chile Crece Contigo",
  "Senadis",
  "Senama",
  "ajuar para recién nacidos",
  "Programa de Apoyo al Recién Nacido",
  "Pensión Garantizada Universal",
  "Te amo PGU",
  "PGU",
  "$906 mil millones",
  "$444.425 millones",
  "402 programas",
  "260 recomendaciones",
  "142 recomendaciones",
  "150 programas",
  "37,3%",
  "$5,4 billones",
  "US$6.000 millones",
  "$2.962.836 millones",
  "$250.275",
  "2.830.860 beneficiarios",
  "75 años o más",
  "65 años o más",
  "septiembre de 2026",
  "septiembre de 2027",
  "fraude social",
  "mal gasto",
  "expansión",
  "no se toca",
  "no vamos a terminar con la PGU",
  "gratuidad",
  "Liceos Bicentenario",
  "Bono Invierno",
  "Subsidio Familiar",
  "SUF",
  "CAE",
  "PAE",
  "Programa de Alimentación Escolar",
  "Calles Sin Violencia",
  "Crimen Organizado",
  "PNCO",
  "GAM",
  "MIM",
  "CIDH",
  "PRAIS",
  "Plan Nacional de Búsqueda",
  "Programa de Derechos Humanos",
  "Circulares 781, 782 y 202",
  "circular 781",
  "circular 782",
  "circular 202",
  "convivencia escolar",
  "identidad de género",
  "perspectiva de género",
  "inclusión",
  "discriminación",
  "reglamentos internos",
  "Bernardo Fontaine",
  "Codelco",
  "menos recursos fiscales",
  "menor recaudación",
  "Ley de Humedales Urbanos",
  "Ley de Humedales",
  "Guacamayo 3",
  "Valdivia",
  "déficit habitacional",
  "campamentos",
  "inundaciones",
  "hongos",
  "termitas",
  "Fondo de Tierras y Aguas Indígenas",
  "Ayudas Técnicas",
  "Chile Te Cuida",
  "listas de espera",
  "especialistas",
  "VIH",
  "inmunizaciones",
  "Becas",
  "salud mental",
  "discapacidad",
  "pueblos indígenas",
  "niñez",
  "personas mayores",
  "firmó",
  "recorta",
  "recorte",
  "rebaja",
  "rebajas",
  "descontinuar",
  "cortar derechos",
  "toma de razón",
  "Contraloría",
].sort((a, b) => b.length - a.length);

const moneyPattern =
  "(?:US\\$|CLP\\$|\\$)\\s?\\d[\\d.,]*(?:\\s?(?:billones|millones|mil millones|M))?";
const percentPattern = "\\d+(?:[,.]\\d+)?%";
const numberWithUnitPattern =
  "\\d[\\d.,]*\\s?(?:programas|planes|personas|ministerios|carteras|días|años|km)";
const termPattern = KEY_TERMS.map(escapeRegExp).join("|");
const highlightPattern = new RegExp(
  `(${moneyPattern}|${percentPattern}|${numberWithUnitPattern}|${termPattern})`,
  "gi",
);

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function highlightClass(value: string) {
  const normalized = value.toLowerCase();
  if (/^(us\$|clp\$|\$)|\d/.test(normalized)) return "fact-money";
  if (
    normalized.includes("recort") ||
    normalized.includes("rebaja") ||
    normalized.includes("descontinuar") ||
    normalized.includes("firmó") ||
    normalized.includes("cortar derechos")
  ) {
    return "fact-danger";
  }
  return "fact-entity";
}

function highlightedText(text: string) {
  const parts: ReactNode[] = [];
  let lastIndex = 0;

  for (const match of text.matchAll(highlightPattern)) {
    const value = match[0];
    const index = match.index ?? 0;

    if (index > lastIndex) {
      parts.push(text.slice(lastIndex, index));
    }

    parts.push(
      <mark key={`${value}-${index}`} className={`fact-highlight ${highlightClass(value)}`}>
        {value}
      </mark>,
    );

    lastIndex = index + value.length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
}

function keyFacts(decision: Decision) {
  const source = `${decision.resumen}\n${decision.cuerpo}`;
  const seen = new Set<string>();
  const facts: { value: string; tone: string }[] = [];

  for (const match of source.matchAll(highlightPattern)) {
    const value = match[0].trim();
    const key = value.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    facts.push({ value, tone: highlightClass(value) });
    if (facts.length >= 8) break;
  }

  return facts;
}

function paragraphTone(paragraph: string, index: number) {
  const text = paragraph.toLowerCase();
  if (index === 0) return "lead";
  if (
    text.includes("mientras") ||
    text.includes("contradic") ||
    text.includes("golpe") ||
    text.includes("no es solo") ||
    text.includes("ya tenía firmado") ||
    text.includes("costo político")
  ) {
    return "critical";
  }
  return "default";
}

export function DecisionArticleBody({ decision }: { decision: Decision }) {
  const facts = keyFacts(decision);

  return (
    <>
      {facts.length > 0 && (
        <section className="decision-key-facts" aria-label="Datos clave de la decisión">
          <div>
            <p className="label text-[--color-accent]">Lo clave</p>
            <h2 className="mt-1 text-2xl sm:text-3xl font-black tracking-tight">
              Lo importante de esta noticia.
            </h2>
          </div>
          <ul className="decision-key-list">
            {facts.map((fact) => (
              <li key={fact.value} className={`decision-key-item ${fact.tone}`}>
                {fact.value}
              </li>
            ))}
          </ul>
        </section>
      )}

      <div className="decision-body">
        {decision.cuerpo.split("\n\n").map((paragraph, index) => (
          <p
            key={index}
            className={`decision-paragraph decision-paragraph-${paragraphTone(paragraph, index)}`}
          >
            {highlightedText(paragraph)}
          </p>
        ))}
      </div>
    </>
  );
}
