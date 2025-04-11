import { useState } from "react";
import { motion } from "framer-motion";

const galleryItems = [
  {
    id: 1,
    type: "image",
    url: "https://lh3.googleusercontent.com/d/1LLHzF9apTWzcKKQKxZm8_KBRTxqmojkR=1000",
    caption: "Beautiful Beach",
  },
  {
    id: 2,
    type: "video",
    url: "https://drive.google.com/file/d/12PjYs1Uo0pOzqLjYy2svSOaaXbylQvYM/preview",
    caption: "Trekking Adventure",
  },
  {
    id: 3,
    type: "image",
    url: "https://lh3.googleusercontent.com/d/1-b8tnKXw2c8h4HkDn_jiQuFlTmlY2TnY=w1000",
    caption: "Sunset View",
  },
  {
    id: 4,
    type: "image",
    url: "https://lh3.googleusercontent.com/d/1blATyhbY-abdrLEuPHeDX-omxkVX8eVl=w1000",
    caption: "Mountain Peak",
  },
  {
    id: 5,
    type: "image",
    url: "https://lh3.googleusercontent.com/d/1UT9XyEPFxFGFIPV_hz_8Zml-o7JYO_Pt=w1000",
    caption: "Scenic Landscape",
  },
  {
    id: 6,
    type: "image",
    url: "https://lh3.googleusercontent.com/d/1VsHR_hq7bbPlwwz0RWgDb2uEDC6CoHu_=w1000",
    caption: "Mountain Trail",
  },
  {
    id: 7,
    type: "image",
    url: "https://lh3.googleusercontent.com/d/1lgM-oHFV203OEk4EUZEbzA4Ez1xtVrSi=w1000",
    caption: "Lake View",
  },
  {
    id: 8,
    type: "video",
    url: "https://drive.google.com/file/d/1YRaPVD42Ht-ROBUxTvJm1O4ddmKCSyGi/preview",
    caption: "Camping Under the Stars",
  },
  {
    id: 9,
    type: "video",
    url: "https://drive.google.com/file/d/10G38LvK-99e7qTNHKKDVGy6W7XNS1yH-/preview",
    caption: "Waterfall Exploration",
  },
];

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 via-purple-300 to-pink-300 p-6 flex flex-col items-center">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-8 shadow-lg p-4 rounded-lg bg-white">
        🌍 Travel Gallery ✈️
      </h2>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl w-full">
        {galleryItems.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer rounded-2xl overflow-hidden shadow-xl bg-white transform transition duration-500 hover:shadow-2xl hover:scale-105"
            onClick={() => setSelectedItem(item)}
          >
            {item.type === "image" ? (
              <img
                src={item.url}
                alt={item.caption}
                className="w-full h-60 object-cover rounded-t-2xl transition duration-300 hover:opacity-90"
              />
            ) : (
              <iframe
                src={item.url}
                className="w-full h-60 rounded-t-2xl"
                allowFullScreen
              ></iframe>
            )}
            <p className="text-center text-gray-800 py-3 font-semibold bg-gray-100">
              {item.caption}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50 p-4"
          onClick={() => setSelectedItem(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl"
          >
            {selectedItem.type === "image" ? (
              <img
                src={selectedItem.url}
                alt={selectedItem.caption}
                className="w-full max-h-[80vh] object-cover rounded-t-2xl"
              />
            ) : (
              <iframe
                src={selectedItem.url}
                className="w-full max-h-[80vh] rounded-t-2xl"
                allowFullScreen
              ></iframe>
            )}
            <p className="text-center text-gray-900 p-4 font-bold text-lg bg-gray-200 rounded-b-2xl">
              {selectedItem.caption}
            </p>
          </motion.div>
        </div>
      )}
    </div>
  );
}
