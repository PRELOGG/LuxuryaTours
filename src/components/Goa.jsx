import React from 'react'
import GoaTours from '../assets/goamain.jpg'

export const Goa = () => {
  return (
    <div className="relative w-full h-screen ">
      {/* Background Image */}
      <div className="w-full h-full">
        <img
          src={GoaTours}
          alt="Tamilnadu..."
          className="w-full h-full object-cover brightness-50" // Ensures the image scales responsively
        />
      </div>

      {/* Centered Transparent Container */}
      <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8 text-white">
        <div className="w-screen max-w-4xl   rounded-3xl  p-8 flex flex-col items-center justify-center h-[500px]">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center bg-gradient-to-r from-white to-yellow-500 bg-clip-text text-transparent ">
           Goa
          </h1>
          <p className="mt-4 text-center  text-sm sm:text-base lg:text-lg bg-gradient-to-r from-white to-yellow-500 bg-clip-text text-transparent">
          Goa, India’s smallest state, is a tropical haven that offers a perfect blend of vibrant beaches, rich Portuguese heritage, and 
          thrilling nightlife. Famous for its pristine beaches like Baga, Calangute, and Palolem, Goa is a hotspot for water sports such as parasailing, 
          jet-skiing, and scuba diving. History enthusiasts can explore Old Goa's architectural marvels, including the Basilica of Bom Jesus and Se 
          Cathedral, showcasing Portuguese influence. As the sun sets, Goa transforms into a lively destination with beach parties, bustling shacks,
           and casinos. For a quieter escape, travelers can enjoy serene backwater cruises along the Mandovi and Chapora rivers.
          </p>
          {/* <p className="text-white border-2 border-solid w-36 h-10 p-2 items-center flex justify-center mt-3 hover:text-blue-300 rounded-full">Start now</p> */}
          <button className="btn bg-black text-white rounded-pill my-4 fs-5 px-4" onClick={()=>window.location.href='/GoaInformation'}>Start now</button>
        </div>
      </div>
    </div>
  )
}
