import { motion, useReducedMotion } from 'framer-motion';
import SectionTitle from '../../../components/SectionTitle/SectionTitle.jsx';
import Heartbeat from '../../../components/Heartbeat/Heartbeat.jsx';
import { fadeUp, staggerChildren, viewport } from '../../../motion/index.js';
import { ambassador } from '../../../data/home.js';

export default function TheAmbassador() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="home-section home-section--photo" id="the-ambassador" lang="en">
      <div className="home-container home-split">
        <motion.figure
          className="home-story__media"
          variants={fadeUp}
          initial={reduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={viewport}
        >
          <img
            src={ambassador.image}
            alt={ambassador.imageAlt}
            loading="lazy"
            decoding="async"
          />
        </motion.figure>

        <div>
          <SectionTitle
            kicker={ambassador.kicker}
            title={ambassador.title}
            tone="dark"
          />
          <Heartbeat tone="on-red" />
          <p className="home-story__drop">{ambassador.pullQuote}</p>
          <motion.div
            className="home-prose home-prose--on-dark"
            variants={staggerChildren}
            initial={reduceMotion ? false : 'hidden'}
            whileInView="visible"
            viewport={viewport}
          >
            {ambassador.paragraphs.map((text) => (
              <motion.p key={text} variants={fadeUp}>
                {text}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
