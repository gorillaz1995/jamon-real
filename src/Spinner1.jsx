import gsap from "gsap";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import spinner3 from "./assets/spinner1.jpg";

// Register ScrollTrigger plugin
gsap.registerPlugin(useGSAP, ScrollTrigger);

function Spinner1() {
  const imageRef = useRef();

  useGSAP(() => {
    const image = imageRef.current;

    // Animation for the spinning image
    gsap.to(image, {
      rotation: -360,
      duration: 10,
      ease: "linear",
      repeat: -1,
    });

    // Cleanup function to remove animation on unmount
    return () => {
      gsap.killTweensOf([image]);
    };
  }, []);

  return (
    <div className="w-full overscroll-auto bg-[#111111] pt-10 pb-20 px-4 overflow-hidden border-t-2 border-b-2 border-[#FEE402]">
      <div className="mx-auto grid md:grid-cols-2 grid-cols-1">
        <div className="relative mx-auto my-20">
          <img
            ref={imageRef}
            className="w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] rounded-full transform scale-110 object-cover"
            src={spinner3}
            alt="paine"
            style={{ transform: "scale(1.2)" }}
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="self-center text-center md:text-2xl sm:text-xl py-2 px-2 font-custom_1 text-[#FDCA00]">
            Oferim o selectie premium de branzeturi traditionale spaniole,
            precum delicioasa branza Gouda, completata de diverse arome rafinate
            de piper, rosii uscate, masline, wasabi sau pesto. Alegerea noastra
            meticuloasa de ingrediente de cea mai inalta calitate garanteaza nu
            doar o experienta culinara memorabila, ci si o demonstratie
            autentica a ospitalitatii spaniole.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Spinner1;