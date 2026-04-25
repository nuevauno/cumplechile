import type { EventoCronologia } from "./types";

/**
 * Cronologia editorial de los primeros 45 dias del gobierno de Kast.
 * Mezcla decisiones, escandalos, retractaciones, anuncios y datos de
 * encuestas. Es la columna vertebral de la pagina /cronologia.
 */
export const CRONOLOGIA: EventoCronologia[] = [
  {
    slug: "2026-03-03-quiebre-traspaso",
    fecha: "2026-03-03",
    titulo: "Quiebre con Boric en el traspaso de mando",
    resumen:
      "Kast exige a Boric retractarse por el caso del cable submarino chino. Boric se niega. La reunion termina a los 22 minutos. Kast cancela los traspasos ministeriales restantes.",
    tipo: "escandalo",
    etiqueta: "malo",
    retractacionSlug: "cable-chino-bloqueo-traspaso",
    fuenteUrl: "https://www.pauta.cl/actualidad/2026/03/03/boric-tras-quiebre-con-kast-ha-llegado-a-esta-reunion-exigiendome-que-me-retracte-y-como-eso-es-falso-y-no-lo-voy-a-hacer.html",
    fuenteMedio: "Pauta",
  },
  {
    slug: "2026-03-11-investidura",
    fecha: "2026-03-11",
    titulo: "Investidura presidencial",
    resumen:
      "Jose Antonio Kast asume con un gabinete de 24 ministros, dos tercios independientes, edad promedio 54 años. La derecha “dura” del Partido Republicano queda fuera de las carteras politicas.",
    tipo: "anuncio",
    etiqueta: "info",
    fuenteUrl: "https://www.emol.com/noticias/Nacional/2026/01/20/1189138/gabinete-kast-ministros-gobierno-fichas.html",
    fuenteMedio: "Emol",
  },
  {
    slug: "2026-03-12-suspenso-bachelet-onu",
    fecha: "2026-03-12",
    titulo: "Gobierno deja en suspenso apoyo a Bachelet ONU",
    resumen:
      "La vocera Mara Sedini dice que Kast resolverá en un plazo cercano si Chile mantendrá el respaldo a la candidatura de Michelle Bachelet a la Secretaría General de Naciones Unidas.",
    tipo: "anuncio",
    etiqueta: "feo",
    decisionSlug: "bachelet-onu-retiro-apoyo-chile",
    fuenteUrl: "https://www.pauta.cl/actualidad/2026/03/12/gobierno-de-kast-mantiene-en-suspenso-el-apoyo-a-eventual-candidatura-de-bachelet-a-la-onu.html",
    fuenteMedio: "Pauta",
  },
  {
    slug: "2026-03-13-zanja-frontera",
    fecha: "2026-03-13",
    titulo: "Anuncio de zanja en frontera norte",
    resumen:
      "A menos de una semana de asumir, el gobierno anuncia el inicio de obras de la zanja fronteriza. Tasa proyectada: 30 km/año. Criticos la consideran insuficiente para una frontera de ~1.000 km.",
    tipo: "anuncio",
    etiqueta: "feo",
    fuenteUrl: "https://www.biobiochile.cl/biobiotv/programas/radiograma-biobiotv/2026/03/19/retiro-de-decretos-zanjas-y-urgencias-la-primera-semana-de-jose-antonio-kast-en-el-poder.shtml",
    fuenteMedio: "BioBioChile",
  },
  {
    slug: "2026-03-16-gratuidad-limites",
    fecha: "2026-03-16",
    titulo: "Gratuidad: límite por edad, CAE y promesa social cuestionada",
    resumen:
      "El plan económico abre flanco en educación superior: limitar gratuidad a menores de 30 años, fortalecer cobros del CAE y frenar extensión del beneficio. Oposición acusa promesa incumplida.",
    tipo: "decision",
    etiqueta: "malo",
    decisionSlug: "gratuidad-universitaria-limites-y-moratoria",
    fuenteUrl: "https://www.biobiochile.cl/noticias/nacional/chile/2026/03/16/cambios-en-la-gratuidad-enfrentan-al-gobierno-de-kast-con-la-oposicion-acusan-promesa-incumplida.shtml",
    fuenteMedio: "BioBioChile",
  },
  {
    slug: "2026-03-20-oea-lgbtiq",
    fecha: "2026-03-20",
    titulo: "Chile no adhiere a declaración LGBTIQ+ en la OEA",
    resumen:
      "El Gobierno rompe una línea respaldada por Bachelet, Piñera y Boric. Cancillería dice que el texto generaba división, pero reafirma compromiso general con DD.HH.",
    tipo: "decision",
    etiqueta: "malo",
    decisionSlug: "oea-lgbtiq-chile-no-adhiere",
    fuenteUrl: "https://elpais.com/chile/2026-03-20/el-gobierno-de-kast-decide-no-adherir-a-la-declaracion-de-derechos-lgbtiq-en-la-oea.html",
    fuenteMedio: "El País Chile",
  },
  {
    slug: "2026-03-23-anuncio-bencinazo",
    fecha: "2026-03-23",
    titulo: "Quiroz anuncia el bencinazo",
    resumen:
      "Anuncio de alza historica: gasolina 93 octanos +$370/L, gasolina 97 +$391/L, diesel +$580/L. Como compensacion, congelan tarifa del bus RED hasta diciembre 2026.",
    tipo: "decision",
    etiqueta: "malo",
    fuenteUrl: "https://www.emol.com/noticias/Nacional/2026/03/23/1195150/alza-precio-combustible-medidas-gobierno.html",
    fuenteMedio: "Emol",
  },
  {
    slug: "2026-03-24-estado-en-quiebra",
    fecha: "2026-03-24",
    titulo: "“Estado en quiebra”: la frase que el Gobierno tuvo que borrar",
    resumen:
      "La Segegob publica una grafica con la frase “un Estado en quiebra”. El ministro Quiroz se distancia: “jamas ocuparia esa palabra.” La pieza es eliminada. Contraloria pide explicaciones a Sedini.",
    tipo: "retractacion",
    etiqueta: "malo",
    retractacionSlug: "estado-en-quiebra-borrado",
    fuenteUrl: "https://www.emol.com/noticias/Nacional/2026/03/24/1195283/quiroz-rechaza-estado-quiebra-publicacion.html",
    fuenteMedio: "Emol",
  },
  {
    slug: "2026-03-24-retira-apoyo-bachelet-onu",
    fecha: "2026-03-24",
    titulo: "Chile retira apoyo a Bachelet para la Secretaría General de la ONU",
    resumen:
      "El Gobierno baja el respaldo del Estado chileno a la candidatura de Michelle Bachelet. La postulación sigue con México y Brasil, pero sin el país de origen de la candidata.",
    tipo: "decision",
    etiqueta: "feo",
    decisionSlug: "bachelet-onu-retiro-apoyo-chile",
    fuenteUrl: "https://www.cooperativa.cl/noticias/pais/relaciones-exteriores/onu/kast-retiro-apoyo-del-estado-de-chile-a-la-candidatura-onu-de-bachelet/2026-03-24/122854.html",
    fuenteMedio: "Cooperativa",
  },
  {
    slug: "2026-03-28-brasil-mexico-bachelet-onu",
    fecha: "2026-03-28",
    titulo: "Brasil y México mantienen respaldo a Bachelet",
    resumen:
      "Lula reafirma que Brasil, junto a México, seguirá apoyando a Bachelet para la ONU pese al retiro chileno. La candidata continúa en carrera sin el apoyo de su propio país.",
    tipo: "decision",
    etiqueta: "feo",
    decisionSlug: "bachelet-onu-retiro-apoyo-chile",
    fuenteUrl: "https://www.t13.cl/amp/noticia/mundo/lula-reafirma-su-apoyo-michelle-bachelet-para-liderar-onu-tras-retiro-del-respa-28-3-2026",
    fuenteMedio: "T13",
  },
  {
    slug: "2026-03-29-no-aviso-mexico-brasil-bachelet",
    fecha: "2026-03-29",
    titulo: "Cancillería no avisa a México y Brasil antes del retiro",
    resumen:
      "T13 reporta que el Gobierno no informó previamente a México y Brasil que retiraría el apoyo chileno a Bachelet, pese a que la candidatura había sido presentada con ambos países.",
    tipo: "escandalo",
    etiqueta: "feo",
    decisionSlug: "bachelet-onu-retiro-apoyo-chile",
    fuenteUrl: "https://www.t13.cl/noticia/politica/revelan-gobierno-kast-no-informo-mexico-brasil-retiro-apoyo-bachelet-29-03-2026",
    fuenteMedio: "T13",
  },
  {
    slug: "2026-03-31-pinera-bachelet-onu",
    fecha: "2026-03-31",
    titulo: "Bachelet revela que Piñera la impulsó a liderar la ONU",
    resumen:
      "La expresidenta cuenta que Sebastián Piñera le dijo que si quería ir a la Secretaría General de la ONU, él la apoyaba y la proponía. El antecedente cruza la candidatura más allá del eje Boric-Bachelet.",
    tipo: "anuncio",
    etiqueta: "info",
    decisionSlug: "bachelet-onu-retiro-apoyo-chile",
    fuenteUrl: "https://elpais.com/chile/2026-03-31/bachelet-revela-que-pinera-la-impulso-a-liderar-la-onu-me-dijo-si-tu-quieres-yo-te-apoyo-y-te-propongo.html",
    fuenteMedio: "El País Chile",
  },
  {
    slug: "2026-03-26-bencinazo-vigente",
    fecha: "2026-03-26",
    titulo: "Entra en vigor el bencinazo",
    resumen:
      "Las nuevas tarifas se aplican. Es la primera ley de Kast en entrar en vigor. La oposicion califica la medida como un “bencinazo”.",
    tipo: "decision",
    etiqueta: "malo",
    fuenteUrl: "https://www.biobiochile.cl/noticias/nacional/chile/2026/03/26/se-concreta-historica-alza-de-combustibles-revisa-aqui-el-precio-de-gasolinas-y-diesel.shtml",
    fuenteMedio: "BioBioChile",
  },
  {
    slug: "2026-03-30-cadem-bencinazo",
    fecha: "2026-03-30",
    titulo: "Cadem: aprobacion cae a 45%",
    resumen:
      "Tras el alza de combustibles, la aprobacion presidencial cae a 45% y la desaprobacion sube a 51%. Quiroz y Sedini son los ministros peor evaluados (50% y 51% de desaprobacion).",
    tipo: "encuesta",
    etiqueta: "info",
    fuenteUrl: "https://duplos.cl/actualidad/cadem-chile-precios-combustibles-presidente-kast-58/262391/2026/03/30/",
    fuenteMedio: "Cadem · Duplos",
  },
  {
    slug: "2026-03-31-plan-busqueda-ddhh",
    fecha: "2026-03-31",
    titulo: "Remueven jefaturas del Plan de Búsqueda y Programa de DD.HH.",
    resumen:
      "Salen tres profesionales de áreas clave ligadas a causas de derechos humanos y búsqueda de detenidos desaparecidos. Justicia afirma que el plan seguirá.",
    tipo: "decision",
    etiqueta: "feo",
    decisionSlug: "plan-busqueda-ddhh-jefaturas-removidas",
    fuenteUrl: "https://elpais.com/chile/2026-04-01/kast-descabeza-el-plan-de-busqueda-de-detenidos-desaparecidos-y-despide-a-tres-de-sus-jefas-es-una-decision-claramente-politica.html",
    fuenteMedio: "El País Chile",
  },
  {
    slug: "2026-04-01-retiro-masivo-decretos",
    fecha: "2026-04-01",
    titulo: "Contraloría contabiliza 94 decretos retirados",
    resumen:
      "La Tercera registra 85 decretos retirados y no reingresados; Contraloría eleva el total a 94 considerando también reingresos. El reseteo alcanza adopción, medio ambiente, pesca, negociación ramal, FES y DD.HH.",
    tipo: "decision",
    etiqueta: "feo",
    decisionSlug: "retiro-masivo-decretos-boric",
    fuenteUrl: "https://www.latercera.com/nacional/noticia/gobierno-de-kast-suma-retiro-de-casi-100-decretos-y-reglamentos-de-la-administracion-boric/?outputType=base-amp-type",
    fuenteMedio: "La Tercera",
  },
  {
    slug: "2026-04-05-auditoria-externa-cancelada",
    fecha: "2026-04-05",
    titulo: "Gobierno cancela auditoría externa internacional",
    resumen:
      "La bandera anticorrupción de campaña queda reducida a revisión interna. Se descarta licitar firmas auditoras internacionales por estrechez fiscal.",
    tipo: "decision",
    etiqueta: "feo",
    decisionSlug: "auditoria-externa-internacional-cancelada",
    fuenteUrl: "https://www.biobiochile.cl/noticias/nacional/chile/2026/04/05/pese-a-promesa-de-campana-gobierno-finalmente-desestima-auditoria-externa-internacional.shtml",
    fuenteMedio: "BioBioChile",
  },
  {
    slug: "2026-04-06-recorte-salud-gremios",
    fecha: "2026-04-06",
    titulo: "Gremios de Salud piden a Kast retirar el recorte de 3%",
    resumen:
      "Fenasenf, Fenpruss, Fenats y Confedeprus llegan a La Moneda. Cifran el ajuste en $517.532 millones y advierten impacto directo sobre usuarios, listas de espera y capacidad de respuesta.",
    tipo: "decision",
    etiqueta: "malo",
    decisionSlug: "salud-recorte-3-pct-gremios",
    fuenteUrl: "https://www.latercera.com/nacional/noticia/gremios-solicitan-a-kast-que-reconsidere-recorte-del-3-a-salud-es-un-impacto-directo-a-usuarios-que-dependen-del-sistema-publico/",
    fuenteMedio: "La Tercera",
  },
  {
    slug: "2026-04-06-pdi-consuelo-pena",
    fecha: "2026-04-06",
    titulo: "Salida abrupta de la jefa de Inteligencia de la PDI",
    resumen:
      "El director general de la PDI, Eduardo Cerna, asume responsabilidad por el llamado a retiro de Consuelo Peña. Reportes de prensa apuntan a la ministra Steinert como quien lo solicito.",
    tipo: "escandalo",
    etiqueta: "malo",
    retractacionSlug: "consuelo-pena-version-cambiada",
    fuenteUrl: "https://www.cooperativa.cl/noticias/pais/organismos-del-estado/pdi/director-de-la-pdi-declarara-ante-comision-de-seguridad-por-retiro-de/2026-04-06/084349.html",
    fuenteMedio: "Cooperativa",
  },
  {
    slug: "2026-04-08-ataque-lincolao",
    fecha: "2026-04-08",
    titulo: "Ataque a la ministra Lincolao en la U. Austral",
    resumen:
      "Durante la inauguracion del año academico en Valdivia, un grupo de personas, algunos encapuchados, agreden a la ministra de Ciencia con empujones, insultos, agua y objetos contundentes. Permanece dos horas resguardada.",
    tipo: "ataque",
    etiqueta: "malo",
    fuenteUrl: "https://www.eldinamo.cl/politica/2026/04/08/kast-califica-como-acto-de-irracionalidad-total-ataque-a-ministra-de-ciencia-ximena-lincolao/",
    fuenteMedio: "El Dinamo",
  },
  {
    slug: "2026-04-09-internet-servicio-publico-pausado",
    fecha: "2026-04-09",
    titulo: "Subtel retira reglamentos de Internet como servicio público",
    resumen:
      "El Gobierno saca de Contraloría los decretos N°3 y N°6 que bajaban a la práctica la ley: comunidades de telecomunicaciones, obligaciones a empresas, portales de gestión, interconexión y reglas para usuarios.",
    tipo: "decision",
    etiqueta: "malo",
    decisionSlug: "internet-servicio-publico-reglamentos-retirados",
    fuenteUrl: "https://www.df.cl/empresas/actualidad/gobierno-retira-de-contraloria-dos-decretos-ingresados-para-regular-ley-de",
    fuenteMedio: "Diario Financiero",
  },
  {
    slug: "2026-04-10-almuerzo-la-moneda",
    fecha: "2026-04-10",
    titulo: "Almuerzo de Kast con 70 excompañeros en La Moneda",
    resumen:
      "Kast organiza un almuerzo con sus excompañeros de Derecho de la PUC en uno de los salones del palacio. Genera dudas sobre uso de recursos publicos. Manouchehri, Venegas y Cicardini denuncian a Contraloria.",
    tipo: "escandalo",
    etiqueta: "malo",
    fuenteUrl: "https://www.emol.com/noticias/Nacional/2026/04/14/1197161/almuerzo-kast-curso-la-moneda.html",
    fuenteMedio: "Emol",
  },
  {
    slug: "2026-04-12-criteria-36",
    fecha: "2026-04-12",
    titulo: "Criteria: aprobacion 36% — caida de 17 puntos",
    resumen:
      "Encuesta Criteria sufre tercera caida consecutiva. La aprobacion llega a 36%, arrastrada por el bencinazo y el ataque a la ministra Lincolao.",
    tipo: "encuesta",
    etiqueta: "info",
    fuenteUrl: "https://www.biobiochile.cl/noticias/nacional/chile/2026/04/12/criteria-kast-sufre-tercera-caida-en-su-aprobacion-y-llega-al-36-arrastrado-por-bencinazo.shtml",
    fuenteMedio: "Criteria · BioBio",
  },
  {
    slug: "2026-04-14-contraloria-almuerzo",
    fecha: "2026-04-14",
    titulo: "Contraloria abre expediente por almuerzo en La Moneda",
    resumen:
      "Contraloria General fija plazo de 10 dias habiles a la Presidencia para esclarecer el financiamiento del almuerzo. La sesion en la Comision de Seguridad por la salida de Consuelo Peña se cancela por inasistencia de Steinert y el subsecretario.",
    tipo: "escandalo",
    etiqueta: "malo",
    fuenteUrl: "https://www.ciperchile.cl/2026/04/14/radar-14-04-26/",
    fuenteMedio: "CIPER",
  },
  {
    slug: "2026-04-15-vuelo-expulsion",
    fecha: "2026-04-15",
    titulo: "Primer vuelo de expulsion: 40 extranjeros",
    resumen:
      "El gobierno presenta como hito el primer vuelo de expulsion (19 colombianos, 12 bolivianos, 9 ecuatorianos). El ex subsecretario Thayer aclara: son procesos heredados de la gestion anterior.",
    tipo: "operativo",
    etiqueta: "info",
    fuenteUrl: "https://www.elmostrador.cl/noticias/pais/2026/04/15/primer-vuelo-de-expulsion-de-j-a-kast-contempla-a-40-extranjeros-y-divide-opiniones-en-el-congreso/",
    fuenteMedio: "El Mostrador",
  },
  {
    slug: "2026-04-16-cadem-40",
    fecha: "2026-04-16",
    titulo: "Cadem: aprobacion cae a 40%",
    resumen:
      "62% desaprueba el almuerzo en La Moneda. La aprobacion presidencial registra el minimo del periodo: 40%. La desaprobacion alcanza 55%.",
    tipo: "encuesta",
    etiqueta: "info",
    fuenteUrl: "https://www.maray.cl/pais/16/04/2026/cadem-aprobacion-de-kast-cae-a-40-y-encuesta-revela-rechazo-a-polemico-almuerzo-en-la-moneda/",
    fuenteMedio: "Cadem · Radio Maray",
  },
  {
    slug: "2026-04-15-doble-funcion-asesores",
    fecha: "2026-04-15",
    titulo: "Transparencia revela pagos simultáneos a asesores con cargos electos",
    resumen:
      "La Tercera informa casos de Catalina Ugarte y Víctor Valdés durante la transición. El flanco golpea la promesa de tolerancia cero a dobles sueldos.",
    tipo: "escandalo",
    etiqueta: "feo",
    decisionSlug: "doble-funcion-asesores-presidenciales",
    fuenteUrl: "https://www.latercera.com/politica/noticia/transparencia-revela-cuanto-han-percibido-asesores-de-kast-por-doble-funcion-en-cargos-de-eleccion-popular/",
    fuenteMedio: "La Tercera",
  },
  {
    slug: "2026-04-15-cadena-auditoria-total",
    fecha: "2026-04-15",
    titulo: "Cadena nacional insiste en “auditoría total” tras cancelar la externa",
    resumen:
      "Kast dice que puso en marcha la auditoría total prometida, pero diez días antes el Gobierno había descartado la auditoría externa internacional y la reemplazó por revisión interna.",
    tipo: "anuncio",
    etiqueta: "malo",
    decisionSlug: "auditoria-externa-internacional-cancelada",
    fuenteUrl: "https://www.biobiochile.cl/noticias/nacional/chile/2026/04/15/kast-destaca-en-cadena-nacional-menos-ingresos-irregulares-y-primer-vuelo-de-muchos-con-expulsados.shtml",
    fuenteMedio: "BioBioChile",
  },
  {
    slug: "2026-04-21-oficio-circular-16",
    fecha: "2026-04-21",
    titulo: "Oficio Circular N°16: 142 programas a descontinuar, 260 con rebaja",
    resumen:
      "Hacienda envia el Marco de Mediano Plazo 2027-2031. Recorte total proyectado: US$6.000 millones. Toca al PAE de JUNAEB ($1,06 billones), Bono Invierno, SUF, Ayudas Tecnicas para discapacidad, Chile Te Cuida, pensiones del sistema de reparto.",
    tipo: "decision",
    etiqueta: "malo",
    decisionSlug: "hacienda-recorta-mas-de-6-mil-millones-usd",
    fuenteUrl: "https://www.theclinic.cl/2026/04/24/descontinuar-142-programas-y-rebajar-presupuesto-en-otros-260-las-recomendaciones-de-hacienda-a-ministerios-para-recortar-mas-de-6-mil-millones-de-dolares/",
    fuenteMedio: "The Clinic",
  },
  {
    slug: "2026-04-22-megareforma-firma",
    fecha: "2026-04-22",
    titulo: "Kast firma la megareforma para la Reconstruccion Nacional",
    resumen:
      "Mas de 40 medidas. Reduccion del impuesto corporativo del 27% al 23%. Exencion transitoria de IVA a viviendas nuevas. Beneficios fiscales para repatriacion de capitales. Meta: crecimiento del 4% al final del mandato.",
    tipo: "decision",
    etiqueta: "feo",
    fuenteUrl: "https://www.latercera.com/politica/noticia/que-contiene-finalmente-el-proyecto-para-la-reconstruccion-nacional-ingresado-por-el-gobierno-al-congreso/",
    fuenteMedio: "La Tercera",
  },
  {
    slug: "2026-04-21-bachelet-presenta-onu",
    fecha: "2026-04-21",
    titulo: "Bachelet presenta su candidatura en la ONU sin apoyo de Chile",
    resumen:
      "Bachelet participa en el diálogo interactivo ante miembros de Naciones Unidas con respaldo de México y Brasil. Chile ya había retirado su patrocinio.",
    tipo: "anuncio",
    etiqueta: "feo",
    decisionSlug: "bachelet-onu-retiro-apoyo-chile",
    fuenteUrl: "https://elpais.com/internacional/2026-04-21/bachelet-apuesta-por-la-cooperacion-y-el-multilateralismo-al-presentar-su-candidatura-a-la-secretaria-general-de-la-onu.html",
    fuenteMedio: "El País",
  },
  {
    slug: "2026-04-23-conflicto-interes-megareforma",
    fecha: "2026-04-23",
    titulo: "Oposicion recurre a Contraloria por conflicto de interes en la megareforma",
    resumen:
      "Estudio de Fundacion Nodo XXI: las cuatro medidas centrales beneficiarian a 63 funcionarios en CLP$292.515 millones. Seis personas concentran el 98,8%. Fernando Barros (Defensa) captura mas del 70% solo, ~CLP$210.000 millones por repatriacion de capitales.",
    tipo: "escandalo",
    etiqueta: "malo",
    retractacionSlug: "megareforma-no-beneficia-ministros",
    fuenteUrl: "https://www.eldinamo.cl/politica/2026/04/23/megarreforma-el-estudio-que-proyecta-eventuales-beneficios-millonarios-para-ministros-y-la-ofensiva-que-activo-la-oposicion/",
    fuenteMedio: "El Dinamo",
  },
  {
    slug: "2026-04-22-valdes-sabotaje-onu",
    fecha: "2026-04-22",
    titulo: "Excanciller acusa sabotaje a campaña Bachelet ONU",
    resumen:
      "Juan Gabriel Valdés sostiene que el Gobierno retiró apoyo y luego intentó sabotear el trabajo diplomático de la candidatura. La crítica apunta al costo para la política exterior chilena.",
    tipo: "escandalo",
    etiqueta: "feo",
    decisionSlug: "bachelet-onu-retiro-apoyo-chile",
    fuenteUrl: "https://www.biobiochile.cl/noticias/nacional/chile/2026/04/22/intencion-politica-evidente-excanciller-valdes-acusa-sabotaje-a-candidatura-de-bachelet-a-la-onu.shtml",
    fuenteMedio: "BioBioChile",
  },
  {
    slug: "2026-04-23-gratuidad-morigerada",
    fecha: "2026-04-23",
    titulo: "Gobierno baja cambios a gratuidad tras resistencia interna",
    resumen:
      "La megarreforma deja fuera el límite por edad y reduce la moratoria de cuatro a dos años, pero mantiene pausa al ingreso de nuevas instituciones a gratuidad.",
    tipo: "decision",
    etiqueta: "malo",
    decisionSlug: "gratuidad-universitaria-limites-y-moratoria",
    fuenteUrl: "https://www.latercera.com/nacional/noticia/megarreforma-gobierno-morigero-cambios-a-la-gratuidad-tras-resistencia-oficialista/",
    fuenteMedio: "La Tercera",
  },
  {
    slug: "2026-04-24-mea-culpa-almuerzo",
    fecha: "2026-04-24",
    titulo: "Kast pide disculpas: “Cometi un error por desconocimiento”",
    resumen:
      "14 dias despues, ante el Consejo para la Transparencia, Kast reconoce el error del almuerzo y confirma que hubo financiamiento publico parcial. Es el primer mea culpa publico del gobierno.",
    tipo: "retractacion",
    etiqueta: "feo",
    retractacionSlug: "almuerzo-la-moneda-mea-culpa",
    fuenteUrl: "https://www.emol.com/noticias/Nacional/2026/04/24/1198152/mea-culpa-kast-almuerzo.html",
    fuenteMedio: "Emol",
  },
];

export const cronologiaOrdenada = () =>
  [...CRONOLOGIA].sort((a, b) => b.fecha.localeCompare(a.fecha));

export const cronologiaPorSemana = () => {
  const grupos = new Map<string, EventoCronologia[]>();
  for (const ev of CRONOLOGIA) {
    const d = new Date(ev.fecha + "T12:00:00");
    const monday = new Date(d);
    monday.setDate(d.getDate() - ((d.getDay() + 6) % 7));
    const key = monday.toISOString().slice(0, 10);
    if (!grupos.has(key)) grupos.set(key, []);
    grupos.get(key)!.push(ev);
  }
  return Array.from(grupos.entries())
    .map(([semana, eventos]) => ({
      semana,
      eventos: eventos.sort((a, b) => b.fecha.localeCompare(a.fecha)),
    }))
    .sort((a, b) => b.semana.localeCompare(a.semana));
};
