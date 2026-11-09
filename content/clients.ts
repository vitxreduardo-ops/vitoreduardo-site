// Marcas atendidas, na ordem em que aparecem na home.
// work: o que foi feito (opcional). image: foto do popover ao passar o mouse,
// ex.: /images/clientes/john-deere.webp (paisagem 16:9). Sem foto, o popover mostra um placeholder.
// href: página do case, quando existe.
export type Client = { name: string; work?: string; image?: string; href?: string };

export const clients: Client[] = [
  {
    name: "A Raiz da Solução",
    image: "/images/cases/a-raiz-da-solucao-experience-2025/cover.webp",
    href: "/portfolio/a-raiz-da-solucao-experience-2025/",
  },
  {
    name: "BYD Disbrava",
    work: "Câmera, VFX, edição e color grading",
    image: "/images/cases/byd-disbrava-chegada-oeste-baiano/cover.webp",
    href: "/portfolio/byd-disbrava-chegada-oeste-baiano/",
  },
  { name: "John Deere" },
  {
    name: "New Holland",
    work: "Direção de fotografia, PomodoroHub",
    image: "/images/cases/new-holland-recorde-soja/cover.webp",
    href: "/portfolio/new-holland-recorde-soja/",
  },
  {
    name: "Galvani",
    work: "Pós-produção",
    image: "/images/cases/galvani-30-anos-em-lem/cover.webp",
    href: "/portfolio/galvani-30-anos-em-lem/",
  },
  {
    name: "Abapa",
    image: "/images/cases/abapa-25-anos-teaser/cover.webp",
    href: "/portfolio/abapa-25-anos-teaser/",
  },
  {
    name: "UNIFAAHF",
    image: "/images/cases/unifaahf-vestibular-2026-1/cover.webp",
    href: "/portfolio/unifaahf-vestibular-2026-1/",
  },
];
