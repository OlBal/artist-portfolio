import { Tag } from "./ArtworkPageProps";

export interface PrcssPageProps {
  additional?: string;
  id: string;
  title: string;
  year: number;
  medium: string;
  surface?: string;
  height: number;
  width: number;
  description: string;
  available: boolean;
  src: string;
  tags?: Tag[];
}
