import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import SectionTitle from '../../../components/SectionTitle/SectionTitle.jsx';
import { fadeUp, viewport } from '../../../motion/index.js';
import { hisVoice } from '../../../data/home.js';

export default function HisVoice() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="home-section home-section--surface" id="his-voice">
      <div className="home-container">
        <SectionTitle kicker={hisVoice.kicker} title={hisVoice.title} align="center" />
        <div className="home-voice">
          <iframe
            src={hisVoice.video}
            title={hisVoice.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            loading="lazy"
          />
        </div>
        <motion.p
          className="home-voice__caption"
          variants={fadeUp}
          initial={reduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={viewport}
        >
          {hisVoice.caption}
        </motion.p>
        <p className="home-voice__more">
          <Link className="home-continue" to={hisVoice.href}>
            {hisVoice.link}
          </Link>
        </p>
      </div>
    </section>
  );
}
