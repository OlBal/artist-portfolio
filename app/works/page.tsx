"use client";
import { ArtworkPageProps } from "@/lib/models/ArtworkPageProps";
import { works } from "@/lib/schemas/works/works";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { filterBy, sortBy } from "../utils/works-utils";
export default function Gallery() {
  const options = [
    { value: "new", label: "Newer" },
    { value: "old", label: "Older" },
    { value: "available", label: "Available" },
  ];

  const filterOptions = [
    { value: "abstract", label: "Abstract" },
    { value: "landscape", label: "Landscape" },
    { value: "fruit", label: "Fruit" },
    { value: "still-life", label: "Still Life" },
    { value: "wildlife", label: "Wildlife" },
    { value: "scene", label: "Scene" },
    { value: "food", label: "Food" },
    { value: "sculpture", label: "Sculpture" },
  ];

  const [sortedWorks, setWorks] = useState<ArtworkPageProps[]>(works);

  const [isHovering, setHover] = useState(false);

  const sort = (value: string) => {
    let sortedWorks = sortBy(value, works);
    setWorks(sortedWorks);
  };

  const filter = (value: string) => {
    let filteredWorks = filterBy(value, sortedWorks);
    setWorks(filteredWorks as ArtworkPageProps[]);
  };

  // const removeFilter = (activeFilters:string[]) => {
  //   let filteredWorks = removeFilters(value, sortedWorks);
  //   setWorks(works);
  // }

  return (
    <div className="min-h-screen px-4">
      <div className="flex flex-row items-center flex-wrap  sm:justify-center py- gap-4 items-center w-full mt-8 mb-4">
        <div className="flex flex-col md:flex-row gap-4 ">
          <div className="flex items-center">
            Filter:
            <select
              onChange={(e) => filter(e.target.value)}
              className="py-2 px-3 background-white rounded-md bg-white border border-gray-300 cursor-pointer hover:bg-gray-100 "
            >
              {filterOptions.map((option) => (
                <option value={option.value} key={option.label}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex items-center ">
          Sort:
          <select
            onChange={(e) => sort(e.target.value)}
            className="py-2 px-3 background-white rounded-md bg-white  border border-gray-300 cursor-pointer hover:bg-gray-100 "
          >
            {options.map((option) => (
              <option value={option.value} key={option.label}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
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
