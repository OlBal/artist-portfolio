import { ArtworkPageProps, Tag } from "@/lib/models/ArtworkPageProps";
import { PrcssPageProps } from "@/lib/models/PrcssPageProps";

export const sortBy = (
  value: string,
  works: ArtworkPageProps[] | PrcssPageProps[]
) => {
  let sorted = [...works];

  switch (value) {
    case "new":
      return sorted.sort((a, b) => b.year - a.year);
    case "old":
      return sorted.sort((a, b) => a.year - b.year);
    case "available":
      return sorted.filter((work) => work.available);
    default:
      //If no valid option is selected, return the original array
      return sorted;
  }
};

export const filterBy = (
  value: string,
  works: ArtworkPageProps[]
): (ArtworkPageProps | null)[] => {
  let worksToFilter = [...works];

  let filtered = worksToFilter.map((work: ArtworkPageProps) =>
    work.tags?.includes(value as Tag) ? work : null
  );

  return filtered.filter((work) => work !== null);
};
