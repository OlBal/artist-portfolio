"use client";
import Gallery from "@/components/ui/Gallery/gallery";
import List from "@/components/ui/List/list";
import { getScreenSize } from "@/components/ui/utils/shared.utils";
import { filterOptions } from "@/lib/schemas/options/filter.options";
import { sortOptions } from "@/lib/schemas/options/sort.options";
import { works } from "@/lib/schemas/works/works";
import { useEffect, useMemo, useState } from "react";
import { filterBy, sortBy } from "../utils/works-utils";

export default function Works() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [view, setView] = useState<boolean>(true);
  const [screenSize, setScreenSize] = useState<string>(getScreenSize());
  const [sortValue, setSortValue] = useState<string>("default");

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getScreenSize());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredWorks = useMemo(() => {
    return filterBy(selectedFilters, works);
  }, [selectedFilters]);

  const sortedWorks = useMemo(() => {
    return sortBy(sortValue, filteredWorks);
  }, [filteredWorks, sortValue]);

  const toggleView = () => setView((current) => !current);

  const handleSortChange = (value: string) => {
    setSortValue(value);
  };

  const clearAll = () => {
    setSelectedFilters([]);
    setSortValue("default");
  };

  const clearFilter = (value: string) => {
    setSelectedFilters((current) =>
      current.filter((filter) => filter !== value),
    );
  };

  const handleFilterChange = (value: string) => {
    setSelectedFilters((current) =>
      current.includes(value)
        ? current.filter((filter) => filter !== value)
        : [...current, value],
    );
  };

  return (
    <div className="min-h-screen">
      <div className="flex flex-row items-center justify-between gap-4 w-full  mx-auto py-1 px-2">
        {screenSize !== "small" ? (
          <button onClick={toggleView}>View {view ? "List" : "Grid"}</button>
        ) : null}

        <div className="flex flex-row items-center">
          <div className="flex flex-row no-wrap items-center">
            <label className=" mr-3 " htmlFor="filter-select">
              Filter
            </label>

            <select
              id="filter-select"
              onChange={(e) => handleFilterChange(e.target.value)}
              className="py-2 px-1 bg-white cursor-pointer hover:bg-gray-100 mr-3 border border-gray-200 px-2focus:outline-none"
            >
              {filterOptions.map((option) => (
                <option value={option.value} key={option.label}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-row no-wrap items-center">
            <label htmlFor="sort-select" className="mr-3">
              Sort
            </label>
            <select
              id="sort-select"
              onChange={(e) => handleSortChange(e.target.value)}
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

      <div className=" flex flex-row items-center justify-between gap-4 w-full container mx-auto px-6">
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
              onClick={clearAll}
              className="cursor-pointer underline text-gray-600 hover:text-gray-800"
            >
              Clear all
            </p>
          </div>
        )}
      </div>

      {view ? (
        <Gallery sortedWorks={sortedWorks} />
      ) : (
        <List sortedWorks={sortedWorks} />
      )}
    </div>
  );
}
