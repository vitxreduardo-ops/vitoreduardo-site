import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { site } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const description =
  "Filmmaker e estrategista de marcas em Luís Eduardo Magalhães (BA): identidade de marca, estratégia, conteúdo e campanhas em vídeo para negócios da região.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s | ${site.name}` },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: site.name,
    url: "/",
    title: site.name,
    description,
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description,
    images: ["/og-default.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
