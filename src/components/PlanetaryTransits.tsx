import React from 'react';
import { motion } from 'framer-motion';
import { Transit } from '../types/astrology';

interface PlanetaryTransitsProps {
  transits: Transit[];
}

const PlanetaryTransits: React.FC<PlanetaryTransitsProps> = ({ transits }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      style={{
        background: 'rgba(26, 26, 29, 0.8)',
        padding: '2rem',
        borderRadius: '12px',
        border: '1px solid var(--green-sage)'
      }}
    >
      <h3 style={{ color: 'var(--green-sage)', marginBottom: '1.5rem', textAlign: 'center' }}>
        Current Planetary Transits
      </h3>
      {transits.length > 0 ? (
        <div style={{ display: 'grid', gap: '1rem' }}>
          {transits.map((transit, index) => (
            <div
              key={index}
              style={{
                padding: '1rem',
                background: 'rgba(16, 185, 129, 0.1)',
                borderRadius: '8px',
                border: '1px solid rgba(16, 185, 129, 0.3)'
              }}
            >
              <h4 style={{ color: 'var(--green-sage)', marginBottom: '0.5rem' }}>
                {transit.planet.charAt(0).toUpperCase() + transit.planet.slice(1)} {transit.type} {transit.aspectTo.planet.charAt(0).toUpperCase() + transit.aspectTo.planet.slice(1)}
              </h4>
              <p style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                {transit.interpretation}
              </p>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                Exact: {transit.exact.toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>
          <p>No major transits today. Enjoy the peaceful cosmic energy!</p>
        </div>
      )}
    </motion.div>
  );
};

export default PlanetaryTransits;