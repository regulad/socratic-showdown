import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import ContextProvider from "./lib/context";
import { ChildrenProps } from "./lib/types";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Socratic Showdown",
  description:
    "Socratic Showdown gamifies the Socratic Seminar to provide a more engaging and interactive experience for students.",
};

export default function RootLayout({ children }: ChildrenProps): JSX.Element {
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
