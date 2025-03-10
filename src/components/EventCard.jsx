import { motion } from "framer-motion";

function EventCard({ title, date, location, description, category }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -10 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{
        scale: 1.05,
        rotateX: 5,
        rotateY: 5,
        boxShadow: "0 25px 50px rgba(0, 0, 0, 0.2)",
      }}
      className="relative glass-card p-6 rounded-2xl overflow-hidden cursor-pointer"
    >
      {/* Glass Background */}
      <div className="absolute inset-0 bg-gray-100 bg-opacity-10 backdrop-blur-md border border-gray-200 border-opacity-20 rounded-2xl z-0"></div>

      {/* Glowing Border */}
      <motion.div
        className="absolute inset-0 rounded-2xl border-2 border-transparent"
        whileHover={{
          borderColor: ["rgba(129, 140, 248, 0.5)", "rgba(236, 72, 153, 0.5)", "rgba(129, 140, 248, 0.5)"],
        }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-xl font-bold text-white mb-2 drop-shadow-md">{title}</h3>
        <p className="text-gray-200 text-sm mb-2 drop-shadow-sm">
          <span className="font-medium">{date}</span> | {location}
        </p>
        <p className="text-gray-100 text-base mb-4 drop-shadow-sm">{description}</p>
        <motion.span
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="inline-block bg-gradient-to-r from-indigo-500 to-pink-500 text-white text-sm px-4 py-1 rounded-full shadow-lg"
        >
          {category}
        </motion.span>
      </div>

      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-0 rounded-2xl"
        whileHover={{ opacity: 0.15 }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
}

export default EventCard;