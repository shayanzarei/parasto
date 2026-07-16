"use client";

import { useLanguage } from "@/context/LanguageContext";
import { clinic, bookingUrl, mapsEmbedUrl, mapsUrl } from "@/data/clinic";
import { PageHero } from "./PageHero";
import { SocialMedia } from "./SocialMedia";

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="contact-detail__icon">
      <path
        fill="currentColor"
        d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="contact-detail__icon">
      <path
        fill="currentColor"
        d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 2v.2l-8 5.2-8-5.2V6h16zM4 18V8.8l7.4 4.8a1 1 0 0 0 1.2 0L20 8.8V18H4z"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="contact-detail__icon">
      <path
        fill="currentColor"
        d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.3 1l-2.2 2.2z"
      />
    </svg>
  );
}

export function ContactContent() {
  const { t, lang } = useLanguage();

  return (
    <article aria-labelledby="contact-heading">
      <PageHero
        title={t("contact_page_title")}
        subtitle={t("contact_page_sub")}
        headingId="contact-heading"
      />

      <section className="section contact-page" aria-label={t("contact_page_title")}>
        <div className="wrap contact-layout">
          <div className="contact-layout__main">
            <figure className="contact-layout__map" aria-labelledby="contact-map-heading">
              <h2 id="contact-map-heading" className="visually-hidden">
                {t("contact_map_title")}
              </h2>
              <div className="contact-map__embed">
                <iframe
                  className="contact-map__frame"
                  src={mapsEmbedUrl}
                  title={t("contact_map_title")}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <figcaption className="contact-map__bar">
                <address className="contact-map__address">{clinic.address.full}</address>
                <a
                  href={mapsUrl}
                  className="contact-map__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("contact_map_link")}
                </a>
              </figcaption>
            </figure>

            <section className="contact-panel contact-panel--cta" aria-labelledby="contact-book-heading">
              <h2 id="contact-book-heading" className="contact-panel__title">
                {t("contact_book_title")}
              </h2>
              <p className="contact-panel__text">{t("contact_book_text")}</p>
              <a
                href={bookingUrl}
                className="btn btn--fill"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("book")}
              </a>
            </section>
          </div>

          <aside className="contact-layout__sidebar" aria-label={t("f_contact")}>
            <section className="contact-panel" aria-labelledby="contact-details-heading">
              <h2 id="contact-details-heading" className="contact-panel__title">
                {t("f_contact")}
              </h2>
              <ul className="contact-details">
                <li className="contact-detail">
                  <LocationIcon />
                  <div className="contact-detail__body">
                    <span className="contact-detail__label">{t("contact_map_title")}</span>
                    <address>
                      <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
                        {clinic.address.street}
                        <br />
                        {clinic.address.city}
                      </a>
                    </address>
                    <span className="contact-detail__meta">{clinic.address.plusCode}</span>
                  </div>
                </li>
                <li className="contact-detail">
                  <MailIcon />
                  <div className="contact-detail__body">
                    <span className="contact-detail__label">{t("contact_email_label")}</span>
                    <a href={`mailto:${clinic.email}`}>{clinic.email}</a>
                  </div>
                </li>
                <li className="contact-detail">
                  <PhoneIcon />
                  <div className="contact-detail__body">
                    <span className="contact-detail__label">{t("contact_phone_label")}</span>
                    <a href={`tel:${clinic.phone.replace(/-/g, "")}`}>{clinic.phone}</a>
                    <a href={`tel:${clinic.phoneAlt.replace(/-/g, "")}`}>{clinic.phoneAlt}</a>
                  </div>
                </li>
              </ul>
            </section>

            <section className="contact-panel" aria-labelledby="contact-hours-heading">
              <h2 id="contact-hours-heading" className="contact-panel__title">
                {t("f_hours")}
              </h2>
              <ul className="contact-hours">
                {clinic.hours.map((row) => (
                  <li key={row.days.nl} className="contact-hours__row">
                    <span>{row.days[lang]}</span>
                    <span>{row.time}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="contact-panel contact-panel--social" aria-labelledby="contact-social-heading">
              <h2 id="contact-social-heading" className="contact-panel__title">
                {t("f_social")}
              </h2>
              <SocialMedia variant="contact" />
            </section>
          </aside>
        </div>
      </section>
    </article>
  );
}
