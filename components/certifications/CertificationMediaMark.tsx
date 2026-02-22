import Image from "next/image";
import type { CertificationMedia } from "@/data";

type CertificationMediaMarkProps = {
  media: CertificationMedia;
  variant: "cert" | "issuer";
};

export default function CertificationMediaMark({
  media,
  variant,
}: CertificationMediaMarkProps) {
  const isImage = media.type === "image";
  const isCert = variant === "cert";

  const containerClassName = isCert
    ? isImage
      ? "h-16 w-16 rounded-2xl border border-white/70 bg-white/95 shadow-[0_10px_28px_rgba(0,0,0,0.35)] ring-1 ring-blue-300/30"
      : "theme-icon-badge h-12 w-12 rounded-xl"
    : isImage
      ? "h-6 w-6 rounded-md border border-white/70 bg-white/95 shadow-[0_4px_10px_rgba(0,0,0,0.22)]"
      : "grid h-6 w-6 place-items-center rounded-md border border-blue-300/25 bg-blue-500/10 text-white";

  return (
    <div
      className={`relative grid shrink-0 place-items-center overflow-hidden ${containerClassName}`}
    >
      {media.type === "icon" ? (
        media.icon
      ) : (
        <Image
          src={media.src}
          alt={media.alt}
          fill
          sizes={isCert ? "64px" : "24px"}
          className={`object-contain ${media.imageClassName ?? "p-0.5"}`}
        />
      )}
    </div>
  );
}
