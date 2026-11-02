import { site, citiesSentence } from "@/lib/site";

export function Footer() {
  return (
    <footer className="px-6 py-8">
      <ul className="flex flex-wrap gap-x-6 gap-y-2">
        <li>
          <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">
            {site.instagramHandle}
          </a>
        </li>
        <li>
          <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
            WhatsApp {site.phoneDisplay}
          </a>
        </li>
      </ul>
      <p className="mt-4">Atendo em {citiesSentence}.</p>
    </footer>
  );
}
