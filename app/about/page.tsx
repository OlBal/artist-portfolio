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
      <main className="container max-w-6xl py-4 px-0 sm:px-4 md:px-8">
        <h1 className="text-2xl font-bold mb-4">About</h1>

        <div className="grid gap-6 items-start my-4 border-t border-gray-200 pt-4 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div className="mb-6 max-w-md md:mb-0 md:sticky md:top-16">
            <Image
              src="/optimized/about/about-profile-photo.webp"
              alt="Oliver Ballon living his life"
              className="h-auto w-full rounded-md object-cover object-center"
              width={400}
              height={400}
            />
          </div>

          <div className="space-y-6">
            <p className="text-base leading-relaxed">
              Oliver Ballon is a painter and maker based in Bristol, UK.
            </p>

            <div className="mt-4">
              <h4 className="text-xl font-bold mb-4">Statement</h4>

              <div className="prose prose-sm sm:prose-base max-w-none leading-relaxed">
                <p className="mb-4">
                  <strong>
                    <i>
                      "Dicking around is fine. Just make sure you're serious
                      about it."
                    </i>
                  </strong>
                </p>
                <p className="mb-2">
                  In trying to capture the iridescence of childhood, Oliver's
                  work hones in on play and the obfuscation of our shared
                  objective reality. Finding a simplicity of making from
                  imagination and curiously interrogating the world, which is a
                  very psychedelic place once you drill down into the nuts and
                  bolts of it.
                </p>
                <p className="mb-2">
                  A lot of form, colour, and structure found and abstracted in
                  Oliver's paintings stem from ephemera such as print catalogues
                  of American department stores from the 1960s and 70s and the
                  colour schemes of lounges that are pillaged for reference. Or
                  the Encyclopedia of Astronomy's images taken during the space
                  race, the spectrum of colours, found at a galactic level,
                  always make for a nice gradated background.
                </p>
                <p className="mb-2">
                  The low-hanging fruit of ideas has all been picked, and in
                  order to find new ground, paintings often found in traditional
                  subject matter, the vase of flowers, the bowl of fruit, a
                  horse, a boat, are subverted. Finding a level of humor and
                  comedy in the blandness of the mundane where a new world is
                  remade to reflect what could be, Oliver's works that step into
                  that world with a sprinkling of the absurd over the top,
                  flowers shaking hands, a sock puppet wearing a cowboy hat, a
                  voguing dandelion, all tip their hats.
                </p>
                <p className="mb-2">
                  Having worked with a background in graphic design, a practice
                  rooted in tradition, everything placed on a grid, so much of
                  what is represented in Oliver's current practice is painted as
                  a rebellion against that. Where previously there was a focus
                  on the clean-cuts, the legibility, and the lack of ambiguity.
                  That which must adhere to the ideas of those who came before
                  and knew better. The rampant and frantic abstraction in the
                  works, mirrored by the precision of form, rallies against
                  order and justification, replaced with exploration, being
                  unbound, and a forward look. Whilst the design process of
                  iteration is used in the background to create the works,
                  Oliver forgoes the usual idea of removal and instead adds
                  layers, removing only the areas underneath. Our current
                  landscape, both politically and socially, is littered with
                  reminders of a potential dystopian paradox, the possibility of
                  a bountiful future, but a weak present which is in stark
                  contrast to the potential offering that was sold to us in the
                  past. Oliver's work looks to carry the torch of that
                  abandonment found in yesteryear in order to find a new avenue
                  for expression of familiar things. Whether in childhood
                  objects that carry a silent weight with them emotionally, or
                  in a sheer visual assault of colour and form that isn't
                  supposed to soothe, but slowly unravels with more
                  interrogation.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-2 items-start">
          <div className="mt-4">
            <h4 className="text-2xl font-bold mb-3">Selected Exhibitions</h4>

            <div className="space-y-4">
              {about.exhibitions.map((exhibitions: Exhibitions, index) => (
                <div key={index} className="space-y-2">
                  <p className="text-lg font-semibold">{exhibitions?.year}</p>
                  {exhibitions.shows.map(
                    (exhibition: Exhibition, exhibitionIndex) => (
                      <div
                        key={exhibitionIndex}
                        className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2"
                      >
                        <p className="font-medium break-words">
                          {exhibition.title}, {exhibition.venue}
                        </p>
                        <p className="text-sm text-gray-600 break-words">
                          {exhibition.location}
                        </p>
                      </div>
                    ),
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 md:mt-8">
            <h4 className="text-2xl font-bold mb-3">Education</h4>

            <div className="space-y-3">
              {about.education.map((education: Education, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2"
                >
                  <p className="font-medium break-words">
                    {education.university}
                  </p>
                  <p className="text-gray-600 break-words">
                    ({education.degree})
                  </p>

                  <div className="inline-flex items-center gap-1 text-sm">
                    <span className="font-medium">{education.startYear}</span>
                    <ArrowRight className="h-3 w-3 text-gray-600" />
                    <span className="font-medium">{education.endYear}</span>
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
