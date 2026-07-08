import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Services.css';

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  { name: 'Saç Kesimi', price: '₺500' },
  { name: 'Fön & Şekillendirme', price: '₺250' },
  { name: 'Dip Boya', price: '₺800' },
  { name: 'Ombre & Sombre', price: '₺2500' },
  { name: 'Röfle / Highlight', price: '₺2200' },
  { name: 'Keratin Bakımı', price: '₺1500' },
];

const Services = () => {
  const listRef = useRef(null);

  useEffect(() => {
    const items = listRef.current.children;
    gsap.fromTo(
      items,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: listRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services-header">
          <h2 className="section-title">Hizmetlerimiz</h2>
        </div>
        <ul className="services-list" ref={listRef}>
          {servicesData.map((srv, idx) => (
            <li key={idx} className="service-item">
              <div className="service-info">
                <span className="service-name">
                  {srv.name} <span className="service-arrow">→</span>
                </span>
                <span className="service-line"></span>
                <span className="service-price">{srv.price}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
