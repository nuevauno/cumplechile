export interface AlertaRecorteMinisterio {
  ministerioSlug: string;
  titulo: string;
  resumen: string;
  fecha: string;
  fuenteUrl: string;
  fuenteMedio: string;
  programasDescontinuar?: number;
  programasAjuste?: number;
  montoTexto?: string;
  destacados: string[];
  cautela?: string;
}

export const PANORAMA_RECORTES = {
  fecha: "2026-04-29",
  titulo: "Panorama nacional de recomendaciones de Hacienda",
  resumen:
    "The Clinic reportó recomendaciones de Hacienda para descontinuar 142 programas y rebajar 260. CIPER precisó que las 260 rebajas suman $2,8 billones e incluyen PGU, gratuidad, Bono Invierno, SUF, transporte metropolitano, pensiones y jardines infantiles. El 29 de abril, La Tercera detalló que los ajustes alcanzan 22 ministerios e incluyen Liceos Bicentenario, Mejor Niñez, Chile Te Cuida, MIM, GAM, listas de espera, especialistas, VIH e inmunizaciones. La recomendación escrita sigue existiendo.",
  programasDescontinuar: 142,
  programasAjuste: 260,
  montoDescontinuarTexto: "$5,47 billones",
  fuenteUrl:
    "https://www.latercera.com/nacional/noticia/de-liceos-bicentenario-al-mim-quiroz-tambien-sugirio-recortar-al-menos-un-15-del-presupuesto-de-otros-260-programas/",
  fuenteMedio: "La Tercera",
};

