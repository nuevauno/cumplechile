/**
 * Catalogo de declaraciones publicas de Jose Antonio Kast (candidato y
 * Presidente) que fueron desmentidas por fact-checkers profesionales o por
 * datos oficiales. Va separado de "retractaciones" porque aca el foco es la
 * mentira o el dato falso, no la marcha atras.
 *
 * Fuentes: La Tercera, Fast Check, Mala Espina Check, Vergara 240 (UDP),
 * El Ciudadano, BioBioChile.
 */

export interface Mentira {
  slug: string;
  titulo: string;
  /** Cita textual del candidato/Presidente. */
  fraseLiteral: string;
  fechaDicho: string; // ISO
  donde: string; // Debate, entrevista, RRSS, etc.
  /** Veredicto del fact-check. */
  veredicto: "falso" | "engañoso" | "exagerado";
  /** El dato real, en una frase. */
  datoReal: string;
  /** Cuanto se aparta del dato real (numero comparativo). */
  diferencia: string;
  fuenteFactCheck: string;
  fuenteUrl: string;
  cuerpo: string;
  /** Si reconocio el error o se mantuvo en la mentira. */
  reconocio: boolean;
}

export const MENTIRAS: Mentira[] = [
  {
    slug: "1200000-asesinados",
    titulo: "“1.200.000 personas mueren asesinadas al año” en Chile",
    fraseLiteral:
      "Cuando hay 1 millón 200 mil personas que mueren asesinadas al año, cuando hay 40 mil compatriotas que mueren en listas de espera, cuando hay mas de 1 millon de desempleados, no hay merito.",
    fechaDicho: "2025-12-09",
    donde: "Debate presidencial Anatel, Santiago",
    veredicto: "falso",
    datoReal: "1.207 victimas de homicidio en 2024 (Centro de Prevencion de Homicidios)",
    diferencia: "994 veces mas alto que el dato real",
    fuenteFactCheck: "La Tercera Decodificador / Fast Check / Mala Espina Check / Vergara 240 (UDP)",
    fuenteUrl:
      "https://www.latercera.com/nacional/noticia/kast-afirma-que-hay-1200000-personas-asesinadas-40-mil-muertos-en-listas-de-espera-y-un-millon-de-desempleados-falso/",
    cuerpo:
      "En el debate Anatel del 9 de diciembre de 2025, Kast afirmo que en Chile mueren 1.200.000 personas asesinadas al año. Cuatro fact-checks independientes (La Tercera Decodificador, Fast Check, Mala Espina Check y Vergara 240 de la UDP) calificaron la cita como falsa. Segun datos oficiales, en 2024 hubo 1.207 victimas de homicidio en todo Chile. La cifra que dijo Kast es casi mil veces mayor que la realidad. Intento corregirse despues hablando de “4.500 asesinatos en el gobierno de Boric” — tambien falso: la suma 2022-2025 esta en torno a 4.300 casos, distribuidos en cuatro años (no comparable con un total acumulado).",
    reconocio: false,
  },
  {
    slug: "40-mil-muertos-listas-espera",
    titulo: "“40 mil muertos en listas de espera”",
    fraseLiteral:
      "Cuando hay 40 mil compatriotas que mueren en listas de espera...",
    fechaDicho: "2025-12-09",
    donde: "Debate presidencial Anatel",
    veredicto: "exagerado",
    datoReal: "35.492 muertes en lista de espera al cuarto trimestre de 2024 (Minsal)",
    diferencia: "Sobreestima en ~13% el dato real",
    fuenteFactCheck: "La Tercera Decodificador",
    fuenteUrl:
      "https://www.latercera.com/nacional/noticia/kast-afirma-que-hay-1200000-personas-asesinadas-40-mil-muertos-en-listas-de-espera-y-un-millon-de-desempleados-falso/",
    cuerpo:
      "Es una sobreestimacion: el dato oficial del Ministerio de Salud al cierre del cuarto trimestre de 2024 marca 35.492 fallecimientos. Kast redondea para arriba en su discurso de campaña.",
    reconocio: false,
  },
  {
    slug: "1-millon-desempleados",
    titulo: "“Mas de 1 millon de desempleados”",
    fraseLiteral:
      "Cuando hay mas de 1 millon de desempleados...",
    fechaDicho: "2025-12-09",
    donde: "Debate presidencial Anatel",
    veredicto: "engañoso",
    datoReal: "875.000 desempleados (INE, trimestre movil oct-dic 2025)",
    diferencia: "Inflado en ~125.000 personas (~14% sobre el dato real)",
    fuenteFactCheck: "La Tercera Decodificador",
    fuenteUrl:
      "https://www.latercera.com/nacional/noticia/kast-afirma-que-hay-1200000-personas-asesinadas-40-mil-muertos-en-listas-de-espera-y-un-millon-de-desempleados-falso/",
    cuerpo:
      "El INE reporto 875.000 desempleados en el trimestre movil mas reciente al momento del debate. La cifra de “mas de un millon” supera el dato oficial. Despues de asumir, el ministro Quiroz hablo de 860.000 desempleados, una cifra mas cercana al dato del INE.",
    reconocio: false,
  },
  {
    slug: "estado-en-quiebra-49-mil-millones",
    titulo: "“Un Estado en quiebra. Endeudado en mas de 49 mil millones de dolares”",
    fraseLiteral:
      "Porque nos dejaron sin plata. Un Estado en quiebra. Endeudado en mas de 49 mil millones de dolares. Y la caja del Estado completamente vacia.",
    fechaDicho: "2026-03-24",
    donde: "Cuenta oficial Segegob (Mara Sedini), redes sociales",
    veredicto: "falso",
    datoReal: "Deuda bruta del Gobierno Central a feb-2026: ~42% del PIB. Caja del Tesoro: en torno a US$5.000 millones. Sin riesgo de default, calificacion S&P A.",
    diferencia: "Concepto de “quiebra” incompatible con calificacion soberana A vigente",
    fuenteFactCheck: "Banco Central / DIPRES / S&P Global",
    fuenteUrl:
      "https://www.emol.com/noticias/Nacional/2026/03/24/1195283/quiroz-rechaza-estado-quiebra-publicacion.html",
    cuerpo:
      "El propio ministro de Hacienda Jorge Quiroz se distancio publicamente: “jamas ocuparia esa palabra.” La pieza fue eliminada de las redes sociales del Gobierno y Contraloria pidio explicaciones a la vocera Sedini. El asesor presidencial Cristian Valenzuela acepto responsabilidad por la frase.",
    reconocio: true,
  },
];

export const mentirasOrdenadas = () =>
  [...MENTIRAS].sort((a, b) => b.fechaDicho.localeCompare(a.fechaDicho));
