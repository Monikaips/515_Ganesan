import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import SectionTitle from '../../../components/SectionTitle/SectionTitle.jsx';
import { fadeUp, staggerChildren, viewport } from '../../../motion/index.js';
import { recognitionPreview } from '../../../data/home.js';

export default function RecognitionPreview() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="home-section home-section--surface" id="recognition-preview">
      <div className="home-container home-container--readable">
        <SectionTitle kicker={recognitionPreview.kicker} title={recognitionPreview.title} />
        <motion.ul
          className="home-list"
          variants={staggerChildren}
          initial={reduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={viewport}
        >
          {recognitionPreview.items.map((item) => (
            <motion.li key={item} variants={fadeUp}>
              {item}
            </motion.li>
          ))}
        </motion.ul>
        <Link className="home-continue" to={recognitionPreview.href}>
          {recognitionPreview.link}
        </Link>
      </div>
    </section>
  );
}
