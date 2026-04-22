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
    // Other global layout effects can go here
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
