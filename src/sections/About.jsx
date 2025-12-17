import { useState } from 'react';
import React from "react";

import Button from '../components/Button.jsx';
import InteractiveAvatar from '../components/InteractiveAvatar.jsx';
import OrbitIcons from '../components/OrbitIcons.jsx';
import FocusBlocks from '../components/FocusBlocks.jsx';
import CodeGrid from '../components/CodeGrid.jsx';
import ContactNodes from '../components/ContactNodes.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('abishekgarg610@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        {/* Intro Card */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container hover:border-black-500 transition-all duration-300 cursor-pointer group">
            <InteractiveAvatar />

            <div>
              <p className="grid-headtext group-hover:text-white transition-colors">About Me</p>
              <p className="grid-subtext group-hover:text-white-800 transition-colors">
                A third-year Electrical Engineering student at IIT Jodhpur, interested in systems, backend, full-stack, and Web3 development.
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack Card */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container hover:border-black-500 transition-all duration-300 cursor-pointer group">
            <OrbitIcons />

            <div>
              <p className="grid-headtext group-hover:text-white transition-colors">Tech Stack</p>
              <p className="grid-subtext group-hover:text-white-800 transition-colors">
                Technologies and tools I actively use to build scalable projects, explore system design, and experiment with modern engineering workflows.
              </p>
            </div>
          </div>
        </div>

        {/* Current Focus Card */}
        <div className="col-span-1 xl:row-span-4">
       <div className="grid-container hover:border-black-500 transition-all duration-300 cursor-pointer">

    {/* INNER WRAPPER (this is key) */}
    <div className="flex flex-col items-start justify-start h-full gap-6">

      {/* Focus Blocks */}
      <FocusBlocks />

      {/* Text */}
      <div className="text-start max-w-[90%] mt-4">
        <p className="grid-headtext">Current Focus</p>
        <p className="grid-subtext mt-2">
          I am currently focused on strengthening my understanding of core computer science and system design through hands-on project work.
Most of my work is backend and full-stack oriented, with attention to clean architecture, performance, and scalability.
I prefer building systems that are simple, understandable, and reliable mostly because debugging complicated ones at 2 a.m. is never fun.
        </p>
      </div>

    </div>
  </div>
</div>



        {/* Passion for Coding Card */}
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container hover:border-black-500 transition-all duration-300 cursor-pointer group">
            <CodeGrid />

            <div >
              <p className="grid-headtext group-hover:text-white transition-colors mt-4">Outside the Screen</p>
              <p className="grid-subtext group-hover:text-white-800 transition-colors mt-2">
                When I’m not working on projects, I like taking breaks from screens and slowing things down a bit.
               I enjoy observing how things work in everyday life, thinking through problems casually, and giving myself space to reset.
              It helps me come back with a clearer mind and better focus.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Card */}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container hover:border-black-500 transition-all duration-300 cursor-pointer group">
            <ContactNodes />

            <div className="space-y-2">
              <p className="grid-subtext text-center group-hover:text-white-800 transition-colors">Contact me</p>
              <div 
                className="copy-container hover:bg-black-500/30 rounded-lg p-2 transition-all duration-300" 
                onClick={handleCopy}
              >
                <img 
                  src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} 
                  alt="copy" 
                  className={`transition-transform duration-300 ${hasCopied ? 'scale-110' : ''}`}
                />
                <p className={`lg:text-xl md:text-lg text-sm font-medium transition-all duration-300 ${
                  hasCopied ? 'text-green-400' : 'text-gray_gradient text-white'
                }`}>
                  abishekgarg610@gmail.com
                </p>
              </div>
              <a href="#contact" className="w-full mt-4 block">
                <Button name="Get in Touch" isBeam containerClass="w-full" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
