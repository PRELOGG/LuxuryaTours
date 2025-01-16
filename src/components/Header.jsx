import React from 'react';
import Logo from '../assets/Luxurya.avif';

export const Header = () => {
  return (
    <div className="w-full h-20 sm:h-24 md:h-28 bg-white border-b shadow-sm flex items-center justify-between px-4 lg:px-8 z-10 top-0 sticky">
      {/* Logo Section */}
      <div className="flex items-center">
        <img
          src={Logo}
          alt="Logo"
          className="h-14 rounded-xl sm:h-14 md:h-16 w-36 object-cover" // Logo scales for small, medium, and larger screens
        />
      </div>

      {/* Enquiry Button */}
      <div>
        <button
          className="btn btn-primary text-white text-sm sm:text-base px-3 sm:px-4 py-1 sm:py-2 rounded-lg shadow-md"
          type="button"
        >
          Enquiry
        </button>
      </div>
    </div>
  );
};


