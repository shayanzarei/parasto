"use client";

import { useLanguage } from "@/context/LanguageContext";
import { SmartImage } from "./SmartImage";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero" aria-label="Intro">
      <div className="hero__bg">
        <SmartImage
          src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1920&q=80"
          fallbackSeed="salon-hero"
          alt=""
          sizes="100vw"
          priority
        />
      </div>
      <div className="hero__overlay" />
      <div className="hero__content">
        <p className="eyebrow eyebrow--light">{t("tagline")}</p>
        <h1 className="hero__title">{t("hero_title")}</h1>
        <a href="#contact" className="btn btn--ghost">
          {t("book")}
        </a>
      </div>
    </section>
  );
}
