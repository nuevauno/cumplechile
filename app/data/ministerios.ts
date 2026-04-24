import type { Ministerio } from "./types";

// Los 24 ministerios del Estado de Chile (orden constitucional).
export const MINISTERIOS: Ministerio[] = [
  { slug: "interior", nombre: "Interior y Seguridad Publica", abrev: "Interior" },
  { slug: "relaciones-exteriores", nombre: "Relaciones Exteriores", abrev: "RR.EE." },
  { slug: "defensa-nacional", nombre: "Defensa Nacional", abrev: "Defensa" },
  { slug: "hacienda", nombre: "Hacienda", abrev: "Hacienda" },
  { slug: "secretaria-general-presidencia", nombre: "Secretaria General de la Presidencia", abrev: "SEGPRES" },
  { slug: "secretaria-general-gobierno", nombre: "Secretaria General de Gobierno", abrev: "SEGEGOB" },
  { slug: "economia", nombre: "Economia, Fomento y Turismo", abrev: "Economia" },
  { slug: "desarrollo-social", nombre: "Desarrollo Social y Familia", abrev: "MDSyF" },
  { slug: "educacion", nombre: "Educacion", abrev: "Mineduc" },
  { slug: "justicia", nombre: "Justicia y Derechos Humanos", abrev: "Justicia" },
  { slug: "trabajo", nombre: "Trabajo y Prevision Social", abrev: "Trabajo" },
  { slug: "obras-publicas", nombre: "Obras Publicas", abrev: "MOP" },
  { slug: "salud", nombre: "Salud", abrev: "Minsal" },
  { slug: "vivienda", nombre: "Vivienda y Urbanismo", abrev: "Minvu" },
  { slug: "agricultura", nombre: "Agricultura", abrev: "Minagri" },
  { slug: "mineria", nombre: "Mineria" },
  { slug: "transportes", nombre: "Transportes y Telecomunicaciones", abrev: "MTT" },
  { slug: "bienes-nacionales", nombre: "Bienes Nacionales" },
  { slug: "energia", nombre: "Energia" },
  { slug: "medio-ambiente", nombre: "Medio Ambiente", abrev: "MMA" },
  { slug: "deporte", nombre: "Deporte", abrev: "Mindep" },
  { slug: "mujer", nombre: "Mujer y Equidad de Genero" },
  { slug: "culturas", nombre: "Culturas, las Artes y el Patrimonio", abrev: "Mincap" },
  { slug: "ciencia", nombre: "Ciencia, Tecnologia, Conocimiento e Innovacion", abrev: "MinCiencia" },
];
