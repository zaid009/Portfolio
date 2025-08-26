import React from 'react'

const About = () => {
  return (
      <section id="about" className="section">
        <div className="container">
          <h2 className="title">About <span className="accent">Me</span></h2>
          <div className="grid grid-2 about-grid" style={{ marginTop: '44px' }}>
            <div className="portrait">
              <img style={{ textAlign: 'center' }} src="https://i.postimg.cc/kGMxGwfC/profile.jpg" alt="portrait" />
              {/* <div className="years"><b>3+</b><br /><small>Years</small></div> */}
            </div>
            <div className="grid" style={{ gap: '16px' }}>
              <div className="card">
                 <h3 style={{ textAlign: 'left', fontSize: '28px', fontWeight: 800, marginBottom: '8px' }}>Passionate <span className="accent">WordPress Developer</span> with a focus on creating exceptional web experiences.</h3>
                 <br></br>
                <p>I bring 3 years of experience in converting PSD and Figma designs into fully functional WordPress themes and HTML websites, 
                    with a strong emphasis on cross-device responsiveness for seamless user experiences.</p><br></br>
                 <p>Skilled in page builders such as Elementor, WP Bakery, and BE Builder, I also have expertise in PHP development with JavaScript 
                    integration. Proficient in Photoshop for design and editing.</p>   <br></br>
                    <p>Through continuous dedication, hands-on learning, and effective teamwork, I have consistently met project deadlines and 
                        contributed to successful outcomes across diverse web development projects.</p>
              </div>
              <div className="grid grid-2">
                <div className="card" style={{ textAlign: 'center' }}>
                  <div className="n" style={{ color: 'hsl(var(--primary))', fontSize: '36px', fontWeight: 900 }}>3+</div>
                  <div className="l">Years Experience</div>
                  <p style={{ color: 'hsl(var(--muted-txt))' }}>Professional Development</p>
                </div>
                <div className="card" style={{ textAlign: 'center' }}>
                  <div className="n" style={{ color: 'hsl(var(--primary))', fontSize: '36px', fontWeight: 900 }}>50+</div>
                  <div className="l">Projects Completed</div>
                   <p style={{ color: 'hsl(var(--muted-txt))' }}>Successful <br></br> Deliveries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default About