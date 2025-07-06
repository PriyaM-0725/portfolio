import { motion } from 'framer-motion';

export default function NeonOrbit() {
  return (
    <svg
      width={420}
      height={420}
      viewBox="0 0 420 420"
      className="mx-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="g1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="1" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="g2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#c084fc" stopOpacity="1" />
          <stop offset="100%" stopColor="#c084fc" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="g3" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f472b6" stopOpacity="1" />
          <stop offset="100%" stopColor="#f472b6" stopOpacity="0" />
        </radialGradient>
        <filter id="f" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="12" />
        </filter>
      </defs>

      {[
        { r: 190, stroke: 'url(#g1)', dur: 50, dir: 1 },
        { r: 140, stroke: 'url(#g2)', dur: 40, dir: -1 },
        { r: 90, stroke: 'url(#g3)', dur: 35, dir: 1 },
      ].map(({ r, stroke, dur, dir }) => (
        <motion.circle
          key={r}
          cx="210"
          cy="210"
          r={r}
          fill="none"
          stroke={stroke}
          strokeWidth="3"
          filter="url(#f)"
          initial={{ rotate: 0 }}
          animate={{ rotate: dir * 360 }}
          transition={{ repeat: Infinity, duration: dur, ease: 'linear' }}
        />
      ))}
    </svg>
  );
}
