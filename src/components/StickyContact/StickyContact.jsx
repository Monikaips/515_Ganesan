import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { stickyContact } from '../../data/home.js';
import { site } from '../../data/site.js';
import './StickyContact.css';

const CALL_HREF = `tel:${site.phone.replace(/\s+/g, '')}`;

export default function StickyContact() {
  const [footerInView, setFooterInView] = useState(false);

  useEffect(() => {
    const footer = document.querySelector('footer.footer');
    if (!footer || typeof IntersectionObserver === 'undefined') return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setFooterInView(entry.isIntersecting);
      },
      { root: null, threshold: 0 },
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={[
        'sticky-contact',
        footerInView ? 'sticky-contact--hidden' : '',
      ]
        .filter(Boolean)
        .join(' ')}
      aria-hidden={footerInView ? 'true' : undefined}
      {...(footerInView ? { inert: '' } : {})}
    >
      <a
        className="sticky-contact__call"
        href={CALL_HREF}
        aria-label="Call 515 Ganesan's number"
      >
        <i className="fas fa-phone" aria-hidden="true" />
        <span>Call</span>
      </a>
      <Link className="sticky-contact__message" to={stickyContact.href}>
        {stickyContact.label}
      </Link>
    </div>
  );
}
