import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Resume from "./pages/Resume"
import Contact from "./pages/Contact"
import { Routes, Route, useLocation } from "react-router-dom"

function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#0b0f19] text-black dark:text-white">
      
      {/* Show Navbar only if NOT Home */}
      {location.pathname !== "/" && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </div>
  )
}

export default App
