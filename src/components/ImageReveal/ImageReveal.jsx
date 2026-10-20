import { motion } from 'framer-motion';
import { duration, ease, viewport } from '../../motion/index.js';

export default function ImageReveal({ children, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ clipPath: 'inset(100% 0% 0% 0%)', opacity: 0 }}
      whileInView={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
      viewport={viewport}
      transition={{ duration: duration.slow, ease }}
    >
      {children}
    </motion.div>
  );
}
