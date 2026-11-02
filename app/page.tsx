import type { Metadata } from "next";
import { site } from "@/lib/site";
import { professionalServiceJsonLd } from "@/lib/jsonld";
import { Hero } from "@/components/Hero";
import { ServicesGrid } from "@/components/ServicesGrid";
import { PortfolioTeaser } from "@/components/PortfolioTeaser";
import { RegionBlock } from "@/components/RegionBlock";

const description =
  "Filmmaker e estrategista de marcas em Luís Eduardo Magalhães (BA): identidade de marca, estratégia, conteúdo e campanhas em vídeo para negócios da região.";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: site.name,
    url: "/",
    title: site.name,
    description,
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: site.name }],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd()) }}
      />
      <Hero />
      <ServicesGrid />
      <PortfolioTeaser />
      <RegionBlock />
    </>
  );
}
