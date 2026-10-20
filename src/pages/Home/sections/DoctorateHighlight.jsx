import ArchiveBadge from '../../../components/Archive/ArchiveBadge.jsx';
import MuseumLabel from '../../../components/UI/MuseumLabel.jsx';
import { doctorateHighlight } from '../../../data/awards.js';
import { sourceById } from '../../../data/sources.js';

export default function DoctorateHighlight() {
  const source = sourceById(doctorateHighlight.sourceId);

  return (
    <section className="home-section home-section--surface" id="doctorate">
      <div className="home-container">
        <a
          className="home-doctorate"
          href={doctorateHighlight.href}
          target="_blank"
          rel="noreferrer"
        >
          <div className="home-doctorate__copy">
            <ArchiveBadge kind="award" year={doctorateHighlight.year} />
            <p className="home-doctorate__kicker">{source?.name}</p>
            <h2>{doctorateHighlight.titleEn}</h2>
            <p className="home-doctorate__tamil">{doctorateHighlight.title}</p>
            <p className="home-doctorate__summary">{doctorateHighlight.summary}</p>
            <span className="home-doctorate__cta">Read BBC Tamil →</span>
          </div>
          <figure className="home-doctorate__photo">
            <img
              src={doctorateHighlight.photograph}
              alt={doctorateHighlight.photographAlt}
              loading="lazy"
              decoding="async"
            />
            <MuseumLabel
              source={source?.name}
              title="Doctor of Social Work"
              kind="award"
              year={doctorateHighlight.year}
            />
          </figure>
        </a>
      </div>
    </section>
  );
}
