import type { Metadata } from "next";
import { site, cityLabel, citiesSentence } from "@/lib/site";
import { professionalServiceJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { WhatsAppCta } from "@/components/WhatsAppCta";

const title = "Atendimento em Luís Eduardo Magalhães e região";
const description = `Onde ${site.name} atende: ${citiesSentence}.`;
const path = "/atendimento/";

export const metadata: Metadata = pageMetadata({ title, description, path });

export default function AtendimentoPage() {
  return (
    <>
      <JsonLd data={professionalServiceJsonLd()} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Início", url: `${site.url}/` },
          { name: "Atendimento", url: `${site.url}${path}` },
        ])}
      />
      <section className="px-4 py-12">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="mt-4">
          {site.name} atende em {citiesSentence}.
        </p>
        <div className="mt-8">
          <WhatsAppCta />
        </div>
        <Reveal>
          <h2 className="mt-8 text-2xl font-bold">Cidades atendidas</h2>
          <ul className="mt-4 list-disc pl-5">
            {site.cities.map((c) => (
              <li key={c.name}>{cityLabel(c)}</li>
            ))}
          </ul>
          <p className="mt-6">
            WhatsApp:{" "}
            <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" className="underline">
              {site.phoneDisplay}
            </a>
          </p>
          <p>
            Instagram:{" "}
            <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="underline">
              {site.instagramHandle}
            </a>
          </p>
        </Reveal>
      </section>
    </>
  );
}
