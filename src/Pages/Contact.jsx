import { Link } from "react-router-dom";

const buttons = [
  { name: "Home", path: "/", color: "bg-gray-400" },
  { name: "Resume", path: "/resume", color: "bg-green-400" },
  { name: "Projects", path: "/projects", color: "bg-yellow-400" },
  { name: "Contact", path: "/contact", color: "bg-blue-400" }
];

function Contact() {
  return (
    <div className="px-10 py-8 max-w-4xl mx-auto">

      {/* Navigation Buttons (Right aligned) */}
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

      <h1 className="text-5xl font-bold mb-8 text-white">
        Contact
      </h1>

      <p className="text-xl text-gray-200 mb-4">
        <span className="font-semibold text-white">Email:</span> 
        {" "}goudsathwik55@gmail.com
      </p>

      <p className="text-xl text-gray-200 mb-4">
        <span className="font-semibold text-white">GitHub:</span>
        <a
          href="https://github.com/Sathwik12345678"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 ml-2 hover:underline"
        >
          github.com
        </a>
      </p>

      <p className="text-xl text-gray-200">
        <span className="font-semibold text-white">LinkedIn:</span>
        <a
          href="https://www.linkedin.com/in/ponnam-sathwik-2b6667300/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 ml-2 hover:underline"
        >
          View Profile
        </a>
      </p>

    </div>
  )
}

export default Contact;
