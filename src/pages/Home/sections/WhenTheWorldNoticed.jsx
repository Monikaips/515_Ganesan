import { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../../components/SectionTitle/SectionTitle.jsx';
import PressTile from '../../../components/Archive/PressTile.jsx';
import VideoCard from '../../../components/Media/VideoCard.jsx';
import ArchiveModal from '../../../components/Archive/ArchiveModal.jsx';
import ArchiveBadge from '../../../components/Archive/ArchiveBadge.jsx';
import { worldNoticed } from '../../../data/home.js';
import { press } from '../../../data/awards.js';
import { catalog } from '../../../data/catalog.js';
import { pressToRecord, videoToRecord } from '../../../data/records.js';

function resolveItem(id) {
  return press.find((item) => item.id === id) ?? catalog.find((item) => item.id === id);
}

export default function WhenTheWorldNoticed() {
  const [active, setActive] = useState(null);

  const open = (item) => {
    if (item.tab === 'videos' || item.href?.includes('youtube') || item.href?.includes('youtu.be')) {
      const video = catalog.find((entry) => entry.id === item.id) ?? item;
      setActive(videoToRecord(video));
      return;
    }
    setActive(pressToRecord(item));
  };

  return (
    <section className="home-section" id="when-the-world-noticed">
      <div className="home-container">
      <SectionTitle kicker={worldNoticed.kicker} title={worldNoticed.title} align="center" />

      <div className="home-noticed">
        {worldNoticed.groups.map((group) => (
          <div key={group.id} className="home-noticed__group">
            <ArchiveBadge kind={group.kind} />
            <p className="home-noticed__label">{group.label}</p>
            <div className="home-noticed__tiles">
              {group.items.map((id) => {
                const item = resolveItem(id);
                if (!item) return null;
                if (group.kind === 'video') {
                  return <VideoCard key={id} item={item} onOpen={open} />;
                }
                return <PressTile key={id} article={item} onOpen={open} />;
              })}
            </div>
          </div>
        ))}
      </div>

      <p className="home-noticed__foot">
        <Link className="home-continue" to={worldNoticed.href}>
          {worldNoticed.link}
        </Link>
      </p>

      <ArchiveModal record={active} records={[]} onClose={() => setActive(null)} />
      </div>
    </section>
  );
}
