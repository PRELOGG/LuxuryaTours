import React from "react";
import Munnar from '../assets/Munnar.webp'
import Vagamon from '../assets/Vagamon.jpg'
import Kanthaloor from '../assets/Kanthaloor.jpg'
import Varkala from '../assets/Varkalaa.jpg'
import Allepy from '../assets/Allepy kera.jpeg'
import Cochin from '../assets/Cochin ker.jpg'
import Tekkady from '../assets/Thekkday.webp'
import Wayanad from '../assets/Wayanad.jpg'



 



export const KeralaInfo = () => {
    const places = [
        {
            name: "Alleppey (Alappuzha)",
            image: Vagamon, // Replace with actual image link
            description: "Known as the 'Venice of the East,' Alleppey is famous for its backwaters and houseboat cruises."
        },
        {
            name: "Munnar",
            image: Munnar, // Replace with actual image link
            description: "Munnar is a picturesque hill station with tea plantations, misty hills, and waterfalls."
        },
        {
            name: "Wayanad",
            image: Wayanad, // Replace with actual image link
            description: "Wayanad is known for its lush greenery, wildlife sanctuaries, and Edakkal Caves."
        },
        {
            name: "Kochi (Cochin)",
            image: Cochin, // Replace with actual image link
            description: "Kochi, the Queen of the Arabian Sea, is famous for its Chinese fishing nets and colonial history."
        },
        {
            name: "Kumarakom",
            image: Allepy, // Replace with actual image link
            description: "Kumarakom is a serene destination known for its backwaters, bird sanctuary, and houseboats."
        },
        {
            name: "Thekkady",
            image: Tekkady, // Replace with actual image link
            description: "Thekkady is home to the Periyar Wildlife Sanctuary and offers boating amidst lush forests."
        },
        {
            name: "Varkala",
            image: Varkala, // Replace with actual image link
            description: "Varkala is a coastal town known for its stunning cliffs, beaches, and temples."
        },
        {
            name: "Kovalam",
            image: Kanthaloor, // Replace with actual image link
            description: "Kovalam is a popular beach destination with golden sands and crescent-shaped beaches."
        }
       
    ];

    return (
        <div className="bg-gray-100 p-10">
        <h2 className="text-4xl font-bold text-center mb-10">
            Top Tourist Places in Kerala
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


