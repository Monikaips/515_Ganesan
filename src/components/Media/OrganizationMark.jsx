import { sourceById } from '../../data/sources.js';
import './OrganizationMark.css';

export default function OrganizationMark({ sourceId, source, size = 'badge' }) {
  const record = source ?? (sourceId ? sourceById(sourceId) : null);
  if (!record) return null;

  return (
    <div className={`org-mark org-mark--${size}`}>
      {record.mark === 'cross' && (
        <span className="org-mark__cross" aria-hidden="true">
          <span />
          <span />
        </span>
      )}
      {record.logo ? (
        <img src={record.logo} alt="" />
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
