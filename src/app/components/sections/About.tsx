'use client';

import React from 'react';
import { Briefcase, Code, Users, Globe } from 'lucide-react';

const About = () => {
  const journeyItems = [
    {
      icon: Briefcase,
      title: "Business Owner",
      description: "Founded Xtremery - PC repair and web services",
      color: "border-xtremery-purple",
      iconColor: "text-xtremery-purple"
    },
    {
      icon: Globe,
      title: "Web Developer",
      description: "Modern full-stack applications with Next.js",
      color: "border-xtremery-blue",
      iconColor: "text-xtremery-blue"
    },
    {
      icon: Code,
      title: "Developer",
      description: "TypeScript, React, Node.js, and modern frameworks",
      color: "border-aqua-spark",
      iconColor: "text-aqua-spark"
    },
    {
      icon: Users,
      title: "Coach",
      description: "Guided 100+ adult students to diplomas",
      color: "border-yellow-400",
      iconColor: "text-yellow-400"
    }
  ];

  return (
    <section id="about" className="py-20 bg-off-white pl-[22%]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-deep-navy mb-12">
          About Me
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Story Section */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I&apos;m a creative problem-solver who blends tech skills, street smarts, and empathy. 
              I don&apos;t have a traditional resume—because I&apos;ve never followed a traditional path.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              I build modern web applications, solve complex problems, and create digital solutions—and I 
              bring curiosity, technical expertise, and follow-through to everything I develop. If you&apos;re looking 
              for a checkbox candidate, keep scrolling. If you&apos;re looking for someone who builds great products 
              and collaborates effectively, let&apos;s talk.
            </p>
            
            {/* What I Bring */}
            <div className="pt-6">
              <h3 className="text-xl font-semibold text-deep-navy mb-4">What I Bring</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-xtremery-purple rounded-full mt-2 flex-shrink-0"></span>
                  <span>Real business experience (founded and run Xtremery)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-xtremery-blue rounded-full mt-2 flex-shrink-0"></span>
                  <span>Full-stack development with Next.js, React, and TypeScript</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-aqua-spark rounded-full mt-2 flex-shrink-0"></span>
                  <span>Creative problem-solving and user-focused design</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Communication skills from coaching 100+ students</span>
                </li>
              </ul>
            </div>

            {/* Personal Touch */}
            <div className="pt-6 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-deep-navy mb-3">Real Strengths</h3>
              <div className="space-y-3 text-gray-700">
                <p className="flex items-start gap-3">
                  <span className="text-xtremery-purple">✦</span>
                  <span>Figure-it-out energy. I&apos;ll Google it, build it, break it, fix it, and come back with a better version.</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-aqua-spark">✦</span>
                  <span>Empathy in every interaction—whether with clients, players, or students.</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-xtremery-blue">✦</span>
                  <span>Creative thinker who doesn&apos;t give up when things get weird or hard.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Journey Timeline */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-deep-navy mb-6">
              My Journey
            </h3>
            <div className="space-y-6">
              {journeyItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className={`border-l-4 ${item.color} pl-6 pb-6 last:pb-0`}>
                    <div className="flex items-center gap-3 mb-2">
                      <IconComponent size={20} className={item.iconColor} />
                      <h4 className="font-semibold text-deep-navy">{item.title}</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Call to Action */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-gray-600 mb-4">
                Ready to see how this diverse background translates into real solutions?
              </p>
              <button 
                onClick={() => {
                  const element = document.querySelector('#projects');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-xtremery-purple text-white px-6 py-2 rounded-lg hover:bg-xtremery-purple/90 transition-colors duration-300 font-medium"
              >
                View My Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;