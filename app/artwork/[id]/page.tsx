import { Button } from "@/components/ui/button";
import { ArtworkPageProps } from "@/lib/models/ArtworkPageProps";
import { works } from "@/lib/schemas/works/works";
import { ArrowLeft, Maximize } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function ArtworkPage({
  params,
}: {
  params: { id: string };
}) {
  let { id } = await params;
  const artwork = await works.find(
    (artwork: ArtworkPageProps) => artwork.id === id
  );

  if (artwork)
    return (
      <div className="min-h-screen">
        <main className="container py-12">
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/works" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Gallery
            </Link>
          </Button>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="relative ml-4">
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg p-4">
                <Image
                  src={artwork.src}
                  alt={artwork.title}
                  className="object-cover object-center rounded-lg"
                  quality={100}
                  placeholder="blur"
                  blurDataURL={artwork.src}
                  objectFit="contain"
                  width={700}
                  height={500}
                  loading="lazy"
                />
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute top-4 right-4 opacity-80 hover:opacity-100"
                >
                  <Maximize className="h-4 w-4" />
                  <span className="sr-only">View full size</span>
                </Button>
              </div>
            </div>

            <div className="space-y-8 p-4 ">
              <div>
                <h1 className="text-xl md:text-lg sm:text-md font-bold">
                  {artwork.title}
                </h1>
                <span>
                  <p>
                    {artwork.medium}
                    {artwork.surface
                      ? ` on ${artwork.surface.toLowerCase()}`
                      : ""}
                  </p>
                  <p></p>
                </span>
                <p>
                  {artwork.height}cm x {artwork.width}cm
                </p>
                <p className="text-gray-600 mt-1">{artwork.year}</p>
              </div>
              <div>
                <p className="text-gray-600">{artwork.description}</p>
                <p className="text-gray-600">{artwork.additional}</p>
              </div>

              <div className="pt-4 border-t">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center row">
                    <div
                      className={
                        artwork.available
                          ? "bg-green-500 flex w-4 h-4 me-2 rounded-full"
                          : "bg-red-500 flex w-4 h-4 me-2 rounded-full"
                      }
                    />
                    <p className="text-sm text-gray-600">
                      {artwork.available ? "Available" : "Not available"}
                    </p>
                  </div>

                  {artwork.available ? (
                    <Button>"Inquire to Purchase"</Button>
                  ) : null}
                </div>
              </div>

              <div className="pt-4 border-t">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center row">
                    {artwork.linked?.map((linkedWork) => (
                      <div className="pr-4">
                        <Image
                          key={linkedWork.id}
                          src={linkedWork.src}
                          alt={linkedWork.title}
                          className="object-cover object-center rounded-lg"
                          quality={100}
                          placeholder="blur"
                          blurDataURL={linkedWork.src}
                          objectFit="contain"
                          width={250}
                          height={300}
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
}
