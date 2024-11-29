import React from "react";

const ExpertiseForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        {/* Back Button and Progress Indicator */}
        <div className="flex items-center mb-1">
          <button className="text-black text-xl font-bold mr-auto mb-20">
            ←
          </button>
          <div className="flex-grow flex justify-between space-x-2">
            {[1, 2, 3, 4].map((step, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === 1
                    ? "bg-black"
                    : index < 1
                    ? "bg-black"
                    : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-xl font-bold text-center mb-2">
          Let us know your expertise
        </h1>

        {/* Input Fields */}
        <form>
          {/* Primary Role */}
          <div className="mb-4 mt-8">
            <label className="block text-sm font-medium text-gray-700">
              Primary Role
            </label>
            <select
              className="w-full px-4 py-2 mt-1 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select your role</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="manager">Manager</option>
              <option value="other">Other</option>
            </select>
            <p className="mt-2 text-sm text-red-500">
              Role cannot be changed once selected
            </p>
          </div>

          {/* Current Company */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              Current Company (Optional)
            </label>
            <input
              type="text"
              placeholder="Your company name"
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Continue Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-black text-white rounded-md hover:bg-gray-800"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default ExpertiseForm;
