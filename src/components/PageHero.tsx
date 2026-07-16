"use client";

export function PageHero({
  title,
  subtitle,
  headingId = "page-heading",
}: {
  title: string;
  subtitle?: string;
  headingId?: string;
}) {
  return (
    <section className="page-hero section" aria-labelledby={headingId}>
      <div className="wrap page-hero__inner">
        <h1 id={headingId} className="page-hero__title">
          {title}
        </h1>
        {subtitle ? <p className="page-hero__subtitle">{subtitle}</p> : null}
      </div>
    </section>
  );
}
