import React, { useState } from "react";

const Comminity = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    // 500 characters limit
    if (e.target.value.length <= 500) {
      setText(e.target.value);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center px-4 sm:px-6 lg:px-12 py-8">
      
      {/* Input box */}
      <div className="w-full max-w-2xl flex flex-col relative mb-8">
        <div className="relative w-full">
          <input
            className="border-2 rounded-2xl w-full h-12 sm:h-14 px-4 pr-12 text-base sm:text-lg"
            type="text"
            placeholder="What's on your mind"
            value={text}
            onChange={handleChange}
          />
        </div>

        {/* Character counter */}
        <span className="absolute bottom-2 right-20 text-sm sm:text-base text-gray-600">
          {text.length}/500
        </span>

        {/* Button fixed at bottom-right */}
        <button
          className="bg-blue-500 text-white text-sm sm:text-lg px-4 sm:px-6 py-2 rounded-lg absolute bottom-2 right-2 cursor-pointer disabled:opacity-50"
          disabled={text.length === 0}
        >
          Post
        </button>
      </div>

      {/* User integration */}
      <div className="w-full max-w-xl flex items-center gap-4 mb-6">
        <span
          className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-[url('/bg/user.webp')] bg-cover bg-center cursor-pointer inline-block"
        ></span>
        <h4 className="text-black font-bold cursor-pointer font-Poppins text-base sm:text-lg">
          What is E-Learnign-Platform
        </h4>
      </div>

      {/* Post content */}
      <p className="w-full max-w-3xl font-Poppins text-gray-700 text-sm sm:text-base leading-relaxed">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum mollitia
        vel cupiditate animi id reiciendis possimus veritatis sit recusandae!
        Cupiditate, corrupti? Aliquid ullam, numquam error repudiandae quae quasi
        inventore, distinctio quis neque tempore iste saepe ipsam molestias aut
        odio officia debitis ducimus nam. Iure, perspiciatis debitis! Asperiores
        ex doloribus optio provident maiores, iste ullam dolorem quo nostrum
        rerum suscipit architecto nesciunt quibusdam, quae dolore sequi vero
        neque repellendus dignissimos! Cupiditate porro voluptatem adipisci, fuga
        optio beatae officiis ullam error! Itaque, beatae non cum numquam ut
        blanditiis accusamus facilis deleniti iusto, aspernatur quibusdam
        deserunt quia commodi, officiis odio tempore...
      </p>
    </div>
  );
};

export default Comminity;