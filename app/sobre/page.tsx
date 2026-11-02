import type { Metadata } from "next";
import { site } from "@/lib/site";
import { personJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { WhatsAppCta } from "@/components/WhatsAppCta";

const title = "Sobre Vitor Eduardo";
const description =
  "Conheça Vitor Eduardo, filmmaker e estrategista de marcas em Luís Eduardo Magalhães (BA).";
const path = "/sobre/";

export const metadata: Metadata = {
  title,
  description,
  // PENDENTE: remover noindex quando houver conteúdo real
  robots: { index: false, follow: true },
  alternates: { canonical: path },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: site.name,
    url: path,
    title,
    description,
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: site.name }],
  },
};

export default function SobrePage() {
  return (
    <>
      <JsonLd data={personJsonLd()} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Início", url: `${site.url}/` },
          { name: title, url: `${site.url}${path}` },
        ])}
      />
      <section className="px-4 py-12">
        <Reveal>
          <h1 className="text-3xl font-bold">Sobre Vitor Eduardo</h1>
          <p className="mt-4">PENDENTE: texto sobre o Vitor</p>
          <div className="mt-8">
            <WhatsAppCta />
          </div>
        </Reveal>
      </section>
    </>
  );
}
