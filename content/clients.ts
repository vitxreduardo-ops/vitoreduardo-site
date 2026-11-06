// Marcas atendidas, na ordem em que aparecem na home.
// work: o que foi feito (opcional). image: foto do popover ao passar o mouse,
// ex.: /images/clientes/john-deere.webp (paisagem 4:3). Sem foto, o popover mostra um placeholder.
export type Client = { name: string; work?: string; image?: string };

export const clients: Client[] = [
  { name: "A Raiz da Solução" },
  { name: "BYD Disbrava" },
  { name: "John Deere" },
  { name: "New Holland" },
  { name: "Galvani" },
  { name: "Abapa" },
];
