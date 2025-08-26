import React from 'react'

const Skills = () => {
  return (
    <section id="skills" className="section" style={{ background: 'hsl(var(--muted)/.25)' }}>
        <div className="container">
          <h2 className="title">Skills & <span className="accent">Expertise</span></h2>
          <div className="grid grid-2" style={{ marginTop: '28px' }}>
            <div className="card">
              <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '12px' }}>Frontend Development</h3>
              <div className="skill-row"><div className="skill-top"><span>HTML5</span><b>100%</b></div><div className="bar"><i style={{ width: '100%' }} /></div></div>
              <div className="skill-row"><div className="skill-top"><span>CSS3</span><b>100%</b></div><div className="bar"><i style={{ width: '100%' }} /></div></div>
              <div className="skill-row"><div className="skill-top"><span>JavaScript</span><b>50%</b></div><div className="bar"><i style={{ width: '50%' }} /></div></div>
              <div className="skill-row"><div className="skill-top"><span>Tailwind CSS</span><b>50%</b></div><div className="bar"><i style={{ width: '50%' }} /></div></div>
            </div>
            <div className="card">
              <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '12px' }}>Backend & Database</h3>
              <div className="skill-row"><div className="skill-top"><span>PHP</span><b>60%</b></div><div className="bar"><i style={{ width: '60' }} /></div></div>
              <div className="skill-row"><div className="skill-top"><span>MySQL</span><b>90%</b></div><div className="bar"><i style={{ width: '90%' }} /></div></div>
              <div className="skill-row"><div className="skill-top"><span>WordPress</span><b>100%</b></div><div className="bar"><i style={{ width: '100%' }} /></div></div>
            </div>
            <div className="card">
              <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '12px' }}>Design & Tools</h3>
              <div className="skill-row"><div className="skill-top"><span>Photoshop</span><b>60%</b></div><div className="bar"><i style={{ width: '60%' }} /></div></div>
              <div className="skill-row"><div className="skill-top"><span>Figma</span><b>60%</b></div><div className="bar"><i style={{ width: '60%' }} /></div></div>
              <div className="skill-row"><div className="skill-top"><span>UI/UX Design</span><b>80%</b></div><div className="bar"><i style={{ width: '80%' }} /></div></div>
            </div>
            <div className="card">
              <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '12px' }}>Page Builders</h3>
              <div className="skill-row"><div className="skill-top"><span>Elementor</span><b>90%</b></div><div className="bar"><i style={{ width: '90%' }} /></div></div>
              <div className="skill-row"><div className="skill-top"><span>WP Bakery</span><b>90%</b></div><div className="bar"><i style={{ width: '90%' }} /></div></div>
              <div className="skill-row"><div className="skill-top"><span>BE Builder</span><b>90%</b></div><div className="bar"><i style={{ width: '90%' }} /></div></div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Skills
      