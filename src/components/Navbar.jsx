import { useState } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white dark:bg-gray-900 shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-gray-800 dark:text-white">Sane Sam</a>
        <ul className="flex gap-6 text-gray-700 dark:text-gray-300">
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
          <li><a href="#experience" className="hover:text-blue-600">Experience</a></li>
          <li><a href="#education" className="hover:text-blue-600">Education</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
        <div className="flex items-center gap-4">
          <button onClick={toggleDarkMode} className="text-sm px-3 py-1 border rounded dark:border-white border-black dark:text-white">
            {darkMode ? "Light" : "Dark"}
          </button>
          <a href="/resume.pdf" download className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
