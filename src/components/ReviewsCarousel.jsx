import React, { useRef, useState } from 'react';
import { Icon } from './Icons';
import { REVIEWS } from '../data/reviews';

const GBP_URL = 'https://share.google/hNXTWLyCxsWLwdoiF';

export default function ReviewsCarousel() {
  const sliderRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDown(true);
    if (!sliderRef.current) return;
    sliderRef.current.style.cursor = 'grabbing';
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
    if (!sliderRef.current) return;
    sliderRef.current.style.cursor = 'grab';
  };

  const handleMouseUp = () => {
    setIsDown(false);
    if (!sliderRef.current) return;
    sliderRef.current.style.cursor = 'grab';
  };

  const handleMouseMove = (e) => {
    if (!isDown || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // scroll speed multiplier
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="about-reviews section-wrap">
      <div className="section">
        <div className="section-inner">
          <div className="sec-eyebrow">
            <span className="sec-eyebrow-dot" />
            What clients say
          </div>
          <h2 className="about-section-title">
            Twenty-plus five-star reviews — <span className="accent">and counting.</span>
          </h2>
          <p className="about-section-sub">
            Pulled from the Matchless Web Studio Google Business Profile.{' '}
            <a href={GBP_URL} target="_blank" rel="noreferrer" className="about-reviews-link">
              Read all reviews on Google →
            </a>
          </p>

          <div 
            className={`about-review-stage ${isDown ? "is-dragging" : ""}`}
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            style={{ cursor: 'grab' }}
          >
            {REVIEWS.map((r, idx) => (
              <article key={idx} className="about-review-card" aria-live="polite">
                <div className="about-review-stars" aria-label={`${r.stars} out of 5 stars`}>
                  {Array.from({ length: r.stars }).map((_, i) => (
                    <Icon.Star key={i} />
                  ))}
                </div>
                <blockquote className="about-review-quote">"{r.quote}"</blockquote>
                <div className="about-review-meta">
                  {r.avatar ? (
                    <img src={r.avatar} alt={`${r.name} avatar`} style={{width: 32, height: 32, borderRadius: '50%', objectFit: 'cover'}} />
                  ) : (
                    <div style={{width: 32, height: 32, borderRadius: '50%', backgroundColor: 'var(--mw-green-400)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: 'bold', fontSize: '14px', flexShrink: 0}}>{r.name.charAt(0)}</div>
                  )}
                  <span className="about-review-name">{r.name}</span>
                  <span className="about-review-dot">·</span>
                  <span className="about-review-date">{r.date}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}