import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import CountUp from '../../../components/CountUp/CountUp.jsx';
import Heartbeat from '../../../components/Heartbeat/Heartbeat.jsx';
import { fadeUp, staggerChildren, viewport } from '../../../motion/index.js';
import { impact } from '../../../data/home.js';

export default function Impact() {
  const reduceMotion = useReducedMotion();
  const statsRef = useRef(null);
  /* Replay the count whenever this band scrolls into view */
  const inView = useInView(statsRef, { amount: 0.35, once: false });

  return (
    <section className="home-section home-section--red home-section--stats" id="impact" lang="en">
      <div className="home-container">
        <header className="home-stats__header">
          <p className="chapter__kicker chapter__kicker--on-red">{impact.kicker}</p>
          <Heartbeat tone="on-red" />
          <h2 className="home-stats__title">{impact.title}</h2>
        </header>

        <motion.ul
          ref={statsRef}
          className="home-stats"
          variants={staggerChildren}
          initial={reduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={viewport}
        >
          {impact.stats.map((stat, index) => (
            <motion.li key={stat.label} variants={fadeUp}>
              <span className="home-stats__number" aria-label={`${stat.static ?? `${stat.value}${stat.suffix || ''}`} ${stat.label}`}>
                {stat.static != null ? (
                  <StaticCountUp
                    text={stat.static}
                    active={inView}
                    reduceMotion={reduceMotion}
                    delay={index * 60}
                  />
                ) : (
                  <CountUp
                    value={stat.value}
                    suffix={stat.suffix || ''}
                    active={inView}
                    duration={900 + index * 40}
                  />
                )}
              </span>
              <span className="home-stats__label">{stat.label}</span>
            </motion.li>
          ))}
        </motion.ul>

        <p className="home-stats__note">{impact.note}</p>
      </div>
    </section>
  );
}

/** Simple flash-in for non-numeric stats like "₹1 crore+" */
function StaticCountUp({ text, active, reduceMotion }) {
  return (
    <span
      style={{
        opacity: reduceMotion || active ? 1 : 0.35,
        transition: reduceMotion ? 'none' : 'opacity 0.4s ease',
      }}
    >
      {text}
    </span>
  );
}
