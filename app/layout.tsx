import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Doc It Now — Legal documents in minutes",
  description:
    "Create notary-ready legal documents with a simple, guided, step-by-step process. No legal experience needed.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased text-slate-900 bg-white">{children}</body>
    </html>
  );
}