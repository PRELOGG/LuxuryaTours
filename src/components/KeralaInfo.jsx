import React from "react";

export const KeralaInfo = () => {
    const places = [
        {
            name: "Alleppey (Alappuzha)",
            image: "https://example.com/alleppey.jpg", // Replace with actual image link
            description: "Known as the 'Venice of the East,' Alleppey is famous for its backwaters and houseboat cruises."
        },
        {
            name: "Munnar",
            image: "https://example.com/munnar.jpg", // Replace with actual image link
            description: "Munnar is a picturesque hill station with tea plantations, misty hills, and waterfalls."
        },
        {
            name: "Wayanad",
            image: "https://example.com/wayanad.jpg", // Replace with actual image link
            description: "Wayanad is known for its lush greenery, wildlife sanctuaries, and Edakkal Caves."
        },
        {
            name: "Kochi (Cochin)",
            image: "https://example.com/kochi.jpg", // Replace with actual image link
            description: "Kochi, the Queen of the Arabian Sea, is famous for its Chinese fishing nets and colonial history."
        },
        {
            name: "Kumarakom",
            image: "https://example.com/kumarakom.jpg", // Replace with actual image link
            description: "Kumarakom is a serene destination known for its backwaters, bird sanctuary, and houseboats."
        },
        {
            name: "Thekkady",
            image: "https://example.com/thekkady.jpg", // Replace with actual image link
            description: "Thekkady is home to the Periyar Wildlife Sanctuary and offers boating amidst lush forests."
        },
        {
            name: "Varkala",
            image: "https://example.com/varkala.jpg", // Replace with actual image link
            description: "Varkala is a coastal town known for its stunning cliffs, beaches, and temples."
        },
        {
            name: "Kovalam",
            image: "https://example.com/kovalam.jpg", // Replace with actual image link
            description: "Kovalam is a popular beach destination with golden sands and crescent-shaped beaches."
        },
        {
            name: "Thrissur",
            image: "https://example.com/thrissur.jpg", // Replace with actual image link
            description: "Thrissur is the cultural capital of Kerala, famous for Thrissur Pooram and temples."
        },
        {
            name: "Bekal",
            image: "https://example.com/bekal.jpg", // Replace with actual image link
            description: "Bekal is known for its iconic Bekal Fort and tranquil beaches."
        }
    ];

    return (
        <div className="bg-gray-100 p-10">
            <h2 className="text-3xl font-bold text-center mb-8">Top Tourist Places in Kerala</h2>
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


