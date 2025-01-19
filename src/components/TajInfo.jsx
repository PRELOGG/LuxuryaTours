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
        { state: "Jharkhand", name: "Dassam Falls", image: "https://example.com/dassam.jpg", description: "A scenic waterfall surrounded by lush greenery." },
        { state: "Karnataka", name: "Mysore Palace", image: "https://example.com/mysore-palace.jpg", description: "A royal palace known for its grandeur and illumination." },
        { state: "Kerala", name: "Alleppey Backwaters", image: "https://example.com/alleppey.jpg", description: "Famous for its serene houseboat experiences." },
        { state: "Madhya Pradesh", name: "Khajuraho Temples", image: "https://example.com/khajuraho.jpg", description: "UNESCO-listed temples known for their intricate carvings." },
        { state: "Maharashtra", name: "Ajanta Caves", image: "https://example.com/ajanta.jpg", description: "Rock-cut caves with ancient Buddhist paintings and sculptures." },
        { state: "Manipur", name: "Loktak Lake", image: "https://example.com/loktak.jpg", description: "A freshwater lake with unique floating islands." },
        { state: "Meghalaya", name: "Living Root Bridges", image: "https://example.com/root-bridges.jpg", description: "Natural bridges formed by interwoven tree roots." },
        { state: "Mizoram", name: "Phawngpui Peak", image: "https://example.com/phawngpui.jpg", description: "The highest peak in Mizoram, offering stunning views." },
        { state: "Nagaland", name: "Dzukou Valley", image: "https://example.com/dzukou.jpg", description: "Known as the 'Valley of Flowers of the North-East'." },
        { state: "Odisha", name: "Konark Sun Temple", image: "https://example.com/konark.jpg", description: "A UNESCO World Heritage Site with intricate architecture." },
        { state: "Punjab", name: "Golden Temple", image: "https://example.com/golden-temple.jpg", description: "A spiritual site and a symbol of Sikhism." },
        { state: "Rajasthan", name: "Hawa Mahal", image: "https://example.com/hawa-mahal.jpg", description: "The 'Palace of Winds', a fine example of Rajput architecture." },
        { state: "Sikkim", name: "Nathula Pass", image: "https://example.com/nathula.jpg", description: "A high-altitude pass with stunning mountain views." },
        { state: "Tamil Nadu", name: "Meenakshi Amman Temple", image: "https://example.com/meenakshi.jpg", description: "A historic temple known for its intricate carvings." },
        { state: "Telangana", name: "Charminar", image: "https://example.com/charminar.jpg", description: "A historic monument and symbol of Hyderabad." },
        { state: "Tripura", name: "Ujjayanta Palace", image: "https://example.com/ujjayanta.jpg", description: "A royal palace that now houses a state museum." },
        { state: "Uttar Pradesh", name: "Taj Mahal", image: "https://example.com/taj-mahal.jpg", description: "One of the Seven Wonders of the World." },
        { state: "Uttarakhand", name: "Valley of Flowers", image: "https://example.com/valley-of-flowers.jpg", description: "A UNESCO World Heritage Site with diverse flora." },
        { state: "West Bengal", name: "Sundarbans", image: "https://example.com/sundarbans.jpg", description: "The largest mangrove forest and home to Bengal Tigers." },
        { state: "Delhi", name: "Red Fort", image: "https://example.com/red-fort.jpg", description: "A historic fort and symbol of India's independence." },
        { state: "Jammu & Kashmir", name: "Dal Lake", image: "https://example.com/dal-lake.jpg", description: "A scenic lake with houseboats and Shikara rides." },
        { state: "Ladakh", name: "Pangong Lake", image: "https://example.com/pangong.jpg", description: "A serene lake known for its changing colors." },
        { state: "Andaman & Nicobar", name: "Radhanagar Beach", image: "https://example.com/radhanagar.jpg", description: "A pristine beach known for its turquoise waters." },
        { state: "Chandigarh", name: "Rock Garden", image: "https://example.com/rock-garden.jpg", description: "A sculpture garden built from industrial and domestic waste." },
        { state: "Dadra & Nagar Haveli", name: "Silvassa", image: "https://example.com/silvassa.jpg", description: "Known for its natural beauty and tribal culture." },
        { state: "Lakshadweep", name: "Agatti Island", image: "https://example.com/agatti.jpg", description: "A beautiful island with crystal-clear waters and coral reefs." },
        { state: "Puducherry", name: "Auroville", image: "https://example.com/auroville.jpg", description: "An experimental township promoting unity and peace." },
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



