import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const teamMembers = [
  {
    name: 'Kartikay',
    role: 'Co-Founder & CEO',
    image: 'https://scontent.fknu2-1.fna.fbcdn.net/v/t1.6435-9/202014219_3979762808808844_7474593633080487358_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=r482NLdGBFIQ7kNvwGG7B7N&_nc_oc=Adn2hKiaAFR48sbhHytsnbnzK_BBNCk23S9bcOe7RX_qiTXVWcGcLfI-1JW1pLWuTVc&_nc_zt=23&_nc_ht=scontent.fknu2-1.fna&_nc_gid=bGCHoQiZLkEapM5ps5jbaw&oh=00_AfSz_bEBJSddh7aIc23xyrJVJcAyTQu4OOt9dE1ZhBSlcA&oe=689958D3',
    bio: 'Passionate about travel and creating seamless experiences for adventurers worldwide.',
  },
  {
    name: 'Elisabeth Hendrickson',
    role: 'Co-Founder & COO',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStO_trHeatr8IQre9kAfZpqZT_wGflXAsYeCx7KWNTBtFNEB7JU0dZixImz4cF-pa9BH4&usqp=CAU',
    bio: 'Ensuring top-notch services and customer satisfaction in every journey.',
  },
];

export default function AboutUs() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-screen flex items-center justify-center" style={{ backgroundImage: 'url(https://source.unsplash.com/1600x900/?travel)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-6">
          <h1 className="text-5xl md:text-7xl text-white font-bold">About Us</h1>
          <p className="text-lg text-gray-200 mt-4 max-w-2xl">
            Discover how we make your travel dreams a reality with seamless experiences and expert guidance.
          </p>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-4xl font-bold mb-4 text-blue-600">Who We Are</h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg">
          We are a passionate team of travel enthusiasts dedicated to making your trips unforgettable. Our mission is to provide seamless travel experiences with handpicked destinations, exclusive deals, and personalized services.
        </p>
      </section>
      
      {/* Team Section */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">Meet Our Founders</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index} 
              className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-8 shadow-xl flex flex-col items-center text-center"
              whileHover={{ scale: 1.05 }}
            >
              <img src={member.image} alt={member.name} className="w-40 h-40 rounded-full mb-4 border-4 border-gray-300" />
              <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
              <p className="text-lg text-gray-600 mb-2">{member.role}</p>
              <p className="text-gray-700 text-md">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Office Location (Google Maps) */}
      <section className="py-16 px-6 md:px-20 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-6">Our Office Location</h2>
        <div className="flex justify-center">
          <iframe
            title="Office Location"
            className="w-full md:w-3/4 h-96 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7001.212034923598!2d77.3902726027038!3d28.535516054348803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceffdd17397a5%3A0x7b6f13c43d68cb5!2sSector%2018%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1645694112345!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-6 md:px-20 bg-blue-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Explore?</h2>
        <p className="max-w-3xl mx-auto text-lg">Start planning your next adventure with us and make memories that last a lifetime.</p>
        <button 
          className="mt-6 bg-white text-blue-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-200 transition-all"
          onClick={() => navigate('/destinations')}
        >
          Explore Destinations
        </button>
      </section>
    </div>
  );
}
