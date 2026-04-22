/* Sections.jsx — all landing page sections below the hero */

import React from 'react';
import { SecIcon } from './Icons';

// ============ PLACEHOLDER AVATARS ============
const TAvatar = ({ hue }) => {
  const palettes = {
    warm: ['#E89568', '#B35F3F', '#f3d9c4'],
    cool: ['#5A7A8C', '#2F4454', '#e8cdb0'],
    earth: ['#C9B79A', '#8F7A5E', '#f1d6b8'],
    deep: ['#6B4A32', '#3A2618', '#C08B5F'],
  };
  const [a, b, skin] = palettes[hue] || palettes.warm;
  return (
    <svg viewBox="0 0 44 44">
      <defs><linearGradient id={`tg-${hue}`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={a}/><stop offset="1" stopColor={b}/></linearGradient></defs>
      <rect width="44" height="44" fill={`url(#tg-${hue})`}/>
      <circle cx="22" cy="18" r="7" fill={skin}/>
      <ellipse cx="22" cy="40" rx="14" ry="12" fill={skin} opacity="0.85"/>
      <path d="M14 15 Q22 5 30 15 L30 19 L14 19Z" fill={b} opacity="0.9"/>
    </svg>
  );
};

// ============ SERVICE MOCK ILLUSTRATIONS ============
const ServiceMock1 = () => (
  <svg viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice">
    <rect width="400" height="180" fill="#0A0F0D"/>
    <g opacity="0.4">
      {[...Array(7)].map((_, i) => (<line key={`v${i}`} x1={i*64} y1="0" x2={i*64} y2="180" stroke="#49BB94" strokeWidth="1" opacity="0.15"/>))}
      {[...Array(4)].map((_, i) => (<line key={`h${i}`} x1="0" y1={i*45} x2="400" y2={i*45} stroke="#49BB94" strokeWidth="1" opacity="0.15"/>))}
    </g>
    {/* Browser mock */}
    <rect x="40" y="30" width="320" height="130" rx="8" fill="#17221D" stroke="rgba(255,255,255,0.08)"/>
    <circle cx="55" cy="45" r="3" fill="#E87863"/>
    <circle cx="67" cy="45" r="3" fill="#F1C56A"/>
    <circle cx="79" cy="45" r="3" fill="#49BB94"/>
    <rect x="55" y="68" width="130" height="10" rx="2" fill="#49BB94" opacity="0.8"/>
    <rect x="55" y="86" width="180" height="6" rx="2" fill="#F0ECE4" opacity="0.2"/>
    <rect x="55" y="98" width="160" height="6" rx="2" fill="#F0ECE4" opacity="0.15"/>
    <rect x="55" y="120" width="80" height="24" rx="12" fill="#49BB94"/>
    <rect x="240" y="68" width="100" height="76" rx="6" fill="rgba(73,187,148,0.1)" stroke="rgba(73,187,148,0.3)"/>
    <circle cx="290" cy="106" r="18" fill="none" stroke="#49BB94" strokeWidth="2"/>
    <path d="M285 106 l4 4 l8 -8" fill="none" stroke="#49BB94" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
const ServiceMock2 = () => (
  <svg viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice">
    <rect width="400" height="180" fill="#0A0F0D"/>
    <g opacity="0.4">
      {[...Array(7)].map((_, i) => (<line key={`v${i}`} x1={i*64} y1="0" x2={i*64} y2="180" stroke="#49BB94" strokeWidth="1" opacity="0.15"/>))}
      {[...Array(4)].map((_, i) => (<line key={`h${i}`} x1="0" y1={i*45} x2="400" y2={i*45} stroke="#49BB94" strokeWidth="1" opacity="0.15"/>))}
    </g>
    {/* Funnel flow */}
    <g transform="translate(50,40)">
      <rect x="0" y="0" width="80" height="36" rx="8" fill="#17221D" stroke="rgba(73,187,148,0.4)"/>
      <text x="40" y="22" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" fill="#49BB94" fontWeight="600">EMAIL</text>
      <rect x="0" y="55" width="80" height="36" rx="8" fill="#17221D" stroke="rgba(73,187,148,0.4)"/>
      <text x="40" y="77" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" fill="#49BB94" fontWeight="600">SMS</text>
      <rect x="0" y="110" width="80" height="36" rx="8" fill="#17221D" stroke="rgba(73,187,148,0.4)"/>
      <text x="40" y="132" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" fill="#49BB94" fontWeight="600">ADS</text>

      <path d="M80 18 C 120 18 120 73 160 73" stroke="#49BB94" strokeWidth="1.5" fill="none" strokeDasharray="4 4"/>
      <path d="M80 73 L 160 73" stroke="#49BB94" strokeWidth="1.5" fill="none" strokeDasharray="4 4"/>
      <path d="M80 128 C 120 128 120 73 160 73" stroke="#49BB94" strokeWidth="1.5" fill="none" strokeDasharray="4 4"/>

      <rect x="160" y="55" width="120" height="36" rx="8" fill="#49BB94"/>
      <text x="220" y="77" textAnchor="middle" fontFamily="Inter Tight" fontSize="12" fill="#FFFFFF" fontWeight="700">CONVERSION</text>
    </g>
  </svg>
);
const ServiceMock3 = () => (
  <svg viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice">
    <rect width="400" height="180" fill="#0A0F0D"/>
    <g opacity="0.4">
      {[...Array(7)].map((_, i) => (<line key={`v${i}`} x1={i*64} y1="0" x2={i*64} y2="180" stroke="#49BB94" strokeWidth="1" opacity="0.15"/>))}
      {[...Array(4)].map((_, i) => (<line key={`h${i}`} x1="0" y1={i*45} x2="400" y2={i*45} stroke="#49BB94" strokeWidth="1" opacity="0.15"/>))}
    </g>
    {/* Workflow nodes */}
    <g transform="translate(40,50)">
      <circle cx="20" cy="40" r="18" fill="#17221D" stroke="#49BB94" strokeWidth="1.5"/>
      <circle cx="20" cy="40" r="5" fill="#49BB94"/>
      <path d="M40 40 L 80 40" stroke="#49BB94" strokeWidth="1.5"/>
      <rect x="80" y="22" width="80" height="36" rx="8" fill="#17221D" stroke="rgba(73,187,148,0.4)"/>
      <text x="120" y="44" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill="#49BB94" fontWeight="600">AUTOMATE</text>
      <path d="M160 40 L 200 40" stroke="#49BB94" strokeWidth="1.5"/>
      <path d="M190 34 L 200 40 L 190 46" stroke="#49BB94" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="200" y="10" width="120" height="60" rx="10" fill="rgba(73,187,148,0.08)" stroke="rgba(73,187,148,0.3)"/>
      <rect x="212" y="22" width="50" height="6" rx="2" fill="#49BB94" opacity="0.8"/>
      <rect x="212" y="34" width="80" height="4" rx="2" fill="#F0ECE4" opacity="0.3"/>
      <rect x="212" y="44" width="70" height="4" rx="2" fill="#F0ECE4" opacity="0.3"/>
      <rect x="212" y="54" width="60" height="4" rx="2" fill="#F0ECE4" opacity="0.3"/>
    </g>
  </svg>
);

// ============ PROBLEM ============
function Problem() {
  const cards = [
    { icon: <SecIcon.Hat/>, title: "Wearing too many hats", body: "You're the CEO, the marketer, the webmaster, and the support team. Nothing gets the focus it deserves." },
    { icon: <SecIcon.Whack/>, title: "Playing whack-a-mole", body: "Broken forms, slow pages, failed integrations — technical fires eating the week you should spend with customers." },
    { icon: <SecIcon.Clock/>, title: "A site that embarrasses you", body: "The quality of your work is world-class. Your website doesn't reflect that, and you know leads are slipping because of it." },
  ];
  return (
    <section className="section-wrap" id="problem">
      <div className="section">
        <div className="section-inner">
          <div className="sec-eyebrow">The Problem</div>
          <h2 className="sec-title">You should be running your business.<br/><span className="accent">Not your website.</span></h2>
          <p className="sec-lead">
            Every hour you spend wrestling with your website is an hour stolen from the work only you can do. It shouldn't be this way.
          </p>
          <div className="problem-grid">
            {cards.map((c, i) => (
              <div key={i} className="problem-card">
                <div className="problem-icon">{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ GUIDE ============
function Guide() {
  return (
    <section className="section-wrap" id="guide">
      <div className="section">
        <div className="section-inner">
          <div className="guide-grid">
            <div>
              <div className="sec-eyebrow">Meet Your Guide</div>
              <h2 className="sec-title">We've shipped the system <span className="accent">so you don't have to.</span></h2>
              <p className="sec-lead">
                We're a two-person studio of operators who've built and scaled revenue systems for B2B companies and high-growth small businesses. We know what converts, what breaks, and what to ignore. You hand off the website — we run the protocol.
              </p>
              <div className="guide-stats">
                <div className="stat">
                  <div className="stat-value">200%</div>
                  <div className="stat-label">Average revenue growth across clients in year one</div>
                </div>
                <div className="stat">
                  <div className="stat-value">10–20h</div>
                  <div className="stat-label">Given back to founders every week</div>
                </div>
                <div className="stat">
                  <div className="stat-value">4.9/5</div>
                  <div className="stat-label">Client satisfaction across 40+ engagements</div>
                </div>
                <div className="stat">
                  <div className="stat-value">14 days</div>
                  <div className="stat-label">From kickoff to first system live</div>
                </div>
              </div>
            </div>
            <div className="dash">
              <div className="dash-head">
                <div className="dash-title"><span className="dash-dot"/> Revenue Protocol — Live</div>
                <div className="dash-range">LAST 30 DAYS</div>
              </div>
              <div className="dash-metric">
                <div className="dash-big">$148,420</div>
                <div className="dash-delta">▲ 32.4%</div>
              </div>
              <div className="dash-chart">
                <svg viewBox="0 0 320 140">
                  <defs>
                    <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="#49BB94" stopOpacity="0.4"/>
                      <stop offset="1" stopColor="#49BB94" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                  <path d="M0 100 L 40 90 L 80 95 L 120 70 L 160 75 L 200 55 L 240 60 L 280 30 L 320 35 L 320 140 L 0 140 Z" fill="url(#chartFill)"/>
                  <path d="M0 100 L 40 90 L 80 95 L 120 70 L 160 75 L 200 55 L 240 60 L 280 30 L 320 35" fill="none" stroke="#49BB94" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="280" cy="30" r="4" fill="#49BB94"/>
                  <circle cx="280" cy="30" r="8" fill="#49BB94" opacity="0.2"/>
                </svg>
              </div>
              <div className="dash-rows">
                <div className="dash-row"><span className="dash-row-label">Qualified leads</span><span className="dash-row-val">+184</span></div>
                <div className="dash-row"><span className="dash-row-label">Conversion rate</span><span className="dash-row-val">6.2%</span></div>
                <div className="dash-row"><span className="dash-row-label">Hours reclaimed</span><span className="dash-row-val">62h / wk</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ PLAN ============
function Plan() {
  const steps = [
    { n: "01", title: "Book a call", body: "A 15-minute discovery call. We learn your business, you learn whether we're a fit. No pitch, no pressure." },
    { n: "02", title: "We build", body: "We design and ship the full Client Acquisition System — site, funnels, automations — in weeks, not months." },
    { n: "03", title: "You scale", body: "Your website runs itself. You get your week back and focus on the work only you can do." },
  ];
  return (
    <section className="section-wrap" id="plan">
      <div className="section">
        <div className="section-inner">
          <div className="sec-eyebrow">The Plan</div>
          <h2 className="sec-title">Three steps. <span className="accent">One less thing on your plate.</span></h2>
          <p className="sec-lead">A clear path from the call that starts it all to the scaled system that runs without you.</p>
          <div className="plan-steps">
            {steps.map(s => (
              <div key={s.n} className="plan-step">
                <div className="plan-num">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ SERVICES ============
function Services() {
  const items = [
    { tag: "SYSTEM 01", title: "Client Acquisition Systems", body: "A pretty website isn't enough. We build sites engineered to convert visitors into leads and leads into customers.", mock: <ServiceMock1/> },
    { tag: "SYSTEM 02", title: "Sales Funnels", body: "Email, SMS, and paid ad campaigns that deliver the perfect message at the perfect time to your ideal customers.", mock: <ServiceMock2/> },
    { tag: "SYSTEM 03", title: "Business Automations", body: "If it's repeatable and structured, it can be automated. Free your team to focus on work that actually needs them.", mock: <ServiceMock3/> },
  ];
  return (
    <section className="section-wrap" id="services">
      <div className="section">
        <div className="section-inner">
          <div className="sec-eyebrow">What We Build</div>
          <h2 className="sec-title">Three systems. <span className="accent">Compounding results.</span></h2>
          <p className="sec-lead">Each one stands alone. Together, they make your revenue predictable.</p>
          <div className="services-grid">
            {items.map((s, i) => (
              <div key={i} className="service-card">
                <div className="service-media">{s.mock}</div>
                <div className="service-body">
                  <div className="service-tag">{s.tag}</div>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                  <a href="#" className="service-link">Learn more <SecIcon.ArrowR/></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ STAKES ============
function Stakes() {
  const bad = [
    "Keep wearing every hat — CEO, marketer, IT, support",
    "Play whack-a-mole with bugs, broken forms, and failed integrations",
    "Watch qualified leads slip through a site that doesn't convert",
    "Lose 10–20 hours a week to work that doesn't grow your business",
  ];
  const good = [
    "Reclaim 10–20 hours every week for the work only you can do",
    "Ship a website that reflects the quality of your actual work",
    "Turn traffic into qualified leads on autopilot",
    "Know your revenue system is running — whether you're at the desk or not",
  ];
  return (
    <section className="section-wrap" id="stakes">
      <div className="section">
        <div className="section-inner">
          <div className="sec-eyebrow">What's at Stake</div>
          <h2 className="sec-title">Two futures. <span className="accent">You pick the one.</span></h2>
          <div className="stakes-grid">
            <div className="stakes-col stakes-col--bad">
              <div className="stakes-label">WITHOUT MATCHLESS</div>
              <h3>The hamster wheel keeps spinning</h3>
              <ul className="stakes-list">
                {bad.map((t, i) => <li key={i}><span className="stakes-icon"><SecIcon.X/></span>{t}</li>)}
              </ul>
            </div>
            <div className="stakes-col stakes-col--good">
              <div className="stakes-label">WITH MATCHLESS</div>
              <h3>Your business runs on a system</h3>
              <ul className="stakes-list">
                {good.map((t, i) => <li key={i}><span className="stakes-icon"><SecIcon.Check/></span>{t}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ TESTIMONIALS ============
function Testimonials() {
  const quotes = [
    { quote: "We stopped losing Mondays to website fires. Three months in, inbound leads were up 3x and I was finally back to running the company.", name: "Alex Rinaldi", role: "Founder, Northwing Logistics", hue: "warm" },
    { quote: "The team shipped in weeks what our last agency promised in six months. The funnel alone paid for the whole engagement inside a quarter.", name: "Priya Shah", role: "COO, Harbor Insights", hue: "cool" },
    { quote: "I used to dread opening our analytics. Now the dashboard is a scorecard I actually enjoy checking every morning.", name: "Marcus Webb", role: "CEO, Tessera Group", hue: "earth" },
    { quote: "They didn't just build a site — they handed us a system. Our team got a week of their life back, every week.", name: "Jordan Okafor", role: "Director, Fieldnote Studio", hue: "deep" },
  ];
  return (
    <section className="section-wrap" id="testimonials">
      <div className="section">
        <div className="section-inner">
          <div className="sec-eyebrow">Proof</div>
          <h2 className="sec-title">Operators who stopped <span className="accent">running their website.</span></h2>
          <p className="sec-lead">A few words from founders who handed it off.</p>
          <div className="testimonials-grid">
            {quotes.map((q, i) => (
              <div key={i} className="testimonial">
                <p className="testimonial-quote">{q.quote}</p>
                <div className="testimonial-meta">
                  <div className="testimonial-avatar"><TAvatar hue={q.hue}/></div>
                  <div>
                    <div className="testimonial-name">{q.name}</div>
                    <div className="testimonial-role">{q.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ FAQ ============
function FAQ() {
  const [open, setOpen] = React.useState(0);
  const items = [
    { q: "How long does a typical engagement take?", a: "Most Client Acquisition Systems ship in 3–6 weeks from kickoff. You'll have a first milestone live inside 14 days, and the full system deployed before most agencies have finished their discovery phase." },
    { q: "Do you work with businesses outside B2B?", a: "We focus on high-growth small businesses and B2B companies because that's where our protocols convert best. If you're a B2C brand doing significant revenue, book a call — we'll tell you honestly whether we're the right fit." },
    { q: "What if I already have a website?", a: "Most of our clients do. We audit what's working, preserve what converts, and rebuild the parts that don't. You don't start from zero — you start from better." },
    { q: "What does pricing look like?", a: "Engagements typically run between $15K–$60K depending on scope. We'll scope exactly what you need on the discovery call, with no pressure to commit." },
    { q: "Who actually does the work?", a: "We're a studio of two operators — not a subcontractor network. You work directly with the people designing and shipping your system." },
    { q: "What if I just need a landing page, not the whole system?", a: "That's fine. Tell us on the call what you're actually trying to solve. If a single page is the right answer, we'll say so." },
  ];
  return (
    <section className="section-wrap" id="faq">
      <div className="section">
        <div className="section-inner">
          <div className="sec-eyebrow">Questions</div>
          <h2 className="sec-title">The things everyone asks <span className="accent">before the call.</span></h2>
          <div className="faq-list">
            {items.map((it, i) => (
              <div key={i} className={`faq-item ${open === i ? 'open' : ''}`}>
                <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                  <span>{it.q}</span>
                  <SecIcon.Plus/>
                </button>
                <div className="faq-a">{it.a}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ FINAL CTA ============
function FinalCTA() {
  return (
    <section className="section-wrap" id="contact">
      <div className="section cta-final">
        <div className="section-inner">
          <div className="sec-eyebrow" style={{justifyContent: 'center'}}>Ready when you are</div>
          <h2 className="sec-title">Hand off the website. <span className="accent">Run your&nbsp;business.</span></h2>
          <p className="sec-lead">A 15-minute call. No pitch, no pressure. Just a clear picture of whether we're the right fit.</p>
          <div className="hero-actions">
            <a href="#call" className="btn btn-primary btn-lg">
              Book a discovery call
              <span className="btn-arrow"><SecIcon.ArrowR/></span>
            </a>
            <a href="#cases" className="btn btn-ghost btn-lg">See case studies</a>
          </div>
        </div>
      </div>
    </section>
  );
}

import { BrandMark } from './BrandMark';

// ============ FOOTER ============
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <a href="#" className="brand brand--lg" aria-label="Matchless">
            <BrandMark size={32}/>
            <span className="brand-word">MATCHLESS</span>
          </a>
          <p>Client Acquisition Systems for operators who are done running their website.</p>
        </div>
        <div className="footer-col">
          <h4>Solutions</h4>
          <ul>
            <li><a href="#services">Client Acquisition</a></li>
            <li><a href="#services">Sales Funnels</a></li>
            <li><a href="#services">Business Automations</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="#guide">About</a></li>
            <li><a href="#cases">Case studies</a></li>
            <li><a href="#plan">Process</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Resources</h4>
          <ul>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#">Revenue audit</a></li>
            <li><a href="#">Client login</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Matchless Web. All rights reserved.</span>
        <span>Built with intent.</span>
      </div>
    </footer>
  );
}

export { Problem, Guide, Plan, Services, Stakes, Testimonials, FAQ, FinalCTA };
