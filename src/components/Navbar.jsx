import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const isActive = (path) => {
    return location.pathname === path ? 'active' : ''
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-wrapper">
          <Link to="/" className="logo-link" onClick={closeMenu}>
            <div className="logo">
              <img src={logo} alt="Kura Rwanda Foundation" className="logo-img" />
              <div className="logo-text-group">
                <span className="logo-text">KURA RWANDA</span>
                <span className="logo-subtitle">Foundation</span>
              </div>
            </div>
          </Link>

          <button 
            className={`hamburger ${isOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
            <li className="nav-item">
              <Link 
                to="/" 
                className={`nav-link ${isActive('/')}`}
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/about" 
                className={`nav-link ${isActive('/about')}`}
                onClick={closeMenu}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/sponsorship" 
                className={`nav-link ${isActive('/sponsorship')}`}
                onClick={closeMenu}
              >
                Sponsorship
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/contact" 
                className={`nav-link ${isActive('/contact')}`}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/apply" 
                className={`nav-link ${isActive('/apply')}`}
                onClick={closeMenu}
              >
                Apply
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/apply" 
                className="btn btn-primary nav-btn"
                onClick={closeMenu}
              >
                Become a Member
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
