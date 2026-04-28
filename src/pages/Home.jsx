import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { DataFlowSVG } from '../components/DataFlowSVG';
import { REVIEWS } from '../data/reviews';

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { Icon } from '../components/Icons';
import { 
  Problem, 
  Guide, 
  Plan, 
  Services, 
  Stakes, 
  Testimonials, 
  FAQ, 
  FinalCTA 
} from '../components/Sections';

// -------- Placeholder avatars (abstract portraits in warm tones) --------
const AvatarA = () => (
  <svg viewBox="0 0 68 68"><defs><linearGradient id="avA" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stopColor="#E89568"/><stop offset="1" stopColor="#B35F3F"/></linearGradient></defs>
    <rect width="68" height="68" fill="url(#avA)"/>
    <circle cx="34" cy="27" r="11" fill="#f3d9c4"/>
    <ellipse cx="34" cy="60" rx="22" ry="18" fill="#f3d9c4"/>
    <path d="M23 20 Q34 6 46 20 Q46 26 40 24 Q34 18 28 24 Q22 26 23 20Z" fill="#3A2418"/>
  </svg>
);
const AvatarB = () => (
  <svg viewBox="0 0 68 68"><defs><linearGradient id="avB" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stopColor="#5A7A8C"/><stop offset="1" stopColor="#2F4454"/></linearGradient></defs>
    <rect width="68" height="68" fill="url(#avB)"/>
    <circle cx="34" cy="28" r="11" fill="#e8cdb0"/>
    <ellipse cx="34" cy="62" rx="22" ry="18" fill="#3A3A42"/>
    <path d="M24 22 Q34 10 44 22 L44 28 L24 28Z" fill="#2A2520"/>
    <rect x="26" y="26" width="16" height="5" rx="2" fill="#1C2023"/>
  </svg>
);
const AvatarC = () => (
  <svg viewBox="0 0 68 68"><defs><linearGradient id="avC" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stopColor="#C9B79A"/><stop offset="1" stopColor="#8F7A5E"/></linearGradient></defs>
    <rect width="68" height="68" fill="url(#avC)"/>
    <circle cx="34" cy="27" r="11" fill="#f1d6b8"/>
    <ellipse cx="34" cy="62" rx="22" ry="18" fill="#E8E3DC"/>
    <path d="M22 24 Q34 8 46 24 Q48 34 42 34 L42 22 L26 22 L26 34 Q20 34 22 24Z" fill="#5B2E1F"/>
  </svg>
);
const AvatarProof = () => (
  <svg viewBox="0 0 44 44"><defs><linearGradient id="avP" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stopColor="#6B4A32"/><stop offset="1" stopColor="#3A2618"/></linearGradient></defs>
    <rect width="44" height="44" fill="url(#avP)"/>
    <circle cx="22" cy="18" r="7" fill="#C08B5F"/>
    <ellipse cx="22" cy="40" rx="14" ry="12" fill="#2A1E14"/>
    <path d="M15 14 Q22 6 29 14 L29 18 L15 18Z" fill="#1A1008"/>
  </svg>
);

