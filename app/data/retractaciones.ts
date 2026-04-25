import type { Retractacion } from "./types";

/**
 * Catalogo de declaraciones publicas que terminaron rectificadas, borradas,
 * desmentidas por la propia administracion o contradichas por datos oficiales.
 * Es el ranking de quién ha tenido que desdecirse desde la instalacion del
 * gobierno de Jose Antonio Kast.
 */
export const RETRACTACIONES: Retractacion[] = [
  {
    slug: "kast-no-hay-ninguna-cifra-boric",
    titulo: "Kast dice que Boric no tiene ninguna cifra buena; datos públicos muestran excepciones",
    emisor: "José Antonio Kast",
    cargo: "Presidente de la República",
    fecha: "2026-04-25",
    tipo: "desmentido_por_datos",
    severidad: 3,
    fraseOriginal:
      "Cuando uno mira lo que nos dejaron, no hay ninguna cifra donde ellos puedan decir que lo hicieron bien.",
    retractacion:
      "La frase absoluta no resiste contraste. Hay indicadores que sí mejoraron o desmienten el relato totalizante: la pobreza por ingresos CASEN 2022 fue menor que en 2020 y 2017; los homicidios bajaron en 2023 y 2024 desde el peak de 2022; y el PIB 2025 creció en torno a 2,3%, sin recesión.",
    desmentidoPor: "Datos públicos y chequeos profesionales",
    fuenteUrls: [
      {
        url: "https://www.emol.com/noticias/Nacional/2026/04/25/1198251/kast-tono-gobierno-boric.html",
        medio: "Emol",
        titulo: "Kast endurece tono contra administración Boric",
      },
      {
        url: "https://www.malaespinacheck.cl/politica/2025/12/03/es-falso-que-aumento-la-pobreza-durante-este-gobierno-a-diferencia-de-lo-que-dijo-kast/",
        medio: "Mala Espina Check",
        titulo: "Es falso que aumentó la pobreza durante este gobierno",
      },
      {
        url: "https://minsegpublica.cl/ministro-de-seguridad-publica-dio-a-conocer-los-resultados-del-informe-nacional-de-homicidios-consumados-en-chile-2024/",
        medio: "Ministerio de Seguridad Pública",
        titulo: "Informe nacional de homicidios consumados 2024",
      },
    ],
    cuerpo:
      "Kast puede sostener una crítica política dura al gobierno anterior. Lo que no calza es el absoluto “no hay ninguna cifra”. En pobreza, Mala Espina verificó que no existía medición publicada que respaldara aumento bajo Boric y que CASEN 2022 marcó 6,5%, menor que 2020 y 2017. En seguridad, el informe oficial de homicidios muestra baja de tasa en 2023 y 2024 tras el peak de 2022. En economía, el propio set macro del sitio registra crecimiento PIB 2025 cercano a 2,3%, por lo que el diagnóstico de desastre total borra indicadores que sí existen.",
  },
  {
    slug: "kast-no-indultos-rabat-solicitudes",
    titulo: "Kast dijo que no habría indultos; Rabat confirma solicitudes en estudio",
    emisor: "José Antonio Kast",
    cargo: "Presidente de la República",
    ministerioSlug: "justicia",
    fecha: "2025-12-09",
    fechaRetractacion: "2026-04-01",
    tipo: "contradiccion_interna",
    severidad: 4,
    fraseOriginal:
      "Nuestro programa de gobierno no considera ningún indulto, jamás indultaríamos a alguien que cometa algún tipo de delito de ese tipo.",
    retractacion:
      "Ya instalado el gobierno, Amnistía Internacional registró que Kast abrió la puerta a indultar a excarabineros y exmilitares condenados por delitos del estallido. Luego el ministro Fernando Rabat confirmó que hay aproximadamente 20 solicitudes de indulto pendientes y que dos expedientes estaban siendo estudiados conforme a la legislación vigente.",
    desmentidoPor: "Amnistía Internacional y Fernando Rabat",
    fuenteUrls: [
      {
        url: "https://www.emol.com/noticias/Nacional/2025/12/09/1185437/kast-descartaria-entregar-indultos-gobierno.html",
        medio: "Emol",
        titulo: "Kast descarta entregar indultos durante su eventual gobierno",
      },
      {
        url: "https://www.amnesty.org/es/documents/amr22/0830/2026/es/",
        medio: "Amnistía Internacional",
        titulo: "Chile: No al indulto para excarabineros y exmilitares condenados",
      },
      {
        url: "https://www.biobiochile.cl/noticias/nacional/chile/2026/03/31/kast-confirma-que-aplicara-indultos-y-no-descarta-beneficiar-a-condenados-por-derechos-humanos.shtml",
        medio: "BioBioChile",
        titulo: "Kast confirma que aplicará indultos y no descarta condenados por derechos humanos",
      },
      {
        url: "https://www.emol.com/noticias/Nacional/2026/04/01/1196019/ministro-justicia-rabat.html",
        medio: "Emol",
        titulo: "Ministro de Justicia afirma que existen 20 solicitudes de indultos",
      },
    ],
    cuerpo:
      "La defensa posible del Gobierno es formal: estudiar expedientes no equivale a conceder indultos. Pero el giro político existe. En campaña, Kast usó los indultos de Boric como línea roja y dijo que su programa no consideraba ninguno. En gobierno, la cartera de Justicia reconoció solicitudes pendientes, expedientes en estudio y una discusión sobre cómo ejercer la facultad hacia adelante.",
  },
  {
    slug: "kast-alimentos-ninos-pae-cataldo",
    titulo: "Kast acusa que Boric quitó alimentos; Cataldo responde con 2,5 millones de raciones diarias",
    emisor: "José Antonio Kast",
    cargo: "Presidente de la República",
    fecha: "2026-04-25",
    tipo: "desmentido_por_datos",
    severidad: 4,
    fraseOriginal:
      "No eran capaces de entregar útiles escolares hasta septiembre, y hoy dicen que vamos a quitar alimentos. Eso es no conocer Chile.",
    retractacion:
      "Nicolás Cataldo respondió que la alimentación escolar se entrega todos los días a más de 2,5 millones de estudiantes y acusó desconocimiento del sistema. La contradicción se agrava porque el oficio de Hacienda del propio gobierno de Kast recomendó descontinuar el PAE y Quiroz tuvo que salir a negar recortes alimentarios y de becas.",
    desmentidoPor: "Nicolás Cataldo y el propio oficio de Hacienda",
    fuenteUrls: [
      {
        url: "https://www.latercera.com/politica/noticia/presidente-kast-arremete-contra-el-gobierno-anterior-y-acusa-desastre-en-empleo-seguridad-y-gestion/",
        medio: "La Tercera",
        titulo: "Presidente Kast acusa “desastre” en empleo, seguridad y gestión",
      },
      {
        url: "https://www.latercera.com/politica/noticia/exministro-cataldo-responde-a-kast-y-defiende-gestion-en-alimentacion-escolar/",
        medio: "La Tercera",
        titulo: "Exministro Cataldo responde a Kast y defiende gestión en alimentación escolar",
      },
      {
        url: "https://www.latercera.com/politica/noticia/ministro-quiroz-aclara-oficio-no-va-a-haber-ningun-tipo-de-recorte-alimentario-becas-para-nada-de-ninguno-por-supuesto-que-no/",
        medio: "La Tercera",
        titulo: "Quiroz aclara oficio: “No va a haber ningún tipo de recorte alimentario, becas”",
      },
    ],
    cuerpo:
      "La acusación presidencial intentó convertir el flanco del PAE en herencia de Boric. Pero el dato publicado el mismo día va en sentido contrario: Cataldo defendió que el sistema alimenta diariamente a más de 2,5 millones de estudiantes mediante licitaciones permanentes. El problema político no nace en el gobierno anterior, sino en el documento de Hacienda de Kast que puso al PAE entre los programas recomendados para descontinuar.",
  },
  {
    slug: "quiroz-no-recorte-alimentario-becas",
    titulo: "Quiroz niega recortes alimentarios y de becas después de firmar el oficio",
    emisor: "Jorge Quiroz",
    cargo: "Ministro de Hacienda",
    ministerioSlug: "hacienda",
    fecha: "2026-04-24",
    tipo: "contradiccion_interna",
    severidad: 4,
    fraseOriginal:
      "No va a haber ningún tipo de recorte alimentario, becas, para nada; de ninguno, por supuesto que no.",
    retractacion:
      "La aclaración intenta bajar el costo político, pero el oficio de Hacienda sí incluyó al Programa de Alimentación Escolar de JUNAEB entre las recomendaciones de descontinuar y marcó otros programas educacionales y becas para cierre o ajuste. Quiroz sostuvo que era un oficio, no un decreto; esa distinción no borra la recomendación escrita.",
    desmentidoPor: "Oficio Circular N°16 de Hacienda y anexo de Educación",
    fuenteUrls: [
      {
        url: "https://www.latercera.com/politica/noticia/ministro-quiroz-aclara-oficio-no-va-a-haber-ningun-tipo-de-recorte-alimentario-becas-para-nada-de-ninguno-por-supuesto-que-no/",
        medio: "La Tercera",
        titulo: "Ministro Quiroz aclara polémico oficio",
      },
      {
        url: "https://www.theclinic.cl/2026/04/24/descontinuar-142-programas-y-rebajar-presupuesto-en-otros-260-las-recomendaciones-de-hacienda-a-ministerios-para-recortar-mas-de-6-mil-millones-de-dolares/",
        medio: "The Clinic",
        titulo: "Las recomendaciones de Hacienda a ministerios para recortar más de US$6.000 millones",
      },
    ],
    cuerpo:
      "El Gobierno puede afirmar que no existe decreto final. Lo verificable es más básico: Hacienda envió un oficio con recomendaciones programáticas y en ese listado aparece el PAE como programa a descontinuar. Por eso la aclaración de Quiroz no cierra el caso; confirma que el costo político obligó al ministro a separar “oficio” de “decisión” después de que la recomendación ya estaba escrita.",
  },
  {
    slug: "quintana-policias-desarmadas-moralmente",
    titulo: "Quintana acusa abandono policial; Ramos la califica de falsa y temeraria",
    emisor: "Ana Victoria Quintana",
    cargo: "Subsecretaria de Prevención del Delito",
    ministerioSlug: "seguridad",
    fecha: "2026-04-25",
    tipo: "desmentido_por_datos",
    severidad: 3,
    fraseOriginal:
      "Las autoridades anteriores dejaron solas a las policías, las desarmaron moralmente.",
    retractacion:
      "Víctor Ramos, exsubsecretario del Interior, respondió que la evidencia de fortalecimiento policial durante el gobierno de Boric era abrumadora y calificó la acusación como falsa y temeraria. El mismo día, parlamentarios RN pidieron a Kast cumplir un bono a Carabineros anunciado por la administración anterior, lo que debilita la tesis de abandono total.",
    desmentidoPor: "Víctor Ramos y antecedentes de continuidad institucional",
    fuenteUrls: [
      {
        url: "https://www.latercera.com/nacional/noticia/ana-victoria-quintana-las-autoridades-anteriores-dejaron-solas-a-las-policias-las-desarmaron-moralmente/",
        medio: "La Tercera",
        titulo: "Ana Victoria Quintana: “Las autoridades anteriores dejaron solas a las policías”",
      },
      {
        url: "https://www.latercera.com/nacional/noticia/exsubsecretario-ramos-califica-de-falsa-y-temeraria-acusacion-de-quintana-sobre-falta-de-apoyo-a-las-policias-en-gobierno-anterior/",
        medio: "La Tercera",
        titulo: "Exsubsecretario Ramos califica de “falsa y temeraria” acusación de Quintana",
      },
      {
        url: "https://www.latercera.com/politica/noticia/bancada-rn-solicita-al-presidente-kast-el-cumplimiento-de-bono-comprometido-a-carabineros/",
        medio: "La Tercera",
        titulo: "Bancada RN solicita a Kast el cumplimiento de bono comprometido a Carabineros",
      },
    ],
    cuerpo:
      "La frase de Quintana es útil como relato político, pero es demasiado totalizante. La gestión saliente tuvo reunión formal de traspaso con policías, reportó leyes y herramientas nuevas, y dejó compromisos como el bono PMG que incluso RN pidió honrar. El desmentido de Ramos obliga a registrar el caso como disputa factual, no solo como diferencia de enfoque.",
  },
  {
    slug: "estado-en-quiebra-borrado",
    titulo: "El Gobierno borra la frase “Estado en quiebra”",
    emisor: "Mara Sedini",
    cargo: "Ministra Vocera de Gobierno",
    ministerioSlug: "segegob",
    fecha: "2026-03-24",
    fechaRetractacion: "2026-03-25",
    tipo: "borrado",
    severidad: 4,
    fraseOriginal:
      "Porque nos dejaron sin plata. Un Estado en quiebra. Endeudado en mas de 49 mil millones de dolares. Y la caja del Estado completamente vacia.",
    retractacion:
      "El posteo oficial fue eliminado de las redes sociales del Gobierno menos de 24 horas despues. Contraloria pidio explicaciones formales a Sedini. El asesor presidencial Cristian Valenzuela asumio responsabilidad publica por la frase: la reconocio como “un error”.",
    desmentidoPor: "Jorge Quiroz, ministro de Hacienda",
    fuenteUrls: [
      {
        url: "https://www.emol.com/noticias/Nacional/2026/03/24/1195283/quiroz-rechaza-estado-quiebra-publicacion.html",
        medio: "Emol",
        titulo: "Quiroz se distancia de publicacion del Gobierno que habla de un “Estado en quiebra”",
      },
      {
        url: "https://www.biobiochile.cl/especial/bbcl-investiga/noticias/de-pasillo/2026/03/25/estado-en-quiebra-contraloria-pide-explicaciones-a-sedini-por-polemico-posteo-que-enredo-a-quiroz.shtml",
        medio: "BioBioChile",
        titulo: "Contraloria pide explicaciones a Sedini por polemico posteo",
      },
    ],
    cuerpo:
      "El 24 de marzo el Gobierno publico en redes sociales una grafica explicando por que no se aplicaria el Mepco (mecanismo de estabilizacion del precio de los combustibles). El argumento central: el Estado estaba “en quiebra”. Al dia siguiente el ministro de Hacienda Jorge Quiroz se distancio del termino —“jamas ocuparia esa palabra”— y describio la situacion como una de “deterioro fiscal”, no quiebra. La publicacion fue eliminada y Contraloria abrio expediente sobre la Secretaria de Comunicaciones. El asesor de La Moneda Cristian Valenzuela acepto responsabilidad. Es la primera contradiccion publica entre la vocera y el ministro de Hacienda en el gobierno de Kast.",
  },
  {
    slug: "quiroz-desmiente-su-propio-gobierno",
    titulo: "Quiroz contradice al Ejecutivo en su debut en el Congreso",
    emisor: "Jorge Quiroz",
    cargo: "Ministro de Hacienda",
    ministerioSlug: "hacienda",
    fecha: "2026-03-25",
    tipo: "contradiccion_interna",
    severidad: 3,
    fraseOriginal:
      "El Estado se encuentra en una situacion fiscal deteriorada, pero no en quiebra. Jamas ocuparia esa palabra.",
    retractacion:
      "La declaracion del ministro contradice directamente la pieza grafica del Gobierno publicada el dia anterior, lo que obligo a la Secretaria de Comunicaciones a borrar el contenido.",
    desmentidoPor: "Su propia vocera, Mara Sedini",
    fuenteUrls: [
      {
        url: "https://interferencia.cl/articulos/quiroz-debuta-en-el-congreso-y-contradice-publicacion-del-gobierno-que-aseguro-recibir-un",
        medio: "Interferencia",
        titulo: "Quiroz debuta en el Congreso y contradice publicacion del gobierno",
      },
    ],
  },
  {
    slug: "almuerzo-la-moneda-mea-culpa",
    titulo: "Mea culpa por el almuerzo con 70 excompañeros en La Moneda",
    emisor: "Jose Antonio Kast",
    cargo: "Presidente de la Republica",
    fecha: "2026-04-10",
    fechaRetractacion: "2026-04-24",
    tipo: "mea_culpa",
    severidad: 3,
    fraseOriginal:
      "¿Que importa? Es algo privado, lo financia mi familia.",
    retractacion:
      "El 24 de abril, ante el Consejo para la Transparencia, Kast reconoció: “Cometí un error por desconocimiento. No volverá a ocurrir.” Confirmó que hubo financiamiento público parcial del evento. Contraloría abrió expediente formal con plazo de 10 días hábiles tras denuncia de los diputados Manouchehri (PS) y Venegas (PS) y la senadora Cicardini (PS).",
    desmentidoPor: "Contraloria General de la Republica",
    fuenteUrls: [
      {
        url: "https://www.biobiochile.cl/noticias/nacional/chile/2026/04/24/kast-reconoce-que-hubo-financiamiento-publico-en-polemico-almuerzo-con-excompaneros-en-la-moneda.shtml",
        medio: "BioBioChile",
        titulo: "Kast reconoce que hubo financiamiento publico en polemico almuerzo con excompañeros",
      },
      {
        url: "https://www.emol.com/noticias/Nacional/2026/04/24/1198152/mea-culpa-kast-almuerzo.html",
        medio: "Emol",
        titulo: "Mea culpa de Kast por almuerzo en La Moneda: “Cometí un error por desconocimiento”",
      },
    ],
    cuerpo:
      "El 10 de abril el presidente recibio en uno de los salones del palacio a alrededor de 70 excompañeros de la Facultad de Derecho de la Universidad Catolica. Hubo menu fijo (tartar de tomate, vino tinto, pure rustico, pescado al jugo, lasagna de berenjena para vegetarianos), funcionarios de Estado en un evento privado y consumo en dependencias publicas. El primer descargo del Gobierno fue minimizarlo (“lo paga su familia”). Tras 14 dias y dos encuestas (62% lo desaprobaba en Cadem) Kast pidio disculpas publicas, reconocio uso de recursos fiscales y se comprometio a no repetirlo.",
  },
  {
    slug: "cable-chino-bloqueo-traspaso",
    titulo: "Kast exige a Boric retractarse — y Boric se niega",
    emisor: "Jose Antonio Kast",
    cargo: "Presidente electo",
    fecha: "2026-03-03",
    tipo: "contradiccion_interna",
    severidad: 4,
    fraseOriginal:
      "Boric nunca me hablo del cable submarino chino antes de que estallara la controversia. Exijo que se retracte de haber dicho lo contrario.",
    retractacion:
      "Boric replico publicamente que la declaracion era falsa. La reunion de traspaso de mando se rompio a los 22 minutos. Kast suspendio el resto del proceso de traspaso de informacion, incluyendo encuentros ministeriales. Posteriormente reconocio que el tema fue “esbozado” en una llamada el 18 de febrero.",
    desmentidoPor: "Gabriel Boric, Presidente saliente",
    fuenteUrls: [
      {
        url: "https://www.pauta.cl/actualidad/2026/03/03/boric-tras-quiebre-con-kast-ha-llegado-a-esta-reunion-exigiendome-que-me-retracte-y-como-eso-es-falso-y-no-lo-voy-a-hacer.html",
        medio: "Pauta",
        titulo: "Boric: “Kast llego exigiendome que me retracte y como eso es falso, no lo voy a hacer”",
      },
      {
        url: "https://www.biobiochile.cl/noticias/nacional/chile/2026/03/03/quiebre-absoluto-boric-acusa-a-kast-de-mentir-sobre-intercambio-de-informacion-por-cable-chino.shtml",
        medio: "BioBioChile",
        titulo: "Boric acusa a Kast de mentir sobre intercambio de informacion por cable chino",
      },
    ],
    cuerpo:
      "El 3 de marzo, ocho dias antes de asumir, el presidente electo se reunio con Boric en La Moneda. La cita duro 22 minutos. Kast exigio que el saliente se retractara publicamente de haber dicho que le habia informado del proyecto de cable submarino chino “semanas antes” de que el caso estallara en prensa. Boric replico ante medios: “He llegado a esta reunion exigiendome que me retracte y como eso es falso, no lo voy a hacer.” Tras el quiebre, Kast cancelo todas las reuniones bilaterales restantes y los encuentros entre equipos ministeriales pendientes. Es considerado el peor traspaso de mando republicano desde 1990.",
  },
  {
    slug: "steinert-sin-plan",
    titulo: "Steinert reconoce, en privado, que la cartera “no tenia plan”",
    emisor: "Trinidad Steinert",
    cargo: "Ministra de Seguridad Publica",
    ministerioSlug: "seguridad",
    fecha: "2026-04-20",
    tipo: "desmentido_por_datos",
    severidad: 3,
    fraseOriginal:
      "Tenemos un plan claro y una agenda priorizada en seguridad publica.",
    retractacion:
      "Tras 40 dias sin un nuevo proyecto de ley enviado al Congreso, una seguidilla mediatica de homicidios y la caida abrupta de la jefa de Inteligencia de la PDI Consuelo Peña, BioBio reporto el balance de expertos: “sin plan y contradictorio”. La ministra fue convocada a la Comision de Seguridad de la Camara y no asistio. La sesion se cancelo.",
    desmentidoPor: "Comision de Seguridad de la Camara, expertos en politicas publicas",
    fuenteUrls: [
      {
        url: "https://www.biobiochile.cl/noticias/nacional/chile/2026/04/20/sin-plan-y-contradictorio-duro-balance-a-un-mes-de-gestion-de-steinert-en-seguridad.shtml",
        medio: "BioBioChile",
        titulo: "“Sin plan” y “contradictorio”: duro balance a un mes de gestion de Steinert",
      },
      {
        url: "https://www.ciperchile.cl/2026/04/14/radar-14-04-26/",
        medio: "CIPER",
        titulo: "Senadores cancelan sesion por inasistencia de ministra y subsecretario de Seguridad",
      },
    ],
  },
  {
    slug: "consuelo-pena-version-cambiada",
    titulo: "PDI cambia la version sobre la salida de Consuelo Peña",
    emisor: "Eduardo Cerna",
    cargo: "Director General de la PDI",
    ministerioSlug: "seguridad",
    fecha: "2026-04-06",
    tipo: "rectificacion",
    severidad: 3,
    fraseOriginal:
      "Quien toma las decisiones en la PDI es este director. La salida de la prefecta general (r) Consuelo Peña fue una decision institucional.",
    retractacion:
      "La version inicial del Ministerio de Seguridad — que la ministra Steinert no habia intervenido en la salida de la jefa de Inteligencia — fue posteriormente matizada. Reportes de prensa indicaban que la propia Steinert solicito a Cerna que llamara a Peña a retiro. Cerna asumio publicamente la responsabilidad para proteger a la cartera.",
    desmentidoPor: "Reportajes de prensa y Comision de Seguridad de la Camara",
    fuenteUrls: [
      {
        url: "https://www.cooperativa.cl/noticias/pais/organismos-del-estado/pdi/director-de-la-pdi-declarara-ante-comision-de-seguridad-por-retiro-de/2026-04-06/084349.html",
        medio: "Cooperativa",
        titulo: "Director de la PDI declarara ante Comision de Seguridad por retiro de Consuelo Peña",
      },
      {
        url: "https://www.ex-ante.cl/consuelo-pena-la-exjefa-de-inteligencia-de-la-pdi-cuya-salida-enredo-a-la-ministra-steinert/",
        medio: "Ex-Ante",
        titulo: "Consuelo Peña, la ex PDI cuya salida enredo a Steinert",
      },
    ],
  },
  {
    slug: "vuelo-expulsion-continuidad",
    titulo: "El “primer vuelo de Kast” era continuidad del gobierno anterior",
    emisor: "Vocera de Gobierno",
    cargo: "Segegob",
    ministerioSlug: "segegob",
    fecha: "2026-04-15",
    tipo: "desmentido_por_datos",
    severidad: 2,
    fraseOriginal:
      "Hoy se concreta el primer vuelo de expulsion del gobierno del Presidente Kast: 40 extranjeros con antecedentes son devueltos a sus paises de origen.",
    retractacion:
      "El ex subsecretario del Interior y experto en migracion Luis Eduardo Thayer aclaro que el vuelo era ejecucion de procesos administrativos y judiciales iniciados durante el gobierno anterior. Los 40 expulsados eran casos en tramite, no nuevas detenciones. Las cifras de denuncias por ingreso clandestino (-67,4% vs 2022) reflejan una tendencia que viene de antes del cambio de mando.",
    desmentidoPor: "Luis Eduardo Thayer, ex subsecretario del Interior",
    fuenteUrls: [
      {
        url: "https://www.cooperativa.cl/noticias/pais/poblacion/inmigrantes/thayer-primer-vuelo-de-expulsion-de-kast-es-continuidad-de-la-gestion/2026-04-16/191446.html",
        medio: "Cooperativa",
        titulo: "Thayer: Primer vuelo de expulsion de Kast es continuidad de la gestion anterior",
      },
    ],
  },
  {
    slug: "no-tocar-vulnerables",
    titulo: "“No tocaremos a los abuelitos” — y tocaron al PAE, Bono Invierno y SUF",
    emisor: "Jose Antonio Kast",
    cargo: "Candidato presidencial / Presidente",
    fecha: "2025-11-10",
    fechaRetractacion: "2026-04-21",
    tipo: "desmentido_por_datos",
    severidad: 4,
    fraseOriginal:
      "El ajuste fiscal lo van a sentir los politicos, no los abuelitos ni los que reciben ayuda del Estado.",
    retractacion:
      "El Oficio Circular N°16 de Hacienda (21-abr-2026) ordena descontinuar el Programa de Alimentacion Escolar de JUNAEB ($1,06 billones), las Ayudas Tecnicas para discapacidad de SENADIS, el Bono de Graduacion de Cuarto Medio, y rebaja en al menos 15% el Bono Invierno ($318.660 millones), el Subsidio Familiar (SUF), las pensiones del sistema de reparto, el Subsidio de Discapacidad y Chile Te Cuida.",
    desmentidoPor: "Oficio Circular N°16 firmado por su propio ministro de Hacienda",
    fuenteUrls: [
      {
        url: "https://www.theclinic.cl/2026/04/24/descontinuar-142-programas-y-rebajar-presupuesto-en-otros-260-las-recomendaciones-de-hacienda-a-ministerios-para-recortar-mas-de-6-mil-millones-de-dolares/",
        medio: "The Clinic",
        titulo: "Descontinuar 142 programas y rebajar 260: las recomendaciones de Hacienda",
      },
    ],
  },
  {
    slug: "megareforma-no-beneficia-ministros",
    titulo: "“La megareforma no beneficia a los ministros” — Nodo XXI cuantifica $292.515 millones",
    emisor: "Vocero economico del Gobierno",
    cargo: "Equipo economico",
    fecha: "2026-04-22",
    tipo: "desmentido_por_datos",
    severidad: 4,
    fraseOriginal:
      "Las medidas de la reforma para la Reconstruccion Nacional no benefician en lo personal a las autoridades del Gobierno.",
    retractacion:
      "Un estudio de Fundacion Nodo XXI sobre las declaraciones patrimoniales de 63 funcionarios calculo el efecto patrimonial agregado de cuatro medidas (rebaja del impuesto corporativo, reintegracion del sistema, repatriacion de capitales, exencion de contribuciones) en CLP$292.515 millones. El 98,8% del beneficio se concentra en seis personas. El ministro de Defensa Fernando Barros captura mas del 70% solo —US$226 millones aproximados— por la repatriacion de capitales. Quiroz, ministro de Hacienda, se beneficia personalmente por la exencion de contribuciones a propiedades en la RM. La oposicion presento requerimiento ante Contraloria.",
    desmentidoPor: "Fundacion Nodo XXI, oposicion parlamentaria",
    fuenteUrls: [
      {
        url: "https://www.eldinamo.cl/politica/2026/04/23/megarreforma-el-estudio-que-proyecta-eventuales-beneficios-millonarios-para-ministros-y-la-ofensiva-que-activo-la-oposicion/",
        medio: "El Dinamo",
        titulo: "Megareforma: el estudio que proyecta beneficios millonarios para ministros",
      },
      {
        url: "https://www.t13.cl/noticia/politica/oposicion-recurre-contraloria-proyecto-reconstruccion-ministros-kast-23-4-2026",
        medio: "T13",
        titulo: "Oposicion recurre a la Contraloria por proyecto de Reconstruccion: ministros se beneficiarian con la ley",
      },
    ],
    cuerpo:
      "La megareforma para la Reconstruccion Nacional, ingresada al Congreso el 22 de abril, contiene cuatro medidas que cruzan los patrimonios declarados de los ministros. Fundacion Nodo XXI proyecto: rebaja del impuesto corporativo del 27% al 23% (beneficia a Daniel Mas, ministro de Economia, en CLP$498,5 millones anuales); reintegracion del sistema tributario (beneficia a Mas en CLP$1.005 millones); repatriacion de capitales con tasa rebajada (Fernando Barros, ministro de Defensa, ahorra ~CLP$210.000 millones en una sola transaccion); exencion de contribuciones (Jorge Quiroz, ministro de Hacienda, por sus propiedades en la RM). El total agregado calculado: CLP$292.515 millones. Seis personas concentran el 98,8% del beneficio. Diputados de oposicion ingresaron requerimiento a Contraloria por posible conflicto de interes en la confeccion del proyecto.",
  },
  {
    slug: "marin-renuncia-involuntaria",
    titulo: "Marin presiono renuncia “involuntaria” en SernamEG y debio explicarlo",
    emisor: "Judith Marin",
    cargo: "Ministra de la Mujer y la Equidad de Genero",
    ministerioSlug: "mujer",
    fecha: "2026-03-20",
    tipo: "rectificacion",
    severidad: 2,
    fraseOriginal:
      "La directora del Servicio Nacional de la Mujer presento su renuncia voluntariamente.",
    retractacion:
      "Voces del oficialismo y la oposicion confirmaron a la prensa que la renuncia fue solicitada por la cartera. La ministra debio explicar el caso ante el Senado y reconocer la salida como “una decision politica del Gobierno”.",
    desmentidoPor: "Senadoras de oficialismo y oposicion",
    fuenteUrls: [
      {
        url: "https://www.emol.com/noticias/Nacional/2026/04/04/1196292/kast-defendido-ministros-cuestionados.html",
        medio: "Emol",
        titulo: "Quiroz, Steinert, Sedini, Marin: como Kast ha defendido a los ministros mas cuestionados",
      },
    ],
  },
  {
    slug: "lincolao-becas-chile-no-anuncio",
    titulo: "Lincolao matiza el recorte a Becas Chile",
    emisor: "Ximena Lincolao",
    cargo: "Ministra de Ciencia, Tecnología, Conocimiento e Innovación",
    ministerioSlug: "ciencia",
    fecha: "2026-03-23",
    fechaRetractacion: "2026-04-12",
    tipo: "rectificacion",
    severidad: 3,
    fraseOriginal:
      "Una de las reducciones van a ser las becas de magíster y postdoctorado en el extranjero.",
    retractacion:
      "Después sostuvo que “nunca anunciamos que íbamos a cortar Becas Chile”, que era una propuesta enviada a DIPRES y que no estaba zanjada. Fast Check verificó con el ministerio que la propuesta original no había cambiado y seguía contemplando reducciones en magíster y postdoctorado al extranjero.",
    desmentidoPor: "Fast Check y antecedentes entregados por el Ministerio de Ciencia",
    fuenteUrls: [
      {
        url: "https://www.fastcheck.cl/2026/04/19/se-recorta-becas-chile-los-dichos-de-la-ministra-lincolao-en-el-congreso-nacional-que-ahora-descarta/",
        medio: "Fast Check",
        titulo: "¿Se recorta Becas Chile? Los dichos de la ministra Lincolao que ahora descarta",
      },
      {
        url: "https://www.theclinic.cl/2026/04/12/ministra-lincolao-nosotros-nunca-anunciamos-que-ibamos-a-cortar-becas-chile/",
        medio: "The Clinic",
        titulo: "Ministra Lincolao: “Nosotros nunca anunciamos que íbamos a cortar Becas Chile”",
      },
    ],
  },
];

export const RETRACTACIONES_BY_EMISOR = () => {
  const map = new Map<string, Retractacion[]>();
  for (const r of RETRACTACIONES) {
    const key = r.emisor;
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(r);
  }
  return Array.from(map.entries())
    .map(([emisor, items]) => ({ emisor, items, total: items.length, severidadMax: Math.max(...items.map((x) => x.severidad)) }))
    .sort((a, b) => b.severidadMax - a.severidadMax || b.total - a.total);
};

export const retractacionesOrdenadas = () =>
  [...RETRACTACIONES].sort((a, b) => b.fecha.localeCompare(a.fecha));

export const retractacionBySlug = (slug: string) =>
  RETRACTACIONES.find((r) => r.slug === slug);
