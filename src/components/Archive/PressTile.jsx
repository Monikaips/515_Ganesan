import { useState } from 'react';
import NewspaperMark from '../Media/NewspaperMark.jsx';
import { sourceById } from '../../data/sources.js';
import './PressTile.css';

export default function PressTile({ article, onOpen }) {
  const [open, setOpen] = useState(false);
  const source = sourceById(article.sourceId);

  return (
    <button
      type="button"
      className={`press-tile ${open ? 'is-open' : ''}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      onClick={() => onOpen?.(article)}
    >
      <NewspaperMark source={source} size="tile" />
      <span className="press-tile__year">{article.year ?? source?.short}</span>

      <span className="press-tile__reveal">
        <span className="press-tile__name">{source?.name}</span>
        {article.year && <span className="press-tile__date">{article.year}</span>}
        <span className="press-tile__headline">{article.title}</span>
        <span className="press-tile__cta">View article →</span>
      </span>
    </button>
  );
}
