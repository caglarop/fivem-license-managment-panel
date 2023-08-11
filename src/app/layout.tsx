import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { clsx } from "clsx";
import { DefaultLayout } from "@web/components/layouts/DefaultLayout";
import Providers from "./providers/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CMD Scripts | CMD-Scripts.com",
  description: "CMD-Scripts.com",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, "bg-[#1B1C30] text-white")}>
        <Providers>
          <DefaultLayout>{children}</DefaultLayout>
        </Providers>
      </body>
    </html>
  );
}
