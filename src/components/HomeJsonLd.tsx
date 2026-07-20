import {
  aboutImage,
  bookingUrl,
  clinic,
  heroImage,
  mapsUrl,
  siteUrl,
  socialLinks,
} from "@/data/clinic";
import { serviceCategories } from "@/data/services";

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

export function HomeJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: clinic.name,
        description: clinic.philosophy.intro.nl,
        inLanguage: ["nl-NL", "en"],
        publisher: { "@id": `${siteUrl}/#clinic` },
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#webpage`,
        url: siteUrl,
        name: "Pari Skin Clinic — Medische huidkliniek Rotterdam",
        description: clinic.philosophy.intro.nl,
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#clinic` },
        inLanguage: "nl-NL",
      },
      {
        "@type": "MedicalBusiness",
        "@id": `${siteUrl}/#clinic`,
        name: clinic.name,
        url: siteUrl,
        image: [
          `${siteUrl}${heroImage.path}`,
          `${siteUrl}${aboutImage.path}`,
        ],
        description: clinic.philosophy.intro.nl,
        founder: {
          "@type": "Person",
          name: clinic.founder,
        },
        telephone: clinic.phone,
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
        areaServed: {
          "@type": "City",
          name: "Rotterdam",
        },
        knowsLanguage: ["Dutch", "English"],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Pari Skin Clinic treatments",
          itemListElement: serviceCategories.map((category) => ({
            "@type": "OfferCatalog",
            name: category.name.nl,
            url: `${siteUrl}/services#${category.id}`,
          })),
        },
        potentialAction: {
          "@type": "ReserveAction",
          target: bookingUrl,
          name: "Book appointment",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
