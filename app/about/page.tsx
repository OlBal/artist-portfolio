import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  // Sample exhibition data
  const exhibitions = [
    {
      year: "2023",
      title: "Emotional Landscapes",
      venue: "Modern Art Gallery, San Francisco",
    },
    {
      year: "2022",
      title: "Abstract Visions",
      venue: "Contemporary Arts Center, New York",
    },
    {
      year: "2021",
      title: "Nature's Whispers",
      venue: "Pacific Arts Foundation, Seattle",
    },
    {
      year: "2020",
      title: "Urban Reflections",
      venue: "City Gallery, Chicago",
    },
  ];

  return (
    <div className="min-h-screen">
      <main className="container py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-12">
          About the Artist
        </h1>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=800&width=600&text=Artist Portrait"
              alt="Sophia Chen in her studio"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Sophia Chen</h2>
            <div className="flex items-center text-gray-600">
              <MapPin className="h-4 w-4 mr-2" />
              <span>Based in San Francisco, California</span>
            </div>

            <div className="space-y-4">
              <p>
                Sophia Chen is a contemporary artist whose work explores the
                intersection of nature, emotion, and human experience. With a
                background in both fine arts and environmental science, her
                paintings bridge the gap between the tangible world and our
                emotional responses to it.
              </p>
              <p>
                Born in Taiwan and raised in California, Sophia's multicultural
                background influences her unique perspective on color, form, and
                composition. Her work is characterized by bold brushstrokes,
                vibrant color palettes, and textural elements that invite
                viewers to experience art on both visual and tactile levels.
              </p>
              <p>
                After completing her BFA at Rhode Island School of Design and
                MFA at California College of the Arts, Sophia has exhibited her
                work internationally and has pieces in several private and
                public collections. Her studio practice involves a deep
                connection to natural materials and sustainable art-making
                processes.
              </p>
            </div>

            <div className="pt-4">
              <Button asChild>
                <Link href="/contact">
                  Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-8 flex items-center">
            <Award className="mr-2 h-5 w-5" />
            Selected Exhibitions
          </h2>

          <div className="space-y-6">
            {exhibitions.map((exhibition, index) => (
              <div
                key={index}
                className="flex gap-6 pb-6 border-b last:border-0"
              >
                <div className="font-medium text-lg min-w-[60px]">
                  {exhibition.year}
                </div>
                <div>
                  <h3 className="font-medium">{exhibition.title}</h3>
                  <p className="text-gray-600">{exhibition.venue}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-8 flex items-center">
            <Calendar className="mr-2 h-5 w-5" />
            Artist Statement
          </h2>

          <div className="prose max-w-none">
            <p>
              My work is an ongoing exploration of the emotional landscapes we
              inhabit. I am fascinated by how our inner emotional states color
              our perception of the physical world around us, and how the
              natural environment in turn shapes our emotional responses.
            </p>
            <p>
              Through abstraction, I seek to capture not just the visual essence
              of a place or moment, but the emotional resonance it creates. Each
              painting begins with observations from nature—the way light
              filters through trees, how water reflects and distorts, the
              patterns of growth and decay—but evolves through an intuitive
              process of layering, scraping, and mark-making.
            </p>
            <p>
              Color is central to my practice. I use bold, vibrant palettes to
              evoke emotional states, creating visual experiences that invite
              viewers to connect with their own emotional responses to color and
              form. Texture adds another dimension, making the invisible
              tangible and bringing a physical presence to emotional states that
              are often difficult to articulate.
            </p>
            <p>
              My hope is that viewers find in my work a space for reflection, a
              moment of recognition, or perhaps a new way of seeing their own
              emotional connection to the world around them.
            </p>
          </div>
        </div>
      </main>

      <footer className="border-t py-12 bg-white">
        <div className="container text-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Sophia Chen. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
