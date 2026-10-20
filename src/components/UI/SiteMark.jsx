import { Link } from 'react-router-dom';
import { site } from '../../data/site.js';
import './SiteMark.css';

export default function SiteMark({ size = 'default', to, className = '' }) {
  const image = (
    <img
      src={site.mark}
      alt={site.markAlt}
      className={`site-mark site-mark--${size} ${className}`.trim()}
    />
  );

  if (!to) return image;

  return (
    <Link to={to} className="site-mark__link" aria-label={site.markAlt}>
      {image}
    </Link>
  );
}
