"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Animações de entrada da home. Sem JS tudo aparece normal (o GSAP só esconde ao rodar).
// Com "Reduzir movimento" ligado no sistema, só há fade, sem deslocamento nem parallax.
export function GsapFx() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    // filtro dos trabalhos
    const filters = document.querySelector<HTMLElement>(".filters");
    const cards = [...document.querySelectorAll<HTMLElement>(".card")];
    const onFilter = (e: Event) => {
      const b = (e.target as HTMLElement).closest("button");
      if (!b) return;
      filters!.querySelectorAll("button").forEach((x) => x.classList.toggle("on", x === b));
      const f = b.dataset.f!;
      cards.forEach((c) => c.classList.toggle("off", f !== "all" && !(c.dataset.r ?? "").split(" ").includes(f)));
    };
    filters?.addEventListener("click", onFilter);

    mm.add(
      { full: "(prefers-reduced-motion: no-preference)", reduced: "(prefers-reduced-motion: reduce)" },
      (ctx) => {
        const full = Boolean(ctx.conditions?.full);
        const dist = full ? 40 : 0;

        // hero
        gsap.from(".hero-body > *", { y: dist, opacity: 0, duration: 1, ease: "power3.out", stagger: 0.12, delay: 0.15 });
        if (full) {
          gsap.from(".hero-img", { scale: 1.08, duration: 1.6, ease: "power3.out" });
          gsap.to(".hero-img", { yPercent: 12, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
        }

        // blocos que entram juntos ao chegar na tela
        gsap.utils.toArray<HTMLElement>(".head, .about > *, .contact > *, .foot-logo").forEach((el) => {
          gsap.from(el, { y: dist, opacity: 0, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%", once: true } });
        });

        // listas entram em cascata
        for (const sel of [".svc", ".step", ".clients li", ".card"]) {
          gsap.set(sel, { opacity: 0, y: dist });
          ScrollTrigger.batch(sel, {
            start: "top 92%",
            once: true,
            onEnter: (els) => gsap.to(els, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.09, overwrite: true }),
          });
        }

        // capas dos trabalhos com parallax leve dentro do card
        if (full) {
          gsap.utils.toArray<HTMLElement>(".cover img").forEach((img) => {
            gsap.fromTo(img, { yPercent: -5 }, { yPercent: 5, ease: "none", scrollTrigger: { trigger: img, start: "top bottom", end: "bottom top", scrub: true } });
          });
        }

        // fontes e imagens mudam alturas depois do carregamento: recalcula os gatilhos
        const refresh = () => ScrollTrigger.refresh();
        addEventListener("load", refresh);
        document.fonts?.ready.then(refresh);
        return () => removeEventListener("load", refresh);
      },
    );

    return () => {
      mm.revert();
      filters?.removeEventListener("click", onFilter);
    };
  }, []);
  return null;
}
