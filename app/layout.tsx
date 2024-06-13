import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Header from "../src/components/header";
import Providers from "../src/components/Providers";

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
