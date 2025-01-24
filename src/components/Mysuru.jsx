import React from 'react';
import MysuruTours from '../assets/mysore-palace.jpg'



export const Mysuru = () => {
  return (
    <div>
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <div className="w-full h-full">

      <img
          src={MysuruTours}
          alt="Tamilnadu..."
          className="w-full h-full object-cover" // Ensures the image scales responsively
        />
        
      
      </div>

      {/* Centered Transparent Container */}
      <div className=" absolute inset-0 flex items-center justify-center p-4 sm:p-8 sm:absolute sm:indent-0 sm:items-center sm:justify-center">
        <div className="w-screen max-w-4xl bg-black/20 backdrop-blur-sm   rounded-3xl shadow-lg p-8 flex flex-col items-center sm:relative sm:top-44  sm:w-[600px] justify-center h-[350px] relative top-48 sm:h-[300px]">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center bg-gradient-to-r from-white to-yellow-500 bg-clip-text text-transparent ">
          karnataka
          </h1>
          <p className="mt-4 text-center bg-gradient-to-r from-white to-yellow-500 bg-clip-text text-transparent text-sm sm:text-base lg:text-lg">
          Karnataka, located in the southern part of India, is a treasure trove of cultural heritage, natural wonders, 
          and vibrant traditions. Known for its majestic temples, historic forts,
           pristine beaches, and lush greenery, Karnataka offers a diverse travel experience.

          </p>
          {/* <p className="text-white border-2 border-solid w-36 h-10 p-2 items-center flex justify-center mt-3 hover:text-blue-300 rounded-full">Start now</p> */}
          <button className="btn bg-black text-white rounded-pill my-4 fs-5 px-4" onClick={()=>window.location.href='/MysuruInformation'}>Start now</button>
        </div>
      </div>
    </div>
   
    </div>
  );
};


