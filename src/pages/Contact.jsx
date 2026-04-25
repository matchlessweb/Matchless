import React, { useState, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { Icon } from '../components/Icons';

// -------- Contact page hero --------
function ContactHero() {
  const heroRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(".contact-hero-inner > *", 
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.05,
        ease: "power3.out",
        clearProps: "all"
      }
    );
  }, { scope: heroRef });

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
    firstName: "", lastName: "", company: "", email: "", phone: "",
    help: "", budget: "", timeline: "", message: ""
  });
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function update(k, v) { setState(s => ({ ...s, [k]: v })); }
  
  async function submit(e) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const payload = {
      fields: {
        "f8d27ad1-77b3-45ea-80c3-efc1fc0638ff": state.firstName,
        "a697c04b-ca47-4396-9c9f-8f9c9ced7fc0": state.lastName,
        "06a66727-2cdc-4ff4-9157-5b8a11d9b9e3": state.company,
        "e9333354-4b52-48b5-9e56-6630aecf3e27": state.email,
        "db29fb14-3e0f-407a-9227-e583117bc3cc": state.phone,
        "2f7887e5-28fc-453b-bc3a-3e0a94451dd2": state.help,
        "7346e476-2b2d-49d9-b45c-0bdfcf258a0f": state.budget,
        "2aea2ca9-e062-480c-b49f-598814c53cd8": state.timeline,
        "8190ddbe-fdf6-499e-b7e6-2009621cf584": state.message
      }
    };

    try {
      const res = await fetch("https://api.surecontact.com/api/v1/forms/c71b4613-54fc-4010-b80d-719b95a0d3e5/submit", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok || data?.success === false) {
        let msg = "Something went wrong. Please try again.";
        if (data?.errors) {
          const errorMessages = Object.values(data.errors).flat();
          if (errorMessages.length) msg = errorMessages.join(' ');
        } else if (data?.message) {
          msg = data.message;
        }
        throw new Error(msg);
      }
      
      setStatus("success");
    } catch (err) {
      setErrorMsg(err.message);
      setStatus("error");
    }
  }

  const helpOptions = [
    "Client Acquisition System",
    "Website rebuild",
    "SEO (Search Engine Optimization)",
    "Sales Funnel/ Automations",
    "Not sure — help me figure it out"
  ];
  const budgetOptions = [
    "$5-10k", "$10–25k", "$25–50k", "$50k+"
  ];
  const timelineOptions = [
    "ASAP", "14 days", "30 days", "60 days", "This quarter", "Exploring"
  ];

  return (
    <section className="contact-body section-wrap">
      <div className="contact-grid">
        {/* Form card */}
        <div className="contact-form-card">
          <div className="contact-form-head">
            <div className="sec-eyebrow"><span className="sec-eyebrow-dot"/>Project inquiry</div>
            <h2>Tell us about your project</h2>
            <p className="contact-form-sub">What's your next great idea? The more you share, the better our first reply.</p>
          </div>

          {status === "success" ? (
            <div className="contact-success">
              <div className="contact-success-icon"><Icon.Check/></div>
              <h3>Thanks — we got it.</h3>
              <p>Nice! The form was submitted cleanly. I'll be in touch within 24hrs of the work week. - Jon at Matchless Web.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={submit}>
              <div className="cf-row">
                <div className="cf-field">
                  <label>First Name <span className="cf-req">*</span></label>
                  <input type="text" required placeholder="Jane" value={state.firstName} onChange={e => update('firstName', e.target.value)}/>
                </div>
                <div className="cf-field">
                  <label>Last Name <span className="cf-req">*</span></label>
                  <input type="text" required placeholder="Doe" value={state.lastName} onChange={e => update('lastName', e.target.value)}/>
                </div>
              </div>
              <div className="cf-field">
                <label>Company <span className="cf-req">*</span></label>
                <input type="text" required placeholder="Acme Industries" value={state.company} onChange={e => update('company', e.target.value)}/>
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

              {status === "error" && (
                <div className="cf-error-message" style={{ color: "var(--error, #e53e3e)", marginBottom: "1rem", fontSize: "0.875rem", fontWeight: "500" }}>
                  {errorMsg}
                </div>
              )}
              <div className="cf-footer">
                <div className="cf-fine">
                  <Icon.Shield/>
                  <span>Your info is never shared. We reply personally, not via autoresponder.</span>
                </div>
                <button type="submit" className="btn btn-primary btn-lg" disabled={status === "loading"}>
                  {status === "loading" ? "Submitting..." : "Send inquiry"}
                  {status !== "loading" && <span className="btn-arrow"><Icon.ArrowRight/></span>}
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
              <a href="mailto:jon@matchlessweb.com">jon@matchlessweb.com</a>
              <p className="contact-info-note">Best for project inquiries &amp; detail.</p>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-icon"><Icon.Calendar/></div>
            <div className="contact-info-body">
              <h4>Book a 15-minute discovery call</h4>
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
              <span className="contact-info-value">Clinton, MS</span>
              <p className="contact-info-note">Working with businesses in Central Mississippi and beyond.</p>
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
    { n: "02", t: "We reply with a plan", d: "Within 1 business day: honest feedback, questions, and a 15-minute discovery call if we're a fit." },
    { n: "03", t: "We map the system", d: "On the call, you'll leave with two concrete next steps — whether or not you hire us." },
  ];
  return (
    <section className="next-steps section-wrap">
      <div className="section">
        <div className="section-inner">
          <div className="sec-eyebrow"><span className="sec-eyebrow-dot"/>What happens next</div>
          <h2 className="next-steps-title">No forms fired into the void.</h2>
          <p className="next-steps-sub">All inquiry forms are fielded daily. Here's the flow for what comes next.</p>
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
