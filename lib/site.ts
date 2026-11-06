export const site = {
  name: "Vitor Eduardo - Estratégia e Direção Criativa",
  personName: "Vitor Eduardo",
  url: "https://vitoreduardo.com.br",
  phone: "+55 77 99822-0929",
  phoneDisplay: "77 99822-0929",
  whatsappUrl: "https://wa.me/5577998220929",
  instagramUrl: "https://www.instagram.com/vitxreduardo/",
  instagramHandle: "@vitxreduardo",
  // PENDENTE: Vitor confirmar que Taguatinga é a do Tocantins (TO)
  cities: [
    { name: "Luís Eduardo Magalhães", uf: "BA" },
    { name: "Barreiras", uf: "BA" },
    { name: "Taguatinga", uf: "TO" },
    { name: "Roda Velha", uf: "BA" },
    { name: "São Desidério", uf: "BA" },
  ],
} as const;

export type Site = typeof site;

export const stateNames = { BA: "Bahia", TO: "Tocantins" } as const;

export const cityLabel = (c: Site["cities"][number]) => `${c.name} (${c.uf})`;

// "A (BA), B (BA) e C (TO)"
export const citiesSentence = new Intl.ListFormat("pt-BR", { style: "long", type: "conjunction" }).format(
  site.cities.map(cityLabel),
);
