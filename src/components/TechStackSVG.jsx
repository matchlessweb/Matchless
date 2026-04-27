import React from 'react';
import '../styles/techstack.css';

export function TechStackSVG() {
  return (
    <div className="tech-stack-container" aria-hidden="true">
      <svg 
        viewBox="0 0 400 300" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="tech-stack-svg"
      >
        {/* Layer 1 (Bottom) */}
        <g className="layer layer-1">
          <path d="M200 240 L320 180 L200 120 L80 180 Z" fill="rgba(107,202,168,0.05)" stroke="rgba(107,202,168,0.3)" strokeWidth="2"/>
          <path d="M80 180 L80 200 L200 260 L200 240 Z" fill="rgba(107,202,168,0.15)"/>
          <path d="M320 180 L320 200 L200 260 L200 240 Z" fill="rgba(107,202,168,0.1)"/>
        </g>
        
        {/* Layer 2 (Middle) */}
        <g className="layer layer-2">
          <path d="M200 190 L300 140 L200 90 L100 140 Z" fill="rgba(107,202,168,0.08)" stroke="rgba(107,202,168,0.5)" strokeWidth="2"/>
          <path d="M100 140 L100 155 L200 205 L200 190 Z" fill="rgba(107,202,168,0.2)"/>
          <path d="M300 140 L300 155 L200 205 L200 190 Z" fill="rgba(107,202,168,0.15)"/>
          
          {/* Nodes/Data points on Layer 2 */}
          <circle cx="200" cy="140" r="4" fill="#6BCAA8" className="node pulse-node"/>
          <circle cx="150" cy="165" r="3" fill="#6BCAA8" className="node"/>
          <circle cx="250" cy="115" r="3" fill="#6BCAA8" className="node"/>
        </g>

        {/* Layer 3 (Top) */}
        <g className="layer layer-3">
          <path d="M200 140 L280 100 L200 60 L120 100 Z" fill="rgba(107,202,168,0.12)" stroke="rgba(107,202,168,0.8)" strokeWidth="2"/>
          <path d="M120 100 L120 110 L200 150 L200 140 Z" fill="rgba(107,202,168,0.3)"/>
          <path d="M280 100 L280 110 L200 150 L200 140 Z" fill="rgba(107,202,168,0.25)"/>
          
          {/* Core crystal/node */}
          <path d="M200 80 L210 95 L200 110 L190 95 Z" fill="#6BCAA8" className="core-node"/>
        </g>

        {/* Connecting lines */}
        <path d="M200 110 L200 140" stroke="rgba(107,202,168,0.4)" strokeWidth="2" strokeDasharray="4 4" className="data-link"/>
        <path d="M200 140 L200 240" stroke="rgba(107,202,168,0.2)" strokeWidth="2" strokeDasharray="4 4" className="data-link-slow"/>
      </svg>
    </div>
  );
}
