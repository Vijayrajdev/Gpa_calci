import _ from "lodash";
import React, { useContext, useState } from "react";
import { SemContext } from "../../App";
import { MdOutlineClose } from "react-icons/md";

const SemThree = () => {
  const [semInfo] = useContext(SemContext);
  const [semMark1, setSemMark1] = useState("");
  const [semMark2, setSemMark2] = useState("");
  const [semMark3, setSemMark3] = useState("");
  const [semMark4, setSemMark4] = useState("");
  const [semMark5, setSemMark5] = useState("");
  const [semMark6, setSemMark6] = useState("");
  const [semMark7, setSemMark7] = useState("");
  const [semMark8, setSemMark8] = useState("");
  const [semMark9, setSemMark9] = useState("");
  const [gpa, setGpa] = useState("");
  const [percent, setPercent] = useState("");
  const [gpaModal, setGpaModal] = useState(false);

  const handleCalculate = () => {
    setGpaModal(true);
    const totalSemMark = [
      semMark1 * 3,
      semMark2 * 3,
      semMark3 * 3,
      semMark4 * 2,
      semMark5 * 2,
      semMark6 * 2,
      semMark7 * 3,
    ];
    const SemMark = _.sum(totalSemMark);
    const pgpa = SemMark / 18;
    const gpa = _.round(pgpa, 3);
    const prc = _.round(gpa * 10, 3);
    setGpa(gpa);
    setPercent(prc);
  };

  return (
    <div className="min-h-screen py-10 ">
      <>
        {gpaModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-sm md:max-w-lg">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-center justify-between p-5 md:m-4 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-md md:text-3xl md:w-96 font-semibold">
                      {semInfo.username} details🚀
                    </h3>
                    <button
                      type="button"
                      onClick={() => setGpaModal(false)}
                      className=" text-slate-500 text-xl hover:text-red-400 cursor-pointer"
                    >
                      <MdOutlineClose />
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto md:m-2">
                    <div className="mb-6">
                      <div className="text-lg flex flex-row">
                        <h1 className="font-semibold px-2 py-2 ">Your GPA :</h1>
                        <p className="py-2">{gpa}</p>
                      </div>
                      <div className="text-lg flex flex-row">
                        <h1 className="font-semibold px-2 py-2">
                          Your Eqivalent Percentage :
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
                      onClick={() => setGpaModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="border rounded border-blue-500 bg-white text-sm md:text-md px-4 py-2 text-blue-500  hover:bg-blue-300 hover:text-black cursor-pointer"
                      type="button"
                      onClick={() => setGpaModal(false)}
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
        <h1 className="text-2xl md:text-3xl font-semibold text-center pb-3">
          Welcome {semInfo.username}
        </h1>
        <p className="text-md md:text-lg font-thin text-center pb-4">
          Semester {semInfo.Semester}
        </p>
      </div>
      <div class="overflow-x-auto relative">
        <table class="w-full text-sm text-left text-gray-500 ">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" class="py-3 px-6">
                Subject name
              </th>
              <th scope="col" class="py-3 px-6">
                Subject code
              </th>
              <th scope="col" class="py-3 px-6">
                Credits
              </th>
              <th scope="col" class="py-3 px-6">
                Grade
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
              >
                Electronic Circuits
              </th>
              <td class="py-4 px-6">JEC1302</td>
              <td class="py-4 px-6">3</td>
              <td class="py-4 px-4">
                <select
                  id="Grade"
                  onChange={(e) => setSemMark1(e.target.value)}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                >
                  <option selected="">CG</option>
                  <option value="10">O</option>
                  <option value="9">A+</option>
                  <option value="8">A</option>
                  <option value="7">B+</option>
                  <option value="6">B</option>
                </select>
              </td>
            </tr>
            <tr class="bg-white border-b">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
              >
                Digital Electronics
              </th>
              <td class="py-4 px-6">JEC1303</td>
              <td class="py-4 px-6">3</td>
              <td class="py-4 px-4">
                <select
                  id="Grade"
                  onChange={(e) => setSemMark2(e.target.value)}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                >
                  <option selected="">CG</option>
                  <option value="10">O</option>
                  <option value="9">A+</option>
                  <option value="8">A</option>
                  <option value="7">B+</option>
                  <option value="6">B</option>
                </select>
              </td>
            </tr>
            <tr class="bg-white border-b">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
              >
                Signals and Systems
              </th>
              <td class="py-4 px-6">JEC1304</td>
              <td class="py-4 px-6">3</td>
              <td class="py-4 px-4">
                <select
                  id="Grade"
                  onChange={(e) => setSemMark3(e.target.value)}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                >
                  <option selected="">CG</option>
                  <option value="10">O</option>
                  <option value="9">A+</option>
                  <option value="8">A</option>
                  <option value="7">B+</option>
                  <option value="6">B</option>
                </select>
              </td>
            </tr>
            <tr class="bg-white border-b">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
              >
                Electronic Circuit and Simulation Laboratory
              </th>
              <td class="py-4 px-6">JEC1312</td>
              <td class="py-4 px-6">2</td>
              <td class="py-4 px-4">
                <select
                  id="Grade"
                  onChange={(e) => setSemMark4(e.target.value)}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                >
                  <option selected="">CG</option>
                  <option value="10">O</option>
                  <option value="9">A+</option>
                  <option value="8">A</option>
                  <option value="7">B+</option>
                  <option value="6">B</option>
                </select>
              </td>
            </tr>
            <tr class="bg-white border-b">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
              >
                Digital Logic Design Laboratory
              </th>
              <td class="py-4 px-6">JEC1313</td>
              <td class="py-4 px-6">2</td>
              <td class="py-4 px-4">
                <select
                  id="Grade"
                  onChange={(e) => setSemMark5(e.target.value)}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                >
                  <option selected="">CG</option>
                  <option value="10">O</option>
                  <option value="9">A+</option>
                  <option value="8">A</option>
                  <option value="7">B+</option>
                  <option value="6">B</option>
                </select>
              </td>
            </tr>
            <tr class="bg-white border-b">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
              >
                Electronics Design Practice Laboratory I
              </th>
              <td class="py-4 px-6">JEC1314</td>
              <td class="py-4 px-6">2</td>
              <td class="py-4 px-4">
                <select
                  id="Grade"
                  onChange={(e) => setSemMark6(e.target.value)}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                >
                  <option selected="">CG</option>
                  <option value="10">O</option>
                  <option value="9">A+</option>
                  <option value="8">A</option>
                  <option value="7">B+</option>
                  <option value="6">B</option>
                </select>
              </td>
            </tr>
            <tr class="bg-white border-b">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
              >
                Transform and Linear Algebra
              </th>
              <td class="py-4 px-6">JMA1301</td>
              <td class="py-4 px-6">3</td>
              <td class="py-4 px-4">
                <select
                  id="Grade"
                  onChange={(e) => setSemMark7(e.target.value)}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                >
                  <option selected="">CG</option>
                  <option value="10">O</option>
                  <option value="9">A+</option>
                  <option value="8">A</option>
                  <option value="7">B+</option>
                  <option value="6">B</option>
                </select>
              </td>
            </tr>
            <tr class="bg-white border-b">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
              >
                Essence of Indian Traditional Knowledge
              </th>
              <td class="py-4 px-6">JNC1361</td>
              <td class="py-4 px-6">3</td>
              <td class="py-4 px-4">
                <select
                  id="Grade"
                  onChange={(e) => setSemMark8(e.target.value)}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                >
                  <option selected="">CG</option>
                  <option value="10">PASS</option>
                  <option value="0">FAIL</option>
                </select>
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
          Calculate GPA
        </button>
      </div>
    </div>
  );
};

export default SemThree;
