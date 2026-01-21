import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white h-20 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex-shrink-0 h-10 ml-auto">
            <img
              className="h-49 w-1xl p-2 text-right transform -translate-y-15 translate-x-10 ml-auto"
              src="study.png"
              alt="Logo"
            />
          </div>

          {/* Hamburger Button (Mobile) */}
          <div className="md:hidden ml-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Navigation Links (Desktop) */}
          <div className="hidden md:flex justify-end py-6 px-4 text-10px items-center gap-10 font-semibold font-sans transform translate-x-[5vh] translate-y-[2vh]">
            <a href="home" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="about" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="PaperDetail" className="text-gray-700 hover:text-blue-600">Paper Detail</a>
            <a href="Community" className="text-gray-700 hover:text-blue-600">Community</a>
            <a href="Dashboard" className="text-gray-700 hover:text-blue-600">Dashboard</a>
          </div>

          {/* Register OR User Name */}
          <div className="h-10 w-30 border-2 border-blue-900 rounded-tl-2xl rounded-br-2xl flex items-center justify-center cursor-pointer transform translate-x-[4vh] translate-y-[2vh]">
            {user ? (
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 inline-block">
                Welcome {user.fullname}
              </span>
            ) : (
              <Link
                to="/register"
                className="bg-white text-black px-8 py-2 font-bold transition duration-200 cursor-pointer"
              >
                Register
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col items-start gap-4 mt-2 font-semibold font-sans">
            <a href="home" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="about" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="PaperDetail" className="text-gray-700 hover:text-blue-600">Paper Detail</a>
            <a href="Community" className="text-gray-700 hover:text-blue-600">Community</a>
            <a href="Dashboard" className="text-gray-700 hover:text-blue-600">Dashboard</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;