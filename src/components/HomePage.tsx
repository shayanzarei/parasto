"use client";

import { SiteLayout } from "@/components/SiteLayout";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Unique } from "@/components/Unique";
import { CategoryPreview } from "@/components/CategoryPreview";
import { BeforeAfterGallery } from "@/components/BeforeAfterGallery";
import { Testimonial } from "@/components/Testimonial";
import { HomeCta } from "@/components/HomeCta";

export function HomePage() {
  return (
    <SiteLayout>
      <article aria-labelledby="hero-heading">
        <Hero />
        <About />
        <Unique />
        <CategoryPreview />
        <BeforeAfterGallery />
        <Testimonial />
        <HomeCta />
      </article>
    </SiteLayout>
  );
}
