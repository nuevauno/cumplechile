/**
 * Gabinete del Presidente José Antonio Kast.
 * Asume funciones: 11 de marzo de 2026.
 * Fuente nóminas: anuncio público del gabinete del 20 de enero de 2026.
 * Fuente fotos: Wikimedia Commons (CC BY-SA / dominio público).
 */
export interface Ministro {
  nombre: string;
  cargo: string;
  ministerioSlug: string;
  partido?: string;
  desde: string;
  fotoUrl?: string;
  bio?: string;
}

export const MINISTROS: Ministro[] = [
  { nombre: "Claudio Alvarado Andrade",     cargo: "Ministro del Interior",                                ministerioSlug: "interior",                       partido: "UDI",  desde: "2026-03-11",
    fotoUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Claudio_Alvarado_Andrade_-_ministro_del_interior%2C_retrato_oficial.png" },
  { nombre: "Francisco Perez Mackenna",     cargo: "Ministro de Relaciones Exteriores",                    ministerioSlug: "relaciones-exteriores",          partido: "Ind.", desde: "2026-03-11",
    fotoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Francisco_P%C3%A9rez_Mackenna.jpg/330px-Francisco_P%C3%A9rez_Mackenna.jpg" },
  { nombre: "Fernando Barros Tocornal",     cargo: "Ministro de Defensa Nacional",                          ministerioSlug: "defensa-nacional",               partido: "Ind.", desde: "2026-03-11",
    fotoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Fernando_Barros_Tocornal_%28cropped%29.png/330px-Fernando_Barros_Tocornal_%28cropped%29.png" },
  { nombre: "Jorge Quiroz Castro",           cargo: "Ministro de Hacienda",                                  ministerioSlug: "hacienda",                       partido: "Ind.", desde: "2026-03-11",
    fotoUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3d/JORGE-QUIROZ.jpg" },
  { nombre: "Trinidad Steinert Herrera",     cargo: "Ministra de Seguridad Pública",                         ministerioSlug: "seguridad-publica",              partido: "Ind.", desde: "2026-03-11",
    fotoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Logos_RRSS_Gobierno_de_Chile_2026_SEGURIDAD_-_MIN_STEINERT_%28cropped%29.png/330px-Logos_RRSS_Gobierno_de_Chile_2026_SEGURIDAD_-_MIN_STEINERT_%28cropped%29.png" },
  { nombre: "José García Ruminot",           cargo: "Ministro Secretario General de la Presidencia",          ministerioSlug: "secretaria-general-presidencia", partido: "RN",   desde: "2026-03-11",
    fotoUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ed/JOSE-GARCIA-RUMINOT.png" },
  { nombre: "Mara Sedini Viancos",           cargo: "Ministra Secretaria General de Gobierno",                ministerioSlug: "secretaria-general-gobierno",    partido: "Ind.", desde: "2026-03-11",
    fotoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/MARA_SEDINI_VIANCOS.jpg/330px-MARA_SEDINI_VIANCOS.jpg" },
  { nombre: "Daniel Mas Valdés",             cargo: "Biministro de Economía, Fomento y Turismo, y Minería",    ministerioSlug: "economia",                       partido: "Ind.", desde: "2026-03-11",
    fotoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Ministro_Daniel_Mas_Vald%C3%A9s.jpg/330px-Ministro_Daniel_Mas_Vald%C3%A9s.jpg" },
  { nombre: "María Jesús Wulf Le May",       cargo: "Ministra de Desarrollo Social y Familia",                 ministerioSlug: "desarrollo-social",              partido: "PRCh", desde: "2026-03-11",
    fotoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Logos_RRSS_Gobierno_de_Chile_2026_DESARROLLO_SOCIAL_-_MIN_WULF_%28cropped%29.png/330px-Logos_RRSS_Gobierno_de_Chile_2026_DESARROLLO_SOCIAL_-_MIN_WULF_%28cropped%29.png" },
  { nombre: "María Paz Arzola González",     cargo: "Ministra de Educación",                                  ministerioSlug: "educacion",                      partido: "Ind.", desde: "2026-03-11",
    fotoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Mar%C3%ADa_Paz_Arzola_%28cropped%29.jpg/330px-Mar%C3%ADa_Paz_Arzola_%28cropped%29.jpg" },
  { nombre: "Fernando Rabat Celis",          cargo: "Ministro de Justicia y Derechos Humanos",                 ministerioSlug: "justicia",                       partido: "Ind.", desde: "2026-03-11",
    fotoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Fernando_Rabat_Celis.jpg/330px-Fernando_Rabat_Celis.jpg" },
  { nombre: "Tomás Rau Binder",              cargo: "Ministro del Trabajo y Previsión Social",                 ministerioSlug: "trabajo",                        partido: "Ind.", desde: "2026-03-11",
    fotoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tom%C3%A1s_Rau_Binder.png/500px-Tom%C3%A1s_Rau_Binder.png" },
  { nombre: "Martín Arrau García-Huidobro",  cargo: "Ministro de Obras Públicas",                              ministerioSlug: "obras-publicas",                 partido: "PRCh", desde: "2026-03-11",
    fotoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Mart%C3%ADn_Arrau_Garc%C3%ADa-Huidobro_%28cropped%29.jpg/500px-Mart%C3%ADn_Arrau_Garc%C3%ADa-Huidobro_%28cropped%29.jpg" },
  { nombre: "May Chomali Garib",             cargo: "Ministra de Salud",                                       ministerioSlug: "salud",                          partido: "Ind.", desde: "2026-03-11",
    fotoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/MAY_CHOMAL%C3%8D_GARIB.jpg/500px-MAY_CHOMAL%C3%8D_GARIB.jpg" },
  { nombre: "Iván Poduje Capdeville",        cargo: "Ministro de Vivienda y Urbanismo",                         ministerioSlug: "vivienda",                       partido: "Ind.", desde: "2026-03-11",
    fotoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/IVAN-PODUJE.jpg/330px-IVAN-PODUJE.jpg" },
  { nombre: "Jaime Campos Quiroga",          cargo: "Ministro de Agricultura",                                 ministerioSlug: "agricultura",                    partido: "Ind.", desde: "2026-03-11",
    fotoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Jaime_Campos_Quiroga.jpg/330px-Jaime_Campos_Quiroga.jpg" },
  { nombre: "Daniel Mas Valdés",             cargo: "Biministro de Economía, Fomento y Turismo, y Minería",    ministerioSlug: "mineria",                        partido: "Ind.", desde: "2026-03-11",
    fotoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Ministro_Daniel_Mas_Vald%C3%A9s.jpg/330px-Ministro_Daniel_Mas_Vald%C3%A9s.jpg" },
  { nombre: "Louis de Grange Concha",        cargo: "Ministro de Transportes y Telecomunicaciones",            ministerioSlug: "transportes",                    partido: "Ind.", desde: "2026-03-11",
    fotoUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fd/LOUIS-DE-GRANGE.png" },
  { nombre: "Catalina Parot Donoso",         cargo: "Ministra de Bienes Nacionales",                            ministerioSlug: "bienes-nacionales",              partido: "Ind.", desde: "2026-03-11",
    fotoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Catalina_Parot_2026.jpg/330px-Catalina_Parot_2026.jpg" },
  { nombre: "Ximena Rincón González",        cargo: "Ministra de Energía",                                      ministerioSlug: "energia",                        partido: "Ind.", desde: "2026-03-11",
    fotoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Senadora_Ximena_Rinc%C3%B3n_Gonz%C3%A1lez_%282022%29.jpg/330px-Senadora_Ximena_Rinc%C3%B3n_Gonz%C3%A1lez_%282022%29.jpg" },
  { nombre: "Francisca Toledo Echegaray",    cargo: "Ministra del Medio Ambiente",                              ministerioSlug: "medio-ambiente",                 partido: "Ind.", desde: "2026-03-11",
    fotoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Francisca_Toledo_Echegaray.jpg/330px-Francisca_Toledo_Echegaray.jpg" },
  { nombre: "Natalia Duco Soler",            cargo: "Ministra del Deporte",                                     ministerioSlug: "deporte",                        partido: "Ind.", desde: "2026-03-11",
    fotoUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Natalia_Duc%C3%B3_como_Ministra_del_Deporte_2026.jpg" },
  { nombre: "Judith Marín Morales",          cargo: "Ministra de la Mujer y la Equidad de Género",              ministerioSlug: "mujer",                          partido: "Ind.", desde: "2026-03-11",
    fotoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Judith_Mar%C3%ADn_Morales.jpg/500px-Judith_Mar%C3%ADn_Morales.jpg" },
  { nombre: "Francisco Undurraga Gazitúa",   cargo: "Ministro de las Culturas, las Artes y el Patrimonio",       ministerioSlug: "culturas",                       partido: "Ind.", desde: "2026-03-11",
    fotoUrl: "https://upload.wikimedia.org/wikipedia/commons/6/66/Juan_Francisco_Undurraga_Gazit%C3%BAa_%282022%29.jpg" },
  { nombre: "Ximena Lincolao Pilquián",      cargo: "Ministra de Ciencia, Tecnología, Conocimiento e Innovación", ministerioSlug: "ciencia",                        partido: "Ind.", desde: "2026-03-11",
    fotoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logos_RRSS_Gobierno_de_Chile_2026_CIENCIA_-_MIN_LINCOLAO_%28cropped%29.png/330px-Logos_RRSS_Gobierno_de_Chile_2026_CIENCIA_-_MIN_LINCOLAO_%28cropped%29.png" },
];

export const ministroByMinisterio = (slug: string): Ministro | undefined =>
  MINISTROS.find((m) => m.ministerioSlug === slug);

export const iniciales = (nombre: string): string => {
  const partes = nombre.trim().split(/\s+/);
  if (partes.length === 1) return partes[0].slice(0, 2).toUpperCase();
  return (partes[0][0] + partes[1][0]).toUpperCase();
};

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
