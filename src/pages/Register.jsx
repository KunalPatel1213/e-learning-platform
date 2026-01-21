import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });

  const [registeredName, setRegisteredName] = useState(""); //  

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // fake API delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Form submitted:", formData);

    const registrationSuccess = true;
    if (registrationSuccess) {
      setRegisteredName(formData.fullName);  
      // Save user data to localStorage
      localStorage.setItem('userData', JSON.stringify({
        fulname: formData.fullName,
        username: formData.username,
        email: formData.email,
        phone: formData.phone,
        dob: formData.dob,
        gender: formData.gender
      }));
      navigate("/login");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center p-4 overflow-hidden">
      <div className="h-[100vh] w-[100vh] flex justify-center items-center rounded-3xl relative">
        <div className="rounded-3xl p-10 w-[75vh] h-[80vh] flex flex-col bg-white/90 absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[40vh]">
          <form onSubmit={handleSubmit} className="flex flex-col justify-between h-full">
            {/* Full Name + Username */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="block font-semibold text-gray-800 mb-2 text-2xl">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  required
                  onChange={handleChange}
                  className="w-full px-5 py-4 text-2xl border-2 border-blue-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 bg-white"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="space-y-3">
                <label className="block font-semibold text-gray-800 mb-2 text-2xl">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  required
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full px-5 py-4 text-2xl border-2 border-blue-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 bg-white"
                  placeholder="Enter your username"
                />
              </div>
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="block font-semibold text-gray-800 mb-2 text-2xl">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-4 text-2xl border-2 border-blue-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 bg-white"
                  placeholder="Enter your email address"
                />
              </div>

              <div className="space-y-3">
                <label className="block font-semibold text-gray-800 mb-2 text-2xl">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  pattern="\d{10}"
                  maxLength="10"
                  className="w-full px-5 py-4 text-2xl border-2 border-blue-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 bg-white"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            {/* DOB + Gender */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="block font-semibold text-gray-800 mb-2 text-2xl">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dob"
                  required
                  value={formData.dob}
                  onChange={handleChange}
                  className="w-full px-5 py-4 text-2xl border-2 border-blue-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 bg-white cursor-pointer"
                />
              </div>

              <div className="space-y-3">
                <label className="block font-semibold text-gray-800 mb-2 text-2xl">
                  Gender
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full px-5 py-4 text-2xl border-2 border-blue-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 bg-white cursor-pointer appearance-none"
                >
                  <option value="">Select your gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Passwords */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="block font-semibold text-gray-800 mb-2 text-2xl">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-5 py-4 text-2xl border-2 border-blue-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 bg-white"
                />
              </div>

              <div className="space-y-3">
                <label className="block font-semibold text-gray-800 mb-2 text-2xl">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-5 py-4 text-2xl border-2 border-blue-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 bg-white"
                />
              </div>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-5 text-2xl transition-all duration-300 shadow-lg"
            >
              {registeredName || "Register"}
            </button>

            <p className="text-center text-gray-700 text-xl">
              Already have an account?
              <Link to="/login" className="text-blue-600 font-bold ml-2 hover:underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
         <div className="h-[95vh] w-[100vh] overflow-hidden absolute right-0 top-1/2 -translate-y-1/2 rounded-2xl">
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1551818567-d49550a81408?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE1fHxzdHVkZW50fGVufDB8fDB8fHww"
          alt=""
        />
      </div>
    </div>
  );
};

export default Register;
