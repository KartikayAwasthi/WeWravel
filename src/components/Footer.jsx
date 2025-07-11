import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link

const Footer = () => {
  const [activeInfo, setActiveInfo] = useState(null);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });

  // For hover effect (desktop) and click effect (mobile)
  const handleMouseEnter = (infoType, event) => {
    if (window.innerWidth > 768) {
      const rect = event.target.getBoundingClientRect();
      setPopupPosition({ x: rect.left + rect.width / 2, y: rect.top - 10 });
      setActiveInfo(infoType);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 768) {
      setActiveInfo(null);
    }
  };

  const handleClick = (infoType, event) => {
    if (window.innerWidth <= 768) {
      if (activeInfo === infoType) {
        setActiveInfo(null);
      } else {
        handleMouseEnter(infoType, event);
      }
    }
  };

  return (
    <footer className="bg-gradient-to-r from-blue-900 via-purple-800 to-pink-700 text-white text-center p-8 mt-12 shadow-lg rounded-t-2xl relative">
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-6">
        <p className="text-lg font-semibold tracking-wide">
          &copy; {new Date().getFullYear()} Travel Agency. All rights reserved.
        </p>

        {/* Quick Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm text-gray-300 relative">
          <Link
            to="/terms-and-conditions"
            className="hover:text-white transition duration-300"
          >
            📜 Terms & Conditions
          </Link>
          <Link
            to="/faq" // Updated to link to the FAQ page
            className="hover:text-white transition duration-300"
          >
            ❓ FAQs
          </Link>
          <button
            onMouseEnter={(e) => handleMouseEnter('cancellation', e)}
            onMouseLeave={handleMouseLeave}
            onClick={(e) => handleClick('cancellation', e)}
            className="hover:text-white transition duration-300 relative"
          >
            🚫 Cancellation Policy
          </button>
          <p className="text-gray-400">⏰ Operation Hours: 9 AM - 6 PM (Mon-Fri)</p>
          <button
            onMouseEnter={(e) => handleMouseEnter('payment', e)}
            onMouseLeave={handleMouseLeave}
            onClick={(e) => handleClick('payment', e)}
            className="hover:text-white transition duration-300 relative"
          >
            💳 Payment Options
          </button>
        </div>

        {/* Enhanced Animated Info Box */}
        {activeInfo && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bg-white text-gray-800 rounded-xl shadow-2xl w-96 text-sm p-4 border-t-4 border-blue-500"
            style={{
              top: `${popupPosition.y}px`,
              left: `${popupPosition.x}px`,
              transform: 'translateX(-50%)',
            }}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="flex flex-col items-center"
            >
              {activeInfo === 'terms' && (
                <>
                  <h3 className="text-lg font-bold text-blue-600">📜 Terms & Conditions</h3>
                  <p className="text-gray-700 mt-2 text-center">All bookings are subject to availability. Cancellations may be charged based on timing. Refunds will be processed within 7 business days.</p>
                </>
              )}
              {activeInfo === 'cancellation' && (
                <>
                  <h3 className="text-lg font-bold text-blue-600">🚫 Cancellation Policy</h3>
                  <p className="text-gray-700 mt-2 text-center">Cancellations must be made 48 hours before departure for a full refund. Late cancellations may be subject to a fee.</p>
                </>
              )}
              {activeInfo === 'payment' && (
                <>
                  <h3 className="text-lg font-bold text-blue-600">💳 Payment Options</h3>
                  <p className="text-gray-700 mt-2 text-center">We accept UPI, Credit/Debit Cards, and Bank Transfers. UPI: travelagency@upi | Bank: 1234567890 (XYZ Bank).</p>
                </>
              )}
            </motion.div>
          </motion.div>
        )}

        <div className="text-sm text-gray-300 mt-4">
          <p>Contact us: wewravel.help@gmail.com | Phone: +91 7355570155</p>
          <p>WeWravel Office,Noida Sector-18,infront of Haldiram  </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
