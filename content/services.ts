export type Pillar = {
  slug: string;
  title: string;
  summary: string;
  items: string[];
  faq: { question: string; answer: string }[];
};

const PENDENTE = "PENDENTE: resposta a definir pelo Vitor";

// Ordem importa: estratégia primeiro.
export const services: Pillar[] = [
  {
    slug: "estrategia",
    title: "Estratégia",
    summary:
      "Posicionamento, público e mensagem. É a primeira etapa de quase todo projeto e também pode ser contratada sozinha.",
    items: ["Posicionamento", "Estratégia de marketing"],
    faq: [
      { question: "O que é uma estratégia de marketing?", answer: PENDENTE },
      { question: "Por onde começar a divulgar meu negócio?", answer: PENDENTE },
    ],
  },
  {
    slug: "marca",
    title: "Marca",
    summary:
      "Identidade visual e manual de uso, para quando a empresa cresceu e a marca ainda tem cara de começo.",
    items: ["Construção de marca", "Identidade visual", "Manual de marca"],
    faq: [
      { question: "O que é um manual de marca?", answer: PENDENTE },
      { question: "O que inclui uma identidade visual?", answer: PENDENTE },
      { question: "Preciso de uma marca para começar a divulgar meu negócio?", answer: PENDENTE },
    ],
  },
  {
    slug: "conteudo",
    title: "Conteúdo",
    summary:
      "Filmes, peças gráficas e motion para redes, site e campanhas, produzidos com roteiro e planejados em lotes.",
    items: ["Produção audiovisual", "Design", "Motion design"],
    faq: [
      { question: "Que tipos de vídeo vocês produzem?", answer: PENDENTE },
      { question: "Como funciona a produção audiovisual para uma marca?", answer: PENDENTE },
    ],
  },
  {
    slug: "campanhas",
    title: "Campanhas",
    summary:
      "Lançamentos e datas importantes, com uma ideia central adaptada para cada canal onde ela vai rodar.",
    items: ["Campanhas publicitárias", "Campanhas para redes sociais"],
    faq: [
      { question: "Como funciona uma campanha publicitária?", answer: PENDENTE },
      { question: "Qual a diferença entre campanha publicitária e campanha para redes sociais?", answer: PENDENTE },
    ],
  },
  {
    slug: "sites",
    title: "Sites e sistemas",
    summary:
      "Sites institucionais e páginas de venda feitos para carregar rápido e aparecer no Google. Também desenvolvo sistemas simples, como agendamento e catálogo.",
    items: ["Sites institucionais", "Páginas de venda", "Sistemas sob medida"],
    faq: [],
  },
];

// FAQ só aparece (e só gera FAQPage) quando nenhuma resposta é PENDENTE.
export const hasRealFaq = (p: Pillar) =>
  p.faq.length > 0 && p.faq.every((f) => !f.answer.startsWith("PENDENTE"));
