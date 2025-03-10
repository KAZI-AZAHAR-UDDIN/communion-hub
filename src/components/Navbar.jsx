import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Navbar() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 text-white p-5 shadow-2xl z-50"
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex items-center space-x-3"
        >
          <img
            src="/Logocommunion.png"
            alt="CommunionHub Logo"
            className="h-12 w-12 rounded-full border-2 border-cyan-400 shadow-lg"
          />
          <h1 className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-500 tracking-wider">
            CommunionHub
          </h1>
        </motion.div>

        {/* Nav Links */}
        <div className="flex space-x-10">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              whileHover={{
                scale: 1.15,
                color: "#A78BFA",
                transition: { duration: 0.3 },
              }}
              className="relative"
            >
              <Link to={item.path} className="text-lg font-medium">
                {item.name}
              </Link>
              <motion.div
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Glowing Bottom Border */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 opacity-50"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      />
    </motion.nav>
  );
}

export default Navbar;