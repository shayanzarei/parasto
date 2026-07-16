"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { bookingUrl, servicesImage } from "@/data/clinic";
import {
  formatPrice,
  serviceCategories,
  type ServiceCategory,
  type ServiceItem,
} from "@/data/services";
import { PageHero } from "./PageHero";
import { SmartImage } from "./SmartImage";

function ServiceCard({ item }: { item: ServiceItem }) {
  const { t, lang } = useLanguage();
  const isFree = item.price === 0;

  return (
    <li className="service-card">
      <div className="service-card__head">
        <h3 className="service-card__name">{item.name[lang]}</h3>
        <span className={`service-card__price${isFree ? " service-card__price--free" : ""}`}>
          {formatPrice(item.price, lang)}
        </span>
      </div>
      {item.duration ? (
        <p className="service-card__meta">
          <span className="service-card__duration">{item.duration}</span>
        </p>
      ) : null}
      {item.note ? <p className="service-card__note">{item.note[lang]}</p> : null}
      {item.description ? (
        <details className="service-card__details">
          <summary>{t("services_learn_more")}</summary>
          <p>{item.description[lang]}</p>
        </details>
      ) : null}
    </li>
  );
}

function ServiceCategorySection({ category }: { category: ServiceCategory }) {
  const { t, lang } = useLanguage();

  return (
    <section className="service-cat" id={category.id} aria-labelledby={`${category.id}-heading`}>
      <header className="service-cat__header">
        <h2 id={`${category.id}-heading`} className="service-cat__title">
          {category.name[lang]}
        </h2>
        <span className="service-cat__count">
          {category.items.length} {t("services_count_label")}
        </span>
      </header>
      <ul className="service-list">
        {category.items.map((item) => (
          <ServiceCard key={item.name.nl} item={item} />
        ))}
      </ul>
    </section>
  );
}

function getCategoryIdFromHash(): string | null {
  if (typeof window === "undefined") return null;
  const hash = window.location.hash.replace(/^#/, "");
  return serviceCategories.some((cat) => cat.id === hash) ? hash : null;
}

function resolveActiveCategory(): string {
  const activeLine = 220;
  const hashId = getCategoryIdFromHash();

  if (hashId) {
    const hashSection = document.getElementById(hashId);
    if (hashSection) {
      const { top, bottom } = hashSection.getBoundingClientRect();
      if (bottom >= activeLine && top <= window.innerHeight) {
        if (Math.abs(top - activeLine) < 120) {
          return hashId;
        }
      }
    }
  }

  let active = serviceCategories[0]?.id ?? "";
  let smallestGap = Infinity;

  for (const cat of serviceCategories) {
    const section = document.getElementById(cat.id);
    if (!section) continue;

    const { top, bottom } = section.getBoundingClientRect();
    if (bottom < activeLine || top > window.innerHeight) continue;

    const gap = Math.abs(top - activeLine);
    if (gap < smallestGap) {
      smallestGap = gap;
      active = cat.id;
    }
  }

  return active;
}

export function ServicesContent() {
  const { t, lang } = useLanguage();
  const [activeId, setActiveId] = useState(serviceCategories[0]?.id ?? "");

  useLayoutEffect(() => {
    const hashId = getCategoryIdFromHash();
    setActiveId(hashId ?? resolveActiveCategory());
  }, []);

  useEffect(() => {
    const syncActiveFromScroll = () => {
      setActiveId(resolveActiveCategory());
    };

    const syncActiveFromHash = () => {
      const hashId = getCategoryIdFromHash();
      if (hashId) {
        setActiveId(hashId);
        return;
      }
      syncActiveFromScroll();
    };

    window.addEventListener("scroll", syncActiveFromScroll, { passive: true });
    window.addEventListener("hashchange", syncActiveFromHash);

    const timeouts = [150, 400, 800].map((delay) =>
      window.setTimeout(syncActiveFromHash, delay),
    );

    return () => {
      window.removeEventListener("scroll", syncActiveFromScroll);
      window.removeEventListener("hashchange", syncActiveFromHash);
      timeouts.forEach((id) => window.clearTimeout(id));
    };
  }, []);

  return (
    <article aria-labelledby="services-heading">
      <PageHero
        title={t("services_page_title")}
        subtitle={t("services_page_sub")}
        headingId="services-heading"
      />

      <section className="section services-page" aria-label={t("services_page_title")}>
        <div className="wrap services-feature">
          <figure className="services-feature__media">
            <SmartImage
              src={servicesImage.path}
              fallbackSeed="pari-services-clinic"
              alt={t("services_image_alt")}
              sizes="(max-width: 860px) 100vw, 520px"
            />
          </figure>
          <div className="services-feature__body">
            <h2 className="services-feature__title">{t("services_feature_title")}</h2>
            <p className="services-feature__text">{t("services_feature_text")}</p>
            <p className="services-feature__note">{t("services_page_note")}</p>
          </div>
        </div>

        <div className="wrap services-layout">
          <aside className="services-layout__nav" aria-label={t("services_nav_label")}>
            <nav className="services-nav">
              <p className="services-nav__label">{t("services_nav_label")}</p>
              <ul className="services-nav__list">
                {serviceCategories.map((cat) => (
                  <li key={cat.id}>
                    <a
                      href={`#${cat.id}`}
                      className={`services-nav__link${activeId === cat.id ? " is-active" : ""}`}
                      aria-current={activeId === cat.id ? "location" : undefined}
                      onClick={() => setActiveId(cat.id)}
                    >
                      <span>{cat.name[lang]}</span>
                      <span className="services-nav__count">{cat.items.length}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <div className="services-layout__main">
            {serviceCategories.map((cat) => (
              <ServiceCategorySection key={cat.id} category={cat} />
            ))}

            <section
              className="contact-panel contact-panel--cta services-cta"
              aria-labelledby="services-book-heading"
            >
              <h2 id="services-book-heading" className="contact-panel__title">
                {t("services_book_title")}
              </h2>
              <p className="contact-panel__text">{t("services_book_text")}</p>
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
        </div>
      </section>
    </article>
  );
}
