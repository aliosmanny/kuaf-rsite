import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import Scene from './Scene';
import { gsap } from 'gsap';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const btnRef = useRef(null);
  const subtitleRef = useRef(null);
  
  const contentRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Yavaş ve zarif giriş animasyonları
    tl.fromTo(subtitleRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 0.2 })
      .fromTo(titleRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5, ease: 'power3.out' }, "-=0.8")
      .fromTo(descRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }, "-=1")
      .fromTo(btnRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }, "-=1");

    // Tüm Hero için Parallax
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 15;
      const yPos = (clientY / window.innerHeight - 0.5) * 15;

      gsap.to(contentRef.current, {
        x: xPos,
        y: yPos,
        duration: 2,
        ease: 'power2.out'
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-vignette"></div>
      <div className="container hero-container">
        
        {/* İçerik Katmanı - Z-index yüksek, modelin ufak bir kısmı yazının arkasından geçer */}
        <div className="hero-content" ref={contentRef}>
          <span className="hero-subtitle" ref={subtitleRef}>Luxury Hair Studio</span>
          
          {/* Tipografi Hiyerarşisi */}
          <h1 className="hero-title" ref={titleRef}>
            <span className="hero-title-small">Kendinizi</span> <br/> 
            <em className="hero-accent">Yeniden</em> Keşfedin.
          </h1>
          
          <p className="hero-description" ref={descRef}>
            Kusursuz kesimler, kişiye özel tasarımlar ve modern dokunuşlarla sanatın saça dönüştüğü yer. Sessiz lüksün inceliklerini deneyimleyin.
          </p>
          <div className="hero-actions" ref={btnRef}>
            <a href="#services" className="btn-primary">
              Randevu Al <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* 3D Model Katmanı */}
        <div className="hero-visual">
          <div className="model-wrapper">
             <Canvas camera={{ position: [0, 0, 10], fov: 35 }}>
               <Suspense fallback={null}>
                 <Scene />
               </Suspense>
             </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
