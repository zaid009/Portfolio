import React from 'react'

const Contact = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! (You can replace this with your email API or backend call)");
  };

  return (
    <section id="contact" className="section">
        <div className="container">
          <h2 className="title">Get In <span className="accent">Touch</span></h2>
          <div className="grid contact-grid" style={{ marginTop: '28px' }}>
            <form className="card" onSubmit={onSubmit}>
              <div className="grid" style={{ gap: '14px' }}>
                <div>
                  <label htmlFor="name">Full Name</label>
                  <input id="name" className="input" placeholder="Your full name" required />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" className="input" placeholder="your@email.com" required />
                </div>
                <div>
                  <label htmlFor="subject">Subject</label>
                  <input id="subject" className="input" placeholder="Project discussion" required />
                </div>
                <div>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" className="input" rows={6} placeholder="Tell me about your project" required></textarea>
                </div>
                <button className="btn primary" type="submit">Send Message</button>
              </div>
            </form>
            <div className="grid" style={{ gap: '16px' }}>
              <div className="ci"><i>📞</i><div><b>Phone</b><div style={{ color: 'hsl(var(--muted-txt))' }}>+92 334 3381318</div></div></div>
              <div className="ci"><i>✉️</i><div><b>Email</b><div style={{ color: 'hsl(var(--muted-txt))' }}>zaidm25009@gmail.com</div></div></div>
              <div className="ci"><i>📍</i><div><b>Location</b><div style={{ color: 'hsl(var(--muted-txt))' }}>Karachi, Pakistan</div></div></div>
              <div className="ci"><i>🔗</i><div><b>Social</b><div style={{ color: 'hsl(var(--muted-txt))' }}>LinkedIn · GitHub · Facebook</div></div></div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Contact
