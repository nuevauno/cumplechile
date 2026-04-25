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
      "El Oficio Circular N°16 recomienda descontinuar el PAE de JUNAEB y otros programas sociales, además de rebajar 260 programas.",
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
    slug: "junaeb-raciones-pae",
    tema: "JUNAEB",
    critica:
      "Como diputado, Kast pedía modernizar y asignar responsabilidades cuando JUNAEB perdía raciones o recursos públicos.",
    ahora:
      "Ahora Hacienda no aparece corrigiendo esas pérdidas: puso al Programa de Alimentación Escolar en la lista de programas recomendados para descontinuar.",
    fuenteCritica: {
      medio: "BCN Labor Parlamentaria",
      url: "https://obtienearchivo.bcn.cl/obtienearchivo?id=recursoslegales%2F10221.3%2F57148%2F1%2F2231_358.pdf",
    },
    fuenteAhora: {
      medio: "The Clinic",
      url: "https://www.theclinic.cl/2026/04/24/subvenciones-y-alimentacion-escolar-junto-a-transporte-publico-regional-el-ranking-de-los-diez-programas-con-mayor-gasto-que-hacienda-sugiere-descontinuar/",
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
