"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SmartImage } from "./SmartImage";

const SLIDES = [
  {
    src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80",
    seed: "bride1",
    alt_nl: "Bruidsmake-up met opgestoken haar",
    alt_en: "Bridal make-up with updo",
  },
  {
    src: "https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?auto=format&fit=crop&w=600&q=80",
    seed: "bride2",
    alt_nl: "Bruid met sluier",
    alt_en: "Bride with veil",
  },
  {
    src: "https://images.unsplash.com/photo-1457972729786-0411a3b2b626?auto=format&fit=crop&w=600&q=80",
    seed: "bride3",
    alt_nl: "Elegante avond make-up",
    alt_en: "Elegant evening make-up",
  },
  {
    src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=600&q=80",
    seed: "bride4",
    alt_nl: "Natuurlijke bruidslook",
    alt_en: "Natural bridal look",
  },
  {
    src: "https://images.unsplash.com/photo-1503104834685-7205e8607eb9?auto=format&fit=crop&w=600&q=80",
    seed: "bride5",
    alt_nl: "Glamoureuze make-up look",
    alt_en: "Glamorous make-up look",
  },
];

export function Carousel() {
  const { t, lang } = useLanguage();
  const trackRef = useRef<HTMLUListElement>(null);
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(3);
  const [offset, setOffset] = useState(0);

  const maxIndex = Math.max(0, SLIDES.length - perView);

  useEffect(() => {
    const compute = () => setPerView(window.innerWidth <= 860 ? 1 : 3);
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  useEffect(() => {
    setIndex((i) => Math.min(i, Math.max(0, SLIDES.length - perView)));
  }, [perView]);

  const measure = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const first = track.children[0] as HTMLElement | undefined;
    const target = track.children[index] as HTMLElement | undefined;
    if (!first || !target) return;
    setOffset(target.offsetLeft - first.offsetLeft);
  }, [index]);

  useLayoutEffect(() => {
    measure();
  }, [measure, perView]);

  useEffect(() => {
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const go = (next: number) => {
    setIndex(Math.min(Math.max(next, 0), maxIndex));
  };

  return (
    <section className="carousel-sec section" id="pricing">
      <div className="wrap">
        <h2 className="heading-gold">{t("gallery_heading")}</h2>

        <div
          className="carousel"
          role="group"
          aria-roledescription="carousel"
          aria-label={t("gallery_heading")}
        >
          <button
            className="carousel__arrow carousel__arrow--prev"
            onClick={() => go(index - 1)}
            aria-label={t("a_prev")}
            disabled={index === 0}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M15 5l-7 7 7 7"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </button>

          <div className="carousel__viewport">
            <ul
              className="carousel__track"
              ref={trackRef}
              style={{ transform: `translateX(-${offset}px)` }}
            >
              {SLIDES.map((slide, i) => (
                <li
                  className="carousel__slide"
                  key={slide.seed}
                  aria-hidden={i < index || i >= index + perView}
                >
                  <div style={{ position: "relative", aspectRatio: "3 / 4" }}>
                    <SmartImage
                      src={slide.src}
                      fallbackSeed={slide.seed}
                      alt={lang === "nl" ? slide.alt_nl : slide.alt_en}
                      sizes="(max-width: 860px) 80vw, 260px"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <button
            className="carousel__arrow carousel__arrow--next"
            onClick={() => go(index + 1)}
            aria-label={t("a_next")}
            disabled={index === maxIndex}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M9 5l7 7-7 7"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </button>
        </div>

        <div className="carousel__dots" role="tablist" aria-label={t("gallery_heading")}>
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              className={`carousel__dot${i === index ? " is-active" : ""}`}
              onClick={() => go(i)}
              role="tab"
              aria-selected={i === index}
              aria-label={`${i + 1}`}
            />
          ))}
        </div>

        <div className="carousel-sec__cta">
          <a href="#contact" className="btn btn--dark">
            {t("pricing_btn")}
          </a>
        </div>
      </div>
    </section>
  );
}
