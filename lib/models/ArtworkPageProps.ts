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
  tags?: Tag[];
}

export type Tag =
  | "abstract"
  | "landscape"
  | "fruit"
  | "still-life"
  | "wildlife"
  | "scene"
  | "fruit"
  | "food"
  | "sculpture";

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
