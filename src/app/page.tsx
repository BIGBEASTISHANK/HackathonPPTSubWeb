import About from "@/components/About";
import Intro from "@/components/Intro";
import Submit from "@/components/Submit";
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
      <Submit />
    </div>
  );
}
