"use client";

import type { ReactNode } from "react";
import { useLanguage } from "@/context/LanguageContext";

function MedicalIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="home-pillar__icon">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3l7 3v5c0 4.5-3 8.2-7 9.5C8 19.2 5 15.5 5 11V6l7-3z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        d="M12 9v6M9 12h6"
      />
    </svg>
  );
}

function AttentionIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="home-pillar__icon">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 19.5s-6.5-4.1-6.5-9A3.8 3.8 0 0 1 12 7.2 3.8 3.8 0 0 1 18.5 10.5c0 4.9-6.5 9-6.5 9z"
      />
    </svg>
  );
}

function AestheticsIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="home-pillar__icon">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 20V10.5M12 10.5c0-3.5 2.2-6 5-6-.5 3.5-2.5 5.5-5 6zm0 0c0-3.5-2.2-6-5-6 .5 3.5 2.5 5.5 5 6z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        d="M8 20h8"
      />
    </svg>
  );
}

const COLS: {
  title: "u1_title" | "u2_title" | "u3_title";
  text: "u1_text" | "u2_text" | "u3_text";
  icon: ReactNode;
}[] = [
  { title: "u1_title", text: "u1_text", icon: <MedicalIcon /> },
  { title: "u2_title", text: "u2_text", icon: <AttentionIcon /> },
  { title: "u3_title", text: "u3_text", icon: <AestheticsIcon /> },
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
              <span className="home-pillar__mark" aria-hidden="true">
                {col.icon}
              </span>
              <h3 className="home-pillar__title">{t(col.title)}</h3>
              <p className="home-pillar__text">{t(col.text)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
