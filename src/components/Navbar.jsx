import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between">

      {/* Logo */}
      <Link to="/" className="text-xl font-bold text-blue-400">
        MyPortfolio
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8">
        {navLinks.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              className={
                location.pathname === link.to
                  ? 'text-blue-400 font-semibold border-b-2 border-blue-400 pb-1'
                  : 'hover:text-blue-400 transition-colors duration-200'
              }
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger Button (mobile only) */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-gray-900 flex flex-col items-center gap-6 py-6 md:hidden z-50">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={
                  location.pathname === link.to
                    ? 'text-blue-400 font-semibold'
                    : 'hover:text-blue-400 transition-colors duration-200'
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
  )
}

export default Navbar
