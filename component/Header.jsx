"use client"; // if you're using Next.js App Router

import React, { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="container nav">
        <a href="#" className="brand">MZ<i>.</i></a>

        {/* menu */}
        <nav className={`menu ${open ? "show" : ""}`} aria-label="Primary">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="hire" href="#contact">Hire Me</a>

        {/* burger button */}
        <button
          className="burger"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;