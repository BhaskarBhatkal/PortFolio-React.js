import React from "react";

function Navbar() {
  return (
    <nav className="bg-[#041724] text-white px-8 md:px-16 lg:px-24 sticky top-0 z-50">
      <div className="container py-2 flex justify-center md:justify-between items-center">
        <div className="text-[22px] font-bold hidden md:inline hover:cursor-pointer hover:text-[#def2ff]">
          Portfolio
        </div>

        <div className="space-x-6">
          <a href="#" className="hover:text-gray-400 font-semibold">
            Home
          </a>
          <a href="#about" className="hover:text-gray-400 font-semibold">
            About Me
          </a>
          <a href="#service" className="hover:text-gray-400 font-semibold">
            Services
          </a>
          <a href="#project" className="hover:text-gray-400 font-semibold">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-400 font-semibold">
            Contact
          </a>
        </div>

        <button className="bg-gradient-to-r from-green-400 to-blue-500 transform transition-transform  duration-300 hover:scale-105 px-4 py-2 rounded-full hover:text-[#0b254d] text-[#081725] font-semibold">
          <a href="#contact">Connect Me</a>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
