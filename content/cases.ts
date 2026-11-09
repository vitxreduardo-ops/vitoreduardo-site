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
    cover: "/images/cases/a-raiz-da-solucao-experience-2025/cover.webp",
    coverPosition: "40% 50%",
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
    slug: "abapa-25-anos-teaser",
    client: "Abapa",
    title: "Teaser de 25 anos",
    year: 2025,
    services: ["conteudo"],
    cover: "/images/cases/abapa-25-anos-teaser/cover.webp",
    clip: "/videos/abapa-25-anos-teaser.mp4",
    challenge:
      "Teaser de 1 minuto e 39 segundos para os 25 anos da Abapa, a Associação Baiana dos Produtores de Algodão, publicado em junho de 2025.",
    media: [
      { src: "/images/cases/abapa-25-anos-teaser/01.webp", alt: "Logo dos 25 anos da Abapa sobre fundo laranja" },
      { src: "/images/cases/abapa-25-anos-teaser/02.webp", alt: "Grupo de produtores reunido em uma lavoura de algodão, em preto e branco" },
      { src: "/images/cases/abapa-25-anos-teaser/03.webp", alt: "Fardos de algodão empilhados em um armazém" },
      { src: "/images/cases/abapa-25-anos-teaser/04.webp", alt: "Água correndo entre pedras e plantas no meio da mata" },
      { src: "/images/cases/abapa-25-anos-teaser/05.webp", alt: "Colheitadeira de algodão verde em operação na lavoura" },
      { src: "/images/cases/abapa-25-anos-teaser/06.webp", alt: "Detalhe do maquinário de beneficiamento do algodão" },
      { src: "/images/cases/abapa-25-anos-teaser/07.webp", alt: "Visitantes de chapéu fotografando com o celular em um evento de campo" },
      { src: "/images/cases/abapa-25-anos-teaser/08.webp", alt: "Grupo caminhando por uma estrada de terra entre plantações" },
    ],
    video: "4SkJoMWMCA0",
    credits: ["Produzido na PomodoroHub, onde Vitor trabalhava na época."],
    ready: true,
  },
  {
    slug: "abapa-workshop-qualidade-da-fibra",
    client: "Abapa",
    title: "Workshop Qualidade da Fibra",
    year: 2025,
    services: ["conteudo"],
    cover: "/images/cases/abapa-workshop-qualidade-da-fibra/cover.webp",
    clip: "/videos/abapa-workshop-qualidade-da-fibra.mp4",
    challenge:
      "Filme de 3 minutos do Workshop Qualidade da Fibra da Abapa, publicado em novembro de 2025.",
    media: [
      { src: "/images/cases/abapa-workshop-qualidade-da-fibra/01.webp", alt: "Participantes entrando no evento do workshop" },
      { src: "/images/cases/abapa-workshop-qualidade-da-fibra/02.webp", alt: "Caderno e caneta sobre a mesa de um participante" },
      { src: "/images/cases/abapa-workshop-qualidade-da-fibra/03.webp", alt: "Executiva da Abapa falando diante do painel do workshop" },
      { src: "/images/cases/abapa-workshop-qualidade-da-fibra/04.webp", alt: "Gustavo Prado, diretor executivo da Abapa, em entrevista" },
      { src: "/images/cases/abapa-workshop-qualidade-da-fibra/05.webp", alt: "Participante em entrevista, com as mesas do evento ao fundo" },
      { src: "/images/cases/abapa-workshop-qualidade-da-fibra/06.webp", alt: "Duas pessoas conversando durante o workshop" },
      { src: "/images/cases/abapa-workshop-qualidade-da-fibra/07.webp", alt: "Palestrante com microfone no palco do workshop" },
      { src: "/images/cases/abapa-workshop-qualidade-da-fibra/08.webp", alt: "Sérgio Benevides falando diante do painel do workshop" },
    ],
    video: "__f3kCqd4Do",
    credits: ["Produzido na PomodoroHub, onde Vitor trabalhava na época."],
    ready: true,
  },
  {
    slug: "abapa-premio-jornalismo-2025",
    client: "Abapa",
    title: "Prêmio Abapa de Jornalismo 2025",
    year: 2025,
    services: ["conteudo"],
    cover: "/images/cases/abapa-premio-jornalismo-2025/cover.webp",
    clip: "/videos/abapa-premio-jornalismo-2025.mp4",
    challenge:
      "Filme de 2 minutos sobre a imersão de jovens talentos no algodão, do Prêmio Abapa de Jornalismo 2025, publicado em setembro de 2025.",
    media: [
      { src: "/images/cases/abapa-premio-jornalismo-2025/01.webp", alt: "Máquina verde enfardando algodão ao lado da lavoura" },
      { src: "/images/cases/abapa-premio-jornalismo-2025/02.webp", alt: "Jovem de camiseta Sou de Algodão em meio ao algodoal" },
      { src: "/images/cases/abapa-premio-jornalismo-2025/03.webp", alt: "Repórter de camisa branca falando em um algodoal" },
      { src: "/images/cases/abapa-premio-jornalismo-2025/04.webp", alt: "Jovem de boné e camiseta Sou de Algodão em uma unidade de beneficiamento" },
      { src: "/images/cases/abapa-premio-jornalismo-2025/05.webp", alt: "Jovem jornalista com microfone no algodoal" },
      { src: "/images/cases/abapa-premio-jornalismo-2025/06.webp", alt: "Dois jovens gravando com o celular no meio da lavoura" },
      { src: "/images/cases/abapa-premio-jornalismo-2025/07.webp", alt: "Jovem de capacete gravando vídeo com o celular em um armazém" },
      { src: "/images/cases/abapa-premio-jornalismo-2025/08.webp", alt: "Quatro jovens de capacete abraçados ao pôr do sol" },
    ],
    video: "Yi6V-z9qnTo",
    credits: ["Produzido pela CreativeHome."],
    ready: true,
  },
  {
    slug: "galvani-30-anos-em-lem",
    client: "Galvani",
    title: "30 anos em Luís Eduardo Magalhães",
    year: 2022,
    services: ["conteudo"],
    cover: "/images/cases/galvani-30-anos-em-lem/cover.webp",
    clip: "/videos/galvani-30-anos-em-lem.mp4",
    challenge:
      "Filme de 16 minutos sobre os 30 anos da Galvani Fertilizantes em Luís Eduardo Magalhães (BA), publicado em dezembro de 2022.",
    delivery: "Pós-produção completa do filme.",
    media: [
      { src: "/images/cases/galvani-30-anos-em-lem/01.webp", alt: "Homem de camiseta amarela em depoimento" },
      { src: "/images/cases/galvani-30-anos-em-lem/02.webp", alt: "Ronaldo Galvani, acionista, em depoimento" },
      { src: "/images/cases/galvani-30-anos-em-lem/03.webp", alt: "Dois profissionais agachados examinando o solo em um campo" },
      { src: "/images/cases/galvani-30-anos-em-lem/04.webp", alt: "Mulher de camisa bege em depoimento" },
      { src: "/images/cases/galvani-30-anos-em-lem/05.webp", alt: "Mulher de blusa rosa floral em depoimento" },
      { src: "/images/cases/galvani-30-anos-em-lem/06.webp", alt: "Homem em uma rua de Luís Eduardo Magalhães olhando para o alto" },
      { src: "/images/cases/galvani-30-anos-em-lem/07.webp", alt: "Ronaldo Galvani em close durante o depoimento" },
      { src: "/images/cases/galvani-30-anos-em-lem/08.webp", alt: "Fotos antigas da Galvani sobre uma mesa de madeira" },
    ],
    video: "ozXPgnoUxkU",
    ready: true,
  },
  {
    slug: "galvani-serie-30-anos-cilem",
    client: "Galvani",
    title: "Série 30 anos do CILEM, a história do Gilmar",
    year: 2022,
    services: ["conteudo"],
    cover: "/images/cases/galvani-serie-30-anos-cilem/cover.webp",
    clip: "/videos/galvani-serie-30-anos-cilem.mp4",
    challenge:
      "Episódio da série dos 30 anos do CILEM, o complexo industrial da Galvani em Luís Eduardo Magalhães, com a história de Gilmar Santos Oliveira. Publicado em outubro de 2022.",
    delivery: "Pós-produção completa do filme.",
    media: [
      { src: "/images/cases/galvani-serie-30-anos-cilem/01.webp", alt: "Colaborador de capacete visto de costas em um galpão, com a pergunta Qual sua história com a Galvani?" },
      { src: "/images/cases/galvani-serie-30-anos-cilem/02.webp", alt: "Dois colaboradores diante de um computador" },
      { src: "/images/cases/galvani-serie-30-anos-cilem/03.webp", alt: "Gilmar Santos Oliveira em depoimento" },
      { src: "/images/cases/galvani-serie-30-anos-cilem/04.webp", alt: "Gilmar em depoimento diante do painel da Galvani" },
      { src: "/images/cases/galvani-serie-30-anos-cilem/05.webp", alt: "Gilmar em close, olhando para fora do quadro" },
      { src: "/images/cases/galvani-serie-30-anos-cilem/06.webp", alt: "Colaborador de capacete e protetor auricular com rádio, no complexo industrial de Luís Eduardo Magalhães" },
      { src: "/images/cases/galvani-serie-30-anos-cilem/07.webp", alt: "Gilmar em depoimento, de frente para a câmera" },
      { src: "/images/cases/galvani-serie-30-anos-cilem/08.webp", alt: "Gilmar sorrindo durante o depoimento" },
    ],
    video: "qLegztroRZw",
    ready: true,
  },
  {
    slug: "galvani-valores-cabeca-de-dono",
    client: "Galvani",
    title: "Valores Galvani, Cabeça de Dono",
    year: 2022,
    services: ["conteudo"],
    cover: "/images/cases/galvani-valores-cabeca-de-dono/cover.webp",
    clip: "/videos/galvani-valores-cabeca-de-dono.mp4",
    challenge:
      "Filme de 1 minuto sobre o valor Cabeça de Dono, da Galvani Fertilizantes, publicado em novembro de 2022.",
    delivery: "Pós-produção completa do filme.",
    media: [
      { src: "/images/cases/galvani-valores-cabeca-de-dono/01.webp", alt: "Colaborador de máscara e uniforme amarelo em um vestiário" },
      { src: "/images/cases/galvani-valores-cabeca-de-dono/02.webp", alt: "Colaborador de capacete visto de costas em um corredor" },
      { src: "/images/cases/galvani-valores-cabeca-de-dono/03.webp", alt: "Colaboradora descendo de um ônibus da unidade mineradora de Angico dos Dias (BA)" },
      { src: "/images/cases/galvani-valores-cabeca-de-dono/04.webp", alt: "Colaboradora de máscara e uniforme caminhando" },
      { src: "/images/cases/galvani-valores-cabeca-de-dono/05.webp", alt: "Colaboradora de headset diante do computador" },
      { src: "/images/cases/galvani-valores-cabeca-de-dono/06.webp", alt: "Equipe reunida em torno de um notebook" },
      { src: "/images/cases/galvani-valores-cabeca-de-dono/07.webp", alt: "Francisco José Bezerra Cavalcante, supervisor de produção de fertilizantes, em depoimento" },
      { src: "/images/cases/galvani-valores-cabeca-de-dono/08.webp", alt: "Adenilson Bispo dos Santos, carpinteiro, em depoimento" },
    ],
    video: "QA-acMT4prc",
    ready: true,
  },
  {
    slug: "unifaahf-vestibular-2026-1",
    client: "UNIFAAHF",
    title: "Vestibular 2026.1",
    year: 2025,
    services: ["campanhas", "conteudo"],
    cover: "/images/cases/unifaahf-vestibular-2026-1/cover.webp",
    clip: "/videos/unifaahf-vestibular-2026-1.mp4",
    challenge:
      "Filme de 30 segundos da campanha do Vestibular 2026.1 do UNIFAAHF, publicado em outubro de 2025.",
    media: [
      { src: "/images/cases/unifaahf-vestibular-2026-1/01.webp", alt: "Estudante sorrindo em uma biblioteca" },
      { src: "/images/cases/unifaahf-vestibular-2026-1/02.webp", alt: "Três estudantes caminhando no campus, com o texto A gente acredita" },
      { src: "/images/cases/unifaahf-vestibular-2026-1/03.webp", alt: "Estudante de óculos segurando um livro entre estantes" },
      { src: "/images/cases/unifaahf-vestibular-2026-1/04.webp", alt: "Estudantes de jaleco examinando um modelo de crânio e esqueleto" },
      { src: "/images/cases/unifaahf-vestibular-2026-1/05.webp", alt: "Estudante em sala de aula, com a indicação de cursos presenciais, semipresenciais e EAD" },
      { src: "/images/cases/unifaahf-vestibular-2026-1/06.webp", alt: "Close do rosto de uma estudante sob luz dourada" },
      { src: "/images/cases/unifaahf-vestibular-2026-1/07.webp", alt: "Estudante de óculos e jaleco sorrindo ao lado de um modelo de esqueleto" },
      { src: "/images/cases/unifaahf-vestibular-2026-1/08.webp", alt: "Três formandos erguendo os canudos diante do prédio da instituição" },
    ],
    video: "siGJbQZec0c",
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
