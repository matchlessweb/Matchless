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
          <a href="#solutions">Solutions</a>
          <a href="#process">Process</a>
          <a href="#pricing">Pricing</a>
          <a href="#cases">Case Studies</a>
        </nav>
        <div className="nav-right">
          <a href="#login" className="client-login">Client Login</a>
          <NavLink to="/contact" className="btn btn-ink btn-sm">Book a Call</NavLink>
        </div>
      </div>
    </header>
  );
}
