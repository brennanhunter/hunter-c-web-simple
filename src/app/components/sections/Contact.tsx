'use client';

import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, ExternalLink, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/xwpolbjr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hunter@xtremery.com',
      href: 'mailto:hunter@xtremery.com',
      color: 'text-aqua-spark'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '(406) 868-5850',
      href: 'tel:+14068685850',
      color: 'text-xtremery-blue'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'DeLand, FL',
      href: null,
      color: 'text-xtremery-purple'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/brennanhunter',
      color: 'hover:text-aqua-spark'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/huntercdesign/',
      color: 'hover:text-xtremery-blue'
    },
    {
      icon: ExternalLink,
      label: 'Xtremery',
      href: 'https://xtremery.com',
      color: 'hover:text-xtremery-purple'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-deep-navy">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let&apos;s Build Something Together
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            If you&apos;re looking for someone with a bulletproof path and a Fortune 500 pedigree, I&apos;m probably not your guy. 
            But if you want someone who&apos;s smart, scrappy, and brings real-world results to the table—I&apos;m ready to go.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Ready to discuss your next project? Whether you need a full-stack developer who understands business, 
                someone to build your SaaS platform, or just want to chat about tech and games - I&apos;d love to hear from you.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <div key={index} className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg bg-gray-800 ${method.color}`}>
                      <IconComponent size={20} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{method.label}</p>
                      {method.href ? (
                        <a 
                          href={method.href}
                          className={`text-white hover:${method.color.replace('text-', 'text-')} transition-colors duration-300 font-medium`}
                        >
                          {method.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium">{method.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-lg font-semibold text-white mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-gray-800 rounded-lg text-gray-400 ${link.color} transition-all duration-300 hover:transform hover:scale-105`}
                      aria-label={link.label}
                    >
                      <IconComponent size={20} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* What I'm Looking For */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-white mb-3">What I&apos;m Looking For</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-aqua-spark rounded-full mt-2 flex-shrink-0"></span>
                  <span>Full-stack development opportunities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-xtremery-purple rounded-full mt-2 flex-shrink-0"></span>
                  <span>SaaS platform and business application projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-xtremery-blue rounded-full mt-2 flex-shrink-0"></span>
                  <span>Game development and interactive experiences</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Local business websites and digital solutions</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-900/50 border border-green-500 rounded-lg flex items-center gap-3">
                <CheckCircle size={20} className="text-green-400" />
                <span className="text-green-300">Message sent successfully! I&apos;ll get back to you soon.</span>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-900/50 border border-red-500 rounded-lg flex items-center gap-3">
                <AlertCircle size={20} className="text-red-400" />
                <span className="text-red-300">Something went wrong. Please try again or contact me directly.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-aqua-spark transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-aqua-spark transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-aqua-spark transition-colors duration-300"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-aqua-spark transition-colors duration-300 resize-vertical"
                  placeholder="Tell me about your project, what you're looking for, or just say hi!"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-aqua-spark text-deep-navy px-8 py-3 rounded-lg font-medium hover:bg-aqua-spark/90 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-deep-navy/30 border-t-deep-navy rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-700">
              <p className="text-gray-400 text-sm">
                Prefer email? You can reach me directly at{' '}
                <a 
                  href="mailto:hunter@xtremery.com" 
                  className="text-aqua-spark hover:text-white transition-colors duration-300"
                >
                  hunter@xtremery.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 pt-16 border-t border-gray-800">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Something Great?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Whether you need a developer who gets business, want to build the next big SaaS platform, 
            or just want to chat about accessibility in gaming - let&apos;s make it happen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hunter@xtremery.com"
              className="bg-xtremery-purple text-white px-8 py-3 rounded-lg hover:bg-xtremery-purple/90 transition-all duration-300 font-medium hover:scale-105"
            >
              Email Me Directly
            </a>
            <a
              href="tel:+14068685850"
              className="border-2 border-aqua-spark text-aqua-spark px-8 py-3 rounded-lg hover:bg-aqua-spark hover:text-deep-navy transition-all duration-300 font-medium"
            >
              Call Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;