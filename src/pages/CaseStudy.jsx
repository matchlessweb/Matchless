import { useState, useLayoutEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { Icon } from '../components/Icons';
import Lightbox from '../components/Lightbox';
import { caseStudies } from '../data/caseStudies';

export default function CaseStudy() {
  const { slug } = useParams();
  const study = caseStudies.find(cs => cs.slug === slug);
  const containerRef = useRef(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  useLayoutEffect(() => {
    if (study && containerRef.current) {
      let ctx = gsap.context(() => {
        gsap.from(".cs-animate", {
          y: 20,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out"
        });
      }, containerRef);
      return () => ctx.revert();
    }
  }, [study]);

  if (!study) {
    return (
      <div className="case-study-template text-center">
        <h1 className="mw-h1 mb-6">Case Study Not Found</h1>
        <Link to="/case-studies" className="btn btn-primary">
          Back to Case Studies
        </Link>
      </div>
    );
  }

  return (
    <div className="case-study-template" ref={containerRef}>
      <Link to="/case-studies" className="cs-back-link cs-animate">
        <Icon.ArrowLeft size={16} /> Back to Case Studies
      </Link>

      <div className="cs-template-header cs-animate">
        <h1 className="mw-h1">{study.title}</h1>
        <div className="cs-template-meta">
          <div className="case-study-tags">
            {study.categories.map(cat => (
              <span key={cat} className="cs-tag">{cat}</span>
            ))}
          </div>
          {study.liveUrl && (
            <a 
              href={study.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-ink"
            >
              View Live Website <Icon.ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      <div className="cs-content-section cs-animate">
        <h2 className="mw-h2">The Client's Problem</h2>
        <p className="mw-body">{study.problem}</p>
      </div>

      <div className="cs-content-section cs-animate">
        <h2 className="mw-h2">The Solution</h2>
        <p className="mw-body">{study.solution}</p>
      </div>

      {study.images && study.images.length > 0 && (
        <div className="cs-content-section cs-animate mt-12">
          <h2 className="mw-h2 mb-6">Gallery</h2>
          <div className="cs-gallery-grid">
            {study.images.map((img, idx) => (
              <button 
                key={idx} 
                className="cs-thumbnail mw-hoverable"
                onClick={() => openLightbox(idx)}
                aria-label={`View gallery image ${idx + 1}`}
              >
                <img src={img} alt={`Gallery ${idx + 1}`} loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="mt-16 text-center cs-animate">
        <h3 className="mw-h3 mb-6">Ready to scale your business?</h3>
        <Link to="/contact" className="btn btn-primary btn-lg">
          Book a Call
        </Link>
      </div>

      <Lightbox 
        images={study.images}
        currentIndex={lightboxIndex}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        onNext={() => setLightboxIndex((prev) => (prev + 1) % study.images.length)}
        onPrev={() => setLightboxIndex((prev) => (prev - 1 + study.images.length) % study.images.length)}
      />
    </div>
  );
}
