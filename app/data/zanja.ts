export interface FuenteZanja {
  medio: string;
  url: string;
  fecha: string;
}

export interface ContradiccionZanja {
  titulo: string;
  antes: string;
  despues: string;
  fuente: FuenteZanja;
}

export const ZANJA_TRACKER = {
  inicio: "2026-03-16",
  plazoDias: 90,
  kmConstruidos: 12,
  kmArica: 3.5,
  kmTarapaca: 8.5,
  kmTramoArica: 30,
  kmPlanActual: 60,
  kmTotalDeclarado: 500,
  fuenteAvance: {
    medio: "Meganoticias",
    url: "https://www.meganoticias.cl/nacional/520120-plan-escudo-fronterizo-alcanza-20-avance-zanja-suma-12-kilometros-frontera-norte-22-04-2026.html",
    fecha: "2026-04-22",
  },
  cautela:
    "El avance de 12 km corresponde al plan agregado informado por el comisionado presidencial: 3,5 km en Arica y 8,5 km en Tarapacá. No equivale a 12 km del tramo Chacalluta-Arica de 30 km.",
};

export const ZANJA_CONTRADICCIONES: ContradiccionZanja[] = [
  {
    titulo: "De “retroexcavadoras en la frontera” a inicio cinco días después",
    antes:
      "Como candidato, Kast criticó a Boric diciendo que las retroexcavadoras debían estar en la frontera cavando una zanja.",
    despues:
      "La maquinaria se desplegó tras el cambio de mando y el inicio formal del plan fue anunciado el 16 de marzo de 2026, cinco días después de asumir.",
    fuente: {
      medio: "T13 / La Tercera",
      url: "https://www.t13.cl/noticia/politica/nacional/J.A-Kast-Hay-que-hacer-una-zanja-e-indicar-a-los-migrantes-ilegales-que-hay-un-limite-en-Colchane",
      fecha: "2025-02-04",
    },
  },
  {
    titulo: "De 30 km en 90 días a 12 km agregados en dos regiones",
    antes:
      "El 16 de marzo se prometió llegar a 30 km en Arica en 90 días, desde una base cercana a 3 km ya existente.",
    despues:
      "El avance reportado al 22 de abril fue de 12 km totales: 3,5 km en Arica y 8,5 km en Tarapacá. La propia cifra obliga a no mezclar tramo, plan actual y meta total.",
    fuente: {
      medio: "La Tercera / Meganoticias",
      url: "https://www.latercera.com/politica/noticia/30-kilometros-de-zanja-y-nuevos-proyectos-de-ley-alvarado-entrega-detalles-del-plan-escudo-fronterizo-en-arica/",
      fecha: "2026-03-16",
    },
  },
  {
    titulo: "De símbolo de control total a obra parcial",
    antes:
      "El Plan Escudo Fronterizo fue presentado como sistema de 500 km de zanjas, muros, tecnología y presencia humana.",
    despues:
      "La primera medición pública relevante habla de 12 km de zanja y un plan actual de 60 km; el resto sigue siendo meta de largo plazo.",
    fuente: {
      medio: "T13 / Meganoticias",
      url: "https://www.t13.cl/766108-fb",
      fecha: "2026-03-16",
    },
  },
  {
    titulo: "De promesa física a indicador que mezcla zanja, patrullaje y salidas voluntarias",
    antes:
      "La zanja fue presentada como señal material de control fronterizo: una barrera que impediría el cruce por pasos no habilitados.",
    despues:
      "Sauerbaum la defendió como una barrera 3x3 con efecto disuasivo, pero reconoció que opera junto a tecnología, patrullaje y ahora un proceso de salidas voluntarias. El resultado ya no se puede atribuir solo a kilómetros cavados.",
    fuente: {
      medio: "CNN Chile",
      url: "https://www.cnnchile.com/pais/director-de-migraciones-defendio-zanja-en-la-frontera-es-una-cosa-de-3x3-donde-si-uno-se-cae-ahi-no-puede-volver-a-salir/",
      fecha: "2026-04-30",
    },
  },
];
