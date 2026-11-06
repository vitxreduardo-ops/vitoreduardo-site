import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site } from "@/lib/site";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { cases } from "@/content/cases";
import { services } from "@/content/services";
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
    description: c.challenge ?? `Case ${c.client}${c.title ? `: ${c.title}` : ""}.`,
    path: `/portfolio/${c.slug}/`,
    noindex: !c.ready, // PENDENTE: remover noindex quando houver conteúdo real (ready: true no case)
  });
}

export default async function CasePage({ params }: Props) {
  const { slug } = await params;
  const c = cases.find((x) => x.slug === slug);
  if (!c) notFound();

  // sugestões no fim da página: os outros cases prontos
  const others = cases.filter((x) => x.ready && x.slug !== c.slug).slice(0, 3);
  const serviceTitle = Object.fromEntries(services.map((s) => [s.slug, s.title]));

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
        {c.title && <p>{c.title}</p>}
        {c.video && (
          <div className="video">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${c.video}`}
              title={`Vídeo: ${c.title ?? c.client}`}
              loading="lazy"
              allow="encrypted-media; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        )}
        <div className="mt-8">
          <WhatsAppCta />
        </div>
        <Reveal>
          {c.challenge && (
            <section className="mt-6" aria-labelledby="desafio">
              <h2 id="desafio" className="text-2xl font-bold">Desafio</h2>
              <p className="mt-2">{c.challenge}</p>
            </section>
          )}
          {c.delivery && (
            <section className="mt-6" aria-labelledby="entrega">
              <h2 id="entrega" className="text-2xl font-bold">Entrega</h2>
              <p className="mt-2">{c.delivery}</p>
            </section>
          )}
          {c.credits && (
            <section className="mt-6" aria-labelledby="creditos">
              <h2 id="creditos" className="text-2xl font-bold">Créditos</h2>
              {c.credits.map((line) => (
                <p key={line} className="mt-2">{line}</p>
              ))}
            </section>
          )}
          {c.media.length > 0 && (
            <div className="gallery">
              {c.media.map((m) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={m.src} src={m.src} alt={m.alt} width={1280} height={720} loading="lazy" />
              ))}
            </div>
          )}
          {others.length > 0 && (
            <section aria-labelledby="outros">
              <h2 id="outros">Outros trabalhos</h2>
              <div className="more">
                {others.map((o) => {
                  const img = o.cover ?? o.media[0]?.src;
                  return (
                    <Link key={o.slug} href={`/portfolio/${o.slug}/`} className="more-card">
                      <div className="more-cover">{img && <img src={img} alt="" loading="lazy" />}</div>
                      <div className="meta">
                        <h3>{o.title ?? o.client}</h3>
                        {o.year && <span className="y">{o.year}</span>}
                        <span className="s">
                          {o.client}
                          {o.services?.length ? ` · ${o.services.map((x) => serviceTitle[x] ?? x).join(", ")}` : ""}
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          )}
          <p className="mt-8">
            <Link href="/#trabalhos" className="underline">Ver todos os trabalhos</Link>
          </p>
        </Reveal>
      </article>
    </>
  );
}
