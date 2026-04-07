import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation()

  return (
    <header className="site-header">
      <Link to="/portfolio" className="brand">
        <span className="brand-bold">ZACK EL-BAZ</span>{' '}
        <span className="brand-light">DESIGN</span>
      </Link>

      <nav className="nav-links">
        <Link
          to="/portfolio"
          className={location.pathname === '/' || location.pathname === '/portfolio' ? 'active' : ''}
        >
          PORTFOLIO
        </Link>
        <Link
          to="/contact"
          className={location.pathname === '/contact' ? 'active' : ''}
        >
          CONTACT
        </Link>
      </nav>
    </header>
  )
}