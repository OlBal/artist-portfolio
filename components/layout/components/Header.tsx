import { Button } from "@/components/ui/button";
import { navigation } from "@/lib/schemas/navigation";
import { Instagram, Mail, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(() => !open);
  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-10 w-auto border-b bg-white/80 backdrop-blur-sm">
      <div className="flex h-12  items-center justify-between px-4">
        <Link href="/works" className="text-lg font-semibold">
          Oliver Ballon
        </Link>

        <div>
          <nav className="hidden md:flex gap-12 justify-around items-center">
            <div className="flex gap-6">
              {navigation.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-medium hover:text-gray-600 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
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

          <div>
            <Button
              variant="outline"
              onClick={() => toggleMenu()}
              aria-label="Open menu"
              className={`${open ? "hidden" : "block"} md:hidden`}
            >
              Menu
            </Button>

            <Button
              variant="outline"
              onClick={() => toggleMenu()}
              aria-label="Open menu"
              className={`${open ? "block" : "hidden"} md:hidden z-999`}
            >
              Close
              <X />
            </Button>

            <div
              className={`py-2 flex flex-col gap-2 ${
                !open
                  ? "hidden"
                  : "pl-2 pt-2 fixed inset-0 z-20 bg-white h-screen flex flex-col justify-center items-center gap-5"
              }`}
            >
              {navigation.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://instagram.com/olliesavestheworld"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition-colors"
                onClick={() => setOpen(false)}
              >
                <Instagram className="h-5 w-5" />
                Instagram
              </a>
              <a
                href="mailto:hello@oliverballon.com"
                rel="noopener"
                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition-colors"
                onClick={() => setOpen(false)}
              >
                <Mail className="h-5 w-5" /> Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
