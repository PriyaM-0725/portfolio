import { motion } from 'framer-motion';

export default function NeonAtom() {
  return (
    <div className="w-full flex justify-center items-center">
      <svg
        viewBox="0 0 640 640"
        width="100%"
        height="100%"
        className="max-w-[720px] aspect-square"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="nucleusGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="50%" stopColor="#f472b6" />
            <stop offset="100%" stopColor="#a78bfa" />
          </radialGradient>

          <filter id="glowCyan" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#22d3ee" />
          </filter>
          <filter id="glowPink" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#f472b6" />
          </filter>
          <filter id="glowPurple" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#a78bfa" />
          </filter>
        </defs>

        {/* Nucleus */}
        <circle
          cx="320"
          cy="320"
          r="20"
          fill="url(#nucleusGradient)"
          filter="url(#glowCyan)"
        />

        {/* Orbit 1 */}
        <motion.ellipse
          cx="320"
          cy="320"
          rx="90"
          ry="180"
          stroke="#22d3ee"
          strokeWidth="2.5"
          fill="none"
          filter="url(#glowCyan)"
          animate={{ rotate: 360 }}
          initial={{ rotate: 0 }}
          transition={{ repeat: Infinity, duration: 16, ease: 'linear' }}
          style={{ transformOrigin: '320px 320px' }}
        />

        {/* Orbit 2 */}
        <motion.ellipse
          cx="320"
          cy="320"
          rx="130"
          ry="220"
          stroke="#f472b6"
          strokeWidth="2.5"
          fill="none"
          filter="url(#glowPink)"
          animate={{ rotate: -360 }}
          initial={{ rotate: 0 }}
          transition={{ repeat: Infinity, duration: 22, ease: 'linear' }}
          style={{ transformOrigin: '320px 320px' }}
        />

        {/* Orbit 3 */}
        <motion.ellipse
          cx="320"
          cy="320"
          rx="170"
          ry="260"
          stroke="#a78bfa"
          strokeWidth="2.5"
          fill="none"
          filter="url(#glowPurple)"
          animate={{ rotate: 360 }}
          initial={{ rotate: 0 }}
          transition={{ repeat: Infinity, duration: 28, ease: 'linear' }}
          style={{ transformOrigin: '320px 320px' }}
        />

        {/* Orbit 4 */}
        <motion.ellipse
          cx="320"
          cy="320"
          rx="210"
          ry="300"
          stroke="#22d3ee"
          strokeWidth="2.5"
          fill="none"
          filter="url(#glowCyan)"
          animate={{ rotate: -360 }}
          initial={{ rotate: 0 }}
          transition={{ repeat: Infinity, duration: 34, ease: 'linear' }}
          style={{ transformOrigin: '320px 320px' }}
        />
      </svg>
    </div>
  );
}
