import type { Metadata } from "next";
import { ServicesPage } from "@/components/ServicesPage";
import { ServicesJsonLd } from "@/components/ServicesJsonLd";
import { clinic, heroImage, servicesImage, siteUrl } from "@/data/clinic";

const title = "Diensten & prijzen — Pari Skin Clinic Rotterdam";
const description =
  "Volledig overzicht van behandelingen en prijzen bij Pari Skin Clinic in Rotterdam: facials, peelings, microneedling, skin boosters, PMU, botox en fillers.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title,
    description,
    url: `${siteUrl}/services`,
    siteName: clinic.name,
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: servicesImage.path,
        width: servicesImage.width,
        height: servicesImage.height,
        alt: "Treatment at Pari Skin Clinic in Rotterdam",
      },
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
    images: [servicesImage.path, heroImage.path],
  },
};

export default function Services() {
  return (
    <>
      <ServicesJsonLd />
      <ServicesPage />
    </>
  );
}
