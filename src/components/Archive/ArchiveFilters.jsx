import { archivePage, archiveTabs } from '../../data/catalog.js';
import './ArchiveFilters.css';

export default function ArchiveFilters({ tab, onTab, query, onQuery, tabs = archiveTabs }) {
  return (
    <div className="archive-filters">
      <nav className="archive-filters__tabs" aria-label="Archive sections">
        {tabs.map((item) => (
          <button
            key={item.id}
            type="button"
            className={item.id === tab ? 'is-active' : ''}
            aria-pressed={item.id === tab}
            onClick={() => onTab(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
      <label className="archive-filters__search">
        <span className="archive-filters__search-label">{archivePage.searchLabel}</span>
        <span className="archive-filters__search-field">
          <i className="fas fa-search" aria-hidden="true" />
          <input
            type="search"
            value={query}
            onChange={(event) => onQuery(event.target.value)}
            placeholder={archivePage.searchPlaceholder}
            autoComplete="off"
          />
        </span>
      </label>
    </div>
  );
}
