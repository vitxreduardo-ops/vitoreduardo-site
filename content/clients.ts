// Marcas atendidas, na ordem em que aparecem na home.
// work: o que foi feito (opcional). image: foto do popover ao passar o mouse,
// ex.: /images/clientes/john-deere.webp (paisagem 16:9). Sem foto, o popover mostra um placeholder.
// href: página do case, quando existe.
export type Client = { name: string; work?: string; image?: string; href?: string };

export const clients: Client[] = [
  {
    name: "A Raiz da Solução",
    image: "https://i.ytimg.com/vi/YhpunTX1aUE/maxresdefault.jpg",
    href: "/portfolio/a-raiz-da-solucao-experience-2025/",
  },
  {
    name: "BYD Disbrava",
    work: "Câmera, VFX, edição e color grading",
    image: "https://i.ytimg.com/vi/VxX0RiYUug0/maxresdefault.jpg",
    href: "/portfolio/byd-disbrava-chegada-oeste-baiano/",
  },
  { name: "John Deere" },
  {
    name: "New Holland",
    work: "Direção de fotografia, PomodoroHub",
    image: "https://i.ytimg.com/vi/Xu9cQ2nRGGY/maxresdefault.jpg",
    href: "/portfolio/new-holland-recorde-soja/",
  },
  { name: "Galvani" },
  { name: "Abapa" },
];
