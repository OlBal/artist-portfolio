"use client";

import Footer from "@/components/layout/components/Footer";
import Header from "@/components/layout/components/Header";
import { useRef } from "react";
import "./globals.css";
import Splash from "./splash/page";

// export const metadata: Metadata = {
//   title: "v0 App",
//   description: "Created with v0",
//   generator: "v0.dev",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  function useFirstRender() {
    const ref = useRef(true);
    const firstRender = ref.current;
    ref.current = false;
    return firstRender;
  }

  let displaySplash = useFirstRender();

  return (
    <html lang="en">
      <head></head>
      <body>
        {displaySplash ? (
          <Splash />
        ) : (
          <>
            <Header />
            {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
