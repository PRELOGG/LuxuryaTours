import React from "react";
import  Aguda from '../assets/Aguda light house.webp'
import Arambol from '../assets/Arambol Beach.webp'
import Candolim from '../assets/Candolim Beach Road.webp'
import Chapora from '../assets/Chapora fort.webp'
import Dudhasar from '../assets/Dudhasar.jpg'
import Harvalen from '../assets/Harvalem Waterfalls.webp'
import Ilove from '../assets/I love Goa.webp'
import Palolem from '../assets/Palolem Beach.jpg'
import Shree from '../assets/Shree Shantadurga Temple.webp'
import Sinquerium from '../assets/Sinquerim Beach.webp'

export const GoaInfo = () => {
    const places = [
        {
          name: "Fort Aguada Lighthouse",
          image: Aguda,
          description:
            "A historic 17th-century Portuguese fort, famous for its iconic lighthouse and panoramic views of the Arabian Sea.",
        },
        {
          name: "Arambol Beach",
          image: Arambol,
          description:
            "A serene beach in North Goa, popular for its laid-back atmosphere, yoga retreats, and live music sessions.",
        },
        {
          name: "Candolim Beach",
          image: Candolim,
          description:
            "Known for its tranquil vibes, Candolim Beach is perfect for a peaceful stroll and beachfront dining.",
        },
        {
          name: "Chapora Fort",
          image: Chapora,
          description:
            "A scenic fort made famous by Bollywood, offering stunning views of Vagator Beach and the Arabian Sea.",
        },
        {
          name: "Dudhsagar Falls",
          image: Dudhasar,
          description:
            "One of India’s tallest waterfalls, Dudhsagar Falls is a majestic sight surrounded by lush forests and trekking trails.",
        },
        {
          name: "Harvalem Waterfalls",
          image: Harvalen,
          description:
            "A hidden gem in Goa, Harvalem Waterfalls is a perfect spot for nature lovers and photography enthusiasts.",
        },
        {
          name: "I Love Goa Spot",
          image: Ilove,
          description:
            "A trendy photo spot with the iconic 'I Love Goa' sign, ideal for capturing memorable moments in Goa.",
        },
        {
          name: "Palolem Beach",
          image: Palolem,
          description:
            "A picturesque crescent-shaped beach, ideal for kayaking, dolphin-watching, and unwinding in peaceful surroundings.",
        },
        {
          name: "Basilica of Bom Jesus",
          image: Shree,
          description:
            "A UNESCO World Heritage Site housing the mortal remains of St. Francis Xavier, showcasing stunning Baroque architecture.",
        },
        {
          name: "Sinquerim Beach",
          image: Sinquerium,
          description:
            "A golden sandy beach ideal for water sports like parasailing and jet skiing, close to the famous Fort Aguada.",
        },
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
                    className="relative group overflow-hidden rounded-lg shadow-lg bg-white" onClick={()=>window.location.href='/Enquiry'}
                >
                    <img
                        src={place.image}
                        alt={place.name}
                        className="w-full h-60 object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="p-4">
                        <h3 className="text-xl font-bold text-gray-800">{place.name}</h3>
                        <p className="text-sm text-gray-600">{place.description}</p>
                    </div>

                </div>
            ))}
        </div>
    </div>
    );
};

