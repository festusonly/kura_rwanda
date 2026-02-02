import './About.css'

function About() {
  const committee = [
    { name: 'RUSANGIZA Fabrice', position: 'Chairperson' },
    { name: 'INKINDI IRABARUTA Isabelle', position: 'Vice Chairperson' },
    { name: 'BIGIRIMANA Festus', position: 'Project Manager' },
    { name: 'NIWEMAHORO Patience', position: 'Secretary' },
    { name: 'UWIMANA Jeanne', position: 'Social Media Manager' },
    { name: 'UWIKUNDA Benitha', position: 'Accountant' }
  ]

  const values = [
    { icon: '🤝', title: 'Integrity', description: 'We uphold honesty and transparency in all our operations' },
    { icon: '❤️', title: 'Compassion', description: 'We approach every child with love and understanding' },
    { icon: '👥', title: 'Respect', description: 'We honor the dignity of every individual we serve' },
    { icon: '🎯', title: 'Excellence', description: 'We strive for the highest standards in our work' },
    { icon: '🤲', title: 'Accountability', description: 'We are responsible stewards of resources entrusted to us' },
    { icon: '🌱', title: 'Empowerment', description: 'We enable children to reach their full potential' }
  ]

  return (
    <div className="about-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>About Kura Rwanda Foundation</h1>
          <p>Supporting Vulnerable Children, Empowering Communities</p>
        </div>
      </section>

      {/* About Content */}
      <section className="section">
        <div className="container">
          <div className="about-content">
            <h2>Who We Are</h2>
            <p>
              Kura Rwanda Foundation is a non-profit organization committed to supporting vulnerable 
              children across Rwanda. We walk alongside these children from their earliest years until 
              they are grown up, ensuring they receive education, healthcare, nutrition, and moral guidance.
            </p>
            <p>
              Our goal is not just to meet immediate needs, but to raise responsible, empowered young 
              adults who can thrive and contribute positively to society.
            </p>
            <p>
              We also serve as a platform for individuals and organizations who wish to make a positive 
              impact but do not know how, by connecting their resources and efforts to the children who 
              need them most.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section vision-mission-section">
        <div className="container">
          <div className="vision-mission-grid">
            <div className="vm-card">
              <div className="vm-icon">🔭</div>
              <h3>Our Vision</h3>
              <p>
                A Rwanda where every vulnerable child grows up healthy, educated, and empowered to 
                thrive in life.
              </p>
            </div>
            <div className="vm-card">
              <div className="vm-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                Kura Rwanda Foundation exists to support vulnerable children by providing essential 
                needs such as healthcare, education, nutrition, and clothing. We walk with these 
                children until they are grown up, mentoring them, teaching values, and ensuring 
                consistent care. We also serve as a platform for individuals and organizations who 
                wish to make a positive impact, connecting their resources and efforts with the 
                children who need them most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section values-section">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <div className="grid grid-3">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Structure */}
      <section className="section structure-section">
        <div className="container">
          <h2 className="section-title">Foundation Structure</h2>
          <div className="structure-content">
            <div className="structure-card">
              <h3>🏛️ Permanent Members / Committee</h3>
              <p>
                The foundation is governed by six permanent members who make decisions, plan 
                strategies, and oversee all activities.
              </p>
            </div>
            <div className="structure-card">
              <h3>🤝 Sponsors / Supporters</h3>
              <p>
                Sponsors are individuals or organizations who support the foundation financially, 
                through volunteering, or by participating in our events. Sponsors play a vital role 
                in sustaining our mission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Committee Members */}
      <section className="section committee-section">
        <div className="container">
          <h2 className="section-title">Our Leadership Committee</h2>
          <div className="grid grid-3">
            {committee.map((member, index) => (
              <div key={index} className="committee-card">
                <div className="member-avatar">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3>{member.name}</h3>
                <p className="position">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code of Conduct */}
      <section className="section conduct-section">
        <div className="container">
          <h2 className="section-title">Code of Conduct</h2>
          <div className="conduct-content">
            <p>All sponsors and members are expected to:</p>
            <ul className="conduct-list">
              <li>✓ Uphold integrity, respect, and professionalism</li>
              <li>✓ Support the foundation's mission with sincerity</li>
              <li>✓ Protect the welfare and dignity of the children</li>
              <li>✓ Maintain transparency in all contributions and activities</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
