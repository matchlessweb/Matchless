import React, { useState, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { Icon } from '../components/Icons';

// -------- Contact page hero --------
function ContactHero() {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".contact-hero-inner > *", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.1
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="contact-hero section-wrap" ref={heroRef}>
      <div className="contact-hero-inner">
        <div className="hero-eyebrow">
          <span className="hero-eyebrow-dot"/>
          <span className="hero-eyebrow-text">Start your system</span>
          <span className="hero-eyebrow-divider"/>
          <span className="hero-eyebrow-link">We respond within 1 business day</span>
        </div>
        <h1 className="contact-hero-title">
          Let's build the system<br/>that scales your <em>revenue</em>.
        </h1>
        <p className="contact-hero-sub">
          Tell us where you are and where you want to be. We'll reply with a plan — or honest feedback on whether we're the right fit.
        </p>
      </div>
    </section>
  );
}

// -------- Contact form + info side-by-side --------
function ContactBody() {
  const [state, setState] = useState({
    name: "", company: "", email: "", phone: "",
    help: "", budget: "", timeline: "", message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  function update(k, v) { setState(s => ({ ...s, [k]: v })); }
  function submit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  const helpOptions = [
    "Client Acquisition System",
    "Website rebuild",
    "SEO architecture",
    "Sales funnel & automations",
    "Not sure — help me figure it out",
  ];
  const budgetOptions = [
    "$10–25k", "$25–50k", "$50–100k", "$100k+", "Not sure yet"
  ];
  const timelineOptions = [
    "ASAP / 30 days", "60 days", "This quarter", "Exploring"
  ];

  return (
    <section className="contact-body section-wrap">
      <div className="contact-grid">
        {/* Form card */}
        <div className="contact-form-card">
          <div className="contact-form-head">
            <div className="sec-eyebrow"><span className="sec-eyebrow-dot"/>Project inquiry</div>
            <h2>Tell us about your project</h2>
            <p className="contact-form-sub">All fields optional except email — the more you share, the better our first reply.</p>
          </div>

          {submitted ? (
            <div className="contact-success">
              <div className="contact-success-icon"><Icon.Check/></div>
              <h3>Thanks — we got it.</h3>
              <p>A senior strategist will review your notes and reply within 1 business day. If it's urgent, email <a href="mailto:hello@matchlessweb.com">hello@matchlessweb.com</a> directly.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={submit}>
              <div className="cf-row">
                <div className="cf-field">
                  <label>Name</label>
                  <input type="text" placeholder="Jane Doe" value={state.name} onChange={e => update('name', e.target.value)}/>
                </div>
                <div className="cf-field">
                  <label>Company</label>
                  <input type="text" placeholder="Acme Industries" value={state.company} onChange={e => update('company', e.target.value)}/>
                </div>
              </div>
              <div className="cf-row">
                <div className="cf-field">
                  <label>Email <span className="cf-req">*</span></label>
                  <input type="email" required placeholder="you@company.com" value={state.email} onChange={e => update('email', e.target.value)}/>
                </div>
                <div className="cf-field">
                  <label>Phone <span className="cf-opt">optional</span></label>
                  <input type="tel" placeholder="+1 (555) 000-0000" value={state.phone} onChange={e => update('phone', e.target.value)}/>
                </div>
              </div>

              <div className="cf-field">
                <label>What do you need help with?</label>
                <div className="cf-chips">
                  {helpOptions.map(opt => (
                    <button type="button" key={opt}
                      className={"cf-chip" + (state.help === opt ? " is-active" : "")}
                      onClick={() => update('help', opt)}>
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div className="cf-row">
                <div className="cf-field">
                  <label>Budget range</label>
                  <div className="cf-chips cf-chips-tight">
                    {budgetOptions.map(opt => (
                      <button type="button" key={opt}
                        className={"cf-chip cf-chip-sm" + (state.budget === opt ? " is-active" : "")}
                        onClick={() => update('budget', opt)}>
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="cf-field">
                  <label>Timeline</label>
                  <div className="cf-chips cf-chips-tight">
                    {timelineOptions.map(opt => (
                      <button type="button" key={opt}
                        className={"cf-chip cf-chip-sm" + (state.timeline === opt ? " is-active" : "")}
                        onClick={() => update('timeline', opt)}>
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="cf-field">
                <label>Tell us more</label>
                <textarea rows="5" placeholder="Context, goals, what's not working, what good looks like…" value={state.message} onChange={e => update('message', e.target.value)}/>
              </div>

              <div className="cf-footer">
                <div className="cf-fine">
                  <Icon.Shield/>
                  <span>Your info is never shared. We reply personally, not via autoresponder.</span>
                </div>
                <button type="submit" className="btn btn-primary btn-lg">
                  Send inquiry
                  <span className="btn-arrow"><Icon.ArrowRight/></span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Info sidebar */}
        <aside className="contact-aside">
          <div className="contact-info-card">
            <div className="contact-info-icon"><Icon.Mail/></div>
            <div className="contact-info-body">
              <h4>Email</h4>
              <a href="mailto:hello@matchlessweb.com">hello@matchlessweb.com</a>
              <p className="contact-info-note">Best for project inquiries &amp; detail.</p>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-icon"><Icon.Calendar/></div>
            <div className="contact-info-body">
              <h4>Book a 30-min strategy call</h4>
              <a href="#call" className="contact-info-link">Open calendar →</a>
              <p className="contact-info-note">Zoom. No sales pitch — you'll leave with two concrete next steps.</p>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-icon"><Icon.Clock/></div>
            <div className="contact-info-body">
              <h4>Response time</h4>
              <span className="contact-info-value">&lt; 1 business day</span>
              <p className="contact-info-note">Mon–Fri, 9am–6pm CT. Urgent? Mark it in your note.</p>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-icon"><Icon.MapPin/></div>
            <div className="contact-info-body">
              <h4>Based in</h4>
              <span className="contact-info-value">Austin, TX</span>
              <p className="contact-info-note">Working with operators across the US &amp; EU.</p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

// -------- What happens next --------
function NextSteps() {
  const steps = [
    { n: "01", t: "You send a note", d: "Share your context and goals. Email or the form — either works." },
    { n: "02", t: "We reply with a plan", d: "Within 1 business day: honest feedback, questions, and a 30-min call if we're a fit." },
    { n: "03", t: "We map the system", d: "On the call, you'll leave with two concrete next steps — whether or not you hire us." },
  ];
  return (
    <section className="next-steps section-wrap">
      <div className="section">
        <div className="section-inner">
          <div className="sec-eyebrow"><span className="sec-eyebrow-dot"/>What happens next</div>
          <h2 className="next-steps-title">No forms fired into the void.</h2>
          <p className="next-steps-sub">Every inquiry goes to a senior strategist, not a BDR. Here's the flow.</p>
          <div className="next-steps-grid">
            {steps.map(s => (
              <div key={s.n} className="next-step">
                <div className="next-step-n">{s.n}</div>
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

export default function Contact() {
  return (
    <main className="contact-page">
      <ContactHero />
      <ContactBody />
      <NextSteps />
    </main>
  );
}
