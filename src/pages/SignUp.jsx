import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-2">Create an Account!</h1>
        <p className=" text-gray-500 mb-6">
          Sign up to get started.
        </p>

        <button className="flex items-center justify-center w-full py-2 px-4 border border-gray-300 rounded-md mb-4 hover:bg-gray-100">
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google Icon"
            className="h-5 w-5 mr-2"
          />
          Sign up with Google
        </button>

        <div className="flex items-center mb-6">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="mx-3 text-gray-500">Or sign up with</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        <form>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-4 relative">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-4 flex items-center text-gray-400 hover:text-gray-600"
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? "🙈" : "👁️"}
            </button>
          </div>

          <div className="mb-4 relative">
            <input
              type={confirmPasswordVisible ? "text" : "password"}
              placeholder="Confirm Password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-4 flex items-center text-gray-400 hover:text-gray-600"
              onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
            >
              {confirmPasswordVisible ? "🙈" : "👁️"}
            </button>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-black text-white rounded-md hover:bg-gray-800"
          >
            Sign up
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <Link to="/" className="text-indigo-500 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
