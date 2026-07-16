import type { Metadata } from "next";
import { ContactPage } from "@/components/ContactPage";
import { ContactJsonLd } from "@/components/ContactJsonLd";
import { clinic, heroImage, siteUrl } from "@/data/clinic";

const title = "Contact — Pari Skin Clinic Rotterdam";
const description =
  "Neem contact op met Pari Skin Clinic in Rotterdam. Lodewijk Pincoffsweg 386, openingstijden, telefoon, e-mail en online afspraak maken.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title,
    description,
    url: `${siteUrl}/contact`,
    siteName: clinic.name,
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: heroImage.path,
        width: heroImage.width,
        height: heroImage.height,
        alt: "Pari Skin Clinic in Rotterdam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [heroImage.path],
  },
};

export default function Contact() {
  return (
    <>
      <ContactJsonLd />
      <ContactPage />
    </>
  );
}
