import React from "react";

const SemOne = () => {
  return (
    <div className="min-h-screen py-10 ">
      <div>
        <h1 className="text-2xl md:text-3xl font-semibold text-center pb-3">
          Welcome Vijay
        </h1>
        <p className="text-md md:text-lg font-thin text-center pb-4">
          Semester One
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
                Engineering Chemistry
              </th>
              <td class="py-4 px-6">JCY1101</td>
              <td class="py-4 px-6">3</td>
              <td class="py-4 px-4">
                <select
                  id="Grade"
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
                Engineering Basics
              </th>
              <td class="py-4 px-6">JGE1101</td>
              <td class="py-4 px-6">3</td>
              <td class="py-4 px-4">
                <select
                  id="Grade"
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
                Programming in C
              </th>
              <td class="py-4 px-6">JGE1102</td>
              <td class="py-4 px-6">3</td>
              <td class="py-4 px-4">
                <select
                  id="Grade"
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
                Design Appreciation Lab
              </th>
              <td class="py-4 px-6">JGE1111</td>
              <td class="py-4 px-6">2</td>
              <td class="py-4 px-4">
                <select
                  id="Grade"
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
                Programming in C Lab
              </th>
              <td class="py-4 px-6">JGE1112</td>
              <td class="py-4 px-6">2</td>
              <td class="py-4 px-4">
                <select
                  id="Grade"
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
                Communicative English and Soft Skills 1
              </th>
              <td class="py-4 px-6">JHS1121</td>
              <td class="py-4 px-6">2</td>
              <td class="py-4 px-4">
                <select
                  id="Grade"
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
                Matrices and Calculus
              </th>
              <td class="py-4 px-6">JMA1101</td>
              <td class="py-4 px-6">3</td>
              <td class="py-4 px-4">
                <select
                  id="Grade"
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
                Physics and Chemistry lab
              </th>
              <td class="py-4 px-6">JPC1111</td>
              <td class="py-4 px-6">2</td>
              <td class="py-4 px-4">
                <select
                  id="Grade"
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
                Engineering Physics
              </th>
              <td class="py-4 px-6">JPH1101</td>
              <td class="py-4 px-6">3</td>
              <td class="py-4 px-4">
                <select
                  id="Grade"
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SemOne;
