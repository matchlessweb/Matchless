import React from 'react';

export default function LeakyBucket() {
  return (
    <div className="leaky-bucket-wrapper">
      <svg viewBox="0 0 100 160" className="leaky-bucket-svg" aria-label="A leaky bucket dropping coins">
        {/* Bucket Back Inner Curve */}
        <path d="M10 20 Q50 8 90 20" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none" />
        
        {/* Bucket Water Level (Stylized) */}
        <path d="M15 45 Q50 55 85 45" stroke="rgba(73, 187, 148, 0.4)" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
        
        {/* Left Wall */}
        <path d="M10 20 L25 90" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeLinecap="round" />
        
        {/* Right Wall */}
        <path d="M90 20 L75 90" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeLinecap="round" />
        
        {/* Bottom Left Floor */}
        <path d="M25 90 L42 90" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeLinecap="round" />
        
        {/* Bottom Right Floor */}
        <path d="M58 90 L75 90" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeLinecap="round" />

        {/* Bucket Front Rim */}
        <path d="M10 20 Q50 32 90 20" stroke="rgba(255,255,255,0.6)" strokeWidth="2" fill="none" />

        {/* Falling Coins */}
        <g className="coin coin-1">
          <circle cx="50" cy="88" r="6" fill="var(--mw-green-400)" />
          <text x="50" y="91" fill="#0A0F0D" fontSize="8" fontFamily="system-ui, sans-serif" fontWeight="800" textAnchor="middle">$</text>
        </g>
        <g className="coin coin-2">
          <circle cx="50" cy="88" r="6" fill="var(--mw-green-400)" />
          <text x="50" y="91" fill="#0A0F0D" fontSize="8" fontFamily="system-ui, sans-serif" fontWeight="800" textAnchor="middle">$</text>
        </g>
        <g className="coin coin-3">
          <circle cx="50" cy="88" r="6" fill="var(--mw-green-400)" />
          <text x="50" y="91" fill="#0A0F0D" fontSize="8" fontFamily="system-ui, sans-serif" fontWeight="800" textAnchor="middle">$</text>
        </g>
        
        {/* Stylized Puddle/Impact zone */}
        <ellipse className="coin-puddle" cx="50" cy="150" rx="14" ry="3" fill="rgba(73, 187, 148, 0)" stroke="rgba(73, 187, 148, 0)" strokeWidth="1" />
      </svg>
    </div>
  );
}
