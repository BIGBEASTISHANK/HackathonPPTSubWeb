import React from "react";


export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-4 bg-[#010106] py-10 px-20 text-white">
      <p className="text-2xl">
        Made with ❤️ by{" "}
        <a href="https://bigbeastishank.com" className="underline">
          BIGBEASTISHANK
        </a>
      </p>
      <p className="text-2xl">
        This website is made to handle the submission of your PPT for the
        Hackathon.
      </p>
    </footer>
  );
}
