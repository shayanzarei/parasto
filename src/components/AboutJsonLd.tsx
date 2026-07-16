import {
  aboutImage,
  bookingUrl,
  clinic,
  siteUrl,
  socialLinks,
} from "@/data/clinic";

export function AboutJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${siteUrl}/about#clinic`,
    name: clinic.name,
    url: `${siteUrl}/about`,
    image: [`${siteUrl}${aboutImage.path}`],
    description: clinic.philosophy.intro.nl,
    founder: {
      "@type": "Person",
      name: clinic.founder,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: clinic.address.street,
      postalCode: "3071 AS",
      addressLocality: "Rotterdam",
      addressCountry: "NL",
    },
    email: clinic.email,
    telephone: clinic.phone,
    sameAs: [socialLinks.instagram, socialLinks.tiktok],
    areaServed: {
      "@type": "City",
      name: "Rotterdam",
    },
    makesOffer: clinic.philosophy.offerings.nl.map((item) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: item,
      },
    })),
    potentialAction: {
      "@type": "ReserveAction",
      target: bookingUrl,
      name: "Book appointment",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
