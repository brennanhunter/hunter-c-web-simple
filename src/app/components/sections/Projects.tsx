'use client';

import React, { useState } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight, X } from 'lucide-react';
import Image from 'next/image';

interface ProjectLinks {
  live?: string;
  github?: string | null;
}

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  detailedDescription?: string;
  highlights?: string[];
  tech: string[];
  images: string[];
  links: ProjectLinks;
  status?: string;
  color: string;
  accentColor?: string;
  bgColor?: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Featured Projects (3 main ones)
  const featuredProjects: Project[] = [
    {
      id: 'servicepro',
      title: "ServicePro CRM",
      subtitle: "Production SaaS Platform & Multi-Tenant System",
      description: "A white-label SaaS platform for local service businesses with enterprise-level multi-tenancy, complete CRM functionality, and real-time analytics. Production-ready with actual business validation.",
      detailedDescription: "ServicePro CRM is a production-ready, multi-tenant SaaS platform designed for local service businesses (HVAC, plumbing, computer repair, etc.) with 1-20 employees. Features enterprise-level multi-tenancy with proper data isolation, complete CRM functionality, real-time analytics, and is currently being evolved into Serviceflow by Xtremery.",
      highlights: [
        "Enterprise-level multi-tenancy with secure data isolation",
        "Complete CRM with customer management and service tracking",
        "Real-time dashboard with business analytics and metrics",
        "Production deployment serving actual businesses",
        "PostgreSQL with Prisma ORM and complex relationships"
      ],
      tech: ["Next.js 15", "React 19", "TypeScript", "PostgreSQL", "Prisma ORM", "Supabase Auth", "Tailwind CSS"],
      images: [
        "/images/ServicePro/Dashboard.png",
        "/images/ServicePro/Custom.png", 
        "/images/ServicePro/Signup.png"
      ],
      links: {
        live: "https://service-pro-crm.vercel.app/",
        github: null
      },
      status: "Production SaaS",
      color: "border-xtremery-purple",
      accentColor: "text-xtremery-purple",
      bgColor: "bg-xtremery-purple/10"
    },
    {
      id: 'xtremery',
      title: "Xtremery",
      subtitle: "Real Business with Interactive Bounce Game",
      description: "Comprehensive tech service website for my actual DeLand, FL business featuring a custom physics-based game, AI chatbot, and advanced animations. Real business serving real customers.",
      detailedDescription: "Xtremery is a comprehensive tech service website for my local DeLand, FL computer repair and web development business. Features a fully custom-built interactive physics game (Bounce Target Game), AI customer support chatbot powered by Gemini API, advanced animations, and sophisticated user interaction design optimized for lead generation.",
      highlights: [
        "Custom physics-based Bounce Target Game with 60fps animations",
        "AI customer support chatbot using Google Gemini API",
        "Advanced interactive design with mouse-tracking parallax effects",
        "Real business serving actual customers in DeLand, FL",
        "Dual service pathways for PC repair vs web design"
      ],
      tech: ["Next.js 15", "TypeScript", "Framer Motion", "HTML5 Canvas", "Google Gemini API", "Sanity CMS", "Tailwind CSS"],
      images: [
        "/images/Xtremery/Hero.png",
        "/images/Xtremery/BounceTargetGame.png",
        "/images/Xtremery/Blog.png"
      ],
      links: {
        live: "https://xtremery.com",
        github: null
      },
      status: "Live Business",
      color: "border-aqua-spark",
      accentColor: "text-aqua-spark", 
      bgColor: "bg-aqua-spark/10"
    },
    {
      id: 'ridam',
      title: "Ridam Portfolio",
      subtitle: "Advanced Interactive Portfolio & Client Showcase",
      description: "Cutting-edge portfolio application showcasing advanced web development techniques with sophisticated animation systems, custom media players, and distinctive cyberpunk aesthetic.",
      detailedDescription: "Ridam Rana's Portfolio is a cutting-edge full-stack portfolio application built with the latest web technologies including Next.js 15, React 19, and TypeScript. Features sophisticated animation systems, custom media players, and professional presentation of creative projects with a distinctive cyberpunk aesthetic.",
      highlights: [
        "Latest technology stack with Next.js 15 and React 19",
        "Custom video players with hover controls and accessibility",
        "Advanced animation system with Framer Motion 12.18.1", 
        "Distinctive cyberpunk visual design with neon gradients",
        "Multi-media project showcase supporting video, images, and PDFs"
      ],
      tech: ["Next.js 15", "React 19", "TypeScript", "Framer Motion", "Tailwind CSS 4", "Custom Video Players"],
      images: [
        "/images/Ridam/Hero.png",
        "/images/Ridam/GameCards.png",
        "/images/Ridam/Skills.png"
      ],
      links: {
        live: "https://ridam-rana-portfolio.vercel.app/",
        github: null
      },
      status: "Client Work",
      color: "border-xtremery-blue",
      accentColor: "text-xtremery-blue",
      bgColor: "bg-xtremery-blue/10"
    }
  ];

  // Additional Projects
  const additionalProjects: Project[] = [
    {
      id: 'huntercgaming',
      title: "Hunter C Gaming",
      subtitle: "Interactive Game Developer Portfolio",
      description: "Advanced interactive portfolio with custom physics game demonstrating game development expertise and accessible design philosophy.",
      tech: ["Next.js 15", "React 19", "TypeScript", "HTML5 Canvas", "Framer Motion"],
      images: [
        "/images/HunterC/Hero.png",
        "/images/HunterC/Featured.png", 
        "/images/HunterC/Personal.png"
      ],
      links: { live: "https://huntercgaming.com", github: null },
      color: "border-yellow-400"
    },
    {
      id: 'bigsky3d',
      title: "Big Sky 3D Prints",
      subtitle: "Interactive Animation Showcase",
      description: "Advanced scroll-based storytelling with weather narrative, GSAP animations, and Montana wilderness theme integration.",
      tech: ["Next.js 15", "GSAP ScrollTrigger", "Canvas Animation", "TypeScript"],
      images: [
        "/images/BigSky/Hero.png",
        "/images/BigSky/StoreCards.png",
        "/images/BigSky/CTA.png"
      ],
      links: { live: "https://big-sky3-d-prints.vercel.app/", github: null },
      color: "border-green-400"
    },
    {
      id: 'reeftech',
      title: "ReefTech Solutions",
      subtitle: "Premium Smart Home Integration",
      description: "Comprehensive Next.js business website for smart home integration company serving Big Island, Hawaii with advanced SEO.",
      tech: ["Next.js 15", "TypeScript", "Tailwind CSS", "Local SEO"],
      images: [
        "/images/ReefTech/Hero.png",
        "/images/ReefTech/Featured.png",
        "/images/ReefTech/Process.png"
      ],
      links: { live: "https://reeftech.io", github: null },
      color: "border-cyan-400"
    },
    {
      id: 'dands',
      title: "D&S Property Management",
      subtitle: "Local Business Lead Generation",
      description: "Professional property management website for Great Falls, MT business with 20+ years experience, featuring local SEO optimization.",
      tech: ["Next.js", "React", "TypeScript", "Local SEO", "Tailwind CSS"],
      images: [
        "/images/DandS/Hero.png",
        "/images/DandS/FAQ.png",
        "/images/DandS/Contact.png"
      ],
      links: { live: "https://dnspropertymanagement.com", github: null },
      color: "border-orange-400"
    },
    {
      id: 'atharva',
      title: "Atharva Portfolio",
      subtitle: "3D Environment Artist Showcase",
      description: "Sophisticated showcase for 3D Environment Artist & Game Developer with interactive galleries and published games presentation.",
      tech: ["Next.js 15", "TypeScript", "Tailwind CSS", "Interactive Galleries"],
      images: [
        "/images/Atharva/Hero.png",
        "/images/Atharva/Modal.png",
        "/images/Atharva/Published.png"
      ],
      links: { live: "https://atharva-portfolio-kappa.vercel.app/", github: null },
      color: "border-purple-400"
    },
    {
      id: 'sirroc',
      title: "SIR ROC Streaming",
      subtitle: "Streaming Platform UI Concept",
      description: "Frontend prototype for premium combat sports streaming service showcasing modern React development and UI/UX design concepts.",
      tech: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS 4"],
      images: [
        "/images/SirRoc/Main.png",
        "/images/SirRoc/Browse.png",
        "/images/SirRoc/Fight.png"
      ],
      links: { live: "https://sir-roc-streaming.vercel.app/", github: null },
      color: "border-red-400"
    }
  ];

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  const ProjectCard = ({ project, featured = false }: { project: Project; featured?: boolean }) => (
    <div 
      className={`
        ${featured ? 'bg-gray-800' : 'bg-gray-800/80'} 
        rounded-lg p-6 border-l-4 ${project.color} 
        hover:transform hover:scale-[1.02] transition-all duration-300 shadow-lg
        ${featured ? 'lg:col-span-1' : ''}
      `}
    >
      {/* Project Image */}
      <div className="relative mb-6 rounded-lg overflow-hidden group cursor-pointer" onClick={() => openModal(project)}>
        <Image
          src={project.images[0]}
          alt={`${project.title} screenshot`}
          width={600}
          height={400}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-white font-medium">View Gallery</span>
        </div>
      </div>

      {/* Project Info */}
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-2">
          <h3 className={`text-xl font-bold text-white ${featured ? 'text-2xl' : ''}`}>
            {project.title}
          </h3>
          {project.status && (
            <span className={`text-sm font-medium px-3 py-1 rounded-full ${project.bgColor} ${project.accentColor}`}>
              {project.status}
            </span>
          )}
        </div>
        
        <p className={`font-medium ${project.accentColor || 'text-gray-300'} ${featured ? 'text-lg' : ''}`}>
          {project.subtitle}
        </p>

        <p className="text-gray-300 leading-relaxed">
          {project.description}
        </p>

        {featured && project.highlights && (
          <div>
            <h4 className="text-white font-semibold mb-2">Key Highlights:</h4>
            <ul className="space-y-1">
              {project.highlights.slice(0, 3).map((highlight: string, index: number) => (
                <li key={index} className="flex items-start gap-2 text-gray-300 text-sm">
                  <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${project.accentColor?.replace('text-', 'bg-')}`}></span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack */}
        <div>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.slice(0, featured ? 6 : 4).map((tech: string, index: number) => (
              <span 
                key={index} 
                className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm hover:bg-gray-600 transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-4">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 ${project.accentColor || 'text-aqua-spark'} hover:text-white transition-colors duration-300 font-medium`}
            >
              <ExternalLink size={16} />
              View Live
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 font-medium"
            >
              <Github size={16} />
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 bg-deep-navy">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real projects with real impact. From production SaaS platforms to local businesses 
            to creative showcases - here&apos;s how I solve problems and create value.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} featured={true} />
          ))}
        </div>

        {/* Additional Projects Header */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-4">Additional Projects</h3>
          <p className="text-lg text-gray-300">
            More examples of my work across different industries and technologies
          </p>
        </div>

        {/* Additional Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {additionalProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Want to see more or discuss a project?
          </h3>
          <p className="text-gray-300 mb-6">
            I&apos;m always excited to talk about new challenges and opportunities.
          </p>
          <button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-aqua-spark text-deep-navy px-8 py-3 rounded-lg hover:bg-aqua-spark/90 transition-all duration-300 font-medium hover:scale-105"
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Modal Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
                  <p className={`font-medium ${selectedProject.accentColor}`}>{selectedProject.subtitle}</p>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Image Gallery */}
              <div className="relative mb-6">
                <div className="relative rounded-lg overflow-hidden">
                  <Image
                    src={selectedProject.images[currentImageIndex]}
                    alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                    width={800}
                    height={500}
                    className="w-full h-auto"
                  />
                  
                  {/* Navigation Arrows */}
                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </>
                  )}
                </div>

                {/* Image Indicators */}
                {selectedProject.images.length > 1 && (
                  <div className="flex justify-center gap-2 mt-4">
                    {selectedProject.images.map((_: string, index: number) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentImageIndex ? 'bg-aqua-spark' : 'bg-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Detailed Description */}
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  {selectedProject.detailedDescription || selectedProject.description}
                </p>

                {selectedProject.highlights && (
                  <div>
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {selectedProject.highlights.map((highlight: string, index: number) => (
                        <li key={index} className="flex items-start gap-3 text-gray-300">
                          <span className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${selectedProject.accentColor?.replace('text-', 'bg-')}`}></span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Stack */}
                <div>
                  <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech: string, index: number) => (
                      <span 
                        key={index} 
                        className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4">
                  {selectedProject.links.live && (
                    <a
                      href={selectedProject.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 ${selectedProject.accentColor} hover:text-white transition-colors duration-300 font-medium`}
                    >
                      <ExternalLink size={16} />
                      View Live Site
                    </a>
                  )}
                  {selectedProject.links.github && (
                    <a
                      href={selectedProject.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 font-medium"
                    >
                      <Github size={16} />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;