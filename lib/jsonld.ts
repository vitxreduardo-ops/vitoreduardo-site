import { site, stateNames } from "./site";

export type ServiceInput = { name: string; description: string; url: string };

const areaServed = () => site.cities.map((c) => ({
    "@type": "City",
    name: c.name,
    containedInPlace: { "@type": "State", name: stateNames[c.uf] },
  }));

export function professionalServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    url: site.url,
    telephone: site.phone,
    areaServed: areaServed(),
    sameAs: [site.instagramUrl],
    founder: { "@type": "Person", name: site.personName },
  };
}

export function serviceJsonLd(service: ServiceInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: service.url,
    areaServed: areaServed(),
    provider: {
      "@type": "ProfessionalService",
      name: site.name,
      url: site.url,
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

export function faqJsonLd(faq: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.personName,
    jobTitle: "Filmmaker e Marcas",
    url: `${site.url}/sobre/`,
    sameAs: [site.instagramUrl],
    worksFor: { "@type": "ProfessionalService", name: site.name, url: site.url },
  };
}
