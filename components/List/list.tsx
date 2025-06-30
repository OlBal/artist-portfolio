import { ArtworkPageProps } from "@/lib/models/ArtworkPageProps";
import ListRow from "../List-Row/list-row";

type GalleryProps = {
  sortedWorks: ArtworkPageProps[];
};

export default function List({ sortedWorks }: GalleryProps) {
  return (
    <div className="container mx-auto px-4">
      <ul className="flex flex-row justify-between items-center w-full p-1 border-b border-gray-200">
        <li className="flex-1 text-md md:text-lg ">Title</li>
        <li className="flex-1 text-md md:text-lg ">Year</li>
        <li className="flex-1 text-md md:text-lg ">Medium</li>
        <li className="flex-1 text-md md:text-lg ">Surface</li>
        <li className="flex-1 text-md md:text-lg ">Available</li>
      </ul>
      {sortedWorks.map((artwork: ArtworkPageProps) => (
        <ListRow key={artwork.id} row={artwork} />
      ))}
    </div>
  );
}
