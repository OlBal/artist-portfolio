"use client";
import { Button } from "@/components/ui/button";
import FullscreenImage from "@/components/ui/FullScreenImage/FullScreenImage";
import { PrcssPageProps } from "@/lib/models/PrcssPageProps";
import { prcss } from "@/lib/schemas/prcss/prcss.schema";
import { ArrowLeft, Expand } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function PrcssWorkPage() {
  const params = useParams();
  const id =
    typeof params.id === "string"
      ? params.id
      : Array.isArray(params.id)
      ? params.id[0]
      : "";
  const artwork = prcss.find((artwork: PrcssPageProps) => artwork.id === id);
  const [fullscreen, setFullscreen] = useState(false);

  function displayFullscreen() {
    setFullscreen((prev) => !prev);
  }

  if (artwork)
    return (
      <div className="min-h-screen">
        <main className="container pb-12 pt-6">
          <Button variant="ghost" asChild>
            <Link href="/works" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Gallery
            </Link>
          </Button>
          {!fullscreen ? (
            <div className="grid md:grid-cols-2 gap-12">
              <div className="relative ml-4">
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg p-4">
                  <Image
                    src={artwork.src}
                    alt={artwork.title}
                    className="object-cover object-center rounded-lg transition-opacity duration-700 ease-in opacity-100"
                    objectFit="contain"
                    width={500}
                    height={300}
                    loading="lazy"
                  />
                  <Button
                    size="icon"
                    variant="secondary"
                    className="absolute top-4 right-5 opacity-80 hover:opacity-100"
                    onClick={displayFullscreen}
                  >
                    <Expand className="h-4 w-4" />
                    <span className="sr-only">View full size</span>
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <FullscreenImage
              src={artwork.src}
              alt={artwork.title || "Artwork Image"}
              onClose={() => setFullscreen(false)}
            />
          )}
        </main>
      </div>
    );
}
