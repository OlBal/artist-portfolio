import { ArtworkPageProps, Tag } from "@/lib/models/ArtworkPageProps";
import { PrcssPageProps } from "@/lib/models/PrcssPageProps";

export const sortBy = (
  value: string,
  works: ArtworkPageProps[] | PrcssPageProps[],
) => {
  const sorted = [...works];

  switch (value) {
    case "new":
      return sorted.sort((left, right) => right.year - left.year);
    case "old":
      return sorted.sort((left, right) => left.year - right.year);
    case "available":
      return sorted.filter((work) => work.available);
    default:
      return sorted;
  }
};

export const filterBy = (
  filters: string[],
  works: ArtworkPageProps[],
): ArtworkPageProps[] => {
  if (filters.length === 0) {
    return [...works];
  }

  return works.filter((work) =>
    filters.some((filter) => work.tags?.includes(filter as Tag)),
  );
};
