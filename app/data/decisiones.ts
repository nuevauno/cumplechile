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
    slug: "educacion-pae-descontinuado",
    titulo: "Educacion: el Programa de Alimentacion Escolar (PAE) marcado para descontinuar",
    resumen:
      "El anexo de Educacion del Oficio Circular N°16 instruye descontinuar el Programa de Alimentacion Escolar (PAE), que ejecuto $1,06 billones de pesos en 2025 y entrega desayuno y almuerzo a estudiantes vulnerables en establecimientos publicos. Es la decision con mayor monto ejecutado entre todos los programas marcados para eliminar en el ajuste fiscal.",
    fecha: "2026-04-22",
    etiqueta: "malo",
    severidad: 4,
    ministerioSlug: "educacion",
    documentoSlugs: ["anexo-educacion-recortes", "oficio-circular-16-hacienda-2026"],
    fuenteUrls: [],
    cuerpo:
      "El anexo programatico de Educacion del Oficio Circular N°16 marca al Programa de Alimentacion Escolar (PAE) de JUNAEB como 'descontinuar'. El programa entrega comida a niños y jovenes en condicion de vulnerabilidad escolar y ejecuto $1.061 mil millones de pesos en 2025 — es el programa con mayor monto ejecutado entre todos los marcados para eliminar a nivel pais.\n\nJunto con el PAE, Educacion descontinua otros 14 programas: el Fondo de Apoyo a la Educacion Publica ($167 mil millones), el Sistema Nacional de Induccion y Mentoria docente, la Beca PACE de acceso a la educacion superior, el Plan Nacional de Lectura, el Plan Nacional de Escritura, el Plan de Fortalecimiento de las Artes en el Sistema Educativo, la Beca de Apoyo Vocacion de Profesor, Reinsercion Escolar, Escuela Para Directivos, Promocion de Talentos en Escuelas y Liceos, la Beca Distincion a las Trayectorias Educativas (Ex Beca Puntaje PSU), el Programa de Acompañamiento PACE, Otras Subvenciones Escolares ($556 mil millones), el Jardin Infantil Transitorio Estacional y Actividades de Interes Nacional. Otros 42 programas reciben rebaja de al menos -15%, incluido el Credito con Aval del Estado (CAE) y la Subvencion Gratuidad.",
  },
  {
    slug: "trabajo-bono-invierno-rebajado",
    titulo: "Trabajo: rebaja al Bono Invierno y eliminacion del Programa de Empleabilidad Sostenible",
    resumen:
      "El anexo de Trabajo y Prevision Social aplica ajuste -15% al Bono Invierno ($318.660 millones ejecutados en 2025), al Subsidio Familiar (SUF), al Bono al Trabajo de la Mujer y a las pensiones del sistema de reparto. Tres programas se descontinuan: las Becas del Fondo de Cesantia Solidario, Inversion en la Comunidad y el Programa de Fomento a la Empleabilidad Sostenible (PROFES).",
    fecha: "2026-04-22",
    etiqueta: "malo",
    severidad: 3,
    ministerioSlug: "trabajo",
    documentoSlugs: ["anexo-trabajo-recortes", "oficio-circular-16-hacienda-2026"],
    fuenteUrls: [],
    cuerpo:
      "El anexo programatico del Ministerio del Trabajo y Prevision Social del Oficio Circular N°16 cataloga 35 programas en 5 servicios. La decision politicamente mas visible es la rebaja al Bono Invierno: el subsidio que reciben pensionados de menores ingresos durante los meses frios queda incluido en la lista de ajuste presupuestario de al menos -15%.\n\nTambien se rebajan el Subsidio Familiar (SUF) que beneficia a familias vulnerables, el Aporte Familiar Permanente, el Bono al Trabajo de la Mujer del SENCE, las Pensiones del Sistema de Reparto, las Leyes Reparatorias de Derechos Humanos, el Bono por Hijo, el Bono Bodas de Oro, el Bono de Reconocimiento, el Subsidio Previsional a Trabajadores Jovenes y el Subsidio de Discapacidad.\n\nSe descontinuan tres programas: las Becas del Fondo de Cesantia Solidario (BFCS) del SENCE, el programa Inversion en la Comunidad ($135.233 millones ejecutados en 2025) y el Programa de Fomento a la Empleabilidad Sostenible (PROFES, ex Apoyo al Empleo Ley 20.595 y Sistema Chile Solidario), que apoyaba la insercion laboral de personas en situacion de vulnerabilidad.",
  },
  {
    slug: "economia-corfo-fomento-cortado",
    titulo: "Economia: CORFO descontinua 8 programas y SERCOTEC otros 4",
    resumen:
      "El anexo de Economia, Fomento y Turismo afecta principalmente a CORFO (8 programas a descontinuar incluido el Comite de Desarrollo y Fomento Indigena, Fomento a la Calidad, Activa Riego y la Red de Asistencia Digital) y a SERCOTEC (4 a descontinuar). Tambien se eliminan Digitaliza tu Pyme y el Observatorio de Datos Economicos. La Subsecretaria de Mineria queda dentro del mismo ministerio bajo el biministro Daniel Mas.",
    fecha: "2026-04-22",
    etiqueta: "malo",
    severidad: 2,
    ministerioSlug: "economia",
    documentoSlugs: ["anexo-economia-recortes", "oficio-circular-16-hacienda-2026"],
    fuenteUrls: [],
    cuerpo:
      "El anexo del Ministerio de Economia, Fomento y Turismo cubre 8 servicios: Comite Innova Chile, CORFO, INDESPA, SERNAPESCA, SERNATUR, SERCOTEC, Subsecretarias de Economia y de Turismo. Es uno de los anexos mas voluminosos por la cantidad de programas de fomento productivo que cataloga.\n\nLa decision con mayor impacto es sobre CORFO: 8 programas a descontinuar (Comite de Desarrollo y Fomento Indigena, Fomento a la Calidad, REDES - Red Tecnologica Silvoagropecuaria GTT+, Red Asociativa AGRO+, Red de Fomento Sostenible, Programa Red de Asistencia Digital, Activa Riego e Invierte) y otros 9 con ajuste de -15% incluido el Refinanciamiento Verde Sustentable, el Credito Mipyme y los Programas Tecnologicos Estrategicos.\n\nSERCOTEC pierde 4 programas (Mejora Negocios, Promocion y Canales de Comercializacion, Redes de Oportunidades de Negocios, Servicios Virtuales) y otros 5 con rebaja. La Subsecretaria de Economia descontinua Digitaliza tu Pyme y el Observatorio de Datos Economicos. INDESPA descontinua el Programa de Bonificacion para Cultivo y Repoblamiento de Algas. Innova Chile descontinua Sumate a Innovar.",
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
  {
    slug: "bencinazo-marzo-2026",
    titulo: "Bencinazo: alza historica de combustibles entra en vigor",
    resumen:
      "Quiroz anuncia el 23-mar y el 26-mar entran en vigor: bencina 93 octanos +$372/L, bencina 97 +$391/L, diesel +$580/L. La oposicion lo bautiza “bencinazo”. La Cadem siguiente registra una caida de 6 puntos en la aprobacion del Presidente.",
    fecha: "2026-03-26",
    etiqueta: "malo",
    severidad: 4,
    ministerioSlug: "hacienda",
    documentoSlugs: [],
    fuenteUrls: [
      {
        url: "https://www.biobiochile.cl/noticias/nacional/chile/2026/03/26/se-concreta-historica-alza-de-combustibles-revisa-aqui-el-precio-de-gasolinas-y-diesel.shtml",
        medio: "BioBioChile",
        titulo: "Se concreta historica alza de combustibles",
      },
      {
        url: "https://www.elmostrador.cl/noticias/pais/2026/03/24/bencinazo-de-quiroz-desata-fuerte-choque-politico-por-alzas-y-costo-social/",
        medio: "El Mostrador",
        titulo: "Bencinazo de Quiroz desata fuerte choque politico por alzas y costo social",
      },
    ],
    cuerpo:
      "El 23 de marzo el ministro de Hacienda Jorge Quiroz anuncio que el precio internacional del diesel habia subido 60% y la gasolina 30% en tres semanas, justificando la actualizacion del Mecanismo de Estabilizacion del Precio de los Combustibles (MEPCO). Los nuevos precios entraron en vigor el 26 de marzo. Como compensacion, el Gobierno congelo la tarifa del bus RED en la Region Metropolitana hasta diciembre 2026.\n\nLa decision precipito la primera contradiccion publica del gabinete: la pieza grafica del Gobierno justificando la medida hablaba de un “Estado en quiebra”, frase que el propio ministro Quiroz nego haber usado al dia siguiente. Contraloria pidio explicaciones a la vocera Sedini. La aprobacion presidencial cayo de 53% (13-mar) a 45% (30-mar) segun Cadem.",
  },
  {
    slug: "almuerzo-la-moneda-mea-culpa",
    titulo: "Almuerzo en La Moneda con 70 excompañeros: Contraloria abre expediente y Kast pide disculpas",
    resumen:
      "El 10-abr Kast almorzo en La Moneda con cerca de 70 excompañeros de Derecho de la PUC. Manouchehri, Venegas y Cicardini denunciaron a Contraloria. El 24-abr, Kast reconocio que hubo financiamiento publico parcial: “Cometi un error por desconocimiento.” Es el primer mea culpa publico del Gobierno.",
    fecha: "2026-04-10",
    etiqueta: "malo",
    severidad: 3,
    documentoSlugs: [],
    fuenteUrls: [
      {
        url: "https://www.emol.com/noticias/Nacional/2026/04/24/1198152/mea-culpa-kast-almuerzo.html",
        medio: "Emol",
        titulo: "Mea culpa de Kast por almuerzo: “Cometi un error por desconocimiento”",
      },
      {
        url: "https://www.biobiochile.cl/noticias/nacional/chile/2026/04/24/kast-reconoce-que-hubo-financiamiento-publico-en-polemico-almuerzo-con-excompaneros-en-la-moneda.shtml",
        medio: "BioBioChile",
        titulo: "Kast reconoce que hubo financiamiento publico en polemico almuerzo",
      },
    ],
    cuerpo:
      "El 10 de abril el presidente recibio en uno de los salones del palacio a alrededor de 70 excompañeros de la Facultad de Derecho de la Universidad Catolica. Hubo menu fijo (tartar de tomate, vino tinto, pure rustico, pescado al jugo, lasagna de berenjena para vegetarianos), funcionarios de Estado en un evento privado y consumo en dependencias publicas. La primera respuesta del Gobierno fue minimizar (“lo paga su familia”). Cadem 16-abr: 62% lo desaprueba. El 24 de abril, ante el Consejo para la Transparencia, Kast reconocio: “Cometi un error por desconocimiento. No volvera a ocurrir.” Reconocio uso de recursos fiscales. Contraloria fija plazo de 10 dias habiles para que la Presidencia entregue antecedentes.",
  },
  {
    slug: "megareforma-reconstruccion",
    titulo: "Megareforma para la Reconstruccion: 40 medidas que beneficiarian a 6 ministros en CLP$292.515 millones",
    resumen:
      "El 22-abr Kast firma e ingresa al Congreso la “Reconstruccion Nacional”: rebaja del impuesto corporativo del 27% al 23%, exencion transitoria de IVA a viviendas nuevas, repatriacion de capitales, exencion de contribuciones. La oposicion recurre a Contraloria por conflicto de interes: estudio de Fundacion Nodo XXI proyecta beneficio agregado de CLP$292.515 millones para 63 funcionarios, con el 98,8% concentrado en 6 personas. Fernando Barros (Defensa) captura mas del 70% solo, ~CLP$210.000 millones por la repatriacion de capitales.",
    fecha: "2026-04-22",
    etiqueta: "feo",
    severidad: 4,
    ministerioSlug: "hacienda",
    documentoSlugs: [],
    fuenteUrls: [
      {
        url: "https://www.latercera.com/politica/noticia/que-contiene-finalmente-el-proyecto-para-la-reconstruccion-nacional-ingresado-por-el-gobierno-al-congreso/",
        medio: "La Tercera",
        titulo: "Que contiene finalmente la megareforma para la Reconstruccion Nacional",
      },
      {
        url: "https://www.eldinamo.cl/politica/2026/04/23/megarreforma-el-estudio-que-proyecta-eventuales-beneficios-millonarios-para-ministros-y-la-ofensiva-que-activo-la-oposicion/",
        medio: "El Dinamo",
        titulo: "El estudio que proyecta beneficios millonarios para ministros",
      },
      {
        url: "https://www.t13.cl/noticia/politica/oposicion-recurre-contraloria-proyecto-reconstruccion-ministros-kast-23-4-2026",
        medio: "T13",
        titulo: "Oposicion recurre a la Contraloria por proyecto de Reconstruccion",
      },
    ],
    cuerpo:
      "La megareforma cuenta con mas de 40 medidas. Las cuatro mas relevantes desde el punto de vista patrimonial: (1) reduccion del impuesto corporativo del 27% al 23%, (2) reintegracion del sistema tributario, (3) repatriacion de capitales con tasa rebajada, (4) exencion transitoria de contribuciones. Otras: exencion transitoria de IVA a la venta de viviendas nuevas, agilizacion de permisos medioambientales, subsidio al empleo formal.\n\nFundacion Nodo XXI cruzo las cuatro medidas con las declaraciones patrimoniales de 63 funcionarios del Gobierno. Resultado: beneficio agregado de CLP$292.515 millones, con el 98,8% concentrado en 6 personas. Fernando Barros (ministro de Defensa) captura mas del 70%, equivalente a ~CLP$210.000 millones, por la repatriacion de capitales. Daniel Mas (ministro de Economia) ahorraria CLP$498,5 millones anuales por la rebaja del impuesto corporativo y CLP$1.005 millones por la reintegracion. Jorge Quiroz (ministro de Hacienda) se beneficia personalmente por la exencion de contribuciones a sus propiedades en la Region Metropolitana.\n\nLa oposicion presento requerimiento ante Contraloria por posible conflicto de interes en la confeccion del proyecto. Cadem 19-abr: 49% cree que la megareforma beneficia a los mas ricos.",
  },
];
