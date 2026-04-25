export interface CasoEspejoBoric {
  slug: string;
  tema: string;
  critica: string;
  ahora: string;
  fuenteCritica: {
    medio: string;
    url: string;
  };
  fuenteAhora: {
    medio: string;
    url: string;
  };
}

export const ESPEJO_BORIC: CasoEspejoBoric[] = [
  {
    slug: "beneficios-sociales-recortes",
    tema: "Beneficios sociales",
    critica:
      "Kast respondió a Boric que su recorte de US$6.000 millones no tocaría beneficios sociales ni a quienes reciben ayuda del Estado.",
    ahora:
      "El Oficio Circular N°16 recomienda descontinuar el PAE de JUNAEB, ayudas técnicas para discapacidad y otros programas sociales; además rebaja 260 programas.",
    fuenteCritica: {
      medio: "BioBioChile",
      url: "https://www.biobiochile.cl/noticias/nacional/chile/2025/10/26/kast-explica-recorte-presupuestario-de-us-6-000-millones-no-vamos-a-cortar-ningun-beneficio-social.shtml",
    },
    fuenteAhora: {
      medio: "The Clinic",
      url: "https://www.theclinic.cl/2026/04/24/descontinuar-142-programas-y-rebajar-presupuesto-en-otros-260-las-recomendaciones-de-hacienda-a-ministerios-para-recortar-mas-de-6-mil-millones-de-dolares/",
    },
  },
  {
    slug: "parasitos-del-estado-adp",
    tema: "Estado",
    critica:
      "Kast respaldó la columna de Cristián Valenzuela sobre un Estado “drenado por parásitos” y dijo que resumía lo que venía denunciando desde 2017.",
    ahora:
      "CIPER documentó que Valenzuela trabajaba desde 2018 como experto del Sistema de Alta Dirección Pública, interviniendo en concursos para cargos estatales, incluida JUNAEB.",
    fuenteCritica: {
      medio: "Publimetro",
      url: "https://www.publimetro.cl/noticias/2025/10/13/kast-respalda-definicion-de-valenzuela-sobre-parasitos-en-el-estado-hay-abusos-eso-es-evidente/",
    },
    fuenteAhora: {
      medio: "CIPER",
      url: "https://www.ciperchile.cl/2025/10/16/asesor-de-kast-que-escribio-la-columna-parasitos-trabaja-desde-2018-seleccionando-personas-para-ocupar-cargos-publicos/",
    },
  },
  {
    slug: "estado-en-quiebra-sedini",
    tema: "Vocería",
    critica:
      "La Segegob de Mara Sedini publicó que Boric dejó “un Estado en quiebra” y la caja fiscal completamente vacía.",
    ahora:
      "Al día siguiente, Hacienda contradijo el concepto, la publicación fue borrada y Contraloría pidió explicaciones formales a la vocera.",
    fuenteCritica: {
      medio: "Emol",
      url: "https://www.emol.com/noticias/Nacional/2026/03/24/1195283/quiroz-rechaza-estado-quiebra-publicacion.html",
    },
    fuenteAhora: {
      medio: "BioBioChile",
      url: "https://www.biobiochile.cl/especial/bbcl-investiga/noticias/de-pasillo/2026/03/25/estado-en-quiebra-contraloria-pide-explicaciones-a-sedini-por-polemico-posteo-que-enredo-a-quiroz.shtml",
    },
  },
  {
    slug: "cadena-nacional-abuso-cargo",
    tema: "Cadena nacional",
    critica:
      "Kast acusó a Boric de abusar de la cadena nacional y del cargo presidencial para intervenir en campaña.",
    ahora:
      "Como Presidente, usó su primera cadena nacional para presentar el Plan de Reconstrucción, su principal apuesta legislativa y económica.",
    fuenteCritica: {
      medio: "Diario Financiero",
      url: "https://www.df.cl/economia-y-politica/politica/kast-vuelve-a-criticar-a-boric-por-intervencionismo-el-unico-pequeno-es",
    },
    fuenteAhora: {
      medio: "Diario Financiero",
      url: "https://www.df.cl/df-video/ahora-en-df-kast-presenta-los-ejes-de-su-plan-de-reconstruccion-en-cadena",
    },
  },
  {
    slug: "alumnos-en-practica",
    tema: "Instalación",
    critica:
      "Desde la derecha se instaló que el gobierno de Boric era de “alumnos en práctica”; Mauricio Israel reconoció ese marco al decir “nosotros tildamos” así a Boric.",
    ahora:
      "El mismo comentarista dijo que el inicio de Kast era “peor que los alumnos en práctica”, apuntando a errores, seremis caídos y falta de calle.",
    fuenteCritica: {
      medio: "Central Noticia",
      url: "https://www.centralnoticia.cl/noticias/nacional/2026/04/21/este-gobierno-es-peor-que-los-alumnos-en-practica-mauricio-israel-destroza-a-kast-y-lanza-potente-revelacion/405629/",
    },
    fuenteAhora: {
      medio: "Central Noticia",
      url: "https://www.centralnoticia.cl/noticias/nacional/2026/04/21/este-gobierno-es-peor-que-los-alumnos-en-practica-mauricio-israel-destroza-a-kast-y-lanza-potente-revelacion/405629/",
    },
  },
  {
    slug: "lincolao-becas-chile",
    tema: "Ciencia",
    critica:
      "Lincolao dijo en la Comisión de Ciencia que una de las reducciones serían las becas de magíster y postdoctorado en el extranjero.",
    ahora:
      "Luego sostuvo que nunca habían anunciado cortar Becas Chile; Fast Check verificó que la propuesta original a DIPRES seguía contemplando esas reducciones.",
    fuenteCritica: {
      medio: "Fast Check",
      url: "https://www.fastcheck.cl/2026/04/19/se-recorta-becas-chile-los-dichos-de-la-ministra-lincolao-en-el-congreso-nacional-que-ahora-descarta/",
    },
    fuenteAhora: {
      medio: "The Clinic",
      url: "https://www.theclinic.cl/2026/04/12/ministra-lincolao-nosotros-nunca-anunciamos-que-ibamos-a-cortar-becas-chile/",
    },
  },
  {
    slug: "dobles-sueldos-probidad",
    tema: "Probidad",
    critica:
      "La campaña instaló una línea roja de tolerancia cero a dobles sueldos y privilegios estatales.",
    ahora:
      "La Tercera reveló pagos simultáneos de asesores del círculo presidencial durante la transición, incluidos cargos de elección popular.",
    fuenteCritica: {
      medio: "La Tercera",
      url: "https://www.latercera.com/politica/noticia/transparencia-revela-cuanto-han-percibido-asesores-de-kast-por-doble-funcion-en-cargos-de-eleccion-popular/",
    },
    fuenteAhora: {
      medio: "La Tercera",
      url: "https://www.latercera.com/politica/noticia/transparencia-revela-cuanto-han-percibido-asesores-de-kast-por-doble-funcion-en-cargos-de-eleccion-popular/",
    },
  },
  {
    slug: "zanja-boric-retroexcavadoras",
    tema: "Frontera",
    critica:
      "Kast criticó a Boric porque, a su juicio, debió tener retroexcavadoras cavando una zanja en la frontera.",
    ahora:
      "Ya en el gobierno, la primera cifra verificable mezcla 12 km agregados en dos regiones con una promesa inicial de 30 km en Arica en 90 días.",
    fuenteCritica: {
      medio: "T13",
      url: "https://www.t13.cl/noticia/politica/nacional/J.A-Kast-Hay-que-hacer-una-zanja-e-indicar-a-los-migrantes-ilegales-que-hay-un-limite-en-Colchane",
    },
    fuenteAhora: {
      medio: "Meganoticias",
      url: "https://www.meganoticias.cl/nacional/520120-plan-escudo-fronterizo-alcanza-20-avance-zanja-suma-12-kilometros-frontera-norte-22-04-2026.html",
    },
  },
];
