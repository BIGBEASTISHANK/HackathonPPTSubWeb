import type { Metadata } from "next";
import { Tektur } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HtmlHTMLAttributes } from "react";

const tekturFont = Tektur({
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
        className={`${tekturFont.className} antialiased bg-[#07071C] text-[#F6F9FC]`}
        id="home"
      >
        {/* Main content */}
        <div className="max-[1160px]:hidden">
          {/* Navbar */}
          <Navbar />
          {children}
          {/* Footer */}
          <Footer />
        </div>

        {/* Please open in desktop */}
        <div className="min-[1160px]:hidden h-[100vh] flex flex-col justify-center items-center px-10">
          <p className="text-3xl text-center">Please open in desktop or on a tablet with a larger screen.</p>
        </div>
      </body>
    </html>
  );
}
