import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import {Inter as FontSans} from "next/font/google"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fontSans=FontSans({
  subsets:["latin"],
  variable:"--font-sans"
})

export const metadata: Metadata = {
  title: "LiveDocs",
  description: "GOATED editor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("min-h-screen font-sans antialiased",fontSans.variable)}
      >
        {children}
      </body>
    </html>
  );
}
