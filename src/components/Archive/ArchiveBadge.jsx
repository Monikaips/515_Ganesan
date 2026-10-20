import './ArchiveBadge.css';

const labels = {
  press: 'Press',
  award: 'Award',
  video: 'Video',
  photograph: 'Photograph',
  document: 'Document',
  interview: 'Interview',
  organization: 'Organization',
  disaster: 'Disaster relief',
};

export default function ArchiveBadge({ kind = 'press', year, className = '' }) {
  const label = labels[kind] ?? kind;
  const text = year ? `${label} · ${year}` : label;

  return (
    <span className={`archive-badge ${className}`.trim()}>
      <span className="archive-badge__node" aria-hidden="true">
        ●
      </span>
      {text}
    </span>
  );
}
