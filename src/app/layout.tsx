import type { Metadata } from "next";
import { Fraunces, Mulish } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

// Soft, warm display serif — the "SOFT" axis rounds the letter terminals
// so headings read gentle rather than sharp.
const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  variable: "--font-serif",
  display: "swap",
});

// Humanist, rounded sans for body copy and labels.
const mulish = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Parasto — Beauty Salon Rotterdam",
  description:
    "Parasto Beauty Salon in Rotterdam — Face, Hair, Body & Skin. Luxe behandelingen, visagie, laserontharing en huidverjonging.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body className={`${fraunces.variable} ${mulish.variable}`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
