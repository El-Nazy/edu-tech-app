import React from "react";

const RegistrationSuccess = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        {/* Close Icon */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-black"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Success Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="green"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* Success Message */}
        <h2 className="text-center text-xl font-semibold mb-2">
          Congratulation, Registration successful
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Your account has been successfully created, do well to login and
          access it.
        </p>

        {/* Log In Button */}
        <div className="flex justify-center">
          <button className="bg-black text-white w-full py-2 rounded-md font-semibold">
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationSuccess;
