import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    gsap.fromTo(
      textRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 75%',
        },
      }
    );
  }, []);

  return (
    <section className="about" ref={sectionRef} id="about" data-text="01">
      <div className="container about-container">
        <h2 className="section-title">FELSEFE</h2>
        <p className="about-text" ref={textRef}>
          Güzellik, ayrıntılarda gizlidir. Klasik yaklaşımları modern tekniklerle birleştirerek, sadece bir saç tasarımı değil, karakterinizi yansıtan bir imza yaratıyoruz. 
          Rahatlayın, kendinize zaman ayırın ve gerisini bize bırakın.
        </p>
      </div>
    </section>
  );
};

export default About;
