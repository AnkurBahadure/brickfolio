import React from 'react';

const HeadingSection = () => {
  return (
    <div className="bg-[#F4F4F4] py-4 px-6 md:px-12">
      <nav className="text-sm text-gray-600">
        <ul className="flex space-x-2">
          <li>
            <a href="/" className="hover:text-orange-500 transition duration-200">
              Home
            </a>
          </li>
          <li>&gt;</li>
          <li>
            <a href="/properties-in-pune" className="hover:text-orange-500 transition duration-200">
              Property in Pune
            </a>
          </li>
          <li>&gt;</li>
          <li>
            <span className="text-gray-800 font-semibold">Flats in Pune</span>
          </li>
        </ul>
      </nav>
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
        Flats For Sale In Kharadi, Viman Nagar, Pune
      </h1>
    </div>

  );
};

export default HeadingSection;



{/* <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
  Flats For Sale In Kharadi, Viman Nagar, Pune
</h1> */}