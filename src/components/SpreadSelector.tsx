import React from 'react';
import { motion } from 'framer-motion';
import { SpreadType } from '../types/tarot';
import { spreads } from '../data/spreads';

interface SpreadSelectorProps {
  selectedSpread: SpreadType;
  onSelectSpread: (spread: SpreadType) => void;
}

const SpreadSelector: React.FC<SpreadSelectorProps> = ({
  selectedSpread,
  onSelectSpread
}) => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1rem'
    }}>
      {spreads.map((spread) => (
        <motion.div
          key={spread.type}
          className={`spread-option ${selectedSpread === spread.type ? 'selected' : ''}`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelectSpread(spread.type)}
          style={{
            padding: '1rem',
            background: selectedSpread === spread.type
              ? 'linear-gradient(135deg, var(--purple-deep) 0%, var(--green-forest) 100%)'
              : 'rgba(26, 26, 29, 0.8)',
            border: selectedSpread === spread.type
              ? '2px solid var(--gold-accent)'
              : '1px solid var(--green-sage)',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            textAlign: 'left'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <h4 style={{
              color: selectedSpread === spread.type ? 'var(--text-primary)' : 'var(--green-sage)',
              fontSize: '1rem',
              margin: 0
            }}>
              {spread.name}
            </h4>
            <span style={{
              background: 'var(--purple-lavender)',
              color: 'var(--bg-dark)',
              padding: '2px 8px',
              borderRadius: '12px',
              fontSize: '0.75rem',
              fontWeight: 'bold'
            }}>
              {spread.cardCount} cards
            </span>
          </div>
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '0.85rem',
            lineHeight: '1.4',
            margin: 0
          }}>
            {spread.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default SpreadSelector;