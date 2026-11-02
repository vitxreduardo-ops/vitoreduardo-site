export type Pillar = {
  slug: string;
  title: string;
  summary: string;
  items: string[];
  faq: { question: string; answer: string }[];
};

const PENDENTE = "PENDENTE: resposta a definir pelo Vitor";

export const services: Pillar[] = [
  {
    slug: "marca",
    title: "Marca",
    summary:
      "Construção da marca desde a base: o que ela é, como se apresenta e como mantém a mesma cara em todos os lugares.",
    items: ["Construção de marca", "Identidade visual", "Manual de marca"],
    faq: [
      { question: "O que é um manual de marca?", answer: PENDENTE },
      { question: "O que inclui uma identidade visual?", answer: PENDENTE },
      { question: "Preciso de uma marca para começar a divulgar meu negócio?", answer: PENDENTE },
    ],
  },
  {
    slug: "estrategia",
    title: "Estratégia",
    summary:
      "Planejamento de marketing que define para quem a marca fala, o que comunica e por quais canais.",
    items: ["Estratégia de marketing"],
    faq: [
      { question: "O que é uma estratégia de marketing?", answer: PENDENTE },
      { question: "Por onde começar a divulgar meu negócio?", answer: PENDENTE },
    ],
  },
  {
    slug: "conteudo",
    title: "Conteúdo",
    summary:
      "Produção de vídeo e peças de design que dão forma à marca nas redes sociais e em outros canais.",
    items: ["Produção audiovisual", "Design"],
    faq: [
      { question: "Que tipos de vídeo vocês produzem?", answer: PENDENTE },
      { question: "Como funciona a produção audiovisual para uma marca?", answer: PENDENTE },
    ],
  },
  {
    slug: "campanhas",
    title: "Campanhas",
    summary:
      "Campanhas publicitárias e campanhas para redes sociais, com ideia, conteúdo e comunicação pensados para um objetivo.",
    items: ["Campanhas publicitárias", "Campanhas para redes sociais"],
    faq: [
      { question: "Como funciona uma campanha publicitária?", answer: PENDENTE },
      { question: "Qual a diferença entre campanha publicitária e campanha para redes sociais?", answer: PENDENTE },
    ],
  },
];

// FAQ só aparece (e só gera FAQPage) quando nenhuma resposta é PENDENTE.
export const hasRealFaq = (p: Pillar) =>
  p.faq.length > 0 && p.faq.every((f) => !f.answer.startsWith("PENDENTE"));
