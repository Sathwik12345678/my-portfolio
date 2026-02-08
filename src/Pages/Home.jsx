import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ScrollDown from "../components/ScrollDown";

function Home() {
  const buttons = [
    { name: "Home", path: "/", color: "bg-gray-400" },
    { name: "Resume", path: "/resume", color: "bg-green-400" },
    { name: "Projects", path: "/projects", color: "bg-yellow-400" },
    { name: "Contact", path: "/contact", color: "bg-blue-400" }
  ];

  const skills = {
    "Programming Languages": [
      { name: "Python", level: 85 },
      { name: "C", level: 75 },
      { name: "JavaScript", level: 85 }
    ],
    "Frontend Development": [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "React", level: 80 }
    ],
    "Backend Development": [
      { name: "Node.js", level: 75 },
      { name: "Express", level: 70 }
    ],
    Database: [{ name: "MongoDB", level: 75 }],
    Tools: [
      { name: "Git", level: 80 },
      { name: "GitHub", level: 85 }
    ]
  };

  const [animateBars, setAnimateBars] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "Mern Stack Developer";

  useEffect(() => {
    setTimeout(() => setAnimateBars(true), 300);
  }, []);

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(typing);
    }, 60);
    return () => clearInterval(typing);
  }, []);

  return (
    <div className="relative max-w-7xl mx-auto px-10 pt-10 pb-24">

      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0b0f19] via-[#0f172a] to-[#020617]"></div>

      {/* Glow */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/20 blur-[140px] rounded-full"></div>

      {/* Layout */}
      <div className="flex flex-col md:flex-row gap-16">

        {/* LEFT */}
        <div className="md:w-1/3 ml-8">

          {/* Profile Image */}
          <div className="relative mb-8 flex justify-center">
            <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full"></div>
            <img
              src={`${import.meta.env.BASE_URL}profile.png`}
              alt="Profile"
              className="relative w-80 h-80 rounded-full object-cover shadow-2xl border-4 border-white/10"
            />
          </div>

          {/* Skills */}
          <h2 className="text-2xl font-bold text-white mb-4 text-center">
            Skills
          </h2>

          <div className="space-y-5">
            {Object.entries(skills).map(([category, items], index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow"
              >
                <h3 className="text-sm font-semibold text-blue-400 mb-2">
                  {category}
                </h3>

                {items.map((skill, i) => (
                  <div key={i} className="mb-2">
                    <div className="flex justify-between text-xs text-gray-300">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>

                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-400 to-cyan-400 h-2 rounded-full transition-all duration-1000"
                        style={{
                          width: animateBars ? `${skill.level}%` : "0%"
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="md:w-2/3 max-w-2xl mt-2">

          <h1 className="text-5xl font-bold mb-2 text-white">
            Hi, I'm Sathwik
          </h1>

          <h2 className="text-3xl font-semibold mb-2 text-blue-400">
            Ponnam Sathwik Goud
          </h2>

          {/* Role typing */}
          <p className="text-xl text-cyan-400 mb-6 font-medium h-7">
            {typedText}
            <span className="animate-pulse">|</span>
          </p>

          {/* YOUR FULL SUMMARY (restored) */}
          <p className="text-xl text-gray-300 leading-loose tracking-wide bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl shadow-lg">
            I am a B.Tech Computer Science student at SR University with a strong interest in full stack development and modern web technologies. 
            I have hands-on experience in building responsive and user-friendly applications using JavaScript, Python, React, Node.js, and MongoDB. 
            I have worked on projects such as an AI chatbot and a task management system, which helped me understand the complete development process from frontend design to backend integration.
            I am passionate about learning new technologies, writing clean and efficient code, and continuously improving my problem-solving skills. 
            My goal is to build real-world applications that create value and to grow as a skilled software developer by gaining practical experience and working on meaningful projects.
          </p>

          {/* Scroll Down */}
          <ScrollDown />
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-6 flex-wrap justify-end mt-16 relative z-20">
        {buttons.map((btn, index) => (
          <Link
            key={index}
            to={btn.path}
            className={`${btn.color} w-24 h-24 rounded-full flex items-center justify-center text-lg font-semibold shadow-xl hover:scale-110 transition`}
          >
            {btn.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
