import React from 'react'

const Experience = () => {
  return (
    <section id="experience" className="section">
        <div className="container">
          <h2 className="title">Work <span className="accent">Experience</span></h2>
        </div>
        <div className="container">
          <div className="card" style={{ margin: '28px auto', maxWidth: '760px' }}>
            <div className="grid" style={{ gap: '8px' }}>
              <div className="grid" style={{ gap: '6px' }}>
                <div className="pill">🗓 2022 – 2025</div>
                <div className="pill">📍 Pakistan</div>
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 800 }}>WordPress Developer</h3>
              <h4 style={{ color: 'hsl(var(--primary))', fontWeight: 800 }}>The TechClone Pvt. Ltd.</h4>
              <ul style={{ color: 'hsl(var(--muted-txt))', display: 'grid', gap: '10px', marginTop: '6px' }}>
                <li>Built responsive, user‑friendly websites and web apps with modern WordPress practices.</li>
                <li>Delivered projects on time with exceptional quality and precision.</li>
                <li>Specialized in PHP with seamless JavaScript integrations.</li>
                <li>Mastered Elementor, WP Bakery, and BE Builder.</li>
                <li>Produced client tutorial videos for independent site management.</li>
              </ul>
            </div>
          </div>
          <div className="card" style={{ margin: '28px auto', maxWidth: '760px' }}>
            <div className="grid" style={{ gap: '8px' }}>
              <div className="grid" style={{ gap: '6px' }}>
                <div className="pill">🗓 2025 – 2025</div>
                <div className="pill">📍 Pakistan</div>
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 800 }}>WordPress Developer</h3>
              <h4 style={{ color: 'hsl(var(--primary))', fontWeight: 800 }}>NexaSoft Technologies.</h4>
              <ul style={{ color: 'hsl(var(--muted-txt))', display: 'grid', gap: '10px', marginTop: '6px' }}>
                <li>Developed advanced WordPress sites from the ground up using Elementor and WPBakery.</li>
                <li>Built comprehensive E-commerce and property listing systems with WooCommerce.</li>
                <li>Performed custom theme modifications and implemented tailored dynamic functionality.</li>
                <li>Optimized website performance and maintained high UI/UX design consistency.</li>
                <li>Created structured video tutorials to support independent client site management.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Experience
