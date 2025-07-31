'use client';

import React, { useState, useEffect } from 'react';
import { User, Info, Briefcase, Code2, Mail } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ContextMenu from './ContextMenu';
import AtomLoader from './AtomLoader';

interface SidebarProps {
  onHueChange: (hue1: number, hue2: number) => void;
  onTriggerAnimation: () => void;
}

const navItems = [
  { name: 'About', href: '#about', icon: Info, tooltip: 'Learn more about my background and experience' },
  { name: 'Projects', href: '#projects', icon: Briefcase, tooltip: 'Check out my latest game and web projects' },
  { name: 'Skills', href: '#skills', icon: Code2, tooltip: 'Explore my technical skills in game dev and full-stack' },
  { name: 'Contact', href: '#contact', icon: Mail, tooltip: 'Get in touch for collaborations or opportunities' },
];

const funQuotes = [
  "Code is like humor. When you have to explain it, it’s bad. – Cory House",
  "First, solve the problem. Then, write the code. – John Johnson",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. – Martin Fowler",
  "In game dev, the real challenge is making AI that's smart enough to be fun, but dumb enough to beat. – Hunter Coleman",
];

const Sidebar: React.FC<SidebarProps> = ({ onHueChange, onTriggerAnimation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('');
  const [randomQuote, setRandomQuote] = useState('');

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      const sections = navItems.map((item) => ({
        id: item.href.replace('#', ''),
        element: document.getElementById(item.href.replace('#', '')),
      }));

      let currentSection = '';
      for (const section of sections) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = `#${section.id}`;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const quote = funQuotes[Math.floor(Math.random() * funQuotes.length)];
    setRandomQuote(quote);
  }, []);

  const sidebarVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const navListVariants = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      className={`fixed top-0 left-0 h-screen w-[30%] backdrop-blur-sm bg-black/10 z-40 flex flex-col justify-center transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-md bg-black/20' : 'backdrop-blur-sm bg-black/10'
      }`}
      initial="hidden"
      animate="visible"
      variants={sidebarVariants}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {/* Scroll Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-white/10">
        <div
          className="h-full bg-[#00FFD1] transition-all duration-300 shadow-[0_0_10px_#00FFD1]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Profile Section */}
      <motion.div
        className="p-10 pb-6 flex flex-col items-center border-b border-white/10 bg-black/20 backdrop-blur-sm rounded-lg mx-4"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative mb-4 group">
          <Image
            src="/images/headshot.jpg"
            alt="Hunter Coleman"
            width={120}
            height={120}
            className="rounded-full border-4 border-[#00FFD1]/50 shadow-[0_0_20px_rgba(0,255,209,0.3)] object-cover transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(0,255,209,0.6)] group-hover:rotate-6"
          />
          <div className="absolute -bottom-2 -right-2 bg-[#00FFD1] text-[#111827] rounded-full p-1 shadow-[0_0_10px_#00FFD1] transition-all duration-300 group-hover:scale-110">
            <User size={16} />
          </div>
        </div>
        <button
          onClick={() => scrollToSection('#hero')}
          className="text-xl font-bold text-white hover:text-[#00FFD1] transition-colors duration-300 drop-shadow-lg"
        >
          Hunter Coleman
        </button>
        <p className="text-sm text-[#00FFD1] mt-1 drop-shadow-lg">Game & Full-Stack Developer</p>
      </motion.div>
       <AtomLoader />

      {/* Navigation Items */}
      <nav className="p-6 flex-1 flex items-center">
        <motion.ul
          className="w-full space-y-4"
          initial="hidden"
          animate="visible"
          variants={navListVariants}
        >
          {navItems.map((item, index) => {
            const IconComponent = item.icon;
            const isActive = activeSection === item.href;
            return (
              <motion.li
                key={item.name}
                variants={navItemVariants}
                className="relative group"
              >
                <button
                  onClick={() => scrollToSection(item.href)}
                  className={`w-full flex items-center gap-3 py-3 px-4 rounded-lg transition-all duration-300 font-medium relative overflow-hidden backdrop-blur-sm ${
                    isActive
                      ? 'text-[#00FFD1] bg-white/20 shadow-[0_0_15px_rgba(0,255,209,0.3)]'
                      : 'text-white/90 hover:text-[#00FFD1] hover:bg-white/10 hover:shadow-[0_0_10px_rgba(0,255,209,0.2)]'
                  }`}
                >
                  <motion.div
                    className="absolute left-0 top-0 h-full w-0 bg-[#00FFD1]/30 transition-all duration-500 group-hover:w-full"
                    style={{ zIndex: 0 }}
                  />
                  <motion.div
                    style={{ zIndex: 1 }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <IconComponent
                      size={20}
                      className={`${
                        isActive ? 'text-[#00FFD1]' : 'text-[#00FFD1]/70'
                      } group-hover:text-[#00FFD1] transition-colors duration-300 drop-shadow-lg`}
                    />
                  </motion.div>
                  <span style={{ zIndex: 1 }} className="drop-shadow-lg">{item.name}</span>
                </button>
                <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-3 py-1 bg-black/80 backdrop-blur-md text-white text-sm rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-[#00FFD1]/20">
                  {item.tooltip}
                </div>
              </motion.li>
            );
          })}
        </motion.ul>
      </nav>

      {/* Fun Quote Section */}
      <div className="p-6 border-t border-white/10 text-center text-sm text-white/80 bg-black/20 backdrop-blur-sm rounded-lg mx-4 mb-4">
        <p className="mb-2 italic text-[#00FFD1]/90 drop-shadow-lg">"{randomQuote}"</p>
        <span className="drop-shadow-lg">© {new Date().getFullYear()} Hunter Coleman</span>
      </div>

      {/* Context Menu */}
      <ContextMenu onHueChange={onHueChange} onTriggerAnimation={onTriggerAnimation} />
    </motion.div>
  );
};

export default Sidebar;