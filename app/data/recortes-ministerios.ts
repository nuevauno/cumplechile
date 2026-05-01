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
  fecha: "2026-04-30",
  titulo: "Panorama nacional de recomendaciones de Hacienda",
  resumen:
    "La Tercera publicó el mapa nacional: 402 programas bajo lupa, con 260 recomendaciones de rebaja y 142 cierres o reformulaciones. Educación, Desarrollo Social y Salud concentran 150 programas, el 37,3% del total. BioBioChile precisó montos proyectados: PGU lidera con $906 mil millones, seguida por pensiones de reparto, Transporte Público Metropolitano, CAE y SUF. La recomendación escrita sigue existiendo aunque el Gobierno hable de eficiencia y malgasto; Cadem luego registró 59% de rechazo a revisar o eliminar 142 programas.",
  programasDescontinuar: 142,
  programasAjuste: 260,
  montoDescontinuarTexto: "$5,47 billones",
  fuenteUrl:
    "https://www.latercera.com/nacional/noticia/educacion-desarrollo-social-y-salud-tienen-el-37-de-los-402-programas-que-quiroz-sugiere-ajustar-o-descontinuar/",
  fuenteMedio: "La Tercera",
};

export const ALERTAS_RECORTES_MINISTERIOS: AlertaRecorteMinisterio[] = [
  {
    ministerioSlug: "hacienda",
    titulo: "Hacienda: Quiroz baja el perfil, pero el oficio ordena revisar cierres y rebajas",
    resumen:
      "La Tercera cifró en 402 los programas bajo lupa: 260 con ajuste y 142 con cierre o reformulación. Educación, Desarrollo Social y Salud concentran 150 programas, el 37,3% del total. BioBioChile reportó que los recortes proyectados suman $5,4 billones, cerca de US$6.000 millones.",
    fecha: "2026-04-30",
    fuenteUrl:
      "https://www.latercera.com/nacional/noticia/educacion-desarrollo-social-y-salud-tienen-el-37-de-los-402-programas-que-quiroz-sugiere-ajustar-o-descontinuar/",
    fuenteMedio: "La Tercera",
    programasDescontinuar: 142,
    programasAjuste: 260,
    montoTexto: "$5,4 billones proyectados / 402 programas bajo lupa",
    destacados: [
      "Oficio Circular N°16",
      "402 programas bajo lupa",
      "142 recomendaciones de cierre",
      "260 recomendaciones de rebaja",
      "150 en Educación, Desarrollo Social y Salud",
      "PGU: $906 mil millones proyectados",
      "Pensiones de reparto: $321 mil millones",
      "Transporte Público Metropolitano: $178 mil millones",
      "CAE: $134 mil millones",
      "SUF: $101 mil millones",
      "Gratuidad, SUF y Bono Invierno",
      "Ajuste permanente 2027",
      "DIPRES cambia descontinuar por reformular",
      "Cadem: 59% rechaza revisar o eliminar 142 programas",
      "Cadem: 54% rechaza recorte ministerial de 3%",
    ],
    cautela:
      "No equivale a decreto final, pero sí es una instrucción presupuestaria formal enviada desde Hacienda a las carteras. La aclaración posterior de DIPRES no cambia la palabra usada: descontinuar no es lo mismo que reformular.",
  },
  {
    ministerioSlug: "educacion",
    titulo: "Educación: PAE, lectura, reinserción y apoyo a educación pública bajo recomendación de cierre",
    resumen:
      "La Tercera actualizó el mapa: Educación tiene 57 programas bajo lupa, con 42 recomendaciones de ajuste y 15 cierres o reformulaciones. Incluye PAE, Fondo de Apoyo a la Educación Pública, lectura, reinserción, PACE, Liceos Bicentenario, becas y CAE.",
    fecha: "2026-04-30",
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
    titulo: "Trabajo y Previsión: PGU lidera rebajas; BioBio proyecta $906 mil millones",
    resumen:
      "CIPER reportó que Hacienda recomendó rebajar al menos 15% la PGU. BioBioChile agregó que la PGU concentraría la mayor disminución proyectada: $906 mil millones. La lista también incluye pensiones del sistema de reparto, Pensión Básica Solidaria de Invalidez, Bono Invierno, Bono por Hijo, Bono Bodas de Oro y beneficios del IPS.",
    fecha: "2026-04-30",
    fuenteUrl:
      "https://www.biobiochile.cl/noticias/nacional/chile/2026/04/29/el-detalle-de-los-recortes-de-quiroz-cifra-total-llega-a-los-6-mil-millones-que-kast-prometio-ajustar.shtml",
    fuenteMedio: "BioBioChile",
    programasDescontinuar: 3,
    programasAjuste: 26,
    montoTexto: "$906 mil millones proyectados para PGU",
    destacados: [
      "PGU: $906 mil millones proyectados",
      "PGU: $2.962.836 millones ejecutados en 2025",
      "15% sobre 2025: $444.425 millones",
      "Pensiones de reparto: $321 mil millones",
      "Pensión Básica Solidaria de Invalidez: $91 mil millones",
      "2.830.860 beneficiarios proyectados 2026",
      "Promesa de campaña: “Te amo PGU”",
      "Bono Invierno",
      "Bono al Trabajo de la Mujer",
      "Bono Bodas de Oro",
      "Bono por Hijo",
      "Bono de Reconocimiento",
      "Subsidio Familiar",
    ],
    cautela:
      "No equivale a decreto final, pero sí a recomendación presupuestaria formal. Quiroz negó tocar beneficios actuales y habló de fraude social/mal gasto; falta saber si el ahorro se buscará por depuración, requisitos o la expansión legal a 75+ en 2026 y 65+ en 2027.",
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
    titulo: "Salud: 46 programas bajo lupa, con 25 cierres o reformulaciones",
    resumen:
      "La Tercera cifró en 46 los programas de Salud bajo revisión: 21 con ajuste y 25 con cierre o reformulación. El listado se cruza con alertas previas por salud mental, prevención del suicidio, listas de espera, especialistas, VIH, inmunizaciones, APS y tratamientos críticos.",
    fecha: "2026-04-30",
    fuenteUrl:
      "https://www.latercera.com/nacional/noticia/educacion-desarrollo-social-y-salud-tienen-el-37-de-los-402-programas-que-quiroz-sugiere-ajustar-o-descontinuar/",
    fuenteMedio: "La Tercera",
    programasDescontinuar: 25,
    programasAjuste: 21,
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
    titulo: "Vivienda: Poduje rechaza la tijera de Quiroz y firma pavimentos para 16 regiones",
    resumen:
      "El Mostrador reportó que Poduje descartó recortar Pavimentos Participativos y Mejoramiento de Condominios Sociales, ambos sugeridos por Hacienda. La Tercera informó que el ministro firmó proyectos de Pavimentos Participativos para las 16 regiones, pese al oficio de Dipres.",
    fecha: "2026-04-30",
    fuenteUrl:
      "https://www.elmostrador.cl/noticias/pais/2026/04/30/poduje-se-distancia-de-quiroz-se-opone-a-recortes-y-advierte-que-tiene-un-solo-jefe-y-es-kast/",
    fuenteMedio: "El Mostrador",
    montoTexto: "$289 mil millones entre dos programas sugeridos para cierre",
    destacados: [
      "Mejoramiento de Condominios de Vivienda DS27 Capítulo III",
      "Pavimentación Participativa",
      "Proyectos firmados para las 16 regiones",
      "Reconstrucción de Ñuble y Biobío sin fondos al 30 de abril",
      "Poduje: algunas recomendaciones se harán y otras no",
      "Kast intenta bajar el conflicto como discusión de equipo",
    ],
    cautela:
      "La continuidad firmada por Poduje no elimina el anexo de Hacienda: muestra que la recomendación sí llegó a programas concretos y que la decisión final quedó en disputa política dentro del gabinete.",
  },
  {
    ministerioSlug: "energia",
    titulo: "Energía/ENAP: Hacienda pide 70% de utilidades y revisa inversiones",
    resumen:
      "La Tercera reportó que Quiroz pidió a ENAP distribuir 70% de sus utilidades al gobierno central y puso una nota de cautela sobre el plan de inversiones por US$3.800 millones. La estatal venía de utilidades históricas por US$847,8 millones en 2025.",
    fecha: "2026-04-29",
    fuenteUrl:
      "https://www.latercera.com/pulso/noticia/hacienda-pide-a-enap-distribuir-el-70-de-sus-utilidades-al-gobierno-central/",
    fuenteMedio: "La Tercera",
    montoTexto: "70% de utilidades / plan de inversiones por US$3.800 millones bajo revisión",
    destacados: [
      "ENAP: US$847,8 millones de utilidades 2025",
      "70% pedido para el gobierno central",
      "US$3.800 millones en plan de inversiones",
      "Costos estructurales bajo observación",
      "Caja fiscal vía empresa estatal",
    ],
    cautela:
      "No es parte del Oficio Circular N°16 ni una recomendación de cierre programático. Se incluye en el panorama porque responde a la misma lógica de caja fiscal y puede afectar inversión futura de una empresa estatal estratégica.",
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
    titulo: "Justicia/DD.HH.: recorte 2026 ya tomado de razón golpea memoria y reinserción",
    resumen:
      "La Tercera reportó que Contraloría tomó razón del decreto de Dipres que recorta cerca de $46 mil millones en Justicia. La Subsecretaría de DD.HH. cae 9,2%, con $870 millones menos, incluyendo bajas para Sitios de Memoria y Programa de DD.HH.",
    fecha: "2026-04-30",
    fuenteUrl:
      "https://www.latercera.com/nacional/noticia/gobierno-concreta-recorte-del-presupuesto-de-justicia-con-fuerte-reduccion-del-9-en-la-subsecretaria-de-ddhh/",
    fuenteMedio: "La Tercera",
    programasDescontinuar: 1,
    programasAjuste: 1,
    montoTexto: "$46 mil millones aprox. / DD.HH. -9,2%",
    destacados: [
      "Subsecretaría de DD.HH.: $870 millones menos",
      "Sitios de Memoria: $519,6 millones menos en transferencias corrientes",
      "Sitios de Memoria: $280,4 millones menos en transferencias de capital",
      "Programa de DD.HH.: $65,3 millones menos",
      "Reinserción Social Juvenil: $7.600 millones menos",
      "Defensoría Penal Pública: $2.000 millones menos",
      "Servicio Médico Legal: $1.600 millones menos",
      "Programa de Derechos Humanos",
      "PRAIS",
      "Políticas de memoria",
      "Colonia Dignidad",
      "Indultos pasivos",
      "Corporaciones de Asistencia Judicial",
    ],
    cautela:
      "Este recorte 2026 ya fue tomado de razón y corre por una vía distinta al anexo 2027. La solicitud ante CIDH sigue siendo una alerta de organizaciones, no una resolución del organismo.",
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
