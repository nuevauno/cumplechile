import type { Promesa } from "./types";

/**
 * Promesas centrales del programa de gobierno 2026-2030 de Jose Antonio Kast
 * (electo en segunda vuelta de diciembre 2025). Estructurado en 8 ejes:
 * economia, seguridad, salud, educacion, medioambiente, descentralizacion,
 * sociedad y cultura. Cada promesa se contrasta con las decisiones tomadas
 * en los primeros 45 dias de gobierno.
 */
export const PROMESAS: Promesa[] = [
  // ─────────────────────────────────────────── INMIGRACION
  {
    slug: "zanja-frontera-norte",
    titulo: "Zanja en toda la frontera norte",
    resumen:
      "Excavacion de gran escala a lo largo de los ~1.000 km de frontera norte para impedir el cruce irregular.",
    citaCampaña:
      "Vamos a construir una zanja en la frontera norte para que ningun delincuente cruce caminando.",
    citaFuente: "Discursos y debates, 2025",
    estado: "estancada",
    eje: "inmigracion",
    cuerpo:
      "Estado al 24-abr-2026: anunciada la primera semana, pero sin decreto, licitacion ni asignacion presupuestaria especifica conocida. La tasa anunciada es de 30 km/año, lo que tomaria mas de tres decadas en cubrir la frontera completa. No aparece en el Marco de Mediano Plazo 2027-2031.",
  },
  {
    slug: "fuerza-tarea-frontera",
    titulo: "Fuerza de tarea conjunta militar-policial en la frontera",
    resumen:
      "Despliegue de FF.AA., Carabineros y PDI con facultades plenas para detener, reconducir y expulsar inmigrantes irregulares.",
    estado: "en_proceso",
    eje: "inmigracion",
    cuerpo:
      "Despliegues anunciados en Colchane y Chacalluta. Falta el cuerpo legal: el proyecto de Ley de Seguridad Integral y Control Fronterizo aun no tiene urgencia en sala. La caida de denuncias por ingreso clandestino (-67,4% vs 2022) es continuidad de tendencia previa.",
  },
  {
    slug: "expulsiones-masivas",
    titulo: "Expulsiones masivas de inmigrantes irregulares",
    resumen:
      "Acelerar las expulsiones administrativas y judiciales con vuelos regulares.",
    citaCampaña:
      "Vamos a expulsar a quienes hayan ingresado por pasos no habilitados y a quienes tengan antecedentes.",
    citaFuente: "Programa de gobierno, 2025",
    estado: "en_proceso",
    eje: "inmigracion",
    cuerpo:
      "Primer vuelo el 15-abr-2026: 40 personas (19 colombianos, 12 bolivianos, 9 ecuatorianos). Proyeccion oficial: tres vuelos al mes (~120 personas/mes). Critica del ex subsecretario Thayer: son procesos del gobierno anterior. La frase de Marcos Barraza —“ha expulsado mas seremis que migrantes”— resume la critica de la oposicion.",
  },
  {
    slug: "reducir-cruces-40-pct",
    titulo: "Reducir cruces ilegales 40% en los primeros tres meses",
    resumen:
      "Meta cuantificada del “Plan Implacable”: reducir 40% los cruces irregulares al 11-jun-2026.",
    citaCampaña:
      "En tres meses los cruces ilegales bajaran 40%.",
    estado: "en_proceso",
    eje: "inmigracion",
    cuerpo:
      "La cifra de denuncias por ingreso clandestino bajo de 6.437 (2022) a 2.101 en el primer mes de Kast. Si se compara contra 2025 (~3.000 casos en igual ventana), la baja es menor al 40% prometido. El indicador definitivo se publica el 11-jun-2026.",
  },

  // ─────────────────────────────────────────── SEGURIDAD
  {
    slug: "narcotrafico-seguridad-nacional",
    titulo: "Declarar narcotrafico transfronterizo como delito de seguridad nacional",
    resumen:
      "Tipificar el narcotrafico transnacional como delito de seguridad nacional para activar facultades militares.",
    estado: "estancada",
    eje: "seguridad",
    cuerpo:
      "Sin proyecto de ley ingresado al Congreso al 24-abr-2026. Sin minuta tecnica publica. La ministra Steinert no asistio a la Comision de Seguridad de la Camara y la sesion fue cancelada.",
  },
  {
    slug: "aislamiento-cabecillas",
    titulo: "Aislamiento total en prision para cabecillas narcotraficantes",
    resumen:
      "Regimen carcelario de aislamiento absoluto para lideres del crimen organizado.",
    estado: "estancada",
    eje: "seguridad",
    cuerpo:
      "Sin proyecto de ley ni decreto al 24-abr-2026.",
  },
  {
    slug: "endurecer-penas-terrorismo",
    titulo: "Endurecer penas para terrorismo",
    resumen:
      "Reforma a la ley antiterrorista con penas mayores y nuevas figuras.",
    estado: "sin_info",
    eje: "seguridad",
    cuerpo:
      "Compromiso programatico. Sin proyecto especifico ingresado en el primer mes y medio de gobierno.",
  },
  {
    slug: "reforma-procesal-penal",
    titulo: "Reforma procesal penal con foco en crimen organizado",
    resumen:
      "Endurecer la persecucion penal del crimen organizado y la prision preventiva.",
    estado: "en_proceso",
    eje: "seguridad",
    cuerpo:
      "La ministra Steinert ha hecho anuncios. Falta clarificar que proyectos especificos se han enviado al Congreso, en que estado de tramitacion estan, y que cifras de delitos hay para comparar.",
  },
  {
    slug: "indultos-uniformados-octubre",
    titulo: "Indulto a uniformados procesados por casos del estallido social",
    resumen:
      "Indultar o reformar la situacion procesal de personal de Carabineros y FF.AA. con causas judiciales por hechos de octubre 2019.",
    estado: "sin_info",
    eje: "ddhh",
    cuerpo:
      "Compromiso reiterado durante la campaña. Sin decretos de indulto firmados ni proyectos de ley enviados al Congreso al cierre de abril 2026.",
  },

  // ─────────────────────────────────────────── ECONOMIA
  {
    slug: "baja-impuestos-empresas",
    titulo: "Bajar impuesto a las empresas (27% → 23%)",
    resumen:
      "Reduccion gradual del impuesto corporativo del 27% al 23%.",
    estado: "en_proceso",
    eje: "economia",
    decisionesRelacionadas: ["megareforma-reconstruccion"],
    cuerpo:
      "Incluido en la megareforma para la Reconstruccion Nacional ingresada al Congreso el 22-abr-2026. Estudio de Fundacion Nodo XXI: el ministro Daniel Mas ahorraria CLP$498,5 millones anuales por esta sola medida. La oposicion presento requerimiento ante Contraloria.",
  },
  {
    slug: "reintegracion-tributaria",
    titulo: "Reintegrar el sistema tributario",
    resumen:
      "Volver a un sistema integrado entre el impuesto corporativo y el impuesto personal a los socios/accionistas.",
    estado: "en_proceso",
    eje: "economia",
    cuerpo:
      "Incluida en la megareforma. Por la composicion de los patrimonios declarados, beneficia principalmente a controladores y accionistas mayoritarios. Daniel Mas: ~CLP$1.005 millones segun Nodo XXI.",
  },
  {
    slug: "repatriacion-capitales",
    titulo: "Repatriacion de capitales con tasa rebajada",
    resumen:
      "Reducir la tasa para incentivar el retorno de capitales mantenidos en el exterior.",
    estado: "en_proceso",
    eje: "economia",
    cuerpo:
      "Es la medida mas concentrada en pocas personas. El estudio Nodo XXI proyecta un beneficio agregado de ~CLP$210.000 millones para el ministro de Defensa Fernando Barros, en una sola transaccion. Por si solo representa mas del 70% del beneficio agregado de la megareforma para los 63 funcionarios analizados.",
  },
  {
    slug: "exencion-iva-viviendas-nuevas",
    titulo: "Exencion transitoria de IVA a la venta de viviendas nuevas",
    resumen:
      "Suspender el IVA en la venta de viviendas primera entrega para reactivar el sector construccion.",
    estado: "en_proceso",
    eje: "vivienda",
    cuerpo:
      "Incluido en la megareforma. Costo fiscal proyectado por Hacienda no publicado al detalle. Pendiente discusion de glosas y vigencia.",
  },
  {
    slug: "agilizar-permisos-medioambientales",
    titulo: "Agilizar permisos medioambientales",
    resumen:
      "Reducir plazos del SEIA y de las autorizaciones sectoriales.",
    estado: "en_proceso",
    eje: "medioambiente",
    cuerpo:
      "Incluido en la megareforma. La oposicion alerta riesgo de debilitar la institucionalidad ambiental sin contraprestaciones de fiscalizacion.",
  },
  {
    slug: "subsidio-empleo-formal",
    titulo: "Subsidio al empleo formal",
    resumen:
      "Subsidio para contrataciones formales con foco en jovenes, mujeres y reincorporacion de personas desempleadas de larga duracion.",
    estado: "en_proceso",
    eje: "trabajo",
    cuerpo:
      "Incluido en la megareforma. Meta del Gobierno: bajar la tasa de desempleo al 6,5% al fin del periodo.",
  },
  {
    slug: "crecimiento-4-pct",
    titulo: "Crecimiento del 4% al final del mandato",
    resumen:
      "Llevar la economia chilena a una tasa de crecimiento del 4% anual al cierre del periodo.",
    citaCampaña:
      "Vamos a sacar a Chile del estancamiento y llevarlo a crecer al 4%.",
    estado: "sin_info",
    eje: "economia",
    cuerpo:
      "Meta a 4 años. La medicion intermedia mas relevante es el dato del Banco Central trimestral. 78% de los encuestados (Cadem 5-abr-2026) considera que la economia esta estancada o retrocede.",
  },

  // ─────────────────────────────────────────── PROGRAMAS SOCIALES
  {
    slug: "no-recorte-vulnerables",
    titulo: "No tocar pensiones ni programas sociales para los mas vulnerables",
    resumen:
      "Compromiso reiterado: el ajuste fiscal no afectaria a pensionados ni a los programas que llegan a poblaciones vulnerables.",
    citaCampaña:
      "El ajuste fiscal lo van a sentir los politicos, no los abuelitos ni los que reciben ayuda del Estado.",
    citaFuente: "Mensajes de campaña, 2025",
    estado: "incumplida",
    eje: "social",
    decisionesRelacionadas: [
      "trabajo-bono-invierno-rebajado",
      "mds-recortes-anexo-21-programas-descontinuados",
      "educacion-pae-descontinuado",
    ],
    cuerpo:
      "El Oficio Circular N°16 de Hacienda (21-abr-2026) ordena descontinuar el PAE de JUNAEB ($1,06 billones), las Ayudas Tecnicas de SENADIS, el Bono de Graduacion de 4° Medio, y rebajar al menos 15% el Bono Invierno ($318.660 millones), el SUF, el Subsidio Previsional a Trabajadores Jovenes, las pensiones del sistema de reparto, el Subsidio de Discapacidad y Chile Te Cuida.",
  },
  {
    slug: "pae-junaeb-mantener",
    titulo: "Mantener el Programa de Alimentacion Escolar",
    resumen:
      "Compromiso de no afectar la alimentacion entregada a estudiantes vulnerables en colegios publicos.",
    estado: "incumplida",
    eje: "educacion",
    decisionesRelacionadas: ["educacion-pae-descontinuado"],
    cuerpo:
      "El anexo de Educacion del Oficio Circular N°16 marca al PAE como “descontinuar”. Es el programa con mayor monto ejecutado entre todos los marcados para eliminacion: $1,06 billones de pesos en 2025.",
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
      "El recorte de 142 programas y rebaja de 260 mas instruido por Hacienda es la materializacion mas concreta de esta promesa. Falta clarificar el efecto neto en eficiencia. Tambien si se cumple la promesa de eliminar ministerios completos (no solo programas) — al 24-abr-2026 ningun ministerio fue eliminado.",
  },

  // ─────────────────────────────────────────── SALUD Y PENSIONES
  {
    slug: "no-reformar-isapres",
    titulo: "Defender el sistema de Isapres",
    resumen:
      "Mantener y fortalecer el sistema de Isapres frente a la sentencia de la Corte Suprema sobre tablas de factores.",
    estado: "sin_info",
    eje: "salud",
    cuerpo:
      "Pendiente de ver el proyecto del Ejecutivo y la posicion del Ministerio de Salud (May Chomali). Sin anuncios concretos al 24-abr-2026.",
  },
  {
    slug: "reforma-pensiones-afp",
    titulo: "Mantener el sistema de AFP sin componente solidario obligatorio",
    resumen:
      "Continuar con la capitalizacion individual y rechazar componentes solidarios obligatorios.",
    estado: "en_proceso",
    eje: "social",
    cuerpo:
      "El gobierno asumio sin haber concretado un cambio al sistema previsional. La reforma actual heredada del periodo anterior es uno de los temas que el ministro Tomas Rau debera enfrentar. Estado dependiente de las decisiones de los proximos meses.",
  },

  // ─────────────────────────────────────────── INSTITUCIONAL / TRANSPARENCIA
  {
    slug: "uso-recursos-publicos",
    titulo: "Uso responsable de los recursos publicos en la Presidencia",
    resumen:
      "Compromiso programatico de austeridad y transparencia en el uso de recursos del palacio.",
    estado: "incumplida",
    eje: "transparencia",
    decisionesRelacionadas: ["almuerzo-la-moneda-mea-culpa"],
    cuerpo:
      "El almuerzo del 10-abr-2026 con 70 excompañeros de la PUC en La Moneda fue financiado en parte con recursos publicos, segun reconocio el propio Kast el 24-abr-2026 ante el Consejo para la Transparencia. Contraloria abrio expediente formal tras denuncia de Manouchehri, Venegas y Cicardini.",
  },
  {
    slug: "no-conflictos-interes",
    titulo: "Gobierno sin conflictos de interes",
    resumen:
      "Compromiso de transparencia en las relaciones patrimoniales del gabinete con las decisiones del Ejecutivo.",
    estado: "incumplida",
    eje: "transparencia",
    cuerpo:
      "La oposicion presento requerimiento a Contraloria por posible conflicto de interes en la confeccion de la megareforma. Estudio de Fundacion Nodo XXI: 6 funcionarios concentran el 98,8% del beneficio patrimonial agregado de las 4 medidas centrales. Fernando Barros (Defensa) captura mas del 70%.",
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

/** Promesas agrupadas por eje del programa de gobierno. */
export const PROMESAS_POR_EJE = () => {
  const map = new Map<string, Promesa[]>();
  for (const p of PROMESAS) {
    if (!map.has(p.eje)) map.set(p.eje, []);
    map.get(p.eje)!.push(p);
  }
  return Array.from(map.entries()).map(([eje, promesas]) => ({ eje, promesas }));
};
