import React from 'react';
import HOF from './HOF.png';


const Header = () => {
  const handleDonate = () => {
    window.location.href = '/donate';
  };

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <img src={HOF} alt="Hands of Change Logo" className="h-14 w-11 object-contain" />
        <h1 className="text-xl font-bold">HANDS OF CHANGE FOUNDATION</h1>
      </div>
      <button
        onClick={handleDonate}
        className="bg-white text-blue-600 px-4 py-2 rounded-full shadow-md hover:bg-gray-200"
      >
        DONATE
      </button>
    </header>
  );
};

export default Header;
