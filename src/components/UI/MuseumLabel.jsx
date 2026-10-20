import ArchiveBadge from '../Archive/ArchiveBadge.jsx';
import './MuseumLabel.css';

export default function MuseumLabel({
  source,
  title,
  kind,
  year,
  accession,
  className = '',
}) {
  return (
    <div className={`museum-label ${className}`.trim()}>
      {source && <p className="museum-label__source">{source}</p>}
      {kind && <ArchiveBadge kind={kind} year={year} />}
      {title && <p className="museum-label__title">{title}</p>}
      {accession && (
        <p className="museum-label__acc">Archive item #{accession}</p>
      )}
    </div>
  );
}
