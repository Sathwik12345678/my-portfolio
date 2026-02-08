function ScrollDown() {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex justify-center mt-6">
      <button
        onClick={handleScroll}
        className="group flex flex-col items-center cursor-pointer"
      >
        <span className="text-gray-400 text-sm mb-2 group-hover:text-white transition">
          Scroll Down
        </span>

        {/* Arrow Animation */}
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center items-start p-1 group-hover:border-white transition">
          <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce group-hover:bg-white"></div>
        </div>
      </button>
    </div>
  );
}

export default ScrollDown;
