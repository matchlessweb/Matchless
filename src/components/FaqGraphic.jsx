import React from 'react';

export default function FaqGraphic() {
  return (
    <div className="faq-graphic-wrapper">
      <svg viewBox="0 0 300 300" className="faq-graphic-svg" aria-hidden="true">
        
        {/* Subtle background glow/ambient light */}
        <circle cx="150" cy="150" r="100" fill="var(--mw-green-400)" filter="blur(60px)" opacity="0.1" />

        {/* Bubble 1 (Background/Top Left) */}
        <g className="chat-bubble cb-1">
          <path d="M50 100 Q50 60 90 60 L180 60 Q220 60 220 100 L220 140 Q220 180 180 180 L160 180 L120 210 L135 180 L90 180 Q50 180 50 140 Z" 
                fill="rgba(10, 15, 13, 0.8)" 
                stroke="rgba(107, 202, 168, 0.3)" 
                strokeWidth="2" 
                style={{ backdropFilter: 'blur(8px)' }} />
          {/* Ellipses */}
          <circle cx="105" cy="120" r="5" fill="rgba(255,255,255,0.4)" className="cb-dot cb-dot-1" />
          <circle cx="135" cy="120" r="5" fill="rgba(255,255,255,0.4)" className="cb-dot cb-dot-2" />
          <circle cx="165" cy="120" r="5" fill="rgba(255,255,255,0.4)" className="cb-dot cb-dot-3" />
        </g>
        
        {/* Bubble 2 (Foreground/Bottom Right) */}
        <g className="chat-bubble cb-2">
          {/* Flipped tail to point right */}
          <path d="M120 170 Q120 140 150 140 L220 140 Q250 140 250 170 L250 210 Q250 240 220 240 L205 240 L180 270 L190 240 L150 240 Q120 240 120 210 Z" 
                fill="var(--mw-green-400)" 
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1" />
          <text x="185" y="200" fill="#0A0F0D" fontSize="48" fontFamily="system-ui, sans-serif" fontWeight="800" textAnchor="middle" dominantBaseline="middle">?</text>
        </g>
      </svg>
    </div>
  );
}
