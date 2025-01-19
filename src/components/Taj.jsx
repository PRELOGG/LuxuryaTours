// import React from 'react';
// import MysuruTours from '../assets/LUXURYA/Karanataka/Mysuru zoo.jpg'



// export const Taj = () => {
//     return (
//         <div>
//             <div className="relative w-full h-screen bottom-36">

//                 {/* Centered Transparent Container */}
//                 <div className=" flex items-center justify-center p-4 sm:p-8 ">
//                     <div className="w-screen max-w-4xl bg-white/5   rounded-3xl shadow-lg p-8 flex flex-col items-center  justify-center h-[350px] relative top-48 ">
//                         <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900">
//                             Mysuru Perales
//                         </h1>
//                         <p className="mt-4 text-center text-gray-900 text-sm sm:text-base lg:text-lg">
//                             Explore the cultural heritage, vibrant festivals, and breathtaking landscapes of Tamil Nadu.
//                             Explore the cultural heritage, vibrant festivals, and breathtaking landscapes of Tamil Nadu.
//                             Explore the cultural heritage, vibrant festivals, and breathtaking landscapes of Tamil Nadu.

//                         </p>
//                         {/* <p className="text-white border-2 border-solid w-36 h-10 p-2 items-center flex justify-center mt-3 hover:text-blue-300 rounded-full">Start now</p> */}
//                         <button className="btn bg-black text-white rounded-pill my-4 fs-5 px-4">Start now</button>
//                     </div>
//                 </div>

//                 <div className="w-full h-full">
//                     {/* Background Image */}
//                     <img
//                         src={MysuruTours}
//                         alt="Tamilnadu..."
//                         className="w-full h-full object-cover" // Ensures the image scales responsively
//                     />


//                 </div>
//             </div>

//         </div>
//     );
// };







import React, { useEffect, useState } from 'react';
import TajTours from '../assets/LUXURYA/Kerala/Wayanad.jpg';
import Exp from '../assets/LUXURYA/Goa/Dabolim.jpg';
import Ju from '../assets/LUXURYA/Kerala/Boat House.jpg';
import Lk from '../assets/LUXURYA/Karanataka/Madikara.jpg';
import juk from '../assets/Tamilnadu.jpg';

export const Taj = () => {
  const images = [TajTours, Exp, Ju, Lk, juk];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval
  }, [images.length]);

  return (
   
    <div className="relative w-full h-full overflow-hidden grid gap-2">
      {/* Overlay Content */}
      <div className="flex flex-col items-center justify-center text-center px-4 z-10">
        <div className="h-96 bg-white backdrop-brightness-200 rounded-3xl ">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 p-5">
            Mysuru Perales
          </h1>
          <p className="mt-4 text-gray-800 text-base sm:text-lg lg:text-xl relative bottom-6">
            Explore the cultural heritage, vibrant festivals, and breathtaking
            landscapes of Tamil Nadu. Immerse yourself in a journey filled with
            history and natural beauty.
          </p>
          <button className="mt-6 bg-black text-white py-2 px-6 rounded-full hover:bg-gray-800" onClick={()=>window.location.href='/TajInformation'}>
            Start Now
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div>
      <div
        className="relative flex w-[550%] h-full transition-transform duration-700 ease-in-out "
        style={{
          transform: `translateX(-${currentIndex * 100}vw)`,
        }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className="w-screen h-[400px] object-cover"
          />
        ))}
      </div>

      {/* Dots for Navigation */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full transition ${
              currentIndex === index
                ? 'bg-blue-500 scale-125'
                : 'bg-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={() =>
          setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
        }
        className="absolute left-4 top-[600px] transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-600 z-10"
      >
        {"<"}
      </button>

      {/* Next Button */}
      <button
        onClick={() =>
          setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
        }
        className="absolute right-4 top-[600px] transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-600 z-10"
      >
        {">"}
      </button>
    </div>
    </div>
   
    
  );
};

