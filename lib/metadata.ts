import type { Metadata } from "next";
import { site } from "./site";

export function pageMetadata({
  title,
  description,
  path,
  noindex,
}: {
  title?: string;
  description: string;
  path: string;
  noindex?: boolean;
}): Metadata {
  const social = title ? `${title} | ${site.name}` : site.name;
  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: site.name,
      url: path,
      title: social,
      description,
      images: [{ url: "/og-default.png", width: 1200, height: 630, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: social,
      description,
      images: ["/og-default.png"],
    },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}
