import React from 'react';

const HeadingSection = () => {
  return (
    <div className="bg-gray-100 py-4 px-4 md:py-6 md:px-8 lg:px-12 w-full">
      {/* Breadcrumb */}
      <nav className="text-xs sm:text-sm text-gray-600 mb-2">
        <ol className="list-reset flex flex-wrap">
          <li>
            <a href="/" className="hover:text-blue-600">Home</a>
            <span className="mx-1 sm:mx-2">›</span>
          </li>
          <li>
            <a href="/property-in-pune" className="hover:text-blue-600">Property in Pune</a>
            <span className="mx-1 sm:mx-2">›</span>
          </li>
          <li className="text-gray-800">Flats in Pune</li>
        </ol>
      </nav>

      {/* Main Heading */}
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
        Flats For Sale In Kharadi, Viman Nagar, Pune
      </h1>
    </div>
  );
};

export default HeadingSection;
