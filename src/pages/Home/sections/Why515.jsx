import { motion, useReducedMotion } from 'framer-motion';
import Heartbeat from '../../../components/Heartbeat/Heartbeat.jsx';
import { fadeUp, staggerChildren, viewport } from '../../../motion/index.js';
import { why515 } from '../../../data/home.js';

export default function Why515() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="home-section home-section--red" id="why-515" lang="en">
      <div className="home-container home-why">
        <p className="home-why__giant" aria-hidden="true">
          515
        </p>
        <div className="home-why__content">
          <p className="chapter__kicker chapter__kicker--on-red">{why515.kicker}</p>
          <Heartbeat tone="on-red" />
          <h2 className="home-why__title">{why515.title}</h2>
          <motion.div
            className="home-prose home-prose--on-red"
            variants={staggerChildren}
            initial={reduceMotion ? false : 'hidden'}
            whileInView="visible"
            viewport={viewport}
          >
            {why515.paragraphs.map((text) => (
              <motion.p key={text} variants={fadeUp}>
                {text.includes(why515.pullQuote) ? (
                  <>
                    {text.split(why515.pullQuote)[0]}
                    <q className="home-why__pull">{why515.pullQuote}</q>
                    {text.split(why515.pullQuote)[1]}
                  </>
                ) : (
                  text
                )}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
