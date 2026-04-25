import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SecIcon } from '../components/Icons';
import { FinalCTA } from '../components/Sections';

gsap.registerPlugin(ScrollTrigger);

export default function Process() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in the hero header
      gsap.from('.process-header', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });

      // Stagger in the phases on scroll
      gsap.utils.toArray('.process-phase').forEach((phase) => {
        gsap.from(phase, {
          scrollTrigger: {
            trigger: phase,
            start: 'top 80%',
            toggleActions: 'play none none none'
          },
          y: 60,
          opacity: 0,
          duration: 1,
          ease: 'power3.out'
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="process-page" ref={containerRef}>
      <div className="process-header">
        <div className="sec-eyebrow" style={{ justifyContent: 'center' }}>The Matchless Methodology</div>
        <h1 className="mw-h1" style={{ textWrap: 'balance' }}>A Methodical Process for Predictable&nbsp;Growth.</h1>
        <p>
          We don't guess. We analyze your market, study your competitors, and build a digital system engineered to position you as the quintessential, obvious choice for your ideal clients.
        </p>
      </div>

      <div className="process-phases">
        
        {/* Phase 1 */}
        <div className="process-phase">
          <div className="phase-node">01</div>
          <div className="phase-visual">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="80" stroke="rgba(107,202,168,0.2)" strokeWidth="1"/>
              <circle cx="100" cy="100" r="50" stroke="rgba(107,202,168,0.2)" strokeWidth="1"/>
              <circle cx="100" cy="100" r="20" stroke="rgba(107,202,168,0.2)" strokeWidth="1"/>
              <path className="anim-sweep" d="M100 100 L100 20 A80 80 0 0 1 180 100 Z" fill="url(#radar-sweep)" opacity="0.5"/>
              <circle cx="130" cy="60" r="4" fill="var(--mw-green-400)" className="anim-pulse d-1"/>
              <circle cx="70" cy="140" r="4" fill="var(--mw-green-400)" className="anim-pulse d-2"/>
              <circle cx="150" cy="120" r="4" fill="var(--mw-green-400)" className="anim-pulse d-3"/>
              <defs>
                <linearGradient id="radar-sweep" x1="100" y1="100" x2="180" y2="100" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="var(--mw-green-400)" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="var(--mw-green-400)" stopOpacity="0"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="phase-content">
            <h2>Competitive & Local Research</h2>
            <p>
              Before we write a single line of code, we dive deep into your specific market. If you have a physical location, we map out competitors within your exact radius.
            </p>
            <p>
              We analyze what other businesses in your industry are doing well—and more importantly, where they are failing. By mining their review profiles and scanning relevant industry forums, we identify the pain points their customers are vocalizing. We use this intelligence to position your business as the ultimate solution to those exact problems.
            </p>
            <ul>
              <li><SecIcon.Check size={18} /> Deep-dive local competitor analysis</li>
              <li><SecIcon.Check size={18} /> Review & forum sentiment scraping</li>
              <li><SecIcon.Check size={18} /> Identifying market gaps to exploit</li>
            </ul>
          </div>
        </div>

        {/* Phase 2 */}
        <div className="process-phase">
          <div className="phase-node">02</div>
          <div className="phase-visual">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 180 L180 180" stroke="rgba(255,255,255,0.1)" strokeWidth="2"/>
              <path d="M20 180 L20 20" stroke="rgba(255,255,255,0.1)" strokeWidth="2"/>
              <path className="anim-draw" d="M20 180 L60 140 L100 150 L140 80 L180 40" stroke="var(--mw-green-400)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="60" cy="140" r="6" fill="var(--bg-2)" stroke="var(--mw-green-400)" strokeWidth="2" className="anim-pulse d-1"/>
              <circle cx="100" cy="150" r="6" fill="var(--bg-2)" stroke="var(--mw-green-400)" strokeWidth="2" className="anim-pulse d-2"/>
              <circle cx="140" cy="80" r="6" fill="var(--bg-2)" stroke="var(--mw-green-400)" strokeWidth="2" className="anim-pulse d-3"/>
              <circle cx="180" cy="40" r="6" fill="var(--bg-2)" stroke="var(--mw-green-400)" strokeWidth="2" className="anim-pulse d-1"/>
            </svg>
          </div>
          <div className="phase-content">
            <h2>SEO & Content Strategy</h2>
            <p>
              A beautiful website is useless if no one can find it. We perform a robust Search Engine Optimization (SEO) analysis to identify the most popular, high-intent keywords that your ideal customers are actively searching for.
            </p>
            <p>
              We ensure your site is engineered to rank for these terms the moment it launches. But launch is just the beginning. We map out a targeted, long-term content game plan designed to continuously capture search volume and outrank your competition month after month.
            </p>
            <ul>
              <li><SecIcon.Check size={18} /> High-intent keyword targeting</li>
              <li><SecIcon.Check size={18} /> Technical on-page SEO optimization</li>
              <li><SecIcon.Check size={18} /> Long-term content production roadmap</li>
            </ul>
          </div>
        </div>

        {/* Phase 3 */}
        <div className="process-phase">
          <div className="phase-node">03</div>
          <div className="phase-visual">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 100 C 50 50, 100 50, 100 100 C 100 150, 150 150, 150 100 C 150 50, 100 50, 100 100 C 100 150, 50 150, 50 100 Z" stroke="rgba(107,202,168,0.2)" strokeWidth="8" strokeLinecap="round" fill="none"/>
              <path className="anim-loop" d="M50 100 C 50 50, 100 50, 100 100 C 100 150, 150 150, 150 100 C 150 50, 100 50, 100 100 C 100 150, 50 150, 50 100 Z" stroke="var(--mw-green-400)" strokeWidth="8" strokeLinecap="round" fill="none"/>
            </svg>
          </div>
          <div className="phase-content">
            <h2>The Long-Term Growth Plan</h2>
            <p>
              No website is ever truly "done" when it launches. A site is a living, breathing asset that must evolve alongside your business.
            </p>
            <p>
              We maintain an ongoing, strategic partnership with our clients. Together, we continually identify new areas of growth and flesh out your website with genuinely relevant resources and helpful information. Over time, this compounds—cementing your business as the undisputed expert in the field and the obvious pick for customers.
            </p>
            <ul>
              <li><SecIcon.Check size={18} /> Ongoing strategic partnership</li>
              <li><SecIcon.Check size={18} /> Continuous resource & content expansion</li>
              <li><SecIcon.Check size={18} /> Cementing your status as the industry expert</li>
            </ul>
          </div>
        </div>

      </div>
      
      {/* Call to Action */}
      <div style={{ marginTop: '120px' }}>
        <FinalCTA />
      </div>
    </div>
  );
}
