import { useId, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Heartbeat from '../../../components/Heartbeat/Heartbeat.jsx';
import TamilNaduMap from '../../../components/ImpactMap/TamilNaduMap.jsx';
import IndiaStatesMap from '../../../components/ImpactMap/IndiaStatesMap.jsx';
import {
  beyondTamilNadu,
  getBeyondState,
  getImpactDistricts,
  getImpactTotals,
  impactMapPage,
} from '../../../data/impact.js';
import { duration, ease, fadeUp, viewport } from '../../../motion/index.js';
import '../../../components/ImpactMap/ImpactMap.css';

export default function PlacesMap() {
  const districts = useMemo(() => getImpactDistricts(), []);
  const totals = useMemo(() => getImpactTotals(), []);
  const listId = useId();
  const [tab, setTab] = useState('tamil-nadu');
  const [selectedId, setSelectedId] = useState(districts[0]?.id ?? null);
  const [selectedStateId, setSelectedStateId] = useState(beyondTamilNadu[0]?.stateId ?? null);
  const reduceMotion = useReducedMotion();

  const selected = districts.find((d) => d.id === selectedId) ?? null;
  const selectedState = getBeyondState(selectedStateId);
  const districtCounts = useMemo(
    () => Object.fromEntries(districts.map((d) => [d.id, d.count])),
    [districts],
  );

  const isTn = tab === 'tamil-nadu';
  const detailTransition = reduceMotion
    ? { duration: 0 }
    : { duration: duration.base, ease };

  return (
    <section className="home-section home-section--surface" id="places" lang="en">
      <div className="home-container">
        <header className="impact-map__header">
          <p className="chapter__kicker">{impactMapPage.kicker}</p>
          <Heartbeat />
          <h2 className="impact-map__title" id={`${listId}-title`}>
            {impactMapPage.title}
          </h2>
          <p className="impact-map__lede">{impactMapPage.lede}</p>
        </header>

        <motion.div
          className="impact-map"
          variants={fadeUp}
          initial={reduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={viewport}
        >
          <ul className="impact-map__totals" aria-label="Documented impact totals">
            <li>
              <span className="impact-map__totals-number">{totals.locations}</span>
              <span className="impact-map__totals-label">{impactMapPage.totalLabel}</span>
            </li>
            <li>
              <span className="impact-map__totals-number">{totals.districts}</span>
              <span className="impact-map__totals-label">{impactMapPage.districtsLabel}</span>
            </li>
            <li>
              <span className="impact-map__totals-number">{beyondTamilNadu.length}</span>
              <span className="impact-map__totals-label">States beyond TN</span>
            </li>
          </ul>

          <div className="impact-map__tabs" role="tablist" aria-label="Impact map views">
            {impactMapPage.tabs.map((item) => {
              const active = tab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  id={`${listId}-tab-${item.id}`}
                  aria-selected={active}
                  aria-controls={`${listId}-panel`}
                  className={['impact-map__tab', active ? 'is-active' : '']
                    .filter(Boolean)
                    .join(' ')}
                  onClick={() => setTab(item.id)}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <p className="impact-map__hint">
            {isTn ? impactMapPage.selectHint : impactMapPage.beyondSelectHint}
          </p>
          {!isTn && <p className="impact-map__hint">{impactMapPage.beyondNote}</p>}

          <div
            className="impact-map__layout"
            id={`${listId}-panel`}
            role="tabpanel"
            aria-labelledby={`${listId}-tab-${tab}`}
          >
            <div className="impact-map__panel">
              {isTn ? (
                <>
                  <ul className="impact-map__list" aria-label="Tamil Nadu districts on record">
                    {districts.map((district) => {
                      const selectedItem = district.id === selectedId;
                      return (
                        <li key={district.id}>
                          <button
                            type="button"
                            className={[
                              'impact-map__item',
                              selectedItem ? 'impact-map__item--selected' : '',
                            ]
                              .filter(Boolean)
                              .join(' ')}
                            aria-pressed={selectedItem}
                            onClick={() => setSelectedId(district.id)}
                          >
                            <span className="impact-map__pin-icon" aria-hidden="true">
                              <i className="fas fa-map-marker-alt" />
                            </span>
                            <span className="impact-map__item-name">{district.name}</span>
                            <span className="impact-map__item-count">({district.count})</span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>

                  <AnimatePresence mode="wait">
                    {selected && (
                      <motion.div
                        key={selected.id}
                        className="impact-map__detail"
                        initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={reduceMotion ? undefined : { opacity: 0, y: 4 }}
                        transition={detailTransition}
                        aria-live="polite"
                      >
                        <h3 className="impact-map__detail-title">{selected.name}</h3>
                        <p className="impact-map__detail-meta">
                          {selected.count} documented location
                          {selected.count === 1 ? '' : 's'}
                        </p>
                        <ul className="impact-map__cards">
                          {selected.activities.map((activity) => {
                            const kindLabel =
                              impactMapPage.kindLabels?.[activity.kind] || activity.kind;
                            return (
                              <li key={activity.id} className="impact-map__card">
                                {activity.photo ? (
                                  <img
                                    src={activity.photo.src}
                                    alt={activity.photo.alt}
                                    loading="lazy"
                                    decoding="async"
                                  />
                                ) : (
                                  <div className="impact-map__card-empty" aria-hidden="true" />
                                )}
                                {kindLabel && (
                                  <span className="impact-map__location-kind">{kindLabel}</span>
                                )}
                                <span className="impact-map__location-name">{activity.name}</span>
                                <p className="impact-map__location-note">{activity.note}</p>
                                <div className="impact-map__location-links">
                                  {activity.href && <Link to={activity.href}>Story →</Link>}
                                  {activity.archiveHref && (
                                    <Link to={activity.archiveHref}>Archive →</Link>
                                  )}
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <>
                  <ul className="impact-map__list" aria-label="States beyond Tamil Nadu on record">
                    {beyondTamilNadu.map((place) => {
                      const selectedItem = place.stateId === selectedStateId;
                      return (
                        <li key={place.id}>
                          <button
                            type="button"
                            className={[
                              'impact-map__item',
                              selectedItem ? 'impact-map__item--selected' : '',
                            ]
                              .filter(Boolean)
                              .join(' ')}
                            aria-pressed={selectedItem}
                            onClick={() => setSelectedStateId(place.stateId)}
                          >
                            <span className="impact-map__pin-icon" aria-hidden="true">
                              <i className="fas fa-map-marker-alt" />
                            </span>
                            <span className="impact-map__item-name">{place.name}</span>
                            <span className="impact-map__item-count">(1)</span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>

                  <AnimatePresence mode="wait">
                    {selectedState && (
                      <motion.div
                        key={selectedState.id}
                        className="impact-map__detail"
                        initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={reduceMotion ? undefined : { opacity: 0, y: 4 }}
                        transition={detailTransition}
                        aria-live="polite"
                      >
                        <h3 className="impact-map__detail-title">{selectedState.name}</h3>
                        <p className="impact-map__detail-meta">{selectedState.year}</p>
                        <p className="impact-map__location-note">{selectedState.note}</p>
                        <div className="impact-map__location-links">
                          {selectedState.href && (
                            <Link to={selectedState.href}>Relief record →</Link>
                          )}
                          <a href={selectedState.maps} target="_blank" rel="noreferrer">
                            Open place map →
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              )}
            </div>

            <div className="impact-map__visual">
              {isTn ? (
                <TamilNaduMap
                  selectedId={selectedId}
                  onSelect={setSelectedId}
                  districtCounts={districtCounts}
                />
              ) : (
                <IndiaStatesMap
                  selectedId={selectedStateId}
                  onSelect={setSelectedStateId}
                />
              )}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
