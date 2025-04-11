// src/ReviewPage.js

import React, { useState } from 'react';

// List of fun emojis to display near the name
const emojis = ['✈️', '🌍', '🌟', '💼', '🧳', '🌴', '🏖️', '🗺️', '⛷️', '🏄‍♀️'];

const ReviewPage = () => {
  // Initial sample reviews (you could eventually fetch these from a backend or Firebase)
  const initialReviews = [
    { name: "John Doe", review: "Had an amazing trip! Everything was perfectly organized." },
    { name: "Jane Smith", review: "Wonderful experience. Highly recommend this travel agency." },
    { name: "Michael Johnson", review: "Great service, very professional and friendly staff." },
    { name: "Sarah Lee", review: "The best vacation I have had in years. Excellent destinations." }
  ];

  // State to handle reviews
  const [reviews, setReviews] = useState(initialReviews);
  const [newReview, setNewReview] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new review object
    const newReviewObject = { name, review: newReview };
    
    // Replace the last review with the new one
    const updatedReviews = [...reviews.slice(0, reviews.length - 1), newReviewObject];
    
    // Add the new review to the updated list and ensure only 5 most recent reviews are kept
    setReviews(updatedReviews.slice(0, 5));

    // Clear the form fields
    setName('');
    setNewReview('');
  };

  return (
    <div className="review-page p-6 bg-gradient-to-r from-blue-100 via-green-100 to-yellow-100 min-h-screen">
      <div className="max-w-4xl mx-auto relative">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8 animate__animated animate__fadeIn">Customer Reviews</h1>

        {/* Displaying Reviews with special effects if reviews > 5 */}
        <div className={`reviews space-y-6 ${reviews.length > 5 ? 'animate__animated animate__fadeInUp' : ''}`}>
          <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4 animate__animated animate__fadeIn">What Our Customers Are Saying</h2>
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`review p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl ${
                reviews.length > 5 ? 'bg-gradient-to-r from-blue-300 via-green-300 to-yellow-300' : 'bg-white'
              }`}
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{emojis[index % emojis.length]}</span>
                <h3 className="text-xl font-semibold text-blue-600">{review.name}</h3>
              </div>
              <p className="text-gray-600 text-lg italic">{review.review}</p>
            </div>
          ))}
        </div>

        {/* New Review Form */}
        <div className="review-form mt-8 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">Write Your Review</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium">Your Name</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>
            <div>
              <label htmlFor="review" className="block text-gray-700 font-medium">Your Review</label>
              <textarea
                id="review"
                value={newReview}
                onChange={(e) => setNewReview(e.target.value)}
                placeholder="Write your review"
                required
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none transition transform hover:scale-105"
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
