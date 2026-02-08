import { Link, useLocation } from "react-router-dom";

function NavButtons() {
  const location = useLocation();

  const buttons = [
    { name: "Home", path: "/", color: "bg-gray-400" },
    { name: "Resume", path: "/resume", color: "bg-green-400" },
    { name: "Projects", path: "/projects", color: "bg-yellow-400" },
    { name: "Contact", path: "/contact", color: "bg-blue-400" }
  ];

  return (
    <div className="flex gap-6 flex-wrap justify-center mt-10">
      {buttons.map((btn, index) => (
        <Link
          key={index}
          to={btn.path}
          className={`${btn.color} w-24 h-24 rounded-full flex items-center justify-center text-lg font-semibold shadow-lg hover:scale-110 transition
          ${location.pathname === btn.path ? "ring-4 ring-white" : ""}`}
        >
          {btn.name}
        </Link>
      ))}
    </div>
  );
}

export default NavButtons;
