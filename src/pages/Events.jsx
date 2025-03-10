import { useState } from "react";
import { motion } from "framer-motion";
import EventCard from "../components/EventCard";
import EventForm from "../components/EventForm";

function Events() {
  const [events, setEvents] = useState([
    { id: 1, title: "Prayer Meet", date: "Mar 15, 2025", location: "Church", description: "A peaceful gathering.", category: "Religious" },
    { id: 2, title: "Food Drive", date: "Mar 20, 2025", location: "Community Center", description: "Help the needy.", category: "Charity" },
  ]);
  const [filter, setFilter] = useState("All");
  const [newEvent, setNewEvent] = useState({ title: "", date: "", category: "", description: "" });
  const [isFormOpen, setIsFormOpen] = useState(false);

  const categories = ["All", "Religious", "Social", "Charity"];
  const filteredEvents = filter === "All" ? events : events.filter(event => event.category === filter);

  const handleAddEvent = (e) => {
    e.preventDefault();
    setEvents([...events, { ...newEvent, id: events.length + 1, location: "TBD" }]); 
    setNewEvent({ title: "", date: "", category: "", description: "" }); 
  };

  return (
    <div className="w-full min-h-screen py-16 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600"
        >
          Explore Events
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex justify-center space-x-4 mb-12"
        >
          {categories.map((cat, index) => (
            <motion.button
              key={cat}
              onClick={() => setFilter(cat)}
              whileHover={{ scale: 1.1, boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-medium text-base transition-all duration-300 ${
                filter === cat
                  ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg"
                  : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
              }`}
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          {filteredEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <motion.button
            onClick={() => setIsFormOpen(true)}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full shadow-lg transition-all duration-300"
          >
            Create Event
          </motion.button>
        </div>

        <EventForm
          isOpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          onAddEvent={handleAddEvent}
          newEvent={newEvent}
          setNewEvent={setNewEvent}
        />
      </div>
    </div>
  );
}

export default Events;