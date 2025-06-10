import React from 'react';
import HOF from './HOF.png';

const Header = () => {
  const handleDonate = () => {
    window.location.href = '/donate';
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white px-4 md:px-6 py-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center space-x-4 mb-2 md:mb-0">
          <img
            src={HOF}
            alt="Hands of Change Logo"
            className="h-14 w-12 object-contain rounded-lg shadow-sm"
          />
          <div>
            <h1 className="text-xl md:text-2xl font-extrabold tracking-wide">
              Hands of Change Foundation
            </h1>
            <p className="text-xs md:text-sm text-blue-100">
              Empowering communities, transforming lives
            </p>
          </div>
        </div>

        {/* Navigation and Donate */}
        <div className="flex flex-wrap items-center space-x-3 sm:space-x-6">
          <a href="#activities" className="text-sm md:text-base hover:text-blue-200 font-medium transition duration-200">
            Activities
          </a>
          <a href="#mission" className="text-sm md:text-base hover:text-blue-200 font-medium transition duration-200">
            Mission
          </a>
          <a href="#about" className="text-sm md:text-base hover:text-blue-200 font-medium transition duration-200">
            About Us
          </a>
          <button
            onClick={handleDonate}
            className="mt-2 sm:mt-0 bg-white text-blue-700 font-semibold px-4 md:px-5 py-2 rounded-full shadow-md transition duration-300 ease-in-out hover:bg-blue-100 hover:scale-105 text-sm md:text-base"
          >
            Donate
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
