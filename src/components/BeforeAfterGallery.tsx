"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import { useLanguage } from "@/context/LanguageContext";
import { socialLinks } from "@/data/clinic";
import { galleryResults } from "@/data/gallery";
import { SmartImage } from "./SmartImage";

const GALLERY_GAP = 24;

function getPerView(width: number) {
  if (width <= 640) return 1;
  if (width <= 1024) return 2;
  return 3;
}

export function BeforeAfterGallery() {
  const { t, lang } = useLanguage();
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);
  const scrollingProgrammatically = useRef(false);
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(1);

  const maxIndex = Math.max(0, galleryResults.length - perView);

  useLayoutEffect(() => {
    const compute = () => setPerView(getPerView(window.innerWidth));
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  useEffect(() => {
    setIndex((current) => Math.min(current, maxIndex));
  }, [maxIndex]);

  const scrollToIndex = useCallback((next: number, smooth = true) => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    const slide = track.children[next] as HTMLElement | undefined;
    if (!slide) return;

    scrollingProgrammatically.current = true;
    viewport.scrollTo({
      left: slide.offsetLeft,
      behavior: smooth ? "smooth" : "auto",
    });

    window.setTimeout(
      () => {
        scrollingProgrammatically.current = false;
      },
      smooth ? 450 : 0
    );
  }, []);

  const prevPerView = useRef(perView);
  useLayoutEffect(() => {
    if (prevPerView.current === perView) return;
    prevPerView.current = perView;
    scrollToIndex(index, false);
  }, [perView, index, scrollToIndex]);

  const go = useCallback(
    (next: number) => {
      if (maxIndex === 0) return;

      let target = next;
      let smooth = true;

      if (next < 0) {
        target = maxIndex;
        smooth = false;
      } else if (next > maxIndex) {
        target = 0;
        smooth = false;
      }

      setIndex(target);
      scrollToIndex(target, smooth);
    },
    [maxIndex, scrollToIndex]
  );

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    let frame = 0;
    const onScroll = () => {
      if (scrollingProgrammatically.current) return;

      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const { scrollLeft } = viewport;
        let closest = 0;
        let minDistance = Infinity;

        Array.from(track.children).forEach((child, i) => {
          const distance = Math.abs((child as HTMLElement).offsetLeft - scrollLeft);
          if (distance < minDistance) {
            minDistance = distance;
            closest = i;
          }
        });

        setIndex((current) => {
          const clamped = Math.min(closest, maxIndex);
          return clamped === current ? current : clamped;
        });
      });
    };

    viewport.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      viewport.removeEventListener("scroll", onScroll);
    };
  }, [maxIndex]);

  const sliderStyle = {
    "--per-view": perView,
    "--gallery-gap": `${GALLERY_GAP}px`,
  } as CSSProperties;

  const visibleLabel = `${index + 1} / ${maxIndex + 1}`;

  return (
    <section className="home-gallery section section--tinted" id="results" aria-labelledby="gallery-heading">
      <div className="wrap">
        <h2 id="gallery-heading" className="heading-gold">
          {t("gallery_heading")}
        </h2>
        <p className="section-intro">{t("gallery_intro")}</p>

        <div
          className="gallery-slider"
          style={sliderStyle}
          role="region"
          aria-roledescription="carousel"
          aria-label={t("gallery_heading")}
        >
          <button
            type="button"
            className="gallery-slider__arrow gallery-slider__arrow--prev"
            onClick={() => go(index - 1)}
            aria-label={t("a_prev")}
            disabled={maxIndex === 0}
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

          <div className="gallery-slider__main">
            <div className="gallery-slider__viewport" ref={viewportRef}>
              <ul className="gallery-slider__track" ref={trackRef}>
                {galleryResults.map((item, i) => (
                  <li
                    key={item.id}
                    className="gallery-slider__slide"
                    aria-hidden={i < index || i >= index + perView}
                  >
                    <figure className="ba-card ba-card--slide">
                      <div className="ba-card__media">
                        <SmartImage
                          src={item.path}
                          fallbackSeed={`gallery-${item.id}`}
                          alt={item.alt[lang]}
                          sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 320px"
                        />
                      </div>
                      <figcaption className="ba-card__caption">
                        {item.treatment[lang]}
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </div>

            <p className="gallery-slider__count" aria-live="polite">
              {visibleLabel}
            </p>

            <div className="gallery-slider__dots" role="tablist" aria-label={t("gallery_nav_label")}>
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`gallery-slider__dot${i === index ? " is-active" : ""}`}
                  onClick={() => go(i)}
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`${t("gallery_nav_label")} ${i + 1}`}
                />
              ))}
            </div>
          </div>

          <button
            type="button"
            className="gallery-slider__arrow gallery-slider__arrow--next"
            onClick={() => go(index + 1)}
            aria-label={t("a_next")}
            disabled={maxIndex === 0}
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

        <div className="section-cta">
          <a
            href={socialLinks.instagram}
            className="btn btn--dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("gallery_cta")}
          </a>
        </div>
      </div>
    </section>
  );
}
