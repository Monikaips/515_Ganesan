import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import RedLine, { NODE } from '../../components/RedLine/RedLine.jsx';
import { duration, ease, fadeUp } from '../../motion/index.js';
import { timeline } from '../../data/timeline.js';
import './Journey.css';

const nodes = timeline.map((_, index) => {
  const last = timeline.length - 1;
  return last === 0 ? 0.5 : 0.06 + (index / last) * 0.88;
});

export default function Journey() {
  const [activeId, setActiveId] = useState(timeline[0].id);
  const active = timeline.find((entry) => entry.id === activeId) ?? timeline[0];

  return (
    <div className="doc">
      <section className="journey-hero">
        <p className="chapter__kicker">The Journey</p>
        <RedLine length="short" node={NODE.start} />
        <h1>A life measured in miles.</h1>
      </section>

      <RedLine node={NODE.journey} />

      <div className="journey-layout">
        <div className="journey-spine">
          <RedLine orientation="vertical" node={nodes} />
          <ol className="journey-years">
            {timeline.map((entry) => (
              <li key={entry.id}>
                <button
                  type="button"
                  className={entry.id === activeId ? 'is-active' : ''}
                  onClick={() => setActiveId(entry.id)}
                >
                  {entry.year}
                </button>
              </li>
            ))}
          </ol>
        </div>

        <AnimatePresence mode="wait">
          <motion.article
            key={active.id}
            className="journey-story"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: duration.base, ease }}
          >
            <p className="journey-story__year">{active.year}</p>
            <h2>{active.title}</h2>
            {active.image && <img src={active.image} alt={active.title} />}
            <motion.p variants={fadeUp} initial="hidden" animate="visible">
              {active.description}
            </motion.p>
            <p className="journey-hint">Select a year. The road continues when you add another.</p>
          </motion.article>
        </AnimatePresence>
      </div>
    </div>
  );
}
