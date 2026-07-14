"use client";

import { useLanguage } from "@/context/LanguageContext";
import { BrandMark } from "./BrandMark";

export function About() {
  const { t } = useLanguage();

  return (
    <section className="about section" id="about">
      <div className="wrap about__inner">
        <BrandMark className="brand__mark--lg" />
        <p className="serif-name">PARASTO</p>
        <p className="brand__tag brand__tag--dark">{t("tagline")}</p>
        <p className="about__text">{t("about_p1")}</p>
        <p className="about__text">{t("about_p2")}</p>
      </div>
    </section>
  );
}
