import { site } from "@/lib/site";

export function WhatsAppCta({ service }: { service?: string }) {
  const text = service
    ? `Olá! Quero saber mais sobre os serviços de ${service}.`
    : "Olá! Vim pelo seu site e quero saber mais.";
  return (
    <a
      href={`${site.whatsappUrl}?text=${encodeURIComponent(text)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block rounded border border-current px-5 py-3"
    >
      Falar no WhatsApp
    </a>
  );
}
