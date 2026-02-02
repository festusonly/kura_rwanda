import { Link } from 'react-router-dom'
import './Sponsorship.css'

function Sponsorship() {
  const sponsorshipLevels = [
    {
      name: 'Bronze',
      range: '10,000 - 50,000 RWF',
      color: 'bronze'
    },
    {
      name: 'Silver',
      range: '50,000 - 100,000 RWF',
      color: 'silver'
    },
    {
      name: 'Gold',
      range: '100,000 - 500,000 RWF',
      color: 'gold'
    },
    {
      name: 'Platinum',
      range: '500,000+ RWF',
      color: 'platinum'
    }
  ]

  const supportAreas = [
    {
      icon: '📚',
      title: 'Education',
      description: 'School fees, books, uniforms, and learning materials',
      items: ['Primary & Secondary Education', 'University Scholarships', 'Tutoring Programs', 'School Supplies']
    },
    {
      icon: '🏥',
      title: 'Health',
      description: 'Medical care, health insurance, and wellness programs',
      items: ['Health Insurance', 'Medical Treatment', 'Preventive Care', 'Mental Health Support']
    },
    {
      icon: '🍽️',
      title: 'Nutrition',
      description: 'Monthly food packages and nutritional support',
      items: ['Monthly Food Parcels', 'Nutritional Programs', 'School Meals', 'Dietary Support']
    },
    {
      icon: '👕',
      title: 'Essentials',
      description: 'Clothing, shoes, and other basic necessities',
      items: ['Clothing & Shoes', 'Hygiene Products', 'Shelter Support', 'Emergency Needs']
    }
  ]

  const waysToCantribute = [
    {
      icon: '💰',
      title: 'Financial Support',
      description: 'Regular monthly contributions or one-time donations'
    },
    {
      icon: '📦',
      title: 'Material Support',
      description: 'Donate clothing, food, books, and school supplies'
    },
    {
      icon: '🤝',
      title: 'Volunteering',
      description: 'Help with events, mentorship, and activities'
    },
    {
      icon: '📢',
      title: 'Advocacy',
      description: 'Spread awareness about the foundation'
    }
  ]

  return (
    <div className="sponsorship-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Become a Sponsor</h1>
          <p>Choose a sponsorship level that fits your ability and make a lasting impact</p>
        </div>
      </section>

      {/* Sponsorship Levels */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Sponsorship Contribution Levels</h2>
          <p className="section-subtitle">
            To ensure flexibility, sponsors may choose their preferred contribution level based on their ability
          </p>
          <div className="grid grid-2">
            {sponsorshipLevels.map((level, index) => (
              <div key={index} className={`sponsorship-card ${level.color}`}>
                <div className="card-header">
                  <h3>{level.name}</h3>
                  <div className="price-range">{level.range}</div>
                  <p className="frequency">per month</p>
                </div>
                <Link to="/apply" className="btn btn-secondary full-width">Choose {level.name}</Link>
              </div>
            ))}
          </div>
          <div className="note-box">
            <p><strong>Note:</strong> One-time contributions are also accepted and appreciated!</p>
          </div>
        </div>
      </section>

      {/* Support Areas */}
      <section className="section support-areas-section">
        <div className="container">
          <h2 className="section-title">Support Specific Areas</h2>
          <p className="section-subtitle">
            You may also choose to support specific areas based on your preference
          </p>
          <div className="grid grid-2">
            {supportAreas.map((area, index) => (
              <div key={index} className="support-area-card">
                <div className="area-icon">{area.icon}</div>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
                <ul className="area-items">
                  {area.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ways to Contribute */}
      <section className="section ways-section">
        <div className="container">
          <h2 className="section-title">Ways to Contribute</h2>
          <div className="grid grid-4">
            {waysToCantribute.map((way, index) => (
              <div key={index} className="way-card">
                <div className="way-icon">{way.icon}</div>
                <h3>{way.title}</h3>
                <p>{way.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="section requirements-section">
        <div className="container">
          <h2 className="section-title">Requirements to Join</h2>
          <div className="requirements-content">
            <div className="requirement-item">
              <div className="req-number">1</div>
              <div className="req-text">
                <h3>Provide Personal Information</h3>
                <p>Full name, contact details, and profession</p>
              </div>
            </div>
            <div className="requirement-item">
              <div className="req-number">2</div>
              <div className="req-text">
                <h3>Commit to Our Mission</h3>
                <p>Support the foundation's mission and values</p>
              </div>
            </div>
            <div className="requirement-item">
              <div className="req-number">3</div>
              <div className="req-text">
                <h3>Agree to Code of Conduct</h3>
                <p>Adhere to the foundation's code of conduct</p>
              </div>
            </div>
            <div className="requirement-item">
              <div className="req-number">4</div>
              <div className="req-text">
                <h3>Select Contribution Level</h3>
                <p>Choose financial, material, or volunteering support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section benefits-section">
        <div className="container">
          <h2 className="section-title">Sponsor Benefits & Roles</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>Your Roles</h3>
              <ul>
                <li>Support children through donations or volunteering</li>
                <li>Participate in foundation events</li>
                <li>Promote the foundation's work</li>
              </ul>
            </div>
            <div className="benefit-card">
              <h3>Your Benefits</h3>
              <ul>
                <li>Recognition on our website, social media, and events</li>
                <li>Opportunity to make a direct impact on children's lives</li>
                <li>Networking with other sponsors and community members</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-box">
            <h2>Ready to Make a Difference?</h2>
            <p>Join us today and help transform children's lives</p>
            <Link to="/apply" className="btn btn-primary btn-large">Apply Now</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Sponsorship
