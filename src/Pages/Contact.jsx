function Contact() {
  return (
    <div className="px-10 py-8 max-w-4xl mx-auto">

      {/* Title */}
      <h1 className="text-5xl font-bold mb-8 text-white">
        Contact
      </h1>

      {/* Email */}
      <p className="text-xl text-gray-200 mb-4">
        <span className="font-semibold text-white">Email:</span> 
        {" "}goudsathwik55@gmail.com
      </p>

      {/* GitHub */}
      <p className="text-xl text-gray-200 mb-4">
        <span className="font-semibold text-white">GitHub:</span>
        <a
          href="https://github.com/2303A51780"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 ml-2 hover:underline"
        >
          github.com/2303A51780
        </a>
      </p>

      {/* LinkedIn */}
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

export default Contact