// -------- Panel (right-side chat-style card) --------
function Panel() {
  const [tab, setTab] = useState("STRATEGY");
  const tabs = ["STRATEGY", "BUILD", "DEPLOY"];

  const prompts = {
    STRATEGY: { q: "Where should we focus to win?", chips: [
      {icon: <Icon.Download/>, label: "Market Audit"},
      {icon: <Icon.Sparkles/>, label: "Positioning"}
    ]},
    BUILD: { q: "How can we scale your revenue?", chips: [
      {icon: <Icon.Download/>, label: "Funnel Architecture"},
      {icon: <Icon.Sparkles/>, label: "SEO Mastery"}
    ]},
    DEPLOY: { q: "What ships in the first 30 days?", chips: [
      {icon: <Icon.Download/>, label: "Launch Plan"},
      {icon: <Icon.Sparkles/>, label: "Analytics Setup"}
    ]},
  };
  const current = prompts[tab];

  const services = [
    { label: "WEB", icon: <Icon.Globe/> },
    { label: "CMS", icon: <Icon.Layers/> },
    { label: "SEO", icon: <Icon.Search/> },
    { label: "CRM", icon: <Icon.Users/> },
  ];

  return (
    <div className="panel">
      <div className="panel-avatars">
        {REVIEWS.filter(r => ["Joel Bomgar", "Emily Russ", "Tanya Eubanks"].includes(r.name)).map(r => (
          <div className="panel-avatar" key={r.name}>
            <img src={r.avatar} alt={r.name} fetchPriority="high" decoding="sync" style={{width:'100%', height:'100%', borderRadius:'50%', objectFit:'cover'}} onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }} />
            <div style={{width:'100%', height:'100%', borderRadius:'50%', backgroundColor: 'var(--mw-green-400)', display: 'none', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: 'bold', fontSize: '16px'}}>{r.name.charAt(0)}</div>
          </div>
        ))}
      </div>
      <div className="panel-tabs" role="tablist">
        {tabs.map(t => (
          <button key={t} className={`panel-tab ${tab === t ? 'active' : ''}`} onClick={() => setTab(t)} role="tab" aria-selected={tab === t}>
            {t}
          </button>
        ))}
      </div>
      <div className="panel-prompt">
        <div className="prompt-text">{current.q}</div>
        <div className="prompt-chips">
          {current.chips.map((c, i) => (
            <button key={i} className="prompt-chip">{c.icon}{c.label}</button>
          ))}
        </div>
      </div>
      <div className="panel-services">
        {services.map(s => (
          <div key={s.label} className="service-pill">
            <span className="service-dot">{s.icon}</span>
            <span className="service-label">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  const heroRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(".hero-left > *, .hero-right", 
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.05,
        ease: "power3.out",
        delay: 0.15,
        clearProps: "all"
      }
    );
  }, { scope: heroRef });

  const T = {
    accentWord: "revenue.",
    activeTab: "BUILD",
    headlineLine1: "Systems",
    headlineLine2: "that scale",
    headlineLine3: "{accent}",
  };

  const renderLine = (tpl) => {
    const parts = tpl.split(/(\{accent\})/g);
    return parts.map((p, i) => p === "{accent}"
      ? <span key={i} className="accent">{T.accentWord}</span>
      : <React.Fragment key={i}>{p}</React.Fragment>
    );
  };

  return (
    <section className="hero-wrap" ref={heroRef}>
      <div className="hero">
        <div className="hero-grid">
          <div className="hero-left">
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-text">Client Acquisition Systems</span>
              <span className="hero-eyebrow-divider"/>
              <Link to="/case-studies" className="hero-eyebrow-link">Read our case studies</Link>
            </div>

            <h1 className="hero-title">
              {renderLine(T.headlineLine1)}<br/>
              {renderLine(T.headlineLine2)}<br/>
              {renderLine(T.headlineLine3)}
            </h1>

            <p className="hero-sub">
              High-performance digital engines that consistently attract, capture, and convert your ideal clients on autopilot.
            </p>

            <div className="hero-divider"/>

            <div className="hero-proof">
              <div style={{display:'flex', alignItems:'center', gap:14}}>
                <span className="proof-avatar">
                  <img src={REVIEWS.find(r => r.name === 'CJ Stewart')?.avatar} alt="CJ Stewart" fetchPriority="high" decoding="sync" style={{width: 48, height: 48, borderRadius: '50%', objectFit: 'cover'}} />
                </span>
                <span className="proof-text">
                  <div className="proof-title">200% Growth on Average</div>
                  <div className="proof-sub">B2B &amp; Agencies</div>
                </span>
              </div>
              <div className="proof-rating">
                <Icon.Star/> 4.9
              </div>
            </div>

            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Build your system
                <span className="btn-arrow"><Icon.ArrowRight/></span>
              </Link>
              <Link to="/solutions" className="btn btn-ghost btn-lg">Explore Solutions</Link>
            </div>
          </div>

          <div className="hero-right">
            <Panel/>
          </div>
        </div>

        <DataFlowSVG />
        <div className="hero-scroll" aria-hidden="true">
          <Icon.ChevronDown/>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Guide />
      <Plan />
      <Services />
      <Stakes />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
