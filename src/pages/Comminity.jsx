import React from 'react'

const Comminity = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='h-[30vh] w-[80vh] flex justify-center items-center pt-10 relative'>
        <div className="relative w-full">
          <input
            className="border-2 h-[7vh] rounded-2xl w-full pr-12"
            type="text"
            placeholder="Whats on your mind"
          />
          <i className="fa-solid fa-magnifying-glass text-3xl absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"></i>
        </div>
        <a className="absolute bottom-2 right-24 text-lg">0/500</a>
        {/* Button fixed at bottom-right */}
        <button className='bg-blue-500 text-white text-2xl px-6 py-2 h-[5vh] w-[8vh] absolute bottom-4 right-4 -translate-y-3.5 cursor-pointer'>
          Post
        </button>
      </div>
    </div>
  )
}

export default Comminity