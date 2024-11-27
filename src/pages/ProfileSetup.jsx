import React, { useState } from "react";

const ProfileSetup = () => {
  const [profileImage, setProfileImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">

        {/* Progress Indicator */}
        <div className="flex justify-between mb-6">
          {[1, 2, 3, 4].map((step, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full mx-1 ${
                index === 0
                  ? "bg-black"
                  : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>

        {/* Heading */}
        <h1 className="text-xl font-bold text-center mb-2">
          Welcome! You're about to set up your new profile
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Upload a clear profile picture (A profile picture helps you stand out
          to recruiters. You can upload it later)
        </p>

        {/* Image Upload Section */}
        <div className="flex justify-center mb-6">
          <label className="relative w-24 h-24 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center cursor-pointer">
            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <span className="text-gray-400 text-3xl">+</span>
            )}
            <input
              type="file"
              accept="image/*"
              className="absolute inset-0 opacity-0 cursor-pointer"
              onChange={handleImageUpload}
            />
          </label>
        </div>

        {/* Input Fields */}
        <form>
          <div className="mb-4">
            <select
              className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Country of Residence</option>
              <option value="usa">United States</option>
              <option value="uk">United Kingdom</option>
              <option value="india">India</option>
              <option value="canada">Canada</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-6">
            <input
              type="text"
              placeholder="Last Name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
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

export default ProfileSetup;
