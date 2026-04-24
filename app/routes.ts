import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("decisiones", "routes/decisiones.tsx"),
  route("decisiones/:slug", "routes/decisiones-detail.tsx"),
  route("promesas", "routes/promesas.tsx"),
  route("ministerios", "routes/ministerios.tsx"),
  route("ministerios/:slug", "routes/ministerios-detail.tsx"),
  route("documentos", "routes/documentos.tsx"),
  route("documentos/:slug", "routes/documentos-detail.tsx"),
  route("sobre", "routes/sobre.tsx"),
  route("__sitemap.xml", "routes/sitemap.tsx"),
] satisfies RouteConfig;
