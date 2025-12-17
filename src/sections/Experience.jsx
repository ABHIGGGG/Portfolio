import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import React from "react";

import Developer from '../components/Developer.jsx';
import CanvasLoader from '../components/Loading.jsx';

const WorkExperience = () => {
  const [animationName, setAnimationName] = useState('idle');
  const [hoveredCourse, setHoveredCourse] = useState(null);

const learningAreas = [
  {
    id: 1,
    name: 'Systems & Backend Engineering',
    description:
      'Trying to build systems that don’t fall apart under pressure, and understanding why they do when they eventually break.',
    animation: 'victory',
    color: '#60A5FA',
  },
  {
    id: 2,
    name: 'Full Stack Projects',
    description:
      'Taking ideas from “this should be simple” to “okay, now it actually works” across frontend and backend.',
    animation: 'clapping',
    color: '#34D399',
  },
  {
    id: 3,
    name: 'Web3 Development',
    description:
      'Experimenting with smart contracts and decentralized apps, and learning why trust, gas, and edge cases matter a lot.',
    animation: 'salute',
    color: '#A78BFA',
  },
];


  const coursework = [
    { id: 1, name: 'DSA', icon: '📊', color: '#60A5FA' },
    { id: 2, name: 'OS', icon: '⚙️', color: '#34D399' },
    { id: 3, name: 'DBMS', icon: '🗄️', color: '#F59E0B' },
    { id: 4, name: 'Computer Architecture', icon: '🔧', color: '#EF4444' },
    { id: 5, name: 'ML', icon: '🤖', color: '#EC4899' },
    { id: 6, name: 'Digital Design', icon: '🚀', color: '#8B5CF6' },
  ];

  return (
    <section className="c-space my-20" id="work">
      <div className="w-full text-white-600">
        <p className="head-text">What I'm Actively Building & Learning</p>

        <div className="work-container">
          <div className="work-canvas">
            <Canvas>
              <ambientLight intensity={7} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

              <Suspense fallback={<CanvasLoader />}>
                <Developer position-y={-3} scale={3} animationName={animationName} />
              </Suspense>
            </Canvas>
          </div>

          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {learningAreas.map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOver={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOut={() => setAnimationName('idle')}
                  className="work-content_container group">
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div 
                      className="work-content_logo flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{ 
                        backgroundColor: `${item.color}20`,
                        border: `2px solid ${item.color}`,
                      }}
                    >
                      <span className="text-white text-2xl font-bold">{item.id}</span>
                    </div>

                    {index < learningAreas.length - 1 && <div className="work-content_bar" />}
                  </div>

                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-white-800 group-hover:text-white transition-colors">{item.name}</p>
                    <p className="group-hover:text-white transition-all ease-in-out duration-500 mt-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Coursework Section - Merged */}
        <div className="mt-16">
          <p className="text-xl font-semibold text-white mb-6">Relevant Coursework & Skills</p>
          <div className="flex flex-wrap gap-3">
            {coursework.map((course) => (
              <div
                key={course.id}
                className="group relative px-4 py-2 rounded-xl cursor-pointer transition-all duration-300"
                style={{
                  backgroundColor: hoveredCourse === course.id ? course.color : `${course.color}15`,
                  border: `1px solid ${course.color}40`,
                  boxShadow: hoveredCourse === course.id ? `0 0 25px ${course.color}50` : 'none',
                  transform: hoveredCourse === course.id ? 'scale(1.05) translateY(-2px)' : 'scale(1)',
                }}
                onMouseEnter={() => setHoveredCourse(course.id)}
                onMouseLeave={() => setHoveredCourse(null)}
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg transition-transform duration-300 group-hover:scale-110">{course.icon}</span>
                  <span 
                    className="font-medium text-sm transition-colors duration-300"
                    style={{ 
                      color: hoveredCourse === course.id ? '#000' : course.color 
                    }}
                  >
                    {course.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
