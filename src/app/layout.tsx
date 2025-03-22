import type { Metadata } from "next";
import { Tektur } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body
        className={`${tekturFont.className} antialiased text-[#F6F9FC] relative overflow-x-hidden`}
        id="home"
      >
        {/* Gradient Background */}
        <div className="fixed inset-0 bg-[#07071C] -z-10">
          {/* Top-left large blue circular gradient */}
          <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#4A90E2] bg-opacity-15 blur-[100px]"></div>

          {/* Middle gradient accent */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-3/4 bg-gradient-to-r from-[#2A2A5C] via-[#3B1D5A] to-[#2A2A5C] blur-[80px] opacity-50"></div>

          {/* Bottom-right large blue circular gradient */}
          <div className="absolute -bottom-24 -right-24 w-[400px] h-[400px] rounded-full bg-[#6ACDFF] bg-opacity-10 blur-[100px]"></div>
        </div>

        {/* Main content */}
        <div className="max-[1160px]:hidden relative z-10">
          {/* Navbar */}
          <Navbar />
          {children}
          {/* Footer */}
          <Footer />
        </div>

        {/* Please open in desktop */}
        <div className="min-[1160px]:hidden h-[100vh] flex flex-col justify-center items-center px-10 relative z-10">
          <p className="text-3xl text-center">
            Please open in desktop or on a tablet with a larger screen.
          </p>
        </div>
      </body>
    </html>
  );
}
