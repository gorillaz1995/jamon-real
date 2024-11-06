import React from "react";
import twoBusi from "./assets/despre_noi.jpg";
import { ReactTyped } from "react-typed";

function Objectives() {
  return (
    <div className="w-full overscroll-auto bg-[#1C1C1C] py-20 overflow-hidden border-t-2 border-b-2 border-[#FEE402]">
      <div className="max-w-[1500px] mx-auto grid md:grid-cols-2 grid-cols-1 gap-22 lg:gap-32">
        <div className="relative rounded-full overflow-hidden border-[#FDCA00] border-2 lg:mx-auto my-10">
          <img
            className="object-cover w-full h-full"
            src={twoBusi}
            alt="paine"
          />
        </div>
        <div className="flex flex-col">
          <div className="self-center lg:text-2xl md:text-xl text-xl font-custom_1 text-[#FEE402] pt-5 pb-10">
            Despre noi
          </div>
          <ReactTyped
            strings={[
              "Bun venit la Jamon Real, unde pasiunea pentru bucatele spaniole prinde viata! Noi suntem Andrei si Miruna, doi entuziasti ai gastronomiei spaniole, gata sa va surprindem cu experiente culinare memorabile.<br> Cu ani de zile de pasiune si munca in spatele nostru, ne-am propus sa aducem un strop de Spania direct la evenimentul tau special.  Ne-am propus sa va oferim mai mult decat o simpla masa.<br> Scopul nostru este sa transformam fiecare eveniment intr-o experienta autentic spaniola, bogata in gusturi, arome si eleganta. Conceptul nostru de Jamon Bar este o alternativa inovatoare care iti va aduce multe amintiri frumoase!",
            ]}
            typeSpeed={4}
            showCursor={false}
            className="self-center md:text-2xl sm:text-xl py-2 px-2 font-custom_1 text-[#FDCA00] text-center"
          />
        </div>
      </div>
    </div>
  );
}

export default Objectives;
