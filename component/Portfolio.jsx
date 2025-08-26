import React, { useState } from 'react';
import data from "../constant/data"; // ✅ points to data.js
import Image from 'next/image';
import Link from 'next/link';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("all");

  // filter dynamically
  const filteredProjects =
    activeTab === "all"
      ? data
      : data.filter(p => p.category === activeTab);

  // get categories dynamically from data (no need to hardcode)
  const categories = ["all", ...new Set(data.map(p => p.category))];

  return (
    <section id="portfolio" className="section" style={{ background: 'hsl(var(--muted)/.25)' }}>
      <div className="container">
        <h2 className="title">My <span className="accent">Portfolio</span></h2>

        {/* Tabs */}
        <div className="tabs" role="tablist" aria-label="Portfolio categories">
          {categories.map(tab => (
            <button
              key={tab}
              className={activeTab === tab ? "active" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab === "all" ? "All" : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects - dynamic grid */}
       <div className="projects">
  {filteredProjects.map(project => (
    <Link 
      key={project.id} 
      href={project.link} 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <div className="card">
        <div className="thumb">
          <Image src={project.icon} width={300} height={300} alt={project.title} />
        </div>
        <h3>{project.title}</h3>
        <p>{project.desc}</p>
        <a className="btn" href={project.link}>See More</a>
      </div>
    </Link>
  ))}
</div>
      </div>
    </section>
  );
};

export default Portfolio;
