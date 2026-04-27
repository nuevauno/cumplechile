export type CategoriaDobleEstandar =
  | "seguridad"
  | "inmigracion"
  | "probidad"
  | "salud"
  | "educacion"
  | "ddhh"
  | "medioambiente"
  | "institucional"
  | "social"
  | "desinformacion";

export interface FuenteSimple {
  medio: string;
  url: string;
}

export interface CasoDobleEstandar {
  slug: string;
  categoria: CategoriaDobleEstandar;
  fecha: string;
  actor: string;
  ataque: string;
  hechoBoric: string;
  contraste: string;
  fuenteAtaque: FuenteSimple;
  fuenteContraste: FuenteSimple;
  severidad: 1 | 2 | 3 | 4;
}

export interface MentiraContraBoric {
  slug: string;
  fecha: string;
  categoria: CategoriaDobleEstandar;
  claim: string;
  difusor: string;
  veredicto: "falso" | "engañoso" | "fuera_de_contexto";
  datoCorrecto: string;
  fuente: FuenteSimple;
}

export const CASOS_DOBLE_ESTANDAR: CasoDobleEstandar[] = [
  {
    slug: "dipres-descontinuar-reformular-despues-crisis",
    categoria: "institucional",
    fecha: "2026-04-27",
    actor: "DIPRES y Ministerio de Hacienda",
    ataque:
      "Después de la polémica, DIPRES sostuvo que “descontinuar” debía entenderse más bien como “reformular”.",
    hechoBoric:
      "Durante Boric, la derecha trataba las palabras administrativas del Ejecutivo como prueba de ideología, improvisación o engaño. La vara era literalidad máxima cuando el documento era del adversario.",
    contraste:
      "Cuando el documento propio dice descontinuar 142 programas, el Gobierno intenta leerlo como reformulación. Si la palabra correcta era reformular, debió estar en el oficio. Cambiar el diccionario después de la filtración no es técnica: es control de daño.",
    fuenteAtaque: {
      medio: "BioBioChile",
      url: "https://www.biobiochile.cl/noticias/economia/actualidad-economica/2026/04/27/dipres-aclara-polemico-oficio-sobre-programas-quizas-la-palabra-descontinuar-es-mas-bien-reformular.shtml",
    },
    fuenteContraste: {
      medio: "The Clinic",
      url: "https://www.theclinic.cl/2026/04/24/descontinuar-142-programas-y-rebajar-presupuesto-en-otros-260-las-recomendaciones-de-hacienda-a-ministerios-para-recortar-mas-de-6-mil-millones-de-dolares/",
    },
    severidad: 4,
  },
  {
    slug: "seguridad-intocable-pnco-calles-sin-violencia",
    categoria: "seguridad",
    fecha: "2026-04-24",
    actor: "Trinidad Steinert y Ministerio de Seguridad Pública",
    ataque:
      "El gobierno había presentado Seguridad como prioridad intocable y Steinert celebró públicamente que no habría rebaja presupuestaria para la cartera.",
    hechoBoric:
      "Durante Boric, la derecha acusó abandono, desorden y falta de mano dura; la promesa de Kast era que seguridad estaría por sobre cualquier ajuste.",
    contraste:
      "El anexo de Hacienda revelado por The Clinic recomienda cerrar PNCO, Calles Sin Violencia e Innovación Territorial, y rebajar Denuncia Seguro, Televigilancia, Apoyo a Víctimas y Seguridad Municipal. La bandera de campaña terminó en la planilla de recortes.",
    fuenteAtaque: {
      medio: "T13",
      url: "https://www.t13.cl/noticia/politica/ministra-steinert-confirma-seguridad-no-tendra-recorte-presupuestario-30-3-2026",
    },
    fuenteContraste: {
      medio: "The Clinic",
      url: "https://www.theclinic.cl/2026/04/24/descontinuar-el-programa-contra-el-crimen-organizado-y-calles-sin-violencia-las-recomendaciones-de-hacienda-a-seguridad/",
    },
    severidad: 4,
  },
  {
    slug: "rebaja-ricos-gabinete-recortes-sociales",
    categoria: "probidad",
    fecha: "2026-04-23",
    actor: "Jorge Quiroz y gabinete económico",
    ataque:
      "Quiroz pidió abandonar la “caricatura” de que la reforma tributaria era una rebaja para ricos, mientras el Gobierno justificaba recortes sociales por estrechez fiscal.",
    hechoBoric:
      "La derecha acusó a Boric de ideologizar impuestos y gasto público; prometió una administración técnica, austera y sin privilegios para los propios.",
    contraste:
      "El Mostrador reportó una minuta de Nodo XXI que estima $292.515 millones de beneficio potencial para 63 autoridades del gabinete, concentrado especialmente en Fernando Barros y Daniel Mas. La austeridad cae sobre programas sociales, pero las rebajas tienen ganadores patrimoniales dentro del Gobierno.",
    fuenteAtaque: {
      medio: "BioBioChile",
      url: "https://www.biobiochile.cl/noticias/economia/actualidad-economica/2026/04/13/no-es-una-rebaja-a-los-ricos-quiroz-defiende-reforma-tributaria-y-pide-dejar-la-tipica-caricatura.shtml",
    },
    fuenteContraste: {
      medio: "El Mostrador",
      url: "https://www.elmostrador.cl/noticias/pais/2026/04/23/la-arista-patrimonial-de-ley-miscelanea-gabinete-tendria-beneficio-potencial-de-292-mil-millones/",
    },
    severidad: 4,
  },
  {
    slug: "oficio-tecnico-hachazo-social",
    categoria: "social",
    fecha: "2026-04-25",
    actor: "Jorge Quiroz y Ministerio de Hacienda",
    ataque:
      "Hacienda intentó bajar la polémica afirmando que el Oficio N°16 no era una decisión final, sino un instrumento técnico para revisar programas.",
    hechoBoric:
      "Durante Boric, la derecha leía cualquier señal administrativa como prueba de ideología, desorden o captura del Estado.",
    contraste:
      "Cuando la lista propia incluye PAE, salud mental, becas, seguridad municipal, transporte regional, cultura, Ciencia y bonos sociales, el Gobierno la presenta como mero trámite. La vara cambia: lo administrativo de ellos sería técnico; lo administrativo de Boric era ideológico.",
    fuenteAtaque: {
      medio: "Emol",
      url: "https://www.emol.com/noticias/Economia/2026/04/25/1198242/oficios-hacienda-recorte-presupuesto.html",
    },
    fuenteContraste: {
      medio: "The Clinic",
      url: "https://www.theclinic.cl/2026/04/24/descontinuar-142-programas-y-rebajar-presupuesto-en-otros-260-las-recomendaciones-de-hacienda-a-ministerios-para-recortar-mas-de-6-mil-millones-de-dolares/",
    },
    severidad: 4,
  },
  {
    slug: "boric-microfono-oficial-kast-tono-campana",
    categoria: "institucional",
    fecha: "2026-04-27",
    actor: "José Antonio Kast y Cristián Valenzuela",
    ataque:
      "Valenzuela criticó a Boric por usar el micrófono presidencial para pelear con adversarios, y Kast acusó a Boric de confundir rol presidencial con activismo.",
    hechoBoric:
      "La vara que pusieron era institucional: un Presidente debía gobernar, no usar La Moneda como escenario permanente contra sus rivales.",
    contraste:
      "El 27 de abril, en medio de la polémica por recortes de Hacienda, Meganoticias describió que Kast retomó tono de campaña, atacó al gobierno anterior y volvió a decir que Boric no tenía ninguna cifra buena. El estándar vuelve: si era grave en Boric, también lo es cuando Kast usa la crisis de recortes para seguir en modo campaña.",
    fuenteAtaque: {
      medio: "La Tercera",
      url: "https://www.latercera.com/opinion/noticia/el-pequeno-presidente/",
    },
    fuenteContraste: {
      medio: "Meganoticias",
      url: "https://www.meganoticias.cl/nacional/520524-jose-antonio-kast-polemica-recortes-hacienda-programas-sociales-oposicion-27-04-2026.html",
    },
    severidad: 3,
  },
  {
    slug: "no-cortar-beneficios-sociales-oficio-recortes",
    categoria: "social",
    fecha: "2026-04-24",
    actor: "José Antonio Kast y Ministerio de Hacienda",
    ataque:
      "Kast defendió su recorte fiscal de US$6.000 millones prometiendo que no se cortarían beneficios sociales.",
    hechoBoric:
      "Durante la campaña, la derecha acusó a Boric de desorden fiscal y gasto mal focalizado, pero la corrección ofrecida supuestamente caería sobre grasa política, no sobre beneficios que reciben familias, estudiantes, pensionados o regiones.",
    contraste:
      "El Oficio Circular N°16 de Hacienda recomienda descontinuar o rebajar programas como PAE, Bono Invierno, SUF, Transporte Público Regional, programas de Salud, Becas de Postgrado, Ayudas Técnicas de SENADIS, Fondo CNTV y apoyos de vivienda barrial. Hacienda dice que no es decreto final; la contradicción es que la recomendación escrita sí toca beneficios sociales concretos.",
    fuenteAtaque: {
      medio: "BioBioChile",
      url: "https://www.biobiochile.cl/noticias/nacional/chile/2025/10/26/kast-explica-recorte-presupuestario-de-us-6-000-millones-no-vamos-a-cortar-ningun-beneficio-social.shtml",
    },
    fuenteContraste: {
      medio: "The Clinic",
      url: "https://www.theclinic.cl/2026/04/24/descontinuar-142-programas-y-rebajar-presupuesto-en-otros-260-las-recomendaciones-de-hacienda-a-ministerios-para-recortar-mas-de-6-mil-millones-de-dolares/",
    },
    severidad: 4,
  },
  {
    slug: "prescindencia-activista-almuerzo-moneda",
    categoria: "probidad",
    fecha: "2026-04-24",
    actor: "José Antonio Kast y Republicanos",
    ataque:
      "Kast acusó a Boric de no distinguir entre activista y Presidente, y Republicanos sostuvo que usar La Moneda o recursos públicos para una campaña era “robarse la elección”.",
    hechoBoric:
      "La derecha elevó la prescindencia a estándar máximo: funcionarios públicos fuera de campaña, La Moneda sin uso político y separación estricta entre rol presidencial y militante.",
    contraste:
      "Ya en el gobierno, Kast quedó obligado a reconocer financiamiento público en el almuerzo privado con excompañeros en La Moneda. El punto no es electoral, pero sí prueba la misma vara sobre uso político o privado de recursos e instalaciones públicas.",
    fuenteAtaque: {
      medio: "Emol",
      url: "https://www.emol.com/noticias/Nacional/2025/07/07/1171435/kast-por-prescindencia.html",
    },
    fuenteContraste: {
      medio: "BioBioChile",
      url: "https://www.biobiochile.cl/noticias/nacional/chile/2026/04/24/kast-reconoce-que-hubo-financiamiento-publico-en-polemico-almuerzo-con-excompaneros-en-la-moneda.shtml",
    },
    severidad: 4,
  },
  {
    slug: "auditoria-externa-prometida-revision-interna",
    categoria: "probidad",
    fecha: "2026-04-05",
    actor: "Gobierno de José Antonio Kast",
    ataque:
      "Instaló la sospecha de sobreprecios, contrataciones irregulares y operadores en la administración Boric, prometiendo una auditoría total e independiente con firmas internacionales.",
    hechoBoric:
      "La auditoría fue usada como arma de contraste moral: si aparecían situaciones complejas, el deber era mostrarlas, y el gobierno entrante dijo que transparentaría “caiga quien caiga”.",
    contraste:
      "A menos de un mes de asumir, el Gobierno desestimó la auditoría externa internacional por estrechez fiscal y la reemplazó por una revisión interna conducida desde el propio Ejecutivo.",
    fuenteAtaque: {
      medio: "Chilevisión",
      url: "https://www.chilevision.cl/noticias/nacional/era-promesa-de-campana-gobierno-de-pdte-kast-descarta-auditoria-internacional-a-administracion-de-boric/amp/",
    },
    fuenteContraste: {
      medio: "BioBioChile",
      url: "https://www.biobiochile.cl/noticias/nacional/chile/2026/04/05/pese-a-promesa-de-campana-gobierno-finalmente-desestima-auditoria-externa-internacional.shtml",
    },
    severidad: 4,
  },
  {
    slug: "congreso-no-relevante-retiro-decretos-boric",
    categoria: "institucional",
    fecha: "2026-04-15",
    actor: "José Antonio Kast y Partido Republicano",
    ataque:
      "Republicanos acusó a Boric de responsabilizar al Congreso por la falta de ejecución de políticas públicas, mientras Kast decía que revisaba potestades administrativas y que el Congreso no era tan relevante como se imaginaba.",
    hechoBoric:
      "La crítica contra Boric era que no debía usar al Congreso como excusa y que debía gobernar con eficacia dentro de las reglas institucionales.",
    contraste:
      "Ya instalado, el gobierno de Kast retiró 94 decretos tramitados durante Boric, 85 de ellos sin reingreso al corte de La Tercera. La vía administrativa pasó de ser reproche discursivo a herramienta central de instalación.",
    fuenteAtaque: {
      medio: "La Tercera",
      url: "https://www.latercera.com/politica/noticia/es-propio-de-los-gobiernos-autoritarios-dichos-de-kast-sobre-gobernar-con-facultades-administrativas-desatan-ola-de-criticas/?outputType=base-amp-type",
    },
    fuenteContraste: {
      medio: "La Tercera",
      url: "https://www.latercera.com/nacional/noticia/gobierno-de-kast-suma-retiro-de-casi-100-decretos-y-reglamentos-de-la-administracion-boric/?outputType=base-amp-type",
    },
    severidad: 4,
  },
  {
    slug: "ideologia-ambiental-decretos-retirados",
    categoria: "medioambiente",
    fecha: "2026-03-18",
    actor: "Partido Republicano y gobierno de José Antonio Kast",
    ataque:
      "Republicanos respondió a Boric que no entendía el daño de gobernar por ideología, instalando que la administración anterior trababa desarrollo con prioridades identitarias o ambientales.",
    hechoBoric:
      "El gobierno saliente dejó decretos sobre áreas protegidas, normas de calidad ambiental, planes de descontaminación y protección de especies.",
    contraste:
      "En la primera semana de Kast, Medio Ambiente retiró 43 decretos impulsados por Boric, incluyendo parques, salares, calidad del aire y especies en riesgo. Lo que se criticaba como ideología terminó convertido en una revisión masiva con fuerte sello político.",
    fuenteAtaque: {
      medio: "El País Chile",
      url: "https://elpais.com/chile/2026-02-12/la-batalla-cultural-y-los-ismos-segun-kast-y-boric.html",
    },
    fuenteContraste: {
      medio: "Forbes Chile",
      url: "https://forbes.cl/sostenibilidad/2026-03-18/gobierno-de-kast-retira-43-decretos-ambientales-impulsados-en-el-mandato-de-boric/",
    },
    severidad: 4,
  },
  {
    slug: "alumno-practica-seremis-caidos",
    categoria: "institucional",
    fecha: "2026-04-16",
    actor: "José Antonio Kast",
    ataque:
      "En el primer mes de Boric dijo que parecía haber “mucho alumno en práctica” y criticó la demora en nombrar seremis.",
    hechoBoric:
      "La crítica se formuló a 37 días de iniciado el gobierno de Boric, apuntando a agenda, turbulencias y nombramientos regionales pendientes.",
    contraste:
      "A poco más de un mes de Kast, Emol contabilizó 16 seremis que no asumieron o renunciaron y siete vacantes. La vara de instalación regional vuelve completa.",
    fuenteAtaque: {
      medio: "T13",
      url: "https://www.t13.cl/noticia/politica/kast-reaparece-criticar-al-gobierno-pareciera-ser-hay-mucho-alumno-practica",
    },
    fuenteContraste: {
      medio: "Emol",
      url: "https://www.emol.com/noticias/Nacional/2026/04/16/1197447/seremis-gobierno-kast-fallidos-renuncias.html",
    },
    severidad: 4,
  },
  {
    slug: "valenzuela-parasitos-sueldo-estado",
    categoria: "probidad",
    fecha: "2026-04-18",
    actor: "Cristián Valenzuela",
    ataque:
      "Instaló la columna “Parásitos” contra el gasto político y funcionarios que se sirven del Estado; luego defendió que su crítica era contra abusos y operadores.",
    hechoBoric:
      "La derecha usó el concepto para acusar apitutamiento y exceso de cargos bajo Boric, aun cuando Fast Check mostró que Valenzuela y otros asesores republicanos mantenían cargos en Alta Dirección Pública.",
    contraste:
      "Ya en La Moneda, Valenzuela firmó contrato como coordinador de asesores por $80,9 millones hasta diciembre de 2026, con cuotas de hasta $8,9 millones mensuales.",
    fuenteAtaque: {
      medio: "BioBioChile",
      url: "https://www.biobiochile.cl/noticias/nacional/chile/2025/10/14/asesor-de-kast-evita-autocritica-por-columna-contra-parasitos-descarta-guerra-civil-en-la-derecha.shtml",
    },
    fuenteContraste: {
      medio: "BioBioChile",
      url: "https://www.biobiochile.cl/especial/bbcl-investiga/noticias/de-pasillo/2026/04/18/hasta-89-millones-al-mes-el-contrato-de-cristian-valenzuela-uno-de-los-asesores-estrella-de-kast.shtml",
    },
    severidad: 4,
  },
  {
    slug: "ope-operadores-auditoria-contraloria",
    categoria: "probidad",
    fecha: "2026-04-23",
    actor: "José Antonio Kast y Partido Republicano",
    ataque:
      "Acusaron al gobierno de Boric de inflar el Estado con operadores políticos y “100 mil funcionarios” asociados al oficialismo.",
    hechoBoric:
      "La cifra de 100 mil fue cuestionada por su mezcla de Gobierno Central, municipios, universidades y empresas públicas; aun así fue usada como símbolo de gasto político.",
    contraste:
      "Contraloría inició auditoría por pagos a 11 trabajadores de la Oficina del Presidente Electo antes de la asunción. Aún no hay sanción, pero el estándar de fiscalización vuelve sobre los antioperadores.",
    fuenteAtaque: {
      medio: "Emol",
      url: "https://www.emol.com/noticias/Nacional/2025/10/07/1179732/kast-polemica-gobierno-contratacion-funcionarios.html",
    },
    fuenteContraste: {
      medio: "T13",
      url: "https://www.t13.cl/noticia/politica/contraloria-inicia-auditoria-tras-revelacion-supuestos-pagos-trabajadores-ope-23-4-2026",
    },
    severidad: 4,
  },
  {
    slug: "no-indultos-boric-indultos-kast",
    categoria: "ddhh",
    fecha: "2026-03-31",
    actor: "José Antonio Kast",
    ataque:
      "Usó los indultos de Boric como ejemplo de perdón a delincuentes y dijo en campaña que su programa no consideraba ningún indulto.",
    hechoBoric:
      "La derecha sostuvo durante años que los indultos presidenciales de Boric eran una línea roja de seguridad y orden público.",
    contraste:
      "Como Presidente, Kast confirmó que usará la facultad de indulto y no descartó analizar casos de condenados por derechos humanos.",
    fuenteAtaque: {
      medio: "Emol",
      url: "https://www.emol.com/noticias/Nacional/2025/12/09/1185437/kast-descartaria-entregar-indultos-gobierno.html",
    },
    fuenteContraste: {
      medio: "BioBioChile",
      url: "https://www.biobiochile.cl/noticias/nacional/chile/2026/03/31/kast-confirma-que-aplicara-indultos-y-no-descarta-beneficiar-a-condenados-por-derechos-humanos.shtml",
    },
    severidad: 4,
  },
  {
    slug: "reconstruccion-copia-ia-boric",
    categoria: "institucional",
    fecha: "2026-04-23",
    actor: "Gobierno de José Antonio Kast",
    ataque:
      "La campaña republicana construyó su relato contra Boric sobre incompetencia, ideologización y necesidad de una administración técnicamente superior.",
    hechoBoric:
      "El proyecto de ley de Inteligencia Artificial de Boric fue criticado y seguía en tramitación, con un artículo sobre propiedad intelectual que luego fue modificado tras debate técnico.",
    contraste:
      "Fast Check verificó que la Ley de Reconstrucción de Kast replicó textualmente esa disposición de Boric sobre IA y propiedad intelectual, incluso una norma ya cuestionada durante su tramitación.",
    fuenteAtaque: {
      medio: "The Clinic",
      url: "https://www.theclinic.cl/2026/02/22/felipe-alessandri-rn-alcalde-de-lo-barnechea-las-expectativas-sobre-kast-son-peligrosas-porque-se-han-generado-muchas-yo-las-bajaria/",
    },
    fuenteContraste: {
      medio: "Fast Check",
      url: "https://www.fastcheck.cl/2026/04/23/proyecto-de-gobierno-de-kast-replico-textualmente-una-disposicion-de-boric-sobre-inteligencia-artificial/",
    },
    severidad: 3,
  },
  {
    slug: "quintana-policias-desarmadas-moralmente",
    categoria: "seguridad",
    fecha: "2026-04-25",
    actor: "Ana Victoria Quintana",
    ataque:
      "Acusó que las autoridades anteriores dejaron solas a las policías y las “desarmaron moralmente”.",
    hechoBoric:
      "Víctor Ramos respondió que esa acusación era falsa y temeraria. Además, RN pidió a Kast cumplir el bono PMG a Carabineros anunciado por la administración anterior.",
    contraste:
      "El gobierno de Kast intenta vender abandono total, pero al mismo tiempo hereda ministerio, herramientas, compromisos y políticas de seguridad que sus propios aliados piden continuar.",
    fuenteAtaque: {
      medio: "La Tercera",
      url: "https://www.latercera.com/nacional/noticia/ana-victoria-quintana-las-autoridades-anteriores-dejaron-solas-a-las-policias-las-desarmaron-moralmente/",
    },
    fuenteContraste: {
      medio: "La Tercera",
      url: "https://www.latercera.com/nacional/noticia/exsubsecretario-ramos-califica-de-falsa-y-temeraria-acusacion-de-quintana-sobre-falta-de-apoyo-a-las-policias-en-gobierno-anterior/",
    },
    severidad: 4,
  },
  {
    slug: "kast-pae-alimentos-ninos",
    categoria: "educacion",
    fecha: "2026-04-25",
    actor: "José Antonio Kast",
    ataque:
      "Acusó a la administración anterior por problemas de alimentación escolar y sostuvo que el cuestionamiento al recorte del PAE era “no conocer Chile”.",
    hechoBoric:
      "Nicolás Cataldo respondió que el PAE funciona diariamente para más de 2,5 millones de estudiantes y que la polémica nació por el documento de Hacienda que sugería suprimir la alimentación escolar.",
    contraste:
      "La acusación invierte la carga: el flanco no era que Boric quitara comida, sino que el gobierno de Kast dejó por escrito una recomendación para descontinuar el principal programa alimentario escolar.",
    fuenteAtaque: {
      medio: "La Tercera",
      url: "https://www.latercera.com/politica/noticia/presidente-kast-arremete-contra-el-gobierno-anterior-y-acusa-desastre-en-empleo-seguridad-y-gestion/",
    },
    fuenteContraste: {
      medio: "La Tercera",
      url: "https://www.latercera.com/politica/noticia/exministro-cataldo-responde-a-kast-y-defiende-gestion-en-alimentacion-escolar/",
    },
    severidad: 4,
  },
  {
    slug: "refundacionalismo-recortes-sociales",
    categoria: "social",
    fecha: "2026-04-25",
    actor: "Derecha gobernante",
    ataque:
      "Durante el gobierno de Boric, la derecha instaló la idea de un Ejecutivo “refundacional” e ideologizado.",
    hechoBoric:
      "Carolina Tohá acusó que el oficio de Hacienda de Kast llama explícitamente a un “cambio de paradigma” y que la profundidad de los recortes sí cruza la línea de lo refundacional.",
    contraste:
      "La palabra que usaron contra Boric vuelve sobre ellos: 142 programas a cerrar, 260 con rebaja y políticas sociales de décadas puestas bajo revisión ideológica.",
    fuenteAtaque: {
      medio: "La Tercera",
      url: "https://www.latercera.com/politica/noticia/toha-acusa-tono-refundacional-y-cargado-de-ideologia-del-gobierno-por-recortes-propuestos-por-hacienda/",
    },
    fuenteContraste: {
      medio: "The Clinic",
      url: "https://www.theclinic.cl/2026/04/24/descontinuar-142-programas-y-rebajar-presupuesto-en-otros-260-las-recomendaciones-de-hacienda-a-ministerios-para-recortar-mas-de-6-mil-millones-de-dolares/",
    },
    severidad: 4,
  },
  {
    slug: "siches-100-dias-incompetencia-seguridad",
    categoria: "seguridad",
    fecha: "2022-06-15",
    actor: "Partido Republicano",
    ataque:
      "Ingresó una acusación constitucional contra Izkia Siches y sostuvo que en 100 días el gobierno mostraba “total y absoluta incompetencia” en seguridad, migración y Macrozona Sur.",
    hechoBoric:
      "La acusación fue rechazada. Con el tiempo, el propio Boric calificó Temucuicui como un “voluntarismo muy torpe”, pero el estándar republicano fue pedir responsabilidad constitucional al inicio del gobierno.",
    contraste:
      "Kast también partió con un gobierno de emergencia en seguridad y tropezó en marzo con homicidios y crisis comunicacional. El estándar de 100 días ahora debe aplicarse al propio Ejecutivo.",
    fuenteAtaque: {
      medio: "La Tercera",
      url: "https://www.latercera.com/politica/noticia/partido-republicano-ingresa-acusacion-constitucional-contra-izkia-siches-infringio-la-constitucion-y-las-leyes-y-dejo-estas-sin-ejecucion/ORYCJLOWQFBWRHEHNUWUJCZM7U/",
    },
    fuenteContraste: {
      medio: "El País Chile",
      url: "https://elpais.com/chile/2026-03-29/el-gobierno-de-kast-tropieza-en-su-primer-mes-con-las-mismas-piedras-del-arranque-del-mandato-de-boric.html",
    },
    severidad: 3,
  },
  {
    slug: "toha-ac-crisis-seguridad",
    categoria: "seguridad",
    fecha: "2024-09-30",
    actor: "Republicanos, UDI y RN",
    ataque:
      "Impulsaron una acusación constitucional contra Carolina Tohá por responsabilidad política en la crisis de seguridad.",
    hechoBoric:
      "La Cámara rechazó la acusación. El gobierno de Boric terminó con más de 60 leyes de seguridad y una baja de homicidios desde el peak de 2022, aunque el temor ciudadano siguió alto.",
    contraste:
      "Kast recibió ese nuevo Ministerio de Seguridad y la legislación aprobada. Si usa la misma vara, debe responder por resultados, no solo por anuncios o despliegues.",
    fuenteAtaque: {
      medio: "CNN Chile",
      url: "https://www.cnnchile.com/pais/diputados-republicanos-ingresan-acusacion-constitucional-contra-ministra-toha_20240930/",
    },
    fuenteContraste: {
      medio: "El País Chile",
      url: "https://elpais.com/chile/2026-03-06/de-boric-a-kast-la-seguridad-publica-como-proyecto-nacional.html",
    },
    severidad: 3,
  },
  {
    slug: "kast-gobierno-mas-sangriento",
    categoria: "seguridad",
    fecha: "2024-12-23",
    actor: "José Antonio Kast",
    ataque:
      "Dijo que el gobierno de Boric era “el más sangriento en las últimas tres décadas”, usando homicidios acumulados como arma política.",
    hechoBoric:
      "Las cifras oficiales posteriores muestran una baja de la tasa de homicidios en 2023 y 2024, después del peak de 2022.",
    contraste:
      "Si Kast instaló la vara de homicidios acumulados, su gobierno debe medirse con la misma serie completa 2026-2030, no con operativos aislados.",
    fuenteAtaque: {
      medio: "La Tercera",
      url: "https://www.latercera.com/politica/noticia/el-gobierno-de-boric-es-el-mas-sangriento-en-las-ultimas-tres-decadas-kast-responde-a-elizalde-por-seguridad/BEPL3C4VBRAV7AW2F3V7WPC2PU/",
    },
    fuenteContraste: {
      medio: "Ministerio de Seguridad Pública",
      url: "https://minsegpublica.cl/ministro-de-seguridad-publica-dio-a-conocer-los-resultados-del-informe-nacional-de-homicidios-consumados-en-chile-2024/",
    },
    severidad: 3,
  },
  {
    slug: "frontera-103-dias-expulsiones",
    categoria: "inmigracion",
    fecha: "2025-11-28",
    actor: "José Antonio Kast",
    ataque:
      "Emplazó a Boric por la frontera norte y dijo a migrantes irregulares: “Tienen 103 días para que salgan voluntariamente”.",
    hechoBoric:
      "El gobierno saliente defendió que había control, empadronamiento, reconducción y expulsiones administrativas en curso.",
    contraste:
      "Ya en el gobierno, Kast enfrentó dificultades prácticas para expulsar, incluyendo recursos, coordinación internacional y casos heredados del gobierno anterior.",
    fuenteAtaque: {
      medio: "El País Chile",
      url: "https://elpais.com/chile/2025-11-28/kast-amenaza-a-los-inmigrantes-irregulares-quedan-103-dias-para-que-salgan-voluntariamente-de-chile.html",
    },
    fuenteContraste: {
      medio: "El País Chile",
      url: "https://elpais.com/chile/2026-04-15/el-gobierno-de-kast-se-enfrenta-con-un-muro-de-dificultades-para-atajar-la-migracion-irregular.html",
    },
    severidad: 4,
  },
  {
    slug: "bono-invierno-bono-apruebo",
    categoria: "social",
    fecha: "2022-07-11",
    actor: "Republicanos y UDI",
    ataque:
      "Trataron el Bono Invierno de Boric como posible “bono Apruebo” y lo leyeron como maniobra electoral antes del plebiscito.",
    hechoBoric:
      "El bono de $120.000 alcanzaba a más de 7 millones de personas y venía junto a extensión del IFE laboral y postnatal de emergencia.",
    contraste:
      "Cuando la derecha gobierna y recorta ayudas, el discurso cambia: la misma ayuda social que antes era electoralismo pasa a ser gasto ajustable.",
    fuenteAtaque: {
      medio: "Emol",
      url: "https://www.emol.com/noticias/Nacional/2022/07/11/1066645/oficialismo-medidas-economicas-oposicion-apruebo.html",
    },
    fuenteContraste: {
      medio: "The Clinic",
      url: "https://www.theclinic.cl/2026/04/24/descontinuar-142-programas-y-rebajar-presupuesto-en-otros-260-las-recomendaciones-de-hacienda-a-ministerios-para-recortar-mas-de-6-mil-millones-de-dolares/",
    },
    severidad: 3,
  },
  {
    slug: "copago-cero-electoralismo",
    categoria: "salud",
    fecha: "2022-07-29",
    actor: "Exautoridades de salud y oposición",
    ataque:
      "Copago Cero fue cuestionado como “recurso de campaña” del Apruebo y por supuestas dudas de legalidad y financiamiento.",
    hechoBoric:
      "La medida hizo gratuita la atención en la red pública para afiliados Fonasa en Modalidad de Atención Institucional.",
    contraste:
      "El mismo sector que puso sospecha electoral sobre una expansión de gratuidad sanitaria hoy debe explicar recortes a Salud y programas sensibles.",
    fuenteAtaque: {
      medio: "Emol",
      url: "https://www.emol.com/noticias/Nacional/2022/07/29/1068423/gobierno-defiende-copago-cero-fonasa.html",
    },
    fuenteContraste: {
      medio: "La Tercera",
      url: "https://www.latercera.com/nacional/noticia/gremios-solicitan-a-kast-que-reconsidere-recorte-del-3-a-salud-es-un-impacto-directo-a-usuarios-que-dependen-del-sistema-publico/",
    },
    severidad: 3,
  },
  {
    slug: "listas-espera-red-publica-privada",
    categoria: "salud",
    fecha: "2022-11-28",
    actor: "Javier Macaya, UDI",
    ataque:
      "Pidió abordar listas de espera dejando la ideología de lado y usando red pública y privada.",
    hechoBoric:
      "La crítica apuntaba a cerca de dos millones de pacientes en listas de espera y cientos de miles de cirugías retrasadas.",
    contraste:
      "Como gobierno, el primer gran gesto presupuestario de Kast fue un recorte que gremios de Salud estimaron en más de $517 mil millones.",
    fuenteAtaque: {
      medio: "CNN Chile",
      url: "https://www.cnnchile.com/pais/udi-listas-de-espera-cooperacion-red-publica-privada_20221128/",
    },
    fuenteContraste: {
      medio: "La Tercera",
      url: "https://www.latercera.com/nacional/noticia/gremios-solicitan-a-kast-que-reconsidere-recorte-del-3-a-salud-es-un-impacto-directo-a-usuarios-que-dependen-del-sistema-publico/",
    },
    severidad: 4,
  },
  {
    slug: "avila-junaeb-acusacion-pae",
    categoria: "educacion",
    fecha: "2023-06-19",
    actor: "Chile Vamos y Republicanos",
    ataque:
      "La acusación constitucional contra Marco Antonio Ávila incluyó capítulos sobre JUNAEB, alimentación escolar y parvularia.",
    hechoBoric:
      "La derecha elevó problemas de alimentación escolar a causal política contra un ministro de Educación.",
    contraste:
      "En 2026, Hacienda puso el Programa de Alimentación Escolar de JUNAEB entre los programas recomendados para descontinuar.",
    fuenteAtaque: {
      medio: "Mala Espina Check",
      url: "https://www.malaespinacheck.cl/pais/2023/06/19/los-7-argumentos-en-la-acusacion-constitucional-contra-ministro-avila/",
    },
    fuenteContraste: {
      medio: "The Clinic",
      url: "https://www.theclinic.cl/2026/04/24/subvenciones-y-alimentacion-escolar-junto-a-transporte-publico-regional-el-ranking-de-los-diez-programas-con-mayor-gasto-que-hacienda-sugiere-descontinuar/",
    },
    severidad: 4,
  },
  {
    slug: "cae-populista-gratuidad-recortada",
    categoria: "educacion",
    fecha: "2024-05-22",
    actor: "UDI",
    ataque:
      "Calificó la condonación del CAE como inviable, populista y electoral; pidió redestinar recursos.",
    hechoBoric:
      "La discusión del CAE fue usada para acusar gasto irresponsable, mientras la derecha se presentaba como defensora de prioridades sociales.",
    contraste:
      "Kast llegó prometiendo no cortar beneficios, pero su primera reforma abrió flancos por cobro del CAE, límites y moratorias a gratuidad.",
    fuenteAtaque: {
      medio: "BioBioChile",
      url: "https://www.biobiochile.cl/noticias/nacional/chile/2024/05/22/udi-llama-al-gobierno-a-redestinar-recursos-de-condonacion-del-cae-y-califica-propuesta-de-populista.shtml",
    },
    fuenteContraste: {
      medio: "BioBioChile",
      url: "https://www.biobiochile.cl/noticias/nacional/chile/2026/03/16/cambios-en-la-gratuidad-enfrentan-al-gobierno-de-kast-con-la-oposicion-acusan-promesa-incumplida.shtml",
    },
    severidad: 4,
  },
  {
    slug: "camila-flores-presuncion-catalina-perez",
    categoria: "probidad",
    fecha: "2026-04-09",
    actor: "Renovación Nacional",
    ataque:
      "Ante la investigación por la “cuota Flores”, RN descartó sanciones inmediatas contra Camila Flores y apeló a la presunción de inocencia.",
    hechoBoric:
      "Cuando el caso era Democracia Viva/Catalina Pérez, Republicanos y Chile Vamos pidieron salidas, censuras y responsabilidades políticas tempranas.",
    contraste:
      "El estándar cambia según el domicilio político: para los adversarios, renuncia y castigo político; para los propios, esperar investigación.",
    fuenteAtaque: {
      medio: "BioBioChile",
      url: "https://www.biobiochile.cl/noticias/nacional/chile/2026/04/09/rn-descarta-sanciones-a-flores-y-apunta-a-presuncion-de-inocencia-brito-fa-acusa-encubrimiento.shtml",
    },
    fuenteContraste: {
      medio: "BioBioChile",
      url: "https://www.biobiochile.cl/noticias/nacional/chile/2023/06/20/republicanos-critican-que-catalina-perez-no-renuncie-a-mesa-de-camara-y-a-la-udi-por-bajar-censura.shtml",
    },
    severidad: 4,
  },
  {
    slug: "licencias-medicas-renuncias-masivas-flores",
    categoria: "probidad",
    fecha: "2025-05-28",
    actor: "UDI",
    ataque:
      "Exigió a Boric pedir miles de renuncias por el escándalo de licencias médicas, antes de que todos los casos fueran revisados individualmente.",
    hechoBoric:
      "Contraloría detectó más de 25 mil funcionarios que viajaron al extranjero durante licencias médicas.",
    contraste:
      "Para funcionarios públicos, la derecha pidió renuncias masivas; para Camila Flores, RN invocó presunción de inocencia y descartó sanciones inmediatas.",
    fuenteAtaque: {
      medio: "El País Chile",
      url: "https://elpais.com/chile/2025-05-28/las-claves-del-escandalo-que-indigna-a-chile-tras-los-viajes-al-extranjero-de-25000-funcionarios-publicos-que-estaban-de-licencia-medica.html",
    },
    fuenteContraste: {
      medio: "Cooperativa",
      url: "https://www.cooperativa.cl/noticias/pais/judicial/denuncias-de-corrupcion/presidenta-del-senado-por-caso-camila-flores-tiene-que-operar-la/2026-04-09/184637.html",
    },
    severidad: 4,
  },
  {
    slug: "jackson-renuncia-convenios-doble-funcion",
    categoria: "probidad",
    fecha: "2023-07-06",
    actor: "UDI, RN y Republicanos",
    ataque:
      "Condicionaron diálogo, presupuesto y apoyaron acciones políticas contra Giorgio Jackson por el caso Convenios y por el estándar de responsabilidad política.",
    hechoBoric:
      "Contraloría declaró ilegales 29 convenios por $13 mil millones y la oposición exigió salida política antes de sentencias judiciales.",
    contraste:
      "En el gobierno de Kast, casos de dobles funciones y pagos simultáneos fueron defendidos con distinciones legales y explicación de transición.",
    fuenteAtaque: {
      medio: "CNN Chile",
      url: "https://www.cnnchile.com/pais/udi-giorgio-jackson-renuncia-presupuesto-ministerio-de-desarrollo-social_20230706/",
    },
    fuenteContraste: {
      medio: "La Tercera",
      url: "https://www.latercera.com/politica/noticia/transparencia-revela-cuanto-han-percibido-asesores-de-kast-por-doble-funcion-en-cargos-de-eleccion-popular/",
    },
    severidad: 4,
  },
  {
    slug: "pardow-renuncia-no-basta-almuerzo",
    categoria: "probidad",
    fecha: "2025-10-22",
    actor: "Oposición y José Antonio Kast",
    ataque:
      "Tras el error en cuentas de luz, la oposición empujó acusación constitucional contra Diego Pardow y Kast dijo que la renuncia no era suficiente.",
    hechoBoric:
      "El Senado rechazó inhabilitar a Pardow, pero la derecha sostuvo el estándar de castigo político aun después de su salida.",
    contraste:
      "Cuando Kast reconoció uso de recursos públicos en un almuerzo privado en La Moneda, el estándar oficial fue mea culpa y promesa de no repetir.",
    fuenteAtaque: {
      medio: "El País Chile",
      url: "https://elpais.com/chile/2025-10-22/la-oposicion-confirma-una-acusacion-constitucional-contra-exministro-diego-pardow-por-error-en-cobros-de-la-luz.html",
    },
    fuenteContraste: {
      medio: "BioBioChile",
      url: "https://www.biobiochile.cl/noticias/nacional/chile/2026/04/24/kast-reconoce-que-hubo-financiamiento-publico-en-polemico-almuerzo-con-excompaneros-en-la-moneda.shtml",
    },
    severidad: 3,
  },
  {
    slug: "familiares-pitutos-boric-operadores-propios",
    categoria: "probidad",
    fecha: "2022-04-13",
    actor: "Partido Republicano",
    ataque:
      "Pidió transparentar contrataciones y vínculos familiares, acusando incumplimiento de la promesa de prohibir parientes y pitutos.",
    hechoBoric:
      "La crítica se instaló a menos de 40 días del cambio de mando, antes de que hubiera evaluación consolidada de desempeño.",
    contraste:
      "El mismo estándar debe aplicarse a asesores, nombramientos, dobles funciones y operadores del gobierno Kast, no solo a adversarios.",
    fuenteAtaque: {
      medio: "Emol",
      url: "https://www.emol.com/noticias/Nacional/2022/04/13/1057885/republicanos-y-contracionesgobierno.html",
    },
    fuenteContraste: {
      medio: "La Tercera",
      url: "https://www.latercera.com/politica/noticia/transparencia-revela-cuanto-han-percibido-asesores-de-kast-por-doble-funcion-en-cargos-de-eleccion-popular/",
    },
    severidad: 3,
  },
  {
    slug: "cable-chino-quiebre-traspaso",
    categoria: "probidad",
    fecha: "2026-03-03",
    actor: "José Antonio Kast",
    ataque:
      "Rompió el proceso de traspaso con Boric por el cable chino, acusando falta de transparencia y que no confiaba en la información entregada.",
    hechoBoric:
      "Boric sostuvo que había llamado a Kast el 18 de febrero para plantear varios temas, incluido el cable chino y las advertencias de Estados Unidos.",
    contraste:
      "Kast reconoció la llamada y que Boric le “esbozó” la situación. La acusación inicial quedó convertida en una discusión semántica entre informar, enunciar o esbozar.",
    fuenteAtaque: {
      medio: "Emol",
      url: "https://www.emol.com/noticias/Nacional/2026/03/03/1193187/kast-por-conversacion-con-boric.html",
    },
    fuenteContraste: {
      medio: "BioBioChile",
      url: "https://www.biobiochile.cl/noticias/nacional/chile/2026/03/03/kast-confirma-que-boric-no-mintio-y-le-hablo-de-cable-chino-sin-detalles-hay-falta-de-transparencia.shtml",
    },
    severidad: 4,
  },
  {
    slug: "bachelet-onu-marca-chile",
    categoria: "institucional",
    fecha: "2026-03-24",
    actor: "Gobierno de José Antonio Kast",
    ataque:
      "Retiró el apoyo del Estado chileno a la candidatura de Michelle Bachelet a la Secretaría General de la ONU, defendiendo que la postulación era inviable y no debía comprometer recursos diplomáticos.",
    hechoBoric:
      "Boric había oficializado la candidatura con México y Brasil. Luego Bachelet reveló que Sebastián Piñera también la había impulsado a buscar la ONU, desarmando la idea de una candidatura puramente partidista.",
    contraste:
      "Kast sostuvo que Bachelet podía ayudar a instalar la marca Chile, pero “no a través de la ONU”. El resultado concreto: México y Brasil mantuvieron apoyo, Chile se bajó y la candidata siguió en carrera sin su propio país.",
    fuenteAtaque: {
      medio: "Cooperativa",
      url: "https://www.cooperativa.cl/noticias/pais/relaciones-exteriores/onu/kast-retiro-apoyo-del-estado-de-chile-a-la-candidatura-onu-de-bachelet/2026-03-24/122854.html",
    },
    fuenteContraste: {
      medio: "El País Chile",
      url: "https://elpais.com/chile/2026-03-31/bachelet-revela-que-pinera-la-impulso-a-liderar-la-onu-me-dijo-si-tu-quieres-yo-te-apoyo-y-te-propongo.html",
    },
    severidad: 4,
  },
];

