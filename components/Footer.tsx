import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="px-6 py-8">
      <ul className="flex flex-wrap gap-x-6 gap-y-2">
        <li>
          <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">
            @vitxreduardo
          </a>
        </li>
        <li>
          <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
            WhatsApp 77 99822-0929
          </a>
        </li>
      </ul>
      <p className="mt-4">Atendo em {site.cities.join(", ")}.</p>
    </footer>
  );
}
