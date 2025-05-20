export interface ArtworkPageProps {
  additional?: string;
  id: string;
  title: string;
  year: number;
  medium: string;
  surface: string;
  height: number;
  width: number;
  description: string;
  available: boolean;
  src: string;
  linked?: LinkedArtworks[];
  tags?: Tags[];
}

interface LinkedArtworks {
  id: string;
  title: string;
  year: number;
  medium: string;
  surface: string;
  height: number;
  width: number;
  description: string;
  available: boolean;
  src: string;
}

type Tags =
  | "abstract"
  | "landscape"
  | "fruit"
  | "still-life"
  | "wildlife"
  | "scene"
  | "fruit"
  | "food"
  | "sculpture";
