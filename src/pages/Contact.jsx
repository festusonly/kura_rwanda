import './Contact.css'

function Contact() {
  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with Kura Rwanda Foundation</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p>
                We'd love to hear from you! Whether you have questions about sponsorship, 
                want to volunteer, or need more information about our work, feel free to reach out.
              </p>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">📧</div>
                  <div className="method-content">
                    <h3>Email</h3>
                    <a href="mailto:kurarwandanziza@gmail.com">kurarwandanziza@gmail.com</a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">📞</div>
                  <div className="method-content">
                    <h3>Phone</h3>
                    <a href="tel:+250788521715">+250 788 521 715</a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">📍</div>
                  <div className="method-content">
                    <h3>Location</h3>
                    <p>Rwanda</p>
                  </div>
                </div>
              </div>

              <div className="office-hours">
                <h3>Office Hours</h3>
                <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p>Saturday: 10:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section quick-links-section">
        <div className="container">
          <h2 className="section-title">Quick Links</h2>
          <div className="grid grid-3">
            <div className="quick-link-card">
              <div className="ql-icon">📄</div>
              <h3>Become a Sponsor</h3>
              <p>Ready to make a difference? Apply to become a sponsor today.</p>
              <a href="/apply" className="btn btn-secondary">Apply Now</a>
            </div>

            <div className="quick-link-card">
              <div className="ql-icon">ℹ️</div>
              <h3>Learn More</h3>
              <p>Discover more about our mission, vision, and impact.</p>
              <a href="/about" className="btn btn-secondary">About Us</a>
            </div>

            <div className="quick-link-card">
              <div className="ql-icon">🎁</div>
              <h3>Sponsorship Options</h3>
              <p>Explore different ways you can support our children.</p>
              <a href="/sponsorship" className="btn btn-secondary">View Options</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
