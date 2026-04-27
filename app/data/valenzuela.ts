export type CategoriaValenzuela =
  | "estado"
  | "probidad"
  | "comunicacion"
  | "fiscal"
  | "seguridad"
  | "campana";

export interface FuenteValenzuela {
  medio: string;
  url: string;
}

export interface CasoValenzuela {
  slug: string;
  categoria: CategoriaValenzuela;
  fechaColumna: string;
  tituloColumna: string;
  tesisOriginal: string;
  contraste: string;
  lectura: string;
  fuenteColumna: FuenteValenzuela;
  fuenteContraste: FuenteValenzuela;
  severidad: 1 | 2 | 3 | 4;
}

export const CASOS_VALENZUELA: CasoValenzuela[] = [
  {
    slug: "parasitos-asesor-estado",
    categoria: "estado",
    fechaColumna: "2025-10-08",
    tituloColumna: "Parásitos",
    tesisOriginal:
      "Valenzuela instaló que el Estado estaba capturado por operadores, asesores y consultorías, y que había gente viviendo del erario mientras los ciudadanos financiaban servicios que recibían cada vez peor.",
    contraste:
      "En abril de 2026 BioBioChile reveló su contrato como coordinador de asesores del gabinete presidencial: $80,9 millones hasta el 31 de diciembre, con cuotas mensuales de hasta $8,9 millones.",
    lectura:
      "La vara vuelve completa: el principal acusador del parasitismo estatal pasó a ser uno de los asesores mejor pagados del Segundo Piso. Legal no es lo mismo que coherente.",
    fuenteColumna: {
      medio: "La Tercera",
      url: "https://www.latercera.com/opinion/noticia/parasitos/",
    },
    fuenteContraste: {
      medio: "BioBioChile Investiga",
      url: "https://www.biobiochile.cl/especial/bbcl-investiga/noticias/de-pasillo/2026/04/18/hasta-89-millones-al-mes-el-contrato-de-cristian-valenzuela-uno-de-los-asesores-estrella-de-kast.shtml",
    },
    severidad: 4,
  },
  {
    slug: "alta-direccion-publica-no-era-outsider",
    categoria: "estado",
    fechaColumna: "2025-10-08",
    tituloColumna: "Parásitos",
    tesisOriginal:
      "La columna separó a los ciudadanos que pagan impuestos de quienes supuestamente usan el Estado como refugio político, y apuntó a la experiencia pública como privilegio antes que mérito.",
    contraste:
      "CIPER documentó que Valenzuela integra desde 2018 el panel de expertos de Alta Dirección Pública y que entre 2022 y 2025 participó en al menos 20 concursos para cargos estatales.",
    lectura:
      "No era un observador externo denunciando una maquinaria ajena. Era parte del mismo sistema de selección pública que después presentó como símbolo de captura.",
    fuenteColumna: {
      medio: "La Tercera",
      url: "https://www.latercera.com/opinion/noticia/parasitos/",
    },
    fuenteContraste: {
      medio: "CIPER",
      url: "https://www.ciperchile.cl/2025/10/16/asesor-de-kast-que-escribio-la-columna-parasitos-trabaja-desde-2018-seleccionando-personas-para-ocupar-cargos-publicos/",
    },
    severidad: 4,
  },
  {
    slug: "cartel-boric-ope-recursos-publicos",
    categoria: "probidad",
    fechaColumna: "2025-05-17",
    tituloColumna: "El Cártel de Boric",
    tesisOriginal:
      "Acusó al Frente Amplio de convertir la militancia en franquicia estatal, con contratos, redes de protección y recursos públicos circulando alrededor de los propios.",
    contraste:
      "Interferencia y BioBioChile reportaron que 11 integrantes de la Oficina del Presidente Electo recibieron pagos desde Presidencia antes del cambio de mando, pese a que Republicanos había hablado de recursos propios. Valenzuela figura entre los pagos y luego quedó en el Segundo Piso.",
    lectura:
      "El discurso contra la captura del Estado se vuelve incómodo cuando la transición propia fue pagada con fondos públicos y parte de ese equipo aterrizó dentro de La Moneda.",
    fuenteColumna: {
      medio: "La Tercera",
      url: "https://www.latercera.com/opinion/noticia/el-cartel-de-boric/",
    },
    fuenteContraste: {
      medio: "Interferencia",
      url: "https://interferencia.cl/articulos/kast-pago-sus-asesores-de-la-ope-con-fondos-publicos-pesar-de-que-presidente-de",
    },
    severidad: 4,
  },
  {
    slug: "desplome-fiscal-estado-en-quiebra",
    categoria: "fiscal",
    fechaColumna: "2025-11-01",
    tituloColumna: "El desplome fiscal",
    tesisOriginal:
      "Presentó el manejo fiscal de Boric como un problema moral: cifras acomodadas, falta de transparencia, contabilidad política y pérdida de credibilidad del Estado.",
    contraste:
      "Ya en el gobierno, La Tribuna reportó que Valenzuela fue identificado como ideólogo del mensaje oficial sobre un supuesto Estado en quiebra, concepto que el propio ministro Quiroz rechazó y que obligó a explicaciones ante Contraloría.",
    lectura:
      "Quien acusaba manipulación de cifras terminó asociado a una de las frases oficiales más débiles técnicamente del arranque del gobierno.",
    fuenteColumna: {
      medio: "La Tercera",
      url: "https://www.latercera.com/opinion/noticia/el-desplome-fiscal/",
    },
    fuenteContraste: {
      medio: "La Tribuna",
      url: "https://www.latribuna.cl/politica/2026/03/25/tras-oficio-de-contraloria-gobierno-identifica-a-asesor-vinculado-a-cuestionado-mensaje-de-estado-en-quiebra.html",
    },
    severidad: 4,
  },
  {
    slug: "incompetencia-oficio-recortes",
    categoria: "comunicacion",
    fechaColumna: "2025-10-18",
    tituloColumna: "Incompetencia",
    tesisOriginal:
      "Usó el caso de las tarifas eléctricas para describir al gobierno de Boric como improvisado, sin revisión técnica y con asesores que no hacían bien su trabajo.",
    contraste:
      "El oficio de Hacienda con 142 programas sugeridos para cierre abrió una crisis por PAE, Salud, Justicia y Seguridad. Quiroz tuvo que aclarar que era una orientación, no una decisión final, después del costo político.",
    lectura:
      "La crítica a la improvisación vuelve sobre el propio gobierno: si era solo un insumo técnico, se comunicó como un hachazo social; si era una decisión, intentaron retroceder por presión.",
    fuenteColumna: {
      medio: "La Tercera",
      url: "https://www.latercera.com/opinion/noticia/incompetencia/",
    },
    fuenteContraste: {
      medio: "BioBioChile",
      url: "https://www.biobiochile.cl/biobiotv/programas/radiograma-biobiotv/2026/04/27/la-fuerte-controversia-por-ajuste-fiscal-que-podria-afectar-a-142-programas-estatales.shtml",
    },
    severidad: 4,
  },
  {
    slug: "pequeno-presidente-tono-campana",
    categoria: "comunicacion",
    fechaColumna: "2025-10-04",
    tituloColumna: "El pequeño Presidente",
    tesisOriginal:
      "Criticó que Boric usara el micrófono presidencial para pelear con adversarios y actuar como candidato en vez de gobernante.",
    contraste:
      "El 27 de abril, Meganoticias describió que Kast retomó tono de campaña en medio de la polémica por recortes, atacó al gobierno anterior y volvió al absoluto de que Boric no tendría ninguna cifra buena.",
    lectura:
      "La crítica a usar La Moneda como tribuna de combate ahora le cae al Presidente que gobierna con el libreto de campaña todavía abierto.",
    fuenteColumna: {
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
    slug: "robar-eleccion-moneda-recursos",
    categoria: "campana",
    fechaColumna: "2025-09-07",
    tituloColumna: "Se quieren robar la elección",
    tesisOriginal:
      "Acusó al gobierno de Boric de usar La Moneda, ministros y recursos estatales como maquinaria de campaña, elevando la prescindencia a estándar moral absoluto.",
    contraste:
      "En abril, Kast reconoció un error por el almuerzo privado en La Moneda con excompañeros, caso fiscalizado por Contraloría y con discusión pública sobre uso de servicio financiado por el Estado.",
    lectura:
      "No es el mismo hecho, pero sí la misma vara: cuando el Estado se usa para una finalidad política o privada, el estándar que pidieron era cero ambigüedad.",
    fuenteColumna: {
      medio: "La Tercera",
      url: "https://www.latercera.com/opinion/noticia/se-quieren-robar-la-eleccion/",
    },
    fuenteContraste: {
      medio: "BioBioChile",
      url: "https://www.biobiochile.cl/noticias/nacional/chile/2026/04/24/kast-admite-error-por-desconocimiento-por-almuerzo-con-excompaneros-en-la-moneda.shtml",
    },
    severidad: 3,
  },
  {
    slug: "civilizacion-barbarie-seguridad-recortes",
    categoria: "seguridad",
    fechaColumna: "2025-10-22",
    tituloColumna: "Civilización o barbarie",
    tesisOriginal:
      "Planteó que el miedo ciudadano expresaba abandono estatal y que la política debía responder con orden, ley y protección efectiva frente al crimen.",
    contraste:
      "El anexo de Seguridad de Hacienda recomendó cerrar el Programa Contra el Crimen Organizado, Calles Sin Violencia e Innovación Territorial, y rebajar Denuncia Seguro, Televigilancia, Apoyo a Víctimas y Seguridad Municipal.",
    lectura:
      "Si la seguridad era la prioridad existencial, el primer test de coherencia era no poner en la lista de cierre programas que financian persecución penal, prevención y apoyo a víctimas.",
    fuenteColumna: {
      medio: "La Tercera",
      url: "https://www.latercera.com/opinion/noticia/civilizacion-o-barbarie/",
    },
    fuenteContraste: {
      medio: "The Clinic",
      url: "https://www.theclinic.cl/2026/04/24/descontinuar-el-programa-contra-el-crimen-organizado-y-calles-sin-violencia-las-recomendaciones-de-hacienda-a-seguridad/",
    },
    severidad: 4,
  },
];

export const valenzuelaOrdenado = () =>
  [...CASOS_VALENZUELA].sort((a, b) => b.severidad - a.severidad || b.fechaColumna.localeCompare(a.fechaColumna));

export const VALENZUELA_STATS = {
  total: CASOS_VALENZUELA.length,
  criticos: CASOS_VALENZUELA.filter((c) => c.severidad >= 4).length,
  fuentesColumna: new Set(CASOS_VALENZUELA.map((c) => c.tituloColumna)).size,
  contratoTexto: "$80,9 millones",
};
