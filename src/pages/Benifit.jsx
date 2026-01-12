import React from "react";

const Benifit = () => {
  return (
    <div className="h-[100vh] w-full  flex justify-between items-center bg-[url('background.png')] bg-cover bg-center ">
      <div className="h-[70vh] w-[95vh] bg-white translate-x-[6vh] overflow-hidden break-words">
        <p className="font-bold font-sase text-8xl translate-x-[3vh] translate-y-[4vh]">
          Benefits of
        </p>
        <p className="font-bold font-sase text-8xl translate-x-[3vh] translate-y-[4vh]">
          online learning
        </p>
        <p className="font-semibold text-xl translate-x-[5vh] translate-y-[6vh] whitespace-pre-line">
          Online learning allows students to study anytime and anywhere.
        </p>
        <p className="font-semibold text-xl translate-x-[5vh] translate-y-[6vh] whitespace-pre-line">
          It makes education flexible, accessible, and personalized
        </p>

        {/* points */}
        <div className="translate-x-[5vh] font-light translate-y-[10vh] text-2xl">
          <p>
            <i class="fa-solid fa-circle-check text-blue-500"></i> Learn
            anytime, anywhere.
          </p>
          <p>
            <i class="fa-solid fa-circle-check text-blue-500"></i> Study at your
            own pace.
          </p>
          <p>
            <i class="fa-solid fa-circle-check text-blue-500"></i> Access
            courses easily.
          </p>
        </div>
      </div>

      {/* image intigration */}
      <div className="flex justify-end items-end bg-blue-200 rounded-xl -translate-x-[10vh] h-[57vh] w-[80vh]">
        <img
          className="-translate-y-[4vh] w-[75vh] -translate-x-[2.5vh] rounded-lg"
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fG9ubGluZSUyMGxlYXJuaW5nfGVufDB8fDB8fHww"
        />
      </div>
    </div>
  );
};

export default Benifit;
