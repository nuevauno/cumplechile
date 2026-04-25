/**
 * Cuñas de campaña — frases puntuales que dijo José Antonio Kast como
 * candidato y que después no se cumplieron, se atenuaron o cambiaron
 * apenas asumió. Cada cuña tiene cita literal, fecha exacta, medio en
 * el que se dijo y un contraste con lo que realmente pasó.
 */

export interface Cuna {
  slug: string;
  /** Cita textual del candidato. */
  cita: string;
  fechaDicho: string; // ISO
  /** Medio o evento donde lo dijo. */
  donde: string;
  /** URL al medio o registro audiovisual. */
  fuenteUrl: string;
  fuenteMedio: string;
  /** El tema en una palabra para etiquetar. */
  tema: "zanja" | "expulsiones" | "presupuesto" | "seguridad" | "estado" | "transparencia" | "educacion" | "ddhh";
  /** Lo que pasó en realidad (con fechas y datos). */
  realidad: string;
  /** Veredicto sintético. */
  veredicto: "incumplida" | "atenuada" | "atrasada" | "contradicha";
}

export const CUNAS: Cuna[] = [
  {
    slug: "retroexcavadoras-dia-uno",
    cita:
      "Lo que correspondía era que el Presidente hubiera tenido las retroexcavadoras en la frontera, cavando una zanja para indicarle a la gente que quiere entrar ilegalmente que hay un límite.",
    fechaDicho: "2025-02-04",
    donde: "Entrevista en T13 (candidato presidencial)",
    fuenteUrl:
      "https://www.t13.cl/noticia/politica/nacional/J.A-Kast-Hay-que-hacer-una-zanja-e-indicar-a-los-migrantes-ilegales-que-hay-un-limite-en-Colchane",
    fuenteMedio: "T13",
    tema: "zanja",
    veredicto: "atrasada",
    realidad:
      "Kast asumió el 11 de marzo de 2026. La maquinaria recién llegó a la frontera el 13 de marzo (dos días después). El inicio formal del Plan Escudo Fronterizo fue el 16 de marzo (cinco días después). Al 13 de marzo, el propio Kast respondió en Meganoticias Prime que la zanja comenzaría “lo más pronto que podamos” — y no “el día 1”.",
  },
  {
    slug: "30-km-en-90-dias",
    cita:
      "Vamos a aumentar treinta kilómetros de zanja en noventa días, con tres metros de profundidad.",
    fechaDicho: "2026-03-16",
    donde: "Conferencia de prensa en Chacalluta, Arica",
    fuenteUrl:
      "https://www.latercera.com/politica/noticia/tres-metros-de-profundidad-y-aumentar-30-kilometros-en-90-dias-kast-pone-en-marcha-ampliacion-de-zanjas-en-norte-del-pais/",
    fuenteMedio: "La Tercera",
    tema: "zanja",
    veredicto: "atrasada",
    realidad:
      "Al 22 de abril (día 37 de los 90 prometidos, un 41% del plazo) la construcción registraba apenas 12 km adicionales. El ritmo necesario para cumplir la meta es de 0,33 km diarios; el ritmo real ha estado por debajo. Plazo final: 14 de junio de 2026.",
  },
  {
    slug: "esta-retroexcavadora-no-va-fracasar",
    cita:
      "Esta retroexcavadora no va a fracasar, porque esta retroexcavadora la empujamos todos los chilenos.",
    fechaDicho: "2026-03-16",
    donde: "Inicio formal del Plan Escudo Fronterizo, Chacalluta",
    fuenteUrl:
      "https://www.latercera.com/politica/noticia/esta-retroexcavadora-no-va-a-fracasar-va-a-construir-soberania-kast-por-inicio-de-trabajos-en-la-frontera/",
    fuenteMedio: "La Tercera · YouTube",
    tema: "zanja",
    veredicto: "incumplida",
    realidad:
      "El plan total declarado es de 500 km a lo largo de la frontera norte. A 45 días de gobierno se han construido 12 km, equivalentes al 2,4% de la meta total declarada por el propio Ejecutivo.",
  },
  {
    slug: "ajuste-no-tocara-vulnerables",
    cita:
      "El ajuste fiscal lo van a sentir los políticos, no los abuelitos ni los que reciben ayuda del Estado.",
    fechaDicho: "2025-11-10",
    donde: "Acto de campaña, segunda vuelta",
    fuenteUrl:
      "https://www.theclinic.cl/2026/04/24/descontinuar-142-programas-y-rebajar-presupuesto-en-otros-260-las-recomendaciones-de-hacienda-a-ministerios-para-recortar-mas-de-6-mil-millones-de-dolares/",
    fuenteMedio: "The Clinic · Oficio Circular N°16",
    tema: "presupuesto",
    veredicto: "incumplida",
    realidad:
      "El Oficio Circular N°16 de Hacienda (21 de abril de 2026) ordena descontinuar el Programa de Alimentación Escolar (PAE), las Ayudas Técnicas para discapacidad y el Bono de Graduación de Cuarto Medio; rebaja al menos un 15% el Bono Invierno, el Subsidio Familiar (SUF), las pensiones del sistema de reparto, el Subsidio de Discapacidad y Chile Te Cuida.",
  },
  {
    slug: "estado-en-quiebra",
    cita:
      "Nos dejaron sin plata. Un Estado en quiebra. Endeudado en más de 49 mil millones de dólares.",
    fechaDicho: "2026-03-24",
    donde: "Pieza gráfica oficial Segegob (Mara Sedini), redes sociales",
    fuenteUrl:
      "https://www.emol.com/noticias/Nacional/2026/03/24/1195283/quiroz-rechaza-estado-quiebra-publicacion.html",
    fuenteMedio: "Emol",
    tema: "estado",
    veredicto: "contradicha",
    realidad:
      "El propio ministro de Hacienda Jorge Quiroz se distanció al día siguiente: “jamás ocuparía esa palabra.” La pieza fue eliminada de las redes oficiales del Gobierno. Contraloría pidió explicaciones formales a la vocera Sedini.",
  },
  {
    slug: "mil-doscientos-mil-asesinados",
    cita:
      "Cuando hay un millón doscientas mil personas que mueren asesinadas al año, cuando hay cuarenta mil compatriotas que mueren en listas de espera, cuando hay más de un millón de desempleados, no hay mérito.",
    fechaDicho: "2025-12-09",
    donde: "Debate presidencial Anatel",
    fuenteUrl:
      "https://www.latercera.com/nacional/noticia/kast-afirma-que-hay-1200000-personas-asesinadas-40-mil-muertos-en-listas-de-espera-y-un-millon-de-desempleados-falso/",
    fuenteMedio: "La Tercera Decodificador · Fast Check · Mala Espina · Vergara 240 (UDP)",
    tema: "seguridad",
    veredicto: "incumplida",
    realidad:
      "Cuatro fact-checks profesionales calificaron la cita como falsa. Datos oficiales 2024: 1.207 víctimas de homicidio (no 1.200.000), 35.492 muertes en lista de espera (no 40.000) y 875.000 personas desempleadas (no más de un millón). La cita exagera la mortalidad real por homicidio en mil veces.",
  },
  {
    slug: "almuerzo-recursos-publicos",
    cita:
      "¿Qué importa? Es algo privado, lo financia mi familia.",
    fechaDicho: "2026-04-14",
    donde: "Punto de prensa, La Moneda",
    fuenteUrl:
      "https://www.biobiochile.cl/noticias/nacional/chile/2026/04/24/kast-reconoce-que-hubo-financiamiento-publico-en-polemico-almuerzo-con-excompaneros-en-la-moneda.shtml",
    fuenteMedio: "BioBioChile",
    tema: "transparencia",
    veredicto: "contradicha",
    realidad:
      "El 24 de abril, ante el Consejo para la Transparencia, Kast reconoció: “Cometí un error por desconocimiento.” Confirmó financiamiento público parcial del almuerzo con 70 excompañeros de la PUC en La Moneda el 10 de abril. Contraloría abrió expediente formal con plazo de 10 días hábiles tras la denuncia de los diputados Manouchehri y Venegas y la senadora Cicardini (PS).",
  },
  {
    slug: "expulsiones-masivas-rapidas",
    cita:
      "Vamos a expulsar a quienes hayan ingresado por pasos no habilitados y a quienes tengan antecedentes, de forma rápida y masiva.",
    fechaDicho: "2025-11-15",
    donde: "Programa de gobierno, presentación pública",
    fuenteUrl:
      "https://www.cooperativa.cl/noticias/pais/poblacion/inmigrantes/thayer-primer-vuelo-de-expulsion-de-kast-es-continuidad-de-la-gestion/2026-04-16/191446.html",
    fuenteMedio: "Cooperativa",
    tema: "expulsiones",
    veredicto: "atenuada",
    realidad:
      "Primer vuelo de expulsión: 15 de abril de 2026, 40 personas. El ex subsecretario Thayer aclaró que se trata de procesos administrativos y judiciales heredados del gobierno anterior, no nuevas detenciones. La proyección oficial es de tres vuelos al mes (~120 personas/mes), una cifra muy lejana de “masiva.”",
  },
  {
    slug: "auditoria-total-externa",
    cita:
      "Se convocará a la Contraloría General y a firmas auditoras de primer nivel mundial para revisar cada ministerio, subsecretaría, servicio y empresa pública.",
    fechaDicho: "2025-04-28",
    donde: "Anuncio de campaña sobre auditoría total al Estado",
    fuenteUrl:
      "https://www.biobiochile.cl/noticias/nacional/chile/2026/04/05/pese-a-promesa-de-campana-gobierno-finalmente-desestima-auditoria-externa-internacional.shtml",
    fuenteMedio: "BioBioChile",
    tema: "transparencia",
    veredicto: "incumplida",
    realidad:
      "El 5 de abril de 2026 el Gobierno descartó licitar la auditoría externa internacional por estrechez fiscal. La reemplazó por una revisión interna con servicios públicos entregando antecedentes desde 2025 al 11 de marzo de 2026.",
  },
  {
    slug: "no-recortar-beneficios-gratuidad",
    cita:
      "No vamos a recortar beneficios sociales.",
    fechaDicho: "2025-11-01",
    donde: "Mensaje de campaña y defensa oficialista de segunda vuelta",
    fuenteUrl:
      "https://www.biobiochile.cl/noticias/nacional/chile/2026/03/16/cambios-en-la-gratuidad-enfrentan-al-gobierno-de-kast-con-la-oposicion-acusan-promesa-incumplida.shtml",
    fuenteMedio: "BioBioChile",
    tema: "educacion",
    veredicto: "contradicha",
    realidad:
      "El 16 de marzo de 2026, la propuesta de Reconstrucción incluía ajustes a gratuidad universitaria, límite a mayores de 30 años y fortalecimiento del cobro del CAE. La versión final morigeró el golpe, pero mantuvo una moratoria de dos años para nuevas instituciones en gratuidad.",
  },
  {
    slug: "cero-dobles-sueldos",
    cita:
      "Tolerancia cero a los dobles sueldos en el Estado.",
    fechaDicho: "2025-12-01",
    donde: "Estándar de campaña sobre probidad y privilegios estatales",
    fuenteUrl:
      "https://www.latercera.com/politica/noticia/transparencia-revela-cuanto-han-percibido-asesores-de-kast-por-doble-funcion-en-cargos-de-eleccion-popular/",
    fuenteMedio: "La Tercera",
    tema: "transparencia",
    veredicto: "contradicha",
    realidad:
      "La Tercera reveló que Catalina Ugarte y Víctor Valdés percibieron ingresos simultáneos como autoridades electas y parte del equipo del Presidente electo durante la transición. Diputados del PDG llevaron el caso a Contraloría.",
  },
  {
    slug: "continuidad-derechos-humanos",
    cita:
      "El Plan de Búsqueda se va a mantener en el tiempo.",
    fechaDicho: "2026-03-31",
    donde: "Declaraciones del ministro de Justicia Fernando Rabat",
    fuenteUrl:
      "https://elpais.com/chile/2026-04-01/kast-descabeza-el-plan-de-busqueda-de-detenidos-desaparecidos-y-despide-a-tres-de-sus-jefas-es-una-decision-claramente-politica.html",
    fuenteMedio: "El País Chile",
    tema: "ddhh",
    veredicto: "contradicha",
    realidad:
      "El mismo periodo quedó marcado por el despido de tres jefaturas del Programa de Derechos Humanos y del Plan Nacional de Búsqueda. El Gobierno prometió continuidad, pero removió liderazgos técnicos en una política de Estado sobre 1.469 detenidos desaparecidos.",
  },
  {
    slug: "programa-no-considera-indultos",
    cita:
      "Nuestro programa de gobierno no considera ningún indulto, jamás indultaríamos a alguien que cometa algún tipo de delito de ese tipo.",
    fechaDicho: "2025-12-09",
    donde: "Declaración previa al debate presidencial Anatel",
    fuenteUrl:
      "https://www.emol.com/noticias/Nacional/2025/12/09/1185437/kast-descartaria-entregar-indultos-gobierno.html",
    fuenteMedio: "Emol",
    tema: "ddhh",
    veredicto: "contradicha",
    realidad:
      "El 18 de marzo, Amnistía Internacional advirtió que Kast declaró el 12 de marzo que quizá indultaría a excarabineros y exmilitares condenados por delitos del estallido. El 1 de abril, el ministro Fernando Rabat confirmó que existen cerca de 20 solicitudes de indulto pendientes y que dos expedientes estaban en estudio bajo la legislación vigente.",
  },
];

export const cunasOrdenadas = () =>
  [...CUNAS].sort((a, b) => b.fechaDicho.localeCompare(a.fechaDicho));
