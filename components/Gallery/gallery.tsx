import { ArtworkPageProps } from "@/lib/models/ArtworkPageProps";
import { Link } from "lucide-react";
import Image from "next/image";

type GalleryProps = {
  sortedWorks: ArtworkPageProps[];
};

export default function Gallery({ sortedWorks }: GalleryProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-10">
      {sortedWorks.map((artwork: ArtworkPageProps) => (
        <Link
          href={`/artwork/${artwork.id}`}
          key={artwork.id}
          className="group self-center justify-self-center"
        >
          <div className="relative  overflow-hidden">
            <Image
              src={artwork.src}
              alt={artwork.title}
              className="object-cover"
              width={artwork.width * 15}
              height={artwork.height * 15}
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
