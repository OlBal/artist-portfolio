import { ArtworkPageProps } from "@/lib/models/ArtworkPageProps";
import Image from "next/image";
import Link from "next/link";

type GalleryProps = {
  sortedWorks: ArtworkPageProps[];
};

export default function Gallery({ sortedWorks }: GalleryProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 border-t border-[#ececec]">
      {sortedWorks.map((artwork: ArtworkPageProps) => (
        <figure
          key={artwork.id}
          className="p-5 m-0 border-r border-b border-[#ececec] box-border flex items-center justify-center"
        >
          <Link
            href={`/artwork/${artwork.id}`}
            className="group self-center justify-self-center"
          >
            <div className="relative overflow-hidden">
              <Image
                src={artwork.src}
                alt={artwork.title}
                className="object-cover"
                width={artwork.width * 15}
                height={artwork.height * 15}
              />
            </div>
          </Link>
        </figure>
      ))}
    </div>
  );
}
