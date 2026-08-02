import { ArtworkPageProps } from "@/lib/models/ArtworkPageProps";
import { PrcssPageProps } from "@/lib/models/PrcssPageProps";
import Link from "next/link";
import { LazyImage } from "../LazyImage";

type GalleryProps = {
  sortedWorks: ArtworkPageProps[] | PrcssPageProps[];
};

const isArtwork = (
  work: ArtworkPageProps | PrcssPageProps,
): work is ArtworkPageProps => "tags" in work;

export default function Gallery({ sortedWorks }: GalleryProps) {
  const routePrefix =
    sortedWorks[0] && isArtwork(sortedWorks[0]) ? "artwork" : "prcss";

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 border-t border-[#ececec]">
      {sortedWorks.map((work) => {
        const itemRoute = `/${routePrefix}/${work.id}`;
        const imageWidth = work.width * 15;
        const imageHeight = work.height * 15;

        return (
          <figure
            key={work.id}
            className="p-5 m-0 border-r border-b border-[#ececec] box-border flex items-center justify-center"
          >
            <Link
              href={itemRoute}
              className="group self-center justify-self-center"
            >
              <div className="relative overflow-hidden">
                <LazyImage
                  artwork={work}
                  height={imageHeight}
                  width={imageWidth}
                />
              </div>
            </Link>
          </figure>
        );
      })}
    </div>
  );
}
