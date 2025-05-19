import { navigation } from "@/lib/schemas/navigation";
import { Instagram, Mail } from "lucide-react";
import Link from "next/link";
import NewsLetter from "./NewsLetter";

export default function Footer() {
  return (
    <footer className="border-t py-12 bg-white">
      {/* <div className="container"> */}
      <div className="flex-row mb-2">
        <NewsLetter />
      </div>
      <div className="flex flex-row mb-4 justify-around items-center sm:wrap">
        <nav className="flex flex-row gap-2">
          {navigation.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-medium hover:text-gray-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-row gap-4">
          <a
            href="https://instagram.com/olliesavestheworld"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="mailto:hello@oliverballon.com"
            rel="noopener"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* </div> */}
      <div className="mt-8 pt-8 border-t text-center text-gray-600">
        <p>© {new Date().getFullYear()} Oliver Ballon. All rights reserved.</p>
      </div>
    </footer>
  );
}
