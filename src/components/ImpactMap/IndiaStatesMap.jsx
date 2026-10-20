import { indiaStatesMap } from '../../data/indiaStatesMap.js';
import { activeStateIds } from '../../data/impact.js';
import './ImpactMap.css';

export default function IndiaStatesMap({ selectedId, onSelect }) {
  return (
    <div className="tn-map india-map">
      <p className="tn-map__sr-only" id="india-map-desc">
        Interactive India map showing states with documented relief outside Tamil Nadu.
        Kerala, Karnataka, and Odisha are selectable. The same states are listed beside
        the map.
      </p>
      <svg
        className="tn-map__svg"
        viewBox={indiaStatesMap.viewBox}
        xmlns="http://www.w3.org/2000/svg"
        role="group"
        aria-label="India states with documented relief"
        aria-describedby="india-map-desc"
      >
        <g className="tn-map__districts">
          {indiaStatesMap.states.map((state) => {
            const hasRecord = activeStateIds.has(state.id);
            const selected = selectedId === state.id;
            const tip = hasRecord
              ? `${state.name}: documented relief on record`
              : state.context
                ? `${state.name}: shown for geographic context`
                : state.name;

            return (
              <path
                key={state.id}
                id={`india-state-${state.id}`}
                d={state.path}
                className={[
                  'tn-map__district',
                  state.context ? 'tn-map__district--context' : '',
                  hasRecord ? 'tn-map__district--active' : '',
                  selected ? 'tn-map__district--selected' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                tabIndex={hasRecord ? 0 : -1}
                role={hasRecord ? 'button' : undefined}
                aria-label={tip}
                aria-pressed={hasRecord ? selected : undefined}
                onClick={() => hasRecord && onSelect?.(state.id)}
                onKeyDown={(event) => {
                  if (!hasRecord) return;
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    onSelect?.(state.id);
                  }
                }}
              >
                <title>{tip}</title>
              </path>
            );
          })}
        </g>

        <g className="tn-map__markers" aria-hidden="true">
          {indiaStatesMap.states
            .filter((s) => activeStateIds.has(s.id) && s.label)
            .map((state) => {
              const selected = selectedId === state.id;
              return (
                <g
                  key={`marker-${state.id}`}
                  className={[
                    'tn-map__marker',
                    selected ? 'tn-map__marker--selected' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  transform={`translate(${state.label.x} ${state.label.y})`}
                >
                  <circle className="tn-map__pulse" r="10" cx="0" cy="0" />
                  <circle className="tn-map__pin" r={selected ? 6.5 : 5} cx="0" cy="0" />
                  <title>{state.name}</title>
                  <text className="tn-map__label" x="8" y="4">
                    {state.name.toUpperCase()}
                  </text>
                </g>
              );
            })}
        </g>
      </svg>
    </div>
  );
}
