import React from 'react';

const Register = () => {
  return (
    <div className="h-[100vh] w-full bg-gray-300 flex items-center justify-center">
      <form action="/register" method="POST" className="bg-white p-6 rounded shadow-md w-[500px] gap-3">
        
        {/* Full Name */}
        <label htmlFor="fullname" className="block mb-2">Full Name:</label>
        <input type="text" id="fullname" name="fullname" required className="w-full p-2 mb-4 border rounded text-2xl" />

        {/* Username */}
        <label htmlFor="username" className="block mb-2">Username:</label>
        <input type="text" id="username" name="username" required className="w-full p-2 mb-4 border rounded" />

        {/* Email */}
        <label htmlFor="email" className="block mb-2">Email:</label>
        <input type="email" id="email" name="email" required className="w-full p-2 mb-4 border rounded" />

        {/* Phone Number */}
        <label htmlFor="phone" className="block mb-2">Phone Number:</label>
        <input type="tel" id="phone" name="phone" className="w-full p-2 mb-4 border rounded" />

        {/* Date of Birth */}
        <label htmlFor="dob" className="block mb-2">Date of Birth:</label>
        <input type="date" id="dob" name="dob" className="w-full p-2 mb-4 border rounded" />

        {/* Gender */}
        <label htmlFor="gender" className="block mb-2">Gender:</label>
        <select id="gender" name="gender" className="w-full p-2 mb-4 border rounded">
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        {/* Password */}
        <label htmlFor="password" className="block mb-2">Password:</label>
        <input type="password" id="password" name="password" required className="w-full p-2 mb-4 border rounded" />

        {/* Confirm Password */}
        <label htmlFor="confirmPassword" className="block mb-2">Confirm Password:</label>
        <input type="password" id="confirmPassword" name="confirmPassword" required className="w-full p-2 mb-4 border rounded" />

        {/* Submit Button */}
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;