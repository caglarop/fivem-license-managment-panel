import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers/Providers";
import { clsx } from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CMD Scripts | License Panel",
  description: "CMD Scripts | License Panel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, "bg-[#1B1C30] text-white")}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
