export type CategoriaDobleEstandar =
  | "seguridad"
  | "inmigracion"
  | "probidad"
  | "salud"
  | "educacion"
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
