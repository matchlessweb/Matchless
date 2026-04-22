import React from 'react';

export const BrandMark = ({ size = 22, color = "#49BB94" }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
    <polygon points="17 4 4 19 15 19 14 30 27 15 15 15 17 4"
             fill="none" stroke={color} strokeWidth="1.9"
             strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
