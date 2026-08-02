import { ArtworkPageProps } from "@/lib/models/ArtworkPageProps";
import { PrcssPageProps } from "@/lib/models/PrcssPageProps";
import Image from "next/image";
import Link from "next/link";
import { memo, useState } from "react";

type ListRowProps = {
  row: ArtworkPageProps | PrcssPageProps;
};

const isArtwork = (
  work: ArtworkPageProps | PrcssPageProps,
): work is ArtworkPageProps => "tags" in work;

const ListRow = memo(function ListRow({ row }: ListRowProps) {
  const [previewImage, setPreviewImage] = useState<
    ArtworkPageProps | PrcssPageProps | null
  >(null);
  const [viewPreview, setViewPreview] = useState(false);

  const handlePreviewChange = (isVisible: boolean) => {
    setPreviewImage(row);
    setViewPreview(isVisible);
  };

  const itemRoute = isArtwork(row) ? `/artwork/${row.id}` : `/prcss/${row.id}`;

  return (
    <Link
      href={itemRoute}
      key={row.id}
      className="group self-center justify-self-center w-full"
      onMouseEnter={() => handlePreviewChange(true)}
      onMouseLeave={() => handlePreviewChange(false)}
    >
      <ul className="flex flex-row justify-between items-center w-full p-1 border-b border-gray-200 hover:text-white transition-all duration-700 ease-in-out hover:bg-orange-500">
        <li className="flex-1">{row.title}</li>
        <li className="flex-1">{row.year}</li>
        <li className="flex-1">{row.medium}</li>
        <li className="flex-1">{row.surface}</li>
        <li className="flex-1">
          <div
            className={
              row.available
                ? "bg-green-500 flex w-4 h-4 me-2 rounded-full"
                : "bg-red-500 flex w-4 h-4 me-2 rounded-full"
            }
          ></div>
        </li>

        {viewPreview && previewImage ? (
          <div className="absolute top-25 right-10 z-10 mr-5 opacity-100 transition-opacity duration-500 ease-in-out">
            <Image
              src={previewImage.src}
              alt={previewImage.title}
              width={200}
              height={200}
              quality={60}
              sizes="200px"
            />
          </div>
        ) : null}
      </ul>
    </Link>
  );
});

export default ListRow;
