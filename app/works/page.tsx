"use client";
import { Button } from "@/components/ui/button";
import { ArtworkPageProps } from "@/lib/models/ArtworkPageProps";
import { works } from "@/lib/schemas/works/works";
import { Filter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Gallery() {
  const options = [
    { value: "new", label: "Newer" },
    { value: "old", label: "Older" },
    { value: "available", label: "Available" },
  ];

  const [sortedWorks, setSortedWorks] = useState<ArtworkPageProps[]>(works);

  const [isHovering, setHover] = useState(false);

  const sortBy = (value: string) => {
    let sorted = [...works];
    switch (value) {
      case "new":
        sorted.sort((a, b) => b.year - a.year);
        break;
      case "old":
        sorted.sort((a, b) => a.year - b.year);
        break;
      case "available":
        sorted.filter((work) => work.available);
        break;
      default:
        break;
    }
    setSortedWorks(sorted);
  };

  return (
    <div className="min-h-screen px-4">
      <div className="flex flex-row items-center py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 ">
          <Button variant="outline" className="flex items-center gap-2 mt-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>

          <select
            onChange={(e) => sortBy(e.target.value)}
            className="p-2 background-white rounded-md bg-white border border-gray-300 cursor-pointer hover:bg-gray-100 "
          >
            {options.map((option) => (
              <option value={option.value} key={option.label}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 "></div>
      </div>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-10"
      >
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
              {isHovering ?? (
                /* // <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-300 flex items-center justify-center"> */
                <div className="text-left">
                  <h3 className="font-medium">{artwork.title}</h3>
                  <p className="text-sm">{artwork.year}</p>
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
