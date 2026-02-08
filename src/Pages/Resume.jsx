import { Link } from "react-router-dom";

const buttons = [
  { name: "Home", path: "/", color: "bg-gray-400" },
  { name: "Resume", path: "/resume", color: "bg-green-400" },
  { name: "Projects", path: "/projects", color: "bg-yellow-400" },
  { name: "Contact", path: "/contact", color: "bg-blue-400" }
];

function Resume() {
  return (
    <div className="px-10 py-16 max-w-5xl mx-auto">

      {/* Navigation Buttons */}
      <div className="flex gap-6 flex-wrap justify-end mb-10">
        {buttons.map((btn, index) => (
          <Link
            key={index}
            to={btn.path}
            className={`${btn.color} w-24 h-24 rounded-full flex items-center justify-center text-lg font-semibold shadow-lg hover:scale-110 transition`}
          >
            {btn.name}
          </Link>
        ))}
      </div>

      <h1 className="text-4xl font-bold mb-8 text-white">
        My Resume
      </h1>

      <div className="flex gap-6">
        <a
          href={`${import.meta.env.BASE_URL}resume.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:scale-105 transition"
        >
          View Resume
        </a>

        <a
          href={`${import.meta.env.BASE_URL}resume.pdf`}
          download="Ponnam_Sathwik_Goud_Resume.pdf"
          className="bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:scale-105 transition"
        >
          Download Resume
        </a>
      </div>

    </div>
  )
}

export default Resume;
