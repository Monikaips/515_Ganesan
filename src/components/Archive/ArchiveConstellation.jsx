import { Link } from 'react-router-dom';
import { constellation } from '../../data/catalog.js';
import { awards } from '../../data/awards.js';
import { sourceById } from '../../data/sources.js';
import './ArchiveConstellation.css';

function leafLabel(id, branchId) {
  if (branchId === 'awards') {
    const award = awards.find((item) => item.id === id);
    return award?.year ?? award?.title ?? id;
  }
  if (id === 'documentary') return 'Documentary';
  return sourceById(id)?.short ?? id;
}

export default function ArchiveConstellation({ onBranch }) {
  return (
    <div className="constellation">
      <p className="constellation__center">515</p>
      <span className="constellation__stem" aria-hidden="true" />

      <div className="constellation__row">
        {constellation.branches.map((branch) => (
          <div key={branch.id} className="constellation__branch">
            <button type="button" onClick={() => onBranch?.(branch.tab)}>
              {branch.label}
            </button>
            <ul>
              {branch.leaves.map((leaf) => (
                <li key={leaf}>
                  <button type="button" onClick={() => onBranch?.(branch.tab, leaf)}>
                    {leafLabel(leaf, branch.id)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <span className="constellation__stem" aria-hidden="true" />
      <Link className="constellation__base" to={constellation.base.href}>
        {constellation.base.label}
      </Link>
    </div>
  );
}
