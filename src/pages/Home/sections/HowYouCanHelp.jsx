import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import Heartbeat from '../../../components/Heartbeat/Heartbeat.jsx';
import { fadeUp, staggerChildren, viewport } from '../../../motion/index.js';
import { howYouCanHelp } from '../../../data/home.js';

export default function HowYouCanHelp() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="home-section home-section--surface" id="how-you-can-help" lang="en">
      <div className="home-container">
        <header className="home-help-block__header">
          <p className="chapter__kicker">{howYouCanHelp.kicker}</p>
          <Heartbeat />
          <h2 className="home-help-block__title">{howYouCanHelp.title}</h2>
        </header>

        <motion.ul
          className="home-help-grid"
          variants={staggerChildren}
          initial={reduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={viewport}
        >
          {howYouCanHelp.cards.map((card) => (
            <motion.li key={card.id} className="home-help-card" variants={fadeUp}>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
              {card.placeholder && (
                <p className="home-help-card__placeholder">{card.placeholder}</p>
              )}
              <Link className="btn btn--solid" to={card.href}>
                {card.cta}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
