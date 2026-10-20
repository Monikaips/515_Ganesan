import { motion } from 'framer-motion';
import RedLine, { NODE } from '../../components/RedLine/RedLine.jsx';
import ArchiveSlot, { showBuildSlots } from '../../components/ArchiveSlot/ArchiveSlot.jsx';
import ImageReveal from '../../components/ImageReveal/ImageReveal.jsx';
import { fadeUp, staggerChildren, viewport } from '../../motion/index.js';
import { legacyChapters, legacyPage } from '../../data/legacy.js';
import './Legacy.css';

const nodes = [NODE.start, NODE.journey, NODE.center, NODE.end];

export default function Legacy() {
  return (
    <div className="doc">
      <section className="legacy-hero">
        <div className="legacy-hero__copy">
          <p className="chapter__kicker">{legacyPage.kicker}</p>
          <RedLine length="short" node={NODE.end} />
          <h1>{legacyPage.title}</h1>
          <p className="legacy-hero__lede">{legacyPage.lede}</p>
        </div>
        <ImageReveal className="legacy-hero__mark">
          <img src={legacyPage.mark.src} alt={legacyPage.mark.alt} />
        </ImageReveal>
      </section>

      <nav className="legacy-index" aria-label="Legacy">
        {legacyChapters.map((chapter) => (
          <a key={chapter.id} href={`#${chapter.id}`}>
            {chapter.kicker}
          </a>
        ))}
      </nav>

      {legacyChapters.map((chapter, index) => (
        <section key={chapter.id} className="legacy-chapter" id={chapter.id}>
          <div className="legacy-chapter__head">
            <p className="chapter__kicker">{chapter.kicker}</p>
            <RedLine length="short" node={nodes[index] ?? NODE.center} />
            <h2>{chapter.title}</h2>
          </div>

          <div className="legacy-chapter__body">
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

            {chapter.image && (
              <ImageReveal
                className={`legacy-chapter__image${
                  chapter.image.src === legacyPage.mark.src ? ' legacy-chapter__image--mark' : ''
                }`}
              >
                <img src={chapter.image.src} alt={chapter.image.alt} />
              </ImageReveal>
            )}
          </div>

          {showBuildSlots && chapter.needed?.length > 0 && (
            <div className="legacy-slots">
              {chapter.needed.map((slot) => (
                <ArchiveSlot key={slot.file} {...slot} />
              ))}
            </div>
          )}
        </section>
      ))}
    </div>
  );
}
