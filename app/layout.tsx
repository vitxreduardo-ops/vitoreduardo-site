import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { site } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MotionProvider } from "@/components/MotionProvider";
import { ScrollFx } from "@/components/ScrollFx";
import { Inter_Tight, Instrument_Serif, JetBrains_Mono } from "next/font/google";

const sans = Inter_Tight({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-sans" });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", variable: "--font-serif" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: "400", variable: "--font-mono" });

const description =
  "Vitor Eduardo: estratégia e direção criativa para marcas há 10 anos. Marca, conteúdo, campanhas e sites em Luís Eduardo Magalhães (BA) e região.";

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
    images: ["/og-default.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
      <body>
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:text-black"
        >
          Pular para o conteúdo
        </a>
        <Header />
        <MotionProvider>
          <main id="conteudo">{children}</main>
        </MotionProvider>
        <Footer />
        <ScrollFx />
      </body>
    </html>
  );
}
