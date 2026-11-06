export type Pillar = {
  slug: string;
  title: string;
  summary: string;
  items: string[];
  faq: { question: string; answer: string }[];
};

const PENDENTE = "PENDENTE: resposta a definir pelo Vitor";

// Ordem importa: tudo parte da estratégia; o resto executa a mesma direção.
export const services: Pillar[] = [
  {
    slug: "estrategia",
    title: "Estratégia",
    summary:
      "Para quem divulga, mas não sabe se está falando com as pessoas certas. Defino público, posicionamento e mensagem antes de qualquer peça ser produzida.",
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
      "Para empresas que cresceram e a marca ficou para trás. Identidade visual e regras de uso que fazem o negócio parecer do tamanho que ele realmente é.",
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
      "Filme, design e motion produzidos com direção, não no improviso. Material que sustenta a marca por meses, não só por um post.",
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
      "Lançamentos, datas e promoções com uma ideia central, roteiro e peças para cada canal. Pensadas para gerar resultado, não só alcance.",
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
      "Site rápido, bem posicionado no Google e com a cara da marca. Quando o negócio pede, sistemas sob medida: agendamento, catálogo e automações.",
    items: ["Sites institucionais", "Páginas de venda", "Sistemas sob medida"],
    faq: [],
  },
];

// FAQ só aparece (e só gera FAQPage) quando nenhuma resposta é PENDENTE.
export const hasRealFaq = (p: Pillar) =>
  p.faq.length > 0 && p.faq.every((f) => !f.answer.startsWith("PENDENTE"));
