import { Link, useLocation } from "react-router-dom"
import { FaHome, FaProjectDiagram, FaEnvelope } from "react-icons/fa"
import { motion } from "framer-motion"
import { useState } from "react"

function Sidebar() {
  const location = useLocation()
  const [open, setOpen] = useState(false)

  const menu = [
    { name: "Dashboard", path: "/", icon: <FaHome /> },
    { name: "Projects", path: "/projects", icon: <FaProjectDiagram /> },
    { name: "Contact", path: "/contact", icon: <FaEnvelope /> },
  ]

  return (
    <>
      {/* Mobile Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-blue-500 text-white p-2 rounded"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      <div
        className={`fixed h-screen w-64 bg-white dark:bg-[#111827] p-6 shadow-lg transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <h1 className="text-2xl font-bold mb-10"></h1>

        <ul className="space-y-4">
          {menu.map(item => (
            <li key={item.path}>
              <Link to={item.path} onClick={() => setOpen(false)}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`flex items-center gap-3 p-3 rounded-lg transition
                  ${
                    location.pathname === item.path
                      ? "bg-blue-500 text-white shadow-lg"
                      : "text-gray-600 dark:text-gray-400 hover:bg-blue-500/10"
                  }`}
                >
                  {item.icon} {item.name}
                </motion.div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Sidebar
