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
  fecha: "2026-04-27",
  titulo: "Panorama nacional de recomendaciones de Hacienda",
  resumen:
    "The Clinic reportó recomendaciones de Hacienda para descontinuar 142 programas y rebajar 260. Emol consignó que el oficio se envió a 22 ministerios y Quiroz intentó separar oficio de decisión final. El 27 de abril, BioBioChile volvió a resumir la controversia como un ajuste permanente de hasta $5,4 billones para 2027. La recomendación escrita sigue existiendo.",
  programasDescontinuar: 142,
  programasAjuste: 260,
  montoDescontinuarTexto: "$5,47 billones",
  fuenteUrl:
    "https://www.theclinic.cl/2026/04/24/descontinuar-142-programas-y-rebajar-presupuesto-en-otros-260-las-recomendaciones-de-hacienda-a-ministerios-para-recortar-mas-de-6-mil-millones-de-dolares/",
  fuenteMedio: "The Clinic",
};

export const ALERTAS_RECORTES_MINISTERIOS: AlertaRecorteMinisterio[] = [
  {
    ministerioSlug: "hacienda",
    titulo: "Hacienda: Quiroz baja el perfil, pero el oficio ordena revisar cierres y rebajas",
    resumen:
      "Emol recogió la defensa de Quiroz: el oficio no sería una decisión de terminar programas. El problema político es que el mismo documento activó una revisión con 142 recomendaciones de descontinuar y 260 de rebajar, usada por los ministerios como base del ajuste 2027.",
    fecha: "2026-04-25",
    fuenteUrl:
      "https://www.emol.com/noticias/Economia/2026/04/25/1198242/oficios-hacienda-recorte-presupuesto.html",
    fuenteMedio: "Emol",
    programasDescontinuar: 142,
    programasAjuste: 260,
    montoTexto: "$5,47 billones en programas a descontinuar",
    destacados: [
      "Oficio Circular N°16",
      "142 recomendaciones de cierre",
      "260 recomendaciones de rebaja",
      "Ajuste permanente 2027",
    ],
    cautela:
      "No equivale a decreto final, pero sí es una instrucción presupuestaria formal enviada desde Hacienda a las carteras.",
  },
  {
    ministerioSlug: "educacion",
    titulo: "Educación: PAE, lectura, reinserción y apoyo a educación pública bajo recomendación de cierre",
    resumen:
      "El anexo de Educación recomienda descontinuar 15 programas, rebajar 42 y mantener 34 sin observaciones. The Clinic detalló $1.838.830 millones en programas a cerrar y $2.586.536 millones en programas con ajuste; Quiroz negó recortes alimentarios y de becas, pero la recomendación escrita sigue en el oficio.",
    fecha: "2026-04-25",
    fuenteUrl:
      "https://www.theclinic.cl/2026/04/24/presupuesto-2027-gobierno-recomienda-a-educacion-eliminar-15-programas-como-el-de-alimentacion-escolar-y-la-beca-de-apoyo-vocacion-profesor/",
    fuenteMedio: "The Clinic",
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
    titulo: "Desarrollo Social: Bono de Graduación y subsidio de tierras indígenas bajo tijera",
    resumen:
      "Además del anexo MDS ya cargado, The Clinic identificó el Bono de Graduación de Cuarto Medio como transferencia con recomendación de término y ubicó el Fondo de Tierras y Aguas Indígenas de CONADI entre los diez mayores programas sugeridos para descontinuar.",
    fecha: "2026-04-24",
    fuenteUrl:
      "https://www.theclinic.cl/2026/04/24/subvenciones-y-alimentacion-escolar-junto-a-transporte-publico-regional-el-ranking-de-los-diez-programas-con-mayor-gasto-que-hacienda-sugiere-descontinuar/",
    fuenteMedio: "The Clinic",
    montoTexto: "$72 mil millones en Fondo de Tierras",
    destacados: [
      "Fondo de Tierras y Aguas Indígenas",
      "Bono de Graduación de Cuarto Medio",
      "Bono Logro Escolar",
      "Bono Protección",
      "Bono Egreso Chile Solidario",
    ],
    cautela:
      "La cifra de $72 mil millones corresponde al ranking periodístico del programa CONADI; el anexo MDS completo del sitio mantiene el detalle programa por programa.",
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
      "The Clinic reportó que a la Subsecretaría de Derechos Humanos se le recomendó descontinuar el Programa de Derechos Humanos. El Ciudadano, citando circulares filtradas, agregó una rebaja de $68 mil millones a las Corporaciones de Asistencia Judicial.",
    fecha: "2026-04-24",
    fuenteUrl:
      "https://www.theclinic.cl/2026/04/24/descontinuar-142-programas-y-rebajar-presupuesto-en-otros-260-las-recomendaciones-de-hacienda-a-ministerios-para-recortar-mas-de-6-mil-millones-de-dolares/",
    fuenteMedio: "The Clinic",
    programasDescontinuar: 1,
    programasAjuste: 1,
    montoTexto: "$68 mil millones en asistencia judicial reportados por prensa",
    destacados: ["Programa de Derechos Humanos", "Corporaciones de Asistencia Judicial"],
    cautela:
      "La recomendación sobre CAJ proviene de circulares difundidas públicamente y requiere anexo completo para separar gasto ejecutado de monto de rebaja.",
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
      "El Mostrador reportó cinco programas con recomendación de cierre: Conservación de Especies, Sistema Nacional de Certificación Ambiental de Establecimientos Educacionales, humedales, suelos contaminados y fiscalización de ruidos. Suman cerca de $1.305 millones.",
    fecha: "2026-04-24",
    fuenteUrl:
      "https://www.elmostrador.cl/noticias/pais/2026/04/24/recortes-a-medio-ambiente-golpea-base-de-la-proteccion-ambiental-incluida-conservacion-de-especies/",
    fuenteMedio: "El Mostrador",
    montoTexto: "$1.305 millones aproximados",
    destacados: [
      "Conservación de Especies",
      "SNCAE",
      "Humedales",
      "Suelos contaminados",
      "Fiscalización de ruidos",
    ],
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
    titulo: "Culturas: patrimonio, Bibliomás, FOJI y fondos culturales bajo tijera",
    resumen:
      "The Clinic reportó que el anexo de Hacienda a Culturas recomienda descontinuar 10 programas y aplicar ajustes a otros, con un recorte total sugerido superior a $77 mil millones.",
    fecha: "2026-04-24",
    fuenteUrl:
      "https://www.theclinic.cl/2026/04/24/la-recomendacion-de-hacienda-culturas-programas/",
    fuenteMedio: "The Clinic",
    programasDescontinuar: 10,
    montoTexto: "$77.893 millones",
    destacados: [
      "Bibliomás",
      "Programa de Sitios de Patrimonio Mundial",
      "Biblioteca Pública Digital",
      "Escuelas de Rock",
      "Orquestas FOJI",
    ],
    cautela:
      "La recomendación no constituye cierre inmediato; depende del proceso presupuestario y de la decisión final del Ejecutivo.",
  },
];

export const alertasByMinisterio = (ministerioSlug: string) =>
  ALERTAS_RECORTES_MINISTERIOS.filter((a) => a.ministerioSlug === ministerioSlug);
