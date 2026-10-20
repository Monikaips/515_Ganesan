import { sourceById } from '../../data/sources.js';
import './NewspaperMark.css';

export default function NewspaperMark({ sourceId, source, size = 'tile' }) {
  const record = source ?? (sourceId ? sourceById(sourceId) : null);
  if (!record) return null;

  return (
    <div className={`newspaper-mark newspaper-mark--${size}`}>
      {record.logo ? (
        <img src={record.logo} alt={record.name} />
      ) : (
        <p>
          {record.masthead.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </p>
      )}
    </div>
  );
}
