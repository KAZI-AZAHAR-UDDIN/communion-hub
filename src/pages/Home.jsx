import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
    
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 5, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/dark-mosaic.png')] opacity-20"></div>
      </motion.div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto"
      >
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-500 drop-shadow-lg"
        >
          Connecting People Across Faiths & Interests
        </motion.h1>

      
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-2xl mb-8 font-light tracking-wide max-w-3xl mx-auto"
        >
          CommunionHub is a revolutionary platform that unites people of all faiths through vibrant events, community support, and shared experiences. Join us to explore, connect, and make a difference.
        </motion.p>

        {/* Call-to-Action Button */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.3)" }}
          className="inline-block"
        >
          <Link
            to="/events"
            className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-semibold text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Explore Events
          </Link>
        </motion.div>
      </motion.div>

      {/* Floating Images with Advanced Design */}
      <motion.img
        src="/celebrate1.jpg"
        alt="Celebration 1"
        className="absolute bottom-10 left-10 w-48 h-48 object-cover rounded-xl shadow-2xl glass-image border border-gray-200 border-opacity-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: [0, -30, 0] }}
        whileHover={{ scale: 1.1, rotate: 5, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)" }}
        transition={{
          opacity: { duration: 0.5, delay: 0.2 },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          scale: { duration: 0.3 },
          rotate: { duration: 0.3 },
        }}
      />
      <motion.img
        src="/celebrate2.jpg"
        alt="Celebration 2"
        className="absolute top-20 right-20 w-48 h-48 object-cover rounded-xl shadow-2xl glass-image border border-gray-200 border-opacity-20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: [0, 30, 0] }}
        whileHover={{ scale: 1.1, rotate: -5, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)" }}
        transition={{
          opacity: { duration: 0.5, delay: 0.4 },
          y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          scale: { duration: 0.3 },
          rotate: { duration: 0.3 },
        }}
      />
    </div>
  );
}

export default Home;