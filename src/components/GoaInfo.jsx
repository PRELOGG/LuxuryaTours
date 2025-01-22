import React from "react";
import  Aguda from '../assets/Aguda light house.webp'
import Arambol from '../assets/Arambol Beach.webp'
import Candolim from '../assets/Candolim Beach Road.webp'
import Chapora from '../assets/Chapora fort.webp'
import Dudhasar from '../assets/Dudhasar.jpg'
import Harvalen from '../assets/Harvalem Waterfalls.webp'
import Ilove from '../assets/I love Goa.webp'
import Paloloe from '../assets/Palole beach.jpg'
import Palolem from '../assets/Palolem Beach.jpg'
import Shree from '../assets/Shree Shantadurga Temple.webp'
import Sinquerium from '../assets/Sinquerim Beach.webp'

export const GoaInfo = () => {
    const places = [
        {
            name: "Calangute Beach",
            image: Candolim, // Replace with actual image link
            description: "Calangute Beach is the largest beach in Goa, popular for water sports and vibrant nightlife."
        },
        {
            name: "Baga Beach",
            image: Harvalen, // Replace with actual image link
            description: "Baga Beach is famous for its beach parties, shacks, and water sports activities."
        },
        {
            name: "Dudhsagar Falls",
            image: Dudhasar, // Replace with actual image link
            description: "Dudhsagar Falls is one of India's tallest waterfalls, surrounded by lush greenery."
        },
        {
            name: "Basilica of Bom Jesus",
            image: Paloloe, // Replace with actual image link
            description: "This UNESCO World Heritage site houses the mortal remains of St. Francis Xavier."
        },
        {
            name: "Anjuna Beach",
            image: Shree, // Replace with actual image link
            description: "Anjuna Beach is known for its scenic beauty, flea markets, and trance parties."
        },
        {
            name: "Fort Aguada",
            image: Aguda, // Replace with actual image link
            description: "Fort Aguada is a 17th-century fort offering stunning views of the Arabian Sea."
        },
        {
            name: "Palolem Beach",
            image: Palolem, // Replace with actual image link
            description: "Palolem Beach is a serene destination, perfect for relaxation and kayaking."
        },
        {
            name: "Chapora Fort",
            image: Chapora, // Replace with actual image link
            description: "Chapora Fort, made famous by Bollywood, offers breathtaking views of the Vagator Beach."
        },
        {
            name: "Se Cathedral",
            image: Ilove, // Replace with actual image link
            description: "Se Cathedral is one of the largest churches in Asia, known for its Portuguese-Gothic architecture."
        },
        {
            name: "Arambol Beach",
            image: Arambol, // Replace with actual image link
            description: "Arambol Beach is a tranquil location popular for yoga retreats and live music."
        },
        {
            name: "Arambol Beach",
            image: Sinquerium, // Replace with actual image link
            description: "Arambol Beach is a tranquil location popular for yoga retreats and live music."
        }
    ];

    return (
        <div className="bg-gray-100 p-10">
        <h2 className="text-4xl font-bold text-center mb-10">
            Top Tourist Places in Goa

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

