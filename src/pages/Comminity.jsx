import React, { useState } from 'react'

const Comminity = () => {
  const [text, setText] = useState("")

  const handleChange = (e) => {
    // 500 characters limit
    if (e.target.value.length <= 500) {
      setText(e.target.value)
    }
  }

  return (
    <div className='flex flex-col justify-center items-center'>
      {/* Input box */}
      <div className='h-[30vh] w-[80vh] flex justify-center items-center pt-10 relative'>
        <div className="relative w-full">
          <input
            className="border-2 h-[7vh] rounded-2xl w-full pr-12 px-4"
            type="text"
            placeholder="What's on your mind"
            value={text}
            onChange={handleChange}
          />
        </div>

        {/* Character counter */}
        <a className="absolute bottom-2 right-20 -translate-y-7 text-2xl">
          {text.length}/500
        </a>

        {/* Button fixed at bottom-right */}
        <button
          className='bg-blue-500 text-white text-2xl px-6 py-2 h-[5vh] w-[8vh] absolute bottom-4 right-4 -translate-y-3.5 cursor-pointer'
          disabled={text.length === 0}
        >
          Post
        </button>
      </div>

      {/* User integration */}
      <div className='h-[10vh] w-[50vh] -translate-x-30 flex items-center gap-4'>
        <span
          className="h-[10vh] w-[10vh] rounded-full mt-8  
               bg-[url('/bg/user.webp')] bg-cover bg-center cursor-pointer inline-block">
        </span>
        <h4 className='text-black font-bold mt-8 cursor-pointer font-Poppins'>
          What is E-Learnign-Platform
        </h4>
      </div>
 
      <p className='h-[50vh] w-[100vh] font-Poppins text-gray-700 mt-4 translate-x-15'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum mollitia vel cupiditate animi id reiciendis possimus veritatis sit recusandae! Cupiditate, corrupti? Aliquid ullam, numquam error repudiandae quae quasi inventore, distinctio quis neque tempore iste saepe ipsam molestias aut odio officia debitis ducimus nam. Iure, perspiciatis debitis! Asperiores ex doloribus optio provident maiores, iste ullam dolorem quo nostrum rerum suscipit architecto nesciunt quibusdam, quae dolore sequi vero neque repellendus dignissimos! Cupiditate porro voluptatem adipisci, fuga optio beatae officiis ullam error! Itaque, beatae non cum numquam ut blanditiis accusamus facilis deleniti iusto, aspernatur quibusdam deserunt quia commodi, officiis odio tempore...
      </p>
    </div>
  )
}

export default Comminity