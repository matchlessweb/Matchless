import React, { useState } from 'react';
import { Icon } from '../components/Icons';
import LeakyBucket from '../components/LeakyBucket';
import SEO from '../components/SEO';
import '../styles/audit.css';

const FORM_UUID = '935a03a5-135a-4648-8296-260dd136f121';
const FIELD_NAME = 'c9d5d21d-f077-4261-853e-b50c01ec9ffc';
const FIELD_EMAIL = 'f6d9a94e-c6d3-43c8-9e96-777cb0364799';
const FIELD_URL = 'ca4f89c3-33bc-4bb8-bb17-b7b83f3db7f0';
const FIELD_BOTTLENECK = '3eace1d0-3635-4527-b432-9409a021838f';

export default function RevenueAudit() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    url: '',
    bottleneck: ''
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const bottleneckOptions = [
    'Not getting enough leads',
    'Leads are low quality',
    'Website looks outdated',
    'I honestly don\'t know'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    if (!formData.bottleneck) {
      setStatus('error');
      setErrorMessage('Please select your biggest bottleneck.');
      return;
    }

    try {
      const res = await fetch(`https://api.surecontact.com/api/v1/forms/${FORM_UUID}/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          fields: {
            [FIELD_NAME]: formData.name,
            [FIELD_EMAIL]: formData.email,
            [FIELD_URL]: formData.url,
            [FIELD_BOTTLENECK]: formData.bottleneck,
          },
        }),
      });

      const data = await res.json();

      if (!res.ok || data?.success === false) {
        let msg = 'Something went wrong. Please try again.';
        if (data?.errors) {
          const errorMessages = Object.values(data.errors).flat();
          if (errorMessages.length) msg = errorMessages.join(' ');
        } else if (data?.message) {
          msg = data.message;
        }
        throw new Error(msg);
      }

      setStatus('success');
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMessage(err.message || 'Failed to submit application. Please try again later.');
    }
  };

  return (
    <div className="page page-audit">
      <SEO 
        title="Free Revenue Audit | Matchless Web"
        description="Request a free revenue audit to uncover bottlenecks in your funnel and learn how to optimize your digital engine for maximum conversion."
        url="/revenue-audit"
      />
      <div className="audit-layout">
        <div className="audit-content">
          <LeakyBucket />
          <div className="sec-eyebrow">Local Service Businesses</div>
          <h1 className="hero-title">You are leaking revenue.<br/><span className="accent">Let's find out where.</span></h1>
          <p className="hero-sub" style={{ marginTop: '24px' }}>
            Submit your website URL below. In exchange for 60 seconds of your time, we will record a free, highly-actionable 5-minute Loom video tearing down your digital presence. 
            We'll show you exactly where local leads are dropping off and how to fix it.
          </p>
          
          <div className="audit-value-props">
            <div className="audit-vp">
              <div className="vp-icon"><Icon.Check /></div>
              <span>Discover why traffic isn't converting to calls.</span>
            </div>
            <div className="audit-vp">
              <div className="vp-icon"><Icon.Check /></div>
              <span>Identify technical friction costing you bids.</span>
            </div>
            <div className="audit-vp">
              <div className="vp-icon"><Icon.Check /></div>
              <span>Get an exact roadmap to dominate your local market.</span>
            </div>
          </div>
        </div>

        <div className="audit-form-container">
          {status === 'success' ? (
            <div className="audit-success-container">
              <div className="audit-success-icon"><Icon.Check /></div>
              <h2>Application Received</h2>
              <p>Thank you, {formData.name.split(' ')[0] || 'there'}. We have received your application.</p>
              <p>We are reviewing your website now and will send your custom video teardown to <strong>{formData.email}</strong> within 48 hours.</p>
              <button onClick={() => setStatus('idle')} className="btn btn-ghost" style={{ marginTop: '32px' }}>Submit another</button>
            </div>
          ) : (
            <form className="audit-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required 
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  required 
                  placeholder="john@yourcompany.com"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div className="form-group">
                <label htmlFor="url">Website URL</label>
                <input 
                  type="url" 
                  id="url" 
                  required 
                  placeholder="https://yourcompany.com"
                  value={formData.url}
                  onChange={e => setFormData({...formData, url: e.target.value})}
                />
              </div>

              <div className="form-group">
                <label htmlFor="bottleneck">What is your biggest current bottleneck?</label>
                <div className="select-wrapper">
                  <select 
                    id="bottleneck" 
                    required
                    value={formData.bottleneck}
                    onChange={e => setFormData({...formData, bottleneck: e.target.value})}
                  >
                    <option value="" disabled>Select an option...</option>
                    {bottleneckOptions.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  <div className="select-arrow"><Icon.ChevronDown /></div>
                </div>
              </div>

              {status === 'error' && (
                <div className="form-error-alert">
                  {errorMessage}
                </div>
              )}

              <button 
                type="submit" 
                className={`btn btn-primary btn-full ${status === 'submitting' ? 'loading' : ''}`}
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Submitting...' : 'Request Free Teardown'}
              </button>
              <p className="form-disclaimer">No credit card required. No commitment. Just extreme value.</p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
