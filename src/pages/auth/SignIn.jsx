import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-2">Welcome Back!</h1>
        <p className=" text-gray-500 mb-6">
          To get started, sign in to your account.
        </p>

        <button className="flex items-center justify-center w-full py-2 px-4 border border-gray-300 rounded-md mb-4 hover:bg-gray-100">
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google Icon"
            className="h-5 w-5 mr-2"
          />
          Sign in with Google
        </button>

        <div className="flex items-center mb-6">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="mx-3 text-gray-500">Or sign in with</span>
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
          <div className="flex justify-between mb-6">
            <Link
              to="/reset-password"
              className="text-indigo-500 text-sm hover:underline"
            >
              Forgot password
            </Link>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-black text-white rounded-md hover:bg-gray-800"
          >
            Sign in
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?{" "}
          <Link to="/sign-up" className="text-indigo-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
