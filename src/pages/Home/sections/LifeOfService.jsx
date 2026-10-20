import { motion, useReducedMotion } from 'framer-motion';
import SectionTitle from '../../../components/SectionTitle/SectionTitle.jsx';
import Heartbeat from '../../../components/Heartbeat/Heartbeat.jsx';
import { fadeUp, staggerChildren, viewport } from '../../../motion/index.js';
import { lifeOfService } from '../../../data/home.js';

export default function LifeOfService() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="home-section home-section--surface" id="life-of-service" lang="en">
      <div className="home-container home-container--readable">
        <SectionTitle kicker={lifeOfService.kicker} title={lifeOfService.title} />
        <Heartbeat />
        <motion.div
          className="home-prose"
          variants={staggerChildren}
          initial={reduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={viewport}
        >
          {lifeOfService.paragraphs.map((text) => (
            <motion.p key={text} variants={fadeUp}>
              {text}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
