import { motion } from 'framer-motion';
import RedLine, { NODE } from '../../components/RedLine/RedLine.jsx';
import ArchiveSlot, { showBuildSlots } from '../../components/ArchiveSlot/ArchiveSlot.jsx';
import ImageReveal from '../../components/ImageReveal/ImageReveal.jsx';
import { fadeUp, staggerChildren, viewport } from '../../motion/index.js';
import { familyChapters, familyPage } from '../../data/family.js';
import './Family.css';

const nodes = [NODE.start, NODE.journey, NODE.center, NODE.journey, NODE.end];

export default function Family() {
  return (
    <div className="doc">
      <section className="family-hero">
        <p className="chapter__kicker">{familyPage.kicker}</p>
        <RedLine length="short" node={NODE.center} />
        <h1>{familyPage.title}</h1>
        <p className="family-hero__lede">{familyPage.lede}</p>
      </section>

      <nav className="family-index" aria-label="Beyond 515">
        {familyChapters.map((chapter) => (
          <a key={chapter.id} href={`#${chapter.id}`}>
            {chapter.kicker}
          </a>
        ))}
      </nav>

      {familyChapters.map((chapter, index) => (
        <section key={chapter.id} className="family-chapter" id={chapter.id}>
          <div className="family-chapter__head">
            <p className="chapter__kicker">{chapter.kicker}</p>
            <RedLine length="short" node={nodes[index] ?? NODE.center} />
            <h2>{chapter.title}</h2>
          </div>

          <div className="family-chapter__body">
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
              <ImageReveal className="family-chapter__image">
                <img src={chapter.image.src} alt={chapter.image.alt} />
              </ImageReveal>
            )}
          </div>

          {showBuildSlots && chapter.needed?.length > 0 && (
            <div className="family-slots">
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
