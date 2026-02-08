import { Link } from "react-router-dom";

const buttons = [
  { name: "Home", path: "/", color: "bg-gray-400" },
  { name: "Resume", path: "/resume", color: "bg-green-400" },
  { name: "Projects", path: "/projects", color: "bg-yellow-400" },
  { name: "Contact", path: "/contact", color: "bg-blue-400" }
];

function Projects() {
  return (
    <div className="px-10 py-8 max-w-5xl mx-auto">

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

      <h1 className="text-5xl font-bold mb-6 text-white">
        Projects
      </h1>

      <div className="space-y-6">

        {/* Project 1 */}
        <div className="bg-white dark:bg-white/5 border border-white/10 p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
          <h2 className="text-3xl font-semibold text-white mb-3">
            GenZ AI Chatbot
          </h2>

          <p className="text-xl text-gray-200 leading-relaxed">
            <span className="font-semibold text-white">Description:</span><br />
            GenZ AI Chatbot is a full-stack web application designed to provide intelligent and interactive conversations using modern web technologies. The application features a responsive user interface built with React and a backend developed using Node.js and Express. MongoDB is used to store user interactions and chat data efficiently.
            <br /><br />
            Through this project, I gained hands-on experience in building REST APIs, database integration, handling asynchronous operations, and developing real-world AI-based workflows.
            <br /><br />
            <span className="font-semibold text-white">Technologies:</span><br />
            React, Node.js, Express, MongoDB, JavaScript
          </p>

          <a
            href="https://github.com/Sathwik12345678/Genz-AI-chat-bot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-xl text-blue-400 hover:underline"
          >
            View on GitHub
          </a>
        </div>

        {/* Project 2 */}
        <div className="bg-white dark:bg-white/5 border border-white/10 p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
          <h2 className="text-3xl font-semibold text-white mb-3">
            Task Manager Application
          </h2>

          <p className="text-xl text-gray-200 leading-relaxed">
            <span className="font-semibold text-white">Description:</span><br />
            The Task Manager Application is a full-stack productivity tool that allows users to create, update, and manage daily tasks efficiently. The project includes a clean and responsive interface and a backend system for storing and managing task data.
            <br /><br />
            This project helped me understand CRUD operations, frontend state management, backend API development, connecting frontend with backend services, data handling, and validation.
            <br /><br />
            <span className="font-semibold text-white">Technologies Used:</span><br />
            React, Node.js, Express, MongoDB, JavaScript
          </p>

          <a
            href="https://github.com/Sathwik12345678/Taskmanager_Application"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-xl text-blue-400 hover:underline"
          >
            View on GitHub
          </a>
        </div>

      </div>
    </div>
  )
}

export default Projects;
