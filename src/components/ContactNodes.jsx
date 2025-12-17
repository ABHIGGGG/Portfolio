import React, { useState } from 'react';

const ContactNodes = () => {
  const [hoveredElement, setHoveredElement] = useState(null);

  const contactMethods = [
    { 
      id: 1, 
      icon: '💼', 
      label: 'LinkedIn', 
      color: '#0A66C2',
      href: 'https://www.linkedin.com/in/abhishek-garg-003340219/'
    },
    { 
      id: 2, 
      icon: '🐙', 
      label: 'GitHub', 
      color: '#6e5494',
      href: 'https://github.com/ABHIGGGG'
    },
    { 
      id: 3, 
      icon: '📸', 
      label: 'Instagram', 
      color: '#E4405F',
      href: 'https://www.instagram.com/garg_abhishek_06'
    },
  ];

  return (
    <div className="w-full h-[100px] sm:h-[126px] flex items-center justify-center">
      <div className="relative flex items-center justify-center gap-4 sm:gap-6">
        {/* Connecting line */}
        <div className="absolute top-1/2 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Contact nodes */}
        {contactMethods.map((method) => {
          const isHovered = hoveredElement === method.id;

          return (
            <a
              key={method.id}
              href={method.href}
              target="_blank"
              rel="noreferrer"
              className="relative cursor-pointer"
              onMouseEnter={() => setHoveredElement(method.id)}
              onMouseLeave={() => setHoveredElement(null)}
            >
              {/* Pulse ring */}
              <div
                className={`absolute inset-0 rounded-full transition-all duration-300 animate-pulse ${
                  isHovered ? 'scale-150 opacity-0' : 'scale-100 opacity-100'
                }`}
                style={{
                  backgroundColor: `${method.color}10`,
                  border: `1px solid ${method.color}30`,
                }}
              />

              {/* Main node */}
              <div
                className={`relative w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isHovered ? 'scale-125 z-10' : ''
                }`}
                style={{
                  backgroundColor: isHovered ? method.color : '#1f2937',
                  borderWidth: '2px',
                  borderColor: method.color,
                  boxShadow: isHovered 
                    ? `0 0 30px ${method.color}60, 0 0 60px ${method.color}30` 
                    : `0 0 10px ${method.color}20`,
                }}
              >
                <span 
                  className="text-lg sm:text-xl transition-transform duration-300"
                  style={{ transform: isHovered ? 'scale(1.2)' : 'scale(1)' }}
                >
                  {method.icon}
                </span>
              </div>

              {/* Label */}
              <div
                className={`absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] sm:text-xs font-medium whitespace-nowrap transition-all duration-300 ${
                  isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'
                }`}
                style={{ color: method.color }}
              >
                {method.label}
              </div>
            </a>
          );
        })}

        {/* Center glow effect */}
        <div 
          className="absolute inset-0 pointer-events-none rounded-full blur-3xl opacity-20"
          style={{
            background: hoveredElement 
              ? contactMethods.find(m => m.id === hoveredElement)?.color 
              : 'transparent',
            transition: 'background 0.3s ease'
          }}
        />
      </div>
    </div>
  );
};

export default ContactNodes;
