import About from "@/components/About";
import Intro from "@/components/Intro";
import Submit from "@/components/Submit";
import Themes from "@/components/Themes";
import React from "react";


export default function page() {
  return (
    <div>
      {/* Intro section */}
      <Intro />
      <About />
      <Themes />
      <Submit />
    </div>
  );
}
