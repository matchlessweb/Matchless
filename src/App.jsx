import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Process from './pages/Process';
import Solutions from './pages/Solutions';
import CaseStudies from './pages/CaseStudies';
import CaseStudy from './pages/CaseStudy';
import FAQ from './pages/FAQ';
import RevenueAudit from './pages/RevenueAudit';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="process" element={<Process />} />
        <Route path="solutions" element={<Solutions />} />
        <Route path="contact" element={<Contact />} />
        <Route path="case-studies" element={<CaseStudies />} />
        <Route path="case-study/:slug" element={<CaseStudy />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="revenue-audit" element={<RevenueAudit />} />
      </Route>
    </Routes>
  );
}

export default App;
