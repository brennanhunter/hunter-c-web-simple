'use client';

import { useState } from 'react';
import Contact from './components/sections/Contact';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Sidebar from './components/sections/Sidebar';
import { motion } from 'framer-motion';
import Hero from './components/sections/Hero';

export default function Home() {
  const [hue1, setHue1] = useState(120 + Math.floor(Math.random() * 240));
  const [hue2, setHue2] = useState(hue1 - 80 + Math.floor(Math.random() * 60) - 30);
  const [animateSections, setAnimateSections] = useState(false);

  const handleHueChange = (newHue1: number, newHue2: number) => {
    setHue1(newHue1);
    setHue2(newHue2);
  };

  const triggerAnimation = () => {
    setAnimateSections(true);
    setTimeout(() => setAnimateSections(false), 500); // Reset after 500ms
  };

  const sectionVariants = {
    initial: { opacity: 1, y: 0 },
    animate: {
      y: [0, -10, 10, -10, 10, 0],
      transition: { duration: 0.4 },
    },
  };

  return (
    <div
      className="flex flex-row min-h-screen text-white"
      style={{
        background: `linear-gradient(135deg, hsl(${hue1}, 70%, 20%), hsl(${hue2}, 70%, 15%), hsl(${hue1}, 70%, 20%))`,
        backgroundSize: '200% 200%',
        animation: 'gradient 15s ease infinite',
      }}
    >
      <Sidebar onHueChange={handleHueChange} onTriggerAnimation={triggerAnimation} />
      <motion.div
        className="flex-1"
        variants={sectionVariants}
        animate={animateSections ? 'animate' : 'initial'}
      >
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </motion.div>
    </div>
  );
}