import React, { useState } from 'react';

const OrbitIcons = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [centerHovered, setCenterHovered] = useState(false);

  const techStack = [
    { id: 1, name: 'React', icon: '⚛️', color: '#61DAFB' },
    { id: 2, name: 'TypeScript', icon: 'TS', color: '#3178C6' },
    { id: 3, name: 'Node.js', icon: '🟢', color: '#339933' },
    { id: 4, name: 'Next.js', icon: 'N', color: '#ffffff' },
    { id: 5, name: 'Python', icon: '🐍', color: '#3776AB' },
    { id: 6, name: 'Web3', icon: '🔗', color: '#F6851B' },
    { id: 7, name: 'MongoDB', icon: '🍃', color: '#47A248' },
    { id: 8, name: 'Docker', icon: '🐳', color: '#2496ED' },
  ];

  return (
    <div className="w-full h-[200px] sm:h-[276px] flex items-center justify-center">
      <div className="relative w-44 h-44 sm:w-56 sm:h-56">
        {/* Orbit rings */}
        <div className="absolute inset-0 rounded-full border border-black-300/30" />
        <div className="absolute inset-4 rounded-full border border-black-300/20" />
        
        {/* Center node */}
        <div
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-black-300 to-black-500 border-2 border-black-300 flex items-center justify-center cursor-pointer transition-all duration-300 z-10 ${
            centerHovered || hoveredIcon ? 'scale-110 border-white/40' : ''
          }`}
          onMouseEnter={() => setCenterHovered(true)}
          onMouseLeave={() => setCenterHovered(false)}
          style={{
            boxShadow: centerHovered || hoveredIcon 
              ? `0 0 30px ${hoveredIcon ? techStack.find(t => t.id === hoveredIcon)?.color : '#ffffff'}30` 
              : 'none'
          }}
        >
          <span className="text-xl sm:text-2xl">💻</span>
        </div>

        {/* Orbiting tech icons */}
        {techStack.map((tech, index) => {
          const angle = (index * 45 - 90) * (Math.PI / 180);
          const radius = 42;
          const x = 50 + radius * Math.cos(angle);
          const y = 50 + radius * Math.sin(angle);
          const isHovered = hoveredIcon === tech.id;

          return (
            <div
              key={tech.id}
              className={`absolute w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${
                isHovered ? 'scale-125 z-20' : hoveredIcon && !isHovered ? 'opacity-50 scale-90' : ''
              }`}
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: 'translate(-50%, -50%)',
                backgroundColor: isHovered ? tech.color : '#1f2937',
                borderColor: tech.color,
                borderWidth: '2px',
                boxShadow: isHovered ? `0 0 25px ${tech.color}60` : 'none',
              }}
              onMouseEnter={() => setHoveredIcon(tech.id)}
              onMouseLeave={() => setHoveredIcon(null)}
              title={tech.name}
            >
              <span 
                className={`text-sm sm:text-base transition-all duration-300 ${
                  isHovered && tech.icon.length <= 2 ? 'font-bold' : ''
                }`}
                style={{ 
                  color: isHovered && tech.icon.length <= 2 ? '#000' : tech.color,
                  filter: isHovered ? 'brightness(1.2)' : 'none'
                }}
              >
                {tech.icon}
              </span>
            </div>
          );
        })}

        {/* Animated connection lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {techStack.map((tech, index) => {
            const angle = (index * 45 - 90) * (Math.PI / 180);
            const radius = 42;
            const x2 = 50 + radius * Math.cos(angle);
            const y2 = 50 + radius * Math.sin(angle);
            const isHovered = hoveredIcon === tech.id;
            
            return (
              <line
                key={tech.id}
                x1="50%"
                y1="50%"
                x2={`${x2}%`}
                y2={`${y2}%`}
                stroke={isHovered || centerHovered ? tech.color : '#374151'}
                strokeWidth={isHovered ? 2 : 1}
                strokeOpacity={isHovered ? 0.8 : centerHovered ? 0.5 : 0.2}
                className="transition-all duration-300"
              />
            );
          })}
        </svg>

        {/* Tooltip */}
        {hoveredIcon && (
          <div 
            className="absolute left-1/2 -bottom-2 -translate-x-1/2 px-3 py-1 bg-black-300 rounded-md text-white text-xs font-medium z-30 whitespace-nowrap"
            style={{ borderColor: techStack.find(t => t.id === hoveredIcon)?.color, borderWidth: '1px' }}
          >
            {techStack.find(t => t.id === hoveredIcon)?.name}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrbitIcons;

