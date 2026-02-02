import './Apply.css'

function Apply() {
  return (
    <div className="apply-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Become a Sponsor</h1>
          <p>Fill out the application form below to join Kura Rwanda Foundation</p>
        </div>
      </section>

      {/* Application Form */}
      <section className="section">
        <div className="container">
          <div className="apply-container">
            {/* Application Form */}
            <div className="form-container">
              <h2>Sponsor Application</h2>
              <div className="form-button-container">
                <p className="form-description">
                  Ready to make a difference? Fill out our sponsorship application form to join 
                  Kura Rwanda Foundation and support vulnerable children across Rwanda.
                </p>
                <a 
                  href="https://forms.gle/X8G9cxjzcjxqfu7cA" 
                  className="btn btn-primary btn-large form-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click to Find the Form
                </a>
                <p className="form-note">
                  The form will open in a new tab. Please ensure you have all necessary information ready.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section contact-cta">
        <div className="container">
          <div className="contact-cta-content">
            <h2>Have Questions?</h2>
            <p>Contact us for more information about sponsorship opportunities</p>
            <div className="contact-details">
              <a href="mailto:kurarwandanziza@gmail.com" className="contact-link">
                📧 kurarwandanziza@gmail.com
              </a>
              <a href="tel:+250788521715" className="contact-link">
                📞 +250 788 521 715
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Apply
