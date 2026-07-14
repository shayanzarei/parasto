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
    <section className="unique section section--tinted">
      <div className="wrap">
        <h2 className="heading-gold">{t("unique_heading")}</h2>
        <div className="unique__grid">
          {COLS.map((col) => (
            <article className="unique__col" key={col.title}>
              <span className="knot" aria-hidden="true" />
              <p className="sub-label">
                <span>{t(col.title)}</span>
              </p>
              <p className="unique__text">{t(col.text)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
