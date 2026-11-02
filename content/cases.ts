export type Case = {
  slug: string;
  client: string;
  challenge: string;
  delivery: string;
  media: { src: string; alt: string }[];
  // true quando o case tem conteúdo real (libera indexação e sitemap)
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
