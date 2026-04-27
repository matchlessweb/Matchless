import React, { useState } from 'react';
import { Icon } from './Icons';
import { REVIEWS } from '../data/reviews';

const GBP_URL = 'https://share.google/hNXTWLyCxsWLwdoiF';

export default function ReviewsCarousel() {
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
