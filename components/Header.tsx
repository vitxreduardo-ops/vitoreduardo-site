import Link from "next/link";
import { site } from "@/lib/site";

const links = [
  ["/#servicos", "Serviços"],
  ["/#processo", "Como trabalho"],
  ["/atendimento/", "Atendimento"],
] as const;

export function Header() {
  return (
    <>
      <header className="site-header">
        <Link href="/" className="brand logo" aria-label="Vitor Eduardo, página inicial" />
        <nav aria-label="Principal">
          <ul>
            {links.map(([href, label]) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <a className="btn site-header-cta" href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
        Fale comigo
      </a>
    </>
  );
}
