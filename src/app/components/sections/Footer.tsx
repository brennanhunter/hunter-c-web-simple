'use client';

import React from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Email',
      href: 'mailto:hunter@xtremery.com',
      icon: Mail,
      color: 'hover:text-[#00FFD1]'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/brennanhunter',
      icon: Github,
      color: 'hover:text-[#00FFD1]'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/huntercdesign/',
      icon: Linkedin,
      color: 'hover:text-[#00FFD1]'
    },
    {
      name: 'Xtremery',
      href: 'https://xtremery.com',
      icon: ExternalLink,
      color: 'hover:text-[#7C3AED]'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111827] border-t border-[#7C3AED]/20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold text-white hover:text-[#00FFD1] transition-colors duration-300"
            >
              Hunter Coleman
            </button>
            <p className="text-gray-400 leading-relaxed">
              Full-stack developer building businesses and the code that runs them.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <a href="#about" className="text-gray-400 hover:text-[#00FFD1] transition-colors duration-300">
                About
              </a>
              <a href="#projects" className="text-gray-400 hover:text-[#00FFD1] transition-colors duration-300">
                Projects
              </a>
              <a href="#skills" className="text-gray-400 hover:text-[#00FFD1] transition-colors duration-300">
                Skills
              </a>
              <a href="#contact" className="text-gray-400 hover:text-[#00FFD1] transition-colors duration-300">
                Contact
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Get In Touch</h3>
            <div className="space-y-2">
              <p className="text-gray-400">DeLand, FL</p>
              <a 
                href="mailto:hunter@xtremery.com"
                className="text-gray-400 hover:text-[#00FFD1] transition-colors duration-300 block"
              >
                hunter@xtremery.com
              </a>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-gray-400 ${link.color} transition-colors duration-300 p-2 rounded-lg hover:bg-gray-800`}
                aria-label={link.name}
                target={link.name === 'Xtremery' ? '_blank' : undefined}
                rel={link.name === 'Xtremery' ? 'noopener noreferrer' : undefined}
              >
                <IconComponent size={20} />
              </a>
            );
          })}
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-gray-800">
          <p className="text-gray-400">
            © {currentYear} Hunter Coleman. Built with Next.js and way too much coffee.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;