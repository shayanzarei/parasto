"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { BrandMark } from "./BrandMark";

const NAV_ITEMS = [
  { href: "#treatments", key: "nav_treatments" },
  { href: "#about", key: "nav_about" },
  { href: "#pricing", key: "nav_pricing" },
  { href: "#contact", key: "nav_contact" },
];

export function Header() {
  const { t, lang, setLang } = useLanguage();
  const [stuck, setStuck] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`header${stuck ? " is-stuck" : ""}`} id="header">
        <div className="wrap header__inner">
          <button
            className="header__burger"
            aria-label={t("a_menu")}
            aria-expanded={menuOpen}
            aria-controls="nav"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>

          <a className="brand" href="#top" aria-label="Parasto home">
            <BrandMark />
            <span className="brand__name">PARASTO</span>
            <span className="brand__tag">{t("tagline")}</span>
          </a>

          <nav
            className={`nav${menuOpen ? " is-open" : ""}`}
            id="nav"
            aria-label={t("a_menu")}
          >
            <button
              className="nav__close"
              aria-label={t("a_close")}
              onClick={closeMenu}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <ul className="nav__list">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a href={item.href} onClick={closeMenu}>
                    {t(item.key)}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="btn btn--fill nav__cta"
              onClick={closeMenu}
            >
              {t("book")}
            </a>
          </nav>

          <div className="header__actions">
            <a href="#contact" className="btn btn--fill header__cta">
              {t("book")}
            </a>
            <div className="lang" role="group" aria-label="Language">
              <button
                className={`lang__btn${lang === "nl" ? " is-active" : ""}`}
                onClick={() => setLang("nl")}
                aria-pressed={lang === "nl"}
              >
                NL
              </button>
              <span aria-hidden="true">/</span>
              <button
                className={`lang__btn${lang === "en" ? " is-active" : ""}`}
                onClick={() => setLang("en")}
                aria-pressed={lang === "en"}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`nav-backdrop${menuOpen ? " is-open" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />
    </>
  );
}
