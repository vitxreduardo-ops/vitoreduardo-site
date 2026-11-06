import { WhatsAppCta } from "./WhatsAppCta";

// Primeiro bloco fora de Reveal: visível sem JS (ruling 14).
export function Hero() {
  return (
    <section className="hero">
      <img
        className="hero-img"
        src="/images/vitor-hero-2000.webp"
        srcSet="/images/vitor-hero-768.webp 768w, /images/vitor-hero-1200.webp 1200w, /images/vitor-hero-2000.webp 2000w"
        sizes="100vw"
        width={2000}
        height={1125}
        fetchPriority="high"
        alt="Vitor Eduardo sorrindo, sentado em estúdio, foto em preto e branco"
      />
      <div className="hero-body">
        <span className="small">Vitor Eduardo · Luís Eduardo Magalhães, BA</span>
        <h1>Estratégia e direção criativa para marcas do oeste da Bahia.</h1>
        <p className="lead">
          Trabalho com empresas que já vendem bem e querem uma marca à altura. Cuido do posicionamento e dirijo a
          produção das peças: identidade, filmes, campanhas e site.
        </p>
        <div className="actions">
          <WhatsAppCta />
          <a className="btn-ghost" href="#processo">Como trabalho</a>
        </div>
      </div>
    </section>
  );
}
