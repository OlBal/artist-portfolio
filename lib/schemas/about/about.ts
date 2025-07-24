export type Exhibitions = {
  year?: string;
  shows: Exhibition[];
};

export interface Exhibition {
  title: string;
  venue: string;
  location: string;
  exhibitionType: ExhibitionType;
}

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
  exhibitions: Exhibitions[];
  education: Education[];
};

export const about: AboutPageProps = {
  exhibitions: [
    {
      year: "2023",
      shows: [
        {
          title: "Precious Postcards",
          venue: "That Gallery",
          location: "Bristol, UK",
          exhibitionType: ExhibitionType.Group,
        },
      ],
    },
    {
      year: "2020",
      shows: [
        {
          title: "Precious Postcards",
          venue: " Hart's ",
          location: "Bristol, UK",
          exhibitionType: ExhibitionType.Solo,
        },
      ],
    },
    {
      year: "2019",
      shows: [
        {
          title: "The Contraband Collection: Bristol Edition",
          venue: "The Latch",
          location: "Bristol, UK",
          exhibitionType: ExhibitionType.Group,
        },
        {
          title: "Order in the Technicolour Chaos",
          venue: " Paintworks",
          location: "Bristol, UK",
          exhibitionType: ExhibitionType.Duo,
        },
      ],
    },
    {
      year: "2014",
      shows: [
        {
          title: "Note to Self",
          venue: "London Graphics Centre",
          location: "London, UK",
          exhibitionType: ExhibitionType.Group,
        },
      ],
    },
    {
      year: "2011",
      shows: [
        {
          title: "Bristol Design Festival",
          venue: " The Old Fire Station",
          location: "Bristol, UK",
          exhibitionType: ExhibitionType.Group,
        },
      ],
    },
    {
      year: "2008",
      shows: [
        {
          title: "Cans Festival",
          venue: "Waterloo Tunnels",
          location: "London, UK",
          exhibitionType: ExhibitionType.Group,
        },
      ],
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
