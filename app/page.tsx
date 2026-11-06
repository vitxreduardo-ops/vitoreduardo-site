import type { Metadata } from "next";
import Link from "next/link";
import { professionalServiceJsonLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/metadata";
import { citiesSentence } from "@/lib/site";
import { services } from "@/content/services";
import { JsonLd } from "@/components/JsonLd";
import { Hero } from "@/components/Hero";
import { WhatsAppCta } from "@/components/WhatsAppCta";
import { GsapFx } from "@/components/GsapFx";
import { showcaseCases, showcaseClients } from "@/lib/showcase";

export const metadata: Metadata = pageMetadata({
  description:
    "Vitor Eduardo, estratégia e direção criativa em Luís Eduardo Magalhães (BA). Marca, filmes, campanhas e sites para empresas do oeste da Bahia.",
  path: "/",
});

const serviceTitle = Object.fromEntries(services.map((s) => [s.slug, s.title]));
// tons neutros para capas ainda sem imagem
const tones = ["#2E2B27", "#22201E", "#22302A", "#35312C", "#1E2622"];

const steps = [
  {
    name: "Conversa",
    does: "Uma reunião para entender o negócio, quem compra de você e o que já foi tentado até aqui.",
    gets: "Uma proposta com escopo e valor.",
  },
  {
    name: "Direção",
    does: "Analiso a marca, os concorrentes e os canais. Defino o posicionamento e o plano de produção.",
    gets: "Um documento de direção para você aprovar.",
  },
  {
    name: "Produção",
    does: "Executo o que foi aprovado, com revisões em cada entrega.",
    gets: "Os arquivos finais, organizados por canal.",
  },
  {
    name: "Entrega",
    does: "Publico ou passo o material para o seu time, com orientação de uso.",
    gets: "Suporte depois da entrega.",
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={professionalServiceJsonLd()} />
      <Hero />

      <section className="section" aria-labelledby="sobre">
        <div className="split">
          <h2 id="sobre" className="small">Sobre</h2>
          <div className="about">
            <p className="big-text">
              Comecei pelo design, passei pelo 3D e pelo motion e acabei mergulhando no audiovisual como um todo. São 10
              anos trabalhando com marcas.
            </p>
            <p className="about-more">
              Nesse caminho aprendi que a maioria dos problemas dos clientes não se resolve com uma peça mais bonita.
              Resolve com clareza sobre o que dizer e para quem. Por isso todo projeto começa por essa conversa, e só
              depois decidimos o que produzir.
            </p>
          </div>
        </div>
      </section>

      {showcaseCases.length > 0 && (
        <section className="section" id="trabalhos" aria-labelledby="trabalhos-titulo">
          <div className="head">
            <h2 id="trabalhos-titulo">Trabalhos</h2>
            <div className="filters" role="group" aria-label="Filtrar trabalhos">
              <button type="button" className="on" data-f="all">Todos</button>
              {services.map((s) => (
                <button type="button" key={s.slug} data-f={s.slug}>{s.title}</button>
              ))}
            </div>
          </div>
          <div className="strip">
            {showcaseCases.map((c, i) => {
              const card = (
                <>
                  <div className="cover" style={{ background: tones[i % tones.length] }}>
                    {c.cover && <img src={c.cover} alt={`${c.title ?? c.client}: capa do projeto`} loading="lazy" />}
                  </div>
                  <div className="meta">
                    <h3>{c.title ?? c.client}</h3>
                    {c.year && <span className="y">{c.year}</span>}
                    <span className="s">
                      {c.client}
                      {c.services?.length ? ` · ${c.services.map((x) => serviceTitle[x] ?? x).join(", ")}` : ""}
                    </span>
                  </div>
                </>
              );
              return c.ready ? (
                <Link key={c.slug} href={`/portfolio/${c.slug}/`} className="card" data-r={c.services?.join(" ")}>{card}</Link>
              ) : (
                <article key={c.slug} className="card" data-r={c.services?.join(" ")}>{card}</article>
              );
            })}
          </div>
        </section>
      )}

      <section className="section" id="servicos" aria-labelledby="servicos-titulo">
        <div className="head">
          <h2 id="servicos-titulo">Serviços</h2>
        </div>
        {services.map((s, i) => (
          <Link key={s.slug} href={`/${s.slug}/`} className="svc" data-pop={s.image ?? ""} data-tone={tones[i % tones.length]}>
            <h3>{s.title}</h3>
            <p>{s.summary}</p>
            <span className="arrow" aria-hidden="true">→</span>
          </Link>
        ))}
      </section>

      <section className="section" id="processo" aria-labelledby="processo-titulo">
        <div className="head">
          <h2 id="processo-titulo">Como trabalho</h2>
        </div>
        {steps.map((s, i) => (
          <div key={s.name} className="step">
            <h3>
              <small>{i + 1}</small>
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

      {showcaseClients.length > 0 && (
        <section className="section clients" aria-labelledby="clientes">
          <div className="split">
            <h2 id="clientes" className="small">Cases</h2>
            <ul>
              {showcaseClients.map((c, i) => (
                <li key={c.name} data-pop={c.image ?? ""} data-tone={tones[i % tones.length]}>
                  <b>{c.name}</b>
                  {c.work && <span>{c.work}</span>}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="contact" aria-labelledby="contato">
        <h2 id="contato">Me chama no WhatsApp.</h2>
        <p>
          Conta em poucas linhas o que a empresa faz e o que você precisa. Atendo em {citiesSentence}, e também à
          distância.
        </p>
        <WhatsAppCta />
      </section>
      {/* popover com foto que segue o cursor nas linhas de serviços e cases (desktop) */}
      <div className="hover-pop" aria-hidden="true">
        <img alt="" />
      </div>
      <GsapFx />
    </>
  );
}
