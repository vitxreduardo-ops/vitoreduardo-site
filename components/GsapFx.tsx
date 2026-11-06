"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Animações de entrada da home. Sem JS tudo aparece normal (o GSAP só esconde ao rodar).
// Decisão do Vitor: as animações rodam sempre, mesmo com "Reduzir movimento" ligado no sistema.
export function GsapFx() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

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

    const refresh = () => ScrollTrigger.refresh();
    const ctx = gsap.context(() => {
        const dist = 40;

        // hero
        gsap.from(".hero-body > *", { y: dist, opacity: 0, duration: 1, ease: "power3.out", stagger: 0.12, delay: 0.15 });
        gsap.from(".hero-img", { scale: 1.08, duration: 1.6, ease: "power3.out" });
        gsap.to(".hero-img", { yPercent: 12, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });

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
        gsap.utils.toArray<HTMLElement>(".cover img").forEach((img) => {
          gsap.fromTo(img, { yPercent: -5 }, { yPercent: 5, ease: "none", scrollTrigger: { trigger: img, start: "top bottom", end: "bottom top", scrub: true } });
        });

    });
    // fontes e imagens mudam alturas depois do carregamento: recalcula os gatilhos
    addEventListener("load", refresh);
    document.fonts?.ready.then(refresh);

    return () => {
      ctx.revert();
      removeEventListener("load", refresh);
      filters?.removeEventListener("click", onFilter);
    };
  }, []);
  return null;
}
