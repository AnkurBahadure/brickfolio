import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart } from "@fortawesome/free-solid-svg-icons";

import logo from "../assets/logo.png";

const locations = [
  { value: "", label: "Buy In Pune" },
  { value: "kharadi", label: "Buy in Mumbai" },
  { value: "vimanNagar", label: "Buy in Dubai" },
  { value: "kalyaniNagar", label: "Buy in Kalyani Nagar" },
];

const Navbar = ({ selectedValue, onChange }) => {
  return (
    <nav className="">
      <div className="container p-4 flex justify-between items-center">
        <div>
          <div className="mr-4 ">
            <a href="/"><img src={logo} alt="Logo" className="h-10" /></a> 
          </div>
        </div>
        {/* Center - Search Bar */}
        <div className=" relative flex items-center px-4 justify-between w-full max-w-2xl mx-auto border border-black rounded-md bg-[#FFFFFF]">
          <select
            value={selectedValue}
            onChange={onChange}
            className=" border-gray-300 text-gray-600 py-2 px focus:outline-none"
            aria-label="Select location"
          >
            {locations.map((location) => (
              <option key={location.value} value={location.value}>
                {location.label}
              </option>
            ))}
          </select>

          <div className="h-6 border-l border-gray-400 mr-96"></div>

          <button className="bg-orange-500 text-white px-2 py-1 rounded-md">
            Search
          </button>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          {/* Buttons */}
          <button className="bg-[#FDE7D7] border border-black hover:bg-[#F0E4D7] text-gray-700 py-2 px-4 rounded-md shadow">
            <FontAwesomeIcon className="mr-2" icon={faUser} />
            Login
          </button>
          <button className="bg-[#FDE7D7] border border-black hover:bg-[#F0E4D7] text-gray-700 py-2 px-4 rounded-md shadow ">
            <FontAwesomeIcon className="mr-2" icon={faHeart} />
            Shortlist
          </button>
        </div>
      </div>
      
    </nav>
  );
};

// Prop validation
Navbar.propTypes = {
    selectedValue: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};


export default Navbar;
