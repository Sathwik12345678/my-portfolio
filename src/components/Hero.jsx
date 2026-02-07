import { motion } from "framer-motion"

function Hero() {
  return (
    <section className="px-10 py-16 flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto">
      
      {/* Profile Image */}
      <motion.img
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        src="/profile.jpg"   // put your image in public folder
        alt="Profile"
        className="w-64 h-64 rounded-full object-cover shadow-xl"
      />

      {/* About */}
      <div>
        <h1 className="text-4xl font-bold mb-4">
          Hi, I'm Sathwik
        </h1>

        <h2 className="text-2xl font-semibold mb-4">
          Ponnam Sathwik Goud
        </h2>

        <p className="text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
          I am a B.Tech Computer Science student at SR University and a Full Stack Development enthusiast.
          I enjoy building modern web applications using React, Node.js, and MongoDB.
          I am passionate about creating real-world projects and continuously improving my development skills.
        </p>
      </div>
    </section>
  )
}

export default Hero
