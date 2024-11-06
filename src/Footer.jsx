import React from "react";
import "./index.css";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#FDCA00] border border-[#FEE402] text-white p-4 lg:justify-between lg:items-center grid lg:grid-cols-3 grid-cols-1 pb-10">
        <div className="flex-grow">
          <h2 className="lg:text-xl font-medium mb-2 text-[#1C1C1C] font-custom_1">
            Contacteaza-ne:
          </h2>
          <p className="text-black font-custom_1">
            <span className="lg:font-medium font-small text-[#1C1C1C] font-custom_1">
              Andrei I:
            </span>{" "}
            (+40) 720-416-641
          </p>
        </div>
        <div className="items-center justify-center">
          <p>
            <a
              href="mailto:rezervari@jamonreal.ro"
              className="text-black font-custom_1 lg:text-center block"
            >
              rezervari@jamonreal.ro
            </a>
          </p>
          <p className="text-black font-custom_1 lg:text-center block text-sm md:text-base">
            Nu avem o locatie anume, ne deplasam oriunde in tara!
          </p>
        </div>
        <div className="text-right">
          <p className="md:text-sm text-black font-custom_1">
            © 2024 Usagi Technologies
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
