import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className="fixed top-0 w-full bg-gradient-to-r from-indigo-900 via-purple-900 to-black text-white p-4 shadow-lg z-50"
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex items-center"
        >
          <img src="/logo.png" alt="Logo" className="h-12 mr-3 rounded-full shadow-md" />
          <h1 className="text-2xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-500">
            CommunionHub
          </h1>
        </motion.div>

        {/* Navigation */}
        <nav className="space-x-8">
          {["Home", "Events"].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.1, color: "#60A5FA" }}
              className="inline-block"
            >
              <Link
                to={item === "Home" ? "/" : item === "Events" ? "/events" : "#"}
                className="text-lg font-medium transition-all duration-300"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}

export default Header;