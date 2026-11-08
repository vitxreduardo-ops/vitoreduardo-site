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
  // ponto de foco do corte 4:5 da capa, ex.: "75% 50%" (padrão: centro)
  coverPosition?: string;
  // texto do case: opcionais, a página só mostra o que existir
  challenge?: string;
  delivery?: string;
  // galeria de frames, exibida em grade 16:9 na página do case
  media: { src: string; alt: string }[];
  // id de um vídeo do YouTube, exibido na página do case
  video?: string;
  // loop mudo de 5s no card da home, já cortado em 4:5 (ex.: /videos/slug.mp4); sem isso, só a capa
  clip?: string;
  // linhas de crédito mostradas no fim da página
  credits?: string[];
  // true quando o case tem conteúdo real (libera indexação, sitemap e card na home)
  ready?: boolean;
};

export const cases: Case[] = [
  {
    slug: "byd-disbrava-chegada-oeste-baiano",
    client: "BYD Disbrava",
    title: "A chegada ao oeste baiano",
    year: 2026,
    services: ["conteudo"],
    cover: "/images/cases/byd-disbrava-chegada-oeste-baiano/cover.webp",
    coverPosition: "47% 50%",
    clip: "/videos/byd-disbrava-chegada-oeste-baiano.mp4",
    challenge:
      "Filme de 1 minuto para a chegada da BYD Disbrava a Luís Eduardo Magalhães (BA), a nova concessionária da marca no oeste da Bahia.",
    delivery:
      "Operação de câmera, VFX, edição e color grading do filme, publicado em junho de 2026 no canal da BYD Disbrava.",
    media: [
      { src: "/images/cases/byd-disbrava-chegada-oeste-baiano/02.webp", alt: "Picape BYD em uma estrada de terra ao entardecer" },
      { src: "/images/cases/byd-disbrava-chegada-oeste-baiano/03.webp", alt: "Homem de chapéu sentado à beira de uma estrada de terra, entre eucaliptos" },
      { src: "/images/cases/byd-disbrava-chegada-oeste-baiano/05.webp", alt: "Trator e picape em uma estrada de terra ao lado de uma plantação, sob céu azul" },
      { src: "/images/cases/byd-disbrava-chegada-oeste-baiano/06.webp", alt: "SUV BYD atravessando uma ponte de madeira, com o letreiro do Tocantins" },
      { src: "/images/cases/byd-disbrava-chegada-oeste-baiano/07.webp", alt: "Detalhe da grade frontal de um BYD" },
      { src: "/images/cases/byd-disbrava-chegada-oeste-baiano/08.webp", alt: "SUV BYD levantando poeira em uma estrada de terra no campo" },
    ],
    video: "VxX0RiYUug0",
    ready: true,
  },
  {
    slug: "a-raiz-da-solucao-experience-2025",
    client: "A Raiz da Solução",
    title: "Experience 2025, Aftermovie II",
    year: 2025,
    services: ["conteudo"],
    cover: "https://i.ytimg.com/vi/YhpunTX1aUE/maxresdefault.jpg",
    coverPosition: "78% 50%",
    clip: "/videos/a-raiz-da-solucao-experience-2025.mp4",
    media: [
      { src: "/images/cases/a-raiz-da-solucao-experience-2025/01.webp", alt: "Entrada do evento A Raiz da Solução Experience, com o túnel de acesso e o letreiro da marca" },
      { src: "/images/cases/a-raiz-da-solucao-experience-2025/02.webp", alt: "Palco do evento com uma apresentação no telão e a plateia no escuro" },
      { src: "/images/cases/a-raiz-da-solucao-experience-2025/03.webp", alt: "Dois palestrantes se cumprimentando no palco, diante do telão verde" },
      { src: "/images/cases/a-raiz-da-solucao-experience-2025/04.webp", alt: "Palestrante com microfone diante do telão com o texto 4 Pilares" },
      { src: "/images/cases/a-raiz-da-solucao-experience-2025/05.webp", alt: "Grupo de participantes em pé no palco, diante do logo da marca" },
      { src: "/images/cases/a-raiz-da-solucao-experience-2025/06.webp", alt: "Plateia do auditório, quase toda de camisa verde" },
      { src: "/images/cases/a-raiz-da-solucao-experience-2025/07.webp", alt: "Participantes conversando no saguão do evento" },
    ],
    video: "YhpunTX1aUE",
    ready: true,
  },
  {
    slug: "new-holland-recorde-soja",
    client: "New Holland",
    title: "Recorde de colheita de soja",
    year: 2025,
    services: ["conteudo", "campanhas"],
    cover: "/images/cases/new-holland-recorde-soja/cover.webp",
    coverPosition: "45% 50%",
    clip: "/videos/new-holland-recorde-soja.mp4",
    challenge:
      "Novo recorde nacional de colheita de soja: 481,2 toneladas em 8 horas seguidas, em 131 hectares da Fazenda Bananal, com uma colheitadeira CR10.90 IntelliSense operada pelo produtor Ricardo Basso, de Luís Eduardo Magalhães (BA). O feito foi certificado pelo RankBrasil.",
    delivery:
      "Direção de fotografia do filme do recorde, de 3 minutos, publicado em março de 2025 no canal da New Holland Brasil.",
    media: [
      { src: "/images/cases/new-holland-recorde-soja/02.webp", alt: "Dois homens ao lado da colheitadeira CR10.90 antes da largada do recorde, com a bandeira quadriculada sobre a plataforma" },
      { src: "/images/cases/new-holland-recorde-soja/03.webp", alt: "Colheitadeira descarregando soja em um graneleiro em movimento" },
      { src: "/images/cases/new-holland-recorde-soja/04.webp", alt: "Colheitadeira CR10.90 de frente, em operação e levantando poeira na lavoura" },
      { src: "/images/cases/new-holland-recorde-soja/05.webp", alt: "Colheitadeira com os faróis acesos ao entardecer, sob um céu alaranjado" },
      { src: "/images/cases/new-holland-recorde-soja/06.webp", alt: "Homem de braços abertos com a bandeira quadriculada diante da colheitadeira, no fim da tarde" },
      { src: "/images/cases/new-holland-recorde-soja/07.webp", alt: "Dois homens comemorando com um troféu ao lado da colheitadeira, à noite" },
      { src: "/images/cases/new-holland-recorde-soja/08.webp", alt: "Equipe reunida na lavoura, à noite, com a colheitadeira atrás e a bandeira quadriculada" },
    ],
    video: "Xu9cQ2nRGGY",
    credits: [
      "Direção de fotografia: Vitor Eduardo.",
      "Produzido na PomodoroHub, onde Vitor trabalhava na época.",
    ],
    ready: true,
  },
  {
    slug: "pendente",
    client: "PENDENTE",
    challenge: "PENDENTE: descrever o desafio do cliente.",
    delivery: "PENDENTE: descrever o que foi entregue.",
    media: [],
  },
];
