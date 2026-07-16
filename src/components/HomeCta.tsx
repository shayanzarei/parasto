"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { bookingUrl } from "@/data/clinic";

export function HomeCta() {
  const { t } = useLanguage();

  return (
    <section className="home-cta section" aria-labelledby="home-cta-heading">
      <div className="wrap">
        <div className="home-cta__card">
          <h2 id="home-cta-heading" className="home-cta__title">
            {t("home_cta_title")}
          </h2>
          <p className="home-cta__text">{t("home_cta_text")}</p>
          <div className="home-cta__actions">
            <a
              href={bookingUrl}
              className="btn btn--fill"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("book")}
            </a>
            <Link href="/contact" className="btn btn--outline">
              {t("nav_contact")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
