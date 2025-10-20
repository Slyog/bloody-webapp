import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import { ReactNode } from "react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import { SITE } from "@/config";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-futuristic",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={orbitron.variable}
      suppressHydrationWarning
    >
      <body className="bg-dark text-neutral-100 antialiased transition-colors duration-300 ease-in-out">
        <Providers>
          <Navbar />
          <main className="pt-20">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
