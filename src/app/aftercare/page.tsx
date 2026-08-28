import type { Metadata } from "next";
import { AftercarePage } from "@/components/AftercarePage";
import { clinic, heroImage, siteUrl } from "@/data/clinic";

const title = "Nazorg Botox & Fillers — Pari Skin Clinic";
const description =
  "Nazorgadviezen na botox- en fillerbehandelingen bij Pari Skin Clinic in Rotterdam. Tips voor herstel, wat te vermijden en wanneer contact op te nemen.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/aftercare",
  },
  openGraph: {
    title,
    description,
    url: `${siteUrl}/aftercare`,
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

export default function Aftercare() {
  return <AftercarePage />;
}
