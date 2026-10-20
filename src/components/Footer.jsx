import { Link } from 'react-router-dom';
import { footerTagline } from '../data/home.js';
import { navMore, navPrimary, site } from '../data/site.js';
import SiteMark from './UI/SiteMark.jsx';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__brand">
          <div className="footer__logo">
            <SiteMark to="/" size="default" />
          </div>
          <p className="footer__tagline">{footerTagline}</p>
        </div>

        <nav className="footer__nav" aria-label="Explore the site">
          <p className="footer__nav-title">Explore</p>
          <ul>
            {navPrimary.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
            {navMore.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__contact-info">
          <p className="footer__nav-title">Contact</p>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt" aria-hidden="true" /> {site.address}
            </li>
            <li>
              <i className="fas fa-envelope" aria-hidden="true" />{' '}
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <i className="fas fa-mobile-alt" aria-hidden="true" />{' '}
              <a href={`tel:${site.phone.replace(/\s+/g, '')}`}>{site.phone}</a>
            </li>
          </ul>
        </div>

        <div className="footer__social-media">
          <p className="footer__nav-title">Share</p>
          <ul>
            {site.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  className="social-media-link"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                >
                  <i className={social.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <p>
          &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          {/* Developed by Monika — commented out for now
          <br />
          Developed by{' '}
          <a href={site.developerUrl} className="developer-name" target="_blank" rel="noreferrer">
            Monika
          </a>
          */}
        </p>
      </div>
    </footer>
  );
}
