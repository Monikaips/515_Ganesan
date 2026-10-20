import { motion } from 'framer-motion';
import RedLine, { NODE } from '../../components/RedLine/RedLine.jsx';
import ArchiveSlot, { showBuildSlots } from '../../components/ArchiveSlot/ArchiveSlot.jsx';
import ArchiveBadge from '../../components/Archive/ArchiveBadge.jsx';
import VideoCard from '../../components/Media/VideoCard.jsx';
import { fadeUp, staggerChildren, viewport } from '../../motion/index.js';
import { youtubeThumb } from '../../data/catalog.js';
import { disasterPage, disasters } from '../../data/disasters.js';
import './DisasterRelief.css';

const nodes = [NODE.start, NODE.center, NODE.journey, NODE.end, NODE.center];

function slotsOf(needed, type) {
  return needed.filter((item) => item.type === type);
}

function Chapter({ chapter, node }) {
  const imageSlots = slotsOf(chapter.needed, 'image');
  const videoSlots = slotsOf(chapter.needed, 'video');
  const quoteSlots = slotsOf(chapter.needed, 'quote');

  return (
    <section className="doc-section relief-chapter" id={chapter.id}>
      <div className="relief-chapter__head">
        <p className="relief-year">{chapter.year}</p>
        <RedLine length="short" node={node} />
        <h2 className="chapter__title">{chapter.title}</h2>
        <p className="relief-place">{chapter.place}</p>
      </div>

      <div className="relief-block">
        <p className="relief-block__label">Story</p>
        <motion.div
          className="doc-prose"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {chapter.story.map((text) => (
            <motion.p key={text} variants={fadeUp}>
              {text}
            </motion.p>
          ))}
        </motion.div>
      </div>

      {showBuildSlots && (
        <div className="relief-block">
          <p className="relief-block__label">Images</p>
          {imageSlots.length ? (
            <div className="relief-slots">
              {imageSlots.map((slot) => (
                <ArchiveSlot key={slot.file} {...slot} />
              ))}
            </div>
          ) : (
            <p className="service-empty">Stills are in the archive.</p>
          )}
        </div>
      )}

      {(chapter.video || chapter.moreVideo?.length > 0 || (showBuildSlots && videoSlots.length > 0)) && (
        <div className="relief-block">
          <p className="relief-block__label">Video</p>
          {chapter.video && (
            <VideoCard
              item={{
                title: chapter.video.title,
                href: chapter.video.src.replace('/embed/', '/watch?v='),
                year: Number(chapter.year) || null,
              }}
            />
          )}
          {chapter.moreVideo?.length > 0 && (
            <div className="relief-films">
              {chapter.moreVideo.map((item) => (
                <VideoCard
                  key={item.href}
                  item={{ title: item.label, href: item.href, year: Number(chapter.year) || null }}
                />
              ))}
            </div>
          )}
          {showBuildSlots &&
            videoSlots.map((slot) => <ArchiveSlot key={slot.file} {...slot} />)}
        </div>
      )}

      {(chapter.quote || (showBuildSlots && quoteSlots.length > 0)) && (
        <div className="relief-block">
          <p className="relief-block__label">Quote</p>
          {chapter.quote ? (
            <blockquote className="relief-quote">{chapter.quote}</blockquote>
          ) : (
            quoteSlots.map((slot) => <ArchiveSlot key={slot.file} {...slot} />)
          )}
        </div>
      )}

      {(chapter.evidence.length > 0 || showBuildSlots) && (
        <div className="relief-block">
          <p className="relief-block__label">Evidence</p>
          {chapter.evidence.length ? (
            <ul className="doc-links">
              {chapter.evidence.map((item) => (
                <li key={item.href}>
                  <a href={item.href} target="_blank" rel="noreferrer">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="service-empty">
              Press clippings and documents can go in public/archive/documents/.
            </p>
          )}
        </div>
      )}
    </section>
  );
}

export default function DisasterRelief() {
  return (
    <div className="doc">
      <section className="relief-hero">
        <p className="chapter__kicker">{disasterPage.kicker}</p>
        <RedLine length="short" node={NODE.center} />
        <h1>{disasterPage.title}</h1>
        <p className="relief-hero__lede">{disasterPage.lede}</p>
      </section>

      <nav className="relief-index" aria-label="Disaster chapters">
        {disasters.map((chapter) => (
          <a key={chapter.id} href={`#${chapter.id}`}>
            {chapter.year}
          </a>
        ))}
      </nav>

      <section className="relief-exhibits">
        {disasters.map((chapter) => {
          const still = chapter.images[0]?.src;
          const film = chapter.video?.src;
          const thumb = still ?? (film ? youtubeThumb(film) : null);
          return (
            <a key={chapter.id} className="relief-exhibit" href={`#${chapter.id}`}>
              <div className="relief-exhibit__frame">
                {thumb ? (
                  <img src={thumb} alt="" />
                ) : showBuildSlots ? (
                  <div className="relief-exhibit__empty">Photograph needed</div>
                ) : null}
                <div className="relief-exhibit__copy">
                  <h2>{chapter.title}</h2>
                  <p>{chapter.year}</p>
                </div>
              </div>
              <ArchiveBadge kind="disaster" />
            </a>
          );
        })}
      </section>

      {disasters.map((chapter, index) => (
        <div key={chapter.id}>
          <RedLine node={nodes[index]} />
          <Chapter chapter={chapter} node={nodes[index]} />
        </div>
      ))}
    </div>
  );
}
