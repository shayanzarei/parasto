import type { Metadata } from "next";
import { Lato, Rubik } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { LanguageProvider } from "@/context/LanguageContext";
import { clinic, siteUrl } from "@/data/clinic";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-lato",
  display: "swap",
});

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${clinic.name} — Medical Skin Clinic Rotterdam`,
    template: `%s | ${clinic.name}`,
  },
  description:
    "Pari Skin Clinic in Rotterdam — facials, microneedling, skin boosters, PMU, botox, fillers and plastic surgery consultation. Where medical expertise meets natural beauty.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="nl"
      className={`${lato.variable} ${rubik.variable}`}
      suppressHydrationWarning
    >
      <body className={lato.className} suppressHydrationWarning>
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
