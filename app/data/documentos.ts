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
      "Instruccion firmada por el Ministro de Hacienda Jorge Quiroz Castro a todos los Ministerios para formular el presupuesto 2027 y la programacion financiera 2028-2031 dentro de un Marco de Mediano Plazo (MMP) restrictivo. El oficio establece que cada ministerio debe ajustarse al techo presupuestario 2026 descontados los ajustes fiscales ya implementados, priorizando obligaciones legales por sobre nuevas iniciativas. Se acompaña del anexo MDS con recomendaciones de descontinuar 142 programas y rebajar 260 a nivel pais; en el MDSyF eso se traduce en 21 programas a descontinuar (incluidos 8 de CONADI, Ayudas Tecnicas de SENADIS y el Bono de Graduacion de Cuarto Medio) y 36 programas con ajuste de al menos -15%, entre ellos Chile Te Cuida, Pago a Cuidadores de Personas con Discapacidad, Subsidio Calefaccion, Vivienda Primero, Protege Calle (Plan de Invierno) y Oficina Local de la Niñez.",
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
];
