import React from 'react';
import { NavLink } from 'react-router-dom';
import matchlessLogo from '../assets/logo/matchless-logo.svg';

export default function Navigation() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <NavLink to="/" className="brand brand--lg" aria-label="Matchless">
          <img src={matchlessLogo} alt="Matchless" style={{ height: '40px', width: 'auto' }} />
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
