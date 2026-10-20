import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionTitle from '../../../components/SectionTitle/SectionTitle.jsx';
import ArchiveBadge from '../../../components/Archive/ArchiveBadge.jsx';
import MuseumLabel from '../../../components/UI/MuseumLabel.jsx';
import { fadeUp, staggerChildren, viewport } from '../../../motion/index.js';
import { disaster } from '../../../data/home.js';

export default function DisasterStory() {
  return (
    <section className="home-section home-section--dark" id="disaster">
      <div className="home-section__inner home-disaster">
        <div>
          <SectionTitle
            kicker={disaster.kicker}
            title={disaster.title}
            tone="dark"
          />
          <motion.div
            className="home-prose home-prose--on-dark"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {disaster.paragraphs.map((text) => (
              <motion.p key={text} variants={fadeUp}>
                {text}
              </motion.p>
            ))}
          </motion.div>
          <Link className="home-continue" to={disaster.href}>
            {disaster.link}
          </Link>
        </div>

        <figure className="home-disaster__exhibit">
          <img src={disaster.exhibit.src} alt={disaster.exhibit.alt} />
          <div className="home-disaster__label">
            <ArchiveBadge kind="disaster" className="archive-badge--on-dark" />
            <MuseumLabel
              title={disaster.exhibit.title}
              kind="photograph"
              className="museum-label--on-dark"
            />
          </div>
        </figure>
      </div>
    </section>
  );
}
