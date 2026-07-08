import React, { useRef, useEffect } from 'react';
import { useGLTF, Environment, ContactShadows } from '@react-three/drei';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

export default function Scene() {
  const modelRef = useRef();
  const floatRef = useRef();
  const groupRef = useRef();
  const { scene } = useGLTF('/models/bust.glb');

  // Optimizasyon: Kullanıcının kendi modelinin kaplamasını koruyup, cilalı taş hissiyatı ekliyoruz
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh && child.material) {
        // Mevcut dokuyu (texture) bozmamak için yeni materyal yaratmıyor, olanı modifiye ediyoruz
        child.material.roughness = 0.4;   
        child.material.metalness = 0.3;   
        child.material.envMapIntensity = 1.5;
        child.material.needsUpdate = true;
      }
    });
  }, [scene]);

  useFrame((state) => {
    // 1. Sürekli asil dönüş (Continuous rotation)
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.001; 
    }
    
    // 2. Süzülme (Floating) Efekti - Suyun altındaymış gibi pürüzsüz
    if (floatRef.current) {
      floatRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.08;
    }

    // 3. İnce Mouse Parallax
    if (groupRef.current) {
      const targetX = (state.pointer.x * Math.PI) / 20;
      const targetY = (state.pointer.y * Math.PI) / 20;
      
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -targetY, 0.04);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetX, 0.04);
    }
  });

  // Scroll animasyonu kaldırıldı, model artık kendi etrafında sonsuz dönüyor

  return (
    <>
      {/* Gizemli düşük ortam ışığı */}
      <ambientLight intensity={0.1} />
      
      {/* Keskin ve pürüzsüz Rim Light (Kenar ışığı) */}
      <spotLight 
        position={[5, 5, -8]} 
        intensity={25} 
        angle={0.6} 
        penumbra={1} 
        color="#ffffff" 
      />
      
      {/* Şampanya Rengi - Soft Fill */}
      <directionalLight 
        position={[-5, 2, 5]} 
        intensity={1.2} 
        color="#C5A77A" 
      />

      <Environment preset="city" /> 
      
      <group ref={groupRef}>
        <group ref={floatRef}>
          {/* Kreatif Direktör Kadrajı: Boyutu büyüttük, ancak açıyı ve konumu orijinaline yakın tutuyoruz */}
          <group ref={modelRef} rotation={[0.04, -0.05, 0]}>
            <primitive object={scene} scale={1.2} position={[0.8, -1.2, 0]} />
          </group>
        </group>
        
        {/* Zemin Temas Gölgesi (Orijinal) */}
        <ContactShadows 
          position={[1.0, -0.5, 0]} 
          opacity={0.6} 
          scale={15} 
          blur={3} 
          far={5} 
        />
      </group>
    </>
  );
}

useGLTF.preload('/models/bust.glb');
