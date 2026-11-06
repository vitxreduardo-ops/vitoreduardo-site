"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Animações da home. Tudo aparece normal sem JS ou com movimento reduzido:
// o GSAP só define o estado inicial quando roda.
export function GsapFx() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const cleanups: (() => void)[] = [];
    const mm = gsap.matchMedia();

    // ---- interações que valem mesmo com movimento reduzido ----

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
    cleanups.push(() => filters?.removeEventListener("click", onFilter));

    // contador do carrossel
    const strip = document.querySelector<HTMLElement>("[data-strip]");
    const count = document.querySelector<HTMLElement>("[data-count]");
    const onStrip = () => {
      if (!strip || !count) return;
      const max = strip.scrollWidth - strip.clientWidth;
      const i = max > 0 ? Math.round((strip.scrollLeft / max) * (cards.length - 1)) : 0;
      count.textContent = `${String(i + 1).padStart(2, "0")} / ${String(cards.length).padStart(2, "0")}`;
    };
    strip?.addEventListener("scroll", onStrip, { passive: true });
    cleanups.push(() => strip?.removeEventListener("scroll", onStrip));

    // ---- animações (só sem prefers-reduced-motion) ----
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // hero: foto assenta, texto sobe em sequência, foto desce devagar na rolagem
      gsap.from(".hero-img", { scale: 1.12, duration: 1.8, ease: "power3.out" });
      gsap.from(".hero-body > div > *", { y: 40, opacity: 0, duration: 1, ease: "power3.out", stagger: 0.12, delay: 0.2 });
      gsap.to(".hero-img", { yPercent: 12, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });

      // cabeçalhos e textos de seção sobem ao entrar na tela
      gsap.utils.toArray<HTMLElement>(".head, .intro-line, .facts > div, .contact > *").forEach((el) => {
        gsap.from(el, { y: 40, opacity: 0, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 90%" } });
      });

      // linhas de serviço, etapas e clientes entram em cascata
      const show = (els: Element[], x: number) =>
        gsap.fromTo(els, { y: x ? 0 : 36, x, opacity: 0 }, { y: 0, x: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.08, overwrite: true });
      const cascade = (selector: string, x = 0) =>
        ScrollTrigger.batch(selector, {
          start: "top 90%",
          onEnter: (els) => show(els, x),
          onEnterBack: (els) => show(els, x),
        });
      gsap.set(".svc, .step, .clients li", { opacity: 0 });
      cascade(".svc");
      cascade(".step");
      cascade(".clients li", -24);

      // cards de trabalho sobem e a capa faz parallax dentro da moldura
      gsap.from(".card", { y: 80, opacity: 0, duration: 1, ease: "power3.out", stagger: 0.1, scrollTrigger: { trigger: "[data-strip]", start: "top 85%" } });
      gsap.utils.toArray<HTMLElement>(".vf .cover img").forEach((img) => {
        gsap.fromTo(img, { yPercent: -5 }, { yPercent: 5, ease: "none", scrollTrigger: { trigger: img, start: "top bottom", end: "bottom top", scrub: true } });
      });

      // logo do rodapé cresce ao chegar no fim
      gsap.from(".foot-logo", { scale: 0.85, opacity: 0, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: ".foot-logo", start: "top 95%" } });
    });

    // popover dos serviços: segue o cursor com atraso suave (só com mouse)
    mm.add("(hover: hover) and (min-width: 761px)", () => {
      const rows = [...document.querySelectorAll<HTMLElement>(".svc")];
      const pops = rows.map((row) => {
        const pop = row.querySelector<HTMLElement>(".svc-pop")!;
        document.body.appendChild(pop); // fora da linha, para o transform da animação não deslocar o fixed
        return pop;
      });
      const handlers = rows.map((row, i) => {
        const pop = pops[i];
        const x = gsap.quickTo(pop, "x", { duration: 0.45, ease: "power3" });
        const y = gsap.quickTo(pop, "y", { duration: 0.45, ease: "power3" });
        const move = (e: MouseEvent) => { x(e.clientX + 24); y(e.clientY - 24); };
        const enter = (e: MouseEvent) => {
          gsap.set(pop, { x: e.clientX + 24, y: e.clientY - 24 });
          gsap.to(pop, { autoAlpha: 1, scale: 1, rotate: 0, duration: 0.35, ease: "back.out(1.6)", overwrite: "auto" });
        };
        const leave = () => gsap.to(pop, { autoAlpha: 0, scale: 0.85, rotate: -4, duration: 0.25, overwrite: "auto" });
        gsap.set(pop, { scale: 0.85, rotate: -4 });
        row.addEventListener("mousemove", move);
        row.addEventListener("mouseenter", enter);
        row.addEventListener("mouseleave", leave);
        return () => {
          row.removeEventListener("mousemove", move);
          row.removeEventListener("mouseenter", enter);
          row.removeEventListener("mouseleave", leave);
          row.appendChild(pop);
        };
      });
      return () => handlers.forEach((h) => h());
    });

    return () => {
      mm.revert();
      cleanups.forEach((c) => c());
    };
  }, []);
  return null;
}
