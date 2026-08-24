import { Link } from 'react-router-dom'

function Footer() {
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
  ]

  const socials = [
    { label: 'GitHub', href: 'https://github.com/FailHy' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/failhy' },
  ]

  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h3 className="text-white text-xl font-bold mb-3">
            My<span className="text-blue-400">Portfolio</span>
          </h3>
          <p className="text-sm leading-relaxed">
            Fullstack Developer based in Jakarta.
            Building modern web applications with passion.
          </p>
        </div>

        {/* Nav Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Navigation</h4>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="hover:text-blue-400 transition-colors duration-200 text-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Find Me On</h4>
          <ul className="space-y-2">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors duration-200 text-sm"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Divider + Copyright */}
      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-gray-800 text-center text-sm">
        <p>
          © {new Date().getFullYear()} Peter Parker. Built with{' '}
          <span className="text-blue-400">React</span> &{' '}
          <span className="text-blue-400">Tailwind CSS</span>.
        </p>
      </div>

    </footer>
  )
}

export default Footer
