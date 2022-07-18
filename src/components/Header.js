import React from "react";
import Logo from "../source/calculator.png";

const Header = () => {
  return (
    <div className="shadow">
      <nav className="bg-white border-gray-200 px-4 sm:px-6 py-2.5">
        <div className="container flex flex-wrap justify-between items-center mx-auto max-w-7xl">
          <a href="/" className="flex items-center">
            <img src={Logo} className="mr-3 h-6 sm:h-9" alt="GPA calci Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap">
              GPA Calci
            </span>
          </a>
          <div className="flex md:order-2">
            <button
              type="button"
              className="text-white text-sm md:text-md bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center mr-3 md:mr-0 "
            >
              Get started
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
