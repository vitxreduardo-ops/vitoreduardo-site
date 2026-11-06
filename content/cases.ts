export type Case = {
  slug: string;
  client: string;
  // título curto do projeto, mostrado no card da home
  title?: string;
  year?: number;
  // frentes usadas no projeto: estrategia | marca | conteudo | campanhas | sites
  services?: string[];
  // capa do card (ex.: /images/cases/slug.webp, retrato 4:5)
  cover?: string;
  challenge: string;
  delivery: string;
  media: { src: string; alt: string }[];
  // true quando o case tem conteúdo real (libera indexação, sitemap e card na home)
  ready?: boolean;
};

export const cases: Case[] = [
  {
    slug: "pendente",
    client: "PENDENTE",
    challenge: "PENDENTE: descrever o desafio do cliente.",
    delivery: "PENDENTE: descrever o que foi entregue.",
    media: [],
  },
];
