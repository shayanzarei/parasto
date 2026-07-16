"use client";

import { useLanguage } from "@/context/LanguageContext";
import {
  aboutImage,
  aboutServicesImage,
  bookingUrl,
  clinic,
} from "@/data/clinic";
import { PageHero } from "./PageHero";
import { SmartImage } from "./SmartImage";

export function AboutContent() {
  const { t, lang } = useLanguage();
  const p = clinic.philosophy;

  return (
    <article aria-labelledby="about-heading">
      <PageHero
        title={t("about_page_title")}
        subtitle={p.intro[lang]}
        headingId="about-heading"
      />

      <section className="section about-split">
        <div className="wrap about-split__grid">
          <figure className="about-split__media">
            <SmartImage
              src={aboutImage.path}
              fallbackSeed="pari-about-clinic"
              alt={t("about_image_alt")}
              sizes="(max-width: 860px) 300px, 360px"
            />
          </figure>
          <div className="about-split__text">
            <article className="about-block" aria-labelledby="about-founder-heading">
              <h2 id="about-founder-heading" className="about-block__label">
                {t("about_founder_label")}
              </h2>
              <p className="about-block__body">{p.founder[lang]}</p>
            </article>
            <article className="about-block" aria-labelledby="about-approach-heading">
              <h2 id="about-approach-heading" className="about-block__label">
                {t("about_approach_label")}
              </h2>
              <p className="about-block__body">{p.approach[lang]}</p>
            </article>
          </div>
        </div>
      </section>

      <section
        className="section about-offerings"
        aria-labelledby="about-offerings-heading"
      >
        <div className="wrap">
          <h2 id="about-offerings-heading" className="heading-gold">
            {t("about_offerings_title")}
          </h2>
          <ul className="about-pill-grid">
            {p.offerings[lang].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="section about-split about-split--wide"
        aria-labelledby="about-surgery-heading"
      >
        <div className="wrap about-split__grid about-split__grid--reverse">
          <div className="about-split__text">
            <article className="about-block" aria-labelledby="about-surgery-heading">
              <h2 id="about-surgery-heading" className="about-block__label">
                {t("about_surgery_title")}
              </h2>
              <p className="about-block__body">{p.surgery[lang]}</p>
            </article>
            <ul className="about-checklist" aria-label={t("about_surgery_title")}>
              {p.surgeryList[lang].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <figure className="about-split__media about-split__media--landscape">
            <SmartImage
              src={aboutServicesImage.path}
              fallbackSeed="pari-about-services"
              alt={t("about_services_image_alt")}
              sizes="(max-width: 860px) 100vw, 520px"
            />
          </figure>
        </div>
      </section>

      <section
        className="section about-vision"
        aria-labelledby="about-vision-heading"
      >
        <div className="wrap about-vision__inner">
          <article className="about-block about-block--center">
            <h2 id="about-vision-heading" className="about-block__label">
              {t("about_vision_label")}
            </h2>
            <p className="about-block__body">{p.vision[lang]}</p>
          </article>
          <p className="about-vision__closing">{p.closing[lang]}</p>
          <p className="about-vision__tagline">{clinic.tagline[lang]}</p>
          <div className="section-cta">
            <a
              href={bookingUrl}
              className="btn btn--fill"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("book")}
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}
