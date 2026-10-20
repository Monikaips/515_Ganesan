import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import RedLine, { NODE } from '../../components/RedLine/RedLine.jsx';
import SectionTitle from '../../components/SectionTitle/SectionTitle.jsx';
import ImageReveal from '../../components/ImageReveal/ImageReveal.jsx';
import { fadeUp, staggerChildren, viewport } from '../../motion/index.js';
import { servicePage, services } from '../../data/services.js';
import './Service.css';

function Chapter({ service, node }) {
  return (
    <section className="doc-section service-chapter" id={service.id}>
      <div className="service-chapter__head">
        <SectionTitle kicker={service.kicker} title={service.title} node={node} />
      </div>

      <div className="service-block">
        <p className="service-block__label">Story</p>
        <motion.div
          className="doc-prose"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {service.story.map((text) => (
            <motion.p key={text} variants={fadeUp}>
              {text}
            </motion.p>
          ))}
        </motion.div>
      </div>

      <div className="service-block">
        <p className="service-block__label">Images</p>
        {service.images.length ? (
          <div className="service-images">
            {service.images.map((image) => (
              <ImageReveal key={image.src}>
                <img src={image.src} alt={image.alt} />
              </ImageReveal>
            ))}
          </div>
        ) : (
          <p className="service-empty">Original stills belong in public/archive/service/.</p>
        )}
      </div>

      <div className="service-block">
        <p className="service-block__label">Video</p>
        {service.video ? (
          <div className="service-video">
            <iframe
              src={service.video.src}
              title={service.video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        ) : (
          <p className="service-empty">No film in the archive yet.</p>
        )}
      </div>

      <div className="service-block">
        <p className="service-block__label">Timeline</p>
        <ol className="service-timeline">
          {service.timeline.map((entry) => (
            <li key={`${entry.year}-${entry.text}`}>
              <span className="service-timeline__year">{entry.year}</span>
              <p>{entry.text}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="service-block">
        <p className="service-block__label">Evidence</p>
        <ul className="doc-links">
          {service.evidence.map((item) => (
            <li key={item.href}>
              <a href={item.href} target="_blank" rel="noreferrer">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        {service.href && (
          <Link className="home-continue" to={service.href}>
            {service.link}
          </Link>
        )}
      </div>
    </section>
  );
}

const chapterNodes = [NODE.start, NODE.center, NODE.journey, NODE.end, NODE.start, NODE.center, NODE.journey];

export default function Service() {
  return (
    <div className="doc">
      <section className="service-hero">
        <p className="chapter__kicker">{servicePage.kicker}</p>
        <RedLine length="short" node={NODE.center} />
        <h1>{servicePage.title}</h1>
        <p className="service-hero__lede">{servicePage.lede}</p>
      </section>

      <nav className="service-index" aria-label="Service categories">
        {services.map((service) => (
          <a key={service.id} href={`#${service.id}`}>
            <span className="service-index__num">{service.kicker}</span>
            {service.title}
          </a>
        ))}
      </nav>

      {services.map((service, index) => (
        <div key={service.id}>
          <RedLine node={chapterNodes[index]} />
          <Chapter service={service} node={chapterNodes[index]} />
        </div>
      ))}
    </div>
  );
}
