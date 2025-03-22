import React from "react";

type Props = {};

export default function Themes({}: Props) {
  return (
    <div
      className="h-[93vh] scroll-mt-20 items-center justify-center flex flex-col"
      id="themes"
    >
      {/* Title */}
      <h1 className="font-bold text-8xl">Themes</h1>

      {/* Cards Grid */}
      <div className="grid grid-cols-4 gap-4 w-[95%] px-4 mt-16">
        <div className="hover:scale-[1.1] transition-all duration-300 relative h-[30rem] flex items-center justify-center">
          <div className="absolute inset-0 bg-[url('/img/card.svg')] bg-center bg-no-repeat bg-contain z-0"></div>
          <h2 className="text-3xl font-bold z-10 text-center text-white drop-shadow-lg">
            Sustainable Cities
          </h2>
        </div>

        <div className="hover:scale-[1.1] transition-all duration-300 relative h-[30rem] flex items-center justify-center">
          <div className="absolute inset-0 bg-[url('/img/card.svg')] bg-center bg-no-repeat bg-contain z-0"></div>
          <h2 className="text-3xl font-bold z-10 text-center text-white drop-shadow-lg">
            AI for Social Good
          </h2>
        </div>

        <div className="hover:scale-[1.1] transition-all duration-300 relative h-[30rem] flex items-center justify-center">
          <div className="absolute inset-0 bg-[url('/img/card.svg')] bg-center bg-no-repeat bg-contain z-0"></div>
          <h2 className="text-3xl font-bold z-10 text-center text-white drop-shadow-lg">
            <p>FinTech &</p>
            <p>Blockchain</p>
          </h2>
        </div>

        <div className="hover:scale-[1.1] transition-all duration-300 relative h-[30rem] flex items-center justify-center">
          <div className="absolute inset-0 bg-[url('/img/card.svg')] bg-center bg-no-repeat bg-contain z-0"></div>
          <h2 className="text-3xl font-bold z-10 text-center text-white drop-shadow-lg">
            Open Innovations
          </h2>
        </div>
      </div>
    </div>
  );
}
