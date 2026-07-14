"use client";

import { useLanguage } from "@/context/LanguageContext";
import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Unique } from "@/components/Unique";
import { Treatments } from "@/components/Treatments";
import { Testimonial } from "@/components/Testimonial";
import { Carousel } from "@/components/Carousel";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <a className="skip-link" href="#main">
        {t("skip")}
      </a>

      <TopBar />
      <Header />

      <main id="main">
        <span id="top" />
        <Hero />
        <About />
        <Unique />
        <Treatments />
        <Testimonial />
        <Carousel />
        <Newsletter />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
