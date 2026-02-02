import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Kura Rwanda Foundation</h3>
            <p>Supporting Vulnerable Children, Empowering Communities</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/sponsorship">Sponsorship</Link></li>
              <li><Link to="/apply">Become a Sponsor</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <span>📧</span>
                <a href="mailto:kurarwandanziza@gmail.com">kurarwandanziza@gmail.com</a>
              </li>
              <li>
                <span>📞</span>
                <a href="tel:+250788521715">0788 521 715</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Get Involved</h4>
            <p>Join us in making a difference in children's lives</p>
            <Link to="/apply" className="btn btn-primary">Become a Sponsor</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Kura Rwanda Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
