import React, { useRef } from 'react';

export default function BraidBackground() {
  const containerRef = useRef(null);

  return (
    <div className="ribbons" aria-hidden="true" ref={containerRef}>
      <svg viewBox="0 0 1440 3000" preserveAspectRatio="none">
        <defs>
          <linearGradient id="rb-1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#8EDDBD" stopOpacity="0"/>
            <stop offset="0.1" stopColor="#8EDDBD" stopOpacity="0.98"/>
            <stop offset="0.5" stopColor="#49BB94" stopOpacity="1"/>
            <stop offset="0.9" stopColor="#218766" stopOpacity="0.8"/>
            <stop offset="1" stopColor="#218766" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="rb-2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#49BB94" stopOpacity="0"/>
            <stop offset="0.15" stopColor="#49BB94" stopOpacity="0.95"/>
            <stop offset="0.55" stopColor="#34A57E" stopOpacity="0.98"/>
            <stop offset="0.95" stopColor="#6BCAA8" stopOpacity="0.8"/>
            <stop offset="1" stopColor="#6BCAA8" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="rb-3" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#218766" stopOpacity="0"/>
            <stop offset="0.2" stopColor="#218766" stopOpacity="0.92"/>
            <stop offset="0.6" stopColor="#49BB94" stopOpacity="0.95"/>
            <stop offset="1" stopColor="#8EDDBD" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="rb-4" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#6BCAA8" stopOpacity="0"/>
            <stop offset="0.15" stopColor="#6BCAA8" stopOpacity="0.88"/>
            <stop offset="0.5" stopColor="#49BB94" stopOpacity="0.98"/>
            <stop offset="0.85" stopColor="#34A57E" stopOpacity="0.8"/>
            <stop offset="1" stopColor="#34A57E" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="rb-5" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#8EDDBD" stopOpacity="0"/>
            <stop offset="0.2" stopColor="#8EDDBD" stopOpacity="0.95"/>
            <stop offset="0.6" stopColor="#6BCAA8" stopOpacity="0.92"/>
            <stop offset="1" stopColor="#49BB94" stopOpacity="0"/>
          </linearGradient>
        </defs>
        <g>
          <g className="braid">
            <g>
              <path className="rpath rpath-1" d="M 200.0 -50 C 200.0 170.0, 1118.2 130.0, 1118.2 350 C 1118.2 570.0, 217.6 530.0, 217.6 750 C 217.6 970.0, 1189.5 930.0, 1189.5 1150 C 1189.5 1370.0, 262.0 1330.0, 262.0 1550 C 262.0 1770.0, 1228.3 1730.0, 1228.3 1950 C 1228.3 2170.0, 237.6 2130.0, 237.6 2350 C 237.6 2570.0, 1093.7 2530.0, 1093.7 2750 C 1093.7 2970.0, 373.5 2930.0, 373.5 3150" stroke="url(#rb-1)" strokeWidth="13" opacity="0.42"/>
              <path className="rpath rpath-2" d="M 228.5 -50 C 228.5 170.0, 1078.8 130.0, 1078.8 350 C 1078.8 570.0, 259.3 530.0, 259.3 750 C 259.3 970.0, 1154.7 930.0, 1154.7 1150 C 1154.7 1370.0, 282.4 1330.0, 282.4 1550 C 282.4 1770.0, 1226.7 1730.0, 1226.7 1950 C 1226.7 2170.0, 220.0 2130.0, 220.0 2350 C 220.0 2570.0, 1126.7 2530.0, 1126.7 2750 C 1126.7 2970.0, 332.4 2930.0, 332.4 3150" stroke="url(#rb-3)" strokeWidth="9" opacity="0.42"/>
              <path className="rpath rpath-3" d="M 212.9 -50 C 212.9 170.0, 1080.4 130.0, 1080.4 350 C 1080.4 570.0, 272.0 530.0, 272.0 750 C 272.0 970.0, 1130.4 930.0, 1130.4 1150 C 1130.4 1370.0, 312.9 1330.0, 312.9 1550 C 312.9 1770.0, 1196.6 1730.0, 1196.6 1950 C 1196.6 2170.0, 243.2 2130.0, 243.2 2350 C 243.2 2570.0, 1115.6 2530.0, 1115.6 2750 C 1115.6 2970.0, 329.1 2930.0, 329.1 3150" stroke="url(#rb-2)" strokeWidth="16" opacity="0.42"/>
              <path className="rpath rpath-4" d="M 182.4 -50 C 182.4 170.0, 1104.7 130.0, 1104.7 350 C 1104.7 570.0, 259.3 530.0, 259.3 750 C 259.3 970.0, 1128.8 930.0, 1128.8 1150 C 1128.8 1370.0, 328.5 1330.0, 328.5 1550 C 328.5 1770.0, 1170.4 1730.0, 1170.4 1950 C 1170.4 2170.0, 274.3 2130.0, 274.3 2350 C 274.3 2570.0, 1086.4 2530.0, 1086.4 2750 C 1086.4 2970.0, 350.0 2930.0, 350.0 3150" stroke="url(#rb-4)" strokeWidth="9" opacity="0.42"/>
              <path className="rpath rpath-5" d="M 162.0 -50 C 162.0 170.0, 1139.5 130.0, 1139.5 350 C 1139.5 570.0, 217.6 530.0, 217.6 750 C 217.6 970.0, 1168.2 930.0, 1168.2 1150 C 1168.2 1370.0, 300.0 1330.0, 300.0 1550 C 300.0 1770.0, 1181.8 1730.0, 1181.8 1950 C 1181.8 2170.0, 282.4 2130.0, 282.4 2350 C 282.4 2570.0, 1060.5 2530.0, 1060.5 2750 C 1060.5 2970.0, 388.0 2930.0, 388.0 3150" stroke="url(#rb-5)" strokeWidth="7" opacity="0.42"/>
            </g>
            <g>
              <path className="rpath rpath-1" d="M 200.0 -50 C 200.0 170.0, 1118.2 130.0, 1118.2 350 C 1118.2 570.0, 217.6 530.0, 217.6 750 C 217.6 970.0, 1189.5 930.0, 1189.5 1150 C 1189.5 1370.0, 262.0 1330.0, 262.0 1550 C 262.0 1770.0, 1228.3 1730.0, 1228.3 1950 C 1228.3 2170.0, 237.6 2130.0, 237.6 2350 C 237.6 2570.0, 1093.7 2530.0, 1093.7 2750 C 1093.7 2970.0, 373.5 2930.0, 373.5 3150" stroke="url(#rb-1)" strokeWidth="2.2" opacity="1"/>
              <path className="rpath rpath-2" d="M 228.5 -50 C 228.5 170.0, 1078.8 130.0, 1078.8 350 C 1078.8 570.0, 259.3 530.0, 259.3 750 C 259.3 970.0, 1154.7 930.0, 1154.7 1150 C 1154.7 1370.0, 282.4 1330.0, 282.4 1550 C 282.4 1770.0, 1226.7 1730.0, 1226.7 1950 C 1226.7 2170.0, 220.0 2130.0, 220.0 2350 C 220.0 2570.0, 1126.7 2530.0, 1126.7 2750 C 1126.7 2970.0, 332.4 2930.0, 332.4 3150" stroke="url(#rb-3)" strokeWidth="1.6" opacity="1"/>
              <path className="rpath rpath-3" d="M 212.9 -50 C 212.9 170.0, 1080.4 130.0, 1080.4 350 C 1080.4 570.0, 272.0 530.0, 272.0 750 C 272.0 970.0, 1130.4 930.0, 1130.4 1150 C 1130.4 1370.0, 312.9 1330.0, 312.9 1550 C 312.9 1770.0, 1196.6 1730.0, 1196.6 1950 C 1196.6 2170.0, 243.2 2130.0, 243.2 2350 C 243.2 2570.0, 1115.6 2530.0, 1115.6 2750 C 1115.6 2970.0, 329.1 2930.0, 329.1 3150" stroke="url(#rb-2)" strokeWidth="2.6" opacity="1"/>
              <path className="rpath rpath-4" d="M 182.4 -50 C 182.4 170.0, 1104.7 130.0, 1104.7 350 C 1104.7 570.0, 259.3 530.0, 259.3 750 C 259.3 970.0, 1128.8 930.0, 1128.8 1150 C 1128.8 1370.0, 328.5 1330.0, 328.5 1550 C 328.5 1770.0, 1170.4 1730.0, 1170.4 1950 C 1170.4 2170.0, 274.3 2130.0, 274.3 2350 C 274.3 2570.0, 1086.4 2530.0, 1086.4 2750 C 1086.4 2970.0, 350.0 2930.0, 350.0 3150" stroke="url(#rb-4)" strokeWidth="1.6" opacity="1"/>
              <path className="rpath rpath-5" d="M 162.0 -50 C 162.0 170.0, 1139.5 130.0, 1139.5 350 C 1139.5 570.0, 217.6 530.0, 217.6 750 C 217.6 970.0, 1168.2 930.0, 1168.2 1150 C 1168.2 1370.0, 300.0 1330.0, 300.0 1550 C 300.0 1770.0, 1181.8 1730.0, 1181.8 1950 C 1181.8 2170.0, 282.4 2130.0, 282.4 2350 C 282.4 2570.0, 1060.5 2530.0, 1060.5 2750 C 1060.5 2970.0, 388.0 2930.0, 388.0 3150" stroke="url(#rb-5)" strokeWidth="1.4" opacity="1"/>
            </g>
          </g>
        </g>
      </svg>
      <div className="ribbons-veil"></div>
    </div>
  );
}
