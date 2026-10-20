import { tamilNaduMap } from '../../data/tamilNaduMap.js';
import { activeDistrictIds } from '../../data/impact.js';
import './ImpactMap.css';

export default function TamilNaduMap({
  selectedId,
  onSelect,
  districtCounts = {},
}) {
  return (
    <div className="tn-map">
      <p className="tn-map__sr-only" id="tn-map-desc">
        Interactive Tamil Nadu map. Districts with documented service are selectable.
        The same districts are listed beside the map.
      </p>
      <svg
        className="tn-map__svg"
        viewBox={tamilNaduMap.viewBox}
        xmlns="http://www.w3.org/2000/svg"
        role="group"
        aria-label="Tamil Nadu district map"
        aria-describedby="tn-map-desc"
      >
        <g className="tn-map__districts">
          {tamilNaduMap.districts.map((district) => {
            const hasRecord = activeDistrictIds.has(district.id);
            const selected = selectedId === district.id;
            const count = districtCounts[district.id] ?? 0;
            const tip = hasRecord
              ? `${district.name}: ${count} documented location${count === 1 ? '' : 's'}`
              : `${district.name}: no documented location in this archive`;

            return (
              <path
                key={district.id}
                id={`tn-district-${district.id}`}
                d={district.path}
                className={[
                  'tn-map__district',
                  hasRecord ? 'tn-map__district--active' : '',
                  selected ? 'tn-map__district--selected' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                tabIndex={hasRecord ? 0 : -1}
                role={hasRecord ? 'button' : undefined}
                aria-label={tip}
                aria-pressed={hasRecord ? selected : undefined}
                onClick={() => hasRecord && onSelect?.(district.id)}
                onKeyDown={(event) => {
                  if (!hasRecord) return;
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    onSelect?.(district.id);
                  }
                }}
              >
                <title>{tip}</title>
              </path>
            );
          })}
        </g>

        <g className="tn-map__markers" aria-hidden="true">
          {tamilNaduMap.districts
            .filter((d) => activeDistrictIds.has(d.id) && d.label)
            .map((district) => {
              const selected = selectedId === district.id;
              const count = districtCounts[district.id] ?? 0;
              return (
                <g
                  key={`marker-${district.id}`}
                  className={[
                    'tn-map__marker',
                    selected ? 'tn-map__marker--selected' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  transform={`translate(${district.label.x} ${district.label.y})`}
                >
                  <circle className="tn-map__pulse" r="10" cx="0" cy="0" />
                  <circle className="tn-map__pin" r={selected ? 6.5 : 5} cx="0" cy="0" />
                  <title>
                    {district.name}: {count} documented
                  </title>
                  <text className="tn-map__label" x="8" y="4">
                    {district.name.toUpperCase()}
                  </text>
                </g>
              );
            })}
        </g>
      </svg>
    </div>
  );
}
