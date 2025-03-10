import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Events from "./pages/Events";

function App() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <div className="pt-20 w-full"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;