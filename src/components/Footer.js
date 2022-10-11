import React from "react";
import Logo from "../source/calculator.png";

const Footer = () => {
  return (
    <div className="shadow">
      <footer className="p-4 bg-white md:px-6 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between max-w-7xl mx-auto">
          <a href="/" className="flex items-center mb-4 sm:mb-0">
            <img src={Logo} className="mr-3 h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">
              GPA Calci
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 ">
            <li>
              <a href="/" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="/contributors" className="mr-4 hover:underline md:mr-6 ">
                Contributors
              </a>
            </li>
            <li>
              <a href="/" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/" className="mr-4 hover:underline md:mr-6 ">
                Licensing
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center ">
          © 2022{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            GPACalci™
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </div>
  );
};

export default Footer;
