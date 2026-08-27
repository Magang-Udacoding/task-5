import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";

function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-white/10 text-gray-900 dark:text-white px-6 py-4 flex items-center justify-between">

      {/* Logo */}
      <Link to="/" className="text-xl font-bold text-blue-500 dark:text-blue-400">
        MyPortfolio
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 items-center">
        {navLinks.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              className={
                location.pathname === link.to
                  ? "text-blue-500 dark:text-blue-400 font-semibold border-b-2 border-blue-500 dark:border-blue-400 pb-1"
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
              }
            >
              {link.label}
            </Link>
          </li>
        ))}

        {/* Theme Toggle — Desktop */}
        <li>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
            title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {theme === "dark" ? (
              <FiSun size={18} className="text-yellow-400" />
            ) : (
              <FiMoon size={18} className="text-blue-500" />
            )}
          </button>
        </li>
      </ul>

      {/* Mobile: Theme Toggle + Hamburger */}
      <div className="flex items-center gap-3 md:hidden">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
        >
          {theme === "dark" ? (
            <FiSun size={18} className="text-yellow-400" />
          ) : (
            <FiMoon size={18} className="text-blue-500" />
          )}
        </button>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
        >
          {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-white/10 flex flex-col items-center gap-6 py-6 md:hidden z-50">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={
                  location.pathname === link.to
                    ? "text-blue-500 dark:text-blue-400 font-semibold"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
                }
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}

    </nav>
  );
}

export default Navbar;
