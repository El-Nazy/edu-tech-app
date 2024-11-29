import React, { useState } from "react";

const SecretSauceForm = () => {
  const [selectedSkill, setSelectedSkill] = useState("");
  const [entryLevel, setEntryLevel] = useState("");
  const [areaOfInterest, setAreaOfInterest] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log({ selectedSkill, entryLevel, areaOfInterest });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        {/* Progress Indicator */}
        <div className="flex items-center mb-1">
          <button className="text-black text-xl font-bold mr-auto mb-20">
            ←
          </button>
          <div className="flex-grow flex justify-between space-x-2">
            {[1, 2, 3, 4].map((step, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === 2
                    ? "bg-black"
                    : index < 2
                    ? "bg-black"
                    : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
        </div>

        {/* Form Header */}
        <h1 className="text-2xl font-bold mb-2">Tell us your secret sauce</h1>

        {/* Form */}
        <form onSubmit={handleFormSubmit}>
          {/* Select Dropdown */}
          <div className="mb-4">
            <select
              value={selectedSkill}
              onChange={(e) => setSelectedSkill(e.target.value)}
              className="w-full px-4 py-2 border rounded-md bg-gray-100 text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="" disabled>
                Select
              </option>
              <option value="Skill 1">Skill 1</option>
              <option value="Skill 2">Skill 2</option>
              <option value="Skill 3">Skill 3</option>
            </select>
            <p className="text-sm text-right text-gray-400 mt-1">
              Click here if your skill is unavailable
            </p>
          </div>

          {/* Entry Level Input */}
          <div className="mb-4">
            <input
              type="text"
              value={entryLevel}
              onChange={(e) => setEntryLevel(e.target.value)}
              placeholder="Your entry level"
              className="w-full px-4 py-2 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Area of Interest Input */}
          <div className="mb-4">
            <input
              type="text"
              value={areaOfInterest}
              onChange={(e) => setAreaOfInterest(e.target.value)}
              placeholder="Your area of interest"
              className="w-full px-4 py-2 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Submit Button */}
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

export default SecretSauceForm;
