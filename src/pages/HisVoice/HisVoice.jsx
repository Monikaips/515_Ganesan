import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import RedLine, { NODE } from '../../components/RedLine/RedLine.jsx';
import ArchiveSlot, { showBuildSlots } from '../../components/ArchiveSlot/ArchiveSlot.jsx';
import ImageReveal from '../../components/ImageReveal/ImageReveal.jsx';
import { hisVoicePage, voiceChapters } from '../../data/hisVoice.js';
import { duration, ease } from '../../motion/index.js';
import './HisVoice.css';

export default function HisVoice() {
  const [activeId, setActiveId] = useState(voiceChapters[0].id);
  const active = voiceChapters.find((chapter) => chapter.id === activeId) ?? voiceChapters[0];

  return (
    <div className="doc">
      <section className="voice-hero">
        <div className="voice-hero__copy">
          <h1>{hisVoicePage.title}</h1>
          <RedLine length="short" node={NODE.start} />
          <p className="voice-hero__lede">{hisVoicePage.lede}</p>
        </div>
        <ImageReveal className="voice-hero__portrait">
          <img src={hisVoicePage.portrait.src} alt={hisVoicePage.portrait.alt} />
        </ImageReveal>
      </section>

      <nav className="voice-list" aria-label="His voice">
        {voiceChapters.map((chapter) => (
          <button
            key={chapter.id}
            type="button"
            className={chapter.id === activeId ? 'is-active' : ''}
            onClick={() => setActiveId(chapter.id)}
          >
            <span className="voice-list__play">▶</span>
            {chapter.title}
          </button>
        ))}
      </nav>

      <AnimatePresence mode="wait">
        <motion.section
          key={active.id}
          className="voice-chapter"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: duration.base, ease }}
        >
          <p className="chapter__kicker">{active.title}</p>
          <RedLine length="short" node={NODE.journey} />
          <p className="voice-chapter__note">{active.note}</p>

          {active.quote && <blockquote className="voice-quote">{active.quote}</blockquote>}

          {active.video ? (
            <div className="voice-film">
              <iframe
                src={active.video.src}
                title={active.video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          ) : (
            <p className="voice-empty">No interview in the archive yet.</p>
          )}

          {showBuildSlots && active.needed?.length > 0 && (
            <div className="voice-needed">
              <p className="chapter__kicker">Still needed</p>
              <div className="voice-slots">
                {active.needed.map((slot) => (
                  <ArchiveSlot key={slot.file} {...slot} />
                ))}
              </div>
            </div>
          )}
        </motion.section>
      </AnimatePresence>
    </div>
  );
}
