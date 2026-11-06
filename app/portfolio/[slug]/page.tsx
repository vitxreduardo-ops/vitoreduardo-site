import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site } from "@/lib/site";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { cases } from "@/content/cases";
import { pageMetadata } from "@/lib/metadata";
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
  return pageMetadata({
    title: `Case ${c.client}`,
    description: c.challenge,
    path: `/portfolio/${c.slug}/`,
    noindex: !c.ready, // PENDENTE: remover noindex quando houver conteúdo real (ready: true no case)
  });
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
      <article className="page">
        <h1 className="text-3xl font-bold">{c.client}</h1>
        <div className="mt-8">
          <WhatsAppCta />
        </div>
        <Reveal>
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
          <p className="mt-8">
            <Link href="/portfolio/" className="underline">Voltar ao portfólio</Link>
          </p>
        </Reveal>
      </article>
    </>
  );
}
