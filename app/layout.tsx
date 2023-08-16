import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import Providers from "./components/providers";
import Header from "./components/header";

export const metadata: Metadata = {
  title: "Jonah Wagner | Software Engineer",
  description:
    "Software engineer with 5+ years of experience building web applications with Javascript/Typescript, React, Node, and NextJS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
