import React from "react";
import "animate.css";
import mainImg from "../source/Calculator-bro.svg";

const Welcome = () => {
  return (
    <div>
      <div className="min-h-screen md:min-h-[80vh] p-8 md:p-12 md:max-w-7xl mx-auto ">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
          <div className="text-center md:text-justify gap-6 flex flex-col">
            <h1 className="text-3xl md:text-4xl animate__animated animate__jackInTheBox">
              Welcome to GPA Calci.
            </h1>
            <p className="text-sm md:text-md text-gray-500">
              This application is developed and maintained by a unknown guy.
            </p>
            <a href="/">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm md:text-md px-5 py-2.5 text-center mr-3 md:mr-0 "
              >
                Get started
              </button>
            </a>
          </div>
          <div className="h-[70vh] animate__animated animate__zoomIn">
            <img src={mainImg} alt="" className="h-full w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
