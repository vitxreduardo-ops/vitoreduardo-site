import type { Metadata } from "next";
import Link from "next/link";
import { professionalServiceJsonLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/metadata";
import { citiesSentence } from "@/lib/site";
import { services } from "@/content/services";
import { JsonLd } from "@/components/JsonLd";
import { Hero } from "@/components/Hero";
import { WhatsAppCta } from "@/components/WhatsAppCta";

export const metadata: Metadata = pageMetadata({
  description:
    "Vitor Eduardo: estratégia e direção criativa para marcas há 10 anos. Marca, conteúdo, campanhas e sites em Luís Eduardo Magalhães (BA) e região.",
  path: "/",
});

const manifesto =
  "Empresa boa com marca amadora perde cliente para concorrente pior. Meu trabalho é corrigir isso: decidir o que a sua marca precisa dizer e garantir que cada peça diga a mesma coisa.";
const accent = "perde cliente para concorrente pior.";

const steps = [
  {
    name: "Diagnóstico",
    does: "Entendo o negócio, o público e o que está travando. Muitas vezes o problema não é o que parecia.",
    gets: "Um diagnóstico escrito, com as prioridades em ordem.",
  },
  {
    name: "Direção",
    does: "Defino posicionamento, conceito e o que vale a pena produzir. Nada é feito só porque está na moda.",
    gets: "Documento de direção e escopo fechado.",
  },
  {
    name: "Produção",
    does: "Marca, filme, peças e site executados sob a mesma direção. Você aprova cada etapa.",
    gets: "Material final, pronto para usar.",
  },
  {
    name: "Lançamento",
    does: "Coloco no ar, acompanho os primeiros resultados e ajusto o que precisar.",
    gets: "Arquivos organizados e acompanhamento após a entrega.",
  },
];

// Palavras em spans para o efeito de leitura; o trecho de destaque fica em verde.
function Words({ text, highlight }: { text: string; highlight: string }) {
  const start = text.indexOf(highlight);
  let pos = 0;
  return (
    <>
      {text.split(" ").map((w, i) => {
        const inAcc = pos >= start && pos < start + highlight.length;
        pos += w.length + 1;
        return (
          <span key={i} className={inAcc ? "w acc" : "w"}>
            {w}{" "}
          </span>
        );
      })}
    </>
  );
}

export default function Home() {
  return (
    <>
      <JsonLd data={professionalServiceJsonLd()} />
      <Hero />

      <section className="section" aria-labelledby="sobre">
        <div className="split">
          <h2 id="sobre" className="small">Por que isso importa</h2>
          <p className="big-text reveal-words">
            <Words text={manifesto} highlight={accent} />
          </p>
        </div>
        <div className="split">
          <span />
          <div className="facts">
            <div>
              <b>10 anos</b>
              <p>construindo marcas, campanhas e conteúdo para empresas de vários setores.</p>
            </div>
            <div>
              <b>1 direção</b>
              <p>do diagnóstico à entrega. Você fala direto com quem decide, sem repasse.</p>
            </div>
            <div>
              <b>Oeste da Bahia</b>
              <p>base em Luís Eduardo Magalhães, com projetos atendidos também à distância.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="servicos" aria-labelledby="servicos-titulo">
        <div className="head">
          <h2 id="servicos-titulo">O que eu resolvo</h2>
          <span>{String(services.length).padStart(2, "0")} frentes</span>
        </div>
        <p className="intro-line">
          Tudo parte da estratégia. Cada frente abaixo executa a mesma direção, não é um serviço avulso.
        </p>
        {services.map((s, i) => (
          <Link key={s.slug} href={`/${s.slug}/`} className="svc">
            <span className="num">{String(i + 1).padStart(2, "0")}</span>
            <h3>{s.title}</h3>
            <p>{s.summary}</p>
            <span className="arrow" aria-hidden="true">→</span>
          </Link>
        ))}
      </section>

      <section className="section" id="processo" aria-labelledby="processo-titulo">
        <div className="head">
          <h2 id="processo-titulo">Como trabalho</h2>
          <span>{String(steps.length).padStart(2, "0")} etapas</span>
        </div>
        <p className="intro-line">Projeto bom começa antes de qualquer câmera ligar ou arquivo abrir.</p>
        {steps.map((s, i) => (
          <div key={s.name} className="step">
            <h3>
              <small>{String(i + 1).padStart(2, "0")}</small>
              {s.name}
            </h3>
            <p>{s.does}</p>
            <p className="get">
              <b>Você recebe</b>
              {s.gets}
            </p>
          </div>
        ))}
      </section>

      <section className="contact" aria-labelledby="contato">
        <h2 id="contato">Vamos conversar sobre a sua marca?</h2>
        <p>
          Me conta em uma mensagem o que você precisa. Eu respondo pessoalmente. Atendo em {citiesSentence}, e
          projetos à distância.
        </p>
        <WhatsAppCta />
      </section>
    </>
  );
}
