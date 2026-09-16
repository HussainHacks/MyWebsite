import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

import { ExperienceProvider } from "@/context/ExperienceContext";

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} min-h-screen flex flex-col overflow-x-hidden transition-colors duration-500`}>
        <ExperienceProvider>
          <Navbar />
          <main className="flex-grow relative z-10 pt-20">
            {children}
          </main>
        </ExperienceProvider>
      </body>
    </html>
  );
}
