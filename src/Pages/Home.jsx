import { Link } from "react-router-dom"

function Home() {
  const buttons = [
    { name: "Home", path: "/", color: "bg-gray-400" },
    { name: "Resume", path: "/resume", color: "bg-green-400" },
    { name: "Projects", path: "/projects", color: "bg-yellow-400" },
    { name: "Contact", path: "/contact", color: "bg-blue-400" }
  ]

  return (
    <div className="max-w-7xl mx-auto px-10 py-16">

      {/* Two Column Layout */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-16">

        {/* LEFT: Profile Image */}
        <div className="flex-shrink-0 mt-8 md:mt-16">
          <img 
          src={`${import.meta.env.BASE_URL}profile.png`}
          alt="Profile"
          className="w-80 h-80 rounded-full object-cover shadow-xl"
/>

        </div>

        {/* RIGHT: Text Content */}
        <div className="max-w-2xl">

          <h1 className="text-4xl font-bold mb-3">
            Hi, I'm Sathwik
          </h1>

          <h2 className="text-2xl font-semibold mb-4">
            Ponnam Sathwik Goud
          </h2>

          <p className="text-xl text-gray-300 leading-relaxed mb-20">
            I am a B.Tech Computer Science student at SR University with a strong interest in full stack development and modern web technologies. 
            I have hands-on experience in building responsive and user-friendly applications using JavaScript, Python, React, Node.js, and MongoDB. 
            I have worked on projects such as an AI chatbot and a task management system, which helped me understand the complete development process from frontend design to backend integration.
            I am passionate about learning new technologies, writing clean and efficient code, and continuously improving my problem-solving skills. 
            My goal is to build real-world applications that create value and to grow as a skilled software developer by gaining practical experience and working on meaningful projects.
          </p>

          {/* Buttons aligned slightly right */}
          <div className="flex gap-6 flex-wrap justify-start md:justify-end mt-4">
            {buttons.map((btn, index) => (
              <Link
                key={index}
                to={btn.path}
                className={`${btn.color} w-24 h-24 rounded-full flex items-center justify-center font-semibold shadow-lg hover:scale-110 transition`}
              >
                {btn.name}
              </Link>
            ))}
          </div>

        </div>
      </div>

    </div>
  )
}

export default Home
