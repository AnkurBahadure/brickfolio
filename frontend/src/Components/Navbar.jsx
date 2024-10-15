import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart } from "@fortawesome/free-solid-svg-icons";

import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="">
      <div className="container p-4 flex justify-between items-center">
        <div>
          <div className="mr-4">
            <img src={logo} alt="Logo" className="h-8" />
          </div>
        </div>
        {/* Center - Search Bar */}
        <div className="relative flex items-center px-4 justify-between w-full max-w-2xl mx-auto border border-black rounded-md bg-[#FFFFFF]">
          <select className=" border-gray-300 text-gray-600 py-2 px-4 focus:outline-none">
            <option value="">Buy In Pune</option>
            <option value="option1">Kharadi</option>
            <option value="option2">Viman Nagar</option>
            <option value="option2">Kalyani Nagar</option>
          </select>

          <div className="h-6 border-l border-gray-400 mr-96"></div>

          <button className="bg-orange-500 text-white px-2 py-1 rounded-md">
            Search
          </button>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          {/* Buttons */}
          <button className="bg-[#FDE7D7] border border-black hover:bg-[#F0E4D7] text-gray-700 py-2 px-4 rounded-md shadow">
            <FontAwesomeIcon icon={faUser} />
            Login
          </button>
          <button className="bg-[#FDE7D7] border border-black hover:bg-[#F0E4D7] text-gray-700 py-2 px-4 rounded-md shadow ">
            <FontAwesomeIcon icon={faHeart} />
            Shortlist
          </button>
        </div>
      </div>
      <div className="bg-orange-600 h-14 w-full flex justify-center py-3 gap-4">
        <select className=" border-gray-300 text-gray-600 focus:outline-none rounded-sm">
          <option value="">Sort</option>
          <option value="option1">Kharadi</option>
          <option value="option2">Viman Nagar</option>
          <option value="option2">Kalyani Nagar</option>
        </select>
        <select className=" border-gray-300 text-gray-600 focus:outline-none rounded-sm">
          <option value="">Property Type</option>
          <option value="option1">Kharadi</option>
          <option value="option2">Viman Nagar</option>
          <option value="option2">Kalyani Nagar</option>
        </select>
        <select className=" border-gray-300 text-gray-600 focus:outline-none rounded-sm">
          <option value="">BHK Type</option>
          <option value="option1">Kharadi</option>
          <option value="option2">Viman Nagar</option>
          <option value="option2">Kalyani Nagar</option>
        </select>
        <select className=" border-gray-300 text-gray-600 focus:outline-none rounded-sm">
          <option value="">Buy In Pune</option>
          <option value="option1">Kharadi</option>
          <option value="option2">Viman Nagar</option>
          <option value="option2">Kalyani Nagar</option>
        </select>
        <select className=" border-gray-300 text-gray-600 focus:outline-none rounded-sm">
          <option value="">Buy In Pune</option>
          <option value="option1">Kharadi</option>
          <option value="option2">Viman Nagar</option>
          <option value="option2">Kalyani Nagar</option>
        </select>
        <select className=" border-gray-300 text-gray-600 focus:outline-none rounded-sm">
          <option value="">Buy In Pune</option>
          <option value="option1">Kharadi</option>
          <option value="option2">Viman Nagar</option>
          <option value="option2">Kalyani Nagar</option>
        </select>
        <select className=" border-gray-300 text-gray-600 focus:outline-none rounded-sm">
          <option value="">Buy In Pune</option>
          <option value="option1">Kharadi</option>
          <option value="option2">Viman Nagar</option>
          <option value="option2">Kalyani Nagar</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
