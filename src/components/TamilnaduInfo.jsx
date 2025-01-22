import React from "react";
import Ooty from '../assets/Ooty.jpg'
import Koadaikanal from '../assets/Kodaikanal.jpg'
import Chennai from '../assets/Chenai.jpg'
import Madurai from '../assets/Maduurai.jpeg'
import Thanjavur from '../assets/Thanjavr.jpg'
import Yearcard from '../assets/Yearcaud.webp'

export const TamilnaduInfo = () => {
   
    
    const places = [
        {
            name: "Meenakshi Amman Temple",
            location: "Madurai",
            image: Madurai,
            description: "A historic temple known for its intricate carvings and spiritual significance."
        },
        {
            name: "Marina Beach",
            location: "Chennai",
            image: Chennai,
            description: "The longest natural urban beach in India, perfect for relaxing and enjoying the sea breeze."
        },
        {
            name: "Ooty Botanical Gardens",
            location: "Ooty",
            image: Ooty,
            description: "A stunning garden in the Nilgiri Hills, showcasing diverse flora and breathtaking landscapes."
        },
        {
            name: "Thanjavur Brihadeeswarar Temple",
            location: "Thanjavur",
            image: Thanjavur,
            description: "A UNESCO World Heritage Site, this Chola temple is a masterpiece of architecture."
        },
        {
            name: "Kodaikanal Lake",
            location: "Kodaikanal",
            image: Koadaikanal,
            description: "A serene man-made lake surrounded by lush greenery, perfect for boating and picnics."
        },

        {
            name: "Yercaud",
            location: "Yercaud",
            image: Yearcard,
            description: "A picturesque hill station known for its coffee plantations and serene environment."
        }
     
    ];

    return (
        <div className="bg-gray-100 p-10">
            <h2 className="text-4xl font-bold text-center mb-10">
                Top Tourist Places in Tamil Nadu
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {places.map((place, index) => (
                    <div
                        key={index}
                        className="relative group overflow-hidden rounded-lg shadow-lg bg-white"
                    >
                        <img
                            src={place.image}
                            alt={place.name}
                            className="w-full h-60 object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-bold text-gray-800">{place.name}</h3>
                            <p className="text-sm text-gray-600">{place.location}</p>
                        </div>
                        <div
                            className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 
                                       transition-opacity duration-500 backdrop-blur-md flex items-center justify-center text-center p-6"
                        >
                            <p className="text-white text-base leading-6 font-medium">
                                {place.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};






