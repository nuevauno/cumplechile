/**
 * Catalogo de declaraciones publicas de Jose Antonio Kast y de autoridades de
 * su gobierno que fueron desmentidas por fact-checkers profesionales, prensa
 * con documentos o datos oficiales. Va separado de "retractaciones" porque aca
 * el foco es la mentira o el dato falso, no la marcha atras.
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
    slug: "dipres-descontinuar-es-reformular",
    titulo: "DIPRES: “descontinuar” ahora sería “reformular”",
    fraseLiteral:
      "Quizás la palabra descontinuar es más bien reformular.",
    fechaDicho: "2026-04-27",
    donde: "José Ignacio Llodrá, subdirector de Racionalización y Función Pública de DIPRES, en seminario UC citado por BioBioChile",
    veredicto: "engañoso",
    datoReal:
      "La polémica nació porque el oficio y sus anexos fueron reportados con una categoría explícita: 142 programas recomendados para descontinuar. Reformular es una acción distinta y no borra la recomendación escrita.",
    diferencia: "Cambia la palabra después de la crisis: de cierre recomendado a rediseño administrativo",
    fuenteFactCheck: "BioBioChile / The Clinic",
    fuenteUrl:
      "https://www.biobiochile.cl/noticias/economia/actualidad-economica/2026/04/27/dipres-aclara-polemico-oficio-sobre-programas-quizas-la-palabra-descontinuar-es-mas-bien-reformular.shtml",
    cuerpo:
      "La defensa es engañosa porque intenta hacer pasar dos conceptos distintos como equivalentes. Si se quería reformular, el oficio podía decir reformular. En cambio, la categoría que detonó la crisis fue descontinuar, aplicada a programas sensibles como alimentación escolar, salud mental, seguridad y ciencia. La aclaración no corrige el documento: intenta cambiar su lectura pública cuando el costo político ya explotó.",
    reconocio: false,
  },
  {
    slug: "quiroz-no-decision-descontinuar-programas",
    titulo: "“No hay ninguna decisión” de terminar programas",
    fraseLiteral:
      "Aquí no hay ninguna decisión de descontinuar ni terminar ningún programa. Es un oficio.",
    fechaDicho: "2026-04-25",
    donde: "Jorge Quiroz explicando el Oficio Circular N°16 de Hacienda",
    veredicto: "engañoso",
    datoReal:
      "El oficio no era decreto final, pero los anexos publicados recomiendan descontinuar 142 programas y rebajar otros 260, con Salud, Educación, Desarrollo Social, Seguridad, Ciencia y Culturas entre las carteras afectadas.",
    diferencia: "La frase usa una defensa formal para ocultar una recomendación presupuestaria concreta",
    fuenteFactCheck: "Emol / The Clinic",
    fuenteUrl:
      "https://www.emol.com/noticias/Economia/2026/04/25/1198242/oficios-hacienda-recorte-presupuesto.html",
    cuerpo:
      "Quiroz tiene razón en una cosa: el oficio no es el decreto final de ajuste. Pero eso no lo vuelve inocuo. El documento ya venía con recomendaciones de cierre y rebaja, nombres de programas y una lectura política evidente. Por eso el desmentido no es que “ya cerraron todo”, sino que es engañoso vender la lista como si no hubiera una decisión técnica escrita empujando esos cierres.",
    reconocio: false,
  },
  {
    slug: "quiroz-no-rebaja-ricos",
    titulo: "“No es un impuesto que baja para los ricos”",
    fraseLiteral:
      "Esto no es un impuesto que baja para los ricos. Es un impuesto que baja para las empresas.",
    fechaDicho: "2026-04-13",
    donde: "Jorge Quiroz defendiendo la reforma tributaria del Plan de Reconstrucción",
    veredicto: "engañoso",
    datoReal:
      "Nodo XXI estimó, según El Mostrador, un beneficio potencial agregado de $292.515 millones para 63 autoridades por cuatro medidas, con Fernando Barros y Daniel Mas como principales beneficiados.",
    diferencia: "La defensa cambia el sujeto a empresas, pero el beneficio patrimonial puede llegar a autoridades multimillonarias",
    fuenteFactCheck: "BioBioChile / El Mostrador",
    fuenteUrl:
      "https://www.biobiochile.cl/noticias/economia/actualidad-economica/2026/04/13/no-es-una-rebaja-a-los-ricos-quiroz-defiende-reforma-tributaria-y-pide-dejar-la-tipica-caricatura.shtml",
    cuerpo:
      "La frase es políticamente conveniente, pero incompleta. Una rebaja empresarial, una reintegración tributaria y una ventana de repatriación pueden beneficiar directamente a quienes poseen empresas, capitales y patrimonios altos. El problema no es solo distributivo: es que varios de esos eventuales ganadores están dentro del gabinete que impulsa la reforma.",
    reconocio: false,
  },
  {
    slug: "no-hay-ninguna-cifra-buena-boric",
    titulo: "“No hay ninguna cifra” buena del gobierno de Boric",
    fraseLiteral:
      "No hay ninguna cifra donde ellos puedan decir que lo hicieron bien.",
    fechaDicho: "2026-04-27",
    donde: "Intervención presidencial en medio de la polémica por recortes de Hacienda",
    veredicto: "falso",
    datoReal:
      "El absoluto no resiste datos públicos: 2025 tuvo crecimiento positivo, la desocupación dic-2025/feb-2026 fue 8,3%, Fiscalía reportó baja de víctimas de homicidios en 2025 y la pobreza por ingresos no aumentó según chequeos de CASEN.",
    diferencia: "La frase borra indicadores oficiales positivos o favorables al balance de salida",
    fuenteFactCheck: "Datos públicos y chequeos profesionales",
    fuenteUrl:
      "https://www.meganoticias.cl/nacional/520524-jose-antonio-kast-polemica-recortes-hacienda-programas-sociales-oposicion-27-04-2026.html",
    cuerpo:
      "Kast puede hacer una crítica política dura a Boric, pero convertirla en un absoluto verificable es falso. Hay cifras defendibles del periodo anterior: crecimiento económico positivo en 2025, desocupación bajo el millón de personas, baja de homicidios respecto de 2024 y chequeos que desmintieron el aumento de pobreza atribuido a Boric. La frase se usó para defenderse por el oficio de recortes, pero vuelve a instalar el mismo método: negar todo dato que no sirva al relato de desastre heredado.",
    reconocio: false,
  },
  {
    slug: "kast-ustedes-se-quedaron-con-la-plata-menores",
    titulo: "Kast acusa que Boric “se quedó con la plata” de beneficios para menores",
    fraseLiteral: "¡Ustedes se quedaron con la plata!",
    fechaDicho: "2026-04-25",
    donde: "Defensa presidencial ante críticas por recortes a programas de alimentación y salud para menores",
    veredicto: "engañoso",
    datoReal:
      "La polémica no nació por una malversación probada del gobierno anterior, sino por un oficio de Hacienda del propio gobierno de Kast que recomendó descontinuar el PAE, la Beca de Apoyo Vocación Profesor y programas de salud escolar. Cataldo respondió que el PAE entrega alimentación diaria a más de 2,5 millones de estudiantes.",
    diferencia: "Convierte el flanco de recortes propios en una acusación penal/política contra Boric sin prueba equivalente",
    fuenteFactCheck: "BioBioChile / La Tercera",
    fuenteUrl:
      "https://www.biobiochile.cl/noticias/nacional/chile/2026/04/25/kast-y-criticas-por-posibles-recortes-en-beneficios-para-menores-ustedes-se-quedaron-con-la-plata.shtml",
    cuerpo:
      "La frase es engañosa porque cambia el eje del problema: el documento que detonó la crisis no es una denuncia de malversación contra Boric, sino una recomendación presupuestaria del gobierno de Kast. Si el Presidente quiere acusar que alguien se quedó con plata de niños, necesita mostrar un hecho verificable, no usarlo como cortina para explicar por qué su Hacienda puso alimentación escolar y salud de menores en una lista de programas a descontinuar. El dato operativo disponible va en sentido contrario: el PAE seguía funcionando y alimentando diariamente a millones de estudiantes.",
    reconocio: false,
  },
  {
    slug: "salidas-voluntarias-cadena-nacional",
    titulo: "“Mayor número de salidas voluntarias” en el primer mes",
    fraseLiteral:
      "En el primer mes de gobierno se registran significativamente menos ingresos irregulares que en los últimos cinco años, un mayor número de salidas voluntarias y un mayor número de extranjeros expulsados del territorio nacional.",
    fechaDicho: "2026-04-15",
    donde: "Primera cadena nacional presidencial",
    veredicto: "falso",
    datoReal:
      "Fast Check revisó cifras de Sermig: marzo de 2026 tuvo 515 salidas voluntarias y el promedio del primer trimestre fue 610, por debajo de los promedios de 2023 y 2024.",
    diferencia: "El componente de salidas voluntarias no supera los mejores años previos",
    fuenteFactCheck: "Fast Check",
    fuenteUrl:
      "https://www.fastcheck.cl/2026/04/18/fact-checking-a-la-primera-cadena-nacional-del-presidente-jose-antonio-kast/",
    cuerpo:
      "Fast Check calificó el bloque migratorio completo como impreciso: era real que el primer mes mostró menos denuncias por ingreso irregular y más expulsiones que el promedio anual de años previos, pero era falso que hubiera un mayor número de salidas voluntarias. El chequeo también remarca que la baja de ingresos irregulares venía de una tendencia sostenida desde antes del cambio de mando.",
    reconocio: false,
  },
  {
    slug: "pobreza-aumento-boric",
    titulo: "“Chile es más pobre que cuando lo recibieron”",
    fraseLiteral:
      "Chile hoy día es un país más violento; generando más pobreza: hoy día, Chile es más pobre que cuando lo recibieron.",
    fechaDicho: "2025-12-03",
    donde: "Debate presidencial ARCHI",
    veredicto: "falso",
    datoReal:
      "CASEN 2022 marcó pobreza por ingresos de 6,5%, menor que 2020 y 2017; no había una nueva CASEN publicada que permitiera sostener aumento bajo Boric.",
    diferencia: "No existía medición publicada que respaldara el aumento atribuido",
    fuenteFactCheck: "Mala Espina Check",
    fuenteUrl:
      "https://www.malaespinacheck.cl/politica/2025/12/03/es-falso-que-aumento-la-pobreza-durante-este-gobierno-a-diferencia-de-lo-que-dijo-kast/",
    cuerpo:
      "La verificación distinguió entre una nueva metodología de medición de pobreza y una nueva medición. La Comisión Asesora actualizó cálculos metodológicos sobre series anteriores, pero no publicó una CASEN 2025 que demostrara aumento durante el gobierno de Boric. La frase de campaña usó ese ruido metodológico como si fuera deterioro comprobado.",
    reconocio: false,
  },
  {
    slug: "ocde-impuesto-corporativo-cadena-nacional",
    titulo: "Promedio OCDE de impuesto corporativo en 22%",
    fraseLiteral:
      "Mientras Chile subió su impuesto corporativo de 15% a 27%, la OCDE lo bajó de 31% a 22%.",
    fechaDicho: "2026-04-15",
    donde: "Primera cadena nacional presidencial",
    veredicto: "engañoso",
    datoReal:
      "Fast Check revisó el último reporte oficial OCDE: el promedio vigente era 24,1%, no 22%.",
    diferencia: "El dato OCDE fue presentado con una cifra más baja que la oficial vigente",
    fuenteFactCheck: "Fast Check",
    fuenteUrl:
      "https://www.fastcheck.cl/2026/04/18/fact-checking-a-la-primera-cadena-nacional-del-presidente-jose-antonio-kast/",
    cuerpo:
      "El punto de fondo —Chile subió su tasa corporativa desde 2000 mientras el promedio OCDE bajó— tiene base, pero la cifra usada en cadena nacional no correspondía al último reporte oficial. Fast Check lo marcó como incompleto: el promedio OCDE actualizado era 24,1%, no 22%, por lo que la comparación presidencial empujó artificialmente la brecha.",
    reconocio: false,
  },
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
