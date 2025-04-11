import { useNavigate } from "react-router-dom";
import destinationsData from "./destinationsData";

const Destinations = () => {
    const navigate = useNavigate();

    return (
        <div className="text-center p-6 bg-gray-50 min-h-screen">
            <h2 className="text-3xl font-extrabold text-blue-600">Our Destinations</h2>
            <p className="text-lg mt-2 text-gray-700">Discover amazing places around the world.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {destinationsData.map((destination, index) => {
                    
                    return (
                        <div key={index} className="relative border p-6 rounded-lg shadow-lg bg-white hover:bg-blue-100 transition duration-300 transform hover:scale-105">
                            
                            {/* Religious Label - Only for Specific Destinations */}
                            {["Do Dham Yatra - Kedarnth & Badrinatha", "Char Dham Yatra", "Kedarnath Yatra", "Badrinath Yatra"].includes(destination.name.trim()) && (
                                <div className="absolute top-2 left-2 bg-yellow-300 text-black text-sm font-bold px-3 py-1 rounded-md shadow-lg">
                                    Religious
                                </div>
                            )}

                            <img
                                src={destination.image}
                                alt={destination.name}
                                className="w-auto h-auto max-w-full aspect-video object-cover rounded-md mb-4"
                            />
                            <h3 className="text-xl font-semibold text-gray-800">{destination.name}</h3>
                            <p className="text-gray-600 mt-2">{destination.summary}</p>
                            <p className="text-gray-800 mt-4"><strong>Rating:</strong> {destination.rating} / 5</p>
                            <p className="text-gray-800"><strong>Cost:</strong> {destination.cost}</p>
                            <p className="text-gray-800"><strong>Duration:</strong> {destination.duration}</p>
                            <p className="text-gray-800 font-bold"><strong>Trip Code:</strong> {destination.tripCode}</p>
                            <button 
                                onClick={() => navigate(`/destination-details/${destination.urlSlug}`)}
                                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                            >
                                View Details
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Destinations;
