import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import Heartbeat from '../../../components/Heartbeat/Heartbeat.jsx';
import { fadeUp, staggerChildren } from '../../../motion/index.js';
import { hero } from '../../../data/home.js';

export default function Hero() {
  const slides = hero.cycle ?? [{ src: hero.image, alt: hero.imageAlt, position: '50% 25%' }];
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || slides.length < 2) return undefined;
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, hero.cycleMs ?? 5200);
    return () => clearInterval(timer);
  }, [slides.length, reduceMotion]);

  const active = slides[index] ?? slides[0];

  return (
    <section className="home-hero" id="hero" aria-label="Introduction">
      <div className="home-hero__photo home-hero__photo--cycle">
        {slides.map((slide, i) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={i === index ? slide.alt || hero.imageAlt : ''}
            className={i === index ? 'is-active' : ''}
            style={{ objectPosition: slide.position || '50% 30%' }}
            loading={i === 0 ? 'eager' : 'lazy'}
            decoding="async"
          />
        ))}
      </div>
      <div className="home-hero__veil" aria-hidden="true" />

      <p className="home-hero__mark" aria-hidden="true">
        {hero.mark}
      </p>

      <motion.div
        className="home-hero__copy"
        variants={staggerChildren}
        initial={reduceMotion ? false : 'hidden'}
        animate="visible"
      >
        <motion.p className="home-hero__year" variants={fadeUp}>
          {hero.year}
        </motion.p>

        <motion.h1 className="home-hero__statement" variants={fadeUp}>
          {hero.lines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </motion.h1>

        <motion.p className="home-hero__number" variants={fadeUp} aria-label={`Number ${hero.number}`}>
          {hero.number}
        </motion.p>

        <Heartbeat tone="on-red" />

        <motion.p className="home-hero__life" variants={fadeUp}>
          {hero.life}
        </motion.p>

        <motion.p className="home-hero__counter" variants={fadeUp}>
          {hero.counterLine}
        </motion.p>

        <motion.div className="home-hero__actions" variants={fadeUp}>
          <a className="btn btn--solid" href={hero.impactHref}>
            {hero.impactCta}
          </a>
          <Link className="btn btn--outline-light" to={hero.contactHref}>
            {hero.contactCta}
          </Link>
        </motion.div>

        <motion.a className="home-hero__discover" href={hero.discoverHref} variants={fadeUp}>
          <span aria-hidden="true">↓</span>
          {hero.discover}
        </motion.a>
      </motion.div>

      <p className="home-hero__sr-only" aria-live="polite">
        {active?.alt || hero.imageAlt}
      </p>
    </section>
  );
}
