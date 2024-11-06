import React from "react";

import img1 from "./assets/hero1.jpg"; // Replace with your image path

function Carusel() {
  return (
    <div className="w-full h-[480px] lg:h-[780px] bg-[#1C1C1C] overflow-hidden border-t-2 border-b-2 border-[#FEE402] rounded relative">
      <img
        src={img1}
        alt="Banner Image"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-[15%] left-[5%] lg:left-[10%] z-10">
        <h1 className="text-left text-[#FDCA00] font-custom_1 text-4xl lg:text-6xl">
          Savoarea Spaniei, in felii subtiri de perfectiune.
        </h1>
      </div>
    </div>
  );
}

export default Carusel;
