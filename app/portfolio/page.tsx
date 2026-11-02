import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { cases } from "@/content/cases";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { WhatsAppCta } from "@/components/WhatsAppCta";

const title = "Portfólio";
const description =
  "Portfólio de Vitor Eduardo - Filmmaker e Marcas: cases de identidade de marca, conteúdo e vídeo em Luís Eduardo Magalhães e região.";
const path = "/portfolio/";

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

export default function PortfolioPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Início", url: `${site.url}/` },
          { name: title, url: `${site.url}${path}` },
        ])}
      />
      <section className="px-4 py-12">
        <Reveal>
          <h1 className="text-3xl font-bold">Portfólio</h1>
          <p className="mt-4">Os cases estão sendo preparados e serão publicados aqui em breve.</p>
          <ul className="mt-6 list-disc pl-5">
            {cases.map((c) => (
              <li key={c.slug}>
                <Link href={`/portfolio/${c.slug}/`} className="underline">{c.client}</Link>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <WhatsAppCta />
          </div>
        </Reveal>
      </section>
    </>
  );
}
