import type { Metadata } from "next";
import { professionalServiceJsonLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/JsonLd";
import { Hero } from "@/components/Hero";
import { ServicesGrid } from "@/components/ServicesGrid";
import { PortfolioTeaser } from "@/components/PortfolioTeaser";
import { RegionBlock } from "@/components/RegionBlock";

// PENDENTE: aprovar texto com o Vitor
export const metadata: Metadata = pageMetadata({
  description:
    "Vitor Eduardo - Filmmaker e Marcas em Luís Eduardo Magalhães (BA): marca, estratégia, conteúdo e campanhas.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <JsonLd data={professionalServiceJsonLd()} />
      <Hero />
      <ServicesGrid />
      <PortfolioTeaser />
      <RegionBlock />
    </>
  );
}
