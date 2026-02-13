import React from "react";

const Benifit = () => {
  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row justify-between items-center bg-[url('background.png')] bg-cover bg-center px-4 sm:px-8 lg:px-16 py-8">
      
      {/* Left Section (Text) */}
      <div className="bg-white rounded-xl shadow-lg w-full lg:w-1/2 p-6 sm:p-10 mb-8 lg:mb-0">
        <p className="font-bold font-serif text-3xl sm:text-5xl lg:text-6xl mb-2">
          Benefits of
        </p>
        <p className="font-bold font-serif text-3xl sm:text-5xl lg:text-6xl mb-6">
          online learning
        </p>
        <p className="font-semibold text-base sm:text-lg lg:text-xl mb-2">
          Online learning allows students to study anytime and anywhere.
        </p>
        <p className="font-semibold text-base sm:text-lg lg:text-xl mb-6">
          It makes education flexible, accessible, and personalized.
        </p>

        {/* Points */}
        <div className="space-y-4 text-base sm:text-lg lg:text-2xl font-light">
          <p>
            <i className="fa-solid fa-circle-check text-blue-500"></i> Learn
            anytime, anywhere.
          </p>
          <p>
            <i className="fa-solid fa-circle-check text-blue-500"></i> Study at
            your own pace.
          </p>
          <p>
            <i className="fa-solid fa-circle-check text-blue-500"></i> Access
            courses easily.
          </p>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <div className="bg-blue-200 rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
          <img
            className="w-full max-w-md lg:max-w-lg rounded-lg object-cover"
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fG9ubGluZSUyMGxlYXJuaW5nfGVufDB8fDB8fHww"
            alt="Online Learning"
          />
        </div>
      </div>
    </div>
  );
};

export default Benifit;