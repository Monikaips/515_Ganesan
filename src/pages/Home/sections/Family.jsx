import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import SectionTitle from '../../../components/SectionTitle/SectionTitle.jsx';
import { fadeUp, staggerChildren, viewport } from '../../../motion/index.js';
import { family } from '../../../data/home.js';

export default function Family() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="home-section home-section--surface" id="family">
      <div className="home-container home-split">
        <div>
          <SectionTitle kicker={family.kicker} title={family.title} />
          <motion.div
            className="home-prose"
            variants={staggerChildren}
            initial={reduceMotion ? false : 'hidden'}
            whileInView="visible"
            viewport={viewport}
          >
            {family.paragraphs.map((text) => (
              <motion.p key={text} variants={fadeUp}>
                {text}
              </motion.p>
            ))}
          </motion.div>
          <Link className="home-continue" to={family.href}>
            {family.link}
          </Link>
        </div>
        <figure className="home-story__media">
          <img src={family.image} alt={family.imageAlt} loading="lazy" decoding="async" />
        </figure>
      </div>
    </section>
  );
}
