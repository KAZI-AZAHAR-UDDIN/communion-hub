import { motion, AnimatePresence } from "framer-motion";

function EventForm({ isOpen, onClose, onAddEvent, newEvent, setNewEvent }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddEvent(e);
    onClose(); // Close the form after submission
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-2xl max-w-lg w-full mx-4 border border-gray-100 overflow-hidden glass-form"
          >
            {/* Glowing Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 opacity-0"
              animate={{ opacity: [0, 0.1, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            {/* Title */}
            <h3 className="text-3xl font-extrabold text-gray-800 mb-8 text-center relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Create an Event
            </h3>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <motion.div whileFocus={{ scale: 1.03 }} className="relative">
                <input
                  type="text"
                  placeholder="Event Title"
                  value={newEvent.title}
                  onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                  className="w-full p-4 bg-white bg-opacity-80 text-gray-800 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 shadow-md placeholder-gray-500"
                  required
                />
              </motion.div>
              <motion.div whileFocus={{ scale: 1.03 }} className="relative">
                <input
                  type="date"
                  value={newEvent.date}
                  onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                  className="w-full p-4 bg-white bg-opacity-80 text-gray-800 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 shadow-md"
                  required
                />
              </motion.div>
              <motion.div whileFocus={{ scale: 1.03 }} className="relative">
                <select
                  value={newEvent.category}
                  onChange={(e) => setNewEvent({ ...newEvent, category: e.target.value })}
                  className="w-full p-4 bg-white bg-opacity-80 text-gray-800 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 shadow-md appearance-none"
                  required
                >
                  <option value="">Select Category</option>
                  <option value="Religious">Religious</option>
                  <option value="Social">Social</option>
                  <option value="Charity">Charity</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </motion.div>
              <motion.div whileFocus={{ scale: 1.03 }} className="relative">
                <textarea
                  placeholder="Event Description"
                  value={newEvent.description}
                  onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                  className="w-full p-4 bg-white bg-opacity-80 text-gray-800 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 shadow-md placeholder-gray-500 resize-none h-32"
                  required
                />
              </motion.div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-indigo-700 hover:to-purple-700"
              >
                Add Event
              </motion.button>
            </form>

            {/* Close Button */}
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-4 right-4 text-gray-500 hover:text-indigo-600 transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default EventForm;