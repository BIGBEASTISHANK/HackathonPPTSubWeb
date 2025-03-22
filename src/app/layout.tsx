import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HtmlHTMLAttributes } from "react";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hackathon PPT Submit",
  description: "Submit your hackathon PPT here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      style={{ "scroll-behavior": "smooth" } as HtmlHTMLAttributes<HTMLElement>}
    >
      <body
        className={`${geistMono.className} antialiased bg-[#07071C] text-[#F6F9FC]`}
        id="home"
      >
        {/* Navbar */}
        <Navbar />
        {children}

        <Footer />
      </body>
    </html>
  );
}
