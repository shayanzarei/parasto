import type { Metadata } from "next";
import { TermsPage } from "@/components/TermsPage";
import { clinic, heroImage, siteUrl } from "@/data/clinic";

const title = "Algemene Voorwaarden & Huisregels — Pari Skin Clinic";
const description =
  "Algemene voorwaarden en huisregels van Pari Skin Clinic in Rotterdam: afspraken, annulering, aanbetalingen, nazorg, privacy en aansprakelijkheid.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title,
    description,
    url: `${siteUrl}/terms`,
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

export default function Terms() {
  return <TermsPage />;
}
