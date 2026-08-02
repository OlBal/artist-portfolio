import { ArtworkPageProps } from "@/lib/models/ArtworkPageProps";
import { PrcssPageProps } from "@/lib/models/PrcssPageProps";
import Image from "next/image";
import { memo } from "react";

type LazyImageProps = {
  artwork: ArtworkPageProps | PrcssPageProps;
  width: number;
  height: number;
};

export const LazyImage = memo(function LazyImage({
  artwork,
  width,
  height,
}: LazyImageProps) {
  return (
    <Image
      src={artwork.src}
      alt={artwork.title}
      className="object-cover opacity-0 transition-opacity duration-700 ease-in-out will-change-opacity"
      width={width}
      height={height}
      loading="lazy"
      quality={72}
      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
      onLoadingComplete={(img) => {
        img.classList.remove("opacity-0");
        img.classList.add("opacity-100");
      }}
    />
  );
});
