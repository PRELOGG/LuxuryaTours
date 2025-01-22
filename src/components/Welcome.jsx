import React from 'react';
import Wecomvideo from '../assets/main1.jpg'

export const Welcome = () => {
    return (
      <div className="relative h-screen w-full">
        {/* Video Background */}
        <div className="absolute inset-0">
          {/* <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover brightness-200"
          >
            <source src={Wecomvideo} type="video/mp4" />
          </video> */}
          <img src={Wecomvideo} alt='image' className="w-full h-full object-cover brightness-200"/>
        </div>
  
        {/* Content Overlay */}
        <div className="absolute inset-0   brightness-100  bg-opacity-50 flex items-center p-3 justify-center z-10">
          <div className="w-screen max-w-4xl bg-white/25 backdrop-blur-sm relative bottom-10   rounded-3xl shadow-lg p-8 flex flex-col items-center justify-center h-[520px]">
          <p className="text-5xl font-semibold animate-pulse relative bottom-3 bg-gradient-to-r from-green-800 via-blue-800 to-red-500 bg-clip-text text-transparent">
  Welcome to Luxurya Tours...
</p>

            <p className="text-gray-900 text-xl font-bold  bg-gradient-to-r from-green-800 via-blue-800 to-red-500 bg-clip-text text-transparent ">
              We are Proud to Introduce our Worthwhile Scheme "LUXURYA TOURS". 
              Which is Situated in COIMBATORE, BENGALURU. Our Service Scheme 
              Comprise for Domestic, International, Inbound and Outbound Tourism, 
              Focus on Educational Tours, Corporate Tours, Leisure Tours and Pilgrimages.
            </p>
          </div>
        </div>
      </div>
    );
  };
  

