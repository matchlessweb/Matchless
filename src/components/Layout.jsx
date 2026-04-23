import React, { useLayoutEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navigation from './Navigation';
import { Footer } from './Sections';
import BraidBackground from './BraidBackground';
import { gsap } from 'gsap';

export default function Layout() {
  const location = useLocation();
  const isContact = location.pathname === '/contact';

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className={`page mw-ink-surface ${isContact ? 'contact-page' : ''}`}>
      <BraidBackground />
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}
