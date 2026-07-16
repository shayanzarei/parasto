"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { BrandMark } from "./BrandMark";
import { clinic, bookingUrl } from "@/data/clinic";

const NAV_ITEMS = [
  { href: "/", key: "nav_home" },
  { href: "/services", key: "nav_services" },
  { href: "/about", key: "nav_about" },
  { href: "/contact", key: "nav_contact" },
];

export function Header() {
  const { t, lang, setLang } = useLanguage();
  const pathname = usePathname();
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
    setMenuOpen(false);
  }, [pathname]);

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
        <div className="wrap header__bar">
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

          <Link className="brand" href="/" aria-label={`${clinic.name} home`}>
            <BrandMark />
            <span className="brand__name">PARI</span>
            <span className="brand__tag">{t("tagline")}</span>
          </Link>

          <div className="header__actions">
            <a
              href={bookingUrl}
              className="btn btn--fill header__cta"
              target="_blank"
              rel="noopener noreferrer"
            >
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

        <div className="wrap nav__shell">
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
                  <Link
                    href={item.href}
                    className={pathname === item.href ? "is-active" : undefined}
                    onClick={closeMenu}
                  >
                    {t(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href={bookingUrl}
              className="btn btn--fill nav__cta"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              {t("book")}
            </a>
          </nav>
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
