import './Heartbeat.css';

/** Red cross + heartbeat line — ambulance motif divider */
export default function Heartbeat({ tone = 'light', className = '' }) {
  return (
    <div
      className={['heartbeat', tone === 'on-red' ? 'heartbeat--on-red' : '', className]
        .filter(Boolean)
        .join(' ')}
      aria-hidden="true"
    >
      <span className="heartbeat__cross" />
      <svg className="heartbeat__line" viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 12 H28 L34 12 L40 4 L48 20 L56 8 L62 12 H120"
          stroke="currentColor"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}
