import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site } from "@/lib/site";
import { serviceJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/jsonld";
import { services, hasRealFaq } from "@/content/services";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { WhatsAppCta } from "@/components/WhatsAppCta";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((p) => ({ pillar: p.slug }));
}

type Props = { params: Promise<{ pillar: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { pillar } = await params;
  const p = services.find((s) => s.slug === pillar);
  if (!p) return {};
  const description = `${p.summary} Atendimento em Luís Eduardo Magalhães e região.`;
  const path = `/${p.slug}/`;
  return {
    title: p.title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: site.name,
      url: path,
      title: p.title,
      description,
      images: [{ url: "/og-default.png", width: 1200, height: 630, alt: site.name }],
    },
  };
}

export default async function PillarPage({ params }: Props) {
  const { pillar } = await params;
  const p = services.find((s) => s.slug === pillar);
  if (!p) notFound();

  const url = `${site.url}/${p.slug}/`;
  const others = services.filter((s) => s.slug !== p.slug);
  const jsonLd = [
    serviceJsonLd({ name: p.title, description: p.summary, url }),
    breadcrumbJsonLd([
      { name: "Início", url: `${site.url}/` },
      { name: p.title, url },
    ]),
    ...(hasRealFaq(p) ? [faqJsonLd(p.faq)] : []),
  ];

  return (
    <>
      {jsonLd.map((d, i) => (
        <JsonLd key={i} data={d} />
      ))}
      <article className="px-4 py-12">
        <Reveal>
          <h1 className="text-3xl font-bold">{p.title} em Luís Eduardo Magalhães e região</h1>
          <p className="mt-4">{p.summary}</p>
          <ul className="mt-6 list-disc pl-5">
            {p.items.map((i) => (
              <li key={i}>
                <h2 className="text-xl font-semibold">{i}</h2>
              </li>
            ))}
          </ul>
          <p className="mt-6">Atendimento em {site.cities.join(", ")}.</p>
          {hasRealFaq(p) && (
            <section className="mt-8" aria-labelledby="faq">
              <h2 id="faq" className="text-2xl font-bold">Perguntas frequentes</h2>
              {p.faq.map((f) => (
                <div key={f.question} className="mt-4">
                  <h3 className="font-semibold">{f.question}</h3>
                  <p>{f.answer}</p>
                </div>
              ))}
            </section>
          )}
          <div className="mt-8">
            <WhatsAppCta service={p.title} />
          </div>
          <nav className="mt-10" aria-label="Outros serviços">
            <h2 className="text-xl font-bold">Outros serviços</h2>
            <ul className="mt-3 list-disc pl-5">
              {others.map((s) => (
                <li key={s.slug}>
                  <Link href={`/${s.slug}/`} className="underline">{s.title}</Link>
                </li>
              ))}
              <li>
                <Link href="/portfolio/" className="underline">Portfólio</Link>
              </li>
            </ul>
          </nav>
        </Reveal>
      </article>
    </>
  );
}
