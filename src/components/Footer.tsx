"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { BrandMark } from "./BrandMark";
import { clinic, bookingUrl } from "@/data/clinic";
import { SocialMedia } from "./SocialMedia";

export function Footer() {
  const { t, lang } = useLanguage();

  return (
    <footer className="footer">
      <div className="wrap footer__top">
        <BrandMark className="brand__mark--footer" />
        <p className="serif-name serif-name--light">PARI</p>
        <p className="brand__tag brand__tag--footer">{clinic.tagline[lang]}</p>
      </div>

      <div className="wrap footer__cols">
        <div className="footer__col">
          <h3 className="footer__h">{t("f_contact")}</h3>
          <ul>
            <li>{clinic.address.street}</li>
            <li>{clinic.address.city}</li>
            <li>
              <a href={`mailto:${clinic.email}`}>{clinic.email}</a>
            </li>
            <li>
              <a href={`tel:${clinic.phone.replace(/-/g, "")}`}>{clinic.phone}</a>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h3 className="footer__h">{t("f_hours")}</h3>
          <ul>
            {clinic.hours.map((row) => (
              <li key={row.days.nl}>
                {row.days[lang]}: {row.time}
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h3 className="footer__h">{t("f_social")}</h3>
          <SocialMedia variant="footer" />
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