export const ALERTAS_RECORTES_MINISTERIOS: AlertaRecorteMinisterio[] = [
  {
    ministerioSlug: "hacienda",
    titulo: "Hacienda: Quiroz baja el perfil, pero el oficio ordena revisar cierres y rebajas",
    resumen:
      "La Tercera detalló que, además de 142 cierres/reformulaciones, Hacienda recomendó rebajar al menos 15% otros 260 programas en 22 ministerios. Educación lidera con 42, Desarrollo Social con 34, Trabajo con 26, Cultura con 24, y Economía/Salud con 21 cada uno.",
    fecha: "2026-04-29",
    fuenteUrl:
      "https://www.latercera.com/nacional/noticia/de-liceos-bicentenario-al-mim-quiroz-tambien-sugirio-recortar-al-menos-un-15-del-presupuesto-de-otros-260-programas/",
    fuenteMedio: "La Tercera",
    programasDescontinuar: 142,
    programasAjuste: 260,
    montoTexto: "$5,47 billones a descontinuar / $2,8 billones en rebajas",
    destacados: [
      "Oficio Circular N°16",
      "142 recomendaciones de cierre",
      "260 recomendaciones de rebaja",
      "PGU y pensiones en rebaja",
      "Gratuidad, SUF y Bono Invierno",
      "Liceos Bicentenario y becas",
      "Mejor Niñez y Chile Te Cuida",
      "MIM, GAM y museos nacionales",
      "Listas de espera y especialistas",
      "Ajuste permanente 2027",
      "DIPRES cambia descontinuar por reformular",
    ],
    cautela:
      "No equivale a decreto final, pero sí es una instrucción presupuestaria formal enviada desde Hacienda a las carteras. La aclaración posterior de DIPRES no cambia la palabra usada: descontinuar no es lo mismo que reformular.",
  },
  {
    ministerioSlug: "educacion",
    titulo: "Educación: PAE, lectura, reinserción y apoyo a educación pública bajo recomendación de cierre",
    resumen:
      "El anexo de Educación recomienda descontinuar 15 programas, rebajar 42 y mantener 34 sin observaciones. The Clinic detalló $1.838.830 millones en programas a cerrar y $2.586.536 millones en programas con ajuste; La Tercera agregó que los 42 ajustes incluyen Liceos Bicentenario, retención escolar, aporte a universidades estatales, ocho becas, Vocación Profesor, Juan Gómez Millas y CAE.",
    fecha: "2026-04-29",
    fuenteUrl:
      "https://www.latercera.com/nacional/noticia/de-liceos-bicentenario-al-mim-quiroz-tambien-sugirio-recortar-al-menos-un-15-del-presupuesto-de-otros-260-programas/",
    fuenteMedio: "La Tercera",
    programasDescontinuar: 15,
    programasAjuste: 42,
    montoTexto: "$4,43 billones comprometidos",
    destacados: [
      "Programa de Alimentación Escolar (PAE)",
      "Fondo de Apoyo a la Educación Pública",
      "Beca de Apoyo Vocación Profesor",
      "Programa Nacional de Lectura",
      "Reinserción Escolar",
      "Subvención a la Gratuidad",
      "Beca Indígena",
      "PACE",
      "Liceos Bicentenario",
      "Retención escolar",
      "Beca Juan Gómez Millas",
    ],
    cautela:
      "Quiroz dijo que el oficio no es una decisión final ni decreto de gasto; Cataldo respondió que el PAE alimenta diariamente a más de 2,5 millones de estudiantes.",
  },
  {
    ministerioSlug: "trabajo",
    titulo: "Trabajo y Previsión: bonos de invierno, mujer, hijo y bodas de oro entran a rebaja",
    resumen:
      "The Clinic reportó que Hacienda recomendó rebajar beneficios sociales administrados por el mundo laboral y previsional: Bono al Trabajo de la Mujer, Bono Bodas de Oro, Bono Invierno, Bono de Reconocimiento y Bono por Hijo, además de otros apoyos ligados a formalización y Chile Solidario.",
    fecha: "2026-04-24",
    fuenteUrl:
      "https://www.theclinic.cl/2026/04/24/desde-bodas-de-oro-al-bono-por-hijo-los-beneficios-que-hacienda-recomendo-rebajar-o-descontinuar-en-medio-del-ajuste-fiscal/",
    fuenteMedio: "The Clinic",
    programasDescontinuar: 3,
    programasAjuste: 26,
    destacados: [
      "Bono Invierno",
      "Bono al Trabajo de la Mujer",
      "Bono Bodas de Oro",
      "Bono por Hijo",
      "Bono de Reconocimiento",
      "Subsidio Familiar",
    ],
    cautela:
      "El detalle por cartera mezcla beneficios de Trabajo/Previsión y Desarrollo Social; el anexo propio de Trabajo ya registra 3 programas a descontinuar y 26 con ajuste.",
  },
  {
    ministerioSlug: "desarrollo-social",
    titulo: "Desarrollo Social: Quiroz firma recorte vigente de $32.721 millones",
    resumen:
      "BioBioChile reportó que Quiroz firmó una circular que rebaja $32.721 millones del presupuesto vigente de Desarrollo Social. La Tercera agregó que el INJUV pierde $3.859 millones, 47% de su presupuesto disponible, mientras el Gobierno estudia reemplazarlo y funcionarios recurrieron a Contraloría.",
    fecha: "2026-04-29",
    fuenteUrl:
      "https://www.latercera.com/nacional/noticia/gobierno-estudia-crear-nuevo-organismo-en-reemplazo-del-injuv-mientras-funcionarios-recurren-a-contraloria-por-recortes/",
    fuenteMedio: "La Tercera",
    montoTexto: "$32.721 millones de recorte vigente",
    destacados: [
      "Mejor Niñez / ex Sename: $12.748 millones",
      "CONADI: $7.634 millones",
      "INJUV: $3.859 millones",
      "Subsecretaría de la Niñez: $3.359 millones",
      "Senadis y Senama",
      "Ajuar para recién nacidos",
      "Fondo de Tierras y Aguas Indígenas",
      "47% menos para INJUV",
      "Contraloría revisa solicitud de funcionarios",
    ],
    cautela:
      "Este recorte es distinto del anexo 2027 del Oficio N°16: corresponde a modificación del presupuesto vigente y entra en vigor tras toma de razón de Contraloría. El anexo MDS 2027 sigue mostrando además Bono de Graduación, ayudas técnicas, Chile Te Cuida y otros programas bajo recomendación de cierre o rebaja.",
  },
  {
    ministerioSlug: "salud",
    titulo: "Salud: 24 programas de APS, salud mental, demencia y salud trans expuestos",
    resumen:
      "The Clinic reportó que el oficio a Salud pide descontinuar 23 programas de Redes Asistenciales y el Programa Nacional de Prevención del Suicidio. Fenasenf advirtió riesgo para cobertura, listas de espera, dotaciones y tratamientos críticos.",
    fecha: "2026-04-25",
    fuenteUrl:
      "https://www.latercera.com/nacional/noticia/una-senal-de-alerta-federacion-nacional-de-enfermeros-rechaza-propuesta-de-ajustes-presupuestarios-de-hacienda/",
    fuenteMedio: "La Tercera",
    programasDescontinuar: 24,
    montoTexto: "más de $300 mil millones",
    destacados: [
      "Programa Nacional de Prevención del Suicidio",
      "Programa Salud Mental en APS",
      "Hospitalización Domiciliaria",
      "Cuidados Paliativos Universales en APS",
      "Fondo de Farmacia (FOFAR)",
      "Plan Nacional de Demencia",
      "Atención a personas migrantes",
      "Programa PRAIS",
      "Programa de Salud Trans",
    ],
    cautela:
      "The Clinic reporta el monto agregado; La Tercera recogió la alerta gremial del 25 de abril sobre continuidad de tratamientos críticos. Ese mismo día, Jaime Mañalich advirtió que cortar Camas Sociosanitarias u Hospitalización Domiciliaria podría incluso aumentar el gasto.",
  },
  {
    ministerioSlug: "transportes",
    titulo: "Transportes: Transporte Público Regional aparece entre los mayores montos a cerrar",
    resumen:
      "The Clinic ubicó Transporte Público Regional como el tercer programa de mayor gasto entre los sugeridos para descontinuar.",
    fecha: "2026-04-24",
    fuenteUrl:
      "https://www.theclinic.cl/2026/04/24/subvenciones-y-alimentacion-escolar-junto-a-transporte-publico-regional-el-ranking-de-los-diez-programas-con-mayor-gasto-que-hacienda-sugiere-descontinuar/amp/",
    fuenteMedio: "The Clinic",
    montoTexto: "$437 mil millones",
    destacados: ["Transporte Público Regional"],
    cautela:
      "El detalle completo del anexo de Transportes aún no está cargado; el monto proviene del ranking periodístico.",
  },
  {
    ministerioSlug: "obras-publicas",
    titulo: "Obras Públicas: freno al GAM abre costo cultural y fiscal",
    resumen:
      "El País reportó que el MOP paralizó la segunda etapa del Centro Cultural Gabriela Mistral por falta de presupuesto. La decisión deja una obra cultural con 45% de avance, una adjudicación por $114.000 millones en disputa y posibles compensaciones cercanas a $6.000 millones.",
    fecha: "2026-04-28",
    fuenteUrl:
      "https://elpais.com/chile/2026-04-28/el-freno-a-la-ampliacion-del-centro-cultural-gam-le-abre-al-gobierno-de-kast-un-frente-politico-y-cultural.html",
    fuenteMedio: "El País Chile",
    montoTexto: "$114.000 millones adjudicados / $6.000 millones en compensaciones estimadas",
    destacados: [
      "Segunda etapa del GAM",
      "45% de avance heredado",
      "Sala de 2.500 espectadores",
      "Riesgo de deterioro de obra construida",
      "Compensaciones estimadas por Claudio Orrego",
    ],
    cautela:
      "No corresponde al anexo de programas del Oficio N°16; es una decisión MOP por presupuesto y costo de adjudicación. Se incluye porque opera bajo la misma narrativa de austeridad y deja costo fiscal asociado.",
  },
  {
    ministerioSlug: "vivienda",
    titulo: "Vivienda: condominios DS27 y pavimentación participativa entran al top 10",
    resumen:
      "Dos programas del Minvu aparecen entre los mayores montos que Hacienda sugiere descontinuar: Mejoramiento de Condominios de Vivienda y Pavimentación Participativa.",
    fecha: "2026-04-24",
    fuenteUrl:
      "https://www.theclinic.cl/2026/04/24/subvenciones-y-alimentacion-escolar-junto-a-transporte-publico-regional-el-ranking-de-los-diez-programas-con-mayor-gasto-que-hacienda-sugiere-descontinuar/amp/",
    fuenteMedio: "The Clinic",
    montoTexto: "$289 mil millones entre dos programas",
    destacados: [
      "Mejoramiento de Condominios de Vivienda DS27 Capítulo III",
      "Pavimentación Participativa",
    ],
  },
  {
    ministerioSlug: "seguridad-publica",
    titulo: "Seguridad: Hacienda apunta a Crimen Organizado, Calles sin Violencia y cinco rebajas más",
    resumen:
      "The Clinic detalló que Hacienda recomienda descontinuar tres programas del Ministerio de Seguridad: Programa Contra el Crimen Organizado, Calles Sin Violencia e Innovación y Transferencia Técnica Territorial. Además sugiere rebajar cinco programas, entre ellos Denuncia Seguro, Televigilancia, Apoyo a Víctimas y Seguridad Municipal.",
    fecha: "2026-04-24",
    fuenteUrl:
      "https://www.theclinic.cl/2026/04/24/descontinuar-el-programa-contra-el-crimen-organizado-y-calles-sin-violencia-las-recomendaciones-de-hacienda-a-seguridad/",
    fuenteMedio: "The Clinic",
    programasDescontinuar: 3,
    programasAjuste: 5,
    montoTexto: "$98.714 millones a descontinuar en 3 programas",
    destacados: [
      "Programa Contra el Crimen Organizado (PNCO)",
      "Calles Sin Violencia",
      "Innovación y Transferencia Técnica Territorial",
      "Denuncia Seguro",
      "Sistema de Televigilancia",
      "Programa de Apoyo a Víctimas",
      "Sistema Nacional de Seguridad Municipal",
    ],
    cautela:
      "El Mostrador advierte que PNCO financia capacidades contra narcotráfico, Aduanas y PDI, y que Calles Sin Violencia financia equipos ECOH del Ministerio Público.",
  },
  {
    ministerioSlug: "interior",
    titulo: "Interior: SENAPRED y SENDA entran a la lista de descontinuaciones",
    resumen:
      "El Mostrador reportó seis programas de Interior marcados para descontinuar: tres de SENAPRED ligados a simulacros y tres de SENDA, incluyendo Fono Drogas y Alcohol, prevención en espacios sociales y prePARA2 para establecimientos escolares.",
    fecha: "2026-04-24",
    fuenteUrl:
      "https://www.elmostrador.cl/noticias/pais/2026/04/24/crimen-organizado-y-calles-sin-violencia-programas-de-seguridad-que-el-gobierno-busca-desfinanciar/",
    fuenteMedio: "El Mostrador",
    programasDescontinuar: 6,
    montoTexto: "más de $4.800 millones identificados",
    destacados: [
      "Fono drogas y alcohol",
      "prePARA2",
      "Prevención en espacios sociales",
      "Simulacros de borde costero",
      "Simulacros de amenaza volcánica",
      "Simulacros del sector educación",
    ],
    cautela:
      "Los tres programas SENAPRED suman casi $127 millones; para SENDA se reportan montos aproximados por programa.",
  },
  {
    ministerioSlug: "justicia",
    titulo: "Justicia/DD.HH.: Programa de Derechos Humanos y asistencia judicial bajo presión",
    resumen:
      "The Clinic reportó que a la Subsecretaría de Derechos Humanos se le recomendó descontinuar el Programa de Derechos Humanos. La Tercera agregó que más de 80 organizaciones pidieron a la CIDH requerir información al Estado por recortes, PRAIS, debilitamiento de políticas de memoria e indultos pasivos.",
    fecha: "2026-04-29",
    fuenteUrl:
      "https://www.latercera.com/nacional/noticia/organizaciones-de-ddhh-solicitan-a-comision-interamericana-pedir-informacion-al-estado-de-chile-por-desmantelamiento/",
    fuenteMedio: "La Tercera",
    programasDescontinuar: 1,
    programasAjuste: 1,
    montoTexto: "$68 mil millones en asistencia judicial reportados por prensa",
    destacados: [
      "Programa de Derechos Humanos",
      "PRAIS",
      "Políticas de memoria",
      "Colonia Dignidad",
      "Indultos pasivos",
      "Corporaciones de Asistencia Judicial",
    ],
    cautela:
      "La recomendación sobre CAJ proviene de circulares difundidas públicamente y requiere anexo completo para separar gasto ejecutado de monto de rebaja. La solicitud ante CIDH es una alerta de organizaciones, no una resolución del organismo.",
  },
  {
    ministerioSlug: "ciencia",
    titulo: "Ciencia: becas de postgrado, Milenio, Fondequip y PIA en zona de cierre",
    resumen:
      "El Mostrador reportó recomendaciones para descontinuar Becas de Postgrado en Chile ($68.628 millones), Becas de Postgrado en el Extranjero ($32.145 millones), Iniciativa Científica Milenio ($19.723 millones), Fondequip y PIA. El flanco ya venía abierto por la suspensión/matización de Becas Chile para magíster y postdoctorado al extranjero.",
    fecha: "2026-04-24",
    fuenteUrl:
      "https://www.elmostrador.cl/noticias/pais/2026/04/24/eliminacion-de-programas-en-ciencia-apunta-al-corazon-del-sistema-la-formacion-de-capital-humano/",
    fuenteMedio: "El Mostrador",
    montoTexto: "más de $168 mil millones identificados",
    destacados: [
      "Becas de Postgrado en Chile",
      "Becas de Postgrado en el Extranjero",
      "Iniciativa Científica Milenio",
      "Fondequip",
      "Programa de Investigación Asociativa",
    ],
    cautela:
      "Fast Check verificó que Lincolao dijo primero que se reducirían becas de magíster y postdoctorado en el extranjero, y luego sostuvo que no era una decisión zanjada.",
  },
  {
    ministerioSlug: "medio-ambiente",
    titulo: "Medio Ambiente: especies, humedales, educación ambiental y ruidos expuestos",
    resumen:
      "El Mostrador reportó cinco programas con recomendación de cierre: Conservación de Especies, certificación ambiental escolar, humedales, suelos contaminados y fiscalización de ruidos. La alerta crece porque Kast y Poduje abrieron una ofensiva contra la Ley de Humedales mientras expertos advierten riesgos estructurales y fiscales de construir sin criterio ambiental.",
    fecha: "2026-04-28",
    fuenteUrl:
      "https://www.latercera.com/nacional/noticia/poduje-contra-todos-ofensiva-por-ley-de-humedales-tensiona-al-oficialismo-y-reabre-debate-por-viviendas-en-valdivia/",
    fuenteMedio: "La Tercera",
    montoTexto: "$1.305 millones aproximados en programas ambientales",
    destacados: [
      "Conservación de Especies",
      "SNCAE",
      "Humedales",
      "Suelos contaminados",
      "Fiscalización de ruidos",
      "Ley de Humedales bajo ofensiva",
    ],
    cautela:
      "El recorte programático proviene del anexo ambiental reportado por El Mostrador; la controversia de humedales corresponde al debate Minvu/Kast reportado por La Tercera.",
  },
  {
    ministerioSlug: "secretaria-general-gobierno",
    titulo: "Segegob: Hacienda propone terminar el fondo del CNTV",
    resumen:
      "The Clinic reportó que Hacienda recomendó terminar con el fondo del Consejo Nacional de Televisión, instrumento que ha financiado contenidos como 31 Minutos, Los 80, Una historia necesaria y Wow Lisa.",
    fecha: "2026-04-24",
    fuenteUrl:
      "https://www.theclinic.cl/2026/04/24/fin-al-fondo-del-cntv-hacienda-propone-ministerio-secretaria-general-de-gobierno-descontinuar-fondo-que-permitio-programas-como-31-minutos-o-los-80/amp/",
    fuenteMedio: "The Clinic",
    montoTexto: "$5.650 millones",
    destacados: ["Fondo del Consejo Nacional de Televisión (CNTV)"],
    cautela:
      "Segpres, no Segegob, aparece como una de las dos carteras sin observaciones en el recuento nacional.",
  },
  {
    ministerioSlug: "culturas",
    titulo: "Culturas: recorte efectivo de $51.750 millones y patrimonio bajo tijera",
    resumen:
      "The Clinic reportó primero que el anexo de Hacienda a Culturas recomienda descontinuar 10 programas y aplicar ajustes por más de $77 mil millones. El 27 de abril agregó que Hacienda ya ingresó a Contraloría modificaciones por $51.750 millones, casi 10% del presupuesto aprobado, y que tres programas quedan sin recursos.",
    fecha: "2026-04-27",
    fuenteUrl:
      "https://www.theclinic.cl/2026/04/27/hacienda-concreta-recorte-a-ministerio-de-las-culturas-por-51-750-millones-tres-programas-quedan-sin-recursos-tras-ajuste-presupuestario/",
    fuenteMedio: "The Clinic",
    programasDescontinuar: 10,
    montoTexto: "$51.750 millones ya ingresados a Contraloría",
    destacados: [
      "Infraestructura Cultural sin recursos",
      "Somos Barrio sin recursos",
      "Artistas del Acero sin recursos",
      "Bibliomás",
      "Programa de Sitios de Patrimonio Mundial",
      "Biblioteca Pública Digital",
      "Escuelas de Rock",
      "Orquestas FOJI",
    ],
    cautela:
      "El anexo 2027 sigue siendo recomendación presupuestaria; el recorte de $51.750 millones corresponde a modificaciones 2026 ingresadas a Contraloría.",
  },
];

export const alertasByMinisterio = (ministerioSlug: string) =>
  ALERTAS_RECORTES_MINISTERIOS.filter((a) => a.ministerioSlug === ministerioSlug);
