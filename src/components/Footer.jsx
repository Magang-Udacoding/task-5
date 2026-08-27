import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Footer() {
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
  ]

  const socials = [
    { icon: <FaGithub size={22} />, href: 'https://github.com/FailHy', label: 'GitHub' },
    { icon: <FaLinkedin size={22} />, href: 'https://www.linkedin.com/in/failhy', label: 'LinkedIn' },
    { icon: <FaWhatsapp size={22} />, href: 'https://wa.me/6282383918084', label: 'WhatsApp' },
    { icon: <FaInstagram size={22} />, href: 'https://instagram.com/username', label: 'Instagram' },
  ]

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h3 className="text-gray-900 dark:text-white text-xl font-bold mb-3">
            My<span className="text-blue-500 dark:text-blue-400">Portfolio</span>
          </h3>
          <p className="text-sm leading-relaxed">
            Fullstack Developer based in Jakarta.
            Building modern web applications with passion.
          </p>
        </div>

        {/* Nav Links */}
        <div>
          <h4 className="text-gray-900 dark:text-white font-semibold mb-4">Navigation</h4>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 text-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h4 className="text-gray-900 dark:text-white font-semibold mb-4">Find Me On</h4>
          <div className="flex gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-gray-200 dark:border-gray-800 text-center text-sm">
        <p>
          © {new Date().getFullYear()} Fail Hylmi Khalil. Built with{' '}
          <span className="text-blue-500 dark:text-blue-400">React</span> &{' '}
          <span className="text-blue-500 dark:text-blue-400">Tailwind CSS</span>.
        </p>
      </div>

    </footer>
  )
}

export default Footer
