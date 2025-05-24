export type Exhibition = {
  year: string;
  title: string;
  venue: string;
  location: string;
  exhibitionType: ExhibitionType;
};

export interface Education {
  university: string;
  degree: string;
  startYear: number;
  endYear: number;
}

export enum ExhibitionType {
  Solo = "Solo",
  Duo = "Duo",
  Group = "Group",
}

export type AboutPageProps = {
  exhibitions: Exhibition[];
  education: Education[];
};

export const about: AboutPageProps = {
  exhibitions: [
    {
      year: "2023",
      title: "Precious Postcards",
      venue: "That Gallery",
      location: "Bristol, UK",
      exhibitionType: ExhibitionType.Group,
    },
    {
      year: "2020",
      title: "Precious Postcards",
      venue: " Hart's ",
      location: "Bristol, UK",
      exhibitionType: ExhibitionType.Solo,
    },
    {
      year: "2019",
      title: "The Contraband Collection: Bristol Edition",
      venue: "The Latch",
      location: "Bristol, UK",
      exhibitionType: ExhibitionType.Group,
    },
    {
      year: "2019",
      title: "Order in the Technicolour Chaos",
      venue: " Paintworks",
      location: "Bristol, UK",
      exhibitionType: ExhibitionType.Duo,
    },
    {
      year: "2019",
      title: "Note to Self",
      venue: "London Graphics Centre",
      location: "London, UK",
      exhibitionType: ExhibitionType.Group,
    },
    {
      year: "2011",
      title: "Bristol Design Festival",
      venue: " The Old Fire Station",
      location: "Bristol, UK",
      exhibitionType: ExhibitionType.Group,
    },
    {
      year: "2008",
      title: "Cans Festival",
      venue: "Waterloo Tunnels",
      location: "London, UK",
      exhibitionType: ExhibitionType.Group,
    },
  ],
  education: [
    {
      university: "Central Saint Martins",
      degree: "BA",
      startYear: 2011,
      endYear: 2014,
    },
    {
      university: "Central Saint Martins",
      degree: "Foundation Diploma in Art and Design",
      startYear: 2010,
      endYear: 2011,
    },
  ],
};
