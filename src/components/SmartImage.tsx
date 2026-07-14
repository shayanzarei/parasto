"use client";

import Image from "next/image";
import { useState } from "react";

type SmartImageProps = {
  src: string;
  fallbackSeed: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
};

/**
 * next/image with a graceful fallback: if the primary (Unsplash) source fails,
 * we swap to a seeded picsum photo so the layout never breaks.
 */
export function SmartImage({
  src,
  fallbackSeed,
  alt,
  sizes = "100vw",
  priority = false,
}: SmartImageProps) {
  const [current, setCurrent] = useState(src);

  return (
    <Image
      src={current}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      style={{ objectFit: "cover" }}
      onError={() =>
        setCurrent(`https://picsum.photos/seed/${fallbackSeed}/900/1100`)
      }
      unoptimized
    />
  );
}
