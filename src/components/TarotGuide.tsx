import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { majorArcana, minorArcana } from '../data/tarotDeck';
import CardImageGenerator from './CardImageGenerator';

const TarotGuide: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState(majorArcana[0]);
  const [viewMode, setViewMode] = useState<'major' | 'minor'>('major');

  const currentDeck = viewMode === 'major' ? majorArcana : minorArcana;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{
        display: 'grid',
        gridTemplateColumns: '300px 1fr',
        gap: '2rem',
        minHeight: '600px'
      }}
    >
      <div style={{
        background: 'rgba(26, 26, 29, 0.8)',
        padding: '1.5rem',
        borderRadius: '8px',
        border: '1px solid var(--purple-lavender)',
        overflowY: 'auto',
        maxHeight: '600px'
      }}>
        <div style={{
          display: 'flex',
          marginBottom: '1rem',
          background: 'rgba(10, 10, 11, 0.5)',
          borderRadius: '6px',
          padding: '0.25rem'
        }}>
          <button
            onClick={() => setViewMode('major')}
            style={{
              flex: 1,
              padding: '0.5rem',
              background: viewMode === 'major' ? 'var(--purple-royal)' : 'transparent',
              color: 'var(--text-primary)',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '0.9rem'
            }}
          >
            Major Arcana
          </button>
          <button
            onClick={() => setViewMode('minor')}
            style={{
              flex: 1,
              padding: '0.5rem',
              background: viewMode === 'minor' ? 'var(--purple-royal)' : 'transparent',
              color: 'var(--text-primary)',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '0.9rem'
            }}
          >
            Minor Arcana
          </button>
        </div>

        <div style={{ display: 'grid', gap: '0.5rem' }}>
          {currentDeck.map(card => (
            <button
              key={card.id}
              onClick={() => setSelectedCard(card)}
              style={{
                padding: '0.75rem',
                background: selectedCard.id === card.id
                  ? 'linear-gradient(135deg, var(--purple-deep) 0%, var(--purple-royal) 100%)'
                  : 'transparent',
                color: 'var(--text-primary)',
                border: selectedCard.id === card.id ? '1px solid var(--gold-accent)' : '1px solid var(--purple-lavender)',
                borderRadius: '6px',
                cursor: 'pointer',
                textAlign: 'left',
                fontSize: '0.9rem',
                transition: 'all 0.2s ease'
              }}
            >
              {card.name}
            </button>
          ))}
        </div>
      </div>

      <div style={{
        background: 'rgba(26, 26, 29, 0.8)',
        padding: '2rem',
        borderRadius: '8px',
        border: '1px solid var(--green-sage)'
      }}>
        <motion.div
          key={selectedCard.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <CardImageGenerator
              card={selectedCard}
              deckStyle="rider-waite"
              isReversed={false}
              isBack={false}
            />
            <div>
              <h2 style={{ color: 'var(--green-sage)', marginBottom: '0.5rem' }}>
                {selectedCard.name}
              </h2>
              <div style={{
                display: 'flex',
                gap: '1rem',
                fontSize: '0.9rem',
                color: 'var(--text-secondary)'
              }}>
                <span>{selectedCard.arcana} Arcana</span>
                {selectedCard.suit && <span>{selectedCard.suit}</span>}
                {selectedCard.element && <span>{selectedCard.element}</span>}
                {selectedCard.zodiac && <span>{selectedCard.zodiac}</span>}
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gap: '1.5rem' }}>
            <div>
              <h3 style={{ color: 'var(--purple-lavender)', marginBottom: '0.5rem' }}>
                Upright Meaning
              </h3>
              <p style={{ color: 'var(--text-primary)', lineHeight: '1.6' }}>
                {selectedCard.uprightMeaning}
              </p>
            </div>

            <div>
              <h3 style={{ color: 'var(--purple-lavender)', marginBottom: '0.5rem' }}>
                Reversed Meaning
              </h3>
              <p style={{ color: 'var(--text-primary)', lineHeight: '1.6' }}>
                {selectedCard.reversedMeaning}
              </p>
            </div>

            <div>
              <h3 style={{ color: 'var(--purple-lavender)', marginBottom: '0.5rem' }}>
                Description
              </h3>
              <p style={{ color: 'var(--text-primary)', lineHeight: '1.6' }}>
                {selectedCard.description}
              </p>
            </div>

            <div>
              <h3 style={{ color: 'var(--purple-lavender)', marginBottom: '0.5rem' }}>
                Keywords
              </h3>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {selectedCard.keywords.map(keyword => (
                  <span
                    key={keyword}
                    style={{
                      background: 'var(--purple-lavender)',
                      color: 'var(--bg-dark)',
                      padding: '4px 8px',
                      borderRadius: '12px',
                      fontSize: '0.8rem'
                    }}
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TarotGuide;