import React, { useRef, useState, useLayoutEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { Icon } from '../components/Icons';

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
          <span className="hero-eyebrow-dot" />
          <span className="hero-eyebrow-text">About Matchless</span>
          <span className="hero-eyebrow-divider" />
          <span className="hero-eyebrow-link">Clinton, MS · 30+ five-star reviews</span>
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
              The operator behind the work
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
              I work directly with founders and operators across Mississippi and beyond.
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
const REVIEWS = [
  { name: "Anna Nix", stars: 5, date: "10 months ago", quote: "Can’t say enough good things about working with Jon! He had so many helpful ideas and was very easy to communicate with! He made the whole process of building my website so fun and completely stress-free!!!! It was a great experience, and I’m so proud of how it turned out. Couldn’t recommend him more!!!" },
  { name: "CJ Stewart", stars: 5, date: "10 months ago", quote: "Jon is a tremendous asset to whatever venture you have going. His skills and his heart align perfectly with the seat he occupies on our bus. His servant-hearted approach, mixed with his timeliness, has added value in ways we cannot fully measure. I’m confident this will be your experience as well having known Jon for serval years! CJ Stewart Make ‘Em Count" },
  { name: "Tonya Eubanks", stars: 5, date: "a year ago", quote: "Jon has been awesome to work with.  Matchless Web Studio was recommended to me to get help with new website designs for multiple businesses.  Everything I needed plus more has been achieved.  Jon is very knowledgeable and has made the experience seem so easy.  I would recommend Jon to everyone for their website designs!" },
  { name: "Alli Shaw", stars: 5, date: "a year ago", quote: "Jon is the best! He was my first and only call about creating a website when I launched my new business. During the whole process, he was responsive, knowledgeable, and professional — everything I needed to get the site that I wanted. If you’re looking to launch or rebrand your website, he is hands down the person to help. Cannot recommend him enough!" },
  { name: "Kelly Jo Riden", stars: 5, date: "2 years ago", quote: "Jon was incredibly helpful in launching our new website. He connected with several different departments quickly, came prepared and made the whole process EASY!" },
  { name: "Alyssa Karinshak", stars: 5, date: "2 years ago", quote: "Jon has been a dream to work with and I have already recommended him to others.  He was timely, communicates well (the Loom videos are a great tool!) and was able to accomplish exactly what we requested." },
  { name: "Lilshika22", stars: 5, date: "2 years ago", quote: "Great experience for both businesses I own! Very personable and detailed! Love how all your needs are met for my businesses!!" },
  { name: "Rodney Walker", stars: 5, date: "2 years ago", quote: "Jon has been an absolute joy to work with. His professionalism and prompt responses to questions, feedback, and requests make website projects a breeze. If you're looking to invest in your business through a more intentional online presence, Matchless Web Studio is the way to go!" },
  { name: "Robert Zatorski", stars: 5, date: "2 years ago", quote: "Matchless Web Studio did fantastic job for us. Jon, who is the owner, works tirelessly and his knowledge on the web design, hosting issues, and Word Press is second to none. Matchless Web Studio won our hearts with outstanding customer service and support as well. We will keep using them as long as we will stay online! Highly recommended!" },
  { name: "Rusty Bryant", stars: 5, date: "2 years ago", quote: "Jon is an absolute genius! He did an amazing job building our marriage ministry website. He is so knowledgeable about all of the current things that are needed for a successful website. We had a blast working with him and the finished product is amazing!" },
  { name: "Amanda Flynn", stars: 5, date: "2 years ago", quote: "Jon is a technological unicorn. I loathe all things technology and understanding it has always felt like someone trying to speak another language to me, but not Jon. He has an incredible talent of taking on the most complicated tasks and making them simple... on top of that - he's also able to explain them in a way that makes complete sense.  During our call he was helpful, informative and patient. I reached out feeling like a burden and I left the call feeling empowered because he was able to quickly and efficiently provide me with the knowledge and tools needed to successfully move forward with my current project. That's priceless.  His demeanor, attention to detail, knowledge and communication skills are above and beyond - especially in tech world and I am forever a fan." },
  { name: "Jon David Cole", stars: 5, date: "3 years ago", quote: "We were sitting on a treasure trove of data we weren’t using to our advantage. We had a sizable email list but didn’t have any real segmentation configured.  With 24k+ orders’ worth of history on our WordPress site, we know those contacts were customers at best. Without a means of identifying what those customers had previously purchased, we didn’t have the ability to email our contacts with messages specific to products they might be interested in purchasing again." },
  { name: "Emily Russ", stars: 5, date: "3 years ago", quote: "Matchless does beautiful work! And they picked copy to add to my website that was just right on and communicated my ideas perfectly. Great styling. I highly recommend. Jon is very friendly and super easy to work with, too!" },
  { name: "J Adams", stars: 5, date: "4 years ago", quote: "Jon at Matchless and his team are great to work with,  Very professional and produces both excellent products and services for their clients.  I would highly recommend Jon and team on the basis of professionalism." },
  { name: "Senlemoda", stars: 5, date: "4 years ago", quote: "I discovered MATCHLESS WEB STUDIO, Owner Jon on his youtube channel, and when I realized he had the information I needed, I somehow reached him... As a Turkish web master, I couldn't find a web master to solve LCP and CLS problems in my country. When I contacted Jon, he gave me the best support and prepared a report on what I should do as a result of the analysis. I will be looking forward to working with Jon on my bigger projects." },
  { name: "Thomas O'Grady", stars: 5, date: "4 years ago", quote: "Jon taught me how to complete website speed optimisation with 1 to 1 sessions and his online course. We covered the best plugins to use (and how to set them up), how to optimise images effectively as well as how to interpret speed reports and website waterfalls.  A hugely knowledgable, friendly, patient and brilliant teacher, Jon makes a complicated topic easy to get to grips with and really gives you the confidence to try things for yourself.  I highly recommend his online course and especially his 1 to 1 sessions. Thanks you for all your help Jon." },
  { name: "Nathan Bell", stars: 5, date: "4 years ago", quote: "I reached out to Jon to redesign my website to make it more user friendly and help me with my SEO. He has worked tirelessly designing my new website so that it is exactly what I want.....and he has done just that. He is extremely talented and knowledgeable. I highly recommend using him if you want to \"get found\" on Google. This is just the beginning of what I hope to be a long lasting partnership." },
  { name: "Kit White", stars: 5, date: "4 years ago", quote: "Jon is knowledge, personable and responsive. He made working with him in my website a breeze! Definitely recommended if you are looking to start your own professional website and e-commerce solutions." },
  { name: "James Duncan", stars: 5, date: "6 years ago", quote: "Jon of Matchless Web Studio provided more than just design or programming service. He actually took an active role in the look, layout, and even content of our website. In other words, he personally became engaged and invested in our project. This degree of ownership was another aspect of \"help\" we had never gotten before from our prior web development companies." },
  { name: "Rene Bishoff", stars: 5, date: "7 years ago", quote: "I started my own business in a relatively new field. When I realized word of mouth was not reaching enough people. I asked Jon to design a Unique and Informative Website that explained exactly what services I was offering. My website is not only uniquely perfect for my business, it is Beautiful. My Client base has doubled. I have clients from out of state contacting me through my website. Jon understood my vision perfectly and had me up and running exactly when he said he would." },
  { name: "Ashley Upchurch", stars: 5, date: "7 years ago", quote: "Jon was a dream to worth with! I wasn't happy with my current site so I decided to work with Jon to create a website that showcased my work in a more professional way. I couldn't be happier. I had a ton of design requests, and he was right there making all of my design dreams come true. A true gem! I would choose him if I had to do it all over again." },
];

function ReviewsCarousel() {
  const [i, setI] = useState(0);
  const total = REVIEWS.length;
  const go = (n) => setI(((n % total) + total) % total);
  const r = REVIEWS[i];

  return (
    <section className="about-reviews section-wrap">
      <div className="section">
        <div className="section-inner">
          <div className="sec-eyebrow">
            <span className="sec-eyebrow-dot" />
            What clients say
          </div>
          <h2 className="about-section-title">
            Thirty-plus five-star reviews — <span className="accent">and counting.</span>
          </h2>
          <p className="about-section-sub">
            Pulled from the Matchless Web Studio Google Business Profile.{' '}
            <a href={GBP_URL} target="_blank" rel="noreferrer" className="about-reviews-link">
              Read all reviews on Google →
            </a>
          </p>

          <div className="about-review-stage">
            <button
              type="button"
              className="about-review-arrow about-review-arrow--prev"
              aria-label="Previous review"
              onClick={() => go(i - 1)}
            >
              ‹
            </button>
            <article className="about-review-card" aria-live="polite">
              <div className="about-review-stars" aria-label={`${r.stars} out of 5 stars`}>
                {Array.from({ length: r.stars }).map((_, idx) => (
                  <Icon.Star key={idx} />
                ))}
              </div>
              <blockquote className="about-review-quote">"{r.quote}"</blockquote>
              <div className="about-review-meta">
                <span className="about-review-name">{r.name}</span>
                <span className="about-review-dot">·</span>
                <span className="about-review-date">{r.date}</span>
              </div>
            </article>
            <button
              type="button"
              className="about-review-arrow about-review-arrow--next"
              aria-label="Next review"
              onClick={() => go(i + 1)}
            >
              ›
            </button>
          </div>

          <div className="about-review-dots" role="tablist">
            {REVIEWS.map((_, idx) => (
              <button
                key={idx}
                type="button"
                role="tab"
                aria-selected={idx === i}
                aria-label={`Go to review ${idx + 1}`}
                className={'about-review-dot-btn' + (idx === i ? ' is-active' : '')}
                onClick={() => go(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

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
      <AboutHero />
      <BioSection />
      <HowIWork />
      <ReviewsCarousel />
      <AboutCTA />
    </main>
  );
}
