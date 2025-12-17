import React, { useState } from 'react';

const FocusBlocks = () => {
  const [hoveredBlock, setHoveredBlock] = useState(null);

  const focusAreas = [
    { id: 1, name: 'Systems', icon: '⚙️', color: '#60A5FA', description: 'Low-level & OS' },
    { id: 2, name: 'DSA', icon: '📊', color: '#34D399', description: 'Algorithms' },
    { id: 3, name: 'Backend', icon: '🖥️', color: '#A78BFA', description: 'APIs & Servers' },
    { id: 4, name: 'Full Stack', icon: '🚀', color: '#F472B6', description: 'End-to-End' },
  ];

  return (
    <div className="w-full h-[240px] sm:h-[280px] flex items-center justify-center px-2">
      <div className="relative w-full max-w-[280px]">
        {/* Background grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }} />
        </div>

        {/* Stacked blocks - compact spacing */}
        <div className="relative flex flex-col gap-2">
          {focusAreas.map((area, index) => {
            const isHovered = hoveredBlock === area.id;
            const isOtherHovered = hoveredBlock !== null && hoveredBlock !== area.id;

            return (
              <div
                key={area.id}
                className={`relative flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                  isHovered 
                    ? 'bg-black-300/80 scale-[1.02]' 
                    : isOtherHovered 
                    ? 'opacity-40 scale-[0.98]' 
                    : 'bg-black-300/40 hover:bg-black-300/60'
                }`}
                style={{
                  borderLeft: `3px solid ${area.color}`,
                  boxShadow: isHovered ? `0 0 30px ${area.color}20, 0 4px 20px rgba(0,0,0,0.3)` : 'none',
                  transform: isHovered ? `translateX(8px) scale(1.02)` : isOtherHovered ? 'scale(0.98)' : 'none',
                }}
                onMouseEnter={() => setHoveredBlock(area.id)}
                onMouseLeave={() => setHoveredBlock(null)}
              >
                {/* Icon */}
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl transition-all duration-300 ${
                    isHovered ? 'scale-110' : ''
                  }`}
                  style={{
                    backgroundColor: isHovered ? area.color : `${area.color}20`,
                    boxShadow: isHovered ? `0 0 20px ${area.color}40` : 'none',
                  }}
                >
                  {area.icon}
                </div>

                {/* Text */}
                <div className="flex-1">
                  <p 
                    className={`font-semibold text-sm transition-colors duration-300 ${
                      isHovered ? 'text-white' : 'text-white/80'
                    }`}
                  >
                    {area.name}
                  </p>
                  <p 
                    className={`text-xs transition-colors duration-300 ${
                      isHovered ? 'text-white/70' : 'text-white/40'
                    }`}
                  >
                    {area.description}
                  </p>
                </div>

                {/* Active indicator */}
                <div
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    isHovered ? 'scale-150' : ''
                  }`}
                  style={{
                    backgroundColor: area.color,
                    boxShadow: isHovered ? `0 0 10px ${area.color}` : 'none',
                  }}
                />

                {/* Hover glow */}
                {isHovered && (
                  <div
                    className="absolute inset-0 rounded-lg pointer-events-none"
                    style={{
                      background: `linear-gradient(90deg, ${area.color}10 0%, transparent 100%)`,
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Decorative corner accents */}
        <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-white/10 rounded-tr-lg" />
        <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-white/10 rounded-bl-lg" />
      </div>
    </div>
  );
};

export default FocusBlocks;
