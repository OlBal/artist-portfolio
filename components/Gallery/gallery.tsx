import { ArtworkPageProps } from "@/lib/models/ArtworkPageProps";
import { PrcssPageProps } from "@/lib/models/PrcssPageProps";
import Link from "next/link";
import { LazyImage } from "../LazyImage";

type GalleryProps = {
  sortedWorks: ArtworkPageProps[] | PrcssPageProps[];
};

export default function Gallery({ sortedWorks }: GalleryProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 border-t border-[#ececec]">
      {sortedWorks.map((artwork: ArtworkPageProps | PrcssPageProps) => (
        <figure
          key={artwork.id}
          className="p-5 m-0 border-r border-b border-[#ececec] box-border flex items-center justify-center"
        >
          <Link
            href={`/artwork/${artwork.id}`}
            className="group self-center justify-self-center"
          >
            <div className="relative overflow-hidden">
              <LazyImage artwork={artwork} />
            </div>
          </Link>
        </figure>
      ))}
    </div>
  );
}
