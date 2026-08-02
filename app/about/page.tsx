import {
  about,
  Education,
  Exhibition,
  Exhibitions,
} from "@/lib/schemas/about/about";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex justify-center px-4">
      <main className="container py-4 px-0 sm:px-4 md:px-8 ">
        <div className="relative mb-4">
          <Image
            src="/optimized/about/about-profile-photo.webp"
            alt="Oliver Ballon living his life"
            className="object-cover object-center"
            width={400}
            height={400}
          />
        </div>

        <h1 className="text-xl md:text-lg sm:text-md font-bold mb-4">About</h1>

        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-6 items-start my-4  border-t border-gray-200 p-4">
          <div className="space-y-6 ">
            <p>Oliver Ballon is a painter and maker based in Bristol, UK.</p>

            <div className="mt-4 ">
              <h4 className="text-xl font-bold mb-8 flex items-center">
                Statement
              </h4>

              <div className="prose max-w-none">
                <p>
                  Oliver Ballon is a Bristol-based artist whose works focus on
                  extruding fantastical narratives out of largely traditional
                  subject matter, resembling a stoic magical realism, of
                  traditional still-life compositions and raunchy abstraction.
                </p>
                <p>
                  Influenced by late-stage abstract graffiti, the psychedelic
                  1960s California and Japan, and mid-century abstract
                  expressionism. Many of the compositions are color schemes and
                  forms merged and abstracted from mundane sources like vintage
                  furniture catalogues and random items found on the street.
                  Whilst others are taken from the artist’s domestic living
                  spaces and placed into an entirely new visual lexicon, giving
                  more meaning and a sense of narrative around them.
                </p>
                <p>
                  The primary focus of this endeavor is to manipulate reality
                  and craft novel narratives. By transforming the mundane into a
                  more twisted vision of the ordinary, the endeavor pushes the
                  boundaries of what is expected and refined.
                </p>
                <p>
                  The resulting experiences sometimes play more towards humor
                  than towards the seriousness of the traditional subject matter
                  at hand. Flowers, fruit, and landscapes, always held as
                  traditional and easy-to-follow subject matter, are mutated
                  into intense and often graphic departures from expectation.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="mt-4">
            <h4 className="text-xxl font-bold mb-3 flex items-center">
              Selected Exhibitions
            </h4>

            <div className="space-y-2">
              {about.exhibitions.map((exhibitions: Exhibitions, index) => (
                <div key={index}>
                  <p>{exhibitions?.year}</p>
                  {exhibitions.shows.map((exhibition: Exhibition, index) => (
                    <div className="flex column gap-2" key={index}>
                      <div className="flex row items-center space-between gap-2 font-medium text-md">
                        <p>
                          {exhibition.title}, {exhibition.venue}
                        </p>
                        <p>
                          <small className="text-gray-600">
                            {exhibition.location}
                          </small>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h4 className="text-xxl font-bold mb-3 flex items-center">
              Education
            </h4>

            <div className="space-y-2">
              {about.education.map((education: Education, index) => (
                <div key={index} className="flex gap-2">
                  <div className="inline-flex gap-2">
                    <p>{education.university}</p>
                    <p className="text-gray-600">({education.degree})</p>

                    <div className="inline-flex items-center gap-1">
                      <small className="font-medium">
                        {education.startYear}
                      </small>
                      <ArrowRight className="h-3 w-3 text-gray-600" />
                      <small className="font-medium">{education.endYear}</small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
