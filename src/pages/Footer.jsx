import React from "react";

const Footer = () => {
  return (
    <div className="h-[50vh] w-full bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 flex justify-between items-center">
      <div className="h-[40vh] w-[59vh] translate-x-[6vh]">
        <h1 className="flex items-center gap-3 font-sans font-bold mt-5 ml-5 text-3xl translate-x-[4vh] translate-y-[5vh]">
          <i className="fa-brands fa-accusoft text-red-500 text-5xl"></i>
          <span className="tracking-wide text-white">Teaching</span>
        </h1>
        <h2 className="flex items-center gap-3 font-sans font-light mt-5 ml-5 text-xl translate-x-[3vh] translate-y-[8vh] text-gray-300">
          This is an online learning platform where previous year question papers are available.
        </h2>
        <div className="flex justify-center items-center gap-3 text-5xl translate-y-[11vh] -translate-x-[8vh] cursor-pointer text-gray-200 hover:text-red-400">
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-facebook"></i>
        </div>
      </div>

      {/* introduction part */}
      <div className="h-[40vh] w-[110vh] -translate-x-10 flex justify-center items-center gap-15">
        <div className="h-[35vh] w-[30vh] p-6">
          <h1 className="font-sans font-bold text-2xl text-white mb-4">
            Class
          </h1>
          <ul className="list-disc list-inside space-y-4 text-gray-300 font-sans translate-y-2 gap-10">
            <li>Live Doubt Sessions</li>
            <li>Exam Focused Modules</li>
            <li>Practice + Review</li>
          </ul>
        </div>
        <div className="h-[35vh] w-[30vh] p-6">
          <h1 className="font-sans font-bold text-2xl text-white mb-4">
            Company
          </h1>
          <ul className="list-disc list-inside space-y-2 text-gray-300 font-sans translate-y-2">
            <li>Student‑centric innovation</li>
            <li>AI‑driven learning</li>
            <li>Community building</li>
          </ul>
        </div>
        <div className="h-[35vh] w-[30vh] p-6">
          <h1 className="font-sans font-bold text-2xl text-white mb-4">
            Products
          </h1>
          <ul className="list-disc list-inside space-y-2 text-gray-300 font-sans translate-y-2">
            <li>Question Paper Repository</li>
            <li>AI Doubt Solver</li>
            <li>Video Integration</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;