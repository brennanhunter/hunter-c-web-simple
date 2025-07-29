'use client';

import React from 'react';
import { Mail, MapPin, ArrowDown } from 'lucide-react';

const Hero = () => {
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
    <section id="hero" className="min-h-screen bg-gradient-to-br from-deep-navy via-gray-800 to-xtremery-purple flex items-center">
      <div className="max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="max-w-4xl">
          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Hunter Coleman
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl text-aqua-spark mb-8 font-medium">
            Full-Stack Developer
          </h2>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl">
            Building businesses and the code that runs them. From PC repair shops to web applications, 
            I create solutions that actually work for real people.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
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
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-gray-400 mb-16">
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
          <div className="hidden md:flex flex-col items-center gap-2 text-gray-400">
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown 
              size={20} 
              className="animate-bounce text-aqua-spark" 
            />
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-deep-navy to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;