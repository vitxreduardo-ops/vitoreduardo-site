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

    // popover com foto nas linhas de serviços e cases: segue o cursor com atraso suave
    const pop = document.querySelector<HTMLElement>(".hover-pop");
    const popImg = pop?.querySelector("img");
    const rows = [...document.querySelectorAll<HTMLElement>("[data-pop]")];
    const popOff: (() => void)[] = [];
    if (pop && popImg && matchMedia("(hover: hover) and (min-width: 761px)").matches) {
      gsap.set(pop, { scale: 0.85, rotate: -3 });
      const x = gsap.quickTo(pop, "x", { duration: 0.5, ease: "power3" });
      const y = gsap.quickTo(pop, "y", { duration: 0.5, ease: "power3" });
      const place = (e: MouseEvent) => [e.clientX + 28, e.clientY - pop.offsetHeight / 2] as const;
      for (const row of rows) {
        const enter = (e: MouseEvent) => {
          const src = row.dataset.pop;
          if (src) popImg.setAttribute("src", src);
          else popImg.removeAttribute("src");
          pop.style.setProperty("--pop-tone", row.dataset.tone ?? "");
          const [px, py] = place(e);
          gsap.set(pop, { x: px, y: py });
          gsap.to(pop, { autoAlpha: 1, scale: 1, rotate: 0, duration: 0.35, ease: "back.out(1.6)", overwrite: "auto" });
        };
        const move = (e: MouseEvent) => {
          const [px, py] = place(e);
          x(px);
          y(py);
        };
        const leave = () => gsap.to(pop, { autoAlpha: 0, scale: 0.85, rotate: -3, duration: 0.25, overwrite: "auto" });
        row.addEventListener("mouseenter", enter);
        row.addEventListener("mousemove", move);
        row.addEventListener("mouseleave", leave);
        popOff.push(() => {
          row.removeEventListener("mouseenter", enter);
          row.removeEventListener("mousemove", move);
          row.removeEventListener("mouseleave", leave);
        });
      }
    }

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
      popOff.forEach((off) => off());
    };
  }, []);
  return null;
}
