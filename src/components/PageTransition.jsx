import { useOutlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { pageTransition } from '../motion/index.js';

export default function PageTransition() {
  const location = useLocation();
  const outlet = useOutlet();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageTransition}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {outlet}
      </motion.div>
    </AnimatePresence>
  );
}
