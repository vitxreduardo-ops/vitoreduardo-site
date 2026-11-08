"use client";
import { useEffect, useRef } from "react";

// loop mudo de 5s por cima da capa do card; a capa aparece até o vídeo começar a tocar
export function CoverLoop({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true; // React não escreve o atributo muted no HTML do servidor
    v.play().catch(() => {});
  }, []);
  return (
    <video
      ref={ref}
      className="loop"
      src={src}
      muted
      loop
      autoPlay
      playsInline
      preload="auto"
      aria-hidden="true"
      onPlaying={(e) => e.currentTarget.classList.add("on")}
    />
  );
}
