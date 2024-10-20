import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // For hamburger and close icons

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#041724] text-white px-8 md:px-16 lg:px-24 sticky top-0 z-50">
      <div className="container py-2 flex justify-between items-center">
        {/* Brand Logo */}
        <div className="text-[22px] font-bold hover:cursor-pointer hover:text-[#def2ff]">
          Portfolio
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
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

        {/* Connect Me button (always visible) */}
        <button className="hidden md:block bg-gradient-to-r from-green-400 to-blue-500 transform transition-transform  duration-300 hover:scale-105 px-4 py-2 rounded-full hover:text-[#0b254d] text-[#081725] font-semibold">
          <a href="#contact">Connect Me</a>
        </button>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 bg-[#041724] text-white py-4">
          <a
            href="#"
            onClick={toggleMenu}
            className="hover:text-gray-400 font-semibold"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={toggleMenu}
            className="hover:text-gray-400 font-semibold"
          >
            About Me
          </a>
          <a
            href="#service"
            onClick={toggleMenu}
            className="hover:text-gray-400 font-semibold"
          >
            Services
          </a>
          <a
            href="#project"
            onClick={toggleMenu}
            className="hover:text-gray-400 font-semibold"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={toggleMenu}
            className="hover:text-gray-400 font-semibold"
          >
            Contact
          </a>
          <button
            onClick={toggleMenu}
            className="bg-gradient-to-r from-green-400 to-blue-500 transform transition-transform  duration-300 hover:scale-105 px-4 py-2 rounded-full hover:text-[#0b254d] text-[#081725] font-semibold"
          >
            <a href="#contact">Connect Me</a>
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
