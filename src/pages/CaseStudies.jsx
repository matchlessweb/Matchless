import React, { useState, useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { Icon } from '../components/Icons';
import { caseStudies } from '../data/caseStudies';

export default function CaseStudies() {
  const [filter, setFilter] = useState('All');
  const gridRef = useRef(null);
  
  // Extract unique categories
  const allCategories = ['All', ...new Set(caseStudies.flatMap(cs => cs.categories))];

  // Filter case studies
  const filteredStudies = filter === 'All' 
    ? caseStudies 
    : caseStudies.filter(cs => cs.categories.includes(filter));

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(".case-study-card", 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out" }
      );
    }, gridRef);
    return () => ctx.revert();
  }, [filter]); // Re-run animation when filter changes

  return (
    <div className="case-studies-archive">
      <div className="case-studies-header">
        <h1 className="mw-h1">Featured <span className="mw-display--accent">Work</span></h1>
        <p className="mw-lead">
          Explore our recent projects and see how we help businesses scale with custom web architectures.
        </p>
      </div>

      <div className="case-studies-filters">
        {allCategories.map(cat => (
          <button 
            key={cat} 
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="case-studies-grid" ref={gridRef}>
        {filteredStudies.map(study => (
          <Link to={`/case-study/${study.slug}`} key={study.id} className="case-study-card mw-hoverable">
            {study.featuredImage && (
              <div className="case-study-image">
                <img src={study.featuredImage} alt={`${study.title} featured`} loading="lazy" />
              </div>
            )}
            <div className="case-study-content">
              <div className="case-study-tags">
                {study.categories.map(cat => (
                  <span key={cat} className="cs-tag">{cat}</span>
                ))}
              </div>
              <h3 className="mw-h3">{study.title}</h3>
              <p className="mw-body-sm">{study.shortDescription}</p>
              <div className="btn btn-ghost btn-sm mt-4">
                View Case Study <Icon.ArrowRight size={16} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
