import React from 'react';
import HOF from './HOF.png';

const Header = () => {
  const handleDonate = () => {
    window.location.href = '/donate';
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white px-6 py-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img
            src={HOF}
            alt="Hands of Change Logo"
            className="h-16 w-14 object-contain rounded-lg shadow-sm"
          />
          <div>
            <h1 className="text-2xl font-extrabold tracking-wide">Hands of Change Foundation</h1>
            <p className="text-sm text-blue-100">Empowering communities, transforming lives</p>
          </div>
        </div>
        <button
          onClick={handleDonate}
          className="bg-white text-blue-700 font-semibold px-5 py-2 rounded-full shadow-md transition duration-300 ease-in-out hover:bg-blue-100 hover:scale-105"
        >
          Donate
        </button>
      </div>
    </header>
  );
};

export default Header;
