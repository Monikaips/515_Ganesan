import { useState } from 'react';
import { site } from '../data/site.js';

const FORM_ENDPOINT = 'https://formspree.io/f/xbjnbpkr';

export default function Contact() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('sending');

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <h1>Contact</h1>
      <p className="contact-lede">
        Write with a question, or share a verified photograph, clipping, or memory of his service.
      </p>
      <p className="contact-emergency-note">
        For medical emergencies, call 108 first.
      </p>
      <ul className="contact-details">
        <li>
          <span>Address</span> {site.address}
        </li>
        <li>
          <span>Email</span>{' '}
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </li>
        <li>
          <span>Phone</span>{' '}
          <a href={`tel:${site.phone.replace(/\s+/g, '')}`}>{site.phone}</a>
        </li>
      </ul>
      <div className="card">
        <span className="title" id="contact-form-title">
          Leave a Message
        </span>
        <form className="form" onSubmit={handleSubmit} aria-labelledby="contact-form-title">
          <div className="group">
            <input id="name" name="name" placeholder=" " type="text" required autoComplete="name" />
            <label htmlFor="name">Name</label>
          </div>
          <div className="group">
            <input
              id="email"
              name="email"
              placeholder=" "
              type="email"
              required
              autoComplete="email"
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="group">
            <textarea id="comment" name="comment" placeholder=" " rows="5" required />
            <label htmlFor="comment">Your Message</label>
          </div>
          <button type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Submit'}
          </button>
        </form>
        {status === 'success' && (
          <p className="form-status success" role="status">
            Thank you. Your message was sent.
          </p>
        )}
        {status === 'error' && (
          <p className="form-status error" role="alert">
            Something went wrong. Please try again, or email {site.email}.
          </p>
        )}
      </div>
    </>
  );
}
