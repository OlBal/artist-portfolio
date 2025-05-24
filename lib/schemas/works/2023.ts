import { ArtworkPageProps } from "@/lib/models/ArtworkPageProps";

export const works2023: ArtworkPageProps[] = [
  {
    id: "bonsai",
    title: "Bonsai",
    year: 2023,
    medium: "Acrylic",
    surface: "Canvas",
    height: 50,
    width: 40,
    description:
      "My father's now deceased bonsai, had it had a mid-life crisis.",
    available: true,
    src: "/works/bonsai.webp",
  },
  {
    id: "fingers-and-thumbs",
    title: "Fingers and Thumbs",
    year: 2023,
    medium: "Acrylic",
    surface: "Board",
    height: 30,
    width: 40,
    description:
      "It is like when you're a kid and you wrap a piece of string around your finger and it turns purple. But it's a peach.",
    available: true,
    src: "/works/fingers-and-thumbs.webp",
  },
  {
    id: "satsuma",
    title: "Not A Satsuma",
    year: 2023,
    medium: "Acrylic",
    surface: "Paper",
    height: 42,
    width: 29.7,
    description: "Not a satsuma.",
    available: true,
    src: "/works/satsuma.webp",
    tags: ["fruit", "still-life"],
  },
];
