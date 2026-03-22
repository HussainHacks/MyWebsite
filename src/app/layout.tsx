import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Syed Ahmed Hussain | Portfolio",
  description: "Computer Engineering Student | Software | Embedded | Security | AI Automation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased text-white bg-[#050505] min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow relative z-10 pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
