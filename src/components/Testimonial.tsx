"use client";

import { useLanguage } from "@/context/LanguageContext";

export function Testimonial() {
  const { t } = useLanguage();

  return (
    <section className="testimonial" aria-label="Review">
      <div className="wrap">
        <blockquote className="testimonial__quote">{t("quote")}</blockquote>
      </div>
    </section>
  );
}
