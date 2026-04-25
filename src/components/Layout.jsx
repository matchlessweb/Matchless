import React, { useLayoutEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navigation from './Navigation';
import { Footer } from './Sections';
import BraidBackground from './BraidBackground';

export default function Layout() {
  const location = useLocation();
  const isContact = location.pathname === '/contact';
  const isCaseStudies = location.pathname.startsWith('/case-stud');

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className={`page mw-ink-surface ${isContact ? 'contact-page' : ''}`}>
      {!isCaseStudies && <BraidBackground />}
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}
