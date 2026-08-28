"use client";

import { useLanguage } from "@/context/LanguageContext";
import { termsPage } from "@/data/terms";
import { PageHero } from "./PageHero";

export function TermsContent() {
  const { lang } = useLanguage();

  return (
    <article aria-labelledby="terms-heading">
      <PageHero
        title={termsPage.title[lang]}
        subtitle={termsPage.subtitle[lang]}
        headingId="terms-heading"
      />

      <section className="section legal">
        <div className="wrap legal__inner">
          {termsPage.sections.map((section) => (
            <section
              key={section.id}
              className="legal-section"
              aria-labelledby={`terms-${section.id}`}
            >
              <h2 id={`terms-${section.id}`} className="legal-section__title">
                {section.title[lang]}
              </h2>

              {section.intro ? (
                <p className="legal-section__intro">{section.intro[lang]}</p>
              ) : null}

              {section.table ? (
                <div className="legal-table-wrap">
                  <table className="legal-table">
                    <thead>
                      <tr>
                        <th scope="col">{section.table.headers.situation[lang]}</th>
                        <th scope="col">{section.table.headers.terms[lang]}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row) => (
                        <tr key={row.situation.nl}>
                          <th scope="row">{row.situation[lang]}</th>
                          <td>{row.terms[lang]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : null}

              {section.bullets ? (
                <ul className="legal-list">
                  {section.bullets.map((bullet) => (
                    <li key={`${bullet.title?.nl ?? ""}${bullet.text.nl}`}>
                      {bullet.title ? (
                        <strong className="legal-list__label">
                          {bullet.title[lang]}:{" "}
                        </strong>
                      ) : null}
                      <span>{bullet.text[lang]}</span>
                      {bullet.subItems ? (
                        <ul className="legal-list legal-list--nested">
                          {bullet.subItems.map((item) => (
                            <li key={item.nl}>{item[lang]}</li>
                          ))}
                        </ul>
                      ) : null}
                    </li>
                  ))}
                </ul>
              ) : null}

              {section.note ? (
                <p className="legal-section__note">{section.note[lang]}</p>
              ) : null}
            </section>
          ))}

          <p className="legal__closing">{termsPage.closing[lang]}</p>
        </div>
      </section>
    </article>
  );
}
