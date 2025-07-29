'use client';

import React from 'react';
import { 
  Database, 
  Gamepad2, 
  Briefcase, 
  Monitor, 
  Palette,
  Brain,
  Users
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Monitor,
      description: "Modern web interfaces and user experiences",
      skills: [
        { name: "React", level: 95, color: "bg-aqua-spark" },
        { name: "Next.js", level: 90, color: "bg-aqua-spark" },
        { name: "TypeScript", level: 85, color: "bg-xtremery-blue" },
        { name: "Tailwind CSS", level: 90, color: "bg-xtremery-purple" },
        { name: "Framer Motion", level: 80, color: "bg-yellow-400" },
        { name: "HTML/CSS", level: 95, color: "bg-green-400" }
      ],
      color: "border-aqua-spark",
      iconColor: "text-aqua-spark",
      bgColor: "bg-aqua-spark/10"
    },
    {
      title: "Backend & Database",
      icon: Database,
      description: "Server-side logic and data management",
      skills: [
        { name: "Node.js", level: 85, color: "bg-green-400" },
        { name: "PostgreSQL", level: 80, color: "bg-xtremery-blue" },
        { name: "Prisma ORM", level: 85, color: "bg-xtremery-purple" },
        { name: "Supabase", level: 80, color: "bg-aqua-spark" },
        { name: "API Development", level: 85, color: "bg-yellow-400" },
        { name: "PHP", level: 75, color: "bg-purple-400" }
      ],
      color: "border-xtremery-blue",
      iconColor: "text-xtremery-blue",
      bgColor: "bg-xtremery-blue/10"
    },
    {
      title: "Game Development",
      icon: Gamepad2,
      description: "Interactive experiences and game mechanics",
      skills: [
        { name: "Unreal Engine", level: 85, color: "bg-xtremery-purple" },
        { name: "Blueprint Scripting", level: 80, color: "bg-xtremery-blue" },
        { name: "Level Design", level: 85, color: "bg-aqua-spark" },
        { name: "Game Design", level: 90, color: "bg-yellow-400" },
        { name: "HTML5 Canvas", level: 75, color: "bg-green-400" },
        { name: "Physics Systems", level: 70, color: "bg-red-400" }
      ],
      color: "border-xtremery-purple",
      iconColor: "text-xtremery-purple",
      bgColor: "bg-xtremery-purple/10"
    },
    {
      title: "Business & Operations",
      icon: Briefcase,
      description: "Real-world business and entrepreneurship",
      skills: [
        { name: "Business Operations", level: 95, color: "bg-yellow-400" },
        { name: "Customer Service", level: 90, color: "bg-aqua-spark" },
        { name: "Project Management", level: 85, color: "bg-xtremery-blue" },
        { name: "SEO & Marketing", level: 80, color: "bg-green-400" },
        { name: "Branding & Design", level: 85, color: "bg-xtremery-purple" },
        { name: "Problem Solving", level: 95, color: "bg-red-400" }
      ],
      color: "border-yellow-400",
      iconColor: "text-yellow-400",
      bgColor: "bg-yellow-400/10"
    }
  ];

  const tools = [
    { name: "VS Code", category: "Development" },
    { name: "Git & GitHub", category: "Version Control" },
    { name: "Figma", category: "Design" },
    { name: "Vercel", category: "Deployment" },
    { name: "WordPress", category: "CMS" },
    { name: "Sanity", category: "Headless CMS" },
    { name: "Adobe Creative Suite", category: "Design" },
    { name: "Blender", category: "3D Modeling" }
  ];

  const softSkills = [
    { 
      icon: Brain, 
      title: "Creative Problem Solving", 
      description: "Figure-it-out energy - I'll Google it, build it, break it, fix it, and come back with a better version.",
      color: "text-aqua-spark"
    },
    { 
      icon: Users, 
      title: "Communication & Empathy", 
      description: "From coaching 100+ students to serving customers - I connect with people and help them succeed.",
      color: "text-xtremery-purple"
    },
    { 
      icon: Briefcase, 
      title: "Business Understanding", 
      description: "Real experience running Xtremery means I understand what businesses actually need to succeed.",
      color: "text-xtremery-blue"
    },
    { 
      icon: Palette, 
      title: "Creative Vision", 
      description: "Game design background brings creative thinking to technical challenges and user experiences.",
      color: "text-yellow-400"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-off-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-deep-navy mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            A diverse skill set built through real projects, actual business experience, 
            and a passion for creating things that work for real people.
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className={`bg-white rounded-lg p-6 border-t-4 ${category.color} shadow-lg`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-lg ${category.bgColor}`}>
                    <IconComponent size={24} className={category.iconColor} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-deep-navy">{category.title}</h3>
                    <p className="text-gray-600 text-sm">{category.description}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-gray-500 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Soft Skills */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-deep-navy text-center mb-8">What Makes Me Different</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className={`inline-flex p-4 rounded-full bg-gray-100 mb-4`}>
                    <IconComponent size={32} className={skill.color} />
                  </div>
                  <h4 className="text-lg font-semibold text-deep-navy mb-3">{skill.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{skill.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-deep-navy text-center mb-8">Tools & Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {tools.map((tool, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-100 rounded-lg p-4 mb-2 hover:bg-gray-200 transition-colors duration-300">
                  <span className="text-deep-navy font-medium text-sm">{tool.name}</span>
                </div>
                <span className="text-gray-500 text-xs">{tool.category}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Summary */}
        <div className="mt-16 text-center">
          <div className="bg-deep-navy rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Experience Summary</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold text-aqua-spark mb-2">3+</div>
                <div className="text-gray-300">Years UE5</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-xtremery-purple mb-2">9+</div>
                <div className="text-gray-300">Projects Built</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-xtremery-blue mb-2">100+</div>
                <div className="text-gray-300">Students Coached</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">1</div>
                <div className="text-gray-300">Real Business Built</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-deep-navy mb-4">
            Ready to put these skills to work?
          </h3>
          <p className="text-gray-700 mb-6">
            Let&apos;s discuss how my unique combination of technical and business skills can help your project succeed.
          </p>
          <button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-xtremery-purple text-white px-8 py-3 rounded-lg hover:bg-xtremery-purple/90 transition-all duration-300 font-medium hover:scale-105"
          >
            Let&apos;s Talk
          </button>
        </div>
      </div>
    </section>
  );
};

export default Skills;