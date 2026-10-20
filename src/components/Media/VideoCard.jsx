import { sourceById } from '../../data/sources.js';
import { youtubeThumb } from '../../data/catalog.js';
import MuseumLabel from '../UI/MuseumLabel.jsx';
import './VideoCard.css';

export default function VideoCard({ item, onOpen }) {
  const thumb = item.image ?? youtubeThumb(item.href);
  const source = sourceById(item.sourceId);

  const body = (
    <>
      <div className="video-card__frame">
        {thumb ? (
          <img src={thumb} alt="" />
        ) : (
          <div className="video-card__empty">Film</div>
        )}
        <span className="video-card__play" aria-hidden="true">
          ▶
        </span>
      </div>
      <MuseumLabel
        source={source?.name}
        title={item.title}
        kind="video"
        year={item.year}
        accession={item.accession}
      />
    </>
  );

  if (onOpen) {
    return (
      <button type="button" className="video-card" onClick={() => onOpen(item)}>
        {body}
      </button>
    );
  }

  return (
    <a className="video-card" href={item.href} target="_blank" rel="noreferrer">
      {body}
    </a>
  );
}
