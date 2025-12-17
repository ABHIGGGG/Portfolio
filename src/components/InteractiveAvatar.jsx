import React, { useState } from 'react';

const InteractiveAvatar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="w-full h-[200px] sm:h-[276px] flex items-center justify-center"
      style={{ cursor: isHovered ? 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\' viewBox=\'0 0 32 32\'%3E%3Cdefs%3E%3ClinearGradient id=\'g\' x1=\'0%25\' y1=\'0%25\' x2=\'100%25\' y2=\'100%25\'%3E%3Cstop offset=\'0%25\' stop-color=\'%2360A5FA\'/%3E%3Cstop offset=\'50%25\' stop-color=\'%23A78BFA\'/%3E%3Cstop offset=\'100%25\' stop-color=\'%23F472B6\'/%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx=\'16\' cy=\'16\' r=\'12\' fill=\'url(%23g)\'/%3E%3C/svg%3E") 16 16, pointer' : 'default' }}
    >
      <div 
        className="relative group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background glow layers */}
        <div 
          className={`absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-2xl transition-all duration-500 ${
            isHovered ? 'opacity-100 scale-110' : 'opacity-0 scale-100'
          }`}
        />
        
        {/* Main avatar container */}
        <div 
          className={`relative w-36 h-44 sm:w-44 sm:h-52 rounded-2xl overflow-hidden transition-all duration-300 ${
            isHovered ? 'scale-105' : 'scale-100'
          }`}
        >
          {/* Gradient background */}
          <div 
            className={`absolute inset-0 bg-gradient-to-br from-black-300 via-black-500 to-black-300 transition-all duration-500`}
          />
          
          {/* Animated gradient border */}
          <div 
            className={`absolute inset-0 rounded-2xl transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-40'
            }`}
            style={{
              background: 'linear-gradient(135deg, #60A5FA 0%, #A78BFA 50%, #F472B6 100%)',
              padding: '2px',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
            }}
          />

          {/* Inner content */}
          <div className="relative h-full flex flex-col items-center justify-center p-4">
            {/* Avatar emoji */}
            <div 
              className={`text-5xl sm:text-6xl mb-3 transition-all duration-300 ${
                isHovered ? 'scale-110 animate-bounce' : ''
              }`}
              style={{ animationDuration: '1s' }}
            >
              👨‍💻
            </div>

            {/* Name badge */}
            <div 
              className={`px-4 py-1.5 rounded-full bg-black-500/80 border transition-all duration-300 ${
                isHovered 
                  ? 'border-white/30 shadow-lg shadow-purple-500/20' 
                  : 'border-black-300'
              }`}
            >
              <span 
                className={`text-sm font-medium transition-all duration-300 ${
                  isHovered ? 'text-white' : 'text-white/70'
                }`}
              >
                Abhishek
              </span>
            </div>

            {/* Status indicator */}
            <div className="flex items-center gap-2 mt-3">
              <div 
                className={`w-2 h-2 rounded-full bg-green-400 transition-all duration-300 ${
                  isHovered ? 'animate-ping' : ''
                }`}
              />
              <span className="text-xs text-white/50">Available</span>
            </div>
          </div>

          {/* Decorative elements */}
          <div 
            className={`absolute top-3 right-3 w-6 h-6 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 ${
              isHovered ? 'bg-blue-500/20 border-blue-500/40 scale-110' : ''
            }`}
          >
            <span className="text-xs">🎓</span>
          </div>
          
          <div 
            className={`absolute bottom-3 left-3 w-6 h-6 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 ${
              isHovered ? 'bg-purple-500/20 border-purple-500/40 scale-110' : ''
            }`}
          >
            <span className="text-xs">⚡</span>
          </div>
        </div>

        {/* Floating particles on hover */}
        {isHovered && (
          <>
            <div className="absolute -top-2 -left-2 w-3 h-3 rounded-full bg-blue-400/60 animate-pulse" />
            <div className="absolute -top-1 -right-3 w-2 h-2 rounded-full bg-purple-400/60 animate-pulse" style={{ animationDelay: '0.2s' }} />
            <div className="absolute -bottom-2 -right-2 w-3 h-3 rounded-full bg-pink-400/60 animate-pulse" style={{ animationDelay: '0.4s' }} />
            <div className="absolute -bottom-1 -left-3 w-2 h-2 rounded-full bg-cyan-400/60 animate-pulse" style={{ animationDelay: '0.6s' }} />
          </>
        )}
      </div>
    </div>
  );
};

export default InteractiveAvatar;
