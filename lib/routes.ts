import { services } from "@/content/services";

// Única lista de rotas indexáveis (usada pelo sitemap).
// PENDENTE: adicionar /portfolio/, /sobre/ e cases quando perderem o noindex
export const indexableRoutes: string[] = [
  "/",
  ...services.map((s) => `/${s.slug}/`),
  "/atendimento/",
];
