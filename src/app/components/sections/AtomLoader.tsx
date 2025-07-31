import React from 'react';
import './AtomLoader.css';

interface AtomLoaderProps {
  size?: number;
  className?: string;
}

const AtomLoader: React.FC<AtomLoaderProps> = ({ 
  size = 128, 
  className = '' 
}) => {
  return (
    <div 
      className={`pl ${className}`}
      style={{ 
        width: `${size}px`, 
        height: `${size}px`,
        fontSize: `${size / 6.4}px` // Maintains proportional scaling
      }}
    >
      <svg 
        className="pl__rings" 
        viewBox="0 0 128 128" 
        width={`${size}px`} 
        height={`${size}px`}
      >
        <g fill="none" strokeLinecap="round" strokeWidth="4">
          {/* Ring group 1 */}
          <g className="pl__ring" transform="rotate(0)">
            <ellipse className="pl__orbit" cx="64" cy="64" rx="60" ry="30" stroke="hsla(223,90%,50%,0.3)" />
            <ellipse className="pl__orbit" cx="64" cy="64" rx="60" ry="30" stroke="hsla(223,90%,50%,0.5)" strokeDasharray="50 240" />
            <ellipse className="pl__orbit" cx="64" cy="64" rx="60" ry="30" stroke="hsl(223,90%,50%)" strokeDasharray="25 265" />
          </g>
          
          {/* Ring groups 2-4 (invisible orbits) */}
          {[...Array(3)].map((_, i) => (
            <g key={`ring-${i + 2}`} className="pl__ring" transform="rotate(0)">
              <ellipse className="pl__orbit" cx="64" cy="64" rx="60" ry="30" stroke="hsla(223,90%,50%,0)" />
              <ellipse className="pl__orbit" cx="64" cy="64" rx="60" ry="30" stroke="hsla(223,90%,50%,0.5)" strokeDasharray="50 240" />
              <ellipse className="pl__orbit" cx="64" cy="64" rx="60" ry="30" stroke="hsl(223,90%,50%)" strokeDasharray="25 265" />
            </g>
          ))}
          
          {/* Ring groups 5-6 (rotated 180deg) */}
          {[...Array(2)].map((_, i) => (
            <g key={`ring-rot-${i + 5}`} className="pl__ring" transform="rotate(180)">
              <ellipse className="pl__orbit" cx="64" cy="64" rx="60" ry="30" stroke={i === 0 ? "hsla(223,90%,50%,0.3)" : "hsla(223,90%,50%,0)"} />
              <ellipse className="pl__orbit" cx="64" cy="64" rx="60" ry="30" stroke="hsla(223,90%,50%,0.5)" strokeDasharray="50 240" />
              <ellipse className="pl__orbit" cx="64" cy="64" rx="60" ry="30" stroke="hsl(223,90%,50%)" strokeDasharray="25 265" />
            </g>
          ))}
          
          {/* Electron ring 1 */}
          <g className="pl__ring" transform="rotate(0)">
            <ellipse className="pl__electron" cx="64" cy="64" rx="60" ry="30" stroke="hsl(0,0%,100%)" strokeDasharray="1 289" strokeWidth="8" />
            <ellipse className="pl__electron" cx="64" cy="64" rx="60" ry="30" stroke="hsl(0,0%,100%)" strokeDasharray="1 289" strokeWidth="8" />
          </g>
          
          {/* Electron ring 2 */}
          <g className="pl__ring" transform="rotate(180)">
            {[...Array(4)].map((_, i) => (
              <ellipse 
                key={`electron-${i}`}
                className="pl__electron" 
                cx="64" 
                cy="64" 
                rx="60" 
                ry="30" 
                stroke="hsl(0,0%,100%)" 
                strokeDasharray="1 289" 
                strokeWidth="8" 
              />
            ))}
          </g>
        </g>
      </svg>
      
      <div className="pl__nucleus">
        {[...Array(13)].map((_, i) => (
          <div key={i} className="pl__nucleus-particle"></div>
        ))}
      </div>
    </div>
  );
};

export default AtomLoader;