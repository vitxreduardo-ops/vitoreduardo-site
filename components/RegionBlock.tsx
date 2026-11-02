import Link from "next/link";
import { Reveal } from "./Reveal";
import { site } from "@/lib/site";

export function RegionBlock() {
  return (
    <section className="px-4 py-12" aria-labelledby="regiao">
      <Reveal>
        <h2 id="regiao" className="text-2xl font-bold">Atendimento na região</h2>
        <ul className="mt-4 list-disc pl-5">
          {site.cities.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
        <Link href="/atendimento/" className="mt-4 inline-block underline">Ver área de atendimento</Link>
      </Reveal>
    </section>
  );
}
