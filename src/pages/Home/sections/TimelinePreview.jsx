import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionTitle from '../../../components/SectionTitle/SectionTitle.jsx';
import RedLine from '../../../components/RedLine/RedLine.jsx';
import { fadeUp, staggerChildren, viewport } from '../../../motion/index.js';
import { timelinePreview } from '../../../data/home.js';

const nodes = timelinePreview.stops.map((_, index) => {
  const last = timelinePreview.stops.length - 1;
  return last === 0 ? 0.5 : 0.08 + (index / last) * 0.84;
});

export default function TimelinePreview() {
  return (
    <section className="home-section home-section--surface" id="timeline-preview">
      <div className="home-container">
        <SectionTitle kicker={timelinePreview.kicker} title={timelinePreview.title} />
        <div className="home-stops">
          <RedLine node={nodes} />
          <motion.ol
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {timelinePreview.stops.map((stop) => (
              <motion.li key={stop.year} variants={fadeUp}>
                <span className="home-stops__year">{stop.year}</span>
                <p>{stop.text}</p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
        <Link className="home-continue" to={timelinePreview.href}>
          {timelinePreview.link}
        </Link>
      </div>
    </section>
  );
}
