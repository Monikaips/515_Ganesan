import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

function formatNumber(value) {
  return new Intl.NumberFormat('en-IN').format(value);
}

/**
 * Counts from 1 up to `value` when `active` is true.
 * Resets when `active` becomes false so it can replay on re-entry.
 */
export default function CountUp({
  value,
  suffix = '',
  active = false,
  duration = 1100,
  className = '',
}) {
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(1);
  const frameRef = useRef(0);

  useEffect(() => {
    cancelAnimationFrame(frameRef.current);

    if (value == null) return undefined;

    if (reduceMotion) {
      setDisplay(value);
      return undefined;
    }

    if (!active) {
      setDisplay(1);
      return undefined;
    }

    const from = 1;
    const to = value;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      // Ease-out cubic: starts fast, settles on the final number
      const eased = 1 - (1 - progress) ** 3;
      const next = Math.round(from + (to - from) * eased);
      setDisplay(Math.max(1, next));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      } else {
        setDisplay(to);
      }
    };

    frameRef.current = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameRef.current);
  }, [value, duration, reduceMotion, active]);

  if (value == null) return null;

  return (
    <span className={className}>
      {formatNumber(display)}
      {suffix}
    </span>
  );
}
