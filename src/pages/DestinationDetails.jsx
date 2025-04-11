import { useState } from 'react';
import { useParams, useNavigate } from "react-router-dom"; // Added useNavigate import
import destinationsData from "./destinationsData";

const DestinationDetails = () => {
    const { urlSlug } = useParams();
    const navigate = useNavigate(); // Initialize navigate
    const [openSection, setOpenSection] = useState(null);
    
    const destination = destinationsData.find(dest => dest.urlSlug === urlSlug);

    const handleBookNow = () => {
        navigate('/booking', { // Corrected the path to '/booking'
            state: { 
                tripName: destination.name,
                tripCode: destination.tripCode,
                packageCost: destination.packageCost,
                duration: destination.duration,
            } 
        });
    };

    if (!destination) {
        return (
            <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-red-500 mb-4">404 - Destination Not Found</h1>
                    <p className="text-lg text-gray-700">The destination you're looking for doesn't exist.</p>
                </div>
            </div>
        );
    }

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <div className="max-w-6xl mx-auto p-4 md:p-6 bg-gray-50 min-h-screen">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Header with image */}
                <div className="relative">
                    <img
                        src={destination.image}
                        alt={destination.name}
                        className="w-full h-64 md:h-80 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 md:p-6">
                        <h1 className="text-2xl md:text-3xl font-bold text-white">{destination.name}</h1>
                    </div>
                </div>

              {/* Meta information */}
<div className="p-4 md:p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 bg-blue-50 border-b">

    {/* Duration */}
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
        <div className="text-blue-600 font-bold text-sm md:text-base">Duration</div>
        <div className="mt-1 text-lg font-semibold">{destination.duration}</div>
    </div>
    {/* Rating */}
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
        <div className="text-blue-600 font-bold text-sm md:text-base">Rating</div>
        <div className="flex items-center justify-center mt-1 text-lg font-semibold">
            <span className="text-yellow-400 text-xl md:text-2xl">★</span>
            <span className="ml-1">{destination.rating}/5</span>
        </div>
    </div>

    

    {/* Pickup/Drop */}
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
        <div className="text-blue-600 font-bold text-sm md:text-base">Pickup/Drop</div>
        <div className="mt-1 text-lg font-semibold">{destination.pickupDrop.split('/')[0]}</div>
    </div>

    {/* Cost */}
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
        <div className="text-blue-600 font-bold text-sm md:text-base">Starting Price</div>
        <div className="mt-1 text-lg font-semibold text-green-600">{destination.cost}</div>
    </div>
</div>


                {/* Package Cost Section */}
<div className="p-4 md:p-6">
    <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-4">Package Cost</h2>
    <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
            <thead className="bg-gradient-to-r from-blue-600 to-blue-500 text-white">
                <tr>
                    <th className="py-3 px-4 text-left">Room Sharing</th>
                    <th className="py-3 px-4 text-left">Cost (per person)</th>
                </tr>
            </thead>
            <tbody>
                {destination.packageCost.map((item, index) => (
                    <tr key={index} className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-blue-100 transition-all`}>
                        <td className="py-3 px-4 border-b border-gray-200">{item.type}</td>
                        <td className="py-3 px-4 border-b border-gray-200 font-semibold text-black">{item.cost}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
</div>

{/* Accordion Sections with Animations */}
<div className="p-4 md:p-6 space-y-4">
    {[
        { title: "Trip Highlights", key: "highlights", data: destination.highlights },
        { title: "Inclusions", key: "inclusions", data: destination.inclusions },
        { title: "Exclusions", key: "exclusions", data: destination.exclusions }
    ].map((section) => (
        <div key={section.key} className="border border-gray-200 rounded-lg shadow-md overflow-hidden">
            <button
                onClick={() => toggleSection(section.key)}
                className="w-full flex justify-between items-center p-4 bg-gradient-to-r from-blue-50 to-blue-100 hover:bg-blue-200 transition-all duration-300"
            >
                <h2 className="text-lg md:text-xl font-bold text-blue-600">{section.title}</h2>
                <svg
                    className={`w-5 h-5 text-blue-600 transform transition-transform duration-300 ${openSection === section.key ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            {openSection === section.key && (
                <div className="p-4 bg-white motion-safe:animate-fadeIn">
                    <ul className="list-disc pl-6 space-y-2">
                        {section.data.map((item, index) => (
                            <li key={index} className="text-gray-700">{item}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    ))}
</div>

{/* Booking Button with Animation */}
<div className="p-4 md:p-6 text-center">
    <button
    onClick={handleBookNow} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
        Book Now
    </button>
</div>

            </div>
        </div>
    );
};

export default DestinationDetails;