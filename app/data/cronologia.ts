import type { EventoCronologia } from "./types";

/**
 * Cronologia editorial de los primeros 45 dias del gobierno de Kast.
 * Mezcla decisiones, escandalos, retractaciones, anuncios y datos de
 * encuestas. Es la columna vertebral de la pagina /cronologia.
 */
export const CRONOLOGIA: EventoCronologia[] = [
  {
    slug: "2026-05-01-rau-recortes-reducciones-personal",
    fecha: "2026-05-01",
    titulo: "Rau avala ajuste fiscal y no descarta reducciones de personal público",
    resumen:
      "En pleno Día del Trabajador, el ministro del Trabajo defendió los recortes a ministerios y evitó descartar reducciones de personal. El Gobierno cifra la emergencia laboral en 8,9% de desempleo, 925 mil personas sin trabajo y más de 23% de desempleo juvenil.",
    tipo: "decision",
    etiqueta: "feo",
    decisionSlug: "trabajo-ajuste-fiscal-reducciones-personal",
    fuenteUrl: "https://www.emol.com/noticias/Nacional/2026/05/01/1198824/ajuste-fiscal-ministro-trabajo-ministerios.html",
    fuenteMedio: "Emol",
  },
  {
    slug: "2026-05-01-kast-emergencia-laboral-cut",
    fecha: "2026-05-01",
    titulo: "Kast instala emergencia laboral y llama a aislar violentistas en marcha CUT",
    resumen:
      "Desde la ACHS, Kast dijo que 900 mil personas no pueden celebrar un empleo formal y que 2,5 millones viven de la informalidad. La frase llegó mientras la CUT marchaba por salario vital y contra recortes.",
    tipo: "anuncio",
    etiqueta: "malo",
    decisionSlug: "trabajo-ajuste-fiscal-reducciones-personal",
    fuenteUrl:
      "https://www.t13.cl/noticia/nacional/pdte-kast-llama-aislar-violentistas-marcha-cut-por-dia-del-trabajador-1-5-2026",
    fuenteMedio: "T13",
  },
  {
    slug: "2026-05-01-energia-descarta-caducar-enel",
    fecha: "2026-05-01",
    titulo: "Energía descarta caducar concesión de Enel por megacortes de 2024",
    resumen:
      "El Ministerio de Energía cerró el proceso administrativo iniciado por los apagones de agosto de 2024. Citó un informe SEC sobre desempeño 2019-2025 y sostuvo que no hay causal para quitar la concesión en la RM.",
    tipo: "decision",
    etiqueta: "malo",
    decisionSlug: "energia-enel-no-caduca-megacortes-2024",
    fuenteUrl:
      "https://www.t13.cl/noticia/nacional/gobierno-no-revocara-concesion-enel-pese-megacortes-2024-ha-mantenido-sus-estan-1-5-2026",
    fuenteMedio: "T13",
  },
  {
    slug: "2026-05-01-patron-mepco-oficio-ajuste-comunicacional",
    fecha: "2026-05-01",
    titulo: "El País identifica patrón Mepco/oficio: decisión técnica y ajuste comunicacional",
    resumen:
      "La columna de Rodrigo Pérez de Arce describe dos episodios con la misma secuencia: Mepco y oficio de recortes avanzan con lógica técnica, subestiman efectos políticos y luego son presentados como problema comunicacional.",
    tipo: "escandalo",
    etiqueta: "malo",
    decisionSlug: "control-danos-recortes-alvarado-agenda",
    fuenteUrl: "https://elpais.com/chile/2026-05-01/como-dice-que-dijo.html",
    fuenteMedio: "El País Chile",
  },
  {
    slug: "2026-05-01-cut-marcha-nacional-recortes-salario",
    fecha: "2026-05-01",
    titulo: "CUT convoca más de 50 actos en 1 de mayo contra recortes y por salario vital",
    resumen:
      "La CUT llamó a movilizaciones desde Arica a Punta Arenas, con acto central de La Moneda al GAM. La jornada queda cruzada por la falta de acuerdo en salario mínimo, la megarreforma y el rechazo a recortes sociales.",
    tipo: "escandalo",
    etiqueta: "malo",
    decisionSlug: "salario-minimo-562000-sin-acuerdo-cut",
    fuenteUrl:
      "https://www.cooperativa.cl/noticias/economia/impuestos/cut-no-hay-ninguna-garantia-de-que-bajar-los-impuestos-a-las-grandes/2026-04-30/085404.html",
    fuenteMedio: "Cooperativa",
  },
  {
    slug: "2026-04-30-cadem-desaprobacion-57-expectativas-caen",
    fecha: "2026-04-30",
    titulo: "Cadem: desaprobación llega a 57% y se desploman expectativas clave",
    resumen:
      "La aprobación queda en 40% y la desaprobación sube a 57%. Las expectativas de controlar inmigración caen a 41%, crecimiento económico a 33% y reducir delincuencia a 33%; 59% rechaza revisar o eliminar 142 programas.",
    tipo: "encuesta",
    etiqueta: "feo",
    fuenteUrl:
      "https://www.biobiochile.cl/noticias/nacional/chile/2026/04/30/cadem-desaprobacion-de-kast-sube-a-57-y-caen-expectativas-en-economia-seguridad-e-inmigracion.shtml",
    fuenteMedio: "BioBioChile / Cadem",
  },
  {
    slug: "2026-04-30-kast-descarta-cambio-gabinete",
    fecha: "2026-04-30",
    titulo: "Kast descarta cambio de gabinete pese a polémicas de Quiroz, Poduje, Sedini y Steinert",
    resumen:
      "T13 recogió que Kast dijo estar tranquilo, defendió a su equipo y afirmó que no cambiará el gabinete. La señal blinda a ministros cuestionados mientras Interior intenta ordenar el costo político de los recortes.",
    tipo: "anuncio",
    etiqueta: "malo",
    decisionSlug: "control-danos-recortes-alvarado-agenda",
    fuenteUrl:
      "https://www.t13.cl/noticia/politica/kast-descarta-cambio-gabinete-asegura-tiene-gran-equipo-ministros-les-agradezco-30-4-2026",
    fuenteMedio: "T13",
  },
  {
    slug: "2026-04-29-salario-minimo-sin-acuerdo-cut",
    fecha: "2026-04-29",
    titulo: "Salario mínimo: Gobierno ofrece $562 mil y no logra acuerdo con la CUT",
    resumen:
      "La CUT pidió $647.000 para avanzar hacia salario vital. El Ejecutivo ofreció $562.000, $23.000 más que el mínimo vigente, y enviará su propio proyecto al Congreso.",
    tipo: "decision",
    etiqueta: "malo",
    decisionSlug: "salario-minimo-562000-sin-acuerdo-cut",
    fuenteUrl:
      "https://eldesconcierto.cl/actualidad/gobierno-kast-solo-propuso-alza-23000-cut-no-alcanza-acuerdo-sueldo-minimo-previa-del-1-mayo-n5458438",
    fuenteMedio: "El Desconcierto",
  },
  {
    slug: "2026-04-30-alvarado-beneficio-social-recortes",
    fecha: "2026-04-30",
    titulo: "Alvarado desafía a probar una persona sin beneficio social",
    resumen:
      "El ministro del Interior dijo que el oficio no ordena descontinuar programas y emplazó: “Demuéstrenme a qué persona se le ha quitado un beneficio social”. La defensa desplaza el foco desde recortes programáticos ya firmados hacia una pérdida individual ya consumada.",
    tipo: "ataque",
    etiqueta: "malo",
    mentiraSlug: "alvarado-demuestren-beneficio-social",
    fuenteUrl:
      "https://www.lanacion.cl/ministro-alvarado-tras-controversia-por-recortes-demuestrenme-a-que-persona-se-le-ha-quitado-un-beneficio-social/",
    fuenteMedio: "La Nación",
  },
  {
    slug: "2026-04-30-marcel-caos-tributario-megareforma",
    fecha: "2026-04-30",
    titulo: "Marcel critica la megarreforma: caos tributario y achicar el Estado",
    resumen:
      "La Tercera recogió la crítica del exministro Mario Marcel: la invariabilidad tributaria de 25 años para grandes inversiones puede generar caos en el sistema y el debate fiscal omite ingresos, por lo que apunta a achicar el Estado.",
    tipo: "escandalo",
    etiqueta: "malo",
    decisionSlug: "megareforma-reconstruccion",
    fuenteUrl:
      "https://www.latercera.com/pulso/noticia/la-critica-mirada-de-mario-marcel-a-la-megarreforma-del-gobierno/",
    fuenteMedio: "La Tercera",
  },
  {
    slug: "2026-04-30-steinert-querella-nunez",
    fecha: "2026-04-30",
    titulo: "Steinert anuncia querella contra Daniel Núñez por dichos sobre vínculo familiar",
    resumen:
      "La ministra de Seguridad anunció una querella criminal contra el senador Daniel Núñez por imputación injuriosa, luego de que el parlamentario cuestionara su vínculo familiar con un abogado que defendió a un narcotraficante.",
    tipo: "escandalo",
    etiqueta: "malo",
    fuenteUrl:
      "https://www.biobiochile.cl/noticias/nacional/chile/2026/04/30/steinert-anuncia-querella-contra-nunez-pc-tras-dichos-por-su-vinculo-familiar-con-abogado-narco.shtml",
    fuenteMedio: "BioBioChile",
  },
  {
    slug: "2026-04-30-justicia-recorte-ddhh-92",
    fecha: "2026-04-30",
    titulo: "Contraloría toma razón de recorte en Justicia; DD.HH. cae 9,2%",
    resumen:
      "La Tercera reportó que el decreto recorta cerca de $46 mil millones en Justicia. La Subsecretaría de DD.HH. pierde $870 millones, 9,2% de su presupuesto, con bajas en Sitios de Memoria y Programa de DD.HH.",
    tipo: "decision",
    etiqueta: "feo",
    decisionSlug: "justicia-recorte-46000-millones-ddhh-sitios-memoria",
    fuenteUrl:
      "https://www.latercera.com/nacional/noticia/gobierno-concreta-recorte-del-presupuesto-de-justicia-con-fuerte-reduccion-del-9-en-la-subsecretaria-de-ddhh/",
    fuenteMedio: "La Tercera",
  },
  {
    slug: "2026-04-30-poduje-desautoriza-quiroz-vivienda",
    fecha: "2026-04-30",
    titulo: "Poduje rechaza recortes de Quiroz y firma continuidad de Pavimentos Participativos",
    resumen:
      "El ministro de Vivienda dijo que Quiroz es “un ministro más”, descartó cortar Pavimentos Participativos y Mejoramiento de Condominios Sociales, y firmó proyectos para las 16 regiones pese a la recomendación de Hacienda.",
    tipo: "escandalo",
    etiqueta: "feo",
    decisionSlug: "poduje-desautoriza-quiroz-recortes-vivienda",
    fuenteUrl:
      "https://www.elmostrador.cl/noticias/pais/2026/04/30/poduje-se-distancia-de-quiroz-se-opone-a-recortes-y-advierte-que-tiene-un-solo-jefe-y-es-kast/",
    fuenteMedio: "El Mostrador",
  },
  {
    slug: "2026-04-30-mapa-402-programas-hacienda",
    fecha: "2026-04-30",
    titulo: "La Tercera cifra en 402 los programas bajo lupa de Hacienda",
    resumen:
      "El mapa nacional muestra 260 recomendaciones de rebaja y 142 cierres o reformulaciones. Educación, Desarrollo Social y Salud concentran 150 programas, el 37,3% del total. BioBioChile agregó que la PGU tendría la mayor disminución proyectada: $906 mil millones.",
    tipo: "decision",
    etiqueta: "feo",
    decisionSlug: "mapa-402-programas-educacion-desarrollo-salud",
    fuenteUrl:
      "https://www.latercera.com/nacional/noticia/educacion-desarrollo-social-y-salud-tienen-el-37-de-los-402-programas-que-quiroz-sugiere-ajustar-o-descontinuar/",
    fuenteMedio: "La Tercera",
  },
  {
    slug: "2026-04-29-pgu-te-amo-pgu-rebaja",
    fecha: "2026-04-29",
    titulo: "La PGU aparece como el mayor programa bajo rebaja pese al “Te amo PGU”",
    resumen:
      "CIPER reportó que Hacienda recomendó rebajar al menos 15% la PGU. Es el programa de mayor presupuesto entre las 260 rebajas; BioBioChile luego informó una disminución proyectada de $906 mil millones.",
    tipo: "decision",
    etiqueta: "feo",
    decisionSlug: "pgu-te-amo-pgu-rebaja-444425-millones",
    fuenteUrl:
      "https://www.ciperchile.cl/2026/04/28/hacienda-recomendo-recortar-al-menos-15-de-la-pension-garantizada-universal-gratuidad-bono-invierno-y-asignacion-familiar/",
    fuenteMedio: "CIPER",
  },
  {
    slug: "2026-04-29-enap-70-utilidades-hacienda",
    fecha: "2026-04-29",
    titulo: "Hacienda pide 70% de utilidades de ENAP y revisará inversiones",
    resumen:
      "La Tercera reportó que Quiroz solicitó distribuir 70% de las utilidades de ENAP al gobierno central y puso una nota de cautela sobre el plan de inversiones por US$3.800 millones.",
    tipo: "decision",
    etiqueta: "malo",
    decisionSlug: "enap-utilidades-70-inversiones-hacienda",
    fuenteUrl:
      "https://www.latercera.com/pulso/noticia/hacienda-pide-a-enap-distribuir-el-70-de-sus-utilidades-al-gobierno-central/",
    fuenteMedio: "La Tercera",
  },
  {
    slug: "2026-04-29-ine-desempleo-89-informalidad",
    fecha: "2026-04-29",
    titulo: "INE: desocupación llega a 8,9% e informalidad sube a 26,5%",
    resumen:
      "El boletín enero-marzo de 2026 dejó la tasa nacional de desocupación en 8,9%. La ocupación subió apenas 0,5% en doce meses y el aumento se explicó por asalariados informales y cuenta propia; la informalidad llegó a 26,5%.",
    tipo: "anuncio",
    etiqueta: "info",
    fuenteUrl:
      "https://www.ine.gob.cl/sala-de-prensa/prensa/general/noticia/2026/04/29/la-tasa-de-desocupaci%C3%B3n-nacional-fue-8-9-en-el-trimestre-enero-marzo-de-2026",
    fuenteMedio: "INE",
  },
  {
    slug: "2026-04-29-circulares-convivencia-inclusion-derogadas",
    fecha: "2026-04-29",
    titulo: "Mineduc deroga tres circulares de convivencia, inclusión y reglamentos",
    resumen:
      "La Superintendencia de Educación dejó sin efecto las circulares 781, 782 y 202 del gobierno de Boric. Regulaban convivencia escolar, medidas formativas, reglamentos internos, educación parvularia, identidad de género, discriminación e inclusión.",
    tipo: "decision",
    etiqueta: "malo",
    decisionSlug: "educacion-deroga-circulares-convivencia-inclusion",
    fuenteUrl: "https://www.emol.com/noticias/Nacional/2026/04/28/1198557/supereduc-deroga-tres-circulares.html",
    fuenteMedio: "Emol",
  },
  {
    slug: "2026-04-29-injuv-recorte-47-reemplazo",
    fecha: "2026-04-29",
    titulo: "INJUV pierde 47% del presupuesto y funcionarios van a Contraloría",
    resumen:
      "La Tercera reportó que Hacienda recortó $3.859 millones al INJUV, 47% de su presupuesto disponible, mientras Desarrollo Social estudia crear un organismo reemplazante. Funcionarios pidieron a Contraloría revisar la legalidad del decreto.",
    tipo: "decision",
    etiqueta: "feo",
    decisionSlug: "injuv-recorte-47-reemplazo-contraloria",
    fuenteUrl:
      "https://www.latercera.com/nacional/noticia/gobierno-estudia-crear-nuevo-organismo-en-reemplazo-del-injuv-mientras-funcionarios-recurren-a-contraloria-por-recortes/",
    fuenteMedio: "La Tercera",
  },
  {
    slug: "2026-04-29-ddhh-cidh-desmantelamiento",
    fecha: "2026-04-29",
    titulo: "82 organizaciones piden a la CIDH información por desmantelamiento en DD.HH.",
    resumen:
      "Organizaciones de derechos humanos y sitios de memoria solicitaron a la CIDH requerir información al Estado por recortes, debilitamiento de políticas de memoria, PRAIS, Programa de DD.HH. e indultos pasivos.",
    tipo: "escandalo",
    etiqueta: "feo",
    decisionSlug: "ddhh-cidh-desmantelamiento-memoria-reparacion",
    fuenteUrl:
      "https://www.latercera.com/nacional/noticia/organizaciones-de-ddhh-solicitan-a-comision-interamericana-pedir-informacion-al-estado-de-chile-por-desmantelamiento/",
    fuenteMedio: "La Tercera",
  },
  {
    slug: "2026-04-29-latercera-detalla-260-rebajas",
    fecha: "2026-04-29",
    titulo: "La Tercera detalla 260 rebajas: Liceos Bicentenario, PGU, Mejor Niñez, MIM y listas de espera",
    resumen:
      "El nuevo detalle muestra 22 ministerios con ajustes. Educación lidera con 42 programas; Desarrollo Social tiene 34; Trabajo 26; Cultura 24; Economía y Salud 21 cada uno. La lista incluye Liceos Bicentenario, Chile Te Cuida, PGU, MIM, GAM y listas de espera.",
    tipo: "decision",
    etiqueta: "feo",
    decisionSlug: "ciper-rebaja-260-beneficios-sociales",
    fuenteUrl:
      "https://www.latercera.com/nacional/noticia/de-liceos-bicentenario-al-mim-quiroz-tambien-sugirio-recortar-al-menos-un-15-del-presupuesto-de-otros-260-programas/",
    fuenteMedio: "La Tercera",
  },
  {
    slug: "2026-04-29-fontaine-defiende-menos-recursos-fiscales",
    fecha: "2026-04-29",
    titulo: "Fontaine defiende que la megareforma genere menos recursos fiscales",
    resumen:
      "El País reportó que Bernardo Fontaine, cercano a Kast y descrito como su hombre para Codelco, dijo ver positivo que la megareforma genere menos recursos fiscales porque solo cuando al Estado le falte plata sería practicable bajar el gasto.",
    tipo: "escandalo",
    etiqueta: "feo",
    decisionSlug: "megareforma-reconstruccion",
    fuenteUrl:
      "https://elpais.com/chile/2026-04-29/bernardo-fontaine-el-hombre-de-kast-para-codelco-al-que-le-despreocupan-los-menores-recursos-fiscales.html",
    fuenteMedio: "El País Chile",
  },
  {
    slug: "2026-04-29-quiroz-palabras-no-perfectas-descontinuar",
    fecha: "2026-04-29",
    titulo: "Quiroz atribuye “descontinuar” a palabras internas no perfectas",
    resumen:
      "El País reportó que Quiroz explicó la filtración del oficio diciendo que, al ser una comunicación interna, usaba palabras no perfectas, y que quitar continuidad debía entenderse como reformulación. El flanco sigue: el oficio decía descontinuar.",
    tipo: "retractacion",
    etiqueta: "malo",
    retractacionSlug: "dipres-descontinuar-reformular",
    fuenteUrl:
      "https://elpais.com/chile/2026-04-28/la-carta-de-una-pareja-el-ejemplo-de-quiroz-para-explicar-la-filtracion-del-oficio-que-sugiere-cortar-programas-publicos-como-la-alimentacion-escolar.html",
    fuenteMedio: "El País Chile",
  },
  {
    slug: "2026-04-28-kast-poduje-humedales",
    fecha: "2026-04-28",
    titulo: "Kast blinda a Poduje y abre ofensiva contra Ley de Humedales",
    resumen:
      "La Tercera reportó que Kast respaldó a Poduje tras sus críticas a la Ley de Humedales. Expertos advierten que flexibilizar sin criterio técnico puede repetir errores de viviendas en zonas inundables y generar costos fiscales.",
    tipo: "decision",
    etiqueta: "malo",
    decisionSlug: "poduje-kast-humedales-vivienda-riesgo",
    fuenteUrl:
      "https://www.latercera.com/nacional/noticia/poduje-contra-todos-ofensiva-por-ley-de-humedales-tensiona-al-oficialismo-y-reabre-debate-por-viviendas-en-valdivia/",
    fuenteMedio: "La Tercera",
  },
  {
    slug: "2026-04-28-quiroz-firma-recorte-desarrollo-social",
    fecha: "2026-04-28",
    titulo: "Quiroz firma recorte vigente de $32.721 millones en Desarrollo Social",
    resumen:
      "BioBioChile reportó una circular firmada por Quiroz que rebaja el presupuesto vigente de Desarrollo Social: ex Sename/Mejor Niñez, CONADI, INJUV, Chile Crece Contigo, Senadis, Senama y ajuar para recién nacidos quedan afectados.",
    tipo: "decision",
    etiqueta: "feo",
    decisionSlug: "desarrollo-social-recorte-32721-millones-quiroz",
    fuenteUrl:
      "https://www.biobiochile.cl/noticias/nacional/chile/2026/04/28/ajuar-para-recien-nacidos-lidera-los-recortes-en-desarrollo-social-quiroz-firmo-circular.shtml",
    fuenteMedio: "BioBioChile",
  },
  {
    slug: "2026-04-28-ciper-260-rebajas-beneficios-sociales",
    fecha: "2026-04-28",
    titulo: "CIPER revela 260 rebajas: PGU, gratuidad, Bono Invierno, SUF y transporte",
    resumen:
      "CIPER reportó que Hacienda recomendó rebajar al menos 15% otros 260 planes sociales, por $2,8 billones. La lista incluye PGU, gratuidad, Bono Invierno, SUF, CAE, pensiones, jardines infantiles y subsidios de vivienda.",
    tipo: "decision",
    etiqueta: "feo",
    decisionSlug: "ciper-rebaja-260-beneficios-sociales",
    fuenteUrl:
      "https://www.ciperchile.cl/2026/04/28/hacienda-recomendo-recortar-al-menos-15-de-la-pension-garantizada-universal-gratuidad-bono-invierno-y-asignacion-familiar/",
    fuenteMedio: "CIPER",
  },
  {
    slug: "2026-04-28-theclinic-comision-boric-no-pae",
    fecha: "2026-04-28",
    titulo: "The Clinic refuta defensa de Quiroz: la comisión de Boric no recortaba el PAE",
    resumen:
      "Quiroz invocó la comisión asesora de gasto del gobierno anterior para explicar el oficio. The Clinic revisó el informe y consignó que el PAE era excepción: no consideraba recorte porque no había oferta alternativa para esa política pública.",
    tipo: "retractacion",
    etiqueta: "malo",
    mentiraSlug: "quiroz-comision-boric-justifica-pae",
    fuenteUrl:
      "https://www.theclinic.cl/2026/04/28/comision-de-boric-mencionada-por-quiroz-para-explicar-el-oficio-de-hacienda-propuso-descontinuar-gastos-pero-no-los-de-alimentacion-escolar/",
    fuenteMedio: "The Clinic",
  },
  {
    slug: "2026-04-28-gam-ampliacion-paralizada",
    fecha: "2026-04-28",
    titulo: "Gobierno frena ampliación del GAM y abre frente cultural",
    resumen:
      "El País reportó que el MOP paralizó la segunda etapa del GAM por falta de presupuesto. La obra tenía 45% de avance heredado; Claudio Orrego estimó cerca de $6.000 millones en compensaciones si se termina el contrato.",
    tipo: "decision",
    etiqueta: "malo",
    decisionSlug: "gam-ampliacion-paralizada-frente-cultural",
    fuenteUrl:
      "https://elpais.com/chile/2026-04-28/el-freno-a-la-ampliacion-del-centro-cultural-gam-le-abre-al-gobierno-de-kast-un-frente-politico-y-cultural.html",
    fuenteMedio: "El País Chile",
  },
  {
    slug: "2026-04-28-megareforma-baja-recaudacion",
    fecha: "2026-04-28",
    titulo: "Megareforma baja recaudación mientras Hacienda exige recortes",
    resumen:
      "El País consignó que Dipres advierte menor recaudación por la rebaja de impuesto a empresas y el crédito tributario al empleo. Jorge Rodríguez Cabello estimó cerca de US$2.000 millones adicionales por financiar.",
    tipo: "escandalo",
    etiqueta: "feo",
    decisionSlug: "megareforma-reconstruccion",
    fuenteUrl:
      "https://elpais.com/chile/2026-04-28/kast-busca-contener-el-gasto-publico-mientras-impulsa-una-megarreforma-que-bajara-la-recaudacion-fiscal.html",
    fuenteMedio: "El País Chile",
  },
  {
    slug: "2026-04-25-kast-se-quedaron-plata-menores",
    fecha: "2026-04-25",
    titulo: "Kast acusa sin prueba equivalente: “Ustedes se quedaron con la plata”",
    resumen:
      "Ante críticas por recortes a programas para menores, Kast acusó al gobierno anterior de quedarse con la plata. La frase queda como mentira/ataque: el flanco verificable era el oficio de Hacienda que recomendó descontinuar PAE y salud escolar.",
    tipo: "ataque",
    etiqueta: "malo",
    mentiraSlug: "kast-ustedes-se-quedaron-con-la-plata-menores",
    fuenteUrl:
      "https://www.biobiochile.cl/noticias/nacional/chile/2026/04/25/kast-y-criticas-por-posibles-recortes-en-beneficios-para-menores-ustedes-se-quedaron-con-la-plata.shtml",
    fuenteMedio: "BioBioChile",
  },
  {
    slug: "2026-04-24-kast-recortes-boric-vs-recortes-propios",
    fecha: "2026-04-24",
    titulo: "La vara vuelve: Kast criticaba recortes exploratorios y ahora pide leer los suyos con cautela",
    resumen:
      "En 2025 Kast rechazó eventuales recortes de Boric en seguridad y temas sociales. En 2026 su Hacienda distribuyó anexos con programas a descontinuar o rebajar, y el Gobierno pidió leerlos como orientación técnica.",
    tipo: "escandalo",
    etiqueta: "malo",
    fuenteUrl:
      "https://www.latercera.com/politica/noticia/presupuesto-2026-se-toma-la-presidencial-jara-y-kast-cuestionan-eventuales-recortes-del-gobierno/",
    fuenteMedio: "La Tercera",
  },
  {
    slug: "2026-04-11-auditoria-alertas-no-irregularidades",
    fecha: "2026-04-11",
    titulo: "Auditoría interna baja el tono: “alertas” no son irregularidades",
    resumen:
      "El gobierno que prometió auditoría externa completa presentó hallazgos internos sobre Boric como alertas de riesgo, aclarando que no significan irregularidades en sí mismas. La cautela llegó cuando el informe era propio.",
    tipo: "retractacion",
    etiqueta: "feo",
    fuenteUrl:
      "https://www.emol.com/noticias/Nacional/2026/04/11/1196926/alertas-gobierno-auditoria-fisco-boric.html",
    fuenteMedio: "Emol",
  },
  {
    slug: "2026-04-27-culturas-recorte-contraloria",
    fecha: "2026-04-27",
    titulo: "Hacienda concreta recorte a Culturas por $51.750 millones",
    resumen:
      "The Clinic reportó que Hacienda ingresó a Contraloría modificaciones presupuestarias para Culturas por casi 10% del presupuesto aprobado. Tres programas quedan sin recursos: Infraestructura Cultural, Somos Barrio y Artistas del Acero.",
    tipo: "decision",
    etiqueta: "malo",
    decisionSlug: "culturas-recorte-efectivo-51750-millones",
    fuenteUrl:
      "https://www.theclinic.cl/2026/04/27/hacienda-concreta-recorte-a-ministerio-de-las-culturas-por-51-750-millones-tres-programas-quedan-sin-recursos-tras-ajuste-presupuestario/",
    fuenteMedio: "The Clinic",
  },
  {
    slug: "2026-04-27-oficialismo-error-comunicacional-oficio",
    fecha: "2026-04-27",
    titulo: "Oficialismo admite flanco del oficio: la palabra era “descontinuar”",
    resumen:
      "Emol recogió críticas desde el propio oficialismo: el problema no fue solo rumor opositor. Ximena Ossandón remarcó que la palabra era descontinuar, independiente de que fuera orientación.",
    tipo: "escandalo",
    etiqueta: "malo",
    fuenteUrl:
      "https://www.emol.com/noticias/Nacional/2026/04/27/1198389/oficialismo-error-oficio-descontinuar.html",
    fuenteMedio: "Emol",
  },
  {
    slug: "2026-04-27-dipres-descontinuar-reformular",
    fecha: "2026-04-27",
    titulo: "DIPRES intenta cambiar “descontinuar” por “reformular”",
    resumen:
      "José Ignacio Llodrá, subdirector de DIPRES, dijo que quizás la palabra descontinuar era más bien reformular. La explicación agrava la crisis: si era reformulación, el oficio debió decir reformulación desde el inicio.",
    tipo: "retractacion",
    etiqueta: "malo",
    retractacionSlug: "dipres-descontinuar-reformular",
    fuenteUrl:
      "https://www.biobiochile.cl/noticias/economia/actualidad-economica/2026/04/27/dipres-aclara-polemico-oficio-sobre-programas-quizas-la-palabra-descontinuar-es-mas-bien-reformular.shtml",
    fuenteMedio: "BioBioChile",
  },
  {
    slug: "2026-04-27-kast-defiende-recortes-tono-campana",
    fecha: "2026-04-27",
    titulo: "Kast defiende los recortes atacando a Boric: “no hay ninguna cifra” buena",
    resumen:
      "En medio de la crisis por el Oficio N°16, Kast volvió al tono de campaña, acusó al gobierno anterior de dejar el país destruido y dijo que Boric no tenía ninguna cifra buena. El dicho queda marcado como mentira por datos públicos.",
    tipo: "ataque",
    etiqueta: "malo",
    retractacionSlug: "kast-no-hay-ninguna-cifra-boric",
    fuenteUrl:
      "https://www.meganoticias.cl/nacional/520524-jose-antonio-kast-polemica-recortes-hacienda-programas-sociales-oposicion-27-04-2026.html",
    fuenteMedio: "Meganoticias",
  },
  {
    slug: "2026-04-27-controversia-142-programas",
    fecha: "2026-04-27",
    titulo: "La controversia por el ajuste escala a 142 programas estatales",
    resumen:
      "BioBioChile resume el alcance del Oficio N°16: ajuste permanente de hasta $5,4 billones para 2027, 142 programas afectados y flancos en Educación, Desarrollo Social, Justicia y Seguridad.",
    tipo: "decision",
    etiqueta: "malo",
    decisionSlug: "hacienda-recorta-mas-de-6-mil-millones-usd",
    fuenteUrl:
      "https://www.biobiochile.cl/biobiotv/programas/radiograma-biobiotv/2026/04/27/la-fuerte-controversia-por-ajuste-fiscal-que-podria-afectar-a-142-programas-estatales.shtml",
    fuenteMedio: "BioBioChile",
  },
  {
    slug: "2026-04-25-quiroz-defiende-oficio-recortes",
    fecha: "2026-04-25",
    titulo: "Quiroz defiende el oficio: “no hay decisión”, pero la lista ya existe",
    resumen:
      "El ministro de Hacienda intentó separar oficio de decisión final. La contradicción queda registrada: los anexos sí recomiendan 142 cierres y 260 rebajas, con programas sociales y de seguridad incluidos.",
    tipo: "retractacion",
    etiqueta: "malo",
    retractacionSlug: "quiroz-no-decision-descontinuar-programas",
    fuenteUrl:
      "https://www.emol.com/noticias/Economia/2026/04/25/1198242/oficios-hacienda-recorte-presupuesto.html",
    fuenteMedio: "Emol",
  },
  {
    slug: "2026-04-24-seguridad-intocable-entra-recortes",
    fecha: "2026-04-24",
    titulo: "La seguridad “intocable” entra al recorte: PNCO y Calles Sin Violencia",
    resumen:
      "La promesa de no rebajar Seguridad queda tensionada por el anexo de Hacienda, que recomienda cerrar Crimen Organizado, Calles Sin Violencia e Innovación Territorial y rebajar cinco programas más.",
    tipo: "decision",
    etiqueta: "malo",
    retractacionSlug: "steinert-no-rebaja-seguridad-pnco-calles",
    decisionSlug: "seguridad-pnco-calles-sin-violencia-descontinuar",
    fuenteUrl:
      "https://www.theclinic.cl/2026/04/24/descontinuar-el-programa-contra-el-crimen-organizado-y-calles-sin-violencia-las-recomendaciones-de-hacienda-a-seguridad/",
    fuenteMedio: "The Clinic",
  },
  {
    slug: "2026-04-23-arista-patrimonial-megareforma",
    fecha: "2026-04-23",
    titulo: "Arista patrimonial: gabinete podría beneficiarse con la megareforma",
    resumen:
      "El Mostrador publica minuta de Nodo XXI que estima $292.515 millones de beneficio potencial para 63 autoridades. El caso golpea el discurso de austeridad y obliga a mirar conflictos de interés.",
    tipo: "escandalo",
    etiqueta: "malo",
    retractacionSlug: "quiroz-no-rebaja-ricos-gabinete",
    fuenteUrl:
      "https://www.elmostrador.cl/noticias/pais/2026/04/23/la-arista-patrimonial-de-ley-miscelanea-gabinete-tendria-beneficio-potencial-de-292-mil-millones/",
    fuenteMedio: "El Mostrador",
  },
  {
    slug: "2026-04-24-ciencia-cultura-medioambiente-recortes",
    fecha: "2026-04-24",
    titulo: "Barrido amplía recortes: Ciencia, Culturas, CNTV, Vivienda, Transportes y Medio Ambiente",
    resumen:
      "Nuevas notas detallan becas ANID/Milenio/PIA, Fondo CNTV, Bibliomas, transporte regional, programas Minvu y cinco herramientas ambientales con recomendación de cierre.",
    tipo: "decision",
    etiqueta: "malo",
    decisionSlug: "ciencia-becas-milenio-capital-humano",
    fuenteUrl:
      "https://www.elmostrador.cl/noticias/pais/2026/04/24/eliminacion-de-programas-en-ciencia-apunta-al-corazon-del-sistema-la-formacion-de-capital-humano/",
    fuenteMedio: "El Mostrador",
  },
  {
    slug: "2026-04-24-seguridad-pnco-calles-recortes",
    fecha: "2026-04-24",
    titulo: "Seguridad entra al ajuste: PNCO y Calles Sin Violencia marcados para cierre",
    resumen:
      "The Clinic revela el anexo de Seguridad: Hacienda recomienda descontinuar Crimen Organizado, Calles Sin Violencia e Innovación Territorial por $98.714 millones, y rebajar otros cinco programas.",
    tipo: "decision",
    etiqueta: "malo",
    decisionSlug: "seguridad-pnco-calles-sin-violencia-descontinuar",
    fuenteUrl:
      "https://www.theclinic.cl/2026/04/24/descontinuar-el-programa-contra-el-crimen-organizado-y-calles-sin-violencia-las-recomendaciones-de-hacienda-a-seguridad/",
    fuenteMedio: "The Clinic",
  },
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
    titulo: "Kast pide disculpas: “Cometí un error por desconocimiento”",
    resumen:
      "14 días después, ante el Consejo para la Transparencia, Kast reconoce el error del almuerzo y confirma que hubo financiamiento público parcial. Es el primer mea culpa público del gobierno.",
    tipo: "retractacion",
    etiqueta: "feo",
    retractacionSlug: "almuerzo-la-moneda-mea-culpa",
    fuenteUrl: "https://www.emol.com/noticias/Nacional/2026/04/24/1198152/mea-culpa-kast-almuerzo.html",
    fuenteMedio: "Emol",
  },
  {
    slug: "2026-04-24-quiroz-niega-recorte-alimentario",
    fecha: "2026-04-24",
    titulo: "Quiroz niega recorte alimentario y de becas tras oficio del PAE",
    resumen:
      "El ministro dice que no habrá recorte alimentario ni de becas, pero el oficio de Hacienda recomendó descontinuar el Programa de Alimentación Escolar y revisar programas educacionales sensibles.",
    tipo: "retractacion",
    etiqueta: "malo",
    retractacionSlug: "quiroz-no-recorte-alimentario-becas",
    fuenteUrl: "https://www.latercera.com/politica/noticia/ministro-quiroz-aclara-oficio-no-va-a-haber-ningun-tipo-de-recorte-alimentario-becas-para-nada-de-ninguno-por-supuesto-que-no/",
    fuenteMedio: "La Tercera",
  },
  {
    slug: "2026-04-25-kast-cataldo-pae",
    fecha: "2026-04-25",
    titulo: "Cataldo responde a Kast por alimentación escolar",
    resumen:
      "Kast acusa a la administración anterior por la alimentación escolar. Cataldo responde que el PAE entrega comida diaria a más de 2,5 millones de estudiantes y que la polémica nace por la recomendación de Hacienda de suprimirlo.",
    tipo: "retractacion",
    etiqueta: "malo",
    retractacionSlug: "kast-alimentos-ninos-pae-cataldo",
    fuenteUrl: "https://www.latercera.com/politica/noticia/exministro-cataldo-responde-a-kast-y-defiende-gestion-en-alimentacion-escolar/",
    fuenteMedio: "La Tercera",
  },
  {
    slug: "2026-04-25-quintana-ramos-policias",
    fecha: "2026-04-25",
    titulo: "Ramos desmiente a Quintana por acusación sobre policías",
    resumen:
      "La subsecretaria dice que el gobierno anterior dejó solas y desarmadas moralmente a las policías. Víctor Ramos califica la acusación de falsa y temeraria.",
    tipo: "retractacion",
    etiqueta: "malo",
    retractacionSlug: "quintana-policias-desarmadas-moralmente",
    fuenteUrl: "https://www.latercera.com/nacional/noticia/exsubsecretario-ramos-califica-de-falsa-y-temeraria-acusacion-de-quintana-sobre-falta-de-apoyo-a-las-policias-en-gobierno-anterior/",
    fuenteMedio: "La Tercera",
  },
  {
    slug: "2026-04-25-fenasenf-alerta-recortes",
    fecha: "2026-04-25",
    titulo: "Fenasenf advierte riesgo para tratamientos críticos por recortes",
    resumen:
      "La federación de enfermeras rechaza los ajustes de Hacienda y advierte impacto en prestaciones, cobertura, listas de espera, dotaciones y continuidad de tratamientos críticos.",
    tipo: "decision",
    etiqueta: "malo",
    decisionSlug: "salud-24-programas-descontinuar",
    fuenteUrl: "https://www.latercera.com/nacional/noticia/una-senal-de-alerta-federacion-nacional-de-enfermeros-rechaza-propuesta-de-ajustes-presupuestarios-de-hacienda/",
    fuenteMedio: "La Tercera",
  },
  {
    slug: "2026-04-25-colegio-profesores-pae-beca-vocacion",
    fecha: "2026-04-25",
    titulo: "Colegio de Profesores acusa recorte al PAE y Beca Vocación",
    resumen:
      "Mario Aguilar critica el instructivo de Hacienda por Educación: PAE, Beca Vocación de Profesor y Fondo de Apoyo a la Educación Pública aparecen entre los programas recomendados para terminar.",
    tipo: "escandalo",
    etiqueta: "malo",
    decisionSlug: "educacion-pae-descontinuado",
    fuenteUrl: "https://www.theclinic.cl/2026/04/25/colegio-de-profesores-y-el-instructivo-de-hacienda-mientras-kast-invita-a-almorzar-a-sus-amigos-a-la-moneda-le-quiere-quitar-la-alimentacion-a-los-estudiantes/",
    fuenteMedio: "The Clinic",
  },
  {
    slug: "2026-04-24-bonos-beneficios-rebaja",
    fecha: "2026-04-24",
    titulo: "Hacienda pone bonos sociales en lista de rebaja",
    resumen:
      "The Clinic identifica beneficios bajo recomendación de ajuste: Bono Invierno, Bono al Trabajo de la Mujer, Bono Bodas de Oro, Bono por Hijo, Bono de Reconocimiento y el cierre del Bono de Graduación de Cuarto Medio.",
    tipo: "decision",
    etiqueta: "malo",
    decisionSlug: "trabajo-bono-invierno-rebajado",
    fuenteUrl: "https://www.theclinic.cl/2026/04/24/desde-bodas-de-oro-al-bono-por-hijo-los-beneficios-que-hacienda-recomendo-rebajar-o-descontinuar-en-medio-del-ajuste-fiscal/",
    fuenteMedio: "The Clinic",
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
