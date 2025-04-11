import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BookingSummary = () => {
  const { state } = useLocation(); // Ensure state is retrieved correctly
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);

  if (!state || !state.bookingData) {
    return <p className="text-center text-red-500 text-xl mt-10">No booking data found!</p>; // Handle missing state
  }

  const { selectedDate, endDate, roomType, travellers, tripCode, totalCost } = state.bookingData;
  const bookingAmount = (totalCost * 0.3).toFixed(2); // Calculate 30% of total cost

  const handleConfirm = () => {
    navigate("/confirmation-page", { state: { bookingData: state.bookingData, bookingAmount } });
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg text-center">
      <h2 className="text-3xl font-bold mb-6 text-green-600">Booking Summary</h2>

      <p className="text-lg mb-4"><strong>Trip Code:</strong> {tripCode}</p>
      <p className="text-lg mb-4"><strong>Travel Date:</strong> {selectedDate ? new Date(selectedDate).toLocaleDateString() : "Not Selected"}</p>
      <p className="text-lg mb-4"><strong>Trip End Date:</strong> {endDate ? new Date(endDate).toLocaleDateString() : "Not Calculated"}</p>
      <p className="text-lg mb-4"><strong>Room Type:</strong> {roomType || "Not Selected"}</p>
      <p className="text-lg mb-4"><strong>Total Cost:</strong> ₹{totalCost}</p>
      <p className="text-lg mb-4"><strong>Booking Amount (30%):</strong> ₹{bookingAmount}</p>

      <h3 className="text-lg font-semibold mb-4 text-blue-500">Traveller Details</h3>
      {travellers.map((traveller, index) => (
        <div key={index} className="p-3 border mb-2 rounded-md shadow">
          <p><strong>Name:</strong> {traveller.name}</p>
          <p><strong>Age:</strong> {traveller.age}</p>
          <p><strong>Gender:</strong> {traveller.gender}</p>
          <p><strong>Phone:</strong> {traveller.phone}</p>
        </div>
      ))}

      <label className="flex items-center justify-center mt-4">
        <input type="checkbox" onChange={() => setIsChecked(!isChecked)} className="mr-2" />
        I confirm that all details are correct.
      </label>

      <button 
        disabled={!isChecked} 
        onClick={handleConfirm} 
        className={`w-full py-3 mt-4 rounded-lg font-semibold shadow-lg ${isChecked ? "bg-green-600 text-white hover:bg-green-700" : "bg-gray-400 text-gray-200 cursor-not-allowed"}`}>
        Confirm Booking
      </button>
    </div>
  );
};

export default BookingSummary;
