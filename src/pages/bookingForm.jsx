import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt, FaPlus, FaMinus } from "react-icons/fa";
import { isFriday } from "date-fns";

const tripCodes = {
  "manali-kasol-sissu": "TRIP001",
  "kasol-kheerganga": "TRIP002",
  "jibhi-tirthan-valley": "TRIP003",
  "chopta-tungnath-chandrashila": "TRIP004",
  "macleodganj-triund": "TRIP005",
  "spiti-valley": "TRIP006",
  "udaipur-mount-abu": "TRIP007",
  "jaisalmer": "TRIP008",
  "kashmir": "TRIP009"
};

const BookingForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Initialize state from location or defaults
  const tripCode = location.state?.tripCode || "UNKNOWN";
  const defaultPackageCost = [
    { type: "Quad Sharing", cost: "₹7,500/-", available: 1 },
    { type: "Triple Sharing", cost: "₹8,000/-", available: 0 },
    { type: "Twin Sharing", cost: "₹8,500/-", available: 0 }
  ];
  const packageCost = location.state?.packageCost || defaultPackageCost;
  const tripDuration = location.state?.duration || "0 Days";

  // State management
  const [selectedDate, setSelectedDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [roomType, setRoomType] = useState("");
  const [travellers, setTravellers] = useState([]);
  const [errors, setErrors] = useState({});
  const [roomSelections, setRoomSelections] = useState(
    packageCost.reduce((acc, option) => ({ ...acc, [option.type]: 0 }), {})
  );

  // Calculate end date when selectedDate or tripDuration changes
  useEffect(() => {
    if (selectedDate && tripDuration) {
      const durationMatch = tripDuration.match(/\d+/);
      if (durationMatch) {
        const days = parseInt(durationMatch[0], 10);
        if (!isNaN(days)) {
          const calculatedEndDate = new Date(selectedDate);
          calculatedEndDate.setDate(calculatedEndDate.getDate() + days);
          setEndDate(calculatedEndDate);
          return;
        }
      }
    }
    setEndDate(null);
  }, [selectedDate, tripDuration]);

  const handleRoomSelect = (type) => {
    setRoomType(type);
    setRoomSelections(prev => ({ ...prev, [type]: 1 })); // Set room quantity to 1 by default

    // Reset to only one traveler when a room is selected
    setTravellers([{
      name: "",
      age: "",
      gender: "",
      phone: "",
      roomType: type
    }]);
  };

  const handleRoomQuantityChange = (type, increment) => {
    setRoomSelections(prev => {
      const newQuantity = Math.max(0, (prev[type] || 0) + increment);

      // Update room type display
      const updatedRoomTypes = Object.entries({ ...prev, [type]: newQuantity })
        .filter(([_, qty]) => qty > 0)
        .map(([roomType, qty]) => `${qty} ${roomType}`);

      setRoomType(updatedRoomTypes.join(", "));

      // Ensure only one traveler remains regardless of room quantity
      setTravellers([{
        name: "",
        age: "",
        gender: "",
        phone: "",
        roomType: type
      }]);

      return { ...prev, [type]: newQuantity };
    });
  };

  const addTraveller = (type) => {
    setTravellers(prev => [
      ...prev,
      {
        name: "",
        age: "",
        gender: "",
        phone: "",
        roomType: type
      }
    ]);
  };

  const removeTraveller = (index) => {
    setTravellers(prev => {
      if (prev.length > 1) {
        const updatedTravellers = [...prev];
        updatedTravellers.splice(index, 1);
        return updatedTravellers;
      }
      return prev; // Ensure at least one traveler remains
    });
  };

  // Cost calculation
  const calculateTotalCost = () => {
    return travellers.reduce((total, traveller) => {
      const roomCost = packageCost.find(option => option.type === traveller.roomType)?.cost.replace(/[^\d]/g, "") || 0;
      return total + parseInt(roomCost, 10);
    }, 0) * travellers.length; // Multiply by the number of travellers
  };

  // Traveller input handlers
  const handleInputChange = (index, field, value) => {
    const updatedTravellers = [...travellers];
    updatedTravellers[index][field] = value;
    setTravellers(updatedTravellers);
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    if (!selectedDate) newErrors.selectedDate = "Please choose a date.";
    if (!roomType) newErrors.roomType = "Please select a room type.";

    travellers.forEach((traveller, index) => {
      if (!traveller.name.trim()) newErrors[`name${index}`] = "Please enter name.";
      if (!traveller.gender.trim()) newErrors[`gender${index}`] = "Please select gender.";
      
      // Validate phone for the first traveller of each room
      if (index % (roomType.includes("Quad") ? 4 : roomType.includes("Triple") ? 3 : 2) === 0) {
        if (!traveller.phone.trim()) {
          newErrors[`phone${index}`] = "Please enter mobile number.";
        } else if (!/^\d{10}$/.test(traveller.phone)) {
          newErrors[`phone${index}`] = "Please check mobile number.";
        }
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form submission
  const handleConfirm = () => {
    // Autofill primary phone number to all travellers
    const primaryPhone = travellers[0]?.phone?.trim() || "";
    const updatedTravellers = travellers.map(traveller => ({
      ...traveller,
      phone: traveller.phone?.trim() || primaryPhone,
    }));

    setTravellers(updatedTravellers);

    if (validateForm()) {
      const bookingData = { 
        selectedDate, 
        endDate,
        roomType, 
        travellers: updatedTravellers,
        roomSelections,
        tripCode,
        totalCost: calculateTotalCost(),
        packageCost: packageCost.find(p => p.type === roomType.split(",")[0].trim())?.cost || "",
        tripDuration
      };

      navigate("/booking-summary", { state: { bookingData } });
    }
  };

  // Helper functions
  const isWeekendDate = (date) => isFriday(date);
  const getTravellersPerRoom = (type) => 
    type.includes("Quad") ? 1 : type.includes("Triple") ? 1 : 1;

  // Render traveller forms
  const renderTravellerForms = () => {
    let forms = [];
    travellers.forEach((traveller, index) => {
      forms.push(
        <div key={`${traveller.roomType}-${index}`} className="p-4 border mb-4 rounded-md shadow">
          <p className="font-semibold">
            {traveller.roomType} - Traveller {index + 1}
            {index === 0 && " (Primary Traveller)"}
          </p>
          <input
            type="text"
            placeholder="Name *"
            value={traveller.name || ""}
            onChange={(e) => handleInputChange(index, "name", e.target.value)}
            className="w-full p-2 border rounded-md mt-2"
          />
          {errors[`name${index}`] && <p className="text-red-500 text-sm mt-1">{errors[`name${index}`]}</p>}

          <input
            type="number"
            placeholder="Age"
            value={traveller.age || ""}
            onChange={(e) => handleInputChange(index, "age", e.target.value)}
            className="w-full p-2 border rounded-md mt-2"
          />

          <select
            value={traveller.gender || ""}
            onChange={(e) => handleInputChange(index, "gender", e.target.value)}
            className="w-full p-2 border rounded-md mt-2"
          >
            <option value="">Select Gender *</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errors[`gender${index}`] && <p className="text-red-500 text-sm mt-1">{errors[`gender${index}`]}</p>}

          {index === 0 && (
            <>
              <input
                type="text"
                placeholder="Phone Number *"
                value={traveller.phone || ""}
                onChange={(e) => handleInputChange(index, "phone", e.target.value)}
                className="w-full p-2 border rounded-md mt-2"
                maxLength="10"
              />
              {errors[`phone${index}`] && <p className="text-red-500 text-sm mt-1">{errors[`phone${index}`]}</p>}
            </>
          )}

          {/* Remove Traveller Button */}
          {index > 0 && (
            <button
              onClick={() => removeTraveller(index)}
              className="w-full py-2 mt-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600"
            >
              Remove Traveller
            </button>
          )}
        </div>
      );
    });

    // Add "Add More Traveller" button
    if (roomType) {
      forms.push(
        <button
          key={`${roomType}-add-more`}
          onClick={() => addTraveller(roomType)}
          className="w-full py-2 mt-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
        >
          Add More Traveller
        </button>
      );
    }

    return forms;
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg text-center">
      <h2 className="text-3xl font-bold mb-6 text-blue-600">Book Your Weekend Trip</h2>
      <p className="text-lg font-semibold mb-4">Trip Code: {tripCode}</p>

      {/* Date Selection */}
      <div className="mb-6 relative">
        <label className="block text-lg font-semibold mb-2">Select Travel Date</label>
        <div className="relative flex items-center justify-center">
          <DatePicker
            selected={selectedDate}
            onChange={setSelectedDate}
            className="w-full text-center p-3 border rounded-lg shadow-md focus:ring-2 focus:ring-blue-400"
            minDate={new Date()}
            filterDate={isWeekendDate}
            dateFormat="EEEE, MMM d, yyyy"
            placeholderText="📅 Select a weekend date"
          />
        </div>
        {errors.selectedDate && <p className="text-red-500 text-sm mt-1">{errors.selectedDate}</p>}
      </div>

      {/* End Date Display */}
      {endDate && (
        <div className="mb-6">
          <p className="text-lg font-semibold text-gray-700">
            Travel End Date:{" "}
            <span className="text-red-600 font-bold">
              {endDate.toLocaleDateString("en-US", { 
                weekday: "long", 
                year: "numeric", 
                month: "long", 
                day: "numeric" 
              })}
            </span>
          </p>
        </div>
      )}

      {/* Room Selection */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Select Your Room Sharing</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {packageCost.map((option, index) => (
            <div
              key={index}
              onClick={() => handleRoomSelect(option.type)}
              className={`p-4 border rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 cursor-pointer ${
                roomType.includes(option.type) ? 'bg-blue-50 border-blue-300' : 'bg-white'
              }`}
            >
              <h3 className="text-lg font-semibold text-gray-700">{option.type}</h3>
              <p className="text-gray-500 mb-4">{option.cost}</p>
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRoomQuantityChange(option.type, -1);
                  }}
                  className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
                  disabled={roomSelections[option.type] === 0}
                >
                  <FaMinus />
                </button>
                <span className="text-lg font-semibold">{roomSelections[option.type]}</span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRoomQuantityChange(option.type, 1);
                  }}
                  className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600"
                >
                  <FaPlus />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Traveller Forms */}
      {roomType && (
        <div>
          <h3 className="text-lg font-semibold mb-4 text-blue-500">Enter Traveller Details</h3>
          {renderTravellerForms()}
        </div>
      )}

      {/* Submit Button */}
      <button
        onClick={handleConfirm}
        className={`w-full py-3 mt-4 rounded-lg font-semibold shadow-lg transition ${
          !selectedDate || !roomType || travellers.length === 0
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
        disabled={!selectedDate || !roomType || travellers.length === 0}
      >
        Proceed to Summary
      </button>
    </div>
  );
};

export default BookingForm;