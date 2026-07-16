"use client";

import { useLanguage } from "@/context/LanguageContext";

const COLS = [
  { title: "u1_title", text: "u1_text" },
  { title: "u2_title", text: "u2_text" },
  { title: "u3_title", text: "u3_text" },
];

export function Unique() {
  const { t } = useLanguage();

  return (
    <section className="home-pillars section section--tinted" aria-labelledby="pillars-heading">
      <div className="wrap">
        <h2 id="pillars-heading" className="heading-gold">
          {t("unique_heading")}
        </h2>
        <div className="home-pillars__grid">
          {COLS.map((col) => (
            <article className="home-pillar" key={col.title}>
              <span className="knot" aria-hidden="true" />
              <h3 className="home-pillar__title">{t(col.title)}</h3>
              <p className="home-pillar__text">{t(col.text)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
