import React from 'react'

const Hero = () => {
  return (
<section id="hero" className="hero">
  {/* Top-left mock */}
  <div className="floating tl">
    <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop&auto=format" alt="preview" />
  </div>

  {/* Top-right mock */}
  <div className="floating tr">
    <img src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=800&h=600&fit=crop&auto=format" alt="ui" />
  </div>

  {/* Bottom-left badge */}
  <div className="floating bl">
    <div className="badge"><div className="n">WP</div><div className="l">WordPress Expert</div></div>
  </div>

  {/* Bottom-right badge */}
  <div className="floating br">
    <div className="badge"><div className="n">50+</div><div className="l">Projects</div></div>
  </div>

  {/* Background pattern */}
  <div className="pattern"></div>

  {/* Center content */}
  <div className="container" style={{ marginTop: '72px' }}>
    <img className="avatar" src="https://i.postimg.cc/kGMxGwfC/profile.jpg" alt="profile" />
    <h1>
      My Personal <span className="grad">Portfolio</span>
    </h1>
    <div className="role">
      <span>For WordPress Developer</span>
      <span className="spark">✨</span>
    </div>
    <p>I’m Muhammad Zaid — I craft responsive, user-friendly WordPress sites...</p>
    <div className="cta">
      <a className="btn primary" href="#portfolio">See My Work</a>
      <a className="btn secondary" href="#contact">Let’s Talk</a>
    </div>
  </div>
</section>

  )
}

export default Hero