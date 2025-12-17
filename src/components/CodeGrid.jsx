import React, { useState } from 'react';

const CodeGrid = () => {
  const [hoveredCell, setHoveredCell] = useState(null);

  // 6x4 grid of code cells
  const cells = Array.from({ length: 24 }, (_, i) => ({
    id: i,
    type: ['func', 'var', 'loop', 'cond', 'class', 'api'][i % 6],
    color: ['#60A5FA', '#34D399', '#A78BFA', '#FBBF24', '#F472B6', '#6EE7B7'][i % 6],
  }));

  const getSymbol = (type) => {
    switch (type) {
      case 'func': return 'ƒ';
      case 'var': return 'x';
      case 'loop': return '↻';
      case 'cond': return '?';
      case 'class': return '◇';
      case 'api': return '⟨⟩';
      default: return '·';
    }
  };

  const getNeighbors = (id) => {
    const row = Math.floor(id / 6);
    const col = id % 6;
    const neighbors = [];
    
    if (row > 0) neighbors.push(id - 6); // top
    if (row < 3) neighbors.push(id + 6); // bottom
    if (col > 0) neighbors.push(id - 1); // left
    if (col < 5) neighbors.push(id + 1); // right
    
    return neighbors;
  };

  const isNeighbor = hoveredCell !== null ? getNeighbors(hoveredCell) : [];

  return (
    <div className="w-full h-[200px] sm:h-[266px] flex items-center justify-center p-4">
      <div className="relative">
        {/* Code window frame */}
        <div className="bg-black-500/50 rounded-lg border border-black-300/50 p-3 sm:p-4">
          {/* Window header */}
          <div className="flex items-center gap-2 mb-3 pb-2 border-b border-black-300/30">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
            <span className="text-[10px] text-white/30 ml-2 font-mono">code.tsx</span>
          </div>

          {/* Grid of cells */}
          <div className="grid grid-cols-6 gap-1.5 sm:gap-2">
            {cells.map((cell) => {
              const isHovered = hoveredCell === cell.id;
              const isNeighborCell = isNeighbor.includes(cell.id);

              return (
                <div
                  key={cell.id}
                  className={`w-7 h-7 sm:w-9 sm:h-9 rounded flex items-center justify-center cursor-pointer transition-all duration-200 font-mono text-xs sm:text-sm ${
                    isHovered 
                      ? 'scale-110 z-10' 
                      : isNeighborCell 
                      ? 'scale-105' 
                      : ''
                  }`}
                  style={{
                    backgroundColor: isHovered 
                      ? cell.color 
                      : isNeighborCell 
                      ? `${cell.color}30` 
                      : '#1f293780',
                    borderWidth: '1px',
                    borderColor: isHovered 
                      ? cell.color 
                      : isNeighborCell 
                      ? `${cell.color}50` 
                      : 'transparent',
                    boxShadow: isHovered 
                      ? `0 0 20px ${cell.color}50, 0 4px 10px rgba(0,0,0,0.3)` 
                      : isNeighborCell 
                      ? `0 0 10px ${cell.color}20` 
                      : 'none',
                    color: isHovered ? '#000' : cell.color,
                    transform: isHovered ? 'translateY(-4px) scale(1.1)' : isNeighborCell ? 'scale(1.05)' : 'none',
                  }}
                  onMouseEnter={() => setHoveredCell(cell.id)}
                  onMouseLeave={() => setHoveredCell(null)}
                >
                  {getSymbol(cell.type)}
                </div>
              );
            })}
          </div>

          {/* Bottom status bar */}
          <div className="flex items-center justify-between mt-3 pt-2 border-t border-black-300/30">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] text-white/40 font-mono">building...</span>
            </div>
            <span className="text-[10px] text-white/30 font-mono">
              {hoveredCell !== null ? cells[hoveredCell].type : 'ready'}
            </span>
          </div>
        </div>

        {/* Ambient glow */}
        <div 
          className={`absolute inset-0 rounded-lg blur-xl transition-opacity duration-300 pointer-events-none ${
            hoveredCell !== null ? 'opacity-30' : 'opacity-0'
          }`}
          style={{
            backgroundColor: hoveredCell !== null ? cells[hoveredCell].color : 'transparent'
          }}
        />
      </div>
    </div>
  );
};

export default CodeGrid;

