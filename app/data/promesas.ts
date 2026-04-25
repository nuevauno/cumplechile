import type { Promesa } from "./types";

/**
 * Promesas centrales de campaña de Jose Antonio Kast (eleccion 2025).
 * Cada una se contrasta con las decisiones que se han tomado.
 */
export const PROMESAS: Promesa[] = [
  {
    slug: "zanja-frontera-norte",
    titulo: "Zanja en la frontera norte",
    resumen:
      "Construir una zanja a lo largo de la frontera norte para frenar la inmigracion irregular fue una de las propuestas mas reconocidas de la campaña.",
    citaCampaña:
      "Vamos a construir una zanja en la frontera norte para que ningun delincuente cruce caminando.",
    citaFuente: "Discursos y debates de campaña, 2025",
    estado: "estancada",
    eje: "inmigracion",
    cuerpo:
      "La zanja fronteriza fue una de las promesas insignia de la campaña. La idea: una excavacion de gran escala a lo largo del limite norte para impedir el cruce irregular.\n\nEstado al 24-abr-2026: no hay decreto, licitacion ni asignacion presupuestaria publica conocida que de inicio a la obra. Tampoco aparece en el Marco de Mediano Plazo 2027-2031 enviado por Hacienda. Mientras tanto, los recortes anunciados afectan a programas sociales que llegan a poblaciones vulnerables (Bono Invierno, Programa de Alimentacion Escolar, Ayudas Tecnicas para discapacidad, etc.).\n\nProxima señal a vigilar: el proyecto de ley de presupuestos 2027 que entra al Congreso el 30 de septiembre. Si la zanja no aparece ahi, el primer ciclo presupuestario habra cerrado sin avance concreto en la promesa mas mediatica del programa.",
  },
  {
    slug: "expulsiones-masivas",
    titulo: "Expulsiones masivas de inmigrantes irregulares",
    resumen:
      "Expulsar de forma rapida y masiva a las personas que ingresaron al pais por pasos no habilitados.",
    estado: "en_proceso",
    eje: "inmigracion",
    cuerpo:
      "El programa de gobierno comprometio acelerar las expulsiones de personas con ingreso irregular o antecedentes penales. Hay anuncios y operativos en curso. La cifra real de expulsiones efectivas (no solo decretadas) y su comparacion con el ritmo del gobierno anterior es el dato a vigilar.\n\nEsta promesa se cataloga 'en proceso' hasta que existan reportes oficiales mensuales con cifras desagregadas y comparables.",
  },
  {
    slug: "no-recorte-pensiones",
    titulo: "No tocar pensiones ni programas sociales para los mas vulnerables",
    resumen:
      "Durante la campaña se afirmo que el ajuste fiscal no afectaria a pensionados ni a programas sociales que llegan a los mas vulnerables.",
    citaCampaña:
      "El ajuste fiscal lo van a sentir los politicos, no los abuelitos ni los que reciben ayuda del Estado.",
    citaFuente: "Mensajes de campaña reiterados, 2025",
    estado: "incumplida",
    eje: "social",
    decisionesRelacionadas: [
      "trabajo-bono-invierno-rebajado",
      "mds-recortes-anexo-21-programas-descontinuados",
      "educacion-pae-descontinuado",
    ],
    cuerpo:
      "El Oficio Circular N°16 del Ministerio de Hacienda (21-abr-2026) instruyo recortar 142 programas y rebajar otros 260 a nivel pais. El ajuste alcanza directamente a poblaciones vulnerables: el Bono Invierno (rebaja −15%), el Subsidio Familiar (SUF), las Ayudas Tecnicas para personas con discapacidad (descontinuadas), Chile Te Cuida (rebaja), el Bono de Graduacion de Cuarto Medio (descontinuado), las Pensiones del Sistema de Reparto (rebaja), y el Programa de Alimentacion Escolar de JUNAEB (a descontinuar — $1 billon CLP). Esto contradice directamente la promesa de proteger a los mas vulnerables del ajuste.",
  },
  {
    slug: "indultos-presos-octubre",
    titulo: "Indulto a uniformados procesados por casos del estallido social",
    resumen:
      "Indultar o reformar la situacion procesal de personal de Carabineros y FF.AA. con causas judiciales por hechos de octubre 2019.",
    estado: "sin_info",
    eje: "ddhh",
    cuerpo:
      "Compromiso reiterado durante la campaña. Estado actual: no se conocen decretos de indulto firmados ni proyectos de ley enviados al Congreso al cierre de abril 2026. A vigilar.",
  },
  {
    slug: "no-reformar-isapres",
    titulo: "Defender el sistema de Isapres",
    resumen:
      "Mantener y fortalecer el sistema de Isapres frente a la sentencia de la Corte Suprema sobre tablas de factores.",
    estado: "sin_info",
    eje: "salud",
    cuerpo:
      "Promesa de campaña vinculada al fallo de la Corte Suprema. Estado actual: pendiente de ver el proyecto que envie el Ejecutivo y la posicion del Ministerio de Salud (May Chomali). Aun no hay anuncios concretos al 24-abr-2026.",
  },
  {
    slug: "reforma-pensiones-afp",
    titulo: "Mantener el sistema de AFP y rechazar fondos solidarios",
    resumen:
      "Continuar con la capitalizacion individual sin componente solidario obligatorio.",
    estado: "en_proceso",
    eje: "economia",
    cuerpo:
      "El gobierno asumio sin haber concretado un cambio al sistema previsional. La reforma actual heredada del periodo anterior es uno de los temas que el ministro Tomas Rau debera enfrentar. Estado dependiente de las decisiones que se tomen al respecto en los proximos meses.",
  },
  {
    slug: "baja-impuestos-empresas",
    titulo: "Bajar impuesto a las empresas",
    resumen:
      "Reduccion gradual del impuesto de primera categoria.",
    estado: "sin_info",
    eje: "economia",
    cuerpo:
      "Compromiso programatico que involucra reforma tributaria. Estado actual: el Ministerio de Hacienda no ha enviado proyecto de ley al Congreso. El oficio del 21 de abril se enfoca en recortes al gasto, no en reduccion impositiva.",
  },
  {
    slug: "reforma-procesal-penal",
    titulo: "Endurecer leyes penales contra delincuencia organizada",
    resumen:
      "Reforma procesal penal y migratoria, con foco en crimen organizado.",
    estado: "en_proceso",
    eje: "seguridad",
    cuerpo:
      "Eje central de la campaña. La Ministra de Seguridad Trinidad Steinert ha hecho anuncios. Falta entrar al detalle: que proyectos especificos se han enviado al Congreso, en que estado de tramitacion estan y que cifras de delitos hay para comparar.",
  },
  {
    slug: "estado-eficiente",
    titulo: "Reducir el tamaño del Estado",
    resumen:
      "Eliminar ministerios, reducir dotacion del aparato publico, terminar con programas considerados ineficientes.",
    estado: "en_proceso",
    eje: "institucional",
    decisionesRelacionadas: [
      "hacienda-recorta-mas-de-6-mil-millones-usd",
    ],
    cuerpo:
      "El recorte de 142 programas y rebaja de 260 mas instruido por Hacienda es la materializacion mas concreta de esta promesa. Lo que falta clarificar: cual es el efecto neto en eficiencia del Estado y que programas se reasignan a otros vehiculos. Tambien si se cumple la promesa especifica de eliminar ministerios completos (no solo programas).",
  },
];

export const promesaBySlug = (slug: string) => PROMESAS.find((p) => p.slug === slug);

export const promesasPorEstado = (estado: Promesa["estado"]) =>
  PROMESAS.filter((p) => p.estado === estado);

export const PROMESAS_STATS = () => {
  const t = PROMESAS.length;
  return {
    total: t,
    cumplidas: PROMESAS.filter((p) => p.estado === "cumplida").length,
    incumplidas: PROMESAS.filter((p) => p.estado === "incumplida").length,
    enProceso: PROMESAS.filter((p) => p.estado === "en_proceso").length,
    estancadas: PROMESAS.filter((p) => p.estado === "estancada").length,
    contradictorias: PROMESAS.filter((p) => p.estado === "contradictoria").length,
    sinInfo: PROMESAS.filter((p) => p.estado === "sin_info").length,
  };
};
