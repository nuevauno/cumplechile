import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("decisiones", "routes/decisiones.tsx"),
  route("decisiones/:slug", "routes/decisiones-detail.tsx"),
  route("promesas", "routes/promesas.tsx"),
  route("programas", "routes/programas.tsx"),
  route("ministerios", "routes/ministerios.tsx"),
  route("ministerios/:slug", "routes/ministerios-detail.tsx"),
  route("retractaciones", "routes/retractaciones.tsx"),
  route("mentiras", "routes/mentiras.tsx"),
  route("doble-estandar", "routes/doble-estandar.tsx"),
  route("valenzuela", "routes/valenzuela.tsx"),
  route("seremis", "routes/seremis.tsx"),
  route("cronologia", "routes/cronologia.tsx"),
  route("documentos", "routes/documentos.tsx"),
  route("documentos/:slug", "routes/documentos-detail.tsx"),
  route("sobre", "routes/sobre.tsx"),
  route("sitemap.xml", "routes/sitemap.tsx"),
  route("robots.txt", "routes/robots.tsx"),
  // Mantenemos el path viejo por compatibilidad con backlinks externos
  route("__sitemap.xml", "routes/sitemap.tsx", { id: "sitemap-legacy" }),
] satisfies RouteConfig;
