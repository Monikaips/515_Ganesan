import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionTitle from '../../../components/SectionTitle/SectionTitle.jsx';
import { fadeUp, staggerChildren, viewport } from '../../../motion/index.js';
import { contactCta } from '../../../data/home.js';
import { site } from '../../../data/site.js';

export default function ContactCTA() {
  return (
    <section className="home-section home-section--surface" id="contact">
      <div className="home-container">
        <SectionTitle kicker={contactCta.kicker} title={contactCta.title} />
        <motion.div
          className="home-contact"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.p className="home-contact__lede" variants={fadeUp}>
            {contactCta.lede}
          </motion.p>
          <motion.ul className="home-contact__details" variants={fadeUp}>
            <li>
              <span className="home-contact__label">Address</span>
              <span>{site.address}</span>
            </li>
            <li>
              <span className="home-contact__label">Email</span>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <span className="home-contact__label">Phone</span>
              <a href={`tel:${site.phone.replace(/\s+/g, '')}`}>{site.phone}</a>
            </li>
          </motion.ul>
          <motion.div variants={fadeUp}>
            <Link className="btn btn--solid" to="/contact">
              {contactCta.link}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
