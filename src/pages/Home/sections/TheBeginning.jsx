import { motion, useReducedMotion } from 'framer-motion';
import SectionTitle from '../../../components/SectionTitle/SectionTitle.jsx';
import Heartbeat from '../../../components/Heartbeat/Heartbeat.jsx';
import { fadeUp, staggerChildren, viewport } from '../../../motion/index.js';
import { beginning } from '../../../data/home.js';

function Paragraph({ text }) {
  const pull = beginning.pullStatement;
  if (!pull || !text.includes(pull)) {
    return text;
  }

  const [before, after] = text.split(pull);
  return (
    <>
      {before}
      <span className="home-beginning__pull">{pull}</span>
      {after}
    </>
  );
}

function ProseBlock({ paragraphs }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="home-prose"
      variants={staggerChildren}
      initial={reduceMotion ? false : 'hidden'}
      whileInView="visible"
      viewport={viewport}
    >
      {paragraphs.map((text) => (
        <motion.p key={text} variants={fadeUp}>
          <Paragraph text={text} />
        </motion.p>
      ))}
    </motion.div>
  );
}

export default function TheBeginning() {
  const reduceMotion = useReducedMotion();
  const caption = beginning.imageCaption?.trim();
  const pull = beginning.pullStatement;
  const pullIndex = beginning.paragraphs.findIndex((text) => pull && text.includes(pull));
  const splitAt = pullIndex >= 0 ? pullIndex : 2;
  const leadParagraphs = beginning.paragraphs.slice(0, splitAt);
  const storyParagraphs = beginning.paragraphs.slice(splitAt);

  return (
    <section className="home-section home-section--surface" id="who-he-is" lang="en">
      <div className="home-container home-beginning">
        <div className="home-beginning__copy">
          <div className="home-beginning__intro">
            <SectionTitle kicker={beginning.kicker} title={beginning.title} />
            <Heartbeat className="home-beginning__heartbeat" />
            <ProseBlock paragraphs={leadParagraphs} />
          </div>
          <div className="home-beginning__story">
            <ProseBlock paragraphs={storyParagraphs} />
          </div>
        </div>

        <motion.figure
          className="home-portrait__figure"
          variants={fadeUp}
          initial={reduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={viewport}
        >
          <div className="home-portrait__frame">
            <img
              src={beginning.image}
              alt={beginning.imageAlt}
              loading="lazy"
              decoding="async"
            />
          </div>
          {caption ? (
            <figcaption className="home-portrait__caption">{caption}</figcaption>
          ) : null}
        </motion.figure>

        <ol className="home-portrait__timeline" aria-label="Key milestones">
          {beginning.milestones.map((item) => (
            <li key={`${item.year}-${item.text}`}>
              <span className="home-portrait__year">{item.year}</span>
              <span className="home-portrait__text">{item.text}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
