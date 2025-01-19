// import React from 'react'
// import KeralaTours from '../assets/LUXURYA/Kerala/Alapula.jpg'

// export const Kerala = () => {
//   return (
//     <div className="relative w-full h-screen p-2">
//       {/* Background Image */}
//       <div className="w-full h-full">
//         <img
//           src={KeralaTours}
//           alt="Tamilnadu..."
//           className="w-full h-full object-cover" // Ensures the image scales responsively
//         />
//       </div>

//       {/* Centered Transparent Container */}
//       <div className="absolute top-0 right-0 sm:inset-0 sm:justify-center sm:flex  flex items-center justify-end p-4 sm:p-8">
//         <div className="w-screen max-w-4xl  rounded-3xl  p-8 flex flex-col items-center justify-center h-[500px]">
//           <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900">
//             Tamil Nadu
//           </h1>
//           <p className="mt-4 text-center text-gray-900 text-sm sm:text-base lg:text-lg">
//             Explore the cultural heritage, vibrant festivals, and breathtaking landscapes of Tamil Nadu.
//             Explore the cultural heritage, vibrant festivals, and breathtaking landscapes of Tamil Nadu.
//             Explore the cultural heritage, vibrant festivals, and breathtaking landscapes of Tamil Nadu.
//             Explore the cultural heritage, vibrant festivals, and breathtaking landscapes of Tamil Nadu.
//             Explore the cultural heritage, vibrant festivals, and breathtaking landscapes of Tamil Nadu.
//             Explore the cultural heritage, vibrant festivals, and breathtaking landscapes of Tamil Nadu.
//             Explore the cultural heritage, vibrant festivals, and breathtaking landscapes of Tamil Nadu.
//           </p>
//           {/* <p className="text-white border-2 border-solid w-36 h-10 p-2 items-center flex justify-center mt-3 hover:text-blue-300 rounded-full">Start now</p> */}
//           <button className="btn bg-black text-white rounded-pill my-4 fs-5 px-4">Start now</button>
//         </div>
//       </div>
//     </div>
//   )
// }


import React from 'react';
import KeralaTours from '../assets/LUXURYA/Kerala/Alapula.jpg';

export const Kerala = () => {
  return (
    <div className="relative w-full h-screen p-6 sm:p-10">
      {/* Background Image */}
      <div className="w-full h-full">
        <img
          src={KeralaTours}
          alt="Kerala"
          className="w-full h-full object-cover" // Ensures the image scales responsively
        />
      </div>

      {/* Centered Transparent Container */}
      <div className="absolute inset-0 flex items-center justify-center sm:justify-end  sm:items-start p-6 sm:p-4">
        <div className="w-full max-w-4xl  rounded-3xl p-4 sm:p-2 flex flex-col items-center sm:items-center justify-center sm:justify-start h-[500px]">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center sm:text-right text-gray-900">
            Kerala
          </h1>
          <p className="mt-4 text-center sm:text-right text-gray-900 text-sm sm:text-base lg:text-lg">
            Explore the cultural heritage, vibrant festivals, and breathtaking landscapes of Tamil Nadu.
            Explore the cultural heritage, vibrant festivals, and breathtaking landscapes of Tamil Nadu.
            Explore the cultural heritage, vibrant festivals, and breathtaking landscapes of Tamil Nadu.
            Explore the cultural heritage, vibrant festivals, and breathtaking landscapes of Tamil Nadu.
            Explore the cultural heritage, vibrant festivals, and breathtaking landscapes of Tamil Nadu.
            Explore the cultural heritage, vibrant festivals, and breathtaking landscapes of Tamil Nadu.
            Explore the cultural heritage, vibrant festivals, and breathtaking landscapes of Tamil Nadu.
          </p>
          <button className="btn bg-black text-white rounded-full my-4 px-6 py-2 hover:bg-gray-800" onClick={()=>window.location.href='/KeralaInformation'}>
            Start now
          </button>
        </div>
      </div>
    </div>
  );
};

