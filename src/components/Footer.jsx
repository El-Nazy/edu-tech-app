import React from "react";
import img from "../assets/imag.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        {/* Left Section */}
        <div className="mb-8 md:mb-0 px-10">
          <img src={img} alt="Martak Logo" className="mb-4 w-32" />
          <p className="font-bold mb-2">Contact</p>
          <p className="mb-4 text-gray-400">
            22, Ahmadu Bello way Kano, Nigeria.
          </p>
          <p className="font-bold mb-2">Telephone</p>
          <p className="mb-1 text-gray-400">+2348034631010</p>
          <p className="mb-4 text-gray-400">+2348088884544</p>
          <p className="font-bold mb-2">Socials</p>
          <div className="flex space-x-4 text-gray-400">
            <a href="#" className="hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="px-10">
          <h3 className="text-xl font-bold mb-4">
            SUBSCRIBE TO OUR NEWSLETTER
          </h3>
          <p className="mb-2 text-gray-400">
            TO RECEIVE NEWS, UPDATES AND PROMOTIONS
          </p>
          <p className="mb-6 text-gray-400">
            We will not sell you information and email address
          </p>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter Email"
              className="p-3 flex-grow bg-gray-700 rounded-l-md text-white focus:outline-none"
            />
            <button className="p-3 bg-red-500 rounded-r-md hover:bg-red-600">
              Subscribe
            </button>
          </div>
          <p className="mt-4 text-gray-400">
            Mail:{" "}
            <span className="text-gray-200">maabluxuryhome@gmail.com</span>
          </p>
        </div>
      </div>
      <div className="text-center mt-12 text-gray-500">© 2023 MARTAK</div>
    </footer>
  );
};

export default Footer;
