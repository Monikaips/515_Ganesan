import ArchiveBadge from '../Archive/ArchiveBadge.jsx';
import { showBuildSlots } from '../ArchiveSlot/ArchiveSlot.jsx';
import './AwardCard.css';

export default function AwardCard({ award, onOpen }) {
  return (
    <button type="button" className="award-card" onClick={() => onOpen?.(award)}>
      <div className="award-card__frame">
        {award.photograph ? (
          <img src={award.photograph} alt="" />
        ) : showBuildSlots ? (
          <div className="award-card__empty">Photograph needed</div>
        ) : null}
        <span className="award-card__year">{award.year ?? 'Recorded'}</span>
      </div>
      <div className="award-card__meta">
        <ArchiveBadge kind="award" year={award.year} />
        <p className="award-card__title">{award.title}</p>
        <p className="award-card__org">{award.organization}</p>
      </div>
    </button>
  );
}
