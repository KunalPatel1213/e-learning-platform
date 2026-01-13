import React from "react";

const About = () => {
  return (
    <div className="h-[110vh] w-full bg-[url('background.png')] bg-cover bg-center">
      <div className="h-120 w-80 flex justify-end items-end transform translate-x-[22vh] translate-y-[18vh] rounded-tl-full rounded-tr-full rounded-b-full border border-red-500 p-4">
        <div className="h-120 w-80 bg-blue-400 flex justify-end items-end transform -translate-x-[0vh] translate-y-[0vh] rounded-tl-full rounded-tr-full rounded-b-full border border-red-300 p-4">
          <img
            className="h-full w-full transform translate-x-[2vh] translate-y-[3.5vh]"
            src="student1.png"
          />
        </div>
      </div>
      <div className="h-120 w-130 transform translate-x-[115vh] -translate-y-[40vh]">
        <p className="font-bold text-5xl gap-2.5 font-serif ">
          Build personalized
        </p>
        <p className="font-bold text-5xl font-serif ">
          student experiences
        </p>
        <p className="font-bold  font-serif transform- translate-y-[3vh]">
          Our platform provides access to previous year question papers that you
          can practice and solve. Alongside this, you’ll benefit from AI-powered
          learning that generates additional questions related to the papers you
          attempt. To strengthen your understanding even further, we also offer
          detailed video solutions. This way, you can enhance your learning step
          by step and achieve better results.
        </p>
        <div className="h-10 w-45 border-2 border-blue-900 rounded-tl-2xl rounded-br-2xl flex items-center justify-center cursor-pointer transform translate-x-[0vh] translate-y-[6vh] bg-blue-300">
          <button className=" text-black  px-8 py-2 font-bold transition duration-200 cursor-pointer" >
            LEARN NOW <i class="fa-solid fa-arrow-right-long"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
