import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { type ReactNode } from "react";
import ContextProvider from "./lib/context";

import "@repo/ui/styles.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | SocraTalk",
    default: "SocraTalk",
  },
  description: "Gamify your classroom discussions",
};

export default function RootLayout({
  children,
}: {
  children?: ReactNode;
}): ReactNode {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>{children}</ContextProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
