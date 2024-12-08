import React from "react";
import { FaSearch, FaBell, FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      {/* Logo */}
      <div className="text-lg font-bold text-black">LOGO</div>

      {/* Right Section */}
      <div className="flex items-center space-x-6 flex-grow justify-end">
        {/* Search Bar */}
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-1/3">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-transparent focus:outline-none text-sm text-gray-700"
          />
        </div>

        {/* Notification Bell */}
        <div className="relative">
          <FaBell className="text-gray-700 text-xl" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full px-1.5 py-0.5">
            9
          </span>
        </div>

        {/* User Profile */}
        <div className="bg-gray-100 p-2 rounded-full">
          <FaUser className="text-gray-700 text-xl" />
        </div>
      </div>
    </header>
  );
};

export default Header;
