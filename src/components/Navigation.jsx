import React from 'react';
import { BrandMark } from './BrandMark';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <NavLink to="/" className="brand brand--lg" aria-label="Matchless">
          <BrandMark size={32}/>
          <span className="brand-word">MATCHLESS</span>
        </NavLink>
        <nav className="nav-links">
          <NavLink to="/solutions">Solutions</NavLink>
          <NavLink to="/process">Process</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/case-studies">Case Studies</NavLink>
        </nav>
        <div className="nav-right">
          <NavLink to="/contact" className="btn btn-ink btn-sm">Book a Call</NavLink>
        </div>
      </div>
    </header>
  );
}
