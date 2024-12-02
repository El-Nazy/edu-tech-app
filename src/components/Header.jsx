import React from "react";
import img from '../assets/img.png';
import img1 from '../assets/profile.svg';

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-6 border-b border-black bg-white">
      {/* Left Section: Logo */}
      <div className="flex items-center space-x-2">
        <img
          src={img}// Replace with actual logo path
          alt="Martak Logo"
          className="h-6"
        />
      </div>

      <div className="flex justify-between gap-4">
      <button className="bg-black text-white px-4 py-2 rounded-md text-sm">
        Preferred Program
      </button>

      {/* Right Section: User Info */}
      <div className="flex items-center space-x-2">
        <span className="text-sm font-medium">Olayimika</span>
        <img
          src={img1} // Replace with actual avatar path
          alt="User Avatar"
          className="w-8 h-8 rounded-full"
        />
      </div>
      </div>
      
    </header>
  );
};

export default Header;
