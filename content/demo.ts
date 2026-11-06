import type { Case } from "./cases";
import type { Client } from "./clients";

// Conteúdo de exemplo para ver o layout em `npm run dev`.
// Nunca entra no build de produção (ver lib/showcase.ts).
export const demoCases: Case[] = [
  { slug: "demo-1", client: "Cliente Um", title: "Filme de marca", year: 2026, services: ["estrategia", "marca", "conteudo"], challenge: "", delivery: "", media: [] },
  { slug: "demo-2", client: "Cliente Dois", title: "Campanha de lançamento", year: 2026, services: ["campanhas", "conteudo"], challenge: "", delivery: "", media: [] },
  { slug: "demo-3", client: "Cliente Três", title: "Identidade e site", year: 2025, services: ["estrategia", "marca", "sites"], challenge: "", delivery: "", media: [] },
  { slug: "demo-4", client: "Cliente Quatro", title: "Documentário", year: 2025, services: ["conteudo"], challenge: "", delivery: "", media: [] },
  { slug: "demo-5", client: "Cliente Cinco", title: "Sistema de agendamento", year: 2025, services: ["sites"], challenge: "", delivery: "", media: [] },
];

export const demoClients: Client[] = [
  { name: "Cliente Um", work: "Filme" },
  { name: "Cliente Dois", work: "Campanha" },
  { name: "Cliente Três", work: "Marca e site" },
  { name: "Cliente Quatro", work: "Conteúdo" },
  { name: "Cliente Cinco", work: "Sistema" },
];
