import { Button } from "@/components/ui/button";
import { navigation } from "@/lib/schemas/navigation";
import { Instagram, Mail } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 w-auto border-b bg-white/80 backdrop-blur-sm">
      <div className="container flex h-12 items-center justify-between px-4">
        <Link href="/works" className="text-lg font-semibold">
          Oliver Ballon
        </Link>

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

        <Button variant="outline" className="md:hidden">
          Menu
        </Button>
      </div>
    </header>
  );
}
