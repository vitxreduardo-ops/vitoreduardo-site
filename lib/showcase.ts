import { cases } from "@/content/cases";
import { clients } from "@/content/clients";
import { demoCases, demoClients } from "@/content/demo";

// Em produção só aparece conteúdo real; em dev, exemplos para enxergar o layout.
const dev = process.env.NODE_ENV === "development";
const realCases = cases.filter((c) => c.ready);

export const showcaseCases = realCases.length || !dev ? realCases : demoCases;
export const showcaseClients = clients.length || !dev ? clients : demoClients;
