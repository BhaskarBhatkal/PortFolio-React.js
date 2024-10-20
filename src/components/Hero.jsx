import React from "react";
import HeroImage from "../assets/images/Icon03.jpg";
import resume from "../../public/Resume.pdf";

function Hero() {
  return (
    <div className="bg-black text-white text-center py-16 ">
      <img
        src={HeroImage}
        alt=""
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
      />
      <h1 className="text-4xl font-bold">
        I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Bhaskar Moger
        </span>
        , Full-Stack Developer
      </h1>
      <p className="mt-4 text-lg text-gray-300 font-mono ">
        I'm <span className="font-bold">Passionated</span> in building modern
        and responsive web applications.
      </p>
      <div className="mt-8 space-x-4">
        <button className="bg-gradient-to-r from-green-400 to-blue-500 transform transition-transform  duration-300 hover:scale-105 px-4 py-2 rounded-full hover:text-[#0b254d] text-[#081725] font-bold">
          <a href="#contact"> Contact With Me</a>
        </button>
        <button
          onClick={() => window.open(resume, "_blank")}
          className="bg-gradient-to-r from-green-400 to-blue-500 transform transition-transform  duration-300 hover:scale-105 px-4 py-2 rounded-full hover:text-[#0b254d] text-[#081725] font-bold"
        >
          Resume
        </button>
      </div>
    </div>
  );
}

export default Hero;
