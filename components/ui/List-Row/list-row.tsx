import { ArtworkPageProps } from "@/lib/models/ArtworkPageProps";
import { PrcssPageProps } from "@/lib/models/PrcssPageProps";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
type ListRowProps = {
  row: ArtworkPageProps | PrcssPageProps;
};

export default function ListRow({ row }: ListRowProps) {
  let preview: boolean = false;
  let image: ArtworkPageProps | PrcssPageProps = preview ? row : row;

  const [previewImage, setViewPreview] = useState<
    ArtworkPageProps | PrcssPageProps | undefined
  >(undefined);
  const [viewPreview, setPreview] = useState<boolean>(false);

  const displayPreview = () => {
    setViewPreview(image);
    setPreview(!viewPreview);
  };

  return (
    <Link
      href={`/artwork/${row.id}`}
      key={row.id}
      className="group self-center justify-self-center w-full"
      onMouseEnter={displayPreview}
      onMouseLeave={displayPreview}
    >
      <ul className="flex flex-row justify-between items-center w-full p-1 border-b border-gray-200 hover:text-white transition-all duration-700 ease-in-out hover:bg-orange-500">
        <li className="flex-1">{row.title} </li>
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

        {viewPreview ? (
          <div
            className={
              "absolute top-25 right-10 z-10 mr-5 opacity-0 transition-opacity duration-500 ease-in-out"
            }
          >
            <Image
              src={previewImage?.src ?? ""}
              alt={previewImage?.title ?? "Preview Image"}
              width={200}
              height={200}
            />
          </div>
        ) : undefined}
      </ul>
    </Link>
  );
}
