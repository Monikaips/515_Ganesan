import { motion } from 'framer-motion';
import { duration, ease, staggerDelay } from '../../motion/index.js';
import './RedLine.css';

export const NODE = {
  start: 0.12,
  center: 0.5,
  end: 0.88,
  journey: 0.72,
};

export default function RedLine({
  orientation = 'horizontal',
  node = NODE.journey,
  length = 'full',
  animate = true,
  className = '',
}) {
  const positions = (Array.isArray(node) ? node : [node]).map((value) =>
    Math.min(Math.max(value, 0), 1)
  );
  const isVertical = orientation === 'vertical';
  const classes = [
    'redline',
    isVertical ? 'redline--vertical' : 'redline--horizontal',
    length === 'short' ? 'redline--short' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const trackMotion = animate
    ? {
        initial: isVertical ? { scaleY: 0 } : { scaleX: 0 },
        whileInView: isVertical ? { scaleY: 1 } : { scaleX: 1 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: duration.slow, ease },
      }
    : {};

  return (
    <div className={classes} aria-hidden="true">
      <motion.span className="redline__track" {...trackMotion} />
      {positions.map((value, index) => (
        <motion.span
          key={`${value}-${index}`}
          className="redline__node"
          style={{ '--node': `${value * 100}%` }}
          {...(animate
            ? {
                initial: { scale: 0, x: '-50%', y: '-50%' },
                whileInView: { scale: 1, x: '-50%', y: '-50%' },
                viewport: { once: true, amount: 0.2 },
                transition: {
                  duration: duration.fast,
                  ease,
                  delay: duration.base + index * staggerDelay,
                },
              }
            : {})}
        />
      ))}
    </div>
  );
}
