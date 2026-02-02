import { Link } from 'react-router-dom'
import heroImage from '../assets/hero page.jpeg'
import './Home.css'

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero" style={{backgroundImage: `url(${heroImage})`}}>
        <div className="hero-overlay">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">Supporting Vulnerable Children, Empowering Communities</h1>
              <p className="hero-subtitle">
                Kura Rwanda Foundation walks alongside vulnerable children from their earliest years 
                until they are grown up, providing education, healthcare, nutrition, and moral guidance.
              </p>
              <div className="hero-buttons">
                <Link to="/apply" className="btn btn-primary">Become a Sponsor</Link>
                <Link to="/about" className="btn btn-secondary">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section video-section">
        <div className="container">
          <h2 className="section-title">Learn More About Our Work</h2>
          <div className="video-container">
            <div className="video-placeholder">
              <div className="play-icon">▶</div>
              <p>Video Coming Soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-card">
              <div className="icon">🎯</div>
              <h3>Our Vision</h3>
              <p>
                A Rwanda where every vulnerable child grows up healthy, educated, and empowered to thrive in life.
              </p>
            </div>
            <div className="mission-card">
              <div className="icon">❤️</div>
              <h3>Our Mission</h3>
              <p>
                To support vulnerable children by providing essential needs such as healthcare, education, 
                nutrition, and clothing while mentoring them until they become responsible adults.
              </p>
            </div>
            <div className="mission-card">
              <div className="icon">🤝</div>
              <h3>Our Platform</h3>
              <p>
                We connect individuals and organizations who wish to make a positive impact with 
                the children who need them most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="section impact-section">
        <div className="container">
          <h2 className="section-title">How We Help</h2>
          <div className="grid grid-4">
            <div className="impact-card">
              <div className="impact-icon">📚</div>
              <h3>Education</h3>
              <p>School fees, materials, and learning support</p>
            </div>
            <div className="impact-card">
              <div className="impact-icon">🏥</div>
              <h3>Healthcare</h3>
              <p>Medical care, health insurance, and wellness</p>
            </div>
            <div className="impact-card">
              <div className="impact-icon">🍽️</div>
              <h3>Nutrition</h3>
              <p>Monthly food packages and nutritional support</p>
            </div>
            <div className="impact-card">
              <div className="impact-icon">👕</div>
              <h3>Essentials</h3>
              <p>Clothing and other basic necessities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Levels */}
      <section className="section sponsorship-preview">
        <div className="container">
          <h2 className="section-title">Sponsorship Levels</h2>
          <div className="grid grid-4">
            <div className="sponsor-card bronze">
              <h3>Bronze</h3>
              <div className="price">10,000 - 50,000 RWF</div>
              <p>per month</p>
            </div>
            <div className="sponsor-card silver">
              <h3>Silver</h3>
              <div className="price">50,000 - 100,000 RWF</div>
              <p>per month</p>
            </div>
            <div className="sponsor-card gold">
              <h3>Gold</h3>
              <div className="price">100,000 - 500,000 RWF</div>
              <p>per month</p>
            </div>
            <div className="sponsor-card platinum">
              <h3>Platinum</h3>
              <div className="price">500,000+ RWF</div>
              <p>per month</p>
            </div>
          </div>
          <div className="cta-center">
            <Link to="/sponsorship" className="btn btn-primary">View All Options</Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Make a Lasting Impact Today</h2>
            <p>Together, we can ensure that every child in Rwanda has the opportunity to grow, learn, and thrive.</p>
            <Link to="/apply" className="btn btn-primary btn-large">Join Us Now</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
