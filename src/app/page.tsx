import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";
import { HomeJsonLd } from "@/components/HomeJsonLd";
import { aboutImage, clinic, heroImage, siteUrl } from "@/data/clinic";

const title = "Medische huidkliniek in Rotterdam — Pari Skin Clinic";
const description =
  "Pari Skin Clinic in Rotterdam — facials, microneedling, skin boosters, PMU, botox, fillers en plastisch chirurgisch advies. Medische expertise met natuurlijke resultaten.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: clinic.name,
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: heroImage.path,
        width: heroImage.width,
        height: heroImage.height,
        alt: "Pari Skin Clinic, medische huidkliniek in Rotterdam",
      },
      {
        url: aboutImage.path,
        width: aboutImage.width,
        height: aboutImage.height,
        alt: "Interieur van Pari Skin Clinic in Rotterdam",
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

export default function Home() {
  return (
    <>
      <HomeJsonLd />
      <HomePage />
    </>
  );
}
