import React from 'react';
import { motion } from 'framer-motion';
import { DeckStyle } from '../types/tarot';

interface DeckStyleSelectorProps {
  selectedDeck: DeckStyle;
  onSelectDeck: (deck: DeckStyle) => void;
}

const deckStyles: Array<{ style: DeckStyle; name: string; description: string }> = [
  {
    style: 'rider-waite',
    name: 'Rider-Waite-Smith',
    description: 'Classic symbolic imagery with detailed scenes'
  },
  {
    style: 'marseilles',
    name: 'Marseilles',
    description: 'Traditional French geometric patterns, primary colors'
  },
  {
    style: 'thoth',
    name: 'Thoth',
    description: 'Esoteric/occult symbolism with abstract art'
  },
  {
    style: 'cosmic',
    name: 'Cosmic/Celestial',
    description: 'Space-themed with constellations and planets'
  },
  {
    style: 'botanical',
    name: 'Botanical',
    description: 'Nature-inspired with plants and herbs'
  },
  {
    style: 'minimalist',
    name: 'Minimalist Modern',
    description: 'Simple geometric shapes and symbols'
  }
];

const DeckStyleSelector: React.FC<DeckStyleSelectorProps> = ({
  selectedDeck,
  onSelectDeck
}) => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '1rem'
    }}>
      {deckStyles.map((deck) => (
        <motion.div
          key={deck.style}
          className={`deck-style-option ${selectedDeck === deck.style ? 'selected' : ''}`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelectDeck(deck.style)}
          style={{
            padding: '1rem',
            background: selectedDeck === deck.style
              ? 'linear-gradient(135deg, var(--purple-deep) 0%, var(--green-forest) 100%)'
              : 'rgba(26, 26, 29, 0.8)',
            border: selectedDeck === deck.style
              ? '2px solid var(--gold-accent)'
              : '1px solid var(--purple-lavender)',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            textAlign: 'center'
          }}
        >
          <h4 style={{
            color: selectedDeck === deck.style ? 'var(--text-primary)' : 'var(--purple-lavender)',
            marginBottom: '0.5rem',
            fontSize: '1rem'
          }}>
            {deck.name}
          </h4>
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '0.85rem',
            lineHeight: '1.4'
          }}>
            {deck.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default DeckStyleSelector;