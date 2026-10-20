import MuseumLabel from '../UI/MuseumLabel.jsx';
import { showBuildSlots } from '../ArchiveSlot/ArchiveSlot.jsx';
import './PhotoCard.css';

export default function PhotoCard({ item, onOpen }) {
  return (
    <button type="button" className="photo-card" onClick={() => onOpen?.(item)}>
      <div className="photo-card__frame">
        {item.src ? (
          <img src={item.src} alt="" />
        ) : showBuildSlots ? (
          <div className="photo-card__empty">Photograph needed</div>
        ) : null}
      </div>
      <MuseumLabel
        title={item.title}
        kind="photograph"
        year={item.year}
        accession={item.accession}
      />
    </button>
  );
}
