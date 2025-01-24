import React from 'react';
import Mysore from '../assets/Mysore.png';
import Coorg from '../assets/coorg.avif';
import Chikamangalur from '../assets/Chikamanga.jpg';
import Dandly from '../assets/dandly.webp';
import Gokarna from '../assets/gokarna.webp';
import Udupi from '../assets/Udupi.jpg';
import Murudheshwar from '../assets/Murudheshwa.jpg';
import Mangalore from '../assets/Mangalore.jpg';

export const MysuruInfo = () => {
    const places = [
        {
            name: "Mysore Palace",
            image: Mysore, // Replace with actual image link
            description: "A magnificent royal palace known for its grandeur and illumination during festivals."
        },
        {
            name: "Chamundi Hill",
            image: Coorg, // Replace with actual image link
            description: "Famous for the Chamundeshwari Temple and panoramic views of Mysuru city."
        },
        {
            name: "Brindavan Gardens",
            image: Chikamangalur, // Replace with actual image link
            description: "Known for its musical fountain, the gardens are a popular evening destination."
        },
        {
            name: "St. Philomena's Church",
            image: Dandly, // Replace with actual image link
            description: "A Neo-Gothic church featuring stunning architecture and stained-glass windows."
        },
        {
            name: "Mysuru Zoo",
            image: Gokarna, // Replace with actual image link
            description: "One of India’s oldest zoos, home to diverse wildlife and well-maintained habitats."
        },
        {
            name: "Jaganmohan Palace",
            image: Udupi, // Replace with actual image link
            description: "A historic palace now serving as an art gallery showcasing traditional and modern art."
        },
        {
            name: "Karanji Lake",
            image: Murudheshwar, // Replace with actual image link
            description: "A serene lake with a butterfly park and a walk-through aviary, perfect for nature lovers."
        },
        {
            name: "Railway Museum",
            image: Mangalore, // Replace with actual image link
            description: "A museum showcasing vintage locomotives, carriages, and the history of Indian railways."
        }
    ];

    return (
        <div className="bg-gray-100 p-10">
            <h2 className="text-4xl font-bold text-center mb-10">
                Top Tourist Places in Karnataka
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {places.map((place, index) => (
                    <div
                        key={index}
                        className="relative group overflow-hidden rounded-lg shadow-lg bg-white" 
                        onClick={() => window.location.href='/Enquiry'}
                    >
                        <img
                            src={place.image}
                            alt={place.name}
                            className="w-full h-60 object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-bold text-gray-800">{place.name}</h3>
                            {/* Removed location and used name instead */}
                            <p className="text-sm text-gray-600">{place.description}</p>
                        </div>
                    
                    </div>
                ))}
            </div>
        </div>
    );
};
