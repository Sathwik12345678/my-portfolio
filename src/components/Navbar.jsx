import { Link, useLocation } from "react-router-dom"

function Navbar() {
  const location = useLocation()

  const buttons = [
    { name: "Home", path: "/", color: "bg-gray-400" },
    { name: "Resume", path: "/resume", color: "bg-green-400" },
    { name: "Projects", path: "/projects", color: "bg-yellow-400" },
    { name: "Contact", path: "/contact", color: "bg-blue-400" }
  ]

  return (
    <div className="px-10 pt-6">

      {/* Name */}
      <Link to="/">
        <h1 className="text-xl font-bold mb-6 cursor-pointer">
          Ponnam Sathwik Goud
        </h1>
      </Link>

      {/* Circle Buttons – visible on all pages */}
      <div className="flex justify-center md:justify-end gap-6 mb-10 flex-wrap">
        {buttons.map((btn, index) => (
          <Link
            key={index}
            to={btn.path}
            className={`${btn.color} w-24 h-24 rounded-full flex items-center justify-center font-semibold shadow-lg transition hover:scale-110
            ${
              location.pathname === btn.path
                ? "ring-4 ring-white/40"
                : ""
            }`}
          >
            {btn.name}
          </Link>
        ))}
      </div>

    </div>
  )
}

export default Navbar
