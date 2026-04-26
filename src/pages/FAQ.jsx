import React, { useState, useEffect } from 'react';
import { SecIcon, Icon } from '../components/Icons';
import '../styles/faq.css';

// ----------------------------------------------------
// EXPANDED FAQ DATA
// ----------------------------------------------------
const faqData = [
  {
    category: "Process & Timelines",
    id: "process",
    questions: [
      {
        q: "How long does a typical engagement take?",
        a: "Most Client Acquisition Systems ship in 3–6 weeks from kickoff. You'll have a first milestone live inside 14 days, and the full system deployed before most agencies have finished their discovery phase."
      },
      {
        q: "What does the onboarding process look like?",
        a: "It starts with a 15-minute discovery call to ensure we're a mutual fit. If we are, we schedule a 90-minute deep-dive strategy session. Within 48 hours of that session, we present the full architecture plan and begin building immediately."
      },
      {
        q: "How much of my time will this require?",
        a: "Very little. We require you for the 90-minute strategy session, and then for 30-minute milestone reviews every week. We don't ask you to write copy or manage our tickets; we handle the execution."
      },
      {
        q: "Do you offer revisions?",
        a: "We work in rapid, iterative cycles. You review live staging links throughout the build process. We refine the system continuously until it is perfectly aligned with your objectives and ready for deployment."
      }
    ]
  },
  {
    category: "Pricing & Terms",
    id: "pricing",
    questions: [
      {
        q: "What does pricing look like?",
        a: "Engagements typically run between $15K–$60K depending on scope. We don't do hourly billing. You pay for the value and the deployed system. We'll scope exactly what you need on the discovery call, with no pressure to commit."
      },
      {
        q: "Do you require a long-term retainer?",
        a: (
          <>
            <p>Our core deliverable is the Client Acquisition System, which is a fixed-price project with a very affordable monthly retainer to maintain the systems, security, software updates, and functionality. If anything ever breaks or needs a tweak and the issue is on our end, you don't pay anything for it to be edited. If you need changes from month to month and it takes less than 30 minutes of our time, you get a discounted hourly rate on that work.</p>
            <p style={{ marginTop: '16px' }}>However, many serious clients retain us post-launch for ongoing conversion rate optimization (CRO), SEO, and scaling. These retainers are completely optional and run month-to-month after a 3-month minimum commitment to test baseline performance and assess iterations needed for future success and continued growth.</p>
            <p style={{ marginTop: '16px' }}>Clients who opt for a growth retainer see the best results over time.</p>
          </>
        )
      },
      {
        q: "What is the payment schedule?",
        a: "Standard engagements are 50% upfront to commence the build, and 50% upon final deployment. For larger builds scaling over 8 weeks, we can structure milestone-based payments."
      }
    ]
  },
  {
    category: "Tech & Deliverables",
    id: "tech",
    questions: [
      {
        q: "What platforms do you build on?",
        a: "We do not predetermine the tool for the job until we meet with you and understand exactly what your needs will be. As the saying goes, 'If the only tool you have is a hammer, everything looks like a nail.' Once we complete the discovery process, we determine what technology will be used to build your website. Predominantly, we build sites using React and WordPress, but your specific use case will determine which of those gets utilized."
      },
      {
        q: "Who actually does the work?",
        a: "We're a boutique studio of two operators — not a subcontractor network. You work directly with the people designing, writing, and shipping your system."
      },
      {
        q: "What if I already have a website?",
        a: "Most of our clients do. We audit what's working, preserve what converts, and rebuild the parts that don't. You don't start from zero — you start from better."
      },
      {
        q: "Who owns the code and assets?",
        a: "You do. Upon final payment, 100% of the IP, code repositories, design files, and operational assets are transferred to your ownership. No hostage situations."
      },
      {
        q: "What if I just need a landing page, not the whole system?",
        a: "That's fine. Tell us on the call what you're actually trying to solve. If a single page is the right answer, we'll say so and scope it accordingly."
      }
    ]
  }
];


// ----------------------------------------------------
// FAQ COMPONENT
// ----------------------------------------------------
export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState(faqData[0].id);
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (catId, qIndex) => {
    const key = `${catId}-${qIndex}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Intersection Observer to highlight active category on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
          setActiveCategory(entry.target.id);
        }
      });
    }, { rootMargin: '-20% 0px -60% 0px', threshold: [0.1, 0.5] });

    faqData.forEach(cat => {
      const el = document.getElementById(cat.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToCategory = (id) => {
    const el = document.getElementById(id);
    if (el) {
      // Offset for sticky header if exists
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="page page-faq">
      <div className="faq-page-header">
        <div className="sec-eyebrow">FAQ</div>
        <h1 className="hero-title">Common questions.<br/>Uncommon clarity.</h1>
        <p className="hero-sub">Everything you need to know about how we work, what we build, and how we drive revenue.</p>
      </div>

      <div className="faq-layout">
        
        {/* LEFT PANE: Sticky Sidebar */}
        <aside className="faq-sidebar">
          <div className="faq-sidebar-inner">
            <h3 className="faq-sidebar-title">Categories</h3>
            <nav className="faq-categories">
              {faqData.map(cat => (
                <button 
                  key={cat.id} 
                  className={`faq-cat-btn ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => scrollToCategory(cat.id)}
                >
                  {cat.category}
                </button>
              ))}
            </nav>
            
            <div className="faq-sidebar-cta">
              <p>Still have questions?</p>
              <a href="/contact" className="btn btn-primary btn-sm">
                Book a Call <Icon.ArrowRight/>
              </a>
            </div>
          </div>
        </aside>

        {/* RIGHT PANE: FAQ Content */}
        <div className="faq-content-pane">
          {faqData.map(cat => (
            <div key={cat.id} id={cat.id} className="faq-category-section">
              <h2 className="faq-category-title">{cat.category}</h2>
              
              <div className="faq-list">
                {cat.questions.map((it, i) => {
                  const isOpen = openItems[`${cat.id}-${i}`];
                  return (
                    <div key={i} className={`faq-item ${isOpen ? 'open' : ''}`}>
                      <button className="faq-q" onClick={() => toggleItem(cat.id, i)}>
                        <span>{it.q}</span>
                        <SecIcon.Plus/>
                      </button>
                      <div className="faq-a">{it.a}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
