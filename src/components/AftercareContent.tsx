"use client";

import { useLanguage } from "@/context/LanguageContext";
import { aftercarePage } from "@/data/aftercare";
import { PageHero } from "./PageHero";

export function AftercareContent() {
  const { lang } = useLanguage();

  return (
    <article aria-labelledby="aftercare-heading">
      <PageHero title={aftercarePage.title[lang]} headingId="aftercare-heading" />

      <section className="section legal">
        <div className="wrap legal__inner">
          <div className="legal-section">
            {aftercarePage.intro.map((paragraph) => (
              <p key={paragraph.nl} className="legal-section__intro">
                {paragraph[lang]}
              </p>
            ))}
          </div>

          {aftercarePage.sections.map((section) => (
            <section
              key={section.id}
              className="legal-section"
              aria-labelledby={`aftercare-${section.id}`}
            >
              <h2 id={`aftercare-${section.id}`} className="legal-section__title">
                {section.title[lang]}
              </h2>
              <ul className="legal-list">
                {section.bullets.map((bullet) => (
                  <li key={bullet.nl}>{bullet[lang]}</li>
                ))}
              </ul>
            </section>
          ))}

          <section className="legal-section" aria-labelledby="aftercare-contact">
            <h2 id="aftercare-contact" className="legal-section__title">
              {aftercarePage.contactTitle[lang]}
            </h2>
            <p className="legal-section__note">{aftercarePage.contactText[lang]}</p>
          </section>

          <p className="legal__closing">{aftercarePage.closing[lang]}</p>
        </div>
      </section>
    </article>
  );
}
