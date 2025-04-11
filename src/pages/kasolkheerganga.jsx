import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Add this import

const ManaliKasolSissu = () => {
  const [showPackageDetails, setShowPackageDetails] = useState(false);
  const [showTripHighlights, setShowTripHighlights] = useState(false);
  const [showItinerary, setShowItinerary] = useState(false);
  const [showInclusions, setShowInclusions] = useState(false);
  const [showExclusions, setShowExclusions] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [showPackageCost, setShowPackageCost] = useState(false);
  const navigate = useNavigate(); // Add useNavigate hook

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden">
        <img
          src="https://campgangavatika.com/blog/wp-content/uploads/2022/01/kheerganga-trek.jpg"
          alt="Kasol Kheerganga"
          className="w-full h-96 object-cover"
        />
        <div className="p-8 space-y-8">
          <h1 className="text-4xl font-extrabold text-gray-800 text-center">Kasol Kheerganga</h1>
          <p className="text-gray-600 text-lg text-center leading-relaxed">
          A trekker's paradise with lush greenery, hot springs, and tranquil vibes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-lg text-center">
            <div className="bg-blue-100 p-4 rounded-lg shadow-md">
              <p className="font-semibold">⏳ Duration</p>
              <p className="text-blue-700">3N-4D</p>
            </div>
            <div className="bg-green-100 p-4 rounded-lg shadow-md">
              <p className="font-semibold">💰 Starting Price</p>
              <p className="text-green-700">₹9,000/-</p>
            </div>
            <div className="bg-yellow-100 p-4 rounded-lg shadow-md">
              <p className="font-semibold">📍 Pickup & Drop</p>
              <p className="text-yellow-700">Delhi/Chandigarh</p>
            </div>
          </div>

          {/* Trip Highlights Section */}
          <div className="border rounded-lg shadow-lg p-6 bg-gray-100">
            <button
              onClick={() => setShowTripHighlights(!showTripHighlights)}
              className="w-full text-left text-xl font-semibold text-gray-800 flex justify-between items-center"
            >
              Trip Highlights
              <span className={`transform transition-transform ${showTripHighlights ? 'rotate-180' : 'rotate-0'}`}>▼</span>
            </button>
            {showTripHighlights && (
              <ul className="list-disc pl-8 space-y-3 text-gray-700 text-lg mt-4">
                <li>🌄 Scenic drive through the Himalayan valleys</li>
                <li>🏛 Visit to Hidimba Devi Temple & Mall Road in Manali</li>
                <li>🎸 Exploring the hippie culture of Kasol</li>
                <li>🏔 Mesmerizing views of Sissu and Keylong</li>
                <li>🔥 Bonfire & Camping under the stars</li>
              </ul>
            )}
          </div>

          
          

          {/* Itinerary Section */}
          <div className="border rounded-lg shadow-lg p-6 bg-gray-100">
            <button onClick={() => setShowItinerary(!showItinerary)} className="w-full text-left text-xl font-semibold text-gray-800 flex justify-between items-center">
              Itinerary
              <span className={`transform transition-transform ${showItinerary ? 'rotate-180' : 'rotate-0'}`}>▼</span>
            </button>
            {showItinerary && (
              <div className="text-gray-700 text-lg mt-4">
                <p><strong>📍 Day 1:</strong> Departure from Delhi</p>
                <p><strong>📍 Day 2:</strong> Arrive in Manali, sightseeing & leisure</p>
                <p><strong>📍 Day 3:</strong> Excursion to Sissu via Atal Tunnel</p>
                <p><strong>📍 Day 4:</strong> Travel to Kasol, local sightseeing</p>
                <p><strong>📍 Day 5:</strong> Return to Delhi</p>
              </div>
            )}
          </div>

          {/* Inclusions Section */}
          <div className="border rounded-lg shadow-lg p-6 bg-gray-100">
            <button onClick={() => setShowInclusions(!showInclusions)} className="w-full text-left text-xl font-semibold text-gray-800 flex justify-between items-center">
              Inclusions
              <span className={`transform transition-transform ${showInclusions ? 'rotate-180' : 'rotate-0'}`}>▼</span>
            </button>
            {showInclusions && (
              <ul className="list-disc pl-8 space-y-3 text-gray-700 text-lg mt-4">
                <li>Great vibes with new friendships</li>
                <li>Bonfire night and DJ Night</li>
                <li>Travel by luxury tempo traveler/Volvo bus</li>
                <li>Refreshments during the journey</li>
                <li>Meals: 3 Breakfasts 3 Dinners</li>
                <li>Accommodation (Quad Basis)</li>
                <li>Guides charges and all other permits</li>
              </ul>
            )}
          </div>

           {/* Exclusions Section */}
           <div className="border rounded-lg shadow-lg p-6 bg-gray-100">
            <button onClick={() => setShowExclusions(!showExclusions)} className="w-full text-left text-xl font-semibold text-gray-800 flex justify-between items-center">
              Exclusions
              <span className={`transform transition-transform ${showExclusions ? 'rotate-180' : 'rotate-0'}`}>▼</span>
            </button>
            {showExclusions && (
              <ul className="list-disc pl-8 space-y-3 text-gray-700 text-lg mt-4">
                <li>Travel Insurance</li>
                <li>Hard drinks and any other snacks</li>
                <li>Expenses of personal nature</li>
                <li>Anything not mentioned above</li>
                <li>Any traveling expense incurred due to extreme weather conditions, or natural hazards.</li>
              </ul>
            )}
          </div>

            {/* Notes Section */}
            <div className="border rounded-lg shadow-lg p-6 bg-gray-100">
            <button onClick={() => setShowNotes(!showNotes)} className="w-full text-left text-xl font-semibold text-gray-800 flex justify-between items-center">
              Notes
              <span className={`transform transition-transform ${showNotes ? 'rotate-180' : 'rotate-0'}`}>▼</span>
            </button>
            {showNotes && (
              <ul className="list-disc pl-8 space-y-3 text-gray-700 text-lg mt-4">
                <li>The age limit of our group departures is 16 to 34 years due to the power-packed itineraries that we provide to our travelers. We can customize trips for travelers beyond the mentioned age bracket.</li>
                <li>Early check-in at stay is subject to availability.</li>
                <li>Extra Mattresses will be provided for triple-sharing and quad-sharing.</li>
                <li>Travellers residing outside Delhi are suggested to book trains/flights reaching Delhi not later than 2 PM on the trip start date. Similarly, on the trip end date, book returning flights/trains leaving post 5 PM.</li>
                <li>Numerous factors such as weather, road conditions, participants' physical ability, etc. may cause itinerary changes. We reserve the right to change any schedule for safety, comfort and general well-being.</li>
              </ul>
            )}
          </div>

          {/* Package Cost Dropdown */}
          <div className="border rounded-lg shadow-lg p-6 bg-gray-100">
            <button
              onClick={() => setShowPackageCost(!showPackageCost)}
              className="w-full text-left text-xl font-semibold text-gray-800 flex justify-between items-center"
            >
              Package Cost
              <span className={`transform transition-transform ${showPackageCost ? 'rotate-180' : 'rotate-0'}`}>▼</span>
            </button>
            {showPackageCost && (
              <div className="overflow-x-auto mt-4">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-blue-600 text-white">
                      <th className="p-3 border border-gray-300">Room Sharing</th>
                      <th className="p-3 border border-gray-300">Cost (per person)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border border-gray-300 text-center">
                      <td className="p-3 border border-gray-300">Quad Sharing</td>
                      <td className="p-3 border border-gray-300">₹9,000/-</td>
                    </tr>
                    <tr className="border border-gray-300 text-center">
                      <td className="p-3 border border-gray-300">Triple Sharing</td>
                      <td className="p-3 border border-gray-300">₹10,000/-</td>
                    </tr>
                    <tr className="border border-gray-300 text-center">
                      <td className="p-3 border border-gray-300">Twin Sharing</td>
                      <td className="p-3 border border-gray-300">₹11,000/-</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              
            )}
          </div>
          {/* Book Now Button */}
          <div className="text-center mt-8">
            <button
              onClick={() => navigate("/booking")} // Update to navigate to BookingForm
              className="bg-green-500 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-green-600 transition"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManaliKasolSissu;
