import type { Decision } from "./types";
import { PROGRAMAS_MDSYF } from "./programas";

const totalDescontinuados = PROGRAMAS_MDSYF.filter((p) => p.recomendacion === "descontinuar").length;
const totalAjuste = PROGRAMAS_MDSYF.filter((p) => p.recomendacion === "ajuste").length;
const montoDescontinuado = PROGRAMAS_MDSYF
  .filter((p) => p.recomendacion === "descontinuar")
  .reduce((sum, p) => sum + p.montoEjecutado2025MilesCLP, 0);

export const DECISIONES: Decision[] = [
  {
    slug: "hacienda-recorta-mas-de-6-mil-millones-usd",
    titulo: "Hacienda instruye descontinuar 142 programas y rebajar 260 mas en el ajuste fiscal 2027-2031",
    resumen:
      "El Ministerio de Hacienda envio el Oficio Circular N°16 a todos los ministerios fijando un Marco de Mediano Plazo restrictivo para 2027-2031. La instruccion ordena formular el presupuesto 2027 con techo en el nivel 2026 descontando ajustes ya hechos, y prioriza obligaciones legales por sobre programas. El recorte total proyectado supera los US$6.000 millones a nivel pais.",
    fecha: "2026-04-21",
    etiqueta: "malo",
    severidad: 4,
    documentoSlugs: ["oficio-circular-16-hacienda-2026"],
    fuenteUrls: [
      {
        url: "https://www.theclinic.cl/2026/04/24/descontinuar-142-programas-y-rebajar-presupuesto-en-otros-260-las-recomendaciones-de-hacienda-a-ministerios-para-recortar-mas-de-6-mil-millones-de-dolares/",
        medio: "The Clinic",
        titulo: "Descontinuar 142 programas y rebajar presupuesto en otros 260: las recomendaciones de Hacienda a ministerios para recortar mas de US$6.000 millones",
      },
    ],
    cuerpo:
      "El oficio firmado por el Ministro de Hacienda Jorge Quiroz Castro instruye a los 24 ministerios formular sus presupuestos 2027 dentro de un nuevo Marco de Mediano Plazo (MMP) 2027-2031, vinculante y restrictivo. La regla central: el nivel de gasto de cada año tendra como techo maximo el presupuesto 2026 descontados los dos ajustes fiscales ya implementados ese mismo año.\n\nEl criterio aplicado va programa por programa. Cada uno recibe una de tres clasificaciones: 'descontinuar', 'ajuste presupuestario' (rebaja de al menos 15%) o 'sin observaciones'. La metodologia mezcla las recomendaciones de la Comision para Reformas Estructurales del Gasto Publico, evaluaciones ex ante y ex post de DIPRES y los datos de no-reporte al Registro de Informacion Social.\n\nEl alcance es transversal pero el primer anexo conocido — el de Desarrollo Social y Familia — muestra recortes profundos sobre programas que llegan a poblaciones especialmente vulnerables: niñez, discapacidad, pueblos indigenas, adultos mayores y personas en situacion de calle.",
    ministerioSlug: "hacienda",
  },
  {
    slug: "mds-recortes-anexo-21-programas-descontinuados",
    titulo: `Desarrollo Social: ${totalDescontinuados} programas a descontinuar y ${totalAjuste} con rebaja de al menos 15%`,
    resumen:
      `El anexo del Oficio Circular N°16 detalla el ajuste sobre los 105 programas del MDSyF. Se ordena descontinuar ${totalDescontinuados} programas (entre ellos 8 de CONADI, Ayudas Tecnicas para discapacidad de SENADIS, el Bono de Graduacion de Cuarto Medio e Innova FOSIS) y rebajar al menos 15% otros ${totalAjuste}, incluidos Chile Te Cuida, Pago a Cuidadores de Personas con Discapacidad, Subsidio Calefaccion, Vivienda Primero y Oficina Local de la Niñez.`,
    fecha: "2026-04-22",
    etiqueta: "malo",
    severidad: 4,
    ministerioSlug: "desarrollo-social",
    documentoSlugs: ["oficio-circular-16-hacienda-2026"],
    fuenteUrls: [
      {
        url: "https://drive.google.com/file/d/1jZ9wrYpQWnQ0fekMLJxvLoalmBfeUmX1/view",
        medio: "Documento publico",
        titulo: "Anexo MDS — Recomendaciones por servicio (PDF)",
      },
    ],
    cuerpo:
      `De los ${PROGRAMAS_MDSYF.length} programas del Ministerio de Desarrollo Social y Familia, ${totalDescontinuados} reciben recomendacion de descontinuar y ${totalAjuste} de ajuste presupuestario de al menos 15%. La afectacion es transversal: golpea a CONADI (8 de 17 programas a descontinuar), SENADIS (2 descontinuados, 2 ajuste), Mejor Niñez (8 con ajuste sobre 24 programas), SENAMA (3 ajustes sobre 7), y especialmente a la Subsecretaria de Servicios Sociales con 13 ajustes y 2 descontinuaciones sobre 27 programas.\n\nEntre los recortados destacan programas con beneficiarios identificables: el Bono de Graduacion de Cuarto Medio se descontinua, las Ayudas Tecnicas de SENADIS (apoyos para personas con discapacidad) se eliminan, Chile Te Cuida sufre ajuste, el Plan de Invierno Noche Digna (rebautizado Protege Calle) recibe rebaja, y la Oficina Local de la Niñez ve recortado su presupuesto pese a haber sido bandera del sistema de proteccion infantil. El monto ejecutado 2025 de los programas a descontinuar suma aproximadamente CLP$${(montoDescontinuado / 1_000_000).toFixed(1)} mil millones.`,
  },
];
