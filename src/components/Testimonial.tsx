"use client";

import { useLanguage } from "@/context/LanguageContext";
import { siteUrl } from "@/data/clinic";

export function Testimonial() {
  const { t } = useLanguage();

  return (
    <section className="home-quote section" aria-labelledby="testimonial-heading">
      <div className="wrap home-quote__inner">
        <h2 id="testimonial-heading" className="visually-hidden">
          {t("testimonial_heading")}
        </h2>
        <span className="knot knot--light" aria-hidden="true" />
        <blockquote className="home-quote__text" cite={siteUrl}>
          <p>{t("quote")}</p>
        </blockquote>
      </div>
    </section>
  );
}
