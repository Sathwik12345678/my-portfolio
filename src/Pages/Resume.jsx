function Resume() {
  return (
    <div className="px-10 py-16 max-w-5xl mx-auto">

      <h1 className="text-3xl font-bold mb-8">My Resume</h1>

      <div className="flex gap-6">
        
        {/* View Resume (opens in new tab) */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:scale-105 transition"
        >
          View Resume
        </a>

        {/* Download Resume */}
        <a
          href="/resume.pdf"
          download="Ponnam_Sathwik_Goud_Resume.pdf"
          className="bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:scale-105 transition"
        >
          Download Resume
        </a>

      </div>

    </div>
  )
}

export default Resume
