import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { cases } from "@/content/cases";
import { pageMetadata } from "@/lib/metadata";
import { ready } from "@/content/readiness";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { WhatsAppCta } from "@/components/WhatsAppCta";

const title = "Portfólio";
const description =
  "Portfólio de Vitor Eduardo: cases de identidade de marca, conteúdo e vídeo em Luís Eduardo Magalhães e região.";
const path = "/portfolio/";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path,
  noindex: !ready.portfolio, // PENDENTE: remover noindex quando houver conteúdo real (content/readiness.ts)
});

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
        <h1 className="text-3xl font-bold">Portfólio</h1>
        <p className="mt-4">Em preparação.</p>
        <div className="mt-8">
          <WhatsAppCta />
        </div>
        <Reveal>
          <ul className="mt-6 list-disc pl-5">
            {cases.map((c) => (
              <li key={c.slug}>
                <Link href={`/portfolio/${c.slug}/`} className="underline">{c.client}</Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>
    </>
  );
}
