import { ArtworkPageProps } from "@/lib/models/ArtworkPageProps";
import Link from "next/link";

type ListRowProps = {
  row: ArtworkPageProps;
};

export default function ListRow({ row }: ListRowProps) {
  return (
    <Link
      href={`/artwork/${row.id}`}
      key={row.id}
      className="group self-center justify-self-center w-full"
    >
      <ul className="flex flex-row justify-between items-center w-full p-1 border-b border-gray-200">
        <li className="flex-1 ">{row.title} </li>
        <li className="flex-1 ">{row.year}</li>
        <li className="flex-1 ">{row.medium}</li>
        <li className="flex-1 ">{row.surface}</li>
        <li className="flex-1 ">{row.available}</li>
      </ul>
    </Link>
  );
}
