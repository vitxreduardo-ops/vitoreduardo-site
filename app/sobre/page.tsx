import type { Metadata } from "next";
import { site } from "@/lib/site";
import { personJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/metadata";
import { ready } from "@/content/readiness";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppCta } from "@/components/WhatsAppCta";

const title = "Sobre Vitor Eduardo";
const description =
  "Sobre Vitor Eduardo: 10 anos de estratégia e direção criativa para marcas, em Luís Eduardo Magalhães (BA).";
const path = "/sobre/";

// PENDENTE: aprovar texto com o Vitor (descrição)
export const metadata: Metadata = pageMetadata({
  title,
  description,
  path,
  noindex: !ready.sobre, // PENDENTE: remover noindex quando houver conteúdo real (content/readiness.ts)
});

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
        <h1 className="text-3xl font-bold">Sobre Vitor Eduardo</h1>
        <p className="mt-4">PENDENTE: texto sobre o Vitor</p>
        <div className="mt-8">
          <WhatsAppCta />
        </div>
      </section>
    </>
  );
}
