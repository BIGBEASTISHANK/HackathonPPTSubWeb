import About from "@/components/About";
import Contact from "@/components/Contact";
import Intro from "@/components/Intro";
import Sponsors from "@/components/Sponsors";
import Themes from "@/components/Themes";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <div>
      {/* Intro section */}
      <Intro />
      <About />
      <Themes />
      <Sponsors />
      <Contact />
    </div>
  );
}
