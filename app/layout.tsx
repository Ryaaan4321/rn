import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SpotifyWidget from "@/components/Spotify-Widget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aryan Bhashkar — Backend Developer",
  description: "I build APIs, design database architectures, and write server-side code that performs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <SpotifyWidget />
      </body>
    </html>
  );
}