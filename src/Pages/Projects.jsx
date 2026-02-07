function Projects() {
  return (
    <div className="px-10 py-8 max-w-5xl mx-auto">

      {/* Page Title */}
      <h1 className="text-5xl font-bold mb-6 text-white">
        Projects
      </h1>

      {/* Projects Container */}
      <div className="space-y-6">

        {/* Project 1 */}
        <div className="bg-white dark:bg-white/5 border border-white/10 p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
          <h2 className="text-3xl font-semibold text-white mb-3">
            GenZ AI Chatbot
          </h2>

          <p className="text-xl text-gray-200 leading-relaxed">
            <span className="font-semibold text-white">Description:</span><br />
            GenZ AI Chatbot is a full-stack web application designed to provide intelligent and interactive conversations using modern web technologies. The application includes a responsive frontend built with React and a backend developed using Node.js and Express. MongoDB is used to store user interactions and chat data efficiently.
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
            The Task Manager Application is a full-stack productivity tool that allows users to create, update, and manage daily tasks efficiently. It features a clean user interface and a backend system for storing and managing task data.
            <br /><br />
            This project helped me understand CRUD operations, frontend state management, backend API development, data validation, and full-stack integration.
            <br /><br />
            <span className="font-semibold text-white">Technologies:</span><br />
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

export default Projects
