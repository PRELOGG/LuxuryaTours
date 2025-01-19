import React from "react";

export const GoaInfo = () => {
    const places = [
        {
            name: "Calangute Beach",
            image: "https://example.com/calangute.jpg", // Replace with actual image link
            description: "Calangute Beach is the largest beach in Goa, popular for water sports and vibrant nightlife."
        },
        {
            name: "Baga Beach",
            image: "https://example.com/baga.jpg", // Replace with actual image link
            description: "Baga Beach is famous for its beach parties, shacks, and water sports activities."
        },
        {
            name: "Dudhsagar Falls",
            image: "https://example.com/dudhsagar.jpg", // Replace with actual image link
            description: "Dudhsagar Falls is one of India's tallest waterfalls, surrounded by lush greenery."
        },
        {
            name: "Basilica of Bom Jesus",
            image: "https://example.com/bomjesus.jpg", // Replace with actual image link
            description: "This UNESCO World Heritage site houses the mortal remains of St. Francis Xavier."
        },
        {
            name: "Anjuna Beach",
            image: "https://example.com/anjuna.jpg", // Replace with actual image link
            description: "Anjuna Beach is known for its scenic beauty, flea markets, and trance parties."
        },
        {
            name: "Fort Aguada",
            image: "https://example.com/aguada.jpg", // Replace with actual image link
            description: "Fort Aguada is a 17th-century fort offering stunning views of the Arabian Sea."
        },
        {
            name: "Palolem Beach",
            image: "https://example.com/palolem.jpg", // Replace with actual image link
            description: "Palolem Beach is a serene destination, perfect for relaxation and kayaking."
        },
        {
            name: "Chapora Fort",
            image: "https://example.com/chapora.jpg", // Replace with actual image link
            description: "Chapora Fort, made famous by Bollywood, offers breathtaking views of the Vagator Beach."
        },
        {
            name: "Se Cathedral",
            image: "https://example.com/se-cathedral.jpg", // Replace with actual image link
            description: "Se Cathedral is one of the largest churches in Asia, known for its Portuguese-Gothic architecture."
        },
        {
            name: "Arambol Beach",
            image: "https://example.com/arambol.jpg", // Replace with actual image link
            description: "Arambol Beach is a tranquil location popular for yoga retreats and live music."
        }
    ];

    return (
        <div className="bg-gray-100 p-10">
            <h2 className="text-3xl font-bold text-center mb-8">Top Tourist Places in Goa</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {places.map((place, index) => (
                    <div
                        key={index}
                        className="relative group overflow-hidden rounded-lg shadow-lg"
                    >
                        <img
                            src={place.image}
                            alt={place.name}
                            className="w-full h-60 object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-md flex items-center justify-center text-center p-4">
                            <div>
                                <h3 className="text-xl font-semibold text-white">{place.name}</h3>
                                <p className="text-sm text-gray-200 mt-2">{place.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

