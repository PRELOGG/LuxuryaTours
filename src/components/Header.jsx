import React from 'react';
import Logo from '../assets/Luxurya-remove.png';

export const Header = () => {
  return (
    <div className="w-full h-20 sm:h-24 md:h-28 bg-black brightness-200 border-b shadow-sm flex items-center justify-between px-4 lg:px-8 z-30 top-0 sticky">
      {/* Logo Section */}
      <div className="flex items-center">
        <img
          src={Logo}
          alt="Logo"
          className="h-14  sm:h-14 md:h-16 w-36 object-cover" // Logo scales for small, medium, and larger screens
        />
      </div>

      {/* Enquiry Button */}
      <div>
        <button
          className="btn btn-dark text-white text-sm sm:text-base px-3 sm:px-4 py-1 sm:py-2 bg-gradient-to-r from-emerald-700 to-gray-900  rounded-tl-2xl rounded-br-2xl shadow-md animate-bounce "
          type="button" onClick={()=>window.location.href='/Enquiry'}
        >
          Enquiry
        </button>
      </div>
    </div>
  );
};


