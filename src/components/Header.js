import React, { useState } from 'react';
import HOF from './HOF.png';

const Header = () => {
  const [showDonateModal, setShowDonateModal] = useState(false);

  const handleDonate = () => {
    setShowDonateModal(true);
  };

  const handleCloseModal = () => {
    setShowDonateModal(false);
  };

  const handleModalClick = (e) => {
    // Close modal if clicking on the backdrop (not the modal content)
    if (e.target === e.currentTarget) {
      setShowDonateModal(false);
    }
  };

  // Function to scroll to sections
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white px-4 md:px-6 py-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4 mb-2 md:mb-0">
            <img
              src={HOF}
              alt="Hands of Change Logo"
              className="h-16 w-14 md:h-20 md:w-18 object-contain rounded-lg shadow-sm bg-white p-1"
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
            <button 
              onClick={() => scrollToSection('activities')}
              className="text-sm md:text-base hover:text-blue-200 font-medium transition duration-200"
            >
              Activities
            </button>
            <button 
              onClick={() => scrollToSection('mission')}
              className="text-sm md:text-base hover:text-blue-200 font-medium transition duration-200"
            >
              Mission
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-sm md:text-base hover:text-blue-200 font-medium transition duration-200"
            >
              About Us
            </button>
            <button
              onClick={handleDonate}
              className="mt-2 sm:mt-0 bg-white text-blue-700 font-semibold px-4 md:px-5 py-2 rounded-full shadow-md transition duration-300 ease-in-out hover:bg-blue-100 hover:scale-105 text-sm md:text-base"
            >
              Donate
            </button>
          </div>
        </div>
      </header>

      {/* Donation Modal */}
      {showDonateModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
          onClick={handleModalClick}
        >
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-auto transform transition-all duration-300 scale-95 hover:scale-100">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-6 rounded-t-2xl">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Make a Donation</h2>
                <button 
                  onClick={handleCloseModal}
                  className="text-white hover:text-blue-200 text-2xl font-bold transition duration-200"
                >
                  ×
                </button>
              </div>
              <p className="text-blue-100 mt-2">Support our mission to empower communities</p>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              <div className="text-center">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                  <p className="text-sm text-green-600 font-semibold mb-2">Bank Transfer Details</p>
                  
                  <div className="space-y-3 text-left">
                    <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                      <span className="text-gray-600 font-medium">Account Name:</span>
                      <span className="text-gray-800 font-bold">HANDS OF CHANGE</span>
                    </div>
                    
                    <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                      <span className="text-gray-600 font-medium">Account Number:</span>
                      <span className="text-gray-800 font-bold text-lg">10134444885</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 font-medium">Bank:</span>
                      <span className="text-gray-800 font-bold">NATIONAL BANK OF MALAWI</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4">
                  You can transfer funds directly to our account using the details above. Every donation makes a difference!
                </p>
              </div>

              {/* Additional Info */}
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h3 className="font-semibold text-blue-800 mb-2">Need Help?</h3>
                <p className="text-sm text-blue-600">
                  For international transfers or any questions, please contact us at:
                  <br />
                  <span className="font-medium">info@handsofchange.org</span>
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-gray-50 px-6 py-4 rounded-b-2xl border-t border-gray-200">
              <div className="text-center">
                <p className="text-lg font-bold text-green-600 mb-2">
                  THANK YOU FOR YOUR DONATION
                </p>
                <p className="text-sm text-gray-500">
                  Your support helps us continue our vital work in the community
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;