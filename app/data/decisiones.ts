import type { Decision } from "./types";
import { PROGRAMAS_MDSYF } from "./programas";

const totalDescontinuados = PROGRAMAS_MDSYF.filter((p) => p.recomendacion === "descontinuar").length;
const totalAjuste = PROGRAMAS_MDSYF.filter((p) => p.recomendacion === "ajuste").length;
const montoDescontinuado = PROGRAMAS_MDSYF
  .filter((p) => p.recomendacion === "descontinuar")
  .reduce((sum, p) => sum + p.montoEjecutado2025MilesCLP, 0);

export const DECISIONES: Decision[] = [
  {
    slug: "justicia-recorte-46000-millones-ddhh-sitios-memoria",
    titulo: "Justicia concreta recorte de $46 mil millones y DD.HH. cae 9,2%",
    resumen:
      "La Tercera reportó que Contraloría tomó razón del decreto que recorta cerca de $46 mil millones del Ministerio de Justicia. La Subsecretaría de Derechos Humanos pierde 9,2% de su presupuesto, con bajas en Sitios de Memoria y el Programa de DD.HH.",
    fecha: "2026-04-30",
    etiqueta: "feo",
    severidad: 4,
    ministerioSlug: "justicia",
    documentoSlugs: [],
    fuenteUrls: [
      {
        url: "https://www.latercera.com/nacional/noticia/gobierno-concreta-recorte-del-presupuesto-de-justicia-con-fuerte-reduccion-del-9-en-la-subsecretaria-de-ddhh/",
        medio: "La Tercera",
        titulo: "Gobierno concreta recorte del presupuesto de Justicia con fuerte reducción del 9% en la Subsecretaría de DD.HH.",
      },
      {
        url: "https://www.latercera.com/nacional/noticia/organizaciones-de-ddhh-solicitan-a-comision-interamericana-pedir-informacion-al-estado-de-chile-por-desmantelamiento/",
        medio: "La Tercera",
        titulo: "Organizaciones de DD.HH. solicitan a la CIDH pedir información al Estado por desmantelamiento",
      },
    ],
    cuerpo:
      "El caso Justicia dejó de ser solo una alerta para el Presupuesto 2027. La Tercera reportó el 30 de abril que Contraloría tomó razón del decreto de Dipres que recorta recursos del Ministerio de Justicia y Derechos Humanos. La reducción aproximada informada por la cartera es de $46 mil millones; el recorte directo descrito en el decreto llega a casi $39 mil millones.\n\nEl desglose confirma que la tijera no cae solo en gastos administrativos. Gendarmería reduce cerca de $17 mil millones; la secretaría y administración general, casi $10 mil millones; el Servicio Nacional de Reinserción Social Juvenil, $7.600 millones; la Defensoría Penal Pública, $2 mil millones; y el Servicio Médico Legal, $1.600 millones. En la Subsecretaría de Derechos Humanos la baja es menor en monto, $870 millones, pero mayor en proporción: 9,2% de su presupuesto.\n\nEl detalle de DD.HH. es especialmente sensible. La Tercera consigna $519.574.000 menos en transferencias corrientes para Servicio Nacional del Patrimonio - Sitios de Memoria y otros $280.426.000 menos en transferencias de capital para el mismo ítem. Además, el Programa de DD.HH. debe operar con $65.274.000 menos. Es decir, mientras más de 80 organizaciones pidieron a la CIDH requerir información al Estado por desmantelamiento de memoria y reparación, el decreto 2026 ya redujo recursos de esa misma arquitectura.\n\nLa defensa oficial habla de resguardar servicios esenciales. El punto fiscalizador es otro: si la memoria, la reinserción juvenil, la defensa penal, el Servicio Médico Legal y los sitios de memoria son servicios esenciales, Hacienda debe explicar por qué DD.HH. soporta una reducción proporcional de 9,2% y qué prestaciones concretas se ajustarán para absorberla.",
  },
  {
    slug: "poduje-desautoriza-quiroz-recortes-vivienda",
    titulo: "Poduje desautoriza a Quiroz y firma continuidad de Pavimentos Participativos",
    resumen:
      "Poduje rechazó recortar Pavimentos Participativos y Mejoramiento de Condominios Sociales, dijo que Quiroz es “un ministro más” y firmó proyectos para las 16 regiones. Kast intentó bajar el conflicto hablando de equipo, pero la disputa mostró que las recomendaciones de Hacienda sí presionan programas concretos.",
    fecha: "2026-04-30",
    etiqueta: "feo",
    severidad: 4,
    ministerioSlug: "vivienda",
    documentoSlugs: ["oficio-circular-16-hacienda-2026"],
    fuenteUrls: [
      {
        url: "https://www.elmostrador.cl/noticias/pais/2026/04/30/poduje-se-distancia-de-quiroz-se-opone-a-recortes-y-advierte-que-tiene-un-solo-jefe-y-es-kast/",
        medio: "El Mostrador",
        titulo: "Poduje se distancia de Quiroz: se opone a recortes y advierte que tiene un solo jefe",
      },
      {
        url: "https://www.latercera.com/videos/noticia/poduje-firma-continuidad-de-programa-de-vivienda-que-quiroz-sugirio-recortar/",
        medio: "La Tercera",
        titulo: "Poduje firma continuidad de programa de Vivienda que Quiroz sugirió recortar",
      },
      {
        url: "https://www.df.cl/economia-y-politica/politica/kast-intenta-zanjar-disputa-por-recortes-entre-quiroz-y-poduje-somos-un",
        medio: "Diario Financiero",
        titulo: "Kast intenta zanjar disputa por recortes entre Quiroz y Poduje",
      },
      {
        url: "https://www.biobiochile.cl/noticias/nacional/chile/2026/04/30/quiroz-se-apega-al-guion-repite-respuesta-cuatro-veces-y-dice-que-entiende-preocupacion-de-poduje.shtml",
        medio: "BioBioChile",
        titulo: "Quiroz se apega al guion y repite respuesta ante preocupación de Poduje",
      },
    ],
    cuerpo:
      "La crisis de los oficios cruzó una línea política dentro del gabinete. El Mostrador reportó que Iván Poduje se desmarcó públicamente de Hacienda y descartó aplicar recortes en programas sociales del Minvu. El ministro dijo que no cortaría Pavimentos Participativos, por ser un programa antiguo, de bajo costo relativo y muy valorado por alcaldes y vecinos. También rechazó terminar el Mejoramiento de Condominios Sociales, que financia reposiciones de techos y reparaciones en viviendas entregadas hace décadas.\n\nLa frase clave no fue técnica, fue de autoridad: Poduje sostuvo que tiene un solo jefe, José Antonio Kast, y que Quiroz es un ministro más. Ese mismo día La Tercera informó que firmó proyectos de Pavimentos Participativos para las 16 regiones, invocando el instructivo presidencial de invertir en territorios donde más se requiere.\n\nKast intentó cerrar el flanco desde Aysén. Diario Financiero consignó que el Presidente presentó lo ocurrido como discusiones de un equipo de trabajo y como propuestas de Hacienda para mejorar el uso de recursos escasos. Quiroz, en cambio, evitó escalar y repitió que entendía la preocupación de Poduje por la reconstrucción de Ñuble y Biobío, cuyos fondos se terminaban el 30 de abril.\n\nLa lectura política es simple: si los oficios eran solo orientaciones inocuas, no habrían obligado a un ministro a salir a decir qué recomendaciones no va a cumplir. El conflicto muestra que la matriz de Hacienda sí baja a programas concretos, sí tensiona prioridades territoriales y sí obliga a cada cartera a decidir si obedece la planilla o protege su agenda.",
  },
  {
    slug: "mapa-402-programas-educacion-desarrollo-salud",
    titulo: "La Tercera: 402 programas bajo lupa; Educación, Desarrollo Social y Salud concentran 37%",
    resumen:
      "La Tercera publicó el mapa nacional de recomendaciones de Hacienda: 402 programas aparecen bajo revisión, con 260 rebajas y 142 cierres o reformulaciones. Educación, Desarrollo Social y Salud concentran 150 programas, el 37,3% del total.",
    fecha: "2026-04-30",
    etiqueta: "feo",
    severidad: 4,
    ministerioSlug: "hacienda",
    documentoSlugs: ["oficio-circular-16-hacienda-2026"],
    fuenteUrls: [
      {
        url: "https://www.latercera.com/nacional/noticia/educacion-desarrollo-social-y-salud-tienen-el-37-de-los-402-programas-que-quiroz-sugiere-ajustar-o-descontinuar/",
        medio: "La Tercera",
        titulo: "Educación, Desarrollo Social y Salud tienen el 37% de los 402 programas que Quiroz sugiere ajustar o descontinuar",
      },
      {
        url: "https://www.biobiochile.cl/noticias/nacional/chile/2026/04/29/el-detalle-de-los-recortes-de-quiroz-cifra-total-llega-a-los-6-mil-millones-que-kast-prometio-ajustar.shtml",
        medio: "BioBioChile",
        titulo: "El detalle de los recortes de Quiroz: cifra llega a los USD$6 mil millones",
      },
      {
        url: "https://www.theclinic.cl/2026/04/29/quiroz-apunta-a-posibles-pagos-indebidos-de-la-pgu-tras-cuestionamientos-por-recortes-en-programas-sociales/",
        medio: "The Clinic",
        titulo: "Quiroz defiende eventuales recortes a la PGU ante posibles pagos indebidos",
      },
    ],
    cuerpo:
      "El barrido del 30 de abril cambia la escala del caso. La Tercera publicó el mapa completo de los anexos de Hacienda: 402 programas quedan bajo revisión, sumando 260 recomendaciones de ajuste presupuestario y 142 recomendaciones de cierre, descontinuidad o reformulación. La explicación oficial insiste en eficiencia, pero el dato duro es que ya no se trata de casos aislados: es una matriz nacional de revisión programática.\n\nLa concentración social es evidente. Educación, Desarrollo Social y Salud acumulan 150 programas, el 37,3% del total. En Educación aparecen 57 programas bajo lupa: 42 ajustes y 15 cierres/reformulaciones. Desarrollo Social suma 47: 34 ajustes y 13 cierres/reformulaciones. Salud suma 46: 21 ajustes y 25 cierres/reformulaciones. Es decir, el corazón del ajuste se ubica en colegios, niñez, protección social, salud primaria, listas de espera y apoyos a familias.\n\nBioBioChile agregó el detalle de montos proyectados y la PGU vuelve a quedar arriba. Según esa nota, la Pensión Garantizada Universal concentraría una disminución de $906 mil millones; luego vienen pensiones del sistema de reparto por $321 mil millones, Transporte Público Metropolitano por $178 mil millones, CAE por $134 mil millones y SUF por $101 mil millones. También aparecen Pensión Básica Solidaria de Invalidez por $91 mil millones, gratuidad por $66 mil millones, Aporte Previsional Solidario de Vejez por $66 mil millones, jardines infantiles y salas cuna por $58 mil millones, APR por $49 mil millones y Bono Invierno por $47 mil millones.\n\nLa cifra política cierra el círculo: BioBio reporta que, en conjunto, los recortes proyectados alcanzan $5,4 billones, cerca de US$6.000 millones. Es el mismo orden de magnitud que Kast prometió ajustar en campaña mientras decía que no recortaría beneficios sociales existentes. Por eso la defensa de que son solo sugerencias no basta: el listado calza con la meta presidencial y pone en la planilla precisamente los beneficios que dijeron que no tocarían.\n\nQuiroz volvió a responder que no se tocará ningún beneficio social de la población y que la revisión busca eficiencia y prevenir malgasto. The Clinic precisó además que, para justificar la PGU, el ministro habló de posibles personas que recibieron el beneficio sin cumplir requisitos legales. Esa respuesta abre otra pregunta: si el problema son pagos indebidos, Hacienda debe mostrar cuántos casos detectó, cuánto dinero explican y por qué eso aparece como rebaja de un programa completo.",
  },
  {
    slug: "pgu-te-amo-pgu-rebaja-444425-millones",
    titulo: "“Te amo PGU”: PGU lidera la rebaja que prometieron no hacer",
    resumen:
      "CIPER reportó que Hacienda recomendó rebajar al menos 15% la Pensión Garantizada Universal. BioBioChile agregó que la PGU concentraría la mayor disminución proyectada del listado: $906 mil millones.",
    fecha: "2026-04-29",
    etiqueta: "feo",
    severidad: 4,
    ministerioSlug: "trabajo",
    documentoSlugs: ["oficio-circular-16-hacienda-2026"],
    fuenteUrls: [
      {
        url: "https://www.ciperchile.cl/2026/04/28/hacienda-recomendo-recortar-al-menos-15-de-la-pension-garantizada-universal-gratuidad-bono-invierno-y-asignacion-familiar/",
        medio: "CIPER",
        titulo: "Hacienda recomendó recortar al menos 15% de la PGU, Gratuidad, Bono Invierno y Asignación Familiar",
      },
      {
        url: "https://www.biobiochile.cl/noticias/nacional/chile/2026/04/29/quiroz-propone-recorte-a-260-programas-incluyendo-la-pgu-pese-a-promesa-de-kast.shtml",
        medio: "BioBioChile",
        titulo: "Quiroz propone recorte a 260 programas incluyendo la PGU pese a promesa de Kast",
      },
      {
        url: "https://www.biobiochile.cl/noticias/nacional/chile/2026/04/29/el-detalle-de-los-recortes-de-quiroz-cifra-total-llega-a-los-6-mil-millones-que-kast-prometio-ajustar.shtml",
        medio: "BioBioChile",
        titulo: "El detalle de los recortes de Quiroz: cifra llega a los USD$6 mil millones",
      },
      {
        url: "https://www.emol.com/noticias/Nacional/2025/07/21/1172714/kast-campana-te-amo-pgu.html",
        medio: "Emol",
        titulo: "Kast lanza campaña “Te amo PGU” para descartar fin del beneficio social",
      },
      {
        url: "https://infogate.cl/2025/09/kast-por-criticas-del-gobierno-y-jara-la-pgu-no-se-toca-y-el-aumento-de-pensiones-no-se-toca/",
        medio: "Infogate",
        titulo: "Kast: “La PGU no se toca y el aumento de pensiones no se toca”",
      },
      {
        url: "https://www.df.cl/economia-y-politica/pais/kast-en-debate-anatel-no-vamos-a-tocar-las-40-horas-no-vamos-a",
        medio: "Diario Financiero",
        titulo: "Kast en debate Anatel: no vamos a terminar con la PGU",
      },
      {
        url: "https://www.chileatiende.gob.cl/fichas/130457-aumento-de-la-pension-garantizada-universal-pgu",
        medio: "ChileAtiende",
        titulo: "Aumento de la Pensión Garantizada Universal",
      },
      {
        url: "https://previsionsocial.gob.cl/wp-content/uploads/consejo/informes/Informe-Consejo-Consultivo-Previsional-PDL-Reforma.pdf",
        medio: "Consejo Consultivo Previsional",
        titulo: "Informe con proyección de beneficiarios PGU 2026",
      },
      {
        url: "https://www.emol.com/noticias/Economia/2026/04/29/1198627/quiroz-pgu-recortes.html",
        medio: "Emol",
        titulo: "Quiroz descarta recortes a la PGU y apunta a eficiencia del gasto",
      },
      {
        url: "https://www.latercera.com/pulso/noticia/hacienda-aclara-que-no-recortaran-beneficios-de-la-pgu-y-trabajo-inicia-cruce-de-datos-para-su-correcto-otorgamiento/?outputType=base-amp-type",
        medio: "La Tercera",
        titulo: "Hacienda aclara que no recortarán beneficios de la PGU y Trabajo inicia cruce de datos",
      },
      {
        url: "https://radio.uchile.cl/2026/04/29/quiroz-garantiza-que-pgu-no-sufrira-recortes-no-vamos-a-tocar-ningun-beneficio-social/",
        medio: "Radio U. de Chile",
        titulo: "Quiroz garantiza que PGU no sufrirá recortes",
      },
      {
        url: "https://www.bcn.cl/leychile/navegar?idNorma=1212060",
        medio: "BCN",
        titulo: "Ley 21.735: reforma previsional y mejora de PGU",
      },
    ],
    cuerpo:
      "La PGU es el punto más delicado del ajuste. CIPER reportó que Hacienda recomendó rebajar al menos 15% otros 260 programas sociales y que la Pensión Garantizada Universal es el mayor presupuesto dentro de esa lista: $2.962.836 millones ejecutados en 2025. Si se aplica la rebaja mínima sobre esa base 2025, el golpe aritmético asciende a $444.425 millones. BioBioChile publicó luego otra base de cálculo: la PGU concentraría una disminución proyectada de $906 mil millones, la mayor del listado.\n\nEl alcance no es simbólico. El Consejo Consultivo Previsional proyectó 2.830.860 beneficiarios PGU para 2026 en el escenario con reforma, equivalente al 90% de la población de 65 años y más. ChileAtiende informa además que el aumento de la PGU se implementa por edad: 82 años o más desde 2025, 75 años o más desde septiembre de 2026 y 65 años o más desde septiembre de 2027, con un monto máximo de $250.275 en la ficha vigente. Ese calendario viene de la reforma previsional y está recogido por la Ley 21.735.\n\nLo que no existe todavía es un mecanismo público. Hacienda no ha mostrado una minuta que diga si el ajuste se busca bajando montos actuales, quitando beneficiarios, postergando entradas, endureciendo requisitos o moviendo el calendario de expansión. Esa falta de explicación importa porque permite decir que no se toca a pensionados actuales mientras se deja abierto el daño a quienes cumplen 75 años desde septiembre de 2026 o 65 años desde septiembre de 2027.\n\nLa defensa del Gobierno cambió el terreno. Emol, BioBioChile, The Clinic, Radio U. de Chile y La Tercera recogieron que Quiroz negó recortes a beneficios actuales y dijo que las personas que obtuvieron la PGU conforme a la ley no serían afectadas. Pero también apuntó a eficiencia, fraude social, mal gasto y eventuales casos de personas que no deberían recibirla. La Tercera agregó que Trabajo inició cruces de información para revisar PGU, Dipreca y Capredena, mientras fuentes conocedoras del sistema estiman que eventuales asignaciones incorrectas de PGU serían difíciles y marginales.\n\nSi esa es la vía real, Hacienda debe publicar cuántos casos PGU detectó, cuánto dinero explican y por qué eso justificaría listar todo el programa para una rebaja de al menos 15%. La aclaración de que no se tocarán beneficios actuales deja viva la otra pregunta: qué ocurrirá con focalización, acceso futuro y expansión a 75+ desde septiembre de 2026 y a 65+ desde septiembre de 2027.\n\nEl choque político es frontal porque la campaña hizo de esto una promesa explícita. En julio de 2025, Kast lanzó “Te amo PGU” para descartar el fin del beneficio. En septiembre reiteró que la PGU no se toca. En octubre, al defender su recorte de US$6.000 millones, dijo que no recortaría beneficios sociales existentes y CIPER consigna que aseguró que no afectaría beneficios como la PGU. En el debate Anatel de diciembre volvió a decir que no terminaría con la PGU.\n\nLa defensa de Hacienda puede insistir en que esto es una recomendación presupuestaria y no un decreto final. Pero eso no baja la gravedad: si la PGU no se tocaba, no debía aparecer en una planilla de rebaja. Y si el ajuste era solo perseguir fraude, el oficio debió decir fiscalización de casos irregulares, no rebajar al menos 15% el programa previsional más masivo del país.",
  },
  {
    slug: "educacion-deroga-circulares-convivencia-inclusion",
    titulo: "Mineduc deroga tres circulares sobre convivencia, inclusión y reglamentos internos",
    resumen:
      "La Superintendencia de Educación dejó sin efecto las circulares 781, 782 y 202 del gobierno de Boric. Regulaban convivencia escolar, medidas formativas, reglamentos internos, educación parvularia, inclusión, perspectiva de género, uso de uniforme y discriminación.",
    fecha: "2026-04-29",
    etiqueta: "malo",
    severidad: 3,
    ministerioSlug: "educacion",
    documentoSlugs: [],
    fuenteUrls: [
      {
        url: "https://www.emol.com/noticias/Nacional/2026/04/28/1198557/supereduc-deroga-tres-circulares.html",
        medio: "Emol",
        titulo: "Superintendencia de Educación deroga tres circulares aprobadas en gobierno de Boric",
      },
      {
        url: "https://www.24horas.cl/actualidad/nacional/mineduc-retira-tres-circulares-impulsadas-gabriel-boric",
        medio: "24 Horas",
        titulo: "Mineduc retira tres circulares impulsadas en el gobierno del expresidente Gabriel Boric",
      },
      {
        url: "https://www.cooperativa.cl/noticias/pais/educacion/colegios/educacion-deroga-tres-circulares-del-gobierno-anterior-para-fortalecer/2026-04-28/174118.html",
        medio: "Cooperativa",
        titulo: "Educación deroga tres circulares del gobierno anterior para fortalecer la convivencia",
      },
    ],
    cuerpo:
      "El barrido de Educación suma un giro no presupuestario, pero igual estructural. Emol y ADN reportaron que la Superintendencia de Educación derogó las circulares 781, 782 y 202, publicadas entre diciembre de 2025 y marzo de 2026. Las normas regulaban reglamentos internos, convivencia escolar, medidas formativas y educación parvularia.\n\nEl Gobierno lo presenta como simplificación normativa y alivio de carga administrativa: la Superintendencia habló de 2.900 obligaciones para los establecimientos y de un período de fiscalización formativa hasta septiembre de 2027. Pero el contenido derogado no era neutro: 24 Horas y Cooperativa consignaron que incluía identidad de género, uso de uniforme, discriminación, proporcionalidad, enfoque formativo, perspectiva de género e inclusión.\n\nLa contradicción política es directa: en plena crisis de convivencia escolar, el primer gesto es sacar instrumentos que ordenaban medidas formativas e inclusión. El Ejecutivo dice que la nueva Ley de Convivencia exigía adecuar el marco; aun así, derogar antes de mostrar el reemplazo concreto deja un vacío y una señal ideológica sobre qué asuntos se consideran carga administrativa.",
  },
  {
    slug: "injuv-recorte-47-reemplazo-contraloria",
    titulo: "INJUV pierde 47% del presupuesto y el Gobierno estudia reemplazarlo",
    resumen:
      "La Tercera reportó que Hacienda redujo en $3.859 millones los recursos disponibles del INJUV, equivalente a 47% de su presupuesto. Desarrollo Social estudia crear un nuevo organismo, mientras funcionarios recurrieron a Contraloría por posible reestructuración de facto.",
    fecha: "2026-04-29",
    etiqueta: "feo",
    severidad: 4,
    ministerioSlug: "desarrollo-social",
    documentoSlugs: [],
    fuenteUrls: [
      {
        url: "https://www.latercera.com/nacional/noticia/gobierno-estudia-crear-nuevo-organismo-en-reemplazo-del-injuv-mientras-funcionarios-recurren-a-contraloria-por-recortes/",
        medio: "La Tercera",
        titulo: "Gobierno estudia crear nuevo organismo en reemplazo del Injuv mientras funcionarios recurren a Contraloría",
      },
    ],
    cuerpo:
      "El caso INJUV deja de ser solo un número dentro del recorte de Desarrollo Social. La Tercera reportó que el decreto N°331 redujo en 47% el presupuesto disponible del Instituto Nacional de la Juventud: $3.859 millones menos. En paralelo, el Ministerio de Desarrollo Social anunció estudios para crear una nueva institucionalidad que sustituya las labores actuales del servicio.\n\nLa defensa oficial apunta a eficiencia: el subsecretario Alejandro Fernández sostuvo que el 75% del presupuesto del INJUV iría a personal, 15% a gastos administrativos y solo 10% a programas, unos $800 millones de $8 mil millones llegando realmente a jóvenes. Ese argumento puede abrir una discusión válida, pero no borra el dato duro: se recorta casi la mitad del presupuesto antes de tener una reforma institucional pública y tramitada.\n\nLos funcionarios llevaron el caso a Contraloría. Afinjuv y Fenamias pidieron pronunciamiento sobre la legalidad de la medida, argumentando que podría constituir una reestructuración de facto al reducir simultáneamente presupuesto y dotación sin acto formal de reorganización. La ANEF lo calificó como decreto regresivo y antidemocrático. El flanco es claro: si se quiere rediseñar una institución juvenil, debe hacerse con ley, datos y participación, no con tijera previa.",
  },
  {
    slug: "ddhh-cidh-desmantelamiento-memoria-reparacion",
    titulo: "82 organizaciones acuden a la CIDH por desmantelamiento en DD.HH. y memoria",
    resumen:
      "La Tercera reportó que más de 80 organizaciones de derechos humanos solicitaron a la CIDH requerir información al Estado de Chile por recortes, eliminación de unidades especializadas, debilitamiento de memoria, PRAIS, Programa de DD.HH. e indultos pasivos.",
    fecha: "2026-04-29",
    etiqueta: "feo",
    severidad: 4,
    ministerioSlug: "justicia",
    documentoSlugs: [],
    fuenteUrls: [
      {
        url: "https://www.latercera.com/nacional/noticia/organizaciones-de-ddhh-solicitan-a-comision-interamericana-pedir-informacion-al-estado-de-chile-por-desmantelamiento/",
        medio: "La Tercera",
        titulo: "Organizaciones de DD.HH. solicitan a Comisión Interamericana pedir información al Estado de Chile por desmantelamiento",
      },
    ],
    cuerpo:
      "El flanco de derechos humanos escaló al sistema interamericano. La Tercera reportó que más de 80 organizaciones de derechos humanos, agrupaciones de familiares y sitios de memoria solicitaron a la Comisión Interamericana de Derechos Humanos que requiera información al Estado chileno por lo que califican como grave desmantelamiento de instituciones de derechos humanos, memoria y reparación.\n\nLa presentación enumera medidas concretas: eliminación o debilitamiento de unidades especializadas en derechos humanos dentro del Estado, recortes que amenazan el Programa de Derechos Humanos, el PRAIS y más de 140 programas sociales, aplicación de indultos pasivos por omisión de actuación judicial estatal, y debilitamiento de políticas de memoria como Colonia Dignidad.\n\nEsto conecta con antecedentes ya cargados en el sitio: remoción de jefaturas del Plan Nacional de Búsqueda y del Programa de DD.HH., recomendación de cerrar el Programa de Derechos Humanos en el anexo de Justicia y dudas sobre indultos. La lectura crítica es de regresividad: el Gobierno puede decir que mantiene compromisos generales, pero las organizaciones ya están pidiendo control internacional porque ven retroceso institucional, no simples ajustes administrativos.",
  },
  {
    slug: "poduje-kast-humedales-vivienda-riesgo",
    titulo: "Kast blinda a Poduje y abre ofensiva contra la Ley de Humedales",
    resumen:
      "La Tercera reportó que Kast defendió a Iván Poduje tras sus críticas a la Ley de Humedales Urbanos, poniendo la urgencia habitacional por delante de la regulación ambiental. El caso Guacamayo 3 involucra a más de 570 familias en Valdivia, pero expertos advierten que construir sobre humedales puede generar riesgos estructurales, sanitarios y fiscales.",
    fecha: "2026-04-28",
    etiqueta: "malo",
    severidad: 4,
    ministerioSlug: "vivienda",
    documentoSlugs: [],
    fuenteUrls: [
      {
        url: "https://www.latercera.com/nacional/noticia/poduje-contra-todos-ofensiva-por-ley-de-humedales-tensiona-al-oficialismo-y-reabre-debate-por-viviendas-en-valdivia/",
        medio: "La Tercera",
        titulo: "Poduje contra todos: ofensiva por Ley de Humedales tensiona al oficialismo",
      },
      {
        url: "https://www.latercera.com/politica/noticia/kast-blinda-a-poduje-en-polemica-de-humedales-y-lanza-si-uno-se-equivoca-en-una-ley-hay-que-reconocerlo/",
        medio: "La Tercera",
        titulo: "Kast blinda a Poduje en polémica de humedales",
      },
    ],
    cuerpo:
      "El flanco ambiental se abrió por vivienda. La Tercera reportó que Poduje calificó la Ley de Humedales Urbanos como mal hecha y la responsabilizó de trabar proyectos habitacionales, especialmente Guacamayo 3 en Valdivia, con más de 570 familias esperando solución. Kast lo respaldó y dijo que si una ley se equivoca hay que reconocerlo, usando ejemplos como tranques de regadío o el río Mapocho para cuestionar el alcance de la norma.\n\nEl punto político es que el gobierno está transformando una tensión real —déficit habitacional y espera de familias— en ofensiva contra una protección ambiental. Poduje ya había dicho que no podían permitir que la burocracia retrase la casa propia, y Kast agregó que hay más de 500 mil familias sin vivienda y más de 120 mil viviendo en campamentos.\n\nLa alerta técnica no es menor. La misma cobertura recoge que especialistas advierten riesgos estructurales y sanitarios de construir en humedales. En Valdivia ya hubo viviendas sociales levantadas en zonas no aptas, con deterioro, hongos y termitas; una experta lo resumió como meter plata a un saco roto. Fundación Cosmos y académicas citadas por La Tercera remarcan que los humedales regulan agua, reducen inundaciones y son infraestructura natural crítica. El contraste con el ajuste ambiental ya cargado en el sitio es directo: mientras se cuestiona la ley, Hacienda también recomienda cerrar el programa de humedales del Ministerio del Medio Ambiente, por apenas $258 millones.",
  },
  {
    slug: "desarrollo-social-recorte-32721-millones-quiroz",
    titulo: "Quiroz firma recorte de $32.721 millones en Desarrollo Social",
    resumen:
      "BioBioChile reportó que Jorge Quiroz firmó una circular que modifica el presupuesto vigente del Ministerio de Desarrollo Social y Familia con una rebaja de $32.721 millones. El ajuste golpea ex Sename/Mejor Niñez, CONADI, INJUV, Chile Crece Contigo, Senadis, Senama y el ajuar para recién nacidos.",
    fecha: "2026-04-28",
    etiqueta: "feo",
    severidad: 4,
    ministerioSlug: "desarrollo-social",
    documentoSlugs: [],
    fuenteUrls: [
      {
        url: "https://www.biobiochile.cl/noticias/nacional/chile/2026/04/28/ajuar-para-recien-nacidos-lidera-los-recortes-en-desarrollo-social-quiroz-firmo-circular.shtml",
        medio: "BioBioChile",
        titulo: "Ajuar para recién nacidos lidera los recortes en Desarrollo Social: Quiroz firmó circular",
      },
      {
        url: "https://www.emol.com/noticias/Nacional/2026/04/28/1198560/kast-reitera-apoyo-poduje-quiroz.html",
        medio: "Emol",
        titulo: "Kast reitera apoyo a Poduje y Quiroz",
      },
    ],
    cuerpo:
      "Este caso sube un peldaño: no es solo el anexo 2027 ni una recomendación filtrada. BioBioChile reportó que Quiroz firmó una circular de nueve páginas que modifica el presupuesto vigente de Desarrollo Social con una reducción de $32.721 millones. El documento lleva firma por orden del ministro Jorge Antonio Quiroz Castro y entra en vigencia tras la toma de razón de Contraloría.\n\nLa rebaja cae en áreas sensibles. Mejor Niñez/ex Sename enfrenta el mayor recorte individual, con $12.748 millones destinados a transferencias corrientes al sector privado para Diagnóstico Clínico Especializado y Pericia. CONADI pierde $7.634 millones, aplicados a transferencias de capital al sector privado del Fondo de Tierras y Aguas Indígenas. INJUV registra $3.859 millones menos; la Subsecretaría de la Niñez, $3.359 millones; Senadis, $1.135 millones; Senama, $318 millones; y la Subsecretaría de Evaluación Social, $1.494 millones.\n\nEl golpe simbólico es fuerte: también aparece el Sistema de Protección Integral a la Infancia y el Programa de Apoyo al Recién Nacido, conocido como ajuar para recién nacidos, con una rebaja de $1.850 millones desde transferencias de Salud. Dentro de Servicios Sociales se mencionan recortes a Red Telecentros y Elige Vivir Sano. Mientras Kast respaldaba a Quiroz diciendo que no iban a cortar derechos, Hacienda ya tenía firmado un recorte vigente sobre niñez, discapacidad, pueblos indígenas, juventud y personas mayores.",
  },
  {
    slug: "ciper-rebaja-260-beneficios-sociales",
    titulo: "CIPER: Hacienda recomendó rebajar 260 beneficios, incluida PGU, gratuidad y Bono Invierno",
    resumen:
      "CIPER revisó los documentos de Hacienda y reportó que, además de 142 programas a descontinuar, el oficio recomienda rebajar al menos 15% otros 260 planes sociales. La lista incluye PGU, gratuidad, Bono Invierno, SUF, CAE, pensiones, jardines infantiles, transporte metropolitano y subsidios habitacionales.",
    fecha: "2026-04-28",
    etiqueta: "feo",
    severidad: 4,
    ministerioSlug: "hacienda",
    documentoSlugs: ["oficio-circular-16-hacienda-2026"],
    fuenteUrls: [
      {
        url: "https://www.ciperchile.cl/2026/04/28/hacienda-recomendo-recortar-al-menos-15-de-la-pension-garantizada-universal-gratuidad-bono-invierno-y-asignacion-familiar/",
        medio: "CIPER",
        titulo: "Hacienda recomendó recortar al menos 15% de la PGU, Gratuidad, Bono Invierno y Asignación Familiar",
      },
      {
        url: "https://www.theclinic.cl/2026/04/28/comision-de-boric-mencionada-por-quiroz-para-explicar-el-oficio-de-hacienda-propuso-descontinuar-gastos-pero-no-los-de-alimentacion-escolar/",
        medio: "The Clinic",
        titulo: "Comisión de Boric mencionada por Quiroz no propuso descontinuar alimentación escolar",
      },
      {
        url: "https://elpais.com/chile/2026-04-28/la-carta-de-una-pareja-el-ejemplo-de-quiroz-para-explicar-la-filtracion-del-oficio-que-sugiere-cortar-programas-publicos-como-la-alimentacion-escolar.html",
        medio: "El País Chile",
        titulo: "Quiroz explica filtración del oficio sobre programas públicos",
      },
      {
        url: "https://www.latercera.com/nacional/noticia/de-liceos-bicentenario-al-mim-quiroz-tambien-sugirio-recortar-al-menos-un-15-del-presupuesto-de-otros-260-programas/",
        medio: "La Tercera",
        titulo: "De Liceos Bicentenario a la PGU: Quiroz sugirió recortar otros 260 programas",
      },
      {
        url: "https://www.biobiochile.cl/noticias/nacional/chile/2026/04/29/quiroz-propone-recorte-a-260-programas-incluyendo-la-pgu-pese-a-promesa-de-kast.shtml",
        medio: "BioBioChile",
        titulo: "Quiroz propone recorte a 260 programas incluyendo la PGU pese a promesa de Kast",
      },
    ],
    cuerpo:
      "CIPER endureció el cuadro del Oficio Circular N°16: no se trata solo de 142 programas con recomendación de descontinuar. La revisión de los anexos muestra otros 260 planes sociales con recomendación de rebaja de al menos 15%, por $2,8 billones. Entre ellos aparecen PGU, gasto en transporte público metropolitano, Pensión Básica Solidaria de Invalidez, Subvención de Gratuidad, Aporte Previsional Solidario de Vejez, jardines infantiles, Bono Invierno, SUF, CAE, Subsidio Habitacional DS1 y Asignación Familiar.\n\nLa Tercera publicó el detalle político del mapa: Educación lidera con 42 programas a ajustar, incluyendo Liceos Bicentenario, retención escolar, aporte a universidades estatales, ocho becas, Vocación Profesor, Juan Gómez Millas y CAE. Desarrollo Social suma 34, con Mejor Niñez, captación de familias de acogida, adopción, residencias familiares, Chile Te Cuida, Plan Protege Calles y Red Local de Apoyos y Cuidados. Trabajo registra 26, con PGU, Bono Invierno, Bono por Hijo, Bono Bodas de Oro y beneficios del IPS. Cultura tiene 24, con MIM, GAM, Teatro Municipal y museos nacionales. Salud suma 21, incluyendo especialistas, productividad quirúrgica, listas de espera, VIH e inmunizaciones.\n\nEl choque con la promesa de campaña es directo. Kast dijo en octubre de 2025 que su ajuste de US$6.000 millones no cortaría beneficios sociales existentes y que no afectaría beneficios como la PGU. BioBioChile remarcó el mismo punto: el solo hecho de que la PGU esté bajo evaluación tensiona la narrativa oficial. La Tercera agrega que los 260 ajustes alcanzan a 22 ministerios: no es un caso aislado, es una arquitectura transversal de rebajas.\n\nLa defensa de Quiroz también quedó golpeada. El ministro intentó apoyarse en la comisión de gasto del gobierno anterior para explicar el uso de 'descontinuar'. The Clinic revisó ese informe y remarcó que, respecto del PAE, la comisión no recomendó recorte de recursos: lo trató como una excepción porque no existía otra oferta programática para resolver la política pública. El País agregó que Quiroz atribuyó el problema a palabras internas no perfectas y habló de quitar continuidad para reformular. Usar a Boric como escudo y luego cambiar el sentido de la palabra no tapa que Hacienda puso por escrito una recomendación distinta y políticamente explosiva.",
  },
  {
    slug: "gam-ampliacion-paralizada-frente-cultural",
    titulo: "MOP frena ampliación del GAM y deja abierta una obra cultural emblemática",
    resumen:
      "El País reportó que el Gobierno paralizó la segunda etapa del Centro Cultural Gabriela Mistral 45 días después de reactivarse la obra. El MOP argumentó falta de presupuesto y cuestionó la adjudicación por $114 mil millones; la constructora acusó al Ejecutivo de sembrar dudas sobre un proceso licitado por cerca de un año y medio.",
    fecha: "2026-04-28",
    etiqueta: "malo",
    severidad: 4,
    ministerioSlug: "obras-publicas",
    documentoSlugs: [],
    fuenteUrls: [
      {
        url: "https://elpais.com/chile/2026-04-28/el-freno-a-la-ampliacion-del-centro-cultural-gam-le-abre-al-gobierno-de-kast-un-frente-politico-y-cultural.html",
        medio: "El País Chile",
        titulo: "El freno a la ampliación del GAM abre un frente político al Gobierno de Kast",
      },
    ],
    cuerpo:
      "El frente cultural sube de escala. El País reportó que la segunda etapa del GAM, que ampliaría el centro de 22.000 a 37.000 metros cuadrados e incluiría una sala de 2.500 espectadores, fue paralizada 45 días después de reactivarse. El MOP notificó el 16 de abril a la constructora GAM Moller DVC SpA que no seguiría adelante por situación presupuestaria.\n\nEl Gobierno sostiene que la obra fue adjudicada por $114.000 millones, más de $40.000 millones sobre el presupuesto oficial, y que no existía factibilidad presupuestaria. Pero el consorcio respondió que el proceso duró cerca de un año y medio, que cinco empresas fueron precalificadas y que la diferencia no puede leerse como simple sobreprecio porque se trataba de una obra inconclusa con riesgo técnico alto.\n\nEl costo político no es solo cultural. La obra tiene 45% de avance heredado y la paralización puede deteriorar lo construido. El gobernador Claudio Orrego estimó además cerca de $6.000 millones en compensaciones por el término del contrato. Es la misma lógica del ajuste: se invoca estrechez fiscal, pero el costo de parar también lo paga el Estado.",
  },
  {
    slug: "culturas-recorte-efectivo-51750-millones",
    titulo: "Culturas: Hacienda concreta recorte de $51.750 millones y deja tres programas sin recursos",
    resumen:
      "The Clinic reportó que Hacienda ingresó a Contraloría modificaciones presupuestarias para Culturas por $51.750 millones, casi 10% del presupuesto aprobado. Tres programas quedan sin recursos según los decretos: Infraestructura Cultural, Somos Barrio y el aporte a Artistas del Acero.",
    fecha: "2026-04-27",
    etiqueta: "malo",
    severidad: 4,
    ministerioSlug: "culturas",
    documentoSlugs: ["oficio-circular-16-hacienda-2026"],
    fuenteUrls: [
      {
        url: "https://www.theclinic.cl/2026/04/27/hacienda-concreta-recorte-a-ministerio-de-las-culturas-por-51-750-millones-tres-programas-quedan-sin-recursos-tras-ajuste-presupuestario/",
        medio: "The Clinic",
        titulo: "Hacienda concreta recorte a Ministerio de las Culturas por $51.750 millones",
      },
      {
        url: "https://www.theclinic.cl/2026/04/24/la-recomendacion-de-hacienda-culturas-programas/",
        medio: "The Clinic",
        titulo: "La recomendación de Hacienda a Culturas",
      },
    ],
    cuerpo:
      "Este caso ya no es solo una recomendación para el Presupuesto 2027. The Clinic reportó que Hacienda ingresó el 24 de abril a Contraloría decretos con modificaciones presupuestarias para Culturas por $51.750 millones, casi 10% del presupuesto anual aprobado. El mayor recorte cae en la Subsecretaría de las Culturas y las Artes ($36.267 millones) y luego en el Servicio Nacional del Patrimonio Cultural ($15.382 millones).\n\nLa nota agrega un punto duro: de los decretos se deduce que tres programas quedan sin recursos. Se trata del Financiamiento de Infraestructura Cultural, el Programa Somos Barrio de la Subsecretaría de Prevención del Delito y el aporte a la Corporación Cultural Artistas del Acero. Es decir, mientras el Gobierno intenta presentar los anexos como una conversación técnica futura, al menos en Culturas ya hay recorte efectivo ingresado a control de legalidad.\n\nEl contraste con el anexo del 24 de abril refuerza el patrón: patrimonio, bibliotecas, FOJI, Escuelas de Rock y espacios culturales quedan bajo presión al mismo tiempo que se instala el relato de que la palabra correcta era 'reformular'. En la práctica, la tijera ya empezó a operar.",
  },
  {
    slug: "seguridad-pnco-calles-sin-violencia-descontinuar",
    titulo: "Seguridad: Hacienda recomienda cerrar Crimen Organizado, Calles Sin Violencia e Innovación Territorial",
    resumen:
      "El anexo de Seguridad Pública recomienda descontinuar tres programas por $98.714 millones: Programa Contra el Crimen Organizado, Calles Sin Violencia e Innovación y Transferencia Técnica Territorial. Además propone rebajar cinco programas, incluidos Denuncia Seguro, Televigilancia, Apoyo a Víctimas y Seguridad Municipal.",
    fecha: "2026-04-24",
    etiqueta: "malo",
    severidad: 4,
    ministerioSlug: "seguridad-publica",
    documentoSlugs: ["oficio-circular-16-hacienda-2026"],
    fuenteUrls: [
      {
        url: "https://www.theclinic.cl/2026/04/24/descontinuar-el-programa-contra-el-crimen-organizado-y-calles-sin-violencia-las-recomendaciones-de-hacienda-a-seguridad/",
        medio: "The Clinic",
        titulo: "Descontinuar el Programa Contra el Crimen Organizado y Calles Sin Violencia",
      },
      {
        url: "https://www.elmostrador.cl/noticias/pais/2026/04/24/crimen-organizado-y-calles-sin-violencia-programas-de-seguridad-que-el-gobierno-busca-desfinanciar/",
        medio: "El Mostrador",
        titulo: "Crimen Organizado y Calles sin violencia: Programas de Seguridad que el Gobierno busca desfinanciar",
      },
    ],
    cuerpo:
      "La filtración específica de Seguridad Pública corrige una laguna relevante del sitio: no era solo una alerta genérica. The Clinic reportó tres programas a descontinuar con monto individual: Programa Contra el Crimen Organizado ($70.995.506.000), Calles Sin Violencia ($25.223.277.000) e Innovación y Transferencia Técnica Territorial ($2.495.543.000). La suma de los tres bordea $98.714 millones.\n\nLa misma nota agrega cinco programas con rebaja presupuestaria: Denuncia Seguro, Sistema de Televigilancia (ex Calle Segura), Programa de Apoyo a Víctimas, Sistema Nacional de Seguridad Municipal y Cooperación Internacional para Policías Uniformadas Extranjeras (ex Becas CECIPU).\n\nEl Mostrador agrega el punto político y operativo: el PNCO financia capacidades asociadas a PDI, Aduanas y persecución del crimen organizado; Calles Sin Violencia sostiene parte de los equipos ECOH del Ministerio Público. Por eso el flanco golpea directamente el relato central del gobierno: seguridad como prioridad número uno.",
  },
  {
    slug: "cultura-cntv-bibliomas-patrimonio-recortes",
    titulo: "Cultura y Segegob: Hacienda apunta al Fondo CNTV, Bibliomas, patrimonio mundial y FOJI",
    resumen:
      "El barrido de anexos suma un flanco cultural: Segegob queda con el Fondo CNTV marcado para cierre por $5.650 millones, mientras Culturas registra 10 programas a descontinuar y un recorte sugerido de $77.893 millones, incluyendo Bibliomas, Biblioteca Publica Digital, Sitios de Patrimonio Mundial, Escuelas de Rock y FOJI.",
    fecha: "2026-04-24",
    etiqueta: "malo",
    severidad: 3,
    ministerioSlug: "culturas",
    documentoSlugs: ["oficio-circular-16-hacienda-2026"],
    fuenteUrls: [
      {
        url: "https://www.theclinic.cl/2026/04/24/fin-al-fondo-del-cntv-hacienda-propone-ministerio-secretaria-general-de-gobierno-descontinuar-fondo-que-permitio-programas-como-31-minutos-o-los-80/",
        medio: "The Clinic",
        titulo: "Fin al fondo del CNTV: Hacienda propone descontinuar fondo que permitió programas como 31 Minutos o Los 80",
      },
      {
        url: "https://www.theclinic.cl/2026/04/24/la-recomendacion-de-hacienda-culturas-programas/",
        medio: "The Clinic",
        titulo: "La recomendación de Hacienda a Culturas",
      },
    ],
    cuerpo:
      "El ajuste no solo cae sobre salud, educación o seguridad. En Segegob, The Clinic reportó que Hacienda recomienda descontinuar el Fondo del Consejo Nacional de Televisión por $5.650.418.000, una herramienta que financió producciones reconocibles como 31 Minutos, Los 80, Una historia necesaria y Wow Lisa.\n\nEn Culturas, la recomendación alcanza 10 programas a descontinuar y ajustes sobre 39,3% de la oferta programática, con recorte sugerido por $77.893 millones. La lista aterriza en bienes visibles: Bibliomas, Biblioteca Publica Digital, Programa de Sitios de Patrimonio Mundial, Escuelas de Rock, Orquestas FOJI y apoyos a instituciones como GAM, MIM, Centro Cultural La Moneda y Teatro Municipal por la vía de ajustes.\n\nEl punto editorial es que la tijera no se limita a duplicidades técnicas: toca acceso cultural cotidiano, patrimonio mundial y producción audiovisual chilena. Hacienda mantiene que es una recomendación, no cierre final; por lo mismo queda como alerta programática hasta el Presupuesto 2027.",
  },
  {
    slug: "ciencia-becas-milenio-capital-humano",
    titulo: "Ciencia: becas de postgrado, Milenio, Fondequip y PIA en recomendación de cierre",
    resumen:
      "El Mostrador reportó que Hacienda apunta al corazón del sistema científico: becas de postgrado en Chile ($68.628 millones), becas en el extranjero ($32.145 millones), Iniciativa Científica Milenio ($19.723 millones), Fondequip y PIA.",
    fecha: "2026-04-24",
    etiqueta: "malo",
    severidad: 4,
    ministerioSlug: "ciencia",
    documentoSlugs: ["oficio-circular-16-hacienda-2026"],
    fuenteUrls: [
      {
        url: "https://www.elmostrador.cl/noticias/pais/2026/04/24/eliminacion-de-programas-en-ciencia-apunta-al-corazon-del-sistema-la-formacion-de-capital-humano/",
        medio: "El Mostrador",
        titulo: "Eliminación de programas en Ciencia apunta al corazón del sistema: la formación de capital humano",
      },
      {
        url: "https://www.fastcheck.cl/2026/04/19/se-recorta-becas-chile-los-dichos-de-la-ministra-lincolao-en-el-congreso-nacional-que-ahora-descarta/",
        medio: "Fast Check",
        titulo: "¿Se recorta Becas Chile?",
      },
    ],
    cuerpo:
      "Ciencia ya venía con un flanco abierto por Becas Chile: Lincolao dijo en el Congreso que habría reducción en magíster y postdoctorado en el extranjero, luego matizó que no era una decisión zanjada, y Fast Check verificó que la propuesta original a DIPRES seguía incluyendo reducciones.\n\nEl nuevo anexo agranda el problema. El Mostrador reportó recomendaciones para descontinuar Becas de Postgrado en Chile ($68.628 millones), Becas de Postgrado en el Extranjero ($32.145 millones), Iniciativa Científica Milenio ($19.723 millones), Fondequip ($5.759 millones) y el Programa de Investigación Asociativa, con $42 mil millones asociados a centros de investigación, centros basales y anillos.\n\nLa contradicción con el relato de productividad es fuerte: se promete crecimiento de largo plazo, pero se apunta a capital humano avanzado, equipamiento científico e investigación de excelencia. No es un ahorro aislado; es desarmar capacidades que demoran años en reconstruirse.",
  },
  {
    slug: "transportes-vivienda-recortes-regiones-barrios",
    titulo: "Transportes y Vivienda: transporte regional, condominios sociales y pavimentación entre los mayores cierres",
    resumen:
      "The Clinic ubicó Transporte Público Regional ($437 mil millones), Mejoramiento de Condominios DS27 ($162 mil millones) y Pavimentación Participativa (casi $127 mil millones) entre los mayores programas sugeridos para descontinuar.",
    fecha: "2026-04-24",
    etiqueta: "malo",
    severidad: 4,
    ministerioSlug: "transportes",
    documentoSlugs: ["oficio-circular-16-hacienda-2026"],
    fuenteUrls: [
      {
        url: "https://www.theclinic.cl/2026/04/24/subvenciones-y-alimentacion-escolar-junto-a-transporte-publico-regional-el-ranking-de-los-diez-programas-con-mayor-gasto-que-hacienda-sugiere-descontinuar/",
        medio: "The Clinic",
        titulo: "Ranking de los diez programas con mayor gasto que Hacienda sugiere descontinuar",
      },
    ],
    cuerpo:
      "El ranking de mayores programas a descontinuar no se queda en Santiago ni en el gobierno central. Transporte Público Regional aparece como tercer mayor gasto sugerido para cierre, con $437 mil millones. Es un golpe político fácil de entender: conectividad, tarifas y movilidad cotidiana fuera de la Región Metropolitana.\n\nVivienda suma dos programas de barrio: Mejoramiento de Condominios de Vivienda DS27 Capítulo III, con $162 mil millones, y Pavimentación Participativa, con casi $127 mil millones. En conjunto bordean $289 mil millones y conectan la discusión fiscal con veredas, calles, condominios sociales y calidad urbana.\n\nLa defensa oficial es que el oficio orienta el proceso 2027 y no ejecuta recortes inmediatos. Pero la recomendación escrita fija prioridades: se protege el marco fiscal a costa de programas visibles en regiones y barrios.",
  },
  {
    slug: "medioambiente-especies-humedales-ruidos-cierre",
    titulo: "Medio Ambiente: especies, humedales, educación ambiental y ruidos quedan expuestos",
    resumen:
      "El Mostrador reportó cinco programas ambientales con recomendación de cierre: Conservación de Especies, SNCAE, humedales, suelos contaminados y fiscalización de ruidos. El monto total bordea $1.305 millones, bajo en gasto pero alto en capacidad preventiva.",
    fecha: "2026-04-24",
    etiqueta: "malo",
    severidad: 3,
    ministerioSlug: "medio-ambiente",
    documentoSlugs: ["oficio-circular-16-hacienda-2026"],
    fuenteUrls: [
      {
        url: "https://www.elmostrador.cl/noticias/pais/2026/04/24/recortes-a-medio-ambiente-golpea-base-de-la-proteccion-ambiental-incluida-conservacion-de-especies/",
        medio: "El Mostrador",
        titulo: "Recortes a Medio Ambiente golpean base de la protección ambiental",
      },
    ],
    cuerpo:
      "La señal ambiental es distinta a otros anexos: los montos son relativamente bajos, pero los programas cumplen funciones preventivas. El Mostrador reportó recomendación de cierre para Conservación de Especies ($417.762.740), Sistema Nacional de Certificación Ambiental de Establecimientos Educacionales ($463.646.640), humedales ($258.667.790), suelos contaminados ($145.449.430) y fiscalización de ruidos ($19.843.490).\n\nLa suma bordea $1.305 millones: una fracción mínima del ajuste total. Precisamente por eso sirve como caso editorial. Si el objetivo era eficiencia fiscal, estos cierres entregan poco ahorro y golpean capacidades de protección territorial, educación ambiental, control de contaminación y prevención de conflictos.\n\nEl caso conversa con el doble estándar ambiental ya cargado en el sitio: se acusó a Boric de gobernar por ideología, pero el primer ajuste propio toca herramientas técnicas y preventivas de bajo costo.",
  },
  {
    slug: "hacienda-recorta-mas-de-6-mil-millones-usd",
    titulo: "Hacienda instruye descontinuar 142 programas y rebajar 260 mas en el ajuste fiscal 2027-2031",
    resumen:
      "El Ministerio de Hacienda envio el Oficio Circular N°16 a las carteras del Ejecutivo fijando un Marco de Mediano Plazo restrictivo para 2027-2031. La instruccion ordena formular el presupuesto 2027 con techo en el nivel 2026 descontando ajustes ya hechos, y prioriza obligaciones legales por sobre programas. El recorte total proyectado supera los US$6.000 millones a nivel pais.",
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
      {
        url: "https://www.emol.com/noticias/Economia/2026/04/25/1198242/oficios-hacienda-recorte-presupuesto.html",
        medio: "Emol",
        titulo: "Quiroz explica el alcance de los oficios de Hacienda enviados a 22 ministerios",
      },
    ],
    cuerpo:
      "El oficio firmado por el Ministro de Hacienda Jorge Quiroz Castro instruye a las carteras del Ejecutivo a formular sus presupuestos 2027 dentro de un nuevo Marco de Mediano Plazo (MMP) 2027-2031, vinculante y restrictivo. Emol consigno el envio a 22 ministerios. La regla central: el nivel de gasto de cada año tendra como techo maximo el presupuesto 2026 descontados los dos ajustes fiscales ya implementados ese mismo año.\n\nEl criterio aplicado va programa por programa. Cada uno recibe una de tres clasificaciones: 'descontinuar', 'ajuste presupuestario' (rebaja de al menos 15%) o 'sin observaciones'. La metodologia mezcla las recomendaciones de la Comision para Reformas Estructurales del Gasto Publico, evaluaciones ex ante y ex post de DIPRES y los datos de no-reporte al Registro de Informacion Social.\n\nEl alcance es transversal pero el primer anexo conocido — el de Desarrollo Social y Familia — muestra recortes profundos sobre programas que llegan a poblaciones especialmente vulnerables: niñez, discapacidad, pueblos indigenas, adultos mayores y personas en situacion de calle.",
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
    fuenteUrls: [
      {
        url: "https://www.latercera.com/politica/noticia/ministro-quiroz-aclara-oficio-no-va-a-haber-ningun-tipo-de-recorte-alimentario-becas-para-nada-de-ninguno-por-supuesto-que-no/",
        medio: "La Tercera",
        titulo: "Quiroz aclara oficio: “No va a haber ningún tipo de recorte alimentario, becas”",
      },
      {
        url: "https://www.latercera.com/politica/noticia/exministro-cataldo-responde-a-kast-y-defiende-gestion-en-alimentacion-escolar/",
        medio: "La Tercera",
        titulo: "Exministro Cataldo responde a Kast y defiende gestión en alimentación escolar",
      },
    ],
    cuerpo:
      "El anexo programatico de Educacion del Oficio Circular N°16 marca al Programa de Alimentacion Escolar (PAE) de JUNAEB como 'descontinuar'. El programa entrega comida a niños y jovenes en condicion de vulnerabilidad escolar y ejecuto $1.061 mil millones de pesos en 2025 — es el programa con mayor monto ejecutado entre todos los marcados para eliminar a nivel pais.\n\nJunto con el PAE, Educacion descontinua otros 14 programas: el Fondo de Apoyo a la Educacion Publica ($167 mil millones), el Sistema Nacional de Induccion y Mentoria docente, la Beca PACE de acceso a la educacion superior, el Plan Nacional de Lectura, el Plan Nacional de Escritura, el Plan de Fortalecimiento de las Artes en el Sistema Educativo, la Beca de Apoyo Vocacion de Profesor, Reinsercion Escolar, Escuela Para Directivos, Promocion de Talentos en Escuelas y Liceos, la Beca Distincion a las Trayectorias Educativas (Ex Beca Puntaje PSU), el Programa de Acompañamiento PACE, Otras Subvenciones Escolares ($556 mil millones), el Jardin Infantil Transitorio Estacional y Actividades de Interes Nacional. Otros 42 programas reciben rebaja de al menos -15%, incluido el Credito con Aval del Estado (CAE) y la Subvencion Gratuidad.\n\nTras el rechazo público, Quiroz sostuvo que no habría recortes alimentarios ni de becas y que el oficio no era decreto final. El problema verificable sigue abierto: la recomendación escrita existe. El 25 de abril, Nicolás Cataldo respondió a Kast que el PAE opera todos los días para más de 2,5 millones de estudiantes, por lo que la polémica se explica por la recomendación del actual gobierno, no por una supuesta eliminación previa.",
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
    fuenteUrls: [
      {
        url: "https://www.theclinic.cl/2026/04/24/desde-bodas-de-oro-al-bono-por-hijo-los-beneficios-que-hacienda-recomendo-rebajar-o-descontinuar-en-medio-del-ajuste-fiscal/",
        medio: "The Clinic",
        titulo: "Desde bodas de oro al bono por hijo, los beneficios que Hacienda recomendó rebajar o descontinuar",
      },
    ],
    cuerpo:
      "El anexo programatico del Ministerio del Trabajo y Prevision Social del Oficio Circular N°16 cataloga 35 programas en 5 servicios. La decision politicamente mas visible es la rebaja al Bono Invierno: el subsidio que reciben pensionados de menores ingresos durante los meses frios queda incluido en la lista de ajuste presupuestario de al menos -15%.\n\nTambien se rebajan el Subsidio Familiar (SUF) que beneficia a familias vulnerables, el Aporte Familiar Permanente, el Bono al Trabajo de la Mujer del SENCE, las Pensiones del Sistema de Reparto, las Leyes Reparatorias de Derechos Humanos, el Bono por Hijo, el Bono Bodas de Oro, el Bono de Reconocimiento, el Subsidio Previsional a Trabajadores Jovenes y el Subsidio de Discapacidad. The Clinic agrego el flanco comunicacional: Hacienda puso bajo rebaja beneficios reconocibles para hogares y adultos mayores mientras insistia en que el oficio no era decreto final.\n\nSe descontinuan tres programas: las Becas del Fondo de Cesantia Solidario (BFCS) del SENCE, el programa Inversion en la Comunidad ($135.233 millones ejecutados en 2025) y el Programa de Fomento a la Empleabilidad Sostenible (PROFES, ex Apoyo al Empleo Ley 20.595 y Sistema Chile Solidario), que apoyaba la insercion laboral de personas en situacion de vulnerabilidad.",
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
      {
        url: "https://www.theclinic.cl/2026/04/24/subvenciones-y-alimentacion-escolar-junto-a-transporte-publico-regional-el-ranking-de-los-diez-programas-con-mayor-gasto-que-hacienda-sugiere-descontinuar/",
        medio: "The Clinic",
        titulo: "Ranking de los diez programas con mayor gasto que Hacienda sugiere descontinuar",
      },
      {
        url: "https://www.theclinic.cl/2026/04/24/desde-bodas-de-oro-al-bono-por-hijo-los-beneficios-que-hacienda-recomendo-rebajar-o-descontinuar-en-medio-del-ajuste-fiscal/",
        medio: "The Clinic",
        titulo: "Beneficios que Hacienda recomendó rebajar o descontinuar",
      },
    ],
    cuerpo:
      `De los ${PROGRAMAS_MDSYF.length} programas del Ministerio de Desarrollo Social y Familia, ${totalDescontinuados} reciben recomendacion de descontinuar y ${totalAjuste} de ajuste presupuestario de al menos 15%. La afectacion es transversal: golpea a CONADI (8 de 17 programas a descontinuar), SENADIS (2 descontinuados, 2 ajuste), Mejor Niñez (8 con ajuste sobre 24 programas), SENAMA (3 ajustes sobre 7), y especialmente a la Subsecretaria de Servicios Sociales con 13 ajustes y 2 descontinuaciones sobre 27 programas.\n\nEntre los recortados destacan programas con beneficiarios identificables: el Bono de Graduacion de Cuarto Medio se descontinua, las Ayudas Tecnicas de SENADIS (apoyos para personas con discapacidad) se eliminan, Chile Te Cuida sufre ajuste, el Plan de Invierno Noche Digna (rebautizado Protege Calle) recibe rebaja, y la Oficina Local de la Niñez ve recortado su presupuesto pese a haber sido bandera del sistema de proteccion infantil. The Clinic ademas ubico el Fondo de Tierras y Aguas Indigenas de CONADI entre los diez mayores programas sugeridos para terminar, con $72 mil millones de gasto. El monto ejecutado 2025 de los programas a descontinuar suma aproximadamente CLP$${(montoDescontinuado / 1_000_000).toFixed(1)} mil millones.`,
  },
  {
    slug: "salud-recorte-3-pct-gremios",
    titulo: "Salud: recorte transversal de 3% pese a red pública sin holgura",
    resumen:
      "Hacienda incluyó a Salud en la rebaja transversal de 3% del gasto ministerial. Gremios de la red pública llegaron a La Moneda para pedir que Kast retirara la medida: estimaron el recorte en $517.532 millones y advirtieron impacto directo sobre usuarios, listas de espera y capacidad de respuesta.",
    fecha: "2026-04-06",
    etiqueta: "malo",
    severidad: 4,
    ministerioSlug: "salud",
    documentoSlugs: [],
    fuenteUrls: [
      {
        url: "https://www.latercera.com/nacional/noticia/gremios-solicitan-a-kast-que-reconsidere-recorte-del-3-a-salud-es-un-impacto-directo-a-usuarios-que-dependen-del-sistema-publico/",
        medio: "La Tercera",
        titulo: "Gremios solicitan a Kast que reconsidere recorte de 3% a Salud",
      },
      {
        url: "https://www.emol.com/noticias/Nacional/2026/03/18/1194616/revision-proyectos-retiro-gobierno-kast.html",
        medio: "Emol",
        titulo: "Recortes y decretos retirados: el reseteo impulsado por el Gobierno de Kast",
      },
    ],
    cuerpo:
      "El ajuste de arranque no fue quirúrgico: Emol consignó que la rebaja de 3% se aplicaría de forma transversal al gasto bruto de cada ministerio, vía Dipres y decreto de Hacienda. En Salud, los gremios Fenasenf, Fenpruss, Fenats y Confedeprus entregaron carta en La Moneda para pedir que la medida se retirara. Su cálculo: $517.532 millones menos sobre un presupuesto neto de $17.251.055 millones.\n\nLa crítica golpea el corazón de la promesa social del gobierno: la ministra May Chomali sostuvo que el recorte no debía afectar la atención de pacientes, pero los gremios respondieron que la red pública ya opera sin margen significativo de ajuste, con presupuesto que alcanzaría solo para unos 10 meses y con riesgo de adelantar el agotamiento de recursos hacia fines de octubre. También advirtieron efectos sobre listas de espera, calidad de atención y sobrecarga del personal. La frase política es simple: se prometió eficiencia; la primera tijera entró por la salud pública.",
  },
  {
    slug: "salud-24-programas-descontinuar",
    titulo: "Salud: Hacienda propone descontinuar 24 programas, incluyendo prevención del suicidio y salud mental APS",
    resumen:
      "The Clinic reportó que el anexo de Hacienda a Salud propone descontinuar 23 programas de Redes Asistenciales y el Programa Nacional de Prevención del Suicidio. El recorte agregado superaría los $300 mil millones y toca APS, demencia, cuidados paliativos, salud mental, FOFAR, hospitalización domiciliaria y salud trans.",
    fecha: "2026-04-24",
    etiqueta: "malo",
    severidad: 4,
    ministerioSlug: "salud",
    documentoSlugs: ["oficio-circular-16-hacienda-2026"],
    fuenteUrls: [
      {
        url: "https://www.theclinic.cl/2026/04/24/los-23-programas-que-hacienda-pidio-descontinuar-en-el-ministerio-de-salud-atencion-a-personas-migrantes-prevencion-del-suicidio-salud-trans-y-de-acompanamiento-de-genero/amp/",
        medio: "The Clinic",
        titulo: "Los 24 programas que Hacienda propone descontinuar en el Ministerio de Salud",
      },
      {
        url: "https://www.latercera.com/nacional/noticia/una-senal-de-alerta-federacion-nacional-de-enfermeros-rechaza-propuesta-de-ajustes-presupuestarios-de-hacienda/",
        medio: "La Tercera",
        titulo: "Fenasenf rechaza propuesta de ajustes presupuestarios de Hacienda",
      },
    ],
    cuerpo:
      "El recorte de Salud ya no se limita al ajuste transversal de 3%. Según The Clinic, el anexo enviado por Hacienda a la cartera recomienda descontinuar 23 programas de la Subsecretaría de Redes Asistenciales y uno de la Subsecretaría de Salud Pública: el Programa Nacional de Prevención del Suicidio.\n\nLa lista incluye áreas sensibles de atención primaria y apoyo comunitario: Salud Mental en APS, Cuidados Paliativos Universales en APS, Plan Nacional de Demencia, Fondo de Farmacia, Hospitalización Domiciliaria, atención a personas migrantes, salud trans, programas odontológicos y apoyo a niños, niñas y adolescentes con vulneración de derechos. El medio reporta que la reducción agregada supera los $300 mil millones. Hacienda sostiene que son recomendaciones técnicas y no una decisión final; políticamente, el flanco queda abierto porque el ajuste toca directamente la red pública que el gobierno dijo que iba a proteger.\n\nEl 25 de abril, Fenasenf elevó la alerta: advirtió que los ajustes impactan la capacidad de atención, reducen prestaciones y cobertura, aumentan presión sobre equipos sobreexigidos y ponen en riesgo tratamientos críticos como terapias oncológicas, hemodiálisis, manejo de infartos y cirugías de alta complejidad.",
  },
  {
    slug: "ciencia-becas-chile-recorte-matizado",
    titulo: "Lincolao y Becas Chile: primero recorte, después “no es una decisión zanjada”",
    resumen:
      "La ministra Ximena Lincolao dijo en la Comisión de Ciencia que una reducción sería Becas Chile para magíster y postdoctorado en el extranjero. Luego sostuvo que nunca fue un anuncio y que dependía de DIPRES. Fast Check verificó que la propuesta original no cambió.",
    fecha: "2026-04-19",
    etiqueta: "feo",
    severidad: 3,
    ministerioSlug: "ciencia",
    documentoSlugs: [],
    fuenteUrls: [
      {
        url: "https://www.fastcheck.cl/2026/04/19/se-recorta-becas-chile-los-dichos-de-la-ministra-lincolao-en-el-congreso-nacional-que-ahora-descarta/",
        medio: "Fast Check",
        titulo: "¿Se recorta Becas Chile? Los dichos de la ministra Lincolao en el Congreso Nacional que ahora descarta",
      },
      {
        url: "https://www.cooperativa.cl/noticias/site/artic/20260327/pags-amp/20260327164530.html",
        medio: "Cooperativa",
        titulo: "Lincolao defendió recorte a Becas Chile: “El retorno de la inversión no es muy claro”",
      },
    ],
    cuerpo:
      "El 23 de marzo, ante la Comisión de Ciencia de la Cámara, Ximena Lincolao explicó el ajuste de su cartera: de $588 mil millones a cerca de $565 mil millones. Al responder por los programas afectados, identificó como una de las reducciones las becas de magíster y postdoctorado en el extranjero.\n\nDespués, en entrevista con The Clinic, matizó: dijo que “nunca anunciamos que íbamos a cortar Becas Chile”, que era una propuesta enviada a DIPRES y que no había decisión zanjada. Fast Check contrastó ambas versiones con el Ministerio de Ciencia: la cartera informó que no había alterado su propuesta original a DIPRES, la cual contempla reducciones en Becas Chile para postdoctorado y magíster en el extranjero. La contradicción no es si el decreto final existe; es comunicacional y política: se presentó como reducción, luego como no-anuncio, mientras la propuesta seguía siendo la misma.",
  },
  {
    slug: "auditoria-externa-internacional-cancelada",
    titulo: "La auditoría externa internacional prometida en campaña se cancela por falta de plata",
    resumen:
      "El Gobierno desestimó licitar la auditoría externa internacional al Estado que Kast había presentado como bandera anticorrupción. BioBioChile reportó que el Ejecutivo la reemplazó por una revisión interna iniciada el 20 de marzo, pese a que la promesa hablaba de Contraloría y firmas auditoras de primer nivel mundial.",
    fecha: "2026-04-05",
    etiqueta: "feo",
    severidad: 4,
    ministerioSlug: "secretaria-general-presidencia",
    documentoSlugs: [],
    fuenteUrls: [
      {
        url: "https://www.biobiochile.cl/noticias/nacional/chile/2026/04/05/pese-a-promesa-de-campana-gobierno-finalmente-desestima-auditoria-externa-internacional.shtml",
        medio: "BioBioChile",
        titulo: "Pese a promesa de campaña: Gobierno finalmente desestima auditoría externa internacional",
      },
      {
        url: "https://www.adnradio.cl/2026/04/05/se-cae-una-de-las-promesas-de-campana-gobierno-del-presidente-kast-descarta-auditoria-internacional-al-estado/",
        medio: "ADN Radio",
        titulo: "Gobierno descarta auditoría externa internacional al Estado",
      },
    ],
    cuerpo:
      "La promesa era dura: una Auditoría Total al Estado con Contraloría y firmas auditoras internacionales para revisar ministerios, subsecretarías, servicios y empresas públicas, publicar íntegramente hallazgos y detectar sobreprecios, redes de operadores políticos y contrataciones indebidas. El 5 de abril, BioBioChile informó que el Gobierno desestimó licitar esa auditoría externa por estrechez fiscal.\n\nLa sustitución es clave: no desaparece toda revisión, pero cambia el estándar. En vez de auditoría externa internacional, se instaló una revisión interna con servicios públicos remitiendo información sobre uso de recursos fiscales entre 2025 y el 11 de marzo de 2026, bajo un Comité Estratégico de Auditoría y Revisión Fiscal. El problema editorial es evidente: el gobierno que prometió controlar el gasto no quiso pagar el instrumento externo que iba a probarlo.",
  },
  {
    slug: "gratuidad-universitaria-limites-y-moratoria",
    titulo: "Gratuidad universitaria: del “no recorte social” al límite por edad, CAE y moratoria",
    resumen:
      "La primera versión del plan buscó limitar gratuidad a menores de 30 años, fortalecer cobros del CAE y frenar extensión a nuevos deciles. Tras resistencia, la megarreforma terminó con una moratoria de dos años para nuevas instituciones y gatillos más difíciles para extender el beneficio.",
    fecha: "2026-03-16",
    etiqueta: "malo",
    severidad: 4,
    ministerioSlug: "educacion",
    documentoSlugs: [],
    fuenteUrls: [
      {
        url: "https://www.biobiochile.cl/noticias/nacional/chile/2026/03/16/cambios-en-la-gratuidad-enfrentan-al-gobierno-de-kast-con-la-oposicion-acusan-promesa-incumplida.shtml",
        medio: "BioBioChile",
        titulo: "Cambios en la gratuidad enfrentan al Gobierno de Kast con la oposición",
      },
      {
        url: "https://www.latercera.com/nacional/noticia/megarreforma-gobierno-morigero-cambios-a-la-gratuidad-tras-resistencia-oficialista/",
        medio: "La Tercera",
        titulo: "Megarreforma: gobierno morigeró cambios a la gratuidad tras resistencia oficialista",
      },
    ],
    cuerpo:
      "El flanco partió el 16 de marzo: BioBioChile consignó que el proyecto contemplaba fortalecer mecanismos de cobro del CAE y ajustar la gratuidad universitaria, limitándola a menores de 30 años y frenando su extensión a nuevos deciles. La oposición lo leyó como incumplimiento de la promesa de no recortar beneficios sociales; el oficialismo respondió que no se eliminaban beneficios, sino que se ordenaban.\n\nLa historia siguió cambiando. La Tercera reportó que la propuesta mutó desde límite por edad a regla de 12 años desde el egreso escolar, y desde una moratoria de cuatro años para nuevas instituciones a una pausa de dos años en el texto final. El resultado político es doble: el Gobierno no logró sostener su diseño original ni abandonar el recorte de fondo. La versión final hace más difícil activar nuevos deciles y congela por dos años el ingreso de nuevas instituciones a gratuidad.",
  },
  {
    slug: "doble-funcion-asesores-presidenciales",
    titulo: "Doble función en La Moneda rompe el estándar de “tolerancia cero”",
    resumen:
      "La Tercera reveló que Catalina Ugarte y Víctor Valdés percibieron ingresos simultáneos como autoridades electas y parte del equipo del Presidente electo durante la transición. Diputados del PDG recurrieron a Contraloría por asesores presidenciales con cargos de elección popular.",
    fecha: "2026-04-15",
    etiqueta: "feo",
    severidad: 3,
    ministerioSlug: "secretaria-general-gobierno",
    documentoSlugs: [],
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
      "La campaña instaló una línea roja: tolerancia cero a dobles sueldos y privilegios estatales. La Tercera reveló que la propia jefa de gabinete, Catalina Ugarte, y el asesor del Segundo Piso Víctor Valdés recibieron pagos desde Presidencia durante la transición mientras mantenían cargos de elección popular. Ugarte figuraba como concejala de Las Condes; Valdés como CORE Metropolitano.\n\nLa explicación oficial distingue entre doble sueldo permanente y pago acotado por transición. Esa diferencia puede importar legalmente, pero no salva el estándar político autoimpuesto. El 18 de abril, diputados del PDG recurrieron a Contraloría para que revise la legalidad de asesores con doble función y si hubo falta de instrucción presidencial. La frase que queda: la probidad prometida empezó con letra chica.",
  },
  {
    slug: "plan-busqueda-ddhh-jefaturas-removidas",
    titulo: "Plan de Búsqueda: remueven jefaturas clave mientras prometen continuidad",
    resumen:
      "El País reportó el despido de tres funcionarias especializadas en derechos humanos que lideraban áreas del Programa de DD.HH. y el Plan Nacional de Búsqueda. El Gobierno dijo que mantendrá el plan, pero cambió jefaturas sensibles en una política vinculada a 1.469 detenidos desaparecidos.",
    fecha: "2026-03-31",
    etiqueta: "feo",
    severidad: 4,
    ministerioSlug: "justicia",
    documentoSlugs: [],
    fuenteUrls: [
      {
        url: "https://elpais.com/chile/2026-04-01/kast-descabeza-el-plan-de-busqueda-de-detenidos-desaparecidos-y-despide-a-tres-de-sus-jefas-es-una-decision-claramente-politica.html",
        medio: "El País Chile",
        titulo: "Kast descabeza el Plan de Búsqueda de detenidos desaparecidos",
      },
    ],
    cuerpo:
      "El 31 de marzo se informó la salida de tres profesionales que ocupaban jefaturas en áreas clave del Programa de Derechos Humanos y del Plan Nacional de Búsqueda, Verdad y Justicia. La política busca esclarecer el destino de 1.469 personas desaparecidas durante la dictadura y trabaja con familiares, equipos técnicos y causas judiciales.\n\nEl Gobierno sostuvo que no existe ánimo de eliminar el plan y que los ajustes buscan mejorar gestión y confianza. La contradicción está en el movimiento concreto: si la promesa es continuidad, el primer acto visible fue cambiar jefaturas especializadas de una política de Estado especialmente sensible. No es un trámite administrativo neutro; toca memoria, justicia y relación con familiares de víctimas.",
  },
  {
    slug: "oea-lgbtiq-chile-no-adhiere",
    titulo: "OEA: Chile deja de adherir a declaración LGBTIQ+ que respaldaban gobiernos anteriores",
    resumen:
      "En la primera sesión del Consejo Permanente de la OEA bajo Kast, Chile no adhirió a la declaración del Grupo Núcleo LGBTIQ+. El País consignó que la decisión contrastó con los respaldos de Bachelet, Piñera y Boric.",
    fecha: "2026-03-20",
    etiqueta: "malo",
    severidad: 3,
    ministerioSlug: "relaciones-exteriores",
    documentoSlugs: [],
    fuenteUrls: [
      {
        url: "https://elpais.com/chile/2026-03-20/el-gobierno-de-kast-decide-no-adherir-a-la-declaracion-de-derechos-lgbtiq-en-la-oea.html",
        medio: "El País Chile",
        titulo: "El Gobierno de Kast decide no adherir a la declaración de derechos LGBTIQ+ en la OEA",
      },
    ],
    cuerpo:
      "Chile se abstuvo de adherir a la declaración del Grupo Núcleo LGBTIQ+ en la OEA, una instancia que promueve protección de derechos desde 2016. La Cancillería argumentó que el texto podía generar división regional y reafirmó compromiso general con derechos humanos sin discriminación.\n\nEl dato político es la discontinuidad: El País consignó que la posición contrasta con los respaldos de Bachelet, Piñera y Boric. En una semana, Chile rompió una línea de política exterior que había cruzado gobiernos de distinto signo. El Gobierno puede defender matices de lenguaje, pero la señal internacional fue dejar de firmar.",
  },
  {
    slug: "retiro-masivo-decretos-boric",
    titulo: "Casi 100 decretos y reglamentos retirados: el Gobierno pausa políticas ya tramitadas",
    resumen:
      "La Tercera revisó la información pública de Contraloría y contabilizó 94 decretos retirados por el gobierno de Kast hasta el 1 de abril, 85 de ellos sin reingreso a esa fecha. Entre los casos: Ley de Adopción, decretos ambientales, Ley de Pesca, negociación ramal, FES, Plan Nacional de Derechos Humanos e iniciativas de telecomunicaciones.",
    fecha: "2026-04-01",
    etiqueta: "feo",
    severidad: 3,
    documentoSlugs: [],
    fuenteUrls: [
      {
        url: "https://www.latercera.com/nacional/noticia/gobierno-de-kast-suma-retiro-de-casi-100-decretos-y-reglamentos-de-la-administracion-boric/?outputType=base-amp-type",
        medio: "La Tercera",
        titulo: "Gobierno de Kast suma retiro de casi 100 decretos y reglamentos de la administración Boric",
      },
    ],
    cuerpo:
      "La promesa de un gobierno de emergencia se ejecutó como retroexcavadora administrativa: en menos de tres semanas, Contraloría contabilizó 94 decretos retirados por la nueva administración, y La Tercera registró 85 no reingresados al 1 de abril. La mayoría venía de Medio Ambiente (40), seguida por Defensa (8), Obras Públicas (6), Seguridad Pública (6) y Energía (5).\n\nEl Ejecutivo lo presentó como revisión técnica; el efecto práctico fue frenar implementación. La lista incluye el decreto de la nueva Ley de Adopción, decretos ambientales como protección de salares y especies, retiro del proyecto de Ley de Pesca, retiro de negociación ramal, rechazo al FES como reemplazo del CAE, retiro del Plan Nacional de Derechos Humanos y revisión de regulaciones sectoriales. Es un giro ideológico con costo institucional: cada retiro puede ser defendido caso a caso, pero el volumen muestra una estrategia de reseteo, no solo correcciones puntuales.",
  },
  {
    slug: "internet-servicio-publico-reglamentos-retirados",
    titulo: "Internet como servicio público: Subtel retira los reglamentos que bajaban la ley a la práctica",
    resumen:
      "El Ministerio de Transportes y Telecomunicaciones retiró de Contraloría los decretos N°3 y N°6 asociados a la Ley de Internet como Servicio Público. DF reportó que ambos reglamentos proponían reglas concretas para comunidades de telecomunicaciones, fiscalización, relación empresa-usuario y obligaciones de información.",
    fecha: "2026-04-09",
    etiqueta: "malo",
    severidad: 3,
    ministerioSlug: "transportes",
    documentoSlugs: [],
    fuenteUrls: [
      {
        url: "https://www.df.cl/empresas/actualidad/gobierno-retira-de-contraloria-dos-decretos-ingresados-para-regular-ley-de",
        medio: "Diario Financiero",
        titulo: "Gobierno retira de Contraloría dos decretos ingresados para regular Ley de Internet como servicio público",
      },
    ],
    cuerpo:
      "La Ley de Internet como Servicio Público fue publicada en julio de 2024, pero necesitaba reglamentos para operar. DF reportó que el gobierno retiró dos decretos ingresados por la administración anterior: el N°3, sobre comunidades de telecomunicaciones para prestar internet en zonas con baja cobertura; y el N°6, que modernizaba reglas entre compañías, usuarios y autoridad.\n\nLa Subtel dijo que los textos estaban en análisis y que podrían reingresarse. Hasta que eso ocurra, el avance queda pausado. El costo político no es abstracto: los decretos incluían obligaciones de interconexión, portales de gestión 24/7, notificaciones a clientes, restricciones a cambios contractuales sin autorización y lenguaje claro para usuarios. Es otro caso donde el gobierno invoca revisión técnica, pero la consecuencia inmediata es congelar derechos de consumidores y conectividad territorial.",
  },
  {
    slug: "bachelet-onu-retiro-apoyo-chile",
    titulo: "Kast retira el apoyo de Chile a Bachelet en la ONU y abre un flanco diplomático",
    resumen:
      "El 24 de marzo el Gobierno retiró el respaldo del Estado de Chile a la candidatura de Michelle Bachelet a la Secretaría General de la ONU, pese a que había sido presentada con México y Brasil. Brasil y México mantuvieron el apoyo, Bachelet siguió en carrera y exautoridades acusaron daño diplomático y sabotaje.",
    fecha: "2026-03-24",
    etiqueta: "feo",
    severidad: 3,
    ministerioSlug: "relaciones-exteriores",
    documentoSlugs: [],
    fuenteUrls: [
      {
        url: "https://www.cooperativa.cl/noticias/pais/relaciones-exteriores/onu/kast-retiro-apoyo-del-estado-de-chile-a-la-candidatura-onu-de-bachelet/2026-03-24/122854.html",
        medio: "Cooperativa",
        titulo: "Kast retiró apoyo del Estado de Chile a la candidatura ONU de Bachelet",
      },
      {
        url: "https://www.t13.cl/noticia/politica/revelan-gobierno-kast-no-informo-mexico-brasil-retiro-apoyo-bachelet-29-03-2026",
        medio: "T13",
        titulo: "Revelan que Gobierno de Kast no informó a México y Brasil retiro de apoyo a Bachelet",
      },
      {
        url: "https://elpais.com/chile/2026-03-31/bachelet-revela-que-pinera-la-impulso-a-liderar-la-onu-me-dijo-si-tu-quieres-yo-te-apoyo-y-te-propongo.html",
        medio: "El País Chile",
        titulo: "Bachelet revela que Piñera la impulsó a liderar la ONU",
      },
      {
        url: "https://www.biobiochile.cl/noticias/nacional/chile/2026/04/22/intencion-politica-evidente-excanciller-valdes-acusa-sabotaje-a-candidatura-de-bachelet-a-la-onu.shtml",
        medio: "BioBioChile",
        titulo: "Excanciller Valdés acusa sabotaje del gobierno de Kast a campaña de Bachelet en la ONU",
      },
    ],
    cuerpo:
      "La candidatura de Michelle Bachelet a la Secretaría General de Naciones Unidas fue oficializada por el gobierno de Gabriel Boric el 2 de febrero de 2026 con respaldo de Chile, México y Brasil. El gobierno de Kast mantuvo el tema en suspenso desde el cambio de mando y el 24 de marzo retiró el apoyo del Estado chileno. La Cancillería argumentó alta dispersión de candidaturas y falta de viabilidad; políticamente, el resultado fue que Chile dejó de patrocinar una carta propia mientras México y Brasil siguieron respaldándola.\n\nLa decisión abrió un flanco diplomático por tres razones. Primero, T13 reportó que Chile no informó previamente a México y Brasil que retiraría el apoyo, pese a que la postulación se había construido con esos países. Segundo, Bachelet reveló que Sebastián Piñera la había impulsado a buscar la Secretaría General de la ONU, lo que debilitó la lectura de que el respaldo fuera solo una jugada de Boric o de la izquierda. Tercero, Bachelet continuó la carrera: el retiro chileno no cerró la candidatura, solo dejó a la expresidenta compitiendo sin el país de origen detrás.\n\nEl conflicto escaló el 22 de abril, cuando el excanciller Juan Gabriel Valdés acusó al Ejecutivo de sabotear la candidatura y habló de una intención política evidente. La Cancillería, en paralelo, confirmó una investigación por eventuales gestiones de diplomáticos chilenos a favor de Bachelet. Hecho y atribución quedan separados: el retiro del apoyo es decisión oficial del Gobierno; la acusación de sabotaje es de Valdés. Editorialmente, el costo es claro: un gobierno que habla de instalar la marca Chile en el mundo retiró apoyo a una candidatura chilena con trayectoria ONU, respaldo regional y proyección multilateral.",
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
      {
        url: "https://elpais.com/chile/2026-04-28/kast-busca-contener-el-gasto-publico-mientras-impulsa-una-megarreforma-que-bajara-la-recaudacion-fiscal.html",
        medio: "El País Chile",
        titulo: "Kast busca contener el gasto público mientras impulsa una megarreforma que bajará la recaudación fiscal",
      },
      {
        url: "https://elpais.com/chile/2026-04-29/bernardo-fontaine-el-hombre-de-kast-para-codelco-al-que-le-despreocupan-los-menores-recursos-fiscales.html",
        medio: "El País Chile",
        titulo: "Bernardo Fontaine, el hombre de Kast para Codelco al que le despreocupan los menores recursos fiscales",
      },
    ],
    cuerpo:
      "La megareforma cuenta con mas de 40 medidas. Las cuatro mas relevantes desde el punto de vista patrimonial: (1) reduccion del impuesto corporativo del 27% al 23%, (2) reintegracion del sistema tributario, (3) repatriacion de capitales con tasa rebajada, (4) exencion transitoria de contribuciones. Otras: exencion transitoria de IVA a la venta de viviendas nuevas, agilizacion de permisos medioambientales, subsidio al empleo formal.\n\nFundacion Nodo XXI cruzo las cuatro medidas con las declaraciones patrimoniales de 63 funcionarios del Gobierno. Resultado: beneficio agregado de CLP$292.515 millones, con el 98,8% concentrado en 6 personas. Fernando Barros (ministro de Defensa) captura mas del 70%, equivalente a ~CLP$210.000 millones, por la repatriacion de capitales. Daniel Mas (ministro de Economia) ahorraria CLP$498,5 millones anuales por la rebaja del impuesto corporativo y CLP$1.005 millones por la reintegracion. Jorge Quiroz (ministro de Hacienda) se beneficia personalmente por la exencion de contribuciones a sus propiedades en la Region Metropolitana.\n\nEl País agregó el flanco fiscal: la Dipres advierte que medidas como la rebaja gradual del impuesto a empresas y el crédito tributario al empleo bajan ingresos del Estado y que esos efectos solo se compensarían a partir de 10 años. Jorge Rodríguez Cabello, expresidente del Consejo Fiscal Autónomo, estimó que la reforma agrega alrededor de US$2.000 millones adicionales que financiar, sobre un camino fiscal que ya exigía cerrar unos US$12.000 millones hacia 2030.\n\nEl 29 de abril, El País sumó el caso Bernardo Fontaine, cercano a Kast y descrito como su hombre para Codelco: defendió que el proyecto genere menos recursos fiscales y dijo que no lo ve como algo negativo porque la baja del gasto solo sería practicable cuando al Estado le falte la plata. La frase desnuda el núcleo político de la reforma: no solo acepta menor recaudación, la usa como palanca para forzar recortes futuros.\n\nLa oposicion presento requerimiento ante Contraloria por posible conflicto de interes en la confeccion del proyecto. Cadem 19-abr: 49% cree que la megareforma beneficia a los mas ricos.",
  },
];
