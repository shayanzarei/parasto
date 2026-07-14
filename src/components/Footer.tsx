"use client";

import { useLanguage } from "@/context/LanguageContext";
import { BrandMark } from "./BrandMark";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer" id="contact">
      <div className="wrap footer__top">
        <BrandMark className="brand__mark--footer" />
        <p className="serif-name serif-name--light">PARASTO</p>
        <p className="brand__tag brand__tag--footer">{t("tagline")}</p>
      </div>

      <div className="wrap footer__cols">
        <div className="footer__col">
          <h3 className="footer__h">{t("f_menu")}</h3>
          <ul>
            <li>
              <a href="#treatments">{t("nav_treatments")}</a>
            </li>
            <li>
              <a href="#about">{t("nav_about")}</a>
            </li>
            <li>
              <a href="#pricing">{t("nav_pricing")}</a>
            </li>
            <li>
              <a href="#contact">{t("book")}</a>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h3 className="footer__h">{t("f_contact")}</h3>
          <ul>
            <li>{t("f_addr1")}</li>
            <li>{t("f_addr2")}</li>
            <li>
              <a href="mailto:info@parasto.com">info@parasto.com</a>
            </li>
            <li>
              <a href="tel:+31857800384">085-7800384</a>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h3 className="footer__h">{t("f_service")}</h3>
          <ul>
            <li>
              <a href="#">{t("f_terms")}</a>
            </li>
            <li>
              <a href="#">{t("f_privacy")}</a>
            </li>
            <li>
              <a href="#">{t("f_cookie")}</a>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h3 className="footer__h">{t("f_affil")}</h3>
          <div className="footer__badges">
            <span className="badge">ANBOS</span>
            <span className="badge badge--round">SBB</span>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="wrap footer__bottom-inner">
          <span>{t("f_credit")}</span>
          <span>{t("f_copy")}</span>
        </div>
      </div>
    </footer>
  );
}
