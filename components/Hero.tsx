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
        <div>
          <span className="small">Estratégia e direção criativa · 10 anos de mercado</span>
          <h1>
            Sua empresa é boa. <span>A marca precisa mostrar isso.</span>
          </h1>
          <p className="lead">
            Há 10 anos ajudo empresas a se posicionar e a parecer do tamanho que realmente têm. Começo pela
            estratégia e acompanho até a última peça no ar.
          </p>
          <div className="actions">
            <WhatsAppCta />
            <a className="btn-ghost" href="#processo">Ver como trabalho</a>
          </div>
        </div>
        <span className="small" style={{ textAlign: "right" }}>
          Luís Eduardo Magalhães, BA
          <br />
          e projetos remotos
        </span>
      </div>
    </section>
  );
}
