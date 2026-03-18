import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation()

  return (
    <header className="site-header">
      <Link to="/portfolio" className="brand">
        ZACK EL-BAZ DESIGN
      </Link>

      <nav className="nav-links">
        <Link
          to="/portfolio"
          className={location.pathname === '/' || location.pathname === '/portfolio' ? 'active' : ''}
        >
          portfolio
        </Link>
        <Link
          to="/contact"
          className={location.pathname === '/contact' ? 'active' : ''}
        >
          contact
        </Link>
      </nav>
    </header>
  )
}