import type { ProgramaPublico } from "./types";

/**
 * Programas publicos del Ministerio de Desarrollo Social y Familia (MDSyF).
 * Fuente: Anexo Oficio Circular N°16 (Hacienda, 21-abr-2026).
 * Montos en miles de pesos 2026 (ejecutado 2025).
 *
 * Total: 105 programas en 9 servicios.
 *  - 21 con recomendacion DESCONTINUAR
 *  - 36 con recomendacion AJUSTE PRESUPUESTARIO (-15% minimo)
 *  - 48 SIN OBSERVACIONES
 */
export const PROGRAMAS_MDSYF: ProgramaPublico[] = [
  // ---------- CONADI (17) ----------
  { slug: "conadi-riego-drenaje", servicioSlug: "conadi", nombre: "Fondo de Tierras y Aguas Indigenas - Subsidio a la Construccion de Obras de Riego y Drenaje para Indigenas", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 20920445 },
  { slug: "conadi-lenguas", servicioSlug: "conadi", nombre: "Recuperacion y Revitalizacion de las Lenguas Indigenas", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 1121015 },
  { slug: "conadi-accion-territorial", servicioSlug: "conadi", nombre: "Programa de Accion Territorial - Ex Chile Indigena Fase II", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 8321667 },
  { slug: "conadi-saneamiento", servicioSlug: "conadi", nombre: "Fondo de Tierras y Aguas Indigenas - Saneamiento de la Propiedad Indigena para Certidumbre Juridica", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 3115643 },
  { slug: "conadi-turismo", servicioSlug: "conadi", nombre: "Turismo y Pueblos Indigenas", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 1233885 },
  { slug: "conadi-fomento-economia", servicioSlug: "conadi", nombre: "Fondo de Desarrollo Indigena - Fomento a la Economia Indigena", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 2624306 },
  { slug: "conadi-predios-transferidos", servicioSlug: "conadi", nombre: "Fondo de Desarrollo Indigena - Apoyo a Predios Adquiridos y Transferidos", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 2804147 },
  { slug: "conadi-derechos-agua", servicioSlug: "conadi", nombre: "Fondo de Tierras y Aguas Indigenas - Subsidio para la Adquisicion de Derechos de Agua por Indigenas", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 2094365 },
  { slug: "conadi-educacion-intercultural", servicioSlug: "conadi", nombre: "Educacion Intercultural e Indigena", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 1201470 },
  { slug: "conadi-fdi-preinversion", servicioSlug: "conadi", nombre: "Fondo de Desarrollo Indigena - Preinversion", recomendacion: "descontinuar", montoEjecutado2025MilesCLP: 20811 },
  { slug: "conadi-tierras-preinversion", servicioSlug: "conadi", nombre: "Fondo de Tierras y Aguas Indigenas - Preinversion", recomendacion: "descontinuar", montoEjecutado2025MilesCLP: 805532 },
  { slug: "conadi-formacion-personas", servicioSlug: "conadi", nombre: "Subsidio para la Formacion de Personas Indigenas", recomendacion: "descontinuar", montoEjecutado2025MilesCLP: 262386 },
  { slug: "conadi-tierras-articulo-20", servicioSlug: "conadi", nombre: "Fondo de Tierras y Aguas Indigenas - Subsidio para la Adquisicion de Tierras (Articulo 20, letras a y b)", recomendacion: "descontinuar", montoEjecutado2025MilesCLP: 67625157 },
  { slug: "conadi-kume-mognen", servicioSlug: "conadi", nombre: "Kume Mognen Pu Zomo - Calidad de Vida y Autocuidado", recomendacion: "descontinuar", montoEjecutado2025MilesCLP: 243683 },
  { slug: "conadi-patrimonio-cultural", servicioSlug: "conadi", nombre: "Manejo y Proteccion del Patrimonio Cultural Indigena", recomendacion: "descontinuar", montoEjecutado2025MilesCLP: 504147 },
  { slug: "conadi-gestion-social", servicioSlug: "conadi", nombre: "Fondo de Desarrollo Indigena - Gestion Social Indigena", recomendacion: "descontinuar", montoEjecutado2025MilesCLP: 2089260 },
  { slug: "conadi-difusion-culturas", servicioSlug: "conadi", nombre: "Difusion y Fomento de las Culturas Indigenas", recomendacion: "descontinuar", montoEjecutado2025MilesCLP: 920189 },

  // ---------- FOSIS (5) ----------
  { slug: "fosis-microcredito", servicioSlug: "fosis", nombre: "Acceso al Microcredito", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 1209806 },
  { slug: "fosis-comunidades-solidarias", servicioSlug: "fosis", nombre: "Comunidades Solidarias", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 1211249 },
  { slug: "fosis-habitabilidad", servicioSlug: "fosis", nombre: "Habitabilidad", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 18147651 },
  { slug: "fosis-yo-emprendo-semilla", servicioSlug: "fosis", nombre: "Yo Emprendo Semilla", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 23212252 },
  { slug: "fosis-innova", servicioSlug: "fosis", nombre: "Innova FOSIS", recomendacion: "descontinuar", montoEjecutado2025MilesCLP: 878955 },

  // ---------- INJUV (2) ----------
  { slug: "injuv-compromiso-joven", servicioSlug: "injuv", nombre: "Compromiso Joven", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 1817496 },
  { slug: "injuv-hablemos-de-todo", servicioSlug: "injuv", nombre: "Hablemos de Todo", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 1003622 },

  // ---------- Mejor Niñez (24) ----------
  { slug: "mn-aft", servicioSlug: "mejor-ninez", nombre: "Acompañamiento Familiar Territorial (AFT)", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 58566322 },
  { slug: "mn-rma", servicioSlug: "mejor-ninez", nombre: "Residencias de Proteccion para Madres Adolescentes (RMA)", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 3159867 },
  { slug: "mn-rlp", servicioSlug: "mejor-ninez", nombre: "Residencia de Proteccion para Primera Infancia (RLP)", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 18305326 },
  { slug: "mn-rft-aadd", servicioSlug: "mejor-ninez", nombre: "Residencia Familiar para Adolescencia Temprana de Administracion Directa (RFT AADD)", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 0 },
  { slug: "mn-rf", servicioSlug: "mejor-ninez", nombre: "Residencia Familiar de Administracion Directa (RF)", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 45044956 },
  { slug: "mn-pee", servicioSlug: "mejor-ninez", nombre: "Programas de Proteccion Especializada a Victimas de Explotacion Sexual Comercial Infantil y Adolescente (PEE)", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 4881641 },
  { slug: "mn-pec", servicioSlug: "mejor-ninez", nombre: "Programas Especializados con Niños Niñas y Adolescentes en Situacion de Calle (PEC)", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 907091 },
  { slug: "mn-prm", servicioSlug: "mejor-ninez", nombre: "Programa de Proteccion Especializada en Maltrato Grave y Abuso Sexual (PRM)", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 91645667 },
  { slug: "mn-pad", servicioSlug: "mejor-ninez", nombre: "Programa de Proteccion Ambulatoria para Niños Niñas y Adolescentes Vulnerados en sus Derechos con Discapacidad Grave (PAD)", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 753292 },
  { slug: "mn-pri", servicioSlug: "mejor-ninez", nombre: "Programa de Intervencion con Niños y Niñas institucionalizados y su preparacion para la integracion a familia alternativa (PRI)", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 0 },
  { slug: "mn-ppf", servicioSlug: "mejor-ninez", nombre: "Programa de Prevencion Focalizada para Niños, Niñas y Adolescentes Vulnerados en sus Derechos (PPF)", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 18942144 },
  { slug: "mn-pas", servicioSlug: "mejor-ninez", nombre: "Programa Especializado en Intervencion con Adolescentes con Conductas Abusivas de Caracter Sexual (PAS)", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 2450122 },
  { slug: "mn-fae-aadd", servicioSlug: "mejor-ninez", nombre: "Familia de Acogida de Administracion Directa (FAE AADD)", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 6078136 },
  { slug: "mn-cread", servicioSlug: "mejor-ninez", nombre: "Centros de Reparacion Especializada de Administracion Directa (CREAD)", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 5967339 },
  { slug: "mn-pie", servicioSlug: "mejor-ninez", nombre: "Programa de Intervencion Integral Especializada (PIE)", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 37691634 },
  { slug: "mn-rdd", servicioSlug: "mejor-ninez", nombre: "Residencias de Proteccion para Niños, Niñas en Situacion de Discapacidad (RDD)", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 5972429 },
  { slug: "mn-rpm", servicioSlug: "mejor-ninez", nombre: "Residencias de Proteccion para Mayores (RPM)", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 44664209 },
  { slug: "mn-adopcion", servicioSlug: "mejor-ninez", nombre: "Programa de Adopcion", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 3156103 },
  { slug: "mn-diagnostico-clinico", servicioSlug: "mejor-ninez", nombre: "Programa Diagnostico Clinico Especializado", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 19094924 },
  { slug: "mn-opd", servicioSlug: "mejor-ninez", nombre: "Oficinas de Proteccion de Derechos de la Infancia y Adolescencia (OPD)", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 5772092 },
  { slug: "mn-dam", servicioSlug: "mejor-ninez", nombre: "Proyecto de Diagnostico Ambulatorio (DAM)", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 6669034 },
  { slug: "mn-rva", servicioSlug: "mejor-ninez", nombre: "Residencia Familiar (RVA)", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 7750724 },
  { slug: "mn-fae-ca", servicioSlug: "mejor-ninez", nombre: "Familia de Acogida de colaborador acreditado (FAE CA)", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 52352860 },
  { slug: "mn-captacion-acogida", servicioSlug: "mejor-ninez", nombre: "Captacion de Familias de Acogida", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 2637888 },

  // ---------- SENADIS (11) ----------
  { slug: "senadis-acceso-justicia", servicioSlug: "senadis", nombre: "Acceso a la Justicia para las Personas en Situacion de Discapacidad", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 511744 },
  { slug: "senadis-ccr", servicioSlug: "senadis", nombre: "Apoyo a la Implementacion de Centros Comunitarios de Rehabilitacion (CCR)", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 0 },
  { slug: "senadis-intermediacion-laboral", servicioSlug: "senadis", nombre: "Apoyo a la Intermediacion Laboral", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 0 },
  { slug: "senadis-chile-inclusivo", servicioSlug: "senadis", nombre: "Chile Inclusivo: Desarrollo de Organizaciones Inclusivas", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 0 },
  { slug: "senadis-desarrollo-territorial", servicioSlug: "senadis", nombre: "Desarrollo Inclusivo Territorial (Ex Participacion Inclusiva Territorial)", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 1487594 },
  { slug: "senadis-fonapi", servicioSlug: "senadis", nombre: "Fondo Nacional de Proyectos Inclusivos (FONAPI)", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 2214690 },
  { slug: "senadis-modelos-residenciales", servicioSlug: "senadis", nombre: "Modelos residenciales para adultos en situacion de discapacidad", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 22002247 },
  { slug: "senadis-accesibilidad", servicioSlug: "senadis", nombre: "Accesibilidad en Instituciones Publicas", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 158472 },
  { slug: "senadis-vida-independiente", servicioSlug: "senadis", nombre: "Transito a la Vida Independiente", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 2932690 },
  { slug: "senadis-ayudas-tecnicas", servicioSlug: "senadis", nombre: "Ayudas Tecnicas", recomendacion: "descontinuar", montoEjecutado2025MilesCLP: 5289701 },
  { slug: "senadis-recursos-educacion-superior", servicioSlug: "senadis", nombre: "Recursos de Apoyo para Estudiantes de Educacion Superior en Situacion de Discapacidad", recomendacion: "descontinuar", montoEjecutado2025MilesCLP: 761777 },

  // ---------- SENAMA (7) ----------
  { slug: "senama-centros-diurnos", servicioSlug: "senama", nombre: "Centros Diurnos del Adulto Mayor", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 12131302 },
  { slug: "senama-cuidados-domiciliarios", servicioSlug: "senama", nombre: "Cuidados Domiciliarios", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 3656776 },
  { slug: "senama-fondo-nacional", servicioSlug: "senama", nombre: "Fondo Nacional del Adulto Mayor", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 5246930 },
  { slug: "senama-formacion", servicioSlug: "senama", nombre: "Participacion y formacion de personas mayores", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 122442 },
  { slug: "senama-eleam", servicioSlug: "senama", nombre: "Fondo Subsidio ELEAM", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 10429718 },
  { slug: "senama-viviendas", servicioSlug: "senama", nombre: "Programa de Viviendas y Apoyos para Personas Mayores (Ex Condominio de Viviendas Tuteladas)", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 1964008 },
  { slug: "senama-residencias-comunitarias", servicioSlug: "senama", nombre: "Residencias Comunitarias para Personas Mayores (ex Establecimientos de Larga Estadia)", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 17509697 },

  // ---------- Subsecretaria Evaluacion Social (3) ----------
  { slug: "ses-deportistas-sueno", servicioSlug: "subsec-evaluacion-social", nombre: "Deportistas por un Sueño", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 335016 },
  { slug: "ses-vivir-mejor", servicioSlug: "subsec-evaluacion-social", nombre: "Fondo de Iniciativas para la Superacion de la Pobreza – Para Vivir Mejor (Ex Chile de Todas y Todos)", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 1317998 },
  { slug: "ses-servicio-pais", servicioSlug: "subsec-evaluacion-social", nombre: "Servicio Pais", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 4314514 },

  // ---------- Subsecretaria Servicios Sociales (27) ----------
  { slug: "sss-vinculos", servicioSlug: "subsec-servicios-sociales", nombre: "Apoyo Integral al Adulto Mayor Vinculos - SSyOO", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 12885010 },
  { slug: "sss-subsidio-agua", servicioSlug: "subsec-servicios-sociales", nombre: "Subsidio al Pago del Consumo de Agua Potable y Servicio de Alcantarillado de Aguas Servidas", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 110429549 },
  { slug: "sss-familia-digital", servicioSlug: "subsec-servicios-sociales", nombre: "Programa Familia Digital", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 1553374 },
  { slug: "sss-asistencia-escolar", servicioSlug: "subsec-servicios-sociales", nombre: "Transferencia monetaria condicionada de Asistencia Escolar", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 8181620 },
  { slug: "sss-centros-superacion", servicioSlug: "subsec-servicios-sociales", nombre: "Centros Temporales para la Superacion", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 10411592 },
  { slug: "sss-centros-cuidados", servicioSlug: "subsec-servicios-sociales", nombre: "Centros Comunitarios de Cuidados", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 4748777 },
  { slug: "sss-cuidados-temporeros", servicioSlug: "subsec-servicios-sociales", nombre: "Centro de Cuidados para Niños/as por Trabajos de Temporada", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 521506 },
  { slug: "sss-gestion-social-local", servicioSlug: "subsec-servicios-sociales", nombre: "Gestion Social Local - GSL (Ex Apoyo, Monitoreo y Supervision a la Gestion Territorial)", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 1274984 },
  { slug: "sss-bono-formalizacion", servicioSlug: "subsec-servicios-sociales", nombre: "Bono por Formalizacion Laboral", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 1384695 },
  { slug: "sss-bonos-proteccion-egreso", servicioSlug: "subsec-servicios-sociales", nombre: "Bonos Proteccion (SSyOO y Chile Solidario) y Egreso (Chile Solidario)", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 27281923 },
  { slug: "sss-bono-logro-escolar", servicioSlug: "subsec-servicios-sociales", nombre: "Bono Logro Escolar", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 18800741 },
  { slug: "sss-seguridad-alimentaria", servicioSlug: "subsec-servicios-sociales", nombre: "Apoyo a la Seguridad Alimentaria (Ex Apoyo a Familias para el Autoconsumo)", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 3787796 },
  { slug: "sss-chile-te-cuida", servicioSlug: "subsec-servicios-sociales", nombre: "Chile Te Cuida", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 1332651 },
  { slug: "sss-microbancos-alimentos", servicioSlug: "subsec-servicios-sociales", nombre: "Microbancos de Alimentos", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 152359 },
  { slug: "sss-pago-cuidadores", servicioSlug: "subsec-servicios-sociales", nombre: "Pago a Cuidadores de Personas con Discapacidad", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 12670956 },
  { slug: "sss-red-proteccion", servicioSlug: "subsec-servicios-sociales", nombre: "Plataforma Red Integral de Proteccion Social (Ex reddeproteccion.cl / Clase Media Protegida)", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 465243 },
  { slug: "sss-protege-calle", servicioSlug: "subsec-servicios-sociales", nombre: "Protege Calle (Ex Plan de Invierno Noche Digna)", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 15130349 },
  { slug: "sss-red-calle-ninos", servicioSlug: "subsec-servicios-sociales", nombre: "Red Calle Niños/as", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 1563504 },
  { slug: "sss-rlac", servicioSlug: "subsec-servicios-sociales", nombre: "Red Local de Apoyos y Cuidados - RLAC", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 45708347 },
  { slug: "sss-subsidio-calefaccion", servicioSlug: "subsec-servicios-sociales", nombre: "Subsidio Calefaccion", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 3727223 },
  { slug: "sss-personas-calle", servicioSlug: "subsec-servicios-sociales", nombre: "Apoyo a Personas en Situacion de Calle - SSyOO", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 4503086 },
  { slug: "sss-tm-base", servicioSlug: "subsec-servicios-sociales", nombre: "Transferencia monetaria base", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 35786336 },
  { slug: "sss-tm-nino-sano", servicioSlug: "subsec-servicios-sociales", nombre: "Transferencia monetaria condicionada Control de Niño Sano", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 2551211 },
  { slug: "sss-familias-ssyoo", servicioSlug: "subsec-servicios-sociales", nombre: "Familias - SSyOO", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 54322266 },
  { slug: "sss-vivienda-primero", servicioSlug: "subsec-servicios-sociales", nombre: "Vivienda Primero", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 7788570 },
  { slug: "sss-entornos-saludables", servicioSlug: "subsec-servicios-sociales", nombre: "Fondo Concursable para la Promocion de Entornos Saludables", recomendacion: "descontinuar", montoEjecutado2025MilesCLP: 811438 },
  { slug: "sss-bono-graduacion", servicioSlug: "subsec-servicios-sociales", nombre: "Bono de Graduacion de Cuarto Medio", recomendacion: "descontinuar", montoEjecutado2025MilesCLP: 139629 },

  // ---------- Subsecretaria de la Niñez (9) ----------
  { slug: "sn-biopsicosocial", servicioSlug: "subsec-ninez", nombre: "Apoyo al Desarrollo Biopsicosocial", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 25259096 },
  { slug: "sn-ayudas-tecnicas-ninez", servicioSlug: "subsec-ninez", nombre: "Ayudas Tecnicas para la niñez", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 669988 },
  { slug: "sn-fiadi", servicioSlug: "subsec-ninez", nombre: "Fondo de intervenciones de apoyo al desarrollo infantil (FIADI)", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 3907223 },
  { slug: "sn-salud-mental", servicioSlug: "subsec-ninez", nombre: "Programa de Apoyo a la Salud Mental Infantil", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 5667535 },
  { slug: "sn-recien-nacido", servicioSlug: "subsec-ninez", nombre: "Programa de Apoyo al Recien Nacido", recomendacion: "sin_observaciones", montoEjecutado2025MilesCLP: 18289409 },
  { slug: "sn-abriendo-caminos", servicioSlug: "subsec-ninez", nombre: "Abriendo caminos", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 6296845 },
  { slug: "sn-crecer-comunidad", servicioSlug: "subsec-ninez", nombre: "Crecer en Comunidad (Ex Fondo Concursable de Iniciativas para la Infancia)", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 2973572 },
  { slug: "sn-oficina-local", servicioSlug: "subsec-ninez", nombre: "Oficina Local de la Niñez", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 28803485 },
  { slug: "sn-programa-educativo", servicioSlug: "subsec-ninez", nombre: "Programa Educativo", recomendacion: "ajuste", montoEjecutado2025MilesCLP: 2301873 },
];

import { PROGRAMAS_TRABAJO } from "./programas-trabajo";
import { PROGRAMAS_EDUCACION } from "./programas-educacion";
import { PROGRAMAS_ECONOMIA } from "./programas-economia";
import { PROGRAMAS_SALUD } from "./programas-salud";

export const PROGRAMAS_TODOS = [
  ...PROGRAMAS_MDSYF,
  ...PROGRAMAS_TRABAJO,
  ...PROGRAMAS_EDUCACION,
  ...PROGRAMAS_ECONOMIA,
  ...PROGRAMAS_SALUD,
];
