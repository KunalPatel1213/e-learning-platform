import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-white overflow-hidden bg-[url('background.png')] bg-cover bg-center">
      <div className="w-140 h-60 transform translate-x-[30vh] translate-y-[20vh] flex flex-col gap-6 items-start px-10 py-10 ">
        <h1 className="text-6xl font-bold font-serif text-gray-800">
          Take student
        </h1>
        <h1 className="text-6xl font-bold font-serif text-gray-800">
          experience to the
        </h1>
        <h1 className="text-6xl font-bold font-serif text-gray-800">
          next level <span className="text-purple-600">.</span>
        </h1>
      </div>
      <div className="h-15 w-110  py-6 px-6 font-normal transform translate-x-[30vh] translate-y-[23vh] font-serif">
        <p>
          Power is doing everything we can to make it easy for districts to get
          up and running with distance learning <span>.</span>
        </p>
        <div className="h-10 w-45 border-2 border-blue-900 rounded-tl-2xl rounded-br-2xl flex items-center justify-center cursor-pointer transform translate-x-[0vh] translate-y-[4vh] bg-blue-300">
          <button className=" text-black  px-8 py-2 font-bold transition duration-200">
            LEARN NOW <i class="fa-solid fa-arrow-right-long"></i>
          </button>
        </div>
      </div>
      {/* image intigration */}
      <div className="h-90 w-80 flex justify-end items-end  transform translate-x-[145vh] -translate-y-[20vh] rounded-tl-full rounded-tr-full border border-red-500 p-4">
        <div className="h-90 w-80  bg-blue-400 flex justify-end items-end  transform -translate-x-[3vh] translate-y-[0vh] rounded-tl-full rounded-tr-full border border-red-300 p-4">
        <img className="h-140 w-130 translate-y-[10vh]" src="student.png"  />
      </div>
      </div>
    </div>
  );
};

export default Home;
