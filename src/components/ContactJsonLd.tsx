import {
  bookingUrl,
  clinic,
  heroImage,
  mapsUrl,
  siteUrl,
  socialLinks,
} from "@/data/clinic";

function parseOpeningHours() {
  const dayLookup: Record<string, string> = {
    Monday: "Monday",
    Tuesday: "Tuesday",
    Wednesday: "Wednesday",
    Thursday: "Thursday",
    Friday: "Friday",
    Saturday: "Saturday",
    Sunday: "Sunday",
  };

  return clinic.hours.map((row) => {
    const days = row.days.en
      .split("&")
      .map((part) => part.trim())
      .map((part) => dayLookup[part] ?? part);
    const [opens, closes] = row.time.split("–").map((part) => part.trim());

    return {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: days,
      opens,
      closes,
    };
  });
}

export function ContactJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${siteUrl}/contact#clinic`,
    name: clinic.name,
    url: `${siteUrl}/contact`,
    image: [`${siteUrl}${heroImage.path}`],
    description:
      "Contact Pari Skin Clinic in Rotterdam. Book an appointment for medical skin treatments, injectables and PMU.",
    telephone: [clinic.phone, clinic.phoneAlt],
    email: clinic.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: clinic.address.street,
      postalCode: "3071 AS",
      addressLocality: "Rotterdam",
      addressCountry: "NL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: clinic.address.coordinates.lat,
      longitude: clinic.address.coordinates.lng,
    },
    hasMap: mapsUrl,
    openingHoursSpecification: parseOpeningHours(),
    sameAs: [socialLinks.instagram, socialLinks.tiktok, mapsUrl],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: clinic.phone,
        contactType: "customer service",
        email: clinic.email,
        areaServed: "NL",
        availableLanguage: ["Dutch", "English"],
      },
    ],
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
