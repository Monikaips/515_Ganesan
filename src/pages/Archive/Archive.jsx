import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import RedLine, { NODE } from '../../components/RedLine/RedLine.jsx';
import ArchiveSlot, { showBuildSlots } from '../../components/ArchiveSlot/ArchiveSlot.jsx';
import ArchiveBadge from '../../components/Archive/ArchiveBadge.jsx';
import ArchiveCard from '../../components/Archive/ArchiveCard.jsx';
import ArchiveFilters from '../../components/Archive/ArchiveFilters.jsx';
import ArchiveConstellation from '../../components/Archive/ArchiveConstellation.jsx';
import ArchiveModal from '../../components/Archive/ArchiveModal.jsx';
import {
  archivePage,
  archiveTabs,
  catalogNeeded,
  itemsForTab,
} from '../../data/catalog.js';
import {
  photoToRecord,
  pressToRecord,
  videoToRecord,
  awardToRecord,
} from '../../data/records.js';
import { awards } from '../../data/awards.js';
import { duration, ease } from '../../motion/index.js';
import './Archive.css';

function toRecord(item) {
  if (item.tab === 'news') return pressToRecord(item);
  if (item.tab === 'videos') return videoToRecord(item);
  if (item.tab === 'awards') {
    const award = awards.find((entry) => `award-${entry.id}` === item.id);
    return award ? awardToRecord(award) : photoToRecord(item);
  }
  return photoToRecord(item);
}

export default function Archive() {
  const [params, setParams] = useSearchParams();
  const requestedTab = ['photos', 'videos', 'news', 'documents', 'awards'].includes(
    params.get('tab'),
  )
    ? params.get('tab')
    : 'photos';
  const visibleTabs = useMemo(
    () =>
      archiveTabs.filter((item) => showBuildSlots || itemsForTab(item.id).length > 0),
    [],
  );
  const tab = visibleTabs.some((item) => item.id === requestedTab)
    ? requestedTab
    : (visibleTabs[0]?.id ?? 'photos');
  const [query, setQuery] = useState('');
  const items = useMemo(() => {
    const all = itemsForTab(tab);
    const needle = query.trim().toLowerCase();
    if (!needle) return all;
    return all.filter((item) => {
      const haystack = [item.title, item.organization, item.year]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();
      return haystack.includes(needle);
    });
  }, [tab, query]);
  const needed = catalogNeeded[tab] ?? [];
  const [active, setActive] = useState(null);
  const records = useMemo(() => items.map(toRecord), [items]);

  const setTab = (id) => {
    setActive(null);
    setQuery('');
    setParams(id === 'photos' ? {} : { tab: id }, { replace: true });
  };

  useEffect(() => {
    if (requestedTab !== tab) {
      setParams(tab === 'photos' ? {} : { tab }, { replace: true });
    }
  }, [requestedTab, tab, setParams]);

  return (
    <div className="doc">
      <section className="archive-hero">
        <p className="chapter__kicker">{archivePage.kicker}</p>
        <RedLine length="short" node={NODE.center} />
        <h1>{archivePage.title}</h1>
        <p className="archive-hero__lede">{archivePage.lede}</p>
      </section>

      <ArchiveConstellation onBranch={setTab} />

      <ArchiveFilters
        tab={tab}
        onTab={setTab}
        query={query}
        onQuery={setQuery}
        tabs={visibleTabs}
      />

      <section className="archive-body">
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: duration.base, ease }}
          >
            {tab === 'news' && !query && (
              <p className="archive-count">
                {items.length} articles
                {items.some((item) => item.year) ? ' · in the record' : ''}
              </p>
            )}

            {items.length > 0 && (
              <div className={tab === 'news' ? 'archive-press' : 'archive-grid'}>
                {items.map((item) => (
                  <ArchiveCard key={item.id} item={item} onOpen={setActive} />
                ))}
              </div>
            )}

            {items.length === 0 && query && (
              <p className="archive-empty">{archivePage.emptySearch}</p>
            )}

            {showBuildSlots && tab === 'documents' && !items.length && !query && (
              <p className="archive-empty">The papers are not in the archive yet.</p>
            )}

            {showBuildSlots && needed.length > 0 && (
              <div className="archive-needed">
                <ArchiveBadge kind="document" />
                <div className="archive-slots">
                  {needed.map((slot) => (
                    <ArchiveSlot key={slot.file} {...slot} />
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </section>

      <ArchiveModal
        record={active ? toRecord(active) : null}
        records={records}
        onClose={() => setActive(null)}
        onSelect={(next) => {
          const match = items.find((item) => item.id === next.id || `award-${next.id}` === item.id);
          setActive(match ?? null);
        }}
      />
    </div>
  );
}
