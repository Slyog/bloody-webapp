import type { Metadata } from "next";
import { Inter as CustomFont } from "next/font/google";
import { ReactNode } from "react";

import Announcement from "@/components/widgets/Announcement";
import Footer2 from "@/components/widgets/Footer2";
import Header from "@/components/widgets/Header";
import Providers from "@/components/atoms/Providers";
import { SITE } from "@/config";
import "./globals.css";

const customFont = CustomFont({
  subsets: ["latin"],
  variable: "--font-custom",
});

export const metadata: Metadata = {
  title: {
    template: `%s — ${SITE.name}`,
    default: SITE.title,
  },
  description: SITE.description,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`motion-safe:scroll-smooth 2xl:text-[24px] ${customFont.variable} font-sans`}
      suppressHydrationWarning
    >
      <body className="bg-white text-gray-900 antialiased dark:bg-slate-900 dark:text-slate-300">
        <Providers>
          <Announcement />
          <Header />
          <main>{children}</main>
          <Footer2 />
        </Providers>
      </body>
    </html>
  );
}
