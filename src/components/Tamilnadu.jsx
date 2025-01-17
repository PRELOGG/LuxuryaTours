import React from 'react';

import TamilnaduVideo from '../assets/video/ALl.mp4'
import { Kerala } from './Kerala';
import { Goa } from './Goa';
import { Mysuru } from './Mysuru';
import { Taj } from './Taj';


export const Tamilnadu = () => {
  return (
    <div>
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <div className="w-full h-full">
        
        <video  autoPlay muted loop playsInline  className="w-full h-full object-cover">
        <source src={TamilnaduVideo} type="video/mp4"/>

           </video>
      </div>

      {/* Centered Transparent Container */}
      <div className=" absolute inset-0 flex items-center justify-center p-4 sm:p-8">
        <div className="w-screen max-w-4xl bg-white/20 backdrop-blur-sm   rounded-3xl shadow-lg p-8 flex flex-col items-center justify-center h-[500px]">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900">
            Tamil Nadu
          </h1>
          <p className="mt-4 text-center text-gray-900 text-sm sm:text-base lg:text-lg">
            Explore the cultural heritage, vibrant festivals, and breathtaking landscapes of Tamil Nadu.
            Explore the cultural heritage, vibrant festivals, and breathtaking landscapes of Tamil Nadu.
            Explore the cultural heritage, vibrant festivals, and breathtaking landscapes of Tamil Nadu.
            Explore the cultural heritage, vibrant festivals, and breathtaking landscapes of Tamil Nadu.
            Explore the cultural heritage, vibrant festivals, and breathtaking landscapes of Tamil Nadu.
            Explore the cultural heritage, vibrant festivals, and breathtaking landscapes of Tamil Nadu.
            Explore the cultural heritage, vibrant festivals, and breathtaking landscapes of Tamil Nadu.
          </p>
          {/* <p className="text-white border-2 border-solid w-36 h-10 p-2 items-center flex justify-center mt-3 hover:text-blue-300 rounded-full">Start now</p> */}
          <button className="btn bg-black text-white rounded-pill my-4 fs-5 px-4" onClick={()=>window.location.href='/TamilnaduInformation'}>Start now</button>
        </div>
      </div>
    </div>
    <div>
      <div>
        <Kerala/>
      </div>
      <div>
        <Goa/>
      </div>
      <div>
        <Mysuru/>
      </div>
      <div>
        <Taj/>
      </div>
      
    </div>
    </div>
  );
};


