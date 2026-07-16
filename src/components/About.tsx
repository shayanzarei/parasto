"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { aboutImage, clinic } from "@/data/clinic";
import { SmartImage } from "./SmartImage";

export function About() {
  const { t, lang } = useLanguage();
  const p = clinic.philosophy;

  return (
    <section className="home-about section" id="about" aria-labelledby="home-about-heading">
      <div className="wrap home-about__grid">
        <figure className="home-about__media">
          <SmartImage
            src={aboutImage.path}
            fallbackSeed="pari-home-about"
            alt={t("about_image_alt")}
            sizes="(max-width: 860px) 100vw, 420px"
          />
          <figcaption className="visually-hidden">{t("about_image_alt")}</figcaption>
        </figure>
        <div className="home-about__body">
          <p className="eyebrow">{clinic.name}</p>
          <h2 id="home-about-heading" className="home-about__title">
            {t("home_about_title")}
          </h2>
          <p className="home-about__text">{p.intro[lang]}</p>
          <p className="home-about__text">{p.approach[lang]}</p>
          <Link href="/about" className="tcard__link">
            {t("read_more")}
          </Link>
        </div>
      </div>
    </section>
  );
}
