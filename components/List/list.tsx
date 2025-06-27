import { ArtworkPageProps } from "@/lib/models/ArtworkPageProps";
import ListRow from "../List-Row/list-row";

type GalleryProps = {
  sortedWorks: ArtworkPageProps[];
};

export default function List({ sortedWorks }: GalleryProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      {sortedWorks.map((artwork: ArtworkPageProps, index) => (
        <ListRow key={artwork.id} row={artwork} />
      ))}
    </div>
  );
}
