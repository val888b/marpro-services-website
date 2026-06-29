import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "MarPro Services | Commercial Cleaning & Property Maintenance | San Jose, CA",
  description:
    "Commercial cleaning, janitorial, pressure washing, and exterior property maintenance for the Bay Area. Serving San Jose, Milpitas, HOAs, medical offices, and commercial plazas.",
  metadataBase: new URL("https://marproservices.io"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-[#07090f] text-[#e6e8ec]">
        {children}
      </body>
    </html>
  );
}
