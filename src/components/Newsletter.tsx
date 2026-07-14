"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "@/context/LanguageContext";

export function Newsletter() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState<{ text: string; ok: boolean } | null>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!valid) {
      setMsg({ text: t("news_err"), ok: false });
      return;
    }
    setMsg({ text: t("news_ok"), ok: true });
    setEmail("");
  };

  return (
    <section className="newsletter" aria-label="Newsletter">
      <div className="wrap">
        <form className="newsletter__form" onSubmit={onSubmit} noValidate>
          <label className="sub-label newsletter__label" htmlFor="nl-email">
            {t("news_label")}
          </label>
          <div className="newsletter__row">
            <input
              type="email"
              id="nl-email"
              className="newsletter__input"
              placeholder={t("news_ph")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={msg ? !msg.ok : undefined}
              required
            />
            <button type="submit" className="btn btn--fill">
              {t("news_btn")}
            </button>
          </div>
          <p
            className="newsletter__msg"
            role="status"
            aria-live="polite"
            style={msg && !msg.ok ? { color: "#b4442f" } : undefined}
          >
            {msg?.text ?? ""}
          </p>
        </form>
      </div>
    </section>
  );
}
