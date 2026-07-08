import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Gallery.css';

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const galleryRef = useRef(null);

  useEffect(() => {
    const images = galleryRef.current.querySelectorAll('.gallery-img-wrapper');
    gsap.fromTo(
      images,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: galleryRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <section className="gallery" id="gallery" ref={galleryRef}>
      <div className="container">
        <div className="gallery-masonry">
          <div className="gallery-col left-col">
            <div className="gallery-img-wrapper large-portrait">
              <img src="/images/gallery_01.jpg" alt="Luxury Interior" />
            </div>
            <div className="gallery-img-wrapper small-square">
              <img src="/images/gallery_03.jpg" alt="Luxury Grooming Details" />
            </div>
          </div>
          
          <div className="gallery-col right-col">
            <div className="gallery-img-wrapper small-square push-down">
              <img src="/images/gallery_02.jpg" alt="Barber Tools" />
            </div>
            <div className="gallery-img-wrapper large-portrait">
              <img src="/images/gallery_04.jpg" alt="Luxury Wash Station" />
            </div>
          </div>
        </div>
        
        <div className="gallery-full-width">
          <div className="gallery-img-wrapper cinematic">
            <img src="/images/gallery_05.jpg" alt="Cinematic Barbershop Interior" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