export const MENTIRAS_CONTRA_BORIC: MentiraContraBoric[] = [
  {
    slug: "tren-aragua-defensoria-boric",
    fecha: "2025-06-16",
    categoria: "seguridad",
    claim: "El Estado de Chile bajo Boric defendería al Tren de Aragua mediante la Defensoría Penal Pública.",
    difusor: "Publicaciones reiteradas en redes sociales.",
    veredicto: "engañoso",
    datoCorrecto: "La defensa penal pública es una garantía legal vigente desde 2001 y no depende del gobierno de turno.",
    fuente: {
      medio: "Fast Check",
      url: "https://www.fastcheck.cl/2025/06/16/imputados-del-tren-de-aragua-son-defendidos-por-la-defensoria-penal-publica-es-decir-por-el-estado-de-chile-bajo-el-gobierno-de-boric-como-parte-de-la-reforma-procesal-que-dejo-michelle-bachelet/",
    },
  },
  {
    slug: "boric-ejemplo-delincuencia-salud",
    fecha: "2024-11-29",
    categoria: "desinformacion",
    claim: "Boric habría dicho que Chile era un ejemplo a seguir en delincuencia y salud.",
    difusor: "Usuario en TikTok tras cadena nacional del Presupuesto 2025.",
    veredicto: "falso",
    datoCorrecto: "Mala Espina revisó la cadena nacional y Presidencia negó que el Mandatario emitiera esa declaración.",
    fuente: {
      medio: "Mala Espina Check",
      url: "https://www.malaespinacheck.cl/pais/2024/11/29/boric-no-dijo-que-chile-es-un-ejemplo-a-seguir-en-delincuencia-y-salud/",
    },
  },
  {
    slug: "boric-bandera-republica-pinochet",
    fecha: "2022-03-18",
    categoria: "desinformacion",
    claim: "Boric habría dicho que Chile no debía seguir llamándose República de Chile ni usar una bandera “impuesta por Pinochet”.",
    difusor: "Publicación viral compartida por José Barba Caballero, según Mala Espina.",
    veredicto: "falso",
    datoCorrecto: "No hay registro de esa frase y Presidencia ya la había desmentido.",
    fuente: {
      medio: "Mala Espina Check",
      url: "https://www.malaespinacheck.cl/politica/2022/03/18/boric-no-critico-la-republica-ni-la-bandera-impuesta-por-pinochet/",
    },
  },
  {
    slug: "boric-colapso-nervioso-clinica",
    fecha: "2022-09-10",
    categoria: "desinformacion",
    claim: "Boric habría sido internado por un colapso nervioso en Clínica Las Condes o UC.",
    difusor: "Usuarios de redes sociales.",
    veredicto: "falso",
    datoCorrecto: "Presidencia y la UC desmintieron la hospitalización; Boric estuvo en reuniones y luego en su casa.",
    fuente: {
      medio: "Mala Espina Check",
      url: "https://www.malaespinacheck.cl/politica/2022/09/10/es-falso-que-el-presidente-boric-fue-internado-en-clinica-las-condes-por-un-colapso-nervioso/",
    },
  },
  {
    slug: "boric-llamo-saquear-supermercados",
    fecha: "2022-10-26",
    categoria: "seguridad",
    claim: "Boric habría llamado a saquear y quemar supermercados en 2019.",
    difusor: "Usuarios en Twitter y Facebook.",
    veredicto: "falso",
    datoCorrecto: "Los mensajes eran de cuentas falsas o no oficiales; AFP Factual registra que Boric se posicionó contra saqueos.",
    fuente: {
      medio: "AFP Factual",
      url: "https://factual.afp.com/doc.afp.com.32M86ZF",
    },
  },
  {
    slug: "firmas-falsas-servel-boric",
    fecha: "2023-08-01",
    categoria: "probidad",
    claim: "Boric se habría presentado con firmas falsas, incluyendo 13 mil firmas en un día.",
    difusor: "Redes sociales.",
    veredicto: "falso",
    datoCorrecto: "Eran afiliaciones a Convergencia Social ingresadas con Clave Única; Servel desmintió la acusación.",
    fuente: {
      medio: "Fast Check",
      url: "https://www.fastcheck.cl/2023/08/01/imagen-se-filtro-del-servel-gabriel-boric-se-presento-con-firmas-falsas-mas-de-13-mil-firmas-en-un-solo-dia-falso/2/",
    },
  },
  {
    slug: "biobio-falso-ansiedad-boric",
    fecha: "2023-10-06",
    categoria: "desinformacion",
    claim: "BioBioChile habría informado que Boric fue trasladado a un recinto hospitalario por ansiedad.",
    difusor: "Cuenta que suplantaba a BioBioChile.",
    veredicto: "falso",
    datoCorrecto: "La cuenta era falsa y Presidencia negó el supuesto traslado.",
    fuente: {
      medio: "Fast Check",
      url: "https://www.fastcheck.cl/2023/10/06/imagen-presidente-boric-habria-sido-trasladado-a-un-recinto-hospitalario-tras-sufrir-un-cuadro-de-ansiedad-falso/",
    },
  },
  {
    slug: "luis-castillo-pension-gracia-falsa",
    fecha: "2023-12-18",
    categoria: "seguridad",
    claim: "La Tercera habría informado que Luis Castillo recibía pensión de gracia otorgada por Boric.",
    difusor: "Imagen falsa atribuida a La Tercera.",
    veredicto: "falso",
    datoCorrecto: "La Tercera no publicó eso; Castillo no figuraba en la nómina y ningún indultado recibía esa pensión.",
    fuente: {
      medio: "Fast Check",
      url: "https://www.fastcheck.cl/2023/12/18/luis-castillo-figura-en-listado-de-beneficiados-con-pension-de-gracia-otorgada-por-presidente-boric-falso/",
    },
  },
  {
    slug: "18-mil-pensiones-delincuentes-estallido",
    fecha: "2024-01-11",
    categoria: "seguridad",
    claim: "Boric habría entregado 18 mil pensiones de gracia a “delincuentes del estallido social”.",
    difusor: "Contenido viral en X y Facebook.",
    veredicto: "falso",
    datoCorrecto: "Eran 418 pensiones vinculadas a violaciones de derechos humanos en el estallido; 18 mil era el total histórico de pensiones de gracia de varios gobiernos.",
    fuente: {
      medio: "Fast Check",
      url: "https://www.fastcheck.cl/2024/01/11/gabriel-boric-le-entrega-18-mil-pensiones-de-gracia-a-delincuentes-del-estallido-social-falso/2/",
    },
  },
  {
    slug: "baile-andino-289-millones",
    fecha: "2024-01-12",
    categoria: "social",
    claim: "El Gobierno financió un baile artístico andino por $289 millones.",
    difusor: "Usuarios en redes sociales.",
    veredicto: "falso",
    datoCorrecto: "Ministerio de Culturas y MNBA negaron financiamiento; el colectivo dijo que se autogestionaba.",
    fuente: {
      medio: "Fast Check",
      url: "https://www.fastcheck.cl/2024/01/12/gobierno-financia-baile-artistico-andino-costo-289-millones-falso/",
    },
  },
  {
    slug: "polola-boric-grado-10",
    fecha: "2024-01-26",
    categoria: "probidad",
    claim: "Boric habría subido a su pareja Paula Carrasco de grado 16 a grado 10 para que ganara más de $2,5 millones.",
    difusor: "Redes sociales.",
    veredicto: "falso",
    datoCorrecto: "Transparencia Activa y antecedentes del Ministerio de Medio Ambiente no respaldan la acusación.",
    fuente: {
      medio: "Fast Check",
      url: "https://www.fastcheck.cl/2024/01/26/polola-de-gabriel-boric-ya-era-funcionaria-grado-16-ganando-en-promedio-990-lucas-ahora-la-subio-a-grado-10-y-gana-mas-de-2-palos-y-medio-falso/",
    },
  },
  {
    slug: "cntv-censura-chistes-vina",
    fecha: "2024-02-27",
    categoria: "desinformacion",
    claim: "El Gobierno habría pedido al CNTV censurar chistes sobre Boric en Viña 2024.",
    difusor: "Usuario de TikTok.",
    veredicto: "falso",
    datoCorrecto: "El CNTV dijo que no tiene atribuciones para intervenir la programación del festival.",
    fuente: {
      medio: "Mala Espina Check",
      url: "https://www.malaespinacheck.cl/pais/2024/02/27/gobierno-cntv-censura-chistes-boric-vina/",
    },
  },
  {
    slug: "bono-carabineros-la-tercera-falso",
    fecha: "2024-04-12",
    categoria: "seguridad",
    claim: "Boric no habría autorizado un bono trimestral para Carabineros, según un supuesto titular de La Tercera.",
    difusor: "Cuentas de ultraderecha; Fast Check consigna que el diputado Kaiser lo compartió y borró, según periodista Nicolás Sepúlveda.",
    veredicto: "falso",
    datoCorrecto: "La Tercera no publicó eso y Carabineros desmintió que existiera tal bono trimestral.",
    fuente: {
      medio: "Fast Check",
      url: "https://www.fastcheck.cl/2024/04/12/imagen-presidente-boric-no-autoriza-bono-trimestral-para-carabineros-de-chile-falso/",
    },
  },
  {
    slug: "identidad-genero-tres-anos",
    fecha: "2024-07-18",
    categoria: "desinformacion",
    claim: "Boric habría modificado la ley de identidad de género para permitir cambios de nombre y sexo desde los 3 años.",
    difusor: "Usuarios que compartieron un recorte de Tomás Mosciatti.",
    veredicto: "falso",
    datoCorrecto: "La ley no fue modificada; permite cambios desde los 14 años bajo reglas específicas.",
    fuente: {
      medio: "AFP Factual",
      url: "https://factual.afp.com/doc.afp.com.364G2BB",
    },
  },
  {
    slug: "monsalve-video-recortado-boric",
    fecha: "2024-10-29",
    categoria: "probidad",
    claim: "Boric habría culpado a una mujer por haber sido abusada si bebía alcohol.",
    difusor: "Usuarios que compartieron un video recortado tras el caso Monsalve.",
    veredicto: "fuera_de_contexto",
    datoCorrecto: "Boric hablaba de responsabilidad del acusado si bebió más de la cuenta, no de la denunciante.",
    fuente: {
      medio: "AFP Factual",
      url: "https://factual.afp.com/doc.afp.com.36L66LY",
    },
  },
  {
    slug: "bono-312-mil-migrantes",
    fecha: "2024-11-22",
    categoria: "inmigracion",
    claim: "El Gobierno habría aprobado un bono de $312.000 para cada migrante.",
    difusor: "Facebook, X y TikTok.",
    veredicto: "falso",
    datoCorrecto: "Era una glosa de $312 millones para apoyo a migrantes regulares/refugiados vulnerables, no un bono individual; además fue rechazada.",
    fuente: {
      medio: "AFP Factual",
      url: "https://factual.afp.com/doc.afp.com.36MZ3JL",
    },
  },
  {
    slug: "tasa-hipotecaria-boric-matthei",
    fecha: "2025-11-11",
    categoria: "probidad",
    claim: "Boric habría obtenido una tasa hipotecaria de 2% para su casa.",
    difusor: "Evelyn Matthei en debate Anatel.",
    veredicto: "falso",
    datoCorrecto: "La tasa informada fue 3,47%; Scotiabank dijo que cumplió requisitos técnicos y estandarizados.",
    fuente: {
      medio: "Mala Espina Check",
      url: "https://www.malaespinacheck.cl/politica/2025/11/11/es-falso-que-el-presidente-boric-haya-tenido-una-tasa-hipotecaria-del-2-como-afirmo-matthei/",
    },
  },
  {
    slug: "pobreza-aumento-boric-kast",
    fecha: "2025-12-03",
    categoria: "social",
    claim: "La pobreza habría aumentado durante el gobierno de Boric.",
    difusor: "José Antonio Kast en debate ARCHI.",
    veredicto: "falso",
    datoCorrecto: "CASEN 2022 marcó 6,5%, menor que 2020 y 2017; no existía una nueva medición que respaldara el aumento atribuido.",
    fuente: {
      medio: "Mala Espina Check",
      url: "https://www.malaespinacheck.cl/politica/2025/12/03/es-falso-que-aumento-la-pobreza-durante-este-gobierno-a-diferencia-de-lo-que-dijo-kast/",
    },
  },
  {
    slug: "millon-desempleados-boric-kast",
    fecha: "2025-12-10",
    categoria: "social",
    claim: "Chile tendría un millón de desempleados bajo Boric.",
    difusor: "José Antonio Kast en debate Anatel.",
    veredicto: "falso",
    datoCorrecto: "El último boletín INE citado por el chequeo registraba 866.097 personas desocupadas; durante el gobierno no se superó el millón.",
    fuente: {
      medio: "Mala Espina Check",
      url: "https://www.malaespinacheck.cl/politica/2025/12/10/es-falso-que-hay-un-millon-de-desempleados-en-chile-a-diferencia-de-lo-que-afirmo-jose-antonio-kast/",
    },
  },
  {
    slug: "felipe-kast-maduro-apruebo",
    fecha: "2022-05-17",
    categoria: "desinformacion",
    claim: "Nicolás Maduro habría saludado el borrador de la Convención; Felipe Kast lo presentó como “jefe de campaña del Apruebo”.",
    difusor: "Felipe Kast, senador de Evópoli; luego borró la publicación.",
    veredicto: "falso",
    datoCorrecto: "El registro era de 2020, estaba editado y no correspondía a un apoyo de Maduro al borrador constitucional de 2022.",
    fuente: {
      medio: "BioBioChile",
      url: "https://www.biobiochile.cl/noticias/nacional/chile/2022/05/17/felipe-kast-tuitea-falso-video-de-maduro-saludando-la-cc-aparecio-el-jefe-de-campana-del-apruebo.shtml",
    },
  },
  {
    slug: "100-mil-funcionarios-politicos",
    fecha: "2025-10-09",
    categoria: "probidad",
    claim: "El gobierno de Boric habría contratado 100 mil funcionarios políticos adicionales.",
    difusor: "José Antonio Kast y el Partido Republicano instalaron la cifra en la discusión del recorte fiscal.",
    veredicto: "engañoso",
    datoCorrecto: "El aumento de cerca de 100 mil funcionarios incluía municipios, universidades y empresas públicas; solo alrededor de un tercio correspondía al Gobierno Central.",
    fuente: {
      medio: "El País Chile",
      url: "https://elpais.com/chile/2025-10-09/el-alza-de-contratacion-de-empleados-publicos-abre-un-nuevo-frente-de-batalla-entre-kast-y-el-gobierno-de-boric.html",
    },
  },
];

export const dobleEstandarOrdenado = () =>
  [...CASOS_DOBLE_ESTANDAR].sort((a, b) => b.severidad - a.severidad || b.fecha.localeCompare(a.fecha));

export const mentirasContraBoricOrdenadas = () =>
  [...MENTIRAS_CONTRA_BORIC].sort((a, b) => b.fecha.localeCompare(a.fecha));
