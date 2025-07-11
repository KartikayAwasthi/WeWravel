import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import qrCodeImage from "./image.jpeg"; // Import the QR code image

const ConfirmationPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [showTerms, setShowTerms] = useState(false);
  const [showCancellation, setShowCancellation] = useState(false);

  if (!state || !state.bookingData) {
    return <p className="text-center text-red-500 text-xl mt-10">No booking data found!</p>;
  }

  const { selectedDate, endDate, roomType, travellers, tripCode, totalCost } = state.bookingData;
  const bookingAmount = state.bookingAmount; // Retrieve booking amount from state

  const handleBack = () => {
    const confirmationMessage = `
      Booking Confirmation Details:
      - Trip Code: ${tripCode}
      - Travel Date: ${selectedDate ? new Date(selectedDate).toLocaleDateString() : "Not Selected"}
      - Room Type: ${roomType || "Not Selected"}
      - Traveller Details:
        ${travellers.map((traveller, index) => `
          ${index + 1}. Name: ${traveller.name}, Age: ${traveller.age}, Gender: ${traveller.gender}, Phone: ${traveller.phone}
        `).join("")}

    `;

    const phoneNumber = travellers[0]?.phone || "0000000000"; // Use the first traveler's phone number or a default
    const mob= '+918181862121'
    const whatsappURL = `https://wa.me/${mob}?text=${encodeURIComponent(confirmationMessage)}`; // Revert back to using the traveler's phone number
    
    window.open(whatsappURL, "_blank"); // Redirect to WhatsApp in a new tab
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      {/* Moving Payment Screenshot Reminder */}
      <div className="overflow-hidden w-full bg-gray-900 text-white py-2 mb-4">
        <div className="moving-text text-lg font-semibold">
          📸 Please upload the screenshot of the payment done by you 📸
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-6 text-green-600 text-center">Booking Confirmation</h2>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Travel Details */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-4 text-blue-500">Travel Details</h3>
          <p className="text-lg mb-4"><strong>Trip Code:</strong> {tripCode}</p>
          <p className="text-lg mb-4"><strong>Travel Date:</strong> {selectedDate ? new Date(selectedDate).toLocaleDateString() : "Not Selected"}</p>
          <p className="text-lg mb-4"><strong>Trip End Date:</strong> {endDate ? new Date(endDate).toLocaleDateString() : "Not Calculated"}</p>
          <p className="text-lg mb-4"><strong>Room Type:</strong> {roomType || "Not Selected"}</p>
          <p className="text-lg mb-4"><strong>Total Cost:</strong> ₹{totalCost}</p>
          <p className="text-lg mb-4"><strong>Booking Amount (30%):</strong> ₹{bookingAmount}</p>

          <h4 className="text-lg font-semibold mb-4 text-blue-500">Traveller Details</h4>
          {travellers.map((traveller, index) => (
            <div key={index} className="p-3 border mb-2 rounded-md shadow">
              <p><strong>Name:</strong> {traveller.name}</p>
              <p><strong>Age:</strong> {traveller.age}</p>
              <p><strong>Gender:</strong> {traveller.gender}</p>
              <p><strong>Phone:</strong> {traveller.phone}</p>
            </div>
          ))}
        </div>

        {/* Payment Details */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-4 text-purple-500">Payment Details</h3>
          <p className="text-lg mb-4"><strong>UPI ID:</strong>shivambatra24@okaxis</p>
          <p className="text-lg mb-4"><strong>ACCOUNT HOLDER :</strong>SHIVAM  BATRA
          </p>
         
          <p className="text-lg mb-4"><strong>Bank Account :</strong> 922010036860706 </p>
          <p className="text-lg mb-4"><strong>IFSC :</strong> UTIB0002520</p>
          <div className="flex justify-center mt-4">
            <img src={qrCodeImage} alt="QR Code" className="w-90 h-120" />
          </div>
        </div>
      </div>

      {/* Terms and Conditions */}
      <div className="mt-8">
        <button
          onClick={() => setShowTerms(!showTerms)}
          className="w-full py-2 text-left font-semibold text-blue-600 border-b"
        >
          Terms and Conditions {showTerms ? "▲" : "▼"}
        </button>
        {showTerms && (
          <div className="p-4 bg-gray-100 rounded-md">
            <p>- All bookings are subject to availability.</p>
            <p>- Prices are subject to change without prior notice.</p>
            <p>- Ensure all details are accurate before confirming.</p>
          </div>
        )}
      </div>

      {/* Cancellation Policy */}
      <div className="mt-4">
        <button
          onClick={() => setShowCancellation(!showCancellation)}
          className="w-full py-2 text-left font-semibold text-blue-600 border-b"
        >
          Cancellation Policy {showCancellation ? "▲" : "▼"}
        </button>
        {showCancellation && (
          <div className="p-4 bg-gray-100 rounded-md">
            <p>- Cancellations made 7 days before the trip will incur a 10% fee.</p>
            <p>- Cancellations made within 7 days of the trip will incur a 50% fee.</p>
            <p>- No refunds for cancellations made within 24 hours of the trip.</p>
          </div>
        )}
      </div>

      <button
        onClick={handleBack}
        className="w-full py-3 mt-6 rounded-lg font-semibold shadow-lg bg-red-600 text-white hover:bg-blue-700"
      >
        Upload ScreenShot
      </button>
    </div>
  );
};

export default ConfirmationPage;
