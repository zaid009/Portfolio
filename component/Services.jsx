import React from 'react'

const Services = () => {
  return (
     <section id="services" className="section">
        <div className="container">
          <h2 className="title">My <span className="accent">Services</span></h2>
          <p className="sub">I offer comprehensive web development services to bring your vision to life.</p>
          <div className="grid grid-3" style={{ marginTop: '28px' }}>
            <div className="card service"><h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '8px' }}>UI/UX Design</h3><p style={{ color: 'hsl(var(--muted-txt))' }}>Creating intuitive and user-friendly experiences that engage users and drive conversions through thoughtful design principles.</p></div>
            <div className="card service"><h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '8px' }}>Web Design</h3><p style={{ color: 'hsl(var(--muted-txt))' }}>Designing clean, responsive layouts that look stunning across all devices and provide seamless user experiences.</p></div>
            <div className="card service"><h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '8px' }}>WordPress Development</h3><p style={{ color: 'hsl(var(--muted-txt))' }}>Building dynamic, scalable websites with custom themes, plugins, and functionality tailored to your business needs.</p></div>
          </div>
        </div>
      </section>
  )
}

export default Services