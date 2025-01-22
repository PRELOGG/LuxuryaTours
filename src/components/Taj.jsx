
import React, { useEffect, useState } from 'react';

import Scroll1 from '../assets/Footer/Hills 1.jpg';
import Scroll2 from '../assets/Footer/Hills 2.jpg';
import Scroll3 from '../assets/Footer/Hills 3.jpeg';
import Scroll4 from '../assets/Footer/Hills 4.jpg';
import Scroll5 from '../assets/Footer/Hills 5.jpeg';
import Scroll6 from '../assets/Footer/Hills 6.jpg';
import Scroll7 from '../assets/Footer/Hills 7.webp';
import Scroll8 from '../assets/Footer/Hills 8.jpg';
import Scroll9 from '../assets/Footer/Hills 9.jpg';
import Scroll10 from '../assets/Footer/Hills 10.jpg';



export const Taj = () => {
  const images = [Scroll1, Scroll2,Scroll3,Scroll4,Scroll5,Scroll6,Scroll7,Scroll8,Scroll9,Scroll10];
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
        className="relative flex w-[1100%] h-full transition-transform duration-700 ease-in-out "
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

