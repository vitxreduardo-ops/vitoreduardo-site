import Link from "next/link";
import { Reveal } from "./Reveal";
import { services } from "@/content/services";

export function ServicesGrid() {
  return (
    <section className="px-4 py-12" aria-labelledby="servicos">
      <Reveal>
        <h2 id="servicos" className="text-2xl font-bold">Serviços</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {services.map((p) => (
            <Link key={p.slug} href={`/${p.slug}/`} className="block rounded border border-current p-5">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2">{p.summary}</p>
              <ul className="mt-3 list-disc pl-5">
                {p.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
