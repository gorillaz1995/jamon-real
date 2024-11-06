import React from "react";
import jamon from "./assets/jamon_real.png"; // Importing Jamon from exodia folder

function Hero() {
  return (
    <div className="bg-[#1C1C1C] overflow-hidden relative max-h-64">
      <div className="container mx-auto flex items-center justify-center px-4 h-full">
        <div className="relative flex flex-col items-center h-full">
          {/* Adjusted position */}
          <div className="mt-[-55px] lg:mt-[-110px]">
            <img src={jamon} alt="jamon" className="w-auto jamon lg:scale-75" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
