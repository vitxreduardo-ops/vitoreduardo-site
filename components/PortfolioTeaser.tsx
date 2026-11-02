import Link from "next/link";
import { Reveal } from "./Reveal";

// PENDENTE: cases reais a definir pelo Vitor. Sem projetos ou clientes inventados.
export function PortfolioTeaser() {
  return (
    <section className="px-4 py-12" aria-labelledby="portfolio">
      <Reveal>
        <h2 id="portfolio" className="text-2xl font-bold">Portfólio</h2>
        <p className="mt-4 max-w-prose">Os cases estão sendo preparados e serão publicados em breve.</p>
        <Link href="/portfolio/" className="mt-4 inline-block underline">Ver portfólio</Link>
      </Reveal>
    </section>
  );
}
