'use client';

import React, { useEffect, useRef } from 'react';
import { Mail, MapPin, ArrowDown } from 'lucide-react';
import * as THREE from 'three';

const Hero: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    let camera: THREE.PerspectiveCamera;
    let scene: THREE.Scene;
    let renderer: THREE.WebGLRenderer;
    let clock: THREE.Clock;
    let light: THREE.DirectionalLight;
    let smokeTexture: THREE.Texture;
    let smokeMaterial: THREE.MeshLambertMaterial;
    let smokeGeo: THREE.PlaneGeometry;
    let smokeParticles: THREE.Mesh[] = [];

    const init = async () => {
      clock = new THREE.Clock();

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 1); // Black background like original
      rendererRef.current = renderer;

      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
      camera.position.z = 1000;

      light = new THREE.DirectionalLight(0xffffff, 0.5);
      light.position.set(-1, 0, 1);
      scene.add(light);

      // Load the original smoke texture
      const loader = new THREE.TextureLoader();
      loader.crossOrigin = 'anonymous';
      
      try {
        smokeTexture = await new Promise<THREE.Texture>((resolve, reject) => {
          loader.load(
            'https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/Smoke-Element.png',
            resolve,
            undefined,
            reject
          );
        });
        console.log('Original smoke texture loaded successfully!');
      } catch (error) {
        console.log('Could not load smoke texture, using fallback');
        // Fallback to canvas-generated smoke
        const smokeCanvas = document.createElement('canvas');
        smokeCanvas.width = 256;
        smokeCanvas.height = 256;
        const smokeCtx = smokeCanvas.getContext('2d')!;
        
        const gradient = smokeCtx.createRadialGradient(128, 128, 0, 128, 128, 128);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.3, 'rgba(255, 255, 255, 0.8)');
        gradient.addColorStop(0.7, 'rgba(255, 255, 255, 0.3)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        smokeCtx.fillStyle = gradient;
        smokeCtx.fillRect(0, 0, 256, 256);
        
        smokeTexture = new THREE.CanvasTexture(smokeCanvas);
      }

      smokeMaterial = new THREE.MeshLambertMaterial({
        color: 0x00dddd,
        map: smokeTexture,
        transparent: true
        // Keep original opacity for authentic look
      });
      
      smokeGeo = new THREE.PlaneGeometry(300, 300);
      smokeParticles = [];

      // Create particles exactly like the original
      for (let p = 0; p < 150; p++) {
        const particle = new THREE.Mesh(smokeGeo, smokeMaterial);
        particle.position.set(
          Math.random() * 500 - 250,
          Math.random() * 500 - 250,
          Math.random() * 1000 - 100
        );
        particle.rotation.z = Math.random() * 360;
        scene.add(particle);
        smokeParticles.push(particle);
      }

      if (mountRef.current) {
        mountRef.current.appendChild(renderer.domElement);
      }

      // Start animation
      animate();
    };

    const evolveSmoke = (delta: number) => {
      const sp = smokeParticles.length;
      for (let i = sp - 1; i >= 0; i--) {
        smokeParticles[i].rotation.z += delta * 0.2;
      }
    };

    const animate = () => {
      const delta = clock.getDelta();
      evolveSmoke(delta);
      renderer.render(scene, camera);
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      if (camera && renderer) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }
    };

    // Initialize
    init();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      
      if (rendererRef.current && mountRef.current) {
        try {
          mountRef.current.removeChild(rendererRef.current.domElement);
        } catch (e) {
          console.log('Element already removed');
        }
        rendererRef.current.dispose();
      }

      // Clean up
      smokeParticles.forEach(particle => {
        if (particle.geometry) particle.geometry.dispose();
        if (particle.material && !Array.isArray(particle.material)) {
          particle.material.dispose();
        }
      });
    };
  }, []);

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: '#000' }} // Black background like original
    >
      {/* WebGL Canvas - same as original CodePen */}
      <div 
        ref={mountRef} 
        className="absolute inset-0"
      />
      
      {/* Your Hero Content - positioned where the "SMOKE" text was */}
      <div 
        className="absolute inset-0 flex items-center justify-center z-10"
        style={{ transform: 'translateZ(800px)' }} // Same Z position as original text
      >
        <div className="text-center max-w-4xl px-6">
          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Hunter Coleman
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl text-aqua-spark mb-8 font-medium">
            Full-Stack Developer
          </h2>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Building businesses and the code that runs them. From PC repair shops to web applications, 
            I create solutions that actually work for real people.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
            <button 
              onClick={scrollToProjects}
              className="bg-aqua-spark text-deep-navy px-8 py-3 rounded-lg hover:bg-aqua-spark/90 transition-all duration-300 font-medium hover:scale-105"
            >
              View My Work
            </button>
            <button 
              onClick={scrollToContact}
              className="border-2 border-xtremery-purple text-white px-8 py-3 rounded-lg hover:bg-xtremery-purple/20 transition-all duration-300 font-medium"
            >
              Get In Touch
            </button>
          </div>
          
          {/* Contact info */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-gray-400 mb-16 justify-center">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-aqua-spark" />
              <span>DeLand, FL</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-aqua-spark" />
              <a 
                href="mailto:hunter@xtremery.com"
                className="hover:text-aqua-spark transition-colors duration-300"
              >
                hunter@xtremery.com
              </a>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="flex flex-col items-center gap-2 text-gray-400">
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown 
              size={20} 
              className="animate-bounce text-aqua-spark" 
            />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;