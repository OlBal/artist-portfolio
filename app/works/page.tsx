"use client";
import List from "@/components/List/list";
import { ArtworkPageProps, Tag } from "@/lib/models/ArtworkPageProps";
import { filterOptions } from "@/lib/schemas/options/filter.options";
import { sortOptions } from "@/lib/schemas/options/sort.options";
import { works } from "@/lib/schemas/works/works";
import { useState } from "react";
import { sortBy } from "../utils/works-utils";

export default function Works() {
  const [sortedWorks, setWorks] = useState<ArtworkPageProps[]>(works);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const sort = (value: string) => {
    let sortedWorks = sortBy(value, works);
    setWorks(sortedWorks);
  };

  const clearAll = () => {
    setSelectedFilters([]);
    setWorks(works);
  };

  const clearFilter = (value: string) => {
    const updatedFilters = selectedFilters.filter((f) => f !== value);
    setSelectedFilters(updatedFilters);

    let filtered = works.filter((work: ArtworkPageProps) =>
      updatedFilters.length === 0
        ? true
        : updatedFilters.some((filter) => work.tags?.includes(filter as Tag))
    );
    setWorks(filtered.filter((work) => work !== null));
  };

  const filter = (value: string) => {
    let worksToFilter = [...works];

    let updatedFilters = selectedFilters.includes(value)
      ? selectedFilters.filter((f) => f !== value)
      : [...selectedFilters, value];

    setSelectedFilters(updatedFilters);

    let filtered = worksToFilter.filter((work: ArtworkPageProps) =>
      updatedFilters.length === 0
        ? true
        : updatedFilters.some((filter) => work.tags?.includes(filter as Tag))
    );
    setWorks(filtered.filter((work) => work !== null));
  };

  return (
    <div className="min-h-screen px-4">
      <div className="flex flex-row items-center flex-wrap gap-4 w-full  mt-4 container mx-auto py-4 px-6">
        <div className="flex flex-col md:flex-col border-r-1 border-gray-200">
          <label className="text-sm mr-2 " htmlFor="filter-select">
            Filter
          </label>

          <select
            id="filter-select"
            onChange={(e) => filter(e.target.value)}
            className="py-2 px-1 background-white rounded-md bg-white cursor-pointer hover:bg-gray-100 "
          >
            {filterOptions.map((option) => (
              <option value={option.value} key={option.label}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col md:flex-col  ">
          <label className="text-sm" htmlFor="sort-select">
            Sort
          </label>
          <select
            id="sort-select"
            onChange={(e) => sort(e.target.value)}
            className="py-2 px-1 background-white rounded-md bg-white cursor-pointer hover:bg-gray-100 "
          >
            {sortOptions.map((option) => (
              <option value={option.value} key={option.label}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        {selectedFilters.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4 items-center">
            {selectedFilters.map((filter) => (
              <span
                key={filter}
                className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full flex items-center"
              >
                {filter}
                <button
                  onClick={() => clearFilter(filter)}
                  className="ml-2 text-gray-600 hover:text-gray-800"
                >
                  &times;
                </button>
              </span>
            ))}
            <p
              onClick={() => clearAll()}
              className="cursor-pointer underline text-gray-600 hover:text-gray-800"
            >
              Clear all
            </p>
          </div>
        )}
      </div>

      {/* <Gallery sortedWorks={sortedWorks} /> */}
      <List sortedWorks={sortedWorks} />
    </div>
  );
}
