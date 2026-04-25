import { useLayoutEffect, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SecIcon, Icon } from '../components/Icons';
import { FinalCTA } from '../components/Sections';

gsap.registerPlugin(ScrollTrigger);

export default function Solutions() {
  const containerRef = useRef(null);
  const { hash } = useLocation();

  // Scroll to hash on load if present
  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        // Small delay ensures layout is ready before scrolling
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in the hero header
      gsap.fromTo('.solutions-header', 
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          clearProps: 'all'
        }
      );

      // Stagger in the systems on scroll
      gsap.utils.toArray('.system-section').forEach((section) => {
        gsap.fromTo(section, 
          { y: 60, opacity: 0 },
          {
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              toggleActions: 'play none none none'
            },
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            clearProps: 'all'
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="solutions-page" ref={containerRef}>
      <div className="solutions-header">
        <div className="sec-eyebrow" style={{ justifyContent: 'center' }}>Engineered For Revenue</div>
        <h1 className="mw-h1">Most Websites Are Dead Ends.</h1>
        <p>
          We don't build brochures that visitors glance at and bounce away from forever. We build revenue-generating assets fine-tuned to capture traffic, retarget users across the web, and nurture visitors into paying clients through three core systems.
        </p>
      </div>

      <div className="solutions-systems">
        
        {/* System 1: Client Acquisition */}
        <div className="system-section" id="client-acquisition">
          <div className="system-visual">
            <svg className="visual-bg-svg" viewBox="0 0 200 200">
              <path className="anim-arrow" d="M20 100 Q 100 20 180 100" fill="none" stroke="rgba(107,202,168,0.2)" strokeWidth="2"/>
              <circle cx="100" cy="100" r="80" stroke="rgba(107,202,168,0.1)" fill="none" strokeWidth="1"/>
            </svg>
            <div className="visual-card anim-float">
              <span className="visual-badge"><Icon.Sparkles size={14}/> Traffic Capture</span>
              <div className="visual-title">Never Lose a Visitor</div>
              <div className="visual-text">Every click is tracked, tagged, and dropped into a retargeting audience.</div>
            </div>
          </div>
          <div className="system-content">
            <h2>Client Acquisition Systems</h2>
            <p>
              Your website shouldn't just be an information hub; it needs to be an active participant in your sales process. Our Client Acquisition Systems are designed to catch traffic before it leaves.
            </p>
            <h3>Capture & Retargeting</h3>
            <p>
              By implementing advanced pixel tracking and lead magnets, we turn passive visitors into actionable data. If someone leaves without buying, they don't disappear. We set up the infrastructure so you can retarget them with email marketing or highly targeted ads across the platforms they visit every day.
            </p>
          </div>
        </div>

        {/* System 2: Sales Funnels */}
        <div className="system-section" id="sales-funnels">
          <div className="system-visual">
            <svg className="visual-bg-svg" viewBox="0 0 200 200">
              <path d="M 20 20 L 180 20 L 120 180 L 80 180 Z" fill="rgba(107,202,168,0.05)" stroke="var(--mw-green-400)" strokeWidth="1"/>
              <line x1="40" y1="70" x2="160" y2="70" stroke="var(--mw-green-400)" strokeWidth="1" strokeDasharray="4 4"/>
              <line x1="70" y1="130" x2="130" y2="130" stroke="var(--mw-green-400)" strokeWidth="1" strokeDasharray="4 4"/>
            </svg>
            <div className="visual-card anim-float" style={{ animationDelay: '1s' }}>
              <span className="visual-badge"><SecIcon.ArrowR size={14}/> Customer Journey</span>
              <div className="visual-title">Frictionless Nurturing</div>
              <div className="visual-text">Guiding prospects effortlessly from awareness to purchase.</div>
            </div>
          </div>
          <div className="system-content">
            <h2>Sales Funnels</h2>
            <p>
              A confused mind always says no. Our Sales Funnels map out the exact psychological journey your customers take, removing every ounce of friction from their path.
            </p>
            <h3>Fine-Tuned Conversion</h3>
            <p>
              We don't leave conversions up to chance. We design highly specific landing pages and automated email nurture sequences that educate your prospects, overcome their objections, and guide them smoothly toward booking a call or making a purchase.
            </p>
          </div>
        </div>

        {/* System 3: Business Automations */}
        <div className="system-section" id="business-automations">
          <div className="system-visual">
            <svg className="visual-bg-svg" viewBox="0 0 200 200">
              <circle cx="100" cy="100" r="80" stroke="rgba(107,202,168,0.1)" fill="none" strokeWidth="2" strokeDasharray="10 10" className="anim-spin"/>
              <circle cx="100" cy="100" r="50" stroke="var(--mw-green-400)" fill="none" strokeWidth="1"/>
              <circle cx="100" cy="100" r="6" fill="var(--mw-green-400)"/>
            </svg>
            <div className="visual-card anim-float" style={{ animationDelay: '2s' }}>
              <span className="visual-badge"><SecIcon.Check size={14}/> The Ecosystem</span>
              <div className="visual-title">Reclaim Your Time</div>
              <div className="visual-text">Automated handoffs, CRM syncs, and instant follow-ups.</div>
            </div>
          </div>
          <div className="system-content">
            <h2>Business Automations</h2>
            <p>
              Stop doing manual data entry. We connect your entire tech stack so that your business operates like a well-oiled machine behind the scenes.
            </p>
            <h3>Seamless Integration</h3>
            <p>
              When a lead comes in, our automations instantly log them in your CRM, trigger your email marketing sequences, and notify your sales team. We connect your scheduling tools, payment processors, and marketing platforms into a single ecosystem that saves you hours every week.
            </p>
          </div>
        </div>

      </div>

      {/* Call to Action */}
      <div style={{ marginTop: '160px' }}>
        <FinalCTA />
      </div>
    </div>
  );
}
