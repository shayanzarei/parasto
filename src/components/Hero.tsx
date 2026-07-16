"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { bookingUrl, clinic, heroImage } from "@/data/clinic";
import { SmartImage } from "./SmartImage";

export function Hero() {
  const { t, lang } = useLanguage();

  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero__bg">
        <SmartImage
          src={heroImage.path}
          fallbackSeed="skin-clinic-hero"
          alt={t("hero_image_alt")}
          sizes="100vw"
          priority
        />
      </div>
      <div className="hero__overlay" aria-hidden="true" />
      <header className="hero__content">
        <p className="eyebrow eyebrow--light">{clinic.tagline[lang]}</p>
        <h1 id="hero-heading" className="hero__title">
          {t("hero_title")}
        </h1>
        <p className="hero__subtitle">{t("hero_subtitle")}</p>
        <div className="hero__actions">
          <a
            href={bookingUrl}
            className="btn btn--fill"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("book")}
          </a>
          <Link href="/services" className="btn btn--ghost">
            {t("all_services_btn")}
          </Link>
        </div>
      </header>
    </section>
  );
}
