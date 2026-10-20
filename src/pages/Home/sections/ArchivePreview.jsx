import { Link } from 'react-router-dom';
import SectionTitle from '../../../components/SectionTitle/SectionTitle.jsx';
import MuseumLabel from '../../../components/UI/MuseumLabel.jsx';
import { archivePreview } from '../../../data/home.js';

export default function ArchivePreview() {
  return (
    <section className="home-section" id="archive-preview">
      <div className="home-container">
        <SectionTitle kicker={archivePreview.kicker} title={archivePreview.title} />
        <div className="home-archive">
          {archivePreview.images.map((image) => (
            <div key={image.src} className="home-archive__item">
              <div className="home-archive__frame">
                <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
              </div>
              <MuseumLabel title={image.alt} kind="photograph" />
            </div>
          ))}
        </div>
        <Link className="btn btn--solid" to={archivePreview.href}>
          {archivePreview.link}
        </Link>
      </div>
    </section>
  );
}
