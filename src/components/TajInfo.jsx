import React from "react";

export const TajInfo = () => {
    const places = [
        { state: "Andhra Pradesh", name: "Tirupati Temple", image: "https://example.com/tirupati.jpg", description: "The famous Venkateswara Temple, visited by millions of pilgrims annually." },
        { state: "Arunachal Pradesh", name: "Tawang Monastery", image: "https://example.com/tawang.jpg", description: "A stunning monastery located amidst the Himalayan mountains." },
        { state: "Assam", name: "Kaziranga National Park", image: "https://example.com/kaziranga.jpg", description: "Home to the one-horned rhinoceros and a UNESCO World Heritage Site." },
        { state: "Bihar", name: "Mahabodhi Temple", image: "https://example.com/mahabodhi.jpg", description: "A sacred Buddhist site where Buddha attained enlightenment." },
        { state: "Chhattisgarh", name: "Chitrakote Waterfalls", image: "https://example.com/chitrakote.jpg", description: "Known as the 'Niagara Falls of India' for its breathtaking beauty." },
        { state: "Goa", name: "Baga Beach", image: "https://example.com/baga-beach.jpg", description: "A vibrant beach known for nightlife and water sports." },
        { state: "Gujarat", name: "Statue of Unity", image: "https://example.com/statue-of-unity.jpg", description: "The tallest statue in the world, honoring Sardar Vallabhbhai Patel." },
        { state: "Haryana", name: "Sultanpur Bird Sanctuary", image: "https://example.com/sultanpur.jpg", description: "A haven for bird watchers, especially during the migratory season." },
        { state: "Himachal Pradesh", name: "Shimla", image: "https://example.com/shimla.jpg", description: "A picturesque hill station known for its colonial charm." },

    ];

    return (
        <div className="bg-gray-100 p-10">
            <h2 className="text-4xl font-bold text-center mb-10">
                Top Tourist Places in India by State
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                            <p className="text-sm text-gray-600">{place.state}</p>
                        </div>
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-md flex items-center justify-center text-center p-4">
                            <p className="text-white text-sm">{place.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};



