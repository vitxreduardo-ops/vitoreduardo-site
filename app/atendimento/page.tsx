import type { Metadata } from "next";
import { site } from "@/lib/site";
import { professionalServiceJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { WhatsAppCta } from "@/components/WhatsAppCta";

const title = "Atendimento em Luís Eduardo Magalhães e região";
const description = `Onde ${site.name} atende: ${site.cities.join(", ")}.`;
const path = "/atendimento/";

export const metadata: Metadata = {
  title,
  description,
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
        <Reveal>
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="mt-4">
            {site.name} atende em {site.cities.join(", ")}.
          </p>
          <h2 className="mt-8 text-2xl font-bold">Cidades atendidas</h2>
          <ul className="mt-4 list-disc pl-5">
            {site.cities.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          <div className="mt-8">
            <WhatsAppCta />
          </div>
          <p className="mt-6">WhatsApp: 77 99822-0929</p>
          <p>
            Instagram:{" "}
            <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="underline">
              @vitxreduardo
            </a>
          </p>
        </Reveal>
      </section>
    </>
  );
}
