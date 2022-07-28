import React, { useContext, useState } from "react";
import Logo from "../source/calculator.png";
import { MdOutlineClose } from "react-icons/md";
import { SemContext } from "../App";
import { useNavigate } from "react-router";

const Header = () => {
  const [semModal, setSemModal] = useState(false);
  const [userName, setUserName] = useState("");
  const [semester, setSemester] = useState("");
  const [semInfo, setSemInfo] = useContext(SemContext);
  const Navigate = useNavigate();

  const handleUsername = (e) => {
    setUserName(e.target.value);
    setSemInfo({ username: e.target.value });
  };
  const handleSemester = (e) => {
    setSemester(e.target.value);
    setSemInfo({ username: userName, Semester: e.target.value });
  };

  const handleSubmit = () => {
    semInfo
      ? Navigate(`/s${semInfo.Semester}`, setSemModal(false))
      : Navigate("/", setSemModal(false));
  };

  return (
    <div className="shadow">
      <>
        {semModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-sm md:max-w-lg">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-center justify-between p-5 md:m-4 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-md md:text-3xl md:w-96 font-semibold">
                      Enter your details🚀
                    </h3>
                    <button
                      type="button"
                      className=" text-slate-500 text-xl hover:text-red-400 cursor-pointer"
                      onClick={(e) => setSemModal(false)}
                    >
                      <MdOutlineClose />
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto md:m-2">
                    <div className="mb-6">
                      <form
                        className="flex flex-col gap-2 md:gap-4"
                        onSubmit={handleSubmit}
                      >
                        <label className="text-sm md:text-md font-semibold">
                          Username
                        </label>
                        <input
                          className="border rounded p-1 placeholder:text-sm md:p-2  outline-blue-200"
                          onChange={handleUsername}
                          placeholder="Jhon doe"
                          type="name"
                          name="name"
                        />
                        <label className="text-sm md:text-md font-semibold">
                          Semester
                        </label>
                        <input
                          className="border rounded p-1 placeholder:text-sm md:p-2 outline-blue-200"
                          onChange={handleSemester}
                          placeholder="1 to 6"
                          type="number"
                          name="semester"
                          max="6"
                          min="1"
                        />
                      </form>
                    </div>
                  </div>
                  {/*footer*/}
                  <div className="flex gap-4 items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="border border-slate-100 rounded bg-slate-100 text-sm md:text-md px-4 py-2 text-black hover:text-red-400 cursor-pointer"
                      type="button"
                      onClick={() => setSemModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="border rounded border-blue-500 bg-white text-sm md:text-md px-4 py-2 text-blue-500  hover:bg-blue-300 hover:text-black cursor-pointer"
                      type="button"
                      onClick={handleSubmit}
                    >
                      Dive in
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>

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
              onClick={(e) => setSemModal(true)}
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
