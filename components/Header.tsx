import Link from "next/link";

const links = [
  ["/marca/", "Marca"],
  ["/estrategia/", "Estratégia"],
  ["/conteudo/", "Conteúdo"],
  ["/campanhas/", "Campanhas"],
  ["/portfolio/", "Portfólio"],
  ["/sobre/", "Sobre"],
  ["/atendimento/", "Atendimento"],
] as const;

export function Header() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 px-6 py-4">
      <Link href="/" className="font-semibold">
        Vitor Eduardo
      </Link>
      <nav aria-label="Principal">
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {links.map(([href, label]) => (
            <li key={href}>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
