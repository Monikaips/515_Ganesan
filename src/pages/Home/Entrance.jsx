import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import { entrance } from '../../data/home.js';
import { duration, ease } from '../../motion/index.js';
import './Entrance.css';

const SESSION_KEY = '515-entrance-seen';

export default function Entrance() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return undefined;
    setOpen(true);

    const cycle = setInterval(() => {
      setIndex((current) => (current + 1) % entrance.images.length);
    }, entrance.cycleMs);

    const videoTimer = setTimeout(() => setShowVideo(true), entrance.videoDelayMs);

    return () => {
      clearInterval(cycle);
      clearTimeout(videoTimer);
    };
  }, []);

  const close = () => {
    sessionStorage.setItem(SESSION_KEY, '1');
    setOpen(false);
  };

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="entrance"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: duration.fast, ease }}
        >
          <div className="entrance__slides" aria-hidden="true">
            {entrance.images.map((image, i) => (
              <img
                key={image.src}
                src={image.src}
                alt=""
                className={i === index ? 'is-active' : ''}
              />
            ))}
            <div className="entrance__veil" />
          </div>

          <div className="entrance__content">
            <p className="entrance__number">{entrance.number}</p>
            <h1>
              {entrance.lines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h1>
            <p className="entrance__caption">{entrance.caption}</p>

            <AnimatePresence>
              {showVideo && (
                <motion.div
                  className="entrance__film"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: duration.base, ease }}
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${entrance.video.id}?autoplay=1&mute=1&rel=0&modestbranding=1`}
                    title={entrance.video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="entrance__footer">
            <button type="button" className="entrance__enter" onClick={close}>
              {entrance.enter}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
