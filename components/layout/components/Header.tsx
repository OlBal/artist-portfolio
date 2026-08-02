import { navigation } from "@/lib/schemas/navigation";
import { Instagram, Mail, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 w-auto border-b bg-white/80 backdrop-blur-sm">
      <div className="flex h-12 items-center justify-between px-4">
        <Link href="/works" className="text-lg font-semibold">
          Oliver Ballon
        </Link>

        <div>
          <nav className="hidden md:flex gap-12 justify-around items-center">
            <menu>
              <ul className="flex gap-6">
                {navigation.map((link, index) => (
                  <li key={`${link.label}-${index}`}>
                    <Link
                      href={link.href}
                      className="font-medium hover:text-gray-600 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </menu>
            <div className="flex flex-row gap-6">
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
          </nav>

          <details className="md:hidden">
            <summary className="list-none cursor-pointer rounded border border-gray-300 px-3 py-2 text-sm text-black bg-transparent hover:bg-gray-100">
              <span className="flex items-center gap-2">
                <Menu className="h-4 w-4" />
                Menu
              </span>
            </summary>

            <div className="pl-2 pt-2 fixed inset-0 z-20 bg-white h-screen flex flex-col justify-center items-center gap-5">
              <summary className="list-none cursor-pointer absolute top-10 right-5 rounded border border-gray-300 px-3 py-2 text-sm text-black bg-transparent hover:bg-gray-100">
                <span className="flex items-center gap-2">
                  Close
                  <X className="h-4 w-4" />
                </span>
              </summary>

              {navigation.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://instagram.com/olliesavestheworld"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition-colors"
              >
                <Instagram className="h-5 w-5" />
                Instagram
              </a>
              <a
                href="mailto:hello@oliverballon.com"
                rel="noopener"
                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition-colors"
              >
                <Mail className="h-5 w-5" /> Email
              </a>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
