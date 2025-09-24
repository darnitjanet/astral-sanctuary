import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TarotCard as TarotCardType, DeckStyle } from '../types/tarot';
import CardImageGenerator from './CardImageGenerator';

interface TarotCardProps {
  card: TarotCardType;
  isReversed: boolean;
  isFlipped: boolean;
  deckStyle: DeckStyle;
  position?: string;
  onFlip: () => void;
  onClosePopup?: () => void;
}

const TarotCard: React.FC<TarotCardProps> = ({
  card,
  isReversed,
  isFlipped,
  deckStyle,
  position,
  onFlip
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="card-container" style={{ position: 'relative' }}>
      <motion.div
        className={`tarot-card ${isFlipped ? 'flipped' : ''}`}
        onClick={(e) => {
          e.stopPropagation();
          onFlip();
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.05 }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div
          className="card-face card-front"
          style={{
            transform: 'rotateY(0deg)',
            background: 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <CardImageGenerator
            card={card}
            deckStyle={deckStyle}
            isBack={true}
          />
        </div>

        <div
          className={`card-face card-back ${isReversed ? 'reversed' : ''}`}
          style={{
            transform: `rotateY(180deg) ${isReversed ? 'rotate(180deg)' : ''}`,
            background: 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
          }}
        >
          <CardImageGenerator
            card={card}
            deckStyle={deckStyle}
            isReversed={isReversed}
            isBack={false}
          />
          {position && (
            <div style={{
              fontSize: '0.5rem',
              opacity: 0.7,
              textAlign: 'center',
              marginTop: '0.25rem',
              color: 'var(--gold-accent)',
              fontWeight: 'bold'
            }}>
              {position}
            </div>
          )}
        </div>
      </motion.div>

    </div>
  );
};

export default TarotCard;