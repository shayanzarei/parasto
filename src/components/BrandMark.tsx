import Image from "next/image";
import { logo } from "@/data/clinic";

type BrandMarkProps = {
  className?: string;
  decorative?: boolean;
};

export function BrandMark({ className, decorative = true }: BrandMarkProps) {
  return (
    <span className={`brand__mark ${className ?? ""}`.trim()}>
      <Image
        src={logo.path}
        alt={decorative ? "" : logo.alt}
        width={logo.width}
        height={logo.height}
        priority
        unoptimized
      />
    </span>
  );
}
