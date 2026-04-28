import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import SEO from '../components/SEO';
import { Icon } from '../components/Icons';
import { localBusinessSchema } from '../data/schemas';

const HEADSHOT_URL =
  'https://matchlessweb.com/wp-content/uploads/2026/01/Jon-Phillips-Headshot-Matchless-Wes-Studio-cropped-1024x986.png';

const GBP_URL = 'https://share.google/hNXTWLyCxsWLwdoiF';

// -------- Hero --------
function AboutHero() {
  const heroRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo('.about-hero-inner > *', 
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.05,
        ease: 'power3.out',
        clearProps: 'all'
      }
    );
  }, { scope: heroRef });

  return (
    <section className="about-hero section-wrap hero-grid-bg" ref={heroRef}>
      <div className="about-hero-inner">
        <div className="hero-eyebrow">
          <span className="hero-eyebrow-text">About Matchless</span>
          <span className="hero-eyebrow-divider" />
          <span className="hero-eyebrow-link">Clinton, MS · 20+ five-star reviews</span>
        </div>
        <h1 className="about-hero-title">
          You need a web <em>consultant</em>,<br />
          not a web designer.
        </h1>
        <p className="about-hero-sub">
          Most business websites are liabilities — pretty pages that don't move revenue. I build
          high-performance Client Acquisition Systems that do.
        </p>
      </div>
    </section>
  );
}

// -------- Bio + headshot --------
function BioSection() {
  return (
    <section className="about-bio section-wrap">
      <div className="section">
        <div className="section-inner about-bio-grid">
          <div className="about-bio-portrait">
            <img
              src={HEADSHOT_URL}
              alt="Jon Phillips, founder of Matchless Web Studio"
              width="1024"
              height="986"
              loading="lazy"
            />
            <div className="about-bio-portrait-tag">
              <span className="about-bio-tag-dot" />
              Jon Phillips · Founder
            </div>
          </div>
          <div className="about-bio-copy">
            <div className="sec-eyebrow">
              <span className="sec-eyebrow-dot" />
              The business owner behind the work
            </div>
            <h2 className="about-bio-title">
              I treat your website like the <span className="accent">revenue tool</span> it should be.
            </h2>
            <p className="about-bio-lead">
              Matchless is a small studio with one job: turn your website from a digital
              brochure into a system that brings in qualified work. No bloat, no agency
              theater — every decision laddered to the question, "does this help you
              get clients?"
            </p>
            <p className="about-bio-body">
              I work directly with founders and business owners across Mississippi and beyond.
              You'll talk to me on the call, in the build, and after launch — not a
              project manager translating between you and a team you've never met.
            </p>
            <ul className="about-bio-points">
              <li>
                <Icon.Bolt /> Lightning-fast, mobile-first builds
              </li>
              <li>
                <Icon.Search /> Clear messaging and navigation
              </li>
              <li>
                <Icon.Layers /> Strategic conversion funnels
              </li>
              <li>
                <Icon.Sparkles /> Data-driven ROI optimization
              </li>
              <li>
                <Icon.Globe /> Integrated traffic and follow-up systems
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// -------- Process --------
const STEPS = [
  {
    n: '01',
    t: 'Onboarding & Ideation',
    d: 'We map your offer, audience, and the path a stranger takes to becoming a client. The system gets designed before a single pixel does.',
  },
  {
    n: '02',
    t: 'Design & Development',
    d: 'A fast, mobile-first build with messaging that earns attention and a structure that funnels it. You review at every milestone — no surprise reveal at the end.',
  },
  {
    n: '03',
    t: 'Training & Feedback',
    d: 'You get loom-walkthroughs and a working session so you (or your team) can confidently update content, publish posts, and read the analytics.',
  },
  {
    n: '04',
    t: 'Hosting & Aftercare',
    d: 'Managed hosting, monitoring, and small monthly improvements based on what the data shows — so the site keeps compounding instead of decaying.',
  },
];

function HowIWork() {
  return (
    <section className="about-process section-wrap">
      <div className="section">
        <div className="section-inner">
          <div className="sec-eyebrow">
            <span className="sec-eyebrow-dot" />
            How I work
          </div>
          <h2 className="about-section-title">Four steps. No mystery.</h2>
          <p className="about-section-sub">
            Every engagement follows the same arc — designed so you always know what's
            happening, what's next, and what it means for your business.
          </p>
          <div className="about-process-grid">
            {STEPS.map((s) => (
              <div key={s.n} className="about-process-card">
                <div className="about-process-n">{s.n}</div>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// -------- Reviews carousel (scaffold; real text to be pasted) --------
import ReviewsCarousel from '../components/ReviewsCarousel';




// -------- CTA strip --------
function AboutCTA() {
  return (
    <section className="about-cta section-wrap">
      <div className="section about-cta-section">
        <div className="section-inner about-cta-inner">
          <div>
            <div className="sec-eyebrow">
              <span className="sec-eyebrow-dot" />
              Let's get to work
            </div>
            <h2 className="about-cta-title">
              Ready to stop treating your website like a liability?
            </h2>
            <p className="about-cta-sub">
              Tell me where you are and where you want to be. You'll get an honest reply
              within one business day — and a 15-minute call if we're a fit.
            </p>
          </div>
          <NavLink to="/contact" className="btn btn-primary btn-lg">
            Book a discovery call
            <span className="btn-arrow">
              <Icon.ArrowRight />
            </span>
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <main className="about-page">
      <SEO 
        title="About | Matchless Web"
        description="We're a two-person team in Mississippi building high-performance client acquisition systems for service-based businesses who are ready to scale."
        url="/about"
        schema={localBusinessSchema}
      />
      <AboutHero />
      <BioSection />
      <HowIWork />
      <ReviewsCarousel />
      <AboutCTA />
    </main>
  );
}
