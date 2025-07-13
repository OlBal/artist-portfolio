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
            src="/about/about-profile-photo.webp"
            alt="Oliver Ballon living his life"
            className="object-cover object-center"
            width={400}
            height={400}
          />
        </div>

        <hr />

        <h1 className="text-xl md:text-lg sm:text-md font-bold mb-4">About</h1>

        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-12 items-start my-4">
          <div className="space-y-6">
            <p>
              Oliver Ballon is a contemporary artist whose work explores the
              intersection of nature, emotion, and human experience. With a
              background in both fine arts and environmental science, her
              paintings bridge the gap between the tangible world and our
              emotional responses to it.
            </p>
            <hr />

            <div className="mt-4">
              <h4 className="text-xl font-bold mb-8 flex items-center">
                Statement
              </h4>

              <div className="prose max-w-none">
                <p>
                  My work is an ongoing exploration of the emotional landscapes
                  we inhabit. I am fascinated by how our inner emotional states
                  color our perception of the physical world around us, and how
                  the natural environment in turn shapes our emotional
                  responses.
                </p>
                <p>
                  Through abstraction, I seek to capture not just the visual
                  essence of a place or moment, but the emotional resonance it
                  creates. Each painting begins with observations from
                  nature—the way light filters through trees, how water reflects
                  and distorts, the patterns of growth and decay—but evolves
                  through an intuitive process of layering, scraping, and
                  mark-making.
                </p>
                <p>
                  Color is central to my practice. I use bold, vibrant palettes
                  to evoke emotional states, creating visual experiences that
                  invite viewers to connect with their own emotional responses
                  to color and form. Texture adds another dimension, making the
                  invisible tangible and bringing a physical presence to
                  emotional states that are often difficult to articulate.
                </p>
                <p>
                  My hope is that viewers find in my work a space for
                  reflection, a moment of recognition, or perhaps a new way of
                  seeing their own emotional connection to the world around
                  them.
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr />

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
