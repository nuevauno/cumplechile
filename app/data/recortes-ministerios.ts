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
  fecha: "2026-04-24",
  titulo: "Panorama nacional de recomendaciones de Hacienda",
  resumen:
    "The Clinic reportó que Hacienda hizo recomendaciones a 23 ministerios: 142 programas a descontinuar y 260 con rebaja presupuestaria. Solo Defensa y Segpres aparecen sin observaciones en ese recuento.",
  programasDescontinuar: 142,
  programasAjuste: 260,
  montoDescontinuarTexto: "$5,47 billones",
  fuenteUrl:
    "https://www.theclinic.cl/2026/04/24/descontinuar-142-programas-y-rebajar-presupuesto-en-otros-260-las-recomendaciones-de-hacienda-a-ministerios-para-recortar-mas-de-6-mil-millones-de-dolares/",
  fuenteMedio: "The Clinic",
};

export const ALERTAS_RECORTES_MINISTERIOS: AlertaRecorteMinisterio[] = [
  {
    ministerioSlug: "educacion",
    titulo: "Educación: PAE, lectura, reinserción y apoyo a educación pública bajo recomendación de cierre",
    resumen:
      "El anexo de Educación recomienda descontinuar 15 programas, rebajar 42 y mantener 34 sin observaciones. La Tercera y Emol destacaron el PAE, el Fondo de Apoyo a la Educación Pública y el Programa Nacional de Lectura.",
    fecha: "2026-04-24",
    fuenteUrl:
      "https://www.latercera.com/nacional/noticia/presupuesto-2027-hacienda-imparte-estrictas-instrucciones-a-los-ministerios-y-sugiere-al-mineduc-descontinuar-15-programas/",
    fuenteMedio: "La Tercera",
    programasDescontinuar: 15,
    programasAjuste: 42,
    destacados: [
      "Programa de Alimentación Escolar (PAE)",
      "Fondo de Apoyo a la Educación Pública",
      "Programa Nacional de Lectura",
      "Reinserción Escolar",
      "PACE",
    ],
    cautela:
      "Quiroz dijo el 24 de abril que el oficio no es aún una decisión final ni decreto de gasto.",
  },
  {
    ministerioSlug: "salud",
    titulo: "Salud: 24 programas de APS, salud mental, demencia y salud trans expuestos",
    resumen:
      "The Clinic reportó que el oficio a Salud pide descontinuar 23 programas de Redes Asistenciales y el Programa Nacional de Prevención del Suicidio en Salud Pública. También habría decenas de rebajas, incluyendo inmunizaciones, VIH/ETS y atención domiciliaria.",
    fecha: "2026-04-24",
    fuenteUrl:
      "https://www.theclinic.cl/2026/04/24/los-23-programas-que-hacienda-pidio-descontinuar-en-el-ministerio-de-salud-atencion-a-personas-migrantes-prevencion-del-suicidio-salud-trans-y-de-acompanamiento-de-genero/amp/",
    fuenteMedio: "The Clinic",
    programasDescontinuar: 24,
    montoTexto: "más de $300 mil millones",
    destacados: [
      "Programa Nacional de Prevención del Suicidio",
      "Programa Salud Mental en APS",
      "Hospitalización Domiciliaria",
      "Cuidados Paliativos Universales en APS",
      "Fondo de Farmacia (FOFAR)",
      "Programa de Salud Trans",
    ],
    cautela:
      "The Clinic reporta el monto agregado; los montos programa por programa aún no están completos en la base local.",
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
    titulo: "Seguridad: Calles sin Violencia y Crimen Organizado aparecen en la lista",
    resumen:
      "The Clinic reportó recomendaciones para descontinuar Calles sin Violencia y el Programa contra el Crimen Organizado, pese a que seguridad es el eje central del discurso presidencial.",
    fecha: "2026-04-24",
    fuenteUrl:
      "https://www.theclinic.cl/2026/04/24/descontinuar-142-programas-y-rebajar-presupuesto-en-otros-260-las-recomendaciones-de-hacienda-a-ministerios-para-recortar-mas-de-6-mil-millones-de-dolares/",
    fuenteMedio: "The Clinic",
    montoTexto: "$70 mil millones solo en Crimen Organizado",
    destacados: ["Calles sin Violencia", "Programa Contra el Crimen Organizado"],
  },
  {
    ministerioSlug: "justicia",
    titulo: "Justicia/DD.HH.: Programa de Derechos Humanos bajo recomendación de cierre",
    resumen:
      "The Clinic reportó que a la Subsecretaría de Derechos Humanos se le recomendó descontinuar el Programa de Derechos Humanos.",
    fecha: "2026-04-24",
    fuenteUrl:
      "https://www.theclinic.cl/2026/04/24/descontinuar-142-programas-y-rebajar-presupuesto-en-otros-260-las-recomendaciones-de-hacienda-a-ministerios-para-recortar-mas-de-6-mil-millones-de-dolares/",
    fuenteMedio: "The Clinic",
    destacados: ["Programa de Derechos Humanos"],
  },
  {
    ministerioSlug: "ciencia",
    titulo: "Ciencia: Becas Chile al extranjero y becas científicas en zona de cierre",
    resumen:
      "The Clinic reportó recomendaciones para descontinuar más de $68 mil millones en becas en Chile y $32 mil millones para becas en el extranjero. El flanco ya venía abierto por la suspensión/matización de Becas Chile para magíster y postdoctorado al extranjero.",
    fecha: "2026-04-24",
    fuenteUrl:
      "https://www.theclinic.cl/2026/04/24/descontinuar-142-programas-y-rebajar-presupuesto-en-otros-260-las-recomendaciones-de-hacienda-a-ministerios-para-recortar-mas-de-6-mil-millones-de-dolares/",
    fuenteMedio: "The Clinic",
    montoTexto: "más de $100 mil millones",
    destacados: ["Becas en Chile", "Becas en el extranjero", "Becas Chile magíster y postdoctorado"],
    cautela:
      "Fast Check verificó que Lincolao dijo primero que se reducirían becas de magíster y postdoctorado en el extranjero, y luego sostuvo que no era una decisión zanjada.",
  },
  {
    ministerioSlug: "medio-ambiente",
    titulo: "Medio Ambiente: Conservación de Especies y Bosques Nativos expuesto",
    resumen:
      "The Clinic reportó que el programa de Conservación de Especies y Bosques Nativos podría ser descontinuado.",
    fecha: "2026-04-24",
    fuenteUrl:
      "https://www.theclinic.cl/2026/04/24/descontinuar-142-programas-y-rebajar-presupuesto-en-otros-260-las-recomendaciones-de-hacienda-a-ministerios-para-recortar-mas-de-6-mil-millones-de-dolares/",
    fuenteMedio: "The Clinic",
    destacados: ["Conservación de Especies y Bosques Nativos"],
  },
  {
    ministerioSlug: "secretaria-general-gobierno",
    titulo: "Segegob: Hacienda propone terminar el fondo del CNTV",
    resumen:
      "The Clinic reportó que Hacienda recomendó terminar con el fondo del Consejo Nacional de Televisión, instrumento que ha financiado contenidos como 31 Minutos y Los 80.",
    fecha: "2026-04-24",
    fuenteUrl:
      "https://www.theclinic.cl/2026/04/24/estamos-dando-una-orientacion-de-en-que-fijarse-para-lo-que-viene-en-el-futuro-quiroz-aborda-oficio-enviado-a-ministerios-con-142-programas-a-descontinuar/amp/",
    fuenteMedio: "The Clinic",
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
