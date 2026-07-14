"use client";

import { useLanguage } from "@/context/LanguageContext";
import { SmartImage } from "./SmartImage";

const CARDS = [
  {
    title: "t1_title",
    text: "t1_text",
    link: "t1_link",
    src: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=900&q=80",
    seed: "laser",
    reverse: false,
  },
  {
    title: "t2_title",
    text: "t2_text",
    link: "t2_link",
    src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80",
    seed: "facial",
    reverse: true,
  },
  {
    title: "t3_title",
    text: "t3_text",
    link: "t3_link",
    src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
    seed: "makeup",
    reverse: false,
  },
];

export function Treatments() {
  const { t } = useLanguage();

  return (
    <section className="treatments section" id="treatments">
      <div className="wrap">
        <h2 className="heading-gold">{t("treat_heading")}</h2>

        {CARDS.map((card) => (
          <article
            className={`tcard${card.reverse ? " tcard--reverse" : ""}`}
            key={card.title}
          >
            <div className="tcard__body">
              <h3 className="tcard__title">{t(card.title)}</h3>
              <p className="tcard__text">{t(card.text)}</p>
              <a href="#contact" className="tcard__link">
                {t(card.link)}
              </a>
            </div>
            <div className="tcard__media">
              <SmartImage
                src={card.src}
                fallbackSeed={card.seed}
                alt={t(card.title)}
                sizes="(max-width: 860px) 100vw, 50vw"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
