import { motion } from 'framer-motion';
import RedLine, { NODE } from '../../components/RedLine/RedLine.jsx';
import SectionTitle from '../../components/SectionTitle/SectionTitle.jsx';
import ImageReveal from '../../components/ImageReveal/ImageReveal.jsx';
import { fadeUp, staggerChildren, viewport } from '../../motion/index.js';
import { the515 } from '../../data/the515.js';
import './The515.css';

export default function The515() {
  const { vehicle, story, evidence } = the515;

  return (
    <div className="doc">
      <section className="the515-hero">
        <p className="the515-kicker">{the515.kicker}</p>
        <div className="the515-digits" aria-label="515">
          {the515.digits.map((digit, index) => (
            <span key={`${digit}-${index}`}>{digit}</span>
          ))}
        </div>
        <RedLine length="short" node={NODE.journey} />
        <p className="the515-lede">{the515.lede}</p>
      </section>

      <RedLine node={NODE.start} />

      <section className="doc-section doc-narrow">
        <SectionTitle kicker={story.kicker} title={story.title} />
        <motion.div
          className="doc-prose"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {story.paragraphs.map((text) => (
            <motion.p key={text} variants={fadeUp}>
              {text}
            </motion.p>
          ))}
        </motion.div>
      </section>

      <section className="doc-section">
        <div className="doc-split">
          <div>
            <SectionTitle kicker={vehicle.kicker} title={vehicle.title} />
            <motion.div
              className="doc-prose"
              variants={staggerChildren}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              {vehicle.paragraphs.map((text) => (
                <motion.p key={text} variants={fadeUp}>
                  {text}
                </motion.p>
              ))}
            </motion.div>
          </div>
          <ImageReveal className="doc-split__image">
            <img src={vehicle.image.src} alt={vehicle.image.alt} />
          </ImageReveal>
        </div>
      </section>

      <section className="doc-section">
        <div className="the515-gallery">
          <ImageReveal>
            <img src={vehicle.sideImage.src} alt={vehicle.sideImage.alt} />
          </ImageReveal>
          <ImageReveal>
            <img src={vehicle.withHim.src} alt={vehicle.withHim.alt} />
          </ImageReveal>
        </div>
        <ul className="doc-facts">
          {vehicle.facts.map((fact) => (
            <li key={fact.label}>
              <span>{fact.label}</span>
              <strong>{fact.value}</strong>
            </li>
          ))}
        </ul>
      </section>

      <RedLine node={NODE.end} />

      <section className="doc-section doc-narrow">
        <SectionTitle kicker={evidence.kicker} title={evidence.title} />
        <motion.div
          className="doc-prose"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {evidence.paragraphs.map((text) => (
            <motion.p key={text} variants={fadeUp}>
              {text}
            </motion.p>
          ))}
        </motion.div>
        <ul className="doc-links">
          {evidence.links.map((link) => (
            <li key={link.href}>
              <a href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
