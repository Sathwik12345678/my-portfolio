import { motion } from "framer-motion"
import Card from "../components/Card"
import Hero from "../components/Hero"
import Skills from "../components/Skills"

function Dashboard() {
  const sections = [
    {
      title: "Summary",
      desc: "Full Stack Development Enthusiast with strong skills in JavaScript, Python, React, and Node.js. Passionate about building real-world applications."
    },
    {
      title: "Education",
      desc: "B.Tech CSE – SR University (2023–2027)"
    },
    {
      title: "Certification",
      desc: "Full Stack Web Development Bootcamp – Udemy"
    },
    {
      title: "Languages",
      desc: "English (Advanced), Telugu (Native), Hindi (Proficient)"
    }
  ]

  return (
    <>
      <Hero />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="md:ml-64 p-6 grid lg:grid-cols-2 gap-6"
      >
        {/* Left Side */}
        <div className="space-y-6">
          {sections.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              description={item.desc}
            />
          ))}
        </div>

        {/* Right Side */}
        <div className="space-y-6">
          <Skills />

          <Card
            title="Backend & Tools"
            description="Node.js, REST APIs, MongoDB, Git, GitHub"
          />
        </div>
      </motion.div>
    </>
  )
}

export default Dashboard
