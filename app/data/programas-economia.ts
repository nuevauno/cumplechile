import type { ProgramaPublico } from "./types";

/**
 * Ministerio de Economia, Fomento y Turismo.
 * Anexo del Oficio Circular N°16 (Hacienda, 21-abr-2026).
 */
export const PROGRAMAS_ECONOMIA: ProgramaPublico[] = [
  // Comite Innova Chile (5)
  { slug: "ic-consolida-expande", servicioSlug: "innova-chile", nombre: "Consolida y Expande", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 7494896 },
  { slug: "ic-idi-empresarial", servicioSlug: "innova-chile", nombre: "Desarrollo de Proyectos de I+D+i Empresarial", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 22439038 },
  { slug: "ic-innovacion-empresarial", servicioSlug: "innova-chile", nombre: "Desarrollo de Proyectos de Innovacion Empresarial", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 11216673 },
  { slug: "ic-instala", servicioSlug: "innova-chile", nombre: "Instala Innovacion", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 8876245 },
  { slug: "ic-sumate", servicioSlug: "innova-chile", nombre: "Sumate a Innovar", recomendacion: "descontinuar", montoEjecutado2025MilesCLP: 253558 },

  // CORFO (37)
  { slug: "co-activa", servicioSlug: "corfo", nombre: "ACTIVA - Desarrolla Inversion", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 20312906 },
  { slug: "co-semilla-inicia", servicioSlug: "corfo", nombre: "Semilla Inicia", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 5855790 },
  { slug: "co-semilla-expande", servicioSlug: "corfo", nombre: "Semilla Expande", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 5761371 },
  { slug: "co-redes-mercados", servicioSlug: "corfo", nombre: "Redes - Red Mercados", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 1540304 },
  { slug: "co-redes-proveedores", servicioSlug: "corfo", nombre: "REDES - Red Proveedores", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 1858555 },
  { slug: "co-redes-asociativa", servicioSlug: "corfo", nombre: "REDES - Red Asociativa", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 1616933 },
  { slug: "co-cft-ip-2030", servicioSlug: "corfo", nombre: "Programa de Innovacion y Transferencia Tecnologica para CFT e IP (CFT-IP 2030)", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 1166609 },
  { slug: "co-formacion-competitividad", servicioSlug: "corfo", nombre: "Programa de Formacion para la Competitividad", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 2071449 },
  { slug: "co-par", servicioSlug: "corfo", nombre: "Programa de Apoyo a la Reactivacion (PAR)", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 7160856 },
  { slug: "co-iniciativas-tecnologica", servicioSlug: "corfo", nombre: "Programa de Apoyo a Iniciativas de Inversion Tecnologica", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 2178658 },
  { slug: "co-ifi-estrategico", servicioSlug: "corfo", nombre: "Programa de Apoyo a Iniciativas de Impacto Estrategico (IFI Estrategico)", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 2088563 },
  { slug: "co-startup-chile", servicioSlug: "corfo", nombre: "Start-Up Chile", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 7439001 },
  { slug: "co-impulsa-tecnologica", servicioSlug: "corfo", nombre: "Impulsa Transicion Tecnologica - Piloto", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 1078667 },
  { slug: "co-pti", servicioSlug: "corfo", nombre: "Programa Territorial Integrado (PTI)", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 3869479 },
  { slug: "co-viraliza", servicioSlug: "corfo", nombre: "Viraliza", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 10396944 },
  { slug: "co-sustentabilidad", servicioSlug: "corfo", nombre: "Agencia de Sustentabilidad y Cambio Climatico", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 3683615 },
  { slug: "co-cobertura-riesgos", servicioSlug: "corfo", nombre: "Aplicacion Fondo Cobertura de Riesgos", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 45328786 },
  { slug: "co-escalamiento", servicioSlug: "corfo", nombre: "Escalamiento", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 2303497 },
  { slug: "co-institutos-tecnologicos", servicioSlug: "corfo", nombre: "Fortalecimiento de Institutos Tecnologicos", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 3073296 },
  { slug: "co-refinanciamiento-verde", servicioSlug: "corfo", nombre: "Refinanciamiento Verde Sustentable", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 51852526 },
  { slug: "co-bienes-publicos", servicioSlug: "corfo", nombre: "Bienes Publicos para la Competitividad", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 2937971 },
  { slug: "co-pilotaje", servicioSlug: "corfo", nombre: "Centros de Pilotaje y Escalamiento Productivo", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 4902511 },
  { slug: "co-estrategicos", servicioSlug: "corfo", nombre: "Programas Estrategicos de Desarrollo", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 5554447 },
  { slug: "co-tecnologicos-estrategicos", servicioSlug: "corfo", nombre: "Ejecucion de Programas Tecnologicos Estrategicos", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 14692021 },
  { slug: "co-audiovisuales", servicioSlug: "corfo", nombre: "Programa de Apoyo a Inversiones Audiovisuales", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 3045610 },
  { slug: "co-fondo-inversion", servicioSlug: "corfo", nombre: "Fondo y Sociedades de Inversion", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 18535703 },
  { slug: "co-potencia", servicioSlug: "corfo", nombre: "Potencia", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 2612344 },
  { slug: "co-credito-mipyme", servicioSlug: "corfo", nombre: "Credito Mipyme", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 22595013 },
  { slug: "co-fomento-indigena", servicioSlug: "corfo", nombre: "Comite de Desarrollo y Fomento Indigena", recomendacion: "descontinuar", montoEjecutado2025MilesCLP: 718134 },
  { slug: "co-fomento-calidad", servicioSlug: "corfo", nombre: "Fomento a la Calidad", recomendacion: "descontinuar", montoEjecutado2025MilesCLP: 773902 },
  { slug: "co-redes-silvoagro", servicioSlug: "corfo", nombre: "REDES - Red Tecnologica Silvoagropecuaria GTT+", recomendacion: "descontinuar", montoEjecutado2025MilesCLP: 917576 },
  { slug: "co-red-agro", servicioSlug: "corfo", nombre: "Red Asociativa AGRO +", recomendacion: "descontinuar", montoEjecutado2025MilesCLP: 497848 },
  { slug: "co-fomento-sostenible", servicioSlug: "corfo", nombre: "Red de Fomento Sostenible", recomendacion: "descontinuar", montoEjecutado2025MilesCLP: 697499 },
  { slug: "co-red-asistencia-digital", servicioSlug: "corfo", nombre: "Programa Red de Asistencia Digital", recomendacion: "descontinuar", montoEjecutado2025MilesCLP: 416006 },
  { slug: "co-activa-riego", servicioSlug: "corfo", nombre: "Activa Riego (ex Preinversion en Riego)", recomendacion: "descontinuar", montoEjecutado2025MilesCLP: 43781 },
  { slug: "co-invierte", servicioSlug: "corfo", nombre: "Invierte", recomendacion: "descontinuar", montoEjecutado2025MilesCLP: 229839 },

  // INDESPA (5)
  { slug: "in-amerbs", servicioSlug: "indespa", nombre: "Programa de Desarrollo Sustentable de las Areas de Manejo y Explotacion de Recursos Bentonicos (AMERBs) como unidades productivas de la Pesca Artesanal", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 0 },
  { slug: "in-fomento-pesca", servicioSlug: "indespa", nombre: "Programa de Fomento y Desarrollo Productivo de la Pesca Artesanal", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 12839495 },
  { slug: "in-caletas", servicioSlug: "indespa", nombre: "Programa de Gestion y Desarrollo Integral de Caletas Pesqueras Artesanales", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 0 },
  { slug: "in-acuicultura", servicioSlug: "indespa", nombre: "Programa de Fomento y Desarrollo Productivo de la Acuicultura de Pequeña Escala", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 3105286 },
  { slug: "in-algas", servicioSlug: "indespa", nombre: "Programa de Bonificacion para el Cultivo y Repoblamiento de Algas en la Pesca Artesanal y la Acuicultura de Pequeña Escala", recomendacion: "descontinuar", montoEjecutado2025MilesCLP: 444888 },

  // SERNAPESCA (1)
  { slug: "sp-pesca-ilegal", servicioSlug: "sernapesca", nombre: "Estrategias para la modernizacion de la fiscalizacion integral de la pesca ilegal", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 266265 },

  // SERNATUR (3)
  { slug: "st-turismo-social", servicioSlug: "sernatur", nombre: "Turismo Social", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 11108662 },
  { slug: "st-promocion-turistica", servicioSlug: "sernatur", nombre: "Programa de Promocion Turistica Internacional y Nacional", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 9842931 },
  { slug: "st-regulacion-turistica", servicioSlug: "sernatur", nombre: "Regulacion de servicios turisticos", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 1784683 },

  // SERCOTEC (13)
  { slug: "se-almacenes", servicioSlug: "sercotec", nombre: "Almacenes de Chile", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 1786092 },
  { slug: "se-asociaciones", servicioSlug: "sercotec", nombre: "Fortalecimiento de Asociaciones Gremiales", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 1605563 },
  { slug: "se-emprendedores", servicioSlug: "sercotec", nombre: "Programa Emprendedores", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 9473368 },
  { slug: "se-territorios", servicioSlug: "sercotec", nombre: "Programa de Desarrollo Empresarial en los Territorios", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 19787285 },
  { slug: "se-crece", servicioSlug: "sercotec", nombre: "CRECE", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 10188068 },
  { slug: "se-capacitacion", servicioSlug: "sercotec", nombre: "Capacitacion y Formacion Empresarial", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 1077441 },
  { slug: "se-ferias", servicioSlug: "sercotec", nombre: "Ferias Libres", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 2865337 },
  { slug: "se-barrios", servicioSlug: "sercotec", nombre: "Fortalecimiento de Barrios Comerciales", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 2559072 },
  { slug: "se-cooperativas", servicioSlug: "sercotec", nombre: "Fortalecimiento y Creacion de Empresas Sociales y Cooperativas", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 1460326 },
  { slug: "se-mejora-negocios", servicioSlug: "sercotec", nombre: "Mejora Negocios, fondo de asesorias empresariales", recomendacion: "descontinuar", montoEjecutado2025MilesCLP: 591119 },
  { slug: "se-canales-comercializacion", servicioSlug: "sercotec", nombre: "Promocion y Canales de Comercializacion", recomendacion: "descontinuar", montoEjecutado2025MilesCLP: 624633 },
  { slug: "se-oportunidades", servicioSlug: "sercotec", nombre: "Redes de Oportunidades de Negocios", recomendacion: "descontinuar", montoEjecutado2025MilesCLP: 56142 },
  { slug: "se-virtuales", servicioSlug: "sercotec", nombre: "Servicios Virtuales", recomendacion: "descontinuar", montoEjecutado2025MilesCLP: 580261 },

  // Subsecretaria de Economia (3)
  { slug: "sub-pyme-agil", servicioSlug: "subsec-economia", nombre: "Pyme Agil (Ex Escritorio Empresa)", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 211277 },
  { slug: "sub-digitaliza", servicioSlug: "subsec-economia", nombre: "Digitaliza tu Pyme (Ex Pymes Digitales)", recomendacion: "descontinuar", montoEjecutado2025MilesCLP: 34053 },
  { slug: "sub-observatorio", servicioSlug: "subsec-economia", nombre: "Observatorio de Datos Economicos", recomendacion: "descontinuar", montoEjecutado2025MilesCLP: 433607 },

  // Subsecretaria de Turismo (1)
  { slug: "stu-sustentable", servicioSlug: "subsec-turismo", nombre: "Desarrollo Turistico Sustentable", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 1097531 },
];
