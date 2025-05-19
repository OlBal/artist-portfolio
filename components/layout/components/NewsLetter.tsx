import { Button } from "@/components/ui/button";

export default function NewsLetter() {
  return (
    <section className="py-2 bg-gray-800 text-white">
      <div className="container">
        <div className=" mx-auto text-center">
          <h2 className="text-md font-bold">Stay Updated</h2>
          <p className="text-gray-300 my-2">
            Subscribe to my newsletter to receive updates on new works,
            exhibitions, and studio insights.
          </p>
          <form className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-2 rounded-l-md text-gray-900"
              required
            />
            <Button variant={"secondary"} type="submit">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
