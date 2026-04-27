import React from 'react';
import '../styles/dataflow.css';

export function DataFlowSVG() {
  return (
    <div className="data-flow-container" aria-hidden="true">
      <svg 
        viewBox="0 0 200 150" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="data-flow-svg"
        width="100%"
        height="100%"
      >
        <defs>
          <linearGradient id="glowGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(107,202,168,0.4)" />
            <stop offset="100%" stopColor="rgba(107,202,168,0)" />
          </linearGradient>
          <filter id="blurGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Subtle grid in background of the chart */}
        <g className="chart-grid" stroke="rgba(255,255,255,0.03)" strokeWidth="1">
          <line x1="0" y1="30" x2="200" y2="30" />
          <line x1="0" y1="70" x2="200" y2="70" />
          <line x1="0" y1="110" x2="200" y2="110" />
          <line x1="40" y1="0" x2="40" y2="150" />
          <line x1="100" y1="0" x2="100" y2="150" />
          <line x1="160" y1="0" x2="160" y2="150" />
        </g>

        {/* Gradient fill under the line */}
        <path 
          d="M0 120 L40 100 L80 110 L130 50 L160 60 L190 20 L190 150 L0 150 Z" 
          fill="url(#glowGradient)" 
          className="data-fill"
        />

        {/* Main trend line */}
        <path 
          d="M0 120 L40 100 L80 110 L130 50 L160 60 L190 20" 
          stroke="#6BCAA8" 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="data-line"
          filter="url(#blurGlow)"
        />

        {/* Nodes along the line */}
        <circle cx="40" cy="100" r="3" fill="#6BCAA8" className="chart-node node-1" />
        <circle cx="80" cy="110" r="3" fill="#6BCAA8" className="chart-node node-2" />
        <circle cx="130" cy="50" r="3" fill="#6BCAA8" className="chart-node node-3" />
        <circle cx="160" cy="60" r="3" fill="#6BCAA8" className="chart-node node-4" />
        
        {/* Final pulse node */}
        <circle cx="190" cy="20" r="6" fill="#6BCAA8" className="chart-pulse-node" />
        <circle cx="190" cy="20" r="12" fill="rgba(107,202,168,0.4)" className="chart-pulse-ring" />
      </svg>
    </div>
  );
}
