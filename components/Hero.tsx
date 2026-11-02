import { WhatsAppCta } from "./WhatsAppCta";

// Primeiro bloco fora de Reveal: visível sem JS (ruling 14).
export function Hero() {
  return (
    <section className="px-4 py-16">
      <h1 className="text-4xl font-bold">Vitor Eduardo - Filmmaker e Marcas</h1>
      <p className="mt-4 max-w-prose text-lg">
        Marca, estratégia, conteúdo e campanhas em Luís Eduardo Magalhães e região.
      </p>
      <div className="mt-8">
        <WhatsAppCta />
      </div>
    </section>
  );
}
