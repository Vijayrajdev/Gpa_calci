import _ from "lodash";
import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import "animate.css";

const Cgpa = () => {
  const [semMark1, setSemMark1] = useState(0);
  const [semMark2, setSemMark2] = useState(0);
  const [semMark3, setSemMark3] = useState(0);
  const [semMark4, setSemMark4] = useState(0);
  const [semMark5, setSemMark5] = useState(0);
  const [semMark6, setSemMark6] = useState(0);
  const [semMark7, setSemMark7] = useState(0);
  const [semMark8, setSemMark8] = useState(0);

  const [semCrdt1, setSemCrdt1] = useState("");
  const [semCrdt2, setSemCrdt2] = useState("");
  const [semCrdt3, setSemCrdt3] = useState("");
  const [semCrdt4, setSemCrdt4] = useState("");
  const [semCrdt5, setSemCrdt5] = useState("");
  const [semCrdt6, setSemCrdt6] = useState("");
  const [semCrdt7, setSemCrdt7] = useState("");
  const [semCrdt8, setSemCrdt8] = useState("");

  const [cgpa, setCgpa] = useState("");
  const [percent, setPercent] = useState("");
  const [cgpaModal, setCgpaModal] = useState(false);

  const handleCalculate = () => {
    setCgpaModal(true);
    const totalSemMark = [
      semMark1 * 1,
      semMark2 * 1,
      semMark3 * 1,
      semMark4 * 1,
      semMark5 * 1,
      semMark6 * 1,
      semMark7 * 1,
      semMark8 * 1,
    ];
    const totalCredit = [
      semCrdt1 * 1,
      semCrdt2 * 1,
      semCrdt3 * 1,
      semCrdt4 * 1,
      semCrdt5 * 1,
      semCrdt6 * 1,
      semCrdt7 * 1,
      semCrdt8 * 1,
    ];
    const SemMark = _.sum(totalSemMark);
    const SemCredit = _.sum(totalCredit);
    const Cgpa = SemMark / SemCredit;
    const cgpa = _.round(Cgpa, 3);
    const prc = _.round(cgpa * 10, 3);
    console.log(SemMark, SemCredit);
    setCgpa(cgpa);
    setPercent(prc);
  };

  return (
    <div className="min-h-screen py-10 ">
      <>
        {cgpaModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-sm md:max-w-lg">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-center justify-between p-5 md:m-4 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-md md:text-3xl md:w-96 font-semibold">
                      Your details🚀
                    </h3>
                    <button
                      type="button"
                      onClick={() => setCgpaModal(false)}
                      className=" text-slate-500 text-xl hover:text-red-400 cursor-pointer"
                    >
                      <MdOutlineClose />
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto md:m-2">
                    <div className="mb-6">
                      <div className="text-lg flex flex-row">
                        <h1 className="font-semibold px-2 py-2 ">
                          Your CGPA :
                        </h1>
                        <p className="py-2">{cgpa}</p>
                      </div>
                      <div className="text-lg flex flex-row">
                        <h1 className="font-semibold px-2 py-2">
                          Your Percentage :
                        </h1>
                        <p className="py-2">{percent}</p>
                      </div>
                    </div>
                  </div>
                  {/*footer*/}
                  <div className="flex gap-4 items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="border border-slate-100 rounded bg-slate-100 text-sm md:text-md px-4 py-2 text-black hover:text-red-400 cursor-pointer"
                      type="button"
                      onClick={() => setCgpaModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="border rounded border-blue-500 bg-white text-sm md:text-md px-4 py-2 text-blue-500  hover:bg-blue-300 hover:text-black cursor-pointer"
                      type="button"
                      onClick={() => setCgpaModal(false)}
                    >
                      Done
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
      <div>
        <h1 className="text-2xl md:text-3xl font-semibold text-center pb-3 animate__animated animate__jello">
          Welcome!
        </h1>
        <p className="text-md md:text-lg font-thin text-center pb-4">CGPA</p>
      </div>
      <div class="overflow-x-auto relative">
        <table class="w-full text-sm text-left text-gray-500 ">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" class="py-3 px-3">
                Semester
              </th>
              <th scope="col" class="py-3 px-6">
                Credits
              </th>
              <th scope="col" class="py-3 px-6">
                Your Credits
              </th>
              <th scope="col" class="py-3 px-6">
                Your Sem Mark
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
              >
                Semester 1
              </th>
              <td class="py-4 px-6">23</td>
              <td class="py-4 px-6">
                <select
                  id="Credit"
                  onChange={(e) => setSemCrdt1(e.target.value)}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                >
                  <option selected="">CC</option>
                  <option value="23">23</option>
                </select>
              </td>
              <td class="py-4 px-4">
                <form action="">
                  <input
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    type="number"
                    name="Sem Mark"
                    onChange={(e) => setSemMark1(e.target.value)}
                    placeholder="EX: 230"
                  />
                </form>
              </td>
            </tr>
            <tr class="bg-white border-b">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
              >
                Semester 2
              </th>
              <td class="py-4 px-6">22</td>
              <td class="py-4 px-6">
                <select
                  id="Credit"
                  onChange={(e) => setSemCrdt2(e.target.value)}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                >
                  <option selected="">CC</option>
                  <option value="22">22</option>
                </select>
              </td>
              <td class="py-4 px-4">
                <form action="">
                  <input
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    type="number"
                    name="Sem Mark"
                    onChange={(e) => setSemMark2(e.target.value)}
                    id=""
                    placeholder="EX: 220"
                  />
                </form>
              </td>
            </tr>
            <tr class="bg-white border-b">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
              >
                Semester 3
              </th>
              <td class="py-4 px-6">18</td>
              <td class="py-4 px-6">
                <select
                  id="Credit"
                  onChange={(e) => setSemCrdt3(e.target.value)}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                >
                  <option selected="">CC</option>
                  <option value="18">18</option>
                </select>
              </td>
              <td class="py-4 px-4">
                <form>
                  <input
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    type="number"
                    name="Sem Mark"
                    id=""
                    onChange={(e) => setSemMark3(e.target.value)}
                    placeholder="EX: 180"
                  />
                </form>
              </td>
            </tr>
            <tr class="bg-white border-b">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
              >
                Semester 4
              </th>
              <td class="py-4 px-6">26</td>
              <td class="py-4 px-6">
                <select
                  id="Credit"
                  onChange={(e) => setSemCrdt4(e.target.value)}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                >
                  <option selected="">CC</option>
                  <option value="26">26</option>
                </select>
              </td>
              <td class="py-4 px-4">
                <form>
                  <input
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    type="number"
                    name="Sem Mark"
                    onChange={(e) => setSemMark4(e.target.value)}
                    id=""
                    placeholder="EX: 260"
                  />
                </form>
              </td>
            </tr>
            <tr class="bg-white border-b">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
              >
                Semester 5
              </th>
              <td class="py-4 px-6">20</td>
              <td class="py-4 px-6">
                <select
                  id="Credit"
                  onChange={(e) => setSemCrdt5(e.target.value)}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                >
                  <option selected="">CC</option>
                  <option value="20">20</option>
                </select>
              </td>
              <td class="py-4 px-4">
                <form>
                  <input
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    type="number"
                    name="Sem Mark"
                    onChange={(e) => setSemMark5(e.target.value)}
                    id=""
                    placeholder="EX: 200"
                  />
                </form>
              </td>
            </tr>
            <tr class="bg-white border-b">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
              >
                Semester 6
              </th>
              <td class="py-4 px-6">21</td>
              <td class="py-4 px-6">
                <select
                  id="Credit"
                  onChange={(e) => setSemCrdt6(e.target.value)}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                >
                  <option selected="">CC</option>
                  <option value="21">21</option>
                </select>
              </td>
              <td class="py-4 px-4">
                <form>
                  <input
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    type="number"
                    name="Sem Mark"
                    onChange={(e) => setSemMark6(e.target.value)}
                    id=""
                    placeholder="EX: 210"
                  />
                </form>
              </td>
            </tr>
            <tr class="bg-white border-b">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
              >
                Semester 7
              </th>
              <td class="py-4 px-6">23</td>
              <td class="py-4 px-6">
                <select
                  id="Credit"
                  onChange={(e) => setSemCrdt7(e.target.value)}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                >
                  <option selected="">CC</option>
                  <option value="23">23</option>
                </select>
              </td>
              <td class="py-4 px-4">
                <form>
                  <input
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    type="number"
                    name="Sem Mark"
                    onChange={(e) => setSemMark7(e.target.value)}
                    id=""
                    placeholder="EX: 230"
                  />
                </form>
              </td>
            </tr>
            <tr class="bg-white border-b">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
              >
                Semester 8
              </th>
              <td class="py-4 px-6">10</td>
              <td class="py-4 px-6">
                <select
                  id="Credit"
                  onChange={(e) => setSemCrdt8(e.target.value)}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                >
                  <option selected="">CC</option>
                  <option value="10">10</option>
                </select>
              </td>
              <td class="py-4 px-4">
                <form>
                  <input
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    type="number"
                    name="Sem Mark"
                    onChange={(e) => setSemMark8(e.target.value)}
                    id=""
                    placeholder="EX: 100"
                  />
                </form>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="text-center py-4">
        <button
          type="button"
          onClick={handleCalculate}
          className="text-white text-sm md:text-md bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded px-5 py-2.5 mr-3 md:mr-0 "
        >
          Calculate CGPA
        </button>
      </div>
    </div>
  );
};

export default Cgpa;
