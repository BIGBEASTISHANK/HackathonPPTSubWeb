"use client";
import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full ${
        scrolled ? "h-[5rem]" : "h-[6rem]"
      } flex items-center justify-end ${
        scrolled ? "px-10" : "px-20"
      } text-white transition-all duration-300 ${
        scrolled ? "bg-[#010106] shadow-lg" : "bg-transparent"
      } z-[100]`}
    >
      <ul
        className={`flex ${
          scrolled ? "gap-10" : "gap-20"
        } text-3xl transition-all duration-300`}
      >
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#themes">Themes</a>
        </li>
        <li>
          <a href="#submit">Submit</a>
        </li>
      </ul>
    </nav>
  );
}
