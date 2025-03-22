import React from "react";


export default function About() {
  return (
    <div
      className="h-[93vh] scroll-mt-20 items-center justify-center flex flex-col"
      id="about"
    >
      {/* Title */}
      <h1 className="font-bold text-8xl mb-30">About Us</h1>

      {/* Description */}
      <p className="text-center max-w-[60rem] mx-5 text-xl mb-15">
        Welcome to [Hackathon Name], a dynamic and collaborative innovation
        challenge where creativity meets technology! Our hackathon brings
        together developers, designers, entrepreneurs, and problem-solvers to
        create groundbreaking solutions to real-world challenges. Whether you're
        a seasoned coder or a first-time hacker, this is your chance to learn,
        network, and showcase your skills in a fast-paced, supportive
        environment. With exciting prizes, expert mentorship, and hands-on
        workshops, [Hackathon Name] is the perfect place to turn ideas into
        reality. Join us and push the boundaries of innovation!
      </p>

      {/* See theme button */}
      <a
        href="#themes"
        className="hover:scale-[1.1] transition-all duration-300 bg-[#010106] border-2 border-white text-white px-15 py-3 rounded-lg mt-10 font-bold text-xl"
      >
        See Themes
      </a>
    </div>
  );
}
