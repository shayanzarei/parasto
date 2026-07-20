"use client";

import { useLanguage } from "@/context/LanguageContext";
import { clinic } from "@/data/clinic";
import { BrandMark } from "./BrandMark";
import { SocialMedia } from "./SocialMedia";

export function Footer() {
  const { t, lang } = useLanguage();

  return (
    <footer className="footer">
      <div className="wrap footer__top">
        <BrandMark className="brand__mark--footer" />
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
              <a href={`tel:${clinic.phone.replace(/[\s-]/g, "")}`}>{clinic.phone}</a>
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
          <span>
            designed by{" "}
            <a
              href="https://www.linkedin.com/in/zarei-mohammad/"
              target="_blank"
              rel="noopener noreferrer"
            >
              shayan
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
