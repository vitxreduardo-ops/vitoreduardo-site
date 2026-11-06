"use client";

import { useEffect } from "react";

const pad = (n: number) => String(Math.floor(n)).padStart(2, "0");
const tc = (s: number) => `${pad(s / 3600)}:${pad((s / 60) % 60)}:${pad(s % 60)}:${pad((s % 1) * 24)}`;

// Efeitos de rolagem: timecode no header e palavras que acendem em .reveal-words.
// Sem JS tudo aparece normal (o escurecimento só vale com a classe .js).
export function ScrollFx() {
  useEffect(() => {
    document.documentElement.classList.add("js");
    const clock = document.querySelector<HTMLElement>("[data-tc]");
    const blocks = [...document.querySelectorAll<HTMLElement>(".reveal-words")];

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      if (clock) clock.textContent = tc((227 * scrollY) / Math.max(max, 1));
      for (const el of blocks) {
        const r = el.getBoundingClientRect();
        const p = Math.min(Math.max((innerHeight * 0.85 - r.top) / (r.height + innerHeight * 0.4), 0), 1);
        const words = el.querySelectorAll(".w");
        const k = Math.round(p * words.length);
        words.forEach((w, i) => w.classList.toggle("on", i < k));
      }
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onScroll);
    return () => {
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", onScroll);
    };
  }, []);
  return null;
}
