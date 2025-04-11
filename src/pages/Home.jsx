import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import WhatsAppButton from "../components/WhatsAppButton";


const Home = () => {
  const navigate = useNavigate(); // Hook to navigate to other pages
  const [text, setText] = useState(""); // To type out the "Explore the best travel destinations" text
  const [quote, setQuote] = useState(""); // State for random quote
  const fullText = "Explore the best travel destinations with us!"; // The text to be typed out
  const quotes = [
    "Travel is the only thing you buy that makes you richer.",
    "The world is a book, and those who do not travel read only one page.",
    "Life is short, and the world is wide.",
    "To travel is to live.",
    "Adventure is worthwhile.",
    "Travel far enough, you meet yourself.",
    "Jobs fill your pockets, but adventures fill your soul."
  ];

  useEffect(() => {
    // Initialize AOS (animations on scroll)
    AOS.init({ duration: 1000 });

    // Type out the text one character at a time
    let index = 0;
    const interval = setInterval(() => {
      setText((prev) => prev + fullText[index]);
      index++;
      if (index === fullText.length) clearInterval(interval); // Stop when full text is typed
    }, 80);

    // Set an initial random quote when page loads
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);

    return () => clearInterval(interval); // Cleanup when component unmounts
  }, []);

  const changeQuote = () => {
    // Change to a new random quote when button is clicked
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  };

  return (
    <div className="text-center bg-gray-100 w-full min-h-screen">
      {/* Full-Screen Video Section */}
      <div className="relative w-full h-screen flex items-center justify-center" data-aos="zoom-in">
        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-10 px-6 md:px-0">
          <h2 className="text-5xl font-bold text-yellow-300 drop-shadow-lg leading-tight md:text-6xl">
            Welcome to WeWravel
          </h2>
          <p className="text-lg mt-4 max-w-sm md:max-w-xl" data-aos="fade-up">{text}</p>
          <button
            className="mt-6 px-5 py-3 bg-green-500 text-white text-base font-semibold rounded-full shadow-lg hover:bg-green-800 transition duration-300"
            onClick={() => navigate("/destinations")} // Redirect to destinations page
          >
            Start Your Journey
          </button>
        </div>

        {/* Video Background */}
        <div className="relative w-full h-screen flex items-center justify-center" data-aos="zoom-in">
          <video
            className="absolute inset-0 w-full h-full object-cover md:object-center"
            autoPlay
            muted
            loop
            playsInline
            poster="https://images.wanderon.in/new-homepage-data/Hero%20Section/hero-thumbnail-new"
          >
            <source src="https://d1c8wbldjj3tey.cloudfront.net/header-video+(1080p).mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-gray-900 opacity-70"></div>
        </div>
      </div>

      {/* Random Quote Section */}
      <div className="mt-0 py-6 bg-gray-200 text-gray-800 sm:py-8 sm:mt-4" data-aos="fade-up">
        <p className="text-xl italic font-semibold">{quote}</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-700 transition duration-100"
          onClick={changeQuote}
        >
          Show Another Quote
        </button>
      </div>

      {/* User Facts and Data Section */}
      <div className="py-16 bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-500 text-white" data-aos="fade-up">
        <h3 className="text-5xl font-extrabold text-center tracking-wide text-white">🌍Trusted by Over 1000 Travelers🌍</h3>
        <p className="mt-4 text-xl text-center max-w-2xl mx-auto opacity-90 italic">Join the countless happy adventurers who trust us for unforgettable experiences and seamless travel planning. ✈️</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 max-w-6xl mx-auto">
          {/* Stat Card 1 */}
          <div className="p-8 bg-white rounded-xl shadow-xl transform hover:scale-105 transition duration-300 ease-in-out text-center">
            <h4 className="text-5xl font-extrabold text-indigo-500">🌟 500+</h4>
            <p className="text-xl mt-3 text-gray-700 font-semibold">Happy Customers 🌍</p>
            <p className="text-sm text-gray-500 mt-2">From solo travelers to families, we’ve made dreams come true for everyone.</p>
          </div>
          {/* Stat Card 2 */}
          <div className="p-8 bg-white rounded-xl shadow-xl transform hover:scale-105 transition duration-300 ease-in-out text-center">
            <h4 className="text-5xl font-extrabold text-indigo-500">✈️ 50+</h4>
            <p className="text-xl mt-3 text-gray-700 font-semibold">Successful Trips 🌏</p>
            <p className="text-sm text-gray-500 mt-2">We've organized thousands of trips to destinations worldwide, each one with a happy ending.</p>
          </div>
          {/* Stat Card 3 */}
          <div className="p-8 bg-white rounded-xl shadow-xl transform hover:scale-105 transition duration-300 ease-in-out text-center">
            <h4 className="text-5xl font-extrabold text-indigo-500">💸 99% Best Price Guarantee</h4>
            <p className="text-xl mt-3 text-gray-700 font-semibold">Get the Best Deals</p>
            <p className="text-sm text-gray-500 mt-2">We promise to give you the best prices, or we’ll beat it. Your satisfaction is our priority!</p>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="mt-16 text-center text-white max-w-3xl mx-auto">
          <h4 className="text-3xl font-bold">What Our Travelers Say 🗣️</h4>
          <p className="mt-4 text-xl italic">“Our trip was unforgettable! Every detail was taken care of. Highly recommend for anyone looking for stress-free travel planning!”</p>
          <p className="mt-2 text-lg text-gray-300">- Sarah L., Traveler from California</p>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-pink-500 to-yellow-500 py-12 text-center rounded-xl shadow-xl">
          <h3 className="text-4xl font-extrabold text-white">Ready for Your Next Adventure? 🏖️</h3>
          <p className="mt-4 text-lg text-white">Book now and start planning your dream vacation with the best in the industry. Don’t wait – adventure awaits!</p>
          <button
            className="mt-6 px-6 py-3 bg-indigo-600 text-white text-lg rounded-full shadow-xl transform hover:scale-110 transition duration-300"
            onClick={() => navigate("/destinations")} // Redirect to destinations page
          >
            Book Your Trip
          </button>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-12 py-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white" data-aos="fade-up">
        <h3 className="text-4xl font-bold">Why Choose Us?</h3>
        <p className="mt-4 text-lg max-w-2xl mx-auto">We provide the best travel experiences with top-notch services and unforgettable memories.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 max-w-5xl mx-auto">
          {["Affordable Prices", "Expert Guides", "24/7 Support"].map((title, index) => (
            <div
              key={index}
              className="p-6 bg-white text-black rounded-lg shadow-lg flex flex-col items-center text-center"
              data-aos="zoom-in"
            >
              <h4 className="text-xl font-bold">{title}</h4>
              <p className="text-sm mt-2">{title === "Affordable Prices" ? "Travel without breaking the bank." : title === "Expert Guides" ? "Experience destinations like never before." : "We're here for you anytime, anywhere."}</p>
            </div>
          ))}
        </div>
      </div>

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default Home;
