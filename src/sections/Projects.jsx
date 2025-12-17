import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';
import React from "react";

import { myProjects } from '../constants/index.js';
import CanvasLoader from '../components/Loading.jsx';
import DemoComputer from '../components/DemoComputer.jsx';

const projectCount = myProjects.length;

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  useGSAP(() => {
    gsap.fromTo(`.animatedText`, { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.2, ease: 'power2.inOut' });
  }, [selectedProjectIndex]);

  const currentProject = myProjects[selectedProjectIndex];

  const sampleProjects = [
    {
      id: 1,
      title: 'Smart Corpus Analyzer',
      description:
        'A scalable real-time corpus querying system designed to overcome LLM token limitations using selective Gemini API calls, achieving sub-50ms query latency on datasets exceeding 1M entries.',
      techStack: [
        { name: 'LLMs', color: '#10B981' },
        { name: 'Tries', color: '#8B5CF6' },
        { name: 'Heaps', color: '#F59E0B' },
      ],
      href: 'https://github.com/ABHIGGGG/smart-corpus-analyzer',
      accentColor: '#10B981',
    },
    {
      id: 2,
      title: 'Stack Machine Compiler',
      description:
        'A custom compiler that translates E++ arithmetic expressions into Targ assembly using parse trees, an AVL-based symbol table, and a stack-based virtual machine for execution.',
      techStack: [
        { name: 'C++', color: '#00599C' },
        { name: 'Compiler', color: '#EF4444' },
        { name: 'DSA', color: '#8B5CF6' },
      ],
      href: 'https://github.com/ABHIGGGG/Stack_Machine_Compiler',
      accentColor: '#00599C',
    },
    {
      id: 3,
      title: 'Real-Time Sentence Autocompletion',
      description:
        'A Trie-based real-time sentence autocompletion system that improves input speed and query completion efficiency through prefix-based search and optimized text parsing.',
      techStack: [
        { name: 'Tries', color: '#8B5CF6' },
        { name: 'NLP', color: '#06B6D4' },
        { name: 'Algorithms', color: '#F59E0B' },
      ],
      href: 'https://github.com/ABHIGGGG/Sentence_Completion',
      accentColor: '#06B6D4',
    },
    {
      id: 4,
      title: 'News Authentication & Domain Classifier',
      description:
        'An end-to-end machine learning pipeline to verify news authenticity and classify articles into domains such as Politics, Terrorism, and COVID-19 using BERT-based embeddings.',
      techStack: [
        { name: 'ML', color: '#EC4899' },
        { name: 'BERT', color: '#F97316' },
        { name: 'Scraping', color: '#14B8A6' },
      ],
      href: 'https://drive.google.com/file/d/13nUEP883HiV4Y1yT_PbA1z7OwgtkcL-n/view',
      accentColor: '#EC4899',
    },
  ];


  return (
    <>
      <section className="c-space my-20" id="projects">
        <p className="head-text">Development Projects</p>

        <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
          <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
            <div className="absolute top-0 right-0">
              <img src={currentProject.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl" />
            </div>

            <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>
              <img className="w-10 h-10 shadow-sm" src={currentProject.logo} alt="logo" />
            </div>

            <div className="flex flex-col gap-5 text-white-600 my-5">
              <p className="text-white text-2xl font-semibold animatedText">{currentProject.title}</p>

              <p className="animatedText">{currentProject.desc}</p>
              <p className="animatedText">{currentProject.subdesc}</p>
            </div>

            <div className="flex items-center justify-between flex-wrap gap-5">
              <div className="flex items-center gap-3">
                {currentProject.tags.map((tag, index) => (
                  <div key={index} className="tech-logo">
                    <img src={tag.path} alt={tag.name} />
                  </div>
                ))}
              </div>

              <a
                className="flex items-center gap-2 cursor-pointer text-white-600"
                href={currentProject.href}
                target="_blank"
                rel="noreferrer">
                <p>Visit</p>
                <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
              </a>
            </div>

            <div className="flex justify-between items-center mt-7">
              <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
                <img src="/assets/left-arrow.png" alt="left arrow" />
              </button>

              <button className="arrow-btn" onClick={() => handleNavigation('next')}>
                <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
            <Canvas>
              <ambientLight intensity={Math.PI} />
              <directionalLight position={[10, 10, 5]} />
              <Center>
                <Suspense fallback={<CanvasLoader />}>
                  <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                    <DemoComputer texture={currentProject.texture} />
                  </group>
                </Suspense>
              </Center>
              <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
            </Canvas>
          </div>
        </div>
      </section>

      <section className="c-space my-20">
        <p className="head-text">Other Explorations</p>

        <div className="grid md:grid-cols-2 grid-cols-1 mt-12 gap-6 w-full">
          {sampleProjects.map((project) => (
            <a
              key={project.id}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-xl border border-black-300 bg-black-200 p-6 transition-all duration-500 hover:border-transparent hover:shadow-2xl cursor-pointer"
              style={{
                '--accent': project.accentColor,
              }}
            >
              {/* Gradient border on hover */}
              <div 
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, ${project.accentColor}40 0%, transparent 50%, ${project.accentColor}20 100%)`,
                }}
              />
              
              {/* Top accent line */}
              <div 
                className="absolute top-0 left-0 right-0 h-1 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                style={{ backgroundColor: project.accentColor }}
              />

              <div className="relative z-10 flex flex-col gap-4">
                {/* Title with hover glow */}
                <h3 
                  className="text-xl font-semibold text-white group-hover:text-white transition-all duration-300"
                  style={{
                    textShadow: 'none',
                  }}
                >
                  <span className="group-hover:drop-shadow-lg transition-all duration-300">
                    {project.title}
                  </span>
                </h3>

                {/* Description */}
                <p className="text-white-600 text-sm leading-relaxed group-hover:text-white-800 transition-colors duration-300">
                  {project.description}
                </p>
                
                {/* Colorful Tech Tags */}
                {project.techStack && project.techStack.length > 0 && (
                  <div className="flex items-center gap-2 flex-wrap mt-2">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg"
                        style={{
                          backgroundColor: `${tech.color}20`,
                          color: tech.color,
                          border: `1px solid ${tech.color}40`,
                          boxShadow: 'none',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = tech.color;
                          e.currentTarget.style.color = '#000';
                          e.currentTarget.style.boxShadow = `0 0 20px ${tech.color}60`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = `${tech.color}20`;
                          e.currentTarget.style.color = tech.color;
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                )}

                {/* View Project Link */}
                <div className="flex items-center gap-2 mt-3 text-white-600 group-hover:text-white transition-all duration-300">
                  <span 
                    className="text-sm font-medium group-hover:translate-x-1 transition-transform duration-300"
                    style={{ color: project.accentColor }}
                  >
                    View Project
                  </span>
                  <svg 
                    className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                    style={{ color: project.accentColor }}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
              </div>

              {/* Background glow effect */}
              <div 
                className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-30 blur-3xl transition-opacity duration-500 pointer-events-none"
                style={{ backgroundColor: project.accentColor }}
              />
            </a>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
