import React from "react";
import { Playwrite_HU, Big_Shoulders_Stencil_Text } from "next/font/google";

const playwriteHU = Playwrite_HU({
  variable: "--font-playwrite-us-modern",
});

const bigShouldersFont = Big_Shoulders_Stencil_Text({
  variable: "--font-big-shoulders-stencil-text",
  subsets: ["latin"],
});


export default function Intro() {
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center gap-4 bg-[image:url(/img/city.png)] bg-cover bg-no-repeat">
      {/* Title div */}
      <h2 className={`${playwriteHU.className} text-6xl`}>Welcome to</h2>
      <h1 className={`${bigShouldersFont.className} text-[7rem] font-bold`}>
        Hackathon PPT Submission
      </h1>
    </div>
  );
}
