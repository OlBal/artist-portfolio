import { ArtworkPageProps } from "@/lib/models/ArtworkPageProps";
import Image from "next/image";
import Link from "next/link";
type ListRowProps = {
  row: ArtworkPageProps;
};

export default function ListRow({ row }: ListRowProps) {
  let preview: boolean = false;
  let image: ArtworkPageProps = preview ? row : row;

  const displayPreview = () => {
    preview = !preview;
    console.log("Preview state:", row);
  };

  return (
    <Link
      href={`/artwork/${row.id}`}
      key={row.id}
      className="group self-center justify-self-center w-full "
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
        {preview ?? (
          <div className={"w-50 h-50 absolute top-30 left-0 z-10"}>
            <Image src={image.src} alt={row.title} width={1500} height={1500} />
          </div>
        )}
      </ul>
    </Link>
  );
}
