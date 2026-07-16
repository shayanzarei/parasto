"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { serviceCategories } from "@/data/services";

export function CategoryPreview() {
  const { t, lang } = useLanguage();

  return (
    <section className="home-services section" id="services-preview" aria-labelledby="services-preview-heading">
      <div className="wrap">
        <h2 id="services-preview-heading" className="heading-gold">{t("services_heading")}</h2>
        <p className="section-intro">{t("services_intro")}</p>

        <ul className="cat-grid">
          {serviceCategories.map((cat) => (
            <li key={cat.id}>
              <Link href={`/services#${cat.id}`} className="cat-card">
                <h3 className="cat-card__title">{cat.name[lang]}</h3>
                <p className="cat-card__count">
                  {cat.items.length} {t("services_count_label")}
                </p>
                <span className="cat-card__link">{t("view_services")} →</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="section-cta">
          <Link href="/services" className="btn btn--dark">
            {t("all_services_btn")}
          </Link>
        </div>
      </div>
    </section>
  );
}
