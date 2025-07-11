import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg mt-10">
      <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">Terms and Conditions</h1>
      <ul className="list-disc pl-6 space-y-4 text-gray-700 text-lg">
        <li>All bookings are subject to availability at the time of confirmation.</li>
        <li>Prices are subject to change without prior notice due to unforeseen circumstances.</li>
        <li>Travelers are responsible for ensuring that all personal details provided are accurate.</li>
        <li>Cancellation charges will apply as per the cancellation policy.</li>
        <li>Travel insurance is not included in the package and is highly recommended.</li>
        <li>Itineraries are subject to change due to weather, road conditions, or other factors beyond our control.</li>
        <li>Any additional expenses incurred due to delays, natural calamities, or political disturbances will be borne by the traveler.</li>
        <li>Travelers must adhere to local laws and respect the culture and environment of the destination.</li>
        <li>We reserve the right to refuse service to any traveler who violates the terms and conditions.</li>
        <li>Refunds, if applicable, will be processed within 7 business days.</li>
      </ul>
    </div>
  );
};

export default TermsAndConditions;
