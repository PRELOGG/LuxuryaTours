import React from 'react';
import KeralaTours from '../assets/kerala.jpg'

export const Kerala = () => {
  return (
    <div className="relative w-full h-screen ">
      {/* Background Image */}
      <div className="w-full h-full">
        <img
          src={KeralaTours}
          alt="Kerala"
          className="w-full h-full object-cover brightness-50" // Ensures the image scales responsively
        />
      </div>

      {/* Centered Transparent Container */}
      <div className="absolute inset-0 flex items-center justify-center sm:justify-end  sm:items-start p-6 sm:p-4">
        <div className="w-full max-w-4xl  rounded-3xl p-4 sm:p-2 flex flex-col items-center sm:items-center justify-center sm:justify-start h-[500px]">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center sm:text-right bg-gradient-to-r from-white to-yellow-500 bg-clip-text text-transparent">
            Kerala
          </h1>
          <p className="mt-4 text-center sm:text-right  text-sm sm:text-base lg:text-lg bg-gradient-to-r from-white to-yellow-500 bg-clip-text text-transparent">
          Kerala, nestled between the Arabian Sea and the Western Ghats, is a tropical paradise known for its serene backwaters, lush greenery, pristine beaches, and rich cultural heritage. It’s a
           dream destination for travelers seeking tranquility, adventure, or a blend of both. Here’s an ultimate travel guide to Kerala for tourists.
          </p>
          <button className="btn bg-black text-white rounded-full my-4 px-6 py-2 hover:bg-gray-800" onClick={()=>window.location.href='/KeralaInformation'}>
            Start now
          </button>
        </div>
      </div>
    </div>
  );
};

