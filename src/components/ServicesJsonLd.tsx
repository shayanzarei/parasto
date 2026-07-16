import { bookingUrl, clinic, heroImage, servicesImage, siteUrl } from "@/data/clinic";
import { serviceCategories } from "@/data/services";

export function ServicesJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${siteUrl}/services#clinic`,
    name: clinic.name,
    url: `${siteUrl}/services`,
    image: [`${siteUrl}${servicesImage.path}`, `${siteUrl}${heroImage.path}`],
    description:
      "Medical skin clinic in Rotterdam offering facials, peelings, microneedling, skin boosters, PMU, botox and fillers.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Pari Skin Clinic treatments",
      itemListElement: serviceCategories.flatMap((category, categoryIndex) =>
        category.items.map((item, itemIndex) => ({
          "@type": "Offer",
          position: categoryIndex * 100 + itemIndex + 1,
          itemOffered: {
            "@type": "Service",
            name: item.name.en,
            category: category.name.en,
            description: item.description?.en,
          },
          price: item.price,
          priceCurrency: "EUR",
          priceSpecification:
            item.price === 0
              ? {
                  "@type": "PriceSpecification",
                  price: 0,
                  priceCurrency: "EUR",
                  description: "Free intake",
                }
              : undefined,
          availability: "https://schema.org/InStock",
          url: `${siteUrl}/services#${category.id}`,
        })),
      ),
    },
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
