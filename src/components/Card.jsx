import { motion } from "framer-motion"

function Card({ title, description }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="
      bg-white dark:bg-white/5
      backdrop-blur-xl
      border border-gray-200 dark:border-white/10
      p-6 rounded-2xl
      shadow-md hover:shadow-blue-500/30
      transition-all duration-300
      relative overflow-hidden
      "
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to from-blue-500/0 via-blue-500/10 to-blue-500/0 opacity-0 hover:opacity-100 transition"></div>

      <h3 className="text-xl font-semibold mb-2 relative z-10">
        {title}
      </h3>

      <p className="text-gray-600 dark:text-gray-400 leading-relaxed relative z-10">
        {description}
      </p>
    </motion.div>
  )
}

export default Card
