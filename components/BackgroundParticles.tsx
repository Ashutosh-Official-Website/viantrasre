
import React, { useMemo } from 'react';

const BackgroundParticles: React.FC = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.5 + 0.1,
      duration: Math.random() * 20 + 20,
      delay: Math.random() * -20,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Abstract Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-900/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-900/10 blur-[120px] rounded-full" />
      
      {/* Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '40px 40px' 
        }} 
      />

      <svg className="w-full h-full">
        {particles.map((p) => (
          <circle
            key={p.id}
            cx={`${p.x}%`}
            cy={`${p.y}%`}
            r={p.size}
            fill="#6366f1"
            fillOpacity={p.opacity}
          >
            <animate
              attributeName="cy"
              values={`${p.y}%;${p.y - 10}%;${p.y}%`}
              dur={`${p.duration}s`}
              repeatCount="indefinite"
              begin={`${p.delay}s`}
            />
            <animate
              attributeName="cx"
              values={`${p.x}%;${p.x + 5}%;${p.x}%`}
              dur={`${p.duration * 1.5}s`}
              repeatCount="indefinite"
              begin={`${p.delay}s`}
            />
          </circle>
        ))}
      </svg>
    </div>
  );
};

export default BackgroundParticles;
