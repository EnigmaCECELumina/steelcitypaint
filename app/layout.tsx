import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Footer, Header } from "@/components/SiteChrome";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

const SITE_URL = "https://www.steelcitypainting.ca";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Steel City Painting & Handyman | Hamilton, ON",
    template: "%s | Steel City Painting & Handyman",
  },
  description:
    "Interior and exterior painting and handyman repairs in Hamilton, Burlington, Ancaster, Dundas and Stoney Creek. Written estimates. Call 289-775-2020.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: SITE_URL,
    siteName: "Steel City Painting & Handyman",
    title: "Steel City Painting & Handyman | Hamilton, ON",
    description:
      "Careful painting and handyman work for Hamilton-area homes. Free written estimates.",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/favicon.svg" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en-CA">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Archivo:wght@400;500;600&family=JetBrains+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <a className="mobile-call" href="tel:+12897752020">Call 289-775-2020</a>
        <LocalBusinessSchema />
      </body>
    </html>
  );
}
