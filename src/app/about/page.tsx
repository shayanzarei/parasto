import type { Metadata } from "next";
import { AboutPage } from "@/components/AboutPage";
import { AboutJsonLd } from "@/components/AboutJsonLd";
import {
  aboutImage,
  aboutServicesImage,
  clinic,
  siteUrl,
} from "@/data/clinic";

const title = "Onze filosofie — Pari Skin Clinic Rotterdam";
const description =
  "Ontdek de filosofie van Pari Skin Clinic in Rotterdam. Medische huidzorg, injectables, PMU en persoonlijke behandelingen door Parastoo Jalili (Pari).";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title,
    description,
    url: `${siteUrl}/about`,
    siteName: clinic.name,
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: aboutImage.path,
        width: aboutImage.width,
        height: aboutImage.height,
        alt: "Pari Skin Clinic in Rotterdam",
      },
      {
        url: aboutServicesImage.path,
        width: aboutServicesImage.width,
        height: aboutServicesImage.height,
        alt: "Treatment room at Pari Skin Clinic in Rotterdam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [aboutImage.path],
  },
};

export default function About() {
  return (
    <>
      <AboutJsonLd />
      <AboutPage />
    </>
  );
}
