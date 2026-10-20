import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Heartbeat from '../../../components/Heartbeat/Heartbeat.jsx';
import { duration, ease } from '../../../motion/index.js';
import { voices } from '../../../data/home.js';

export default function Voices() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const item = voices.items[index];

  const prev = () => setIndex((i) => (i - 1 + voices.items.length) % voices.items.length);
  const next = () => setIndex((i) => (i + 1) % voices.items.length);

  return (
    <section className="home-section home-section--red" id="voices" lang="en">
      <div className="home-container home-voices">
        <header className="home-voices__header">
          <p className="chapter__kicker chapter__kicker--on-red">{voices.kicker}</p>
          <Heartbeat tone="on-red" />
          <h2 className="home-voices__title">{voices.title}</h2>
          <p className="home-voices__lede">{voices.lede}</p>
        </header>

        <div className="home-voices__stage" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={item.id}
              className={[
                'home-voices__quote',
                item.placeholder ? 'home-voices__quote--placeholder' : '',
              ]
                .filter(Boolean)
                .join(' ')}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: duration.base, ease }}
            >
              <p>{item.quote}</p>
              <footer>— {item.attribution}</footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="home-voices__controls">
          <button type="button" className="btn btn--outline-light" onClick={prev}>
            Previous
          </button>
          <span className="home-voices__count">
            {index + 1} / {voices.items.length}
          </span>
          <button type="button" className="btn btn--outline-light" onClick={next}>
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
