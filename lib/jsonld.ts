import { site } from "./site";

export type ServiceInput = { name: string; description: string; url: string };

const areaServed = () => site.cities.map((name) => ({ "@type": "City", name }));

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
