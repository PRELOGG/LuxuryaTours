import React from 'react'


export const MysuruInfo = () => {
    const places = [
        {
            name: "Mysore Palace",
            image: "https://example.com/mysore-palace.jpg", // Replace with actual image link
            description: "A magnificent royal palace known for its grandeur and illumination during festivals."
        },
        {
            name: "Chamundi Hill",
            image: "https://example.com/chamundi-hill.jpg", // Replace with actual image link
            description: "Famous for the Chamundeshwari Temple and panoramic views of Mysuru city."
        },
        {
            name: "Brindavan Gardens",
            image: "https://example.com/brindavan-gardens.jpg", // Replace with actual image link
            description: "Known for its musical fountain, the gardens are a popular evening destination."
        },
        {
            name: "St. Philomena's Church",
            image: "https://example.com/philomena-church.jpg", // Replace with actual image link
            description: "A Neo-Gothic church featuring stunning architecture and stained-glass windows."
        },
        {
            name: "Mysuru Zoo",
            image: "https://example.com/mysuru-zoo.jpg", // Replace with actual image link
            description: "One of India’s oldest zoos, home to diverse wildlife and well-maintained habitats."
        },
        {
            name: "Jaganmohan Palace",
            image: "https://example.com/jaganmohan-palace.jpg", // Replace with actual image link
            description: "A historic palace now serving as an art gallery showcasing traditional and modern art."
        },
        {
            name: "Karanji Lake",
            image: "https://example.com/karanji-lake.jpg", // Replace with actual image link
            description: "A serene lake with a butterfly park and a walk-through aviary, perfect for nature lovers."
        },
        {
            name: "Railway Museum",
            image: "https://example.com/railway-museum.jpg", // Replace with actual image link
            description: "A museum showcasing vintage locomotives, carriages, and the history of Indian railways."
        },
        {
            name: "Lalitha Mahal",
            image: "https://example.com/lalitha-mahal.jpg", // Replace with actual image link
            description: "A luxury heritage hotel that was once a royal guesthouse, offering a regal experience."
        },
        {
            name: "Ranganathittu Bird Sanctuary",
            image: "https://example.com/ranganathittu.jpg", // Replace with actual image link
            description: "A popular bird sanctuary near Mysuru, ideal for bird watching and boat rides."
        }
    ];

    return (
        <div className="bg-gray-100 p-10">
            <h2 className="text-3xl font-bold text-center mb-8">Top Tourist Places in Mysuru</h2>
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



