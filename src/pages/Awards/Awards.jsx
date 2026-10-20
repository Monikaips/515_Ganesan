import { useState } from 'react';
import RedLine, { NODE } from '../../components/RedLine/RedLine.jsx';
import ArchiveSlot, { showBuildSlots } from '../../components/ArchiveSlot/ArchiveSlot.jsx';
import ArchiveBadge from '../../components/Archive/ArchiveBadge.jsx';
import PressTile from '../../components/Archive/PressTile.jsx';
import AwardWall from '../../components/Awards/AwardWall.jsx';
import AwardViewer from '../../components/Awards/AwardViewer.jsx';
import ArchiveModal from '../../components/Archive/ArchiveModal.jsx';
import OrganizationMark from '../../components/Media/OrganizationMark.jsx';
import MuseumLabel from '../../components/UI/MuseumLabel.jsx';
import { awardsNeeded, awardsPage, doctorateHighlight, press, sortedAwards } from '../../data/awards.js';
import { pressToRecord } from '../../data/records.js';
import { sources, sourceById } from '../../data/sources.js';
import './Awards.css';

const organizations = [sources['red-cross'], sources['bharath-university']];

export default function Awards() {
  const wall = sortedAwards();
  const [activeAward, setActiveAward] = useState(null);
  const [activePress, setActivePress] = useState(null);
  const pressRecords = press.map(pressToRecord);
  const bbc = sourceById(doctorateHighlight.sourceId);

  return (
    <div className="doc">
      <section className="awards-hero">
        <p className="chapter__kicker">{awardsPage.kicker}</p>
        <RedLine length="short" node={NODE.center} />
        <h1>{awardsPage.title}</h1>
        <p className="awards-hero__lede">{awardsPage.lede}</p>
      </section>

      <section className="awards-doctorate">
        <a href={doctorateHighlight.href} target="_blank" rel="noreferrer" className="awards-doctorate__link">
          <div>
            <ArchiveBadge kind="award" year={doctorateHighlight.year} />
            <p className="awards-doctorate__source">{bbc?.name}</p>
            <h2>{doctorateHighlight.titleEn}</h2>
            <p className="awards-doctorate__tamil">{doctorateHighlight.title}</p>
            <p>{doctorateHighlight.summary}</p>
            <span className="awards-doctorate__cta">Read the original →</span>
          </div>
          <img src={doctorateHighlight.photograph} alt={doctorateHighlight.photographAlt} />
        </a>
      </section>

      <RedLine node={NODE.start} />

      <section className="awards-press">
        <ArchiveBadge kind="press" />
        <p className="chapter__kicker">Press archive</p>
        <RedLine length="short" node={NODE.journey} />
        <p className="awards-count">
          {press.length} articles
          {press.some((item) => item.year)
            ? ` · ${Math.min(...press.map((item) => item.year).filter(Boolean))}–${Math.max(
                ...press.map((item) => item.year).filter(Boolean),
              )}`
            : ''}
        </p>
        <div className="awards-press__grid">
          {press.map((article) => (
            <PressTile key={article.id} article={article} onOpen={setActivePress} />
          ))}
        </div>
      </section>

      <RedLine node={NODE.center} />

      <section className="awards-wall">
        <ArchiveBadge kind="award" />
        <p className="chapter__kicker">The wall</p>
        <RedLine length="short" node={NODE.end} />
        <AwardWall awards={wall} onOpen={setActiveAward} />
      </section>

      <section className="awards-orgs">
        <ArchiveBadge kind="organization" />
        <p className="chapter__kicker">Organizations</p>
        <div className="awards-orgs__grid">
          {organizations.map((org) => (
            <div key={org.id} className="awards-orgs__item">
              <OrganizationMark source={org} />
              <MuseumLabel
                source={org.name}
                title={org.association}
                kind="organization"
              />
            </div>
          ))}
        </div>
      </section>

      {showBuildSlots && (
        <section className="awards-wall">
          <p className="chapter__kicker">To be catalogued</p>
          <p className="awards-note">
            Eighty-five and more. Add a year to src/data/awards.js and drop the scan in public/archive/awards/.
          </p>
          <div className="awards-needed">
            {awardsNeeded.map((slot) => (
              <ArchiveSlot key={slot.file} {...slot} />
            ))}
          </div>
        </section>
      )}

      <AwardViewer
        award={activeAward}
        awards={wall}
        onClose={() => setActiveAward(null)}
        onSelect={setActiveAward}
      />

      <ArchiveModal
        record={activePress ? pressToRecord(activePress) : null}
        records={pressRecords}
        onClose={() => setActivePress(null)}
        onSelect={(next) => {
          const match = press.find((item) => item.id === next.id);
          setActivePress(match ?? null);
        }}
      />
    </div>
  );
}
