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
    slug: "no-retroceder-gratuidad-universitaria",
    titulo: "No recortar beneficios sociales: gratuidad universitaria",
    resumen:
      "El Gobierno evaluó limitar la gratuidad por edad, fortalecer cobros del CAE y frenar la extensión del beneficio. Tras resistencia oficialista y opositora, mantuvo una moratoria de dos años al ingreso de nuevas instituciones a la gratuidad.",
    estado: "contradictoria",
    eje: "educacion",
    decisionesRelacionadas: ["gratuidad-universitaria-limites-y-moratoria"],
    fuenteUrls: [
      {
        url: "https://www.biobiochile.cl/noticias/nacional/chile/2026/03/16/cambios-en-la-gratuidad-enfrentan-al-gobierno-de-kast-con-la-oposicion-acusan-promesa-incumplida.shtml",
        medio: "BioBioChile",
        titulo: "Cambios en la gratuidad enfrentan al Gobierno de Kast",
      },
      {
        url: "https://www.latercera.com/nacional/noticia/megarreforma-gobierno-morigero-cambios-a-la-gratuidad-tras-resistencia-oficialista/",
        medio: "La Tercera",
        titulo: "Gobierno morigeró cambios a la gratuidad tras resistencia oficialista",
      },
    ],
    cuerpo:
      "La promesa general de no tocar beneficios sociales choca con la secuencia de gratuidad. Primero se estudió limitar el acceso a menores de 30 años y reforzar cobros del CAE. Luego, tras resistencia, el texto final redujo el golpe pero mantuvo una moratoria de dos años para nuevas instituciones. No se eliminó la gratuidad vigente, pero sí se le puso freno de expansión.",
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
  {
    slug: "auditoria-externa-total-estado",
    titulo: "Auditoría externa internacional a todo el Estado",
    resumen:
      "Kast prometió convocar a Contraloría y firmas auditoras de primer nivel mundial para revisar el Estado. El Gobierno descartó la licitación por estrechez fiscal y la sustituyó por revisión interna.",
    citaCampaña:
      "Se convocará a la Contraloría General y a firmas auditoras de primer nivel mundial para revisar cada ministerio, subsecretaría, servicio y empresa pública.",
    citaFuente: "Equipo de campaña, abril 2025; citado por BioBioChile",
    estado: "incumplida",
    eje: "transparencia",
    decisionesRelacionadas: ["auditoria-externa-internacional-cancelada"],
    fuenteUrls: [
      {
        url: "https://www.biobiochile.cl/noticias/nacional/chile/2026/04/05/pese-a-promesa-de-campana-gobierno-finalmente-desestima-auditoria-externa-internacional.shtml",
        medio: "BioBioChile",
        titulo: "Gobierno finalmente desestima auditoría externa internacional",
      },
    ],
    cuerpo:
      "La auditoría existe solo en versión interna. El compromiso original hablaba de firmas externas internacionales, revisión total, publicación íntegra de hallazgos y envío al Congreso. El reemplazo por revisión con recursos propios puede producir información, pero incumple el corazón de la promesa: independencia externa y alcance internacional.",
  },

  // ─────────────────────────────────────────── SALUD Y PENSIONES
  {
    slug: "proteger-atencion-salud-publica",
    titulo: "No afectar la atención de pacientes en la red pública",
    resumen:
      "El Gobierno sostuvo que el recorte de 3% a Salud no debía afectar la atención. Los gremios de la red pública respondieron que el ajuste equivale a $517.532 millones y que no existe margen significativo sin impactar a usuarios, listas de espera y capacidad de respuesta.",
    estado: "contradictoria",
    eje: "salud",
    decisionesRelacionadas: ["salud-recorte-3-pct-gremios"],
    fuenteUrls: [
      {
        url: "https://www.latercera.com/nacional/noticia/gremios-solicitan-a-kast-que-reconsidere-recorte-del-3-a-salud-es-un-impacto-directo-a-usuarios-que-dependen-del-sistema-publico/",
        medio: "La Tercera",
        titulo: "Gremios solicitan a Kast que reconsidere recorte de 3% a Salud",
      },
    ],
    cuerpo:
      "La contradicción es directa: la ministra May Chomali aseguró que el recorte no debería afectar la atención de pacientes, pero cuatro gremios de salud llegaron a La Moneda a pedir que Kast retirara la medida. Su advertencia fue específica: el presupuesto ya venía estrecho, el recorte adelantaría el agotamiento de recursos y podría aumentar listas de espera, deteriorar la calidad de la atención y sobrecargar al personal. Si la promesa era eficiencia sin tocar usuarios, Salud se convirtió en el primer test fallido.",
  },
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
    slug: "respetar-continuidad-institucional",
    titulo: "Gobernar con emergencia, no paralizar el Estado heredado",
    resumen:
      "En tres semanas el Ejecutivo retiró 94 decretos de Contraloría, 85 sin reingreso al corte de La Tercera. La revisión técnica prometida se transformó en pausa masiva de políticas en adopción, medio ambiente, telecomunicaciones, derechos humanos, pesca, negociación ramal y educación superior.",
    estado: "contradictoria",
    eje: "institucional",
    decisionesRelacionadas: [
      "retiro-masivo-decretos-boric",
      "internet-servicio-publico-reglamentos-retirados",
    ],
    fuenteUrls: [
      {
        url: "https://www.latercera.com/nacional/noticia/gobierno-de-kast-suma-retiro-de-casi-100-decretos-y-reglamentos-de-la-administracion-boric/?outputType=base-amp-type",
        medio: "La Tercera",
        titulo: "Gobierno de Kast suma retiro de casi 100 decretos y reglamentos de la administración Boric",
      },
      {
        url: "https://www.df.cl/empresas/actualidad/gobierno-retira-de-contraloria-dos-decretos-ingresados-para-regular-ley-de",
        medio: "Diario Financiero",
        titulo: "Gobierno retira reglamentos de la Ley de Internet como servicio público",
      },
    ],
    cuerpo:
      "Kast prometió velocidad y control estatal. El primer mes mostró otra cosa: retiro masivo de decretos y reglamentos que ya estaban en trámite, con efectos sobre áreas sensibles. El gobierno puede revisar textos heredados, pero el volumen importa: 94 decretos retirados según Contraloría, 85 no reingresados a la fecha revisada por La Tercera. La emergencia se convirtió en cuello de botella administrativo.",
  },
  {
    slug: "probidad-sin-dobles-sueldos",
    titulo: "Tolerancia cero a dobles sueldos y privilegios estatales",
    resumen:
      "La línea de probidad quedó tensionada por asesores de La Moneda con cargos de elección popular vigentes durante la transición. La Tercera registró pagos simultáneos y diputados del PDG recurrieron a Contraloría.",
    estado: "contradictoria",
    eje: "transparencia",
    decisionesRelacionadas: ["doble-funcion-asesores-presidenciales"],
    fuenteUrls: [
      {
        url: "https://www.latercera.com/politica/noticia/transparencia-revela-cuanto-han-percibido-asesores-de-kast-por-doble-funcion-en-cargos-de-eleccion-popular/",
        medio: "La Tercera",
        titulo: "Transparencia revela cuánto han percibido asesores de Kast por doble función",
      },
      {
        url: "https://www.latercera.com/politica/noticia/diputados-del-pdg-recurren-a-contraloria-por-asesores-presidenciales-con-doble-sueldo-y-exigen-renuncias-inmediatas/",
        medio: "La Tercera",
        titulo: "Diputados del PDG recurren a Contraloría por asesores presidenciales con doble sueldo",
      },
    ],
    cuerpo:
      "El Gobierno sostiene que se trató de pagos acotados de transición y no de una doble remuneración permanente. Aun así, el estándar político era más alto que la legalidad mínima: no instalar dobles funciones ni privilegios estatales. La jefa de gabinete y asesores del Segundo Piso abrieron el primer flanco de probidad del círculo presidencial.",
  },
  {
    slug: "politica-exterior-marca-chile",
    titulo: "Defender la influencia internacional de Chile",
    resumen:
      "El retiro del apoyo chileno a Michelle Bachelet para la Secretaría General de la ONU dejó a una candidatura latinoamericana competitiva sin respaldo de su propio país. Exautoridades acusaron daño diplomático y sabotaje.",
    estado: "contradictoria",
    eje: "institucional",
    decisionesRelacionadas: ["bachelet-onu-retiro-apoyo-chile"],
    fuenteUrls: [
      {
        url: "https://www.cooperativa.cl/noticias/pais/relaciones-exteriores/onu/kast-retiro-apoyo-del-estado-de-chile-a-la-candidatura-onu-de-bachelet/2026-03-24/122854.html",
        medio: "Cooperativa",
        titulo: "Kast retiró apoyo del Estado de Chile a la candidatura ONU de Bachelet",
      },
      {
        url: "https://www.latercera.com/nacional/noticia/una-de-las-historias-mas-tristes-de-la-diplomacia-excanciller-valdes-acusa-sabotaje-del-gobierno-de-kast-a-campana-de-bachelet-en-la-onu/",
        medio: "La Tercera",
        titulo: "Excanciller Valdés acusa sabotaje del gobierno de Kast a campaña de Bachelet en la ONU",
      },
    ],
    cuerpo:
      "La política exterior quedó subordinada al conflicto interno. La decisión oficial fue retirar el apoyo del Estado de Chile a Bachelet; la crítica posterior fue que el país resignó una carta propia en Naciones Unidas por razones domésticas. Juan Gabriel Valdés, excanciller y exembajador en Washington, acusó al Ejecutivo de sabotear el proceso y de usar argumentos que calificó como falsos sobre la supuesta dispersión de candidaturas. El hecho medible: México y Brasil continuaron respaldando la postulación mientras Chile se bajó.",
  },
  {
    slug: "politica-exterior-ddhh-continuidad",
    titulo: "Continuidad de la política exterior de derechos humanos",
    resumen:
      "Chile dejó de adherir a la declaración LGBTIQ+ de la OEA respaldada por gobiernos anteriores y abrió un giro de señal internacional en derechos humanos.",
    estado: "contradictoria",
    eje: "ddhh",
    decisionesRelacionadas: ["oea-lgbtiq-chile-no-adhiere"],
    fuenteUrls: [
      {
        url: "https://elpais.com/chile/2026-03-20/el-gobierno-de-kast-decide-no-adherir-a-la-declaracion-de-derechos-lgbtiq-en-la-oea.html",
        medio: "El País Chile",
        titulo: "El Gobierno de Kast decide no adherir a la declaración de derechos LGBTIQ+ en la OEA",
      },
    ],
    cuerpo:
      "Cancillería afirmó que Chile mantiene compromiso con los derechos humanos de todas las personas, pero no adhirió a una declaración regional que venía respaldando. Es una contradicción entre continuidad declarada y señal concreta: en foros multilaterales, no firmar también comunica.",
  },
  {
    slug: "plan-busqueda-detenidos-desaparecidos",
    titulo: "Mantener sin retrocesos el Plan Nacional de Búsqueda",
    resumen:
      "El Gobierno prometió continuidad del Plan de Búsqueda, pero removió jefaturas especializadas del Programa de DD.HH. y del plan en sus primeras semanas.",
    estado: "contradictoria",
    eje: "ddhh",
    decisionesRelacionadas: ["plan-busqueda-ddhh-jefaturas-removidas"],
    fuenteUrls: [
      {
        url: "https://elpais.com/chile/2026-04-01/kast-descabeza-el-plan-de-busqueda-de-detenidos-desaparecidos-y-despide-a-tres-de-sus-jefas-es-una-decision-claramente-politica.html",
        medio: "El País Chile",
        titulo: "Kast descabeza el Plan de Búsqueda de detenidos desaparecidos",
      },
    ],
    cuerpo:
      "La continuidad no se mide solo por mantener el nombre del programa. En una política sobre detenidos desaparecidos, cambiar jefaturas técnicas y jurídicas sin explicación sustantiva pública abre una señal de retroceso aunque el Gobierno diga que el plan seguirá.",
  },
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
