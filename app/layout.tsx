import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SpotifyWidget from "@/components/Spotify-Widget";
import { PortfolioNav } from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aryan Bhashkar — Backend Developer",
  description: "I build APIs, design database architectures, and write server-side code that performs.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0a0a0a] text-[#F2F2F2] antialiased`}>
        <PortfolioNav />
        <main className="pt-0 lg:pt-24">{children}</main>
      </body>
    </html>
  );
}