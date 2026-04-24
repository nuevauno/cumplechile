/**
 * Gabinete del Presidente Jose Antonio Kast.
 * Asume funciones: 11 de marzo de 2026.
 * Fuente: anuncio publico del gabinete del 20 de enero de 2026.
 *
 * fotoUrl puede llenarse despues con la URL oficial. Por ahora se usa avatar de iniciales.
 */
export interface Ministro {
  nombre: string;
  cargo: string;
  ministerioSlug: string;
  partido?: string;
  desde: string; // ISO yyyy-mm-dd
  fotoUrl?: string;
  bio?: string;
}

export const MINISTROS: Ministro[] = [
  { nombre: "Claudio Alvarado Andrade",     cargo: "Ministro del Interior",                                ministerioSlug: "interior",                       partido: "UDI",       desde: "2026-03-11" },
  { nombre: "Francisco Perez Mackenna",     cargo: "Ministro de Relaciones Exteriores",                    ministerioSlug: "relaciones-exteriores",          partido: "Ind.",       desde: "2026-03-11" },
  { nombre: "Fernando Barros Tocornal",     cargo: "Ministro de Defensa Nacional",                          ministerioSlug: "defensa-nacional",               partido: "Ind.",       desde: "2026-03-11" },
  { nombre: "Jorge Quiroz Castro",           cargo: "Ministro de Hacienda",                                  ministerioSlug: "hacienda",                       partido: "Ind.",       desde: "2026-03-11" },
  { nombre: "Trinidad Steinert Herrera",     cargo: "Ministra de Seguridad Publica",                         ministerioSlug: "seguridad-publica",              partido: "Ind.",       desde: "2026-03-11" },
  { nombre: "Jose Garcia Ruminot",           cargo: "Ministro Secretario General de la Presidencia",          ministerioSlug: "secretaria-general-presidencia", partido: "RN",         desde: "2026-03-11" },
  { nombre: "Mara Sedini Viancos",           cargo: "Ministra Secretaria General de Gobierno",                ministerioSlug: "secretaria-general-gobierno",    partido: "Ind.",       desde: "2026-03-11" },
  { nombre: "Daniel Mas Valdes",             cargo: "Biministro de Economia, Fomento y Turismo, y Mineria",    ministerioSlug: "economia",                       partido: "Ind.",       desde: "2026-03-11" },
  { nombre: "Maria Jesus Wulf Le May",       cargo: "Ministra de Desarrollo Social y Familia",                 ministerioSlug: "desarrollo-social",              partido: "PRCh",       desde: "2026-03-11" },
  { nombre: "Maria Paz Arzola Gonzalez",     cargo: "Ministra de Educacion",                                  ministerioSlug: "educacion",                      partido: "Ind.",       desde: "2026-03-11" },
  { nombre: "Fernando Rabat Celis",          cargo: "Ministro de Justicia y Derechos Humanos",                 ministerioSlug: "justicia",                       partido: "Ind.",       desde: "2026-03-11" },
  { nombre: "Tomas Rau Binder",              cargo: "Ministro del Trabajo y Prevision Social",                 ministerioSlug: "trabajo",                        partido: "Ind.",       desde: "2026-03-11" },
  { nombre: "Martin Arrau Garcia-Huidobro",  cargo: "Ministro de Obras Publicas",                              ministerioSlug: "obras-publicas",                 partido: "PRCh",       desde: "2026-03-11" },
  { nombre: "May Chomali Garib",             cargo: "Ministra de Salud",                                       ministerioSlug: "salud",                          partido: "Ind.",       desde: "2026-03-11" },
  { nombre: "Ivan Poduje Capdeville",        cargo: "Ministro de Vivienda y Urbanismo",                         ministerioSlug: "vivienda",                       partido: "Ind.",       desde: "2026-03-11" },
  { nombre: "Jaime Campos Quiroga",          cargo: "Ministro de Agricultura",                                 ministerioSlug: "agricultura",                    partido: "Ind.",       desde: "2026-03-11" },
  { nombre: "Daniel Mas Valdes",             cargo: "Biministro de Economia, Fomento y Turismo, y Mineria",    ministerioSlug: "mineria",                        partido: "Ind.",       desde: "2026-03-11" },
  { nombre: "Louis de Grange Concha",        cargo: "Ministro de Transportes y Telecomunicaciones",            ministerioSlug: "transportes",                    partido: "Ind.",       desde: "2026-03-11" },
  { nombre: "Catalina Parot Donoso",         cargo: "Ministra de Bienes Nacionales",                            ministerioSlug: "bienes-nacionales",              partido: "Ind.",       desde: "2026-03-11" },
  { nombre: "Ximena Rincon Gonzalez",        cargo: "Ministra de Energia",                                      ministerioSlug: "energia",                        partido: "Ind.",       desde: "2026-03-11" },
  { nombre: "Francisca Toledo Echegaray",    cargo: "Ministra del Medio Ambiente",                              ministerioSlug: "medio-ambiente",                 partido: "Ind.",       desde: "2026-03-11" },
  { nombre: "Natalia Duco Soler",            cargo: "Ministra del Deporte",                                     ministerioSlug: "deporte",                        partido: "Ind.",       desde: "2026-03-11" },
  { nombre: "Judith Marin Morales",          cargo: "Ministra de la Mujer y la Equidad de Genero",              ministerioSlug: "mujer",                          partido: "Ind.",       desde: "2026-03-11" },
  { nombre: "Francisco Undurraga Gazitua",   cargo: "Ministro de las Culturas, las Artes y el Patrimonio",       ministerioSlug: "culturas",                       partido: "Ind.",       desde: "2026-03-11" },
  // Ciencia, Tecnologia, Conocimiento e Innovacion: titular por confirmar
];

export const ministroByMinisterio = (slug: string): Ministro | undefined =>
  MINISTROS.find((m) => m.ministerioSlug === slug);

/** Iniciales del ministro para avatar fallback. */
export const iniciales = (nombre: string): string => {
  const partes = nombre.trim().split(/\s+/);
  if (partes.length === 1) return partes[0].slice(0, 2).toUpperCase();
  return (partes[0][0] + partes[1][0]).toUpperCase();
};

/** Color determinista a partir del nombre para fondo del avatar. */
export const avatarColor = (nombre: string): string => {
  const palette = [
    "#3b82f6", "#8b5cf6", "#ec4899", "#f59e0b", "#10b981",
    "#06b6d4", "#6366f1", "#84cc16", "#f97316", "#14b8a6",
    "#a855f7", "#ef4444",
  ];
  let h = 0;
  for (let i = 0; i < nombre.length; i++) h = (h * 31 + nombre.charCodeAt(i)) >>> 0;
  return palette[h % palette.length];
};
