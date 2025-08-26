'use client';

import { useEffect } from 'react';
import Hero from '@/../../component/Hero';
import About from '@/../../component/About';
import Education from '@/../../component/Education';
import Experience from '@/../../component/Experience';
import Skills from '@/../../component/Skills';
import Services from '@/../../component/Services';
import Portfolio from '@/../../component/Portfolio';
import Contact from '@/../../component/Contact';


export default function Page() {
  useEffect(() => {
    const y = document.getElementById('y');
    if (y) y.textContent = new Date().getFullYear().toString();
    const tabs = Array.from(document.querySelectorAll('.tabs button'));
    tabs.forEach(btn => {
      btn.addEventListener('click', () => {
        tabs.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    alert('Thanks! I will get back to you shortly.');
  };

  return (
    <>
      <Hero/>
      <About/>
      <Education/>
      <Experience/>
      <Skills/>
      <Services/>
      <Portfolio/>
      <Contact/>
    </>
  );
}
