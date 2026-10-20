import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import SectionTitle from '../../../components/SectionTitle/SectionTitle.jsx';
import { NODE } from '../../../components/RedLine/RedLine.jsx';
import MuseumLabel from '../../../components/UI/MuseumLabel.jsx';
import { fadeUp, staggerChildren, viewport } from '../../../motion/index.js';
import { legacy } from '../../../data/home.js';

export default function Legacy() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="home-section home-section--red home-legacy" id="legacy">
      <div className="home-container home-container--readable">
        <img className="home-legacy__mark" src={legacy.mark.src} alt={legacy.mark.alt} />
        <MuseumLabel source={legacy.mark.alt} kind="photograph" />
        <SectionTitle kicker={legacy.kicker} title={legacy.title} node={NODE.end} tone="dark" />
        <motion.div
          className="home-prose home-prose--on-red"
          variants={staggerChildren}
          initial={reduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={viewport}
        >
          {legacy.paragraphs.map((text) => (
            <motion.p key={text} variants={fadeUp}>
              {text}
            </motion.p>
          ))}
        </motion.div>
        <Link className="btn btn--outline-light" to={legacy.href}>
          {legacy.link}
        </Link>
      </div>
    </section>
  );
}
