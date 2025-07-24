import { ArtworkPageProps } from "@/lib/models/ArtworkPageProps";
import { PrcssPageProps } from "@/lib/models/PrcssPageProps";
import Image from "next/image";

export function LazyImage({
  artwork,
  width,
  height,
}: {
  artwork: ArtworkPageProps | PrcssPageProps;
  width: number;
  height: number;
}) {
  return (
    <Image
      src={artwork.src}
      alt={artwork.title}
      className="object-cover transition-opacity duration-700 ease-in opacity-0"
      width={artwork.width * 15}
      height={artwork.height * 15}
      loading="lazy"
      onLoadingComplete={(img) => {
        img.classList.remove("opacity-0");
        img.classList.add("opacity-100");
      }}
    />
  );
}
