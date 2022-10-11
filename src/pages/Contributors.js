import React from "react";

const Contributors = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:justify-evenly my-10 md:my-28">
        <div className="border-2 rounded-lg px-5 py-6 md:px-10 md:py-12 flex flex-col items-center gap-4 max-w-[300px]  md:min-w-[600px] animate__animated animate__zoomIn">
          <a
            target={"_blank"}
            href="https://github.com/Jayashreedev"
            rel="noreferrer"
          >
            <img
              className="rounded-full h-[150px] w-[150px]"
              src="https://avatars.githubusercontent.com/u/111294913?v=4"
              alt="Avatar"
            />
          </a>

          <div className="flex flex-col items-center">
            <a
              target={"_blank"}
              href="https://github.com/Jayashreedev"
              rel="noreferrer"
            >
              <h1 className="text-xl font-semibold hover:text-blue-500">
                Jayashree D
              </h1>
            </a>
            <p className="text-sm text-gray-500">UG Scholar</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-base text-blue-700 font-semibold">
              Contribution
            </span>
            <p>Data collection, Application corrections and Feature updates.</p>
          </div>
        </div>
        <div className="border-2 rounded-lg px-10 py-12 flex flex-col items-center gap-4 max-w-[300px]  md:min-w-[600px] animate__animated animate__zoomIn">
          <a
            target={"_blank"}
            href="https://github.com/Vijayrajdev"
            rel="noreferrer"
          >
            <img
              className="rounded-full h-[150px] w-[150px]"
              src="https://avatars.githubusercontent.com/u/87898460?v=4"
              alt="Avatar"
            />
          </a>

          <div className="flex flex-col items-center">
            <a
              target={"_blank"}
              href="https://github.com/Vijayrajdev"
              rel="noreferrer"
            >
              <h1 className="text-xl font-semibold hover:text-blue-500">
                Vijay Raj C K
              </h1>
            </a>
            <p className="text-sm text-gray-500">UG Scholar</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-base text-blue-700 font-semibold">
              Contribution
            </span>
            <p>Development, Algorithm and Deployment</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contributors;
