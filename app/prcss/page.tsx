"use client";
import Gallery from "@/components/Gallery/gallery";
import { getScreenSize } from "@/components/shared/shared.utils";
import { PrcssPageProps } from "@/lib/models/PrcssPageProps";
import { sortOptions } from "@/lib/schemas/options/sort.options";
import { prcss } from "@/lib/schemas/prcss/prcss.schema";
import { useEffect, useState } from "react";
import { sortBy } from "../utils/works-utils";

export default function Prcss() {
  const [sortedWorks, setWorks] = useState<PrcssPageProps[]>(prcss);
  const [view, setView] = useState<boolean>(true);
  const [screenSize, setScreenSize] = useState<string>(getScreenSize());
  const toggleView = () => setView(() => !view);

  const sort = (value: string) => {
    let sortedWorks = sortBy(value, prcss);
    setWorks(sortedWorks);
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getScreenSize());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen">
      <div className="flex flex-row flex-wrap items-center justify-between gap-4 w-full mx-auto py-1 px-2">
        <p className="px-6 w-full text-left mb-4 md:w-2/3 ">
          🖼️ Small works,✏️ drawings, 💭 ideas, 😴 procrastinations, doodles,
          preparatory work and simply things that just didn't make the cut to be
          in the running to be considered a real work of art.
        </p>

        <div className="flex flex-row items-center">
          <div className="flex flex-row no-wrap items-center">
            <label htmlFor="sort-select" className="mr-3">
              Sort
            </label>
            <select
              id="sort-select"
              onChange={(e) => sort(e.target.value)}
              className="py-2 px-1 background-white bg-white cursor-pointer hover:bg-gray-100 border border-gray-200 "
            >
              {sortOptions.map((option) => (
                <option value={option.value} key={option.label}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <Gallery sortedWorks={sortedWorks} />
    </div>
  );
}
