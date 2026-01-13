import React from "react";

const PaperDetail = () => {
  return (
    <div>
      <div className=" h-[100vh] w-full ">
        <h1 className="font-bold text-5xl font-serif translate-x-[23vh]">
          Our Most Popular Previous Year Paper Details
        </h1>
        <p className="font-serif text-2xl font-normal text-center m-6 p-4 translate-y-[3vh]">
          Access all previous year papers here solve them and boost your
          learning journey.
        </p>
        {/* paper details */}
<div className="font-serif text-xl font-normal text-center m-6 p-4 translate-y-[5vh] flex flex-row justify-center gap-4">
  <button
    className="text-black px-6 py-2 font-bold border border-blue-400 rounded-tr-2xl rounded-bl-2xl cursor-pointer transition-colors duration-300 ease-in-out hover:bg-blue-400 hover:text-white"
  >
    All Courses
  </button>
  <button
    className="text-black px-6 py-2 font-bold border border-blue-400 rounded-tr-2xl rounded-bl-2xl cursor-pointer transition-colors duration-300 ease-in-out hover:bg-blue-400 hover:text-white"
  >
    Competitive Exams
  </button>
  <button
    className="text-black px-6 py-2 font-bold border border-blue-400 rounded-tr-2xl rounded-bl-2xl cursor-pointer transition-colors duration-300 ease-in-out hover:bg-blue-400 hover:text-white"
  >
    Engineering/Technical
  </button>
  <button
    className="text-black px-6 py-2 font-bold border border-blue-400 rounded-tr-2xl rounded-bl-2xl cursor-pointer transition-colors duration-300 ease-in-out hover:bg-blue-400 hover:text-white"
  >
    Medical
  </button>
  <button
    className="text-black px-6 py-2 font-bold border border-blue-400 rounded-tr-2xl rounded-bl-2xl cursor-pointer transition-colors duration-300 ease-in-out hover:bg-blue-400 hover:text-white"
  >
    University/College
  </button>
  <button
    className="text-black px-6 py-2 font-bold border border-blue-400 rounded-tr-2xl rounded-bl-2xl cursor-pointer transition-colors duration-300 ease-in-out hover:bg-blue-400 hover:text-white"
  >
    School Level
  </button>
</div>

        {/* Courses */}
        <div className="flex justify-center items-center h-[100vh] gap-2 -translate-y-[9vh]">
          
          {/* Card 1 */}
          <div className="bg-white h-[50vh] w-[40vh] m-6 p-4">
            <img
              src="https://images.unsplash.com/photo-1574660430686-b2a255cfce68?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcGV0YXRpdiUyMGV4YW18ZW58MHx8MHx8fDA%3D"
              className="h-50 w-full object-cover"
            />
            <div className="flex translate-y-[2vh] translate-x-[1.5vh] font-medium text-sm gap-20">
              <i className="fa-solid fa-user">2.2k</i>
              <i className="fa-solid fa-comment">1.1k</i>
              <i className="fa-solid fa-share">5.4k</i>
            </div>
            <div className="font-serif text-xl font-thin translate-y-[4vh] translate-x-[2vh]">
              <p>This is a <span className="bg-red-500">competitive</span></p>
              <p>examination paper.</p>
            </div>
            <div className="flex justify-between items-center translate-y-[3vh] h-[10vh] w-[45vh]">
              <button className="h-9 w-[15vh] border border-blue-400 rounded-tl-2xl rounded-br-2xl bg-white text-black px-10 py-3 font-light transition duration-700 ease-in-out hover:bg-blue-400 hover:text-white translate-x-[1vh]">
                Buy Now
              </button>
              <button className="h-9 w-[15vh] border border-blue-400 rounded-tl-2xl rounded-br-2xl bg-white text-black px-10 py-3 font-light transition duration-700 ease-in-out hover:bg-blue-400 hover:text-white -translate-x-[6vh]">
                Learn Now
              </button>
            </div>
          </div>
                    <div className="bg-white h-[50vh] w-[40vh] m-6 p-4">
            <img
              src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZW5naW5lZXJpbmd8ZW58MHx8MHx8fDA%3D"
              className="h-50 w-full object-cover"
            />
            <div className="flex translate-y-[2vh] translate-x-[1.5vh] font-medium text-sm gap-20">
              <i className="fa-solid fa-user">2.2k</i>
              <i className="fa-solid fa-comment">1.1k</i>
              <i className="fa-solid fa-share">5.4k</i>
            </div>
            <div className="font-serif text-xl font-thin translate-y-[4vh] translate-x-[1vh]">
              <p>This is a <span className="bg-blue-500">Engineering/Technical</span></p>
              <p>examination paper.</p>
            </div>
            <div className="flex justify-between items-center translate-y-[3vh] h-[10vh] w-[45vh]">
              <button className="h-9 w-[15vh] border border-blue-400 rounded-tl-2xl rounded-br-2xl bg-white text-black px-10 py-3 font-light transition duration-700 ease-in-out hover:bg-blue-400 hover:text-white translate-x-[1vh]">
                Buy Now
              </button>
              <button className="h-9 w-[15vh] border border-blue-400 rounded-tl-2xl rounded-br-2xl bg-white text-black px-10 py-3 font-light transition duration-700 ease-in-out hover:bg-blue-400 hover:text-white -translate-x-[6vh]">
                Learn Now
              </button>
            </div>
          </div>

                    <div className="bg-white h-[50vh] w-[40vh] m-6 p-4">
            <img
              src="https://plus.unsplash.com/premium_photo-1661767897334-bbfbdfdc4d1a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVkaWNhbHxlbnwwfHwwfHx8MA%3D%3D"
              className="h-50 w-full object-cover"
            />
            <div className="flex translate-y-[2vh] translate-x-[1.5vh] font-medium text-sm gap-20">
              <i className="fa-solid fa-user">2.2k</i>
              <i className="fa-solid fa-comment">1.1k</i>
              <i className="fa-solid fa-share">5.4k</i>
            </div>
            <div className="font-serif text-xl font-thin translate-y-[4vh] translate-x-[2vh]">
              <p>This is a <span className="bg-yellow-500">medical</span></p>
              <p>examination paper.</p>
            </div>
            <div className="flex justify-between items-center translate-y-[3vh] h-[10vh] w-[45vh]">
              <button className="h-9 w-[15vh] border border-blue-400 rounded-tl-2xl rounded-br-2xl bg-white text-black px-10 py-3 font-light transition duration-700 ease-in-out hover:bg-blue-400 hover:text-white translate-x-[1vh]">
                Buy Now
              </button>
              <button className="h-9 w-[15vh] border border-blue-400 rounded-tl-2xl rounded-br-2xl bg-white text-black px-10 py-3 font-light transition duration-700 ease-in-out hover:bg-blue-400 hover:text-white -translate-x-[6vh]">
                Learn Now
              </button>
            </div>
          </div>

                    <div className="bg-white h-[50vh] w-[40vh] m-6 p-4">
            <img
              src="https://images.unsplash.com/photo-1756032433560-56547efed550?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dW5pdmVyaXNpdHklMjBleGFtfGVufDB8fDB8fHww"
              className="h-50 w-full object-cover"
            />
            <div className="flex translate-y-[2vh] translate-x-[1.5vh] font-medium text-sm gap-20">
              <i className="fa-solid fa-user">2.2k</i>
              <i className="fa-solid fa-comment">1.1k</i>
              <i className="fa-solid fa-share">5.4k</i>
            </div>
            <div className="font-serif text-xl font-thin translate-y-[4vh] translate-x-[1vh]">
              <p>This is a <span className="bg-green-500">Univerisity/Colleges</span></p>
              <p>examination paper.</p>
            </div>
            <div className="flex justify-between items-center translate-y-[3vh] h-[10vh] w-[45vh]">
              <button className="h-9 w-[15vh] border border-blue-400 rounded-tl-2xl rounded-br-2xl bg-white text-black px-10 py-3 font-light transition duration-700 ease-in-out hover:bg-blue-400 hover:text-white translate-x-[1vh]">
                Buy Now
              </button>
              <button className="h-9 w-[15vh] border border-blue-400 rounded-tl-2xl rounded-br-2xl bg-white text-black px-10 py-3 font-light transition duration-700 ease-in-out hover:bg-blue-400 hover:text-white -translate-x-[6vh]">
                Learn Now
              </button>
            </div>
          </div>

                    <div className="bg-white h-[50vh] w-[40vh] m-6 p-4">
            <img
              src="https://images.unsplash.com/photo-1598981457915-aea220950616?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2Nob29sJTIwZXhhbXxlbnwwfHwwfHx8MA%3D%3D"
              className="h-50 w-full object-cover"
            />
            <div className="flex translate-y-[2vh] translate-x-[1.5vh] font-medium text-sm gap-20">
              <i className="fa-solid fa-user">2.2k</i>
              <i className="fa-solid fa-comment">1.1k</i>
              <i className="fa-solid fa-share">5.4k</i>
            </div>
            <div className="font-serif text-xl font-thin translate-y-[4vh] translate-x-[2vh]">
              <p>This is a <span className="bg-purple-500">School Level</span></p>
              <p>examination paper.</p>
            </div>
            <div className="flex justify-between items-center translate-y-[3vh] h-[10vh] w-[45vh]">
              <button className="h-9 w-[15vh] border border-blue-400 rounded-tl-2xl rounded-br-2xl bg-white text-black px-10 py-3 font-light transition duration-700 ease-in-out hover:bg-blue-400 hover:text-white translate-x-[1vh]">
                Buy Now
              </button>
              <button className="h-9 w-[15vh] border border-blue-400 rounded-tl-2xl rounded-br-2xl bg-white text-black px-10 py-3 font-light transition duration-700 ease-in-out hover:bg-blue-400 hover:text-white -translate-x-[6vh]">
                Learn Now
              </button>
            </div>
          </div>

          

       
          
        </div>
      </div>
    </div>
  );
};

export default PaperDetail;