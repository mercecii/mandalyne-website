import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = "https://mandalyne-website.vercel.app";

export const metadata: Metadata = {
  title: {
    default: "Mandalyne — Jewelry Inspired by Symmetry",
    template: "%s | Mandalyne",
  },
  description:
    "Mandalyne — artificial fashion jewelry inspired by the geometry of mandalas. Shop rings, earrings, and necklaces. Buy on Amazon.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    siteName: "Mandalyne",
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    title: "Mandalyne — Jewelry Inspired by Symmetry",
    description:
      "Artificial fashion jewelry inspired by the geometry of mandalas. Shop rings, earrings & necklaces on Amazon.",
  },
  twitter: {
    card: "summary",
    title: "Mandalyne — Jewelry Inspired by Symmetry",
    description:
      "Artificial fashion jewelry inspired by the geometry of mandalas.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${cormorant.variable}`}>
      <body className="min-h-screen antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
