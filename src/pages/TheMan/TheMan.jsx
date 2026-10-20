import { motion } from 'framer-motion';
import RedLine, { NODE } from '../../components/RedLine/RedLine.jsx';
import SectionTitle from '../../components/SectionTitle/SectionTitle.jsx';
import ImageReveal from '../../components/ImageReveal/ImageReveal.jsx';
import { fadeUp, staggerChildren, viewport } from '../../motion/index.js';
import { theMan } from '../../data/theMan.js';
import './TheMan.css';

function Prose({ paragraphs }) {
  return (
    <motion.div
      className="doc-prose"
      variants={staggerChildren}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      {paragraphs.map((text) => (
        <motion.p key={text} variants={fadeUp}>
          {text}
        </motion.p>
      ))}
    </motion.div>
  );
}

export default function TheMan() {
  const { hero, earlyLife, family, person, beginning, philosophy, memories } = theMan;

  return (
    <div className="doc">
      <section className="doc-section theman-hero">
        <div className="theman-hero__copy">
          <p className="chapter__kicker">{hero.kicker}</p>
          <RedLine length="short" node={NODE.start} />
          <h1 className="theman-hero__title">{hero.title}</h1>
        </div>
        <ImageReveal className="doc-hero-photo">
          <img src={hero.image.src} alt={hero.image.alt} />
        </ImageReveal>
      </section>

      <section className="doc-section">
        <div className="doc-split">
          <div>
            <SectionTitle kicker={earlyLife.kicker} title={earlyLife.title} />
            <Prose paragraphs={earlyLife.paragraphs} />
            <ul className="doc-facts">
              {earlyLife.facts.map((fact) => (
                <li key={fact.label}>
                  <span>{fact.label}</span>
                  <strong>{fact.value}</strong>
                </li>
              ))}
            </ul>
          </div>
          <ImageReveal className="doc-split__image">
            <img src={earlyLife.image.src} alt={earlyLife.image.alt} />
          </ImageReveal>
        </div>
      </section>

      <RedLine node={NODE.center} />

      <section className="doc-section">
        <div className="doc-split">
          <ImageReveal className="doc-split__image">
            <img src={family.image.src} alt={family.image.alt} />
          </ImageReveal>
          <div>
            <SectionTitle kicker={family.kicker} title={family.title} />
            <Prose paragraphs={family.paragraphs} />
          </div>
        </div>
      </section>

      <section className="doc-section doc-narrow">
        <SectionTitle kicker={person.kicker} title={person.title} />
        <Prose paragraphs={person.paragraphs} />
      </section>

      <section className="doc-section">
        <div className="doc-split">
          <div>
            <SectionTitle kicker={beginning.kicker} title={beginning.title} />
            <Prose paragraphs={beginning.paragraphs} />
          </div>
          <ImageReveal className="doc-split__image">
            <img src={beginning.image.src} alt={beginning.image.alt} />
          </ImageReveal>
        </div>
      </section>

      <RedLine node={NODE.journey} />

      <section className="doc-section doc-narrow">
        <SectionTitle kicker={philosophy.kicker} title={philosophy.title} />
        <Prose paragraphs={philosophy.paragraphs} />
      </section>

      <section className="doc-section">
        <div className="doc-split">
          <div>
            <SectionTitle kicker={memories.kicker} title={memories.title} />
            <Prose paragraphs={memories.paragraphs} />
          </div>
          <ImageReveal className="doc-split__image">
            <img src={memories.image.src} alt={memories.image.alt} />
          </ImageReveal>
        </div>
      </section>
    </div>
  );
}
