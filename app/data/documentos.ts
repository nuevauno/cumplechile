import type { Documento } from "./types";

export const DOCUMENTOS: Documento[] = [
  {
    slug: "oficio-circular-16-hacienda-2026",
    titulo: "Oficio Circular N°16 de Hacienda — Formulacion Presupuesto 2027 y Programa Financiero 2028-2031",
    tipo: "oficio",
    fecha: "2026-04-21",
    emisor: "Ministerio de Hacienda",
    destinatario: "Sres. (as) Ministros (as) de Estado",
    pdfPath: "/docs/recortes-mds-oficio-16.pdf",
    resumen:
      "Instruccion firmada por el Ministro de Hacienda Jorge Quiroz Castro a todos los Ministerios para formular el presupuesto 2027 y la programacion financiera 2028-2031 dentro de un Marco de Mediano Plazo (MMP) restrictivo. El oficio establece que cada ministerio debe ajustarse al techo presupuestario 2026 descontados los ajustes fiscales ya implementados, priorizando obligaciones legales por sobre nuevas iniciativas. Se acompaña de anexos por ministerio con la oferta programatica clasificada en tres grupos: descontinuar, ajuste presupuestario de al menos -15%, o sin observaciones.",
    citas: [
      {
        texto:
          "El actual proceso de formulacion presupuestaria se inserta en un escenario de estrechez fiscal que exige un cambio de paradigma en la gestion de los recursos publicos.",
        pagina: 1,
      },
      {
        texto:
          "La aprobacion de nuevas iniciativas estara supeditada estrictamente a su sostenibilidad financiera en el horizonte 2027-2031.",
        pagina: 1,
      },
      {
        texto:
          "Frente a la desafiante y compleja situacion que enfrentan las finanzas publicas de Chile, el programa de gobierno del Presidente Jose Antonio Kast contempla recuperar el equilibrio de las cuentas fiscales.",
        pagina: 5,
      },
      {
        texto:
          "Ajuste presupuestario: se deberia aplicar una disminucion presupuestaria de al menos el 15%.",
        pagina: 10,
      },
    ],
  },
  {
    slug: "anexo-trabajo-recortes",
    titulo: "Anexo Ministerio del Trabajo y Prevision Social — Condicionamiento Oferta Programatica",
    tipo: "informe",
    fecha: "2026-04-21",
    emisor: "Direccion de Presupuestos (DIPRES)",
    destinatario: "Ministerio del Trabajo y Prevision Social",
    pdfPath: "/docs/recortes-trabajo-oficio-16.pdf",
    resumen:
      "Anexo programatico para el Ministerio del Trabajo y Prevision Social. 35 programas en 5 servicios (ChileValora, IPS, SENCE, Subsec Prevision Social, Subsec Trabajo). 3 a descontinuar, 26 con ajuste presupuestario de al menos -15%, 6 sin observaciones. Entre los afectados: el Bono Invierno (rebaja), el Subsidio Familiar, las Pensiones del Sistema de Reparto, el Bono al Trabajo de la Mujer, e Inversion en la Comunidad (descontinuado). El Programa de Fomento a la Empleabilidad Sostenible (PROFES) tambien se descontinua.",
  },
  {
    slug: "anexo-educacion-recortes",
    titulo: "Anexo Ministerio de Educacion — Condicionamiento Oferta Programatica",
    tipo: "informe",
    fecha: "2026-04-21",
    emisor: "Direccion de Presupuestos (DIPRES)",
    destinatario: "Ministerio de Educacion",
    pdfPath: "/docs/recortes-educacion-oficio-16.pdf",
    resumen:
      "Anexo programatico para el Ministerio de Educacion. 91 programas en 6 servicios (DEP, JUNAEB, JUNJI, Subsecretarias). 15 a descontinuar, 42 con ajuste, 34 sin observaciones. La decision mas significativa: el Programa de Alimentacion Escolar (PAE) es marcado para descontinuar — su monto ejecutado 2025 supera el billon de pesos chilenos. Tambien se descontinuan el Fondo de Apoyo a la Educacion Publica, el Programa Nacional de Lectura, el Sistema de Induccion y Mentoria de profesores, la Beca PACE de acceso a la educacion superior y el Plan Nacional de Escritura. La Subvencion Gratuidad y el Credito con Aval del Estado (CAE) reciben ajuste.",
  },
  {
    slug: "anexo-economia-recortes",
    titulo: "Anexo Ministerio de Economia, Fomento y Turismo — Condicionamiento Oferta Programatica",
    tipo: "informe",
    fecha: "2026-04-21",
    emisor: "Direccion de Presupuestos (DIPRES)",
    destinatario: "Ministerio de Economia, Fomento y Turismo",
    pdfPath: "/docs/recortes-economia-oficio-16.pdf",
    resumen:
      "Anexo programatico para el Ministerio de Economia, Fomento y Turismo. ~70 programas en 8 servicios (CORFO, Innova Chile, INDESPA, SERNAPESCA, SERNATUR, SERCOTEC, Subsecretarias). El recorte golpea principalmente al fomento productivo: descontinuan 8 programas de CORFO entre los que destacan Comite de Desarrollo y Fomento Indigena, Fomento a la Calidad, Activa Riego, REDES Silvoagropecuaria GTT+ y otros. SERCOTEC pierde 4 programas (Mejora Negocios, Promocion y Canales de Comercializacion, Redes de Oportunidades de Negocios, Servicios Virtuales). En la Subsecretaria, se descontinuan Digitaliza tu Pyme y el Observatorio de Datos Economicos.",
  },
];
