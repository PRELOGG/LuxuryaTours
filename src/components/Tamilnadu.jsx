import React from 'react';
import TamilnaduTours from '../assets/LUXURYA/Tamil nadu/Kotagiri.webp';

export const Tamilnadu = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <div className="w-full h-full">
        <img
          src={TamilnaduTours}
          alt="Tamilnadu..."
          className="w-full h-full object-cover" // Ensures the image scales responsively
        />
      </div>

      {/* Centered Transparent Container */}
      <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8">
        <div className="w-screen max-w-4xl bg-white/30 bg-opacity-70 rounded-3xl shadow-lg p-8 flex flex-col items-center justify-center h-[500px]">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-white">
            Tamil Nadu
          </h1>
          <p className="mt-4 text-center text-white text-sm sm:text-base lg:text-lg">
            Explore the cultural heritage, vibrant festivals, and breathtaking landscapes of Tamil Nadu.
          </p>
          <p className="text-white border-2 border-solid border-blue-600 w-36 h-10 p-2 items-center flex justify-center mt-3 hover:text-blue-300 rounded-full">Start now</p>
        </div>
      </div>
    </div>
  );
};


