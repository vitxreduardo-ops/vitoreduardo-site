import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site } from "@/lib/site";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { cases } from "@/content/cases";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { WhatsAppCta } from "@/components/WhatsAppCta";

export const dynamicParams = false;

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = cases.find((x) => x.slug === slug);
  if (!c) return {};
  const path = `/portfolio/${c.slug}/`;
  const title = `Case ${c.client}`;
  return {
    title,
    description: c.challenge,
    // PENDENTE: remover noindex quando houver conteúdo real
    robots: { index: false, follow: true },
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: site.name,
      url: path,
      title,
      description: c.challenge,
      images: [{ url: "/og-default.png", width: 1200, height: 630, alt: site.name }],
    },
  };
}

export default async function CasePage({ params }: Props) {
  const { slug } = await params;
  const c = cases.find((x) => x.slug === slug);
  if (!c) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Início", url: `${site.url}/` },
          { name: "Portfólio", url: `${site.url}/portfolio/` },
          { name: c.client, url: `${site.url}/portfolio/${c.slug}/` },
        ])}
      />
      <article className="px-4 py-12">
        <Reveal>
          <h1 className="text-3xl font-bold">{c.client}</h1>
          <section className="mt-6" aria-labelledby="desafio">
            <h2 id="desafio" className="text-2xl font-bold">Desafio</h2>
            <p className="mt-2">{c.challenge}</p>
          </section>
          <section className="mt-6" aria-labelledby="entrega">
            <h2 id="entrega" className="text-2xl font-bold">Entrega</h2>
            <p className="mt-2">{c.delivery}</p>
          </section>
          {c.media.map((m) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={m.src} src={m.src} alt={m.alt} className="mt-6 w-full" />
          ))}
          <div className="mt-8">
            <WhatsAppCta />
          </div>
          <p className="mt-8">
            <Link href="/portfolio/" className="underline">Voltar ao portfólio</Link>
          </p>
        </Reveal>
      </article>
    </>
  );
}
