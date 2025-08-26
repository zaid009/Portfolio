import React from 'react'

const Education = () => {
  return (
    <section id="education" className="section" style={{ background: 'hsl(var(--muted)/.25)' }}>
        <div className="container">
          <h2 className="title">My <span className="accent">Education</span></h2>
          <div className="card" style={{ margin: '28px auto', maxWidth: '760px' }}>
            <div className="pill" style={{ marginBottom: '14px' }}>📅 2020 – 2024</div>
            <h3 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>Web Development Diploma</h3>
            <p style={{ color: 'hsl(var(--muted-txt))', marginBottom: '18px' }}>Comprehensive training covering modern development stacks & best practices.</p>
            <div className="grid grid-2">
              <div className="pill">🌐 MS Office</div>
              <div className="pill">🌐 HTML5 & CSS3</div>
              <div className="pill">⚡ JavaScript & Bootstrap</div>
              <div className="pill">🎨 UI/UX Principles</div>
              <div className="pill">🗄️ SQL & Databases</div>
              <div className="pill">🐘 PHP Frameworks</div>
              <div className="pill">🔒 Secure Web Apps</div>
              <div className="pill">📱 CMS & SEO</div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Education
      