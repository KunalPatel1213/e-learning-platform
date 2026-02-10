import React from "react";

const About = () => {
  return (
    <div className="min-h-screen w-full bg-[url('background.png')] bg-cover bg-center flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 py-12">
      
      {/* Left Section (Image) */}
      <div className="flex justify-center items-center mb-10 lg:mb-0 lg:w-1/2">
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full border border-red-500 flex items-center justify-center overflow-hidden">
          <div className="absolute w-full h-full bg-blue-400 rounded-full border border-red-300 flex items-center justify-center">
            <img
              className="h-full w-full object-cover"
              src="student1.png"
              alt="student"
            />
          </div>
        </div>
      </div>

      {/* Right Section (Text + Button) */}
      <div className="lg:w-1/2 text-center lg:text-left max-w-2xl">
        <p className="font-bold text-3xl sm:text-4xl lg:text-5xl font-serif mb-2">
          Build personalized
        </p>
        <p className="font-bold text-3xl sm:text-4xl lg:text-5xl font-serif mb-6">
          student experiences
        </p>
        <p className="text-base sm:text-lg lg:text-xl font-serif mb-8">
          Our platform provides access to previous year question papers that you
          can practice and solve. Alongside this, you’ll benefit from AI-powered
          learning that generates additional questions related to the papers you
          attempt. To strengthen your understanding even further, we also offer
          detailed video solutions. This way, you can enhance your learning step
          by step and achieve better results.
        </p>
        <div className="inline-block">
          <button className="border-2 border-blue-900 rounded-tl-2xl rounded-br-2xl bg-blue-300 text-black px-6 py-2 font-bold transition duration-200 hover:bg-blue-400 flex items-center gap-2">
            LEARN NOW <i className="fa-solid fa-arrow-right-long"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
