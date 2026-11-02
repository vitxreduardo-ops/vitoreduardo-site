import { services } from "@/content/services";
import { cases } from "@/content/cases";
import { ready } from "@/content/readiness";

// Única lista de rotas indexáveis (usada pelo sitemap).
export const indexableRoutes: string[] = [
  "/",
  ...services.map((s) => `/${s.slug}/`),
  "/atendimento/",
  ...(ready.portfolio ? ["/portfolio/"] : []),
  ...(ready.sobre ? ["/sobre/"] : []),
  ...cases.filter((c) => c.ready).map((c) => `/portfolio/${c.slug}/`),
];
