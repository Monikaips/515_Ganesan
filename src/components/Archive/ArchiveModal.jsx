import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import ArchiveSlot, { showBuildSlots } from '../ArchiveSlot/ArchiveSlot.jsx';
import ArchiveBadge from './ArchiveBadge.jsx';
import NewspaperMark from '../Media/NewspaperMark.jsx';
import MuseumLabel from '../UI/MuseumLabel.jsx';
import { duration, ease } from '../../motion/index.js';
import { sourceById } from '../../data/sources.js';
import { youtubeThumb } from '../../data/catalog.js';
import './ArchiveModal.css';

export default function ArchiveModal({ record, records = [], onClose, onSelect }) {
  const index = records.findIndex((item) => item.id === record?.id);

  useEffect(() => {
    if (!record) return undefined;
    document.body.style.overflow = 'hidden';

    const onKey = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight' && index < records.length - 1) onSelect?.(records[index + 1]);
      if (event.key === 'ArrowLeft' && index > 0) onSelect?.(records[index - 1]);
    };

    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [record, records, index, onClose, onSelect]);

  const source = record?.sourceId ? sourceById(record.sourceId) : null;

  return createPortal(
    <AnimatePresence>
      {record && (
        <motion.div
          className="archive-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: duration.fast, ease }}
        >
          <button className="archive-modal__back" type="button" onClick={onClose}>
            ← Back
          </button>

          <motion.div
            className="archive-modal__panel"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 16, opacity: 0 }}
            transition={{ duration: duration.base, ease }}
          >
            <ArchiveBadge kind={record.kind} year={record.year} className="archive-badge--on-dark" />

            <p className="archive-modal__year">{record.year ?? 'Recorded'}</p>

            {record.kind === 'press' && source && (
              <NewspaperMark source={source} size="hero" />
            )}

            {record.image ? (
              <img className="archive-modal__image" src={record.image} alt="" />
            ) : record.kind === 'press' || !showBuildSlots ? null : (
              <div className="archive-modal__empty">Original still needed</div>
            )}

            <h2>{record.title}</h2>
            {record.subtitle && <p className="archive-modal__sub">{record.subtitle}</p>}
            {record.body && <p className="archive-modal__body">{record.body}</p>}

            {record.accession && (
              <MuseumLabel
                kind={record.kind}
                year={record.year}
                accession={record.accession}
                className="museum-label--on-dark"
              />
            )}

            {record.href && (
              <a className="archive-modal__source" href={record.href} target="_blank" rel="noreferrer">
                {record.hrefLabel ?? 'Original source'} →
              </a>
            )}

            <div className="archive-modal__rule" />

            {record.related?.photographs?.length > 0 && (
              <section>
                <p className="archive-modal__label">Related photographs</p>
                <div className="archive-modal__thumbs">
                  {record.related.photographs.map((photo) => (
                    <img key={photo.src} src={photo.src} alt={photo.title ?? ''} />
                  ))}
                </div>
              </section>
            )}

            {record.related?.news?.length > 0 && (
              <section>
                <p className="archive-modal__label">Related news</p>
                <ul className="archive-modal__news">
                  {record.related.news.map((article) => (
                    <li key={article.id ?? article.href}>
                      <a href={article.href} target="_blank" rel="noreferrer">
                        <span>{article.source ?? sourceById(article.sourceId)?.name}</span>
                        {article.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {record.related?.videos?.length > 0 && (
              <section>
                <p className="archive-modal__label">Related video</p>
                <ul className="archive-modal__videos">
                  {record.related.videos.map((video) => {
                    const thumb = youtubeThumb(video.href);
                    return (
                      <li key={video.href}>
                        <a href={video.href} target="_blank" rel="noreferrer">
                          {thumb && <img src={thumb} alt="" />}
                          <span>{video.title}</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </section>
            )}

            {showBuildSlots && record.needed?.length > 0 && (
              <section>
                <p className="archive-modal__label">Still needed</p>
                {record.needed.map((slot) => (
                  <ArchiveSlot key={slot.file} {...slot} />
                ))}
              </section>
            )}

            {records.length > 1 && (
              <div className="archive-modal__nav">
                <button
                  type="button"
                  disabled={index <= 0}
                  onClick={() => onSelect?.(records[index - 1])}
                >
                  ← Previous
                </button>
                <button
                  type="button"
                  disabled={index >= records.length - 1}
                  onClick={() => onSelect?.(records[index + 1])}
                >
                  Next →
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
