import "./index.css";

import Hero from "./Hero";
import Objectives from "./Objectives";
import Footer from "./Footer";
import Carusel from "./Carusel";
import Spinner1 from "./Spinner1";
import Spinner2 from "./Spinner2";
import Spinner3 from "./Spinner3";
import { animateScroll } from "react-scroll";
import Car2 from "./Car2";

function App() {
  const scrollToTop = () => {
    animateScroll.scrollToTop({
      duration: 100,
      smooth: true,
      touch: true,
    });
  };

  return (
    <div className="overflow-hidden">
      <Hero />
      <Carusel />
      <Spinner2 />
      <Spinner3 />
      <Spinner1 />
      <Car2 />

      <Objectives />

      <Footer />

      <button
        className="fixed bottom-8 right-8 bg-transparent text-[#FDCA00] px-4 py-2 rounded-full shadow-md border border-[#FDCA00]"
        onClick={scrollToTop}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
    </div>
  );
}

export default App;
