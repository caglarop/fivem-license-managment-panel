import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { clsx } from "clsx";
import { DefaultLayout } from "@web/components/layouts/DefaultLayout";
import Providers from "./providers/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "THEMOON Scripts | THEMOON-SCRIPTS.COM",
  description: "THEMOON-SCRIPTS.COM",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, "")}>
        <Providers>
          <DefaultLayout>{children}</DefaultLayout>
        </Providers>
      </body>
    </html>
  );
}
