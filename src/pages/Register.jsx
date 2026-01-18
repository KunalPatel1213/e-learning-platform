import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="h-screen flex items-center justify-center p-4 overflow-hidden">
      <div className='h-[100vh] w-[100vh] flex justify-center items-center rounded-3xl relative'>
        <div className="rounded-3xl p-10 w-[75vh] h-[80vh] flex flex-col bg-white/90 absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[40vh]">
          
          <form onSubmit={handleSubmit} className="flex flex-col justify-between h-full">
            {/* Full Name + Username */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="block font-semibold text-gray-800 mb-2 text-2xl">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-5 py-4 text-2xl border-2 border-blue-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 bg-white"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="space-y-3">
                <label className="block font-semibold text-gray-800 mb-2 text-2xl">Username</label>
                <input
                  type="text"
                  name="username"
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
                <label className="block font-semibold text-gray-800 mb-2 text-2xl">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-4 text-2xl border-2 border-blue-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 bg-white"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="space-y-3">
                <label className="block font-semibold text-gray-800 mb-2 text-2xl">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-5 py-4 text-2xl border-2 border-blue-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 bg-white"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            {/* DOB + Gender */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="block font-semibold text-gray-800 mb-2 text-2xl">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="w-full px-5 py-4 text-2xl border-2 border-blue-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 bg-white cursor-pointer"
                />
              </div>
              <div className="space-y-3">
                <label className="block font-semibold text-gray-800 mb-2 text-2xl">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full px-5 py-4 text-2xl border-2 border-blue-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 bg-white cursor-pointer appearance-none"
                >
                  <option value="" className="text-gray-400">Select your gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Password + Confirm Password */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="block font-semibold text-gray-800 mb-2 text-2xl">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-5 py-4 text-2xl border-2 border-blue-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 bg-white"
                  placeholder="Create a strong password"
                />
              </div>
              <div className="space-y-3">
                <label className="block font-semibold text-gray-800 mb-2 text-2xl">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-5 py-4 text-2xl border-2 border-blue-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 bg-white"
                  placeholder="Confirm your password"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-5 px-6 text-2xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl shadow-lg cursor-pointer mt-2"
            >
              Register
            </button>

            {/* Continue with Google */}
            <button
              type="button"
              className="w-full border-2 border-blue-200 hover:border-blue-300 bg-white hover:bg-blue-50 text-gray-800 hover:text-blue-700 font-bold py-4 px-6 text-xl transition-all duration-300 flex items-center justify-center gap-3 group cursor-pointer mt-4"
            >
              <svg className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <span>Continue with Google</span>
            </button>

            {/* Login Link */}
            <p className="text-center text-gray-700 text-xl mt-4">
              Already have an account? 
              <a href="#" className="text-blue-600 hover:text-blue-700 font-bold ml-2 hover:underline transition-all duration-300 cursor-pointer">
                Login
              </a>
            </p>
          </form>
        </div>
      </div>

      {/* image intigration */}
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